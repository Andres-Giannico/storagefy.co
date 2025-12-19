import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import {
  validateRequiredFields,
  isValidEmail,
  isValidPassword,
} from '@/lib/utils/signup-validation'
import {
  generateVerificationCode,
  storeVerificationCode,
} from '@/lib/utils/email-verification'
import {
  getClientIP,
  checkRateLimit,
  RateLimitConfig,
  createRateLimitResponse,
} from '@/lib/utils/rate-limit'
import type { SignupPayload, SignupFormData } from '@/lib/types/signup'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key')
const STORAGEFY_API_URL =
  process.env.NEXT_PUBLIC_STORAGEFY_API_URL || 'https://storagefy.app/api/public/signup'
const STORAGEFY_API_KEY = process.env.STORAGEFY_API_KEY || ''

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: máximo 3 intentos por IP cada 24 horas
    // Aplicar ANTES de parsear el body para proteger contra abuso
    const clientIP = getClientIP(request)
    const rateLimitKey = `signup:${clientIP}`
    const rateLimitCheck = checkRateLimit(
      rateLimitKey,
      RateLimitConfig.SIGNUP.maxAttempts,
      RateLimitConfig.SIGNUP.windowMs
    )

    // Obtener language del header Accept-Language si está disponible
    const acceptLanguage = request.headers.get('accept-language') || ''
    const defaultLanguage = acceptLanguage.includes('en') ? 'en' : 'es'

    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        createRateLimitResponse(rateLimitCheck.retryAfter || 3600, defaultLanguage),
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimitCheck.retryAfter || 3600),
            'X-RateLimit-Limit': String(RateLimitConfig.SIGNUP.maxAttempts),
            'X-RateLimit-Remaining': String(rateLimitCheck.remaining),
            'X-RateLimit-Reset': String(rateLimitCheck.resetAt),
          },
        }
      )
    }

    // Parsear body solo si pasa el rate limiting
    const body: SignupFormData = await request.json()
    const { language = defaultLanguage } = body as any

    // Validar campos obligatorios (organizationEmail y taxId ya no son requeridos)
    const validation = validateRequiredFields({
      userName: body.userName,
      userEmail: body.userEmail,
      userPassword: body.userPassword,
      organizationName: body.organizationName,
      organizationEmail: body.organizationEmail || body.userEmail, // Usar userEmail si no se proporciona
      companyId: body.taxId || '', // Validar taxId si se proporciona (pasa como companyId para la función de validación)
    })

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Datos inválidos o faltantes',
          code: 'VALIDATION_ERROR',
          details: validation.errors.map((error) => ({
            path: [],
            message: error,
          })),
        },
        { status: 400 }
      )
    }

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Datos inválidos o faltantes',
          code: 'VALIDATION_ERROR',
          details: validation.errors.map((error) => ({
            path: [],
            message: error,
          })),
        },
        { status: 400 }
      )
    }

    // Preparar payload para storagefy.app
    // Usar userEmail como organizationEmail si no se proporciona uno diferente
    const organizationEmail = body.organizationEmail?.trim() || body.userEmail.trim()
    
    const payload: SignupPayload = {
      organizationName: body.organizationName.trim(),
      organizationEmail: organizationEmail,
      userName: body.userName.trim(),
      userEmail: body.userEmail.trim(),
      userPassword: body.userPassword,
      emailVerified: body.emailVerified ?? false, // false por defecto si no se envía
      source: 'storagefy.co-signup',
      referrer: request.headers.get('referer') || undefined,
    }

    // Agregar taxId solo si se proporciona (opcional - NIF/CIF)
    if (body.taxId && body.taxId.trim().length > 0) {
      payload.taxId = body.taxId.trim().toUpperCase()
    }

    // Agregar promoCode si se proporciona y está validado
    if (body.promoCode && body.promoCode.trim().length > 0) {
      payload.promoCode = body.promoCode.trim().toUpperCase()
    }

    // Agregar campos opcionales si existen
    if (body.phone) payload.phone = body.phone.trim()
    if (body.address) payload.address = body.address.trim()
    if (body.city) payload.city = body.city.trim()
    if (body.postalCode) payload.postalCode = body.postalCode.trim()
    if (body.country) payload.country = body.country.trim()
    if (body.businessType) payload.businessType = body.businessType

    // Agregar preguntas opcionales
    if (
      body.wantsVerifacti !== undefined ||
      body.heardFrom ||
      body.numLocations ||
      body.numUnits ||
      body.currentSystem ||
      body.mainNeeds ||
      body.expectedStartDate ||
      body.additionalComments
    ) {
      payload.wantsVerifacti = body.wantsVerifacti
      payload.heardFrom = body.heardFrom
      payload.signupQuestions = {}
      if (body.numLocations) payload.signupQuestions.numLocations = body.numLocations
      if (body.numUnits) payload.signupQuestions.numUnits = body.numUnits
      if (body.currentSystem)
        payload.signupQuestions.currentSystem = body.currentSystem
      if (body.mainNeeds) payload.signupQuestions.mainNeeds = body.mainNeeds
      if (body.expectedStartDate)
        payload.signupQuestions.expectedStartDate = body.expectedStartDate
      if (body.additionalComments)
        payload.signupQuestions.additionalComments = body.additionalComments
    }

    // Llamar a la API de storagefy.app
    let apiResponse: Response
    try {
      apiResponse = await fetch(STORAGEFY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': STORAGEFY_API_KEY,
        },
        body: JSON.stringify(payload),
      })
    } catch (fetchError) {
      console.error('Error calling storagefy.app API:', fetchError)
      return NextResponse.json(
        {
          success: false,
          error:
            language === 'es'
              ? 'Error al conectar con el servidor. Intenta más tarde.'
              : 'Error connecting to server. Please try again later.',
          code: 'API_CONNECTION_ERROR',
        },
        { status: 500 }
      )
    }

    const apiData = await apiResponse.json()

    // Si la API retorna error, propagarlo
    if (!apiResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: apiData.error || 'Error al crear la cuenta',
          code: apiData.code || 'API_ERROR',
          details: apiData.details,
        },
        { status: apiResponse.status }
      )
    }

    // Si la cuenta se creó exitosamente, generar código de verificación
    const verificationCode = generateVerificationCode()
    storeVerificationCode(body.userEmail, verificationCode, 15)

    // Enviar email de verificación
    const isDevMode =
      !process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key'

    if (!isDevMode) {
      const verificationSubject =
        language === 'es'
          ? 'Verifica tu email - StorageFy'
          : 'Verify your email - StorageFy'

      const verificationHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #7CB342 0%, #8BC34A 100%); color: white; padding: 40px 30px; border-radius: 10px 10px 0 0; text-align: center; }
              .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
              .code-box { background: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0; border: 2px dashed #7CB342; }
              .code { font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #7CB342; font-family: monospace; }
              .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0 0 10px 0; font-size: 28px;">
                  ${language === 'es' ? 'Verifica tu email' : 'Verify your email'}
                </h1>
                <p style="margin: 0; opacity: 0.9; font-size: 16px;">
                  ${language === 'es' ? 'Código de verificación' : 'Verification code'}
                </p>
              </div>
              <div class="content">
                <p>${language === 'es' ? 'Hola' : 'Hello'} <strong>${body.userName}</strong>,</p>
                
                <p>
                  ${
                    language === 'es'
                      ? 'Gracias por registrarte en StorageFy. Para completar tu registro, ingresa el siguiente código de verificación:'
                      : 'Thank you for signing up for StorageFy. To complete your registration, please enter the following verification code:'
                  }
                </p>
                
                <div class="code-box">
                  <div class="code">${verificationCode}</div>
                </div>
                
                <p style="color: #64748B; font-size: 14px;">
                  ${
                    language === 'es'
                      ? 'Este código expira en 15 minutos.'
                      : 'This code expires in 15 minutes.'
                  }
                </p>
                
                <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  ${
                    language === 'es'
                      ? 'Si no solicitaste este código, puedes ignorar este email.'
                      : 'If you did not request this code, you can ignore this email.'
                  }
                </p>
              </div>
              <div class="footer">
                <p>StorageFy © ${new Date().getFullYear()}</p>
                <p>
                  <a href="https://storagefy.co" style="color: #7CB342; text-decoration: none;">storagefy.co</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `

      try {
        await resend.emails.send({
          from: 'StorageFy <noreply@storagefy.app>',
          to: [body.userEmail],
          subject: verificationSubject,
          html: verificationHtml,
        })
      } catch (emailError) {
        console.error('Error sending verification email:', emailError)
        // No fallar el signup si falla el email, solo loguear
      }
    } else {
      console.log('Dev mode: Verification code:', verificationCode)
    }

    // Retornar éxito
    return NextResponse.json(
      {
        success: true,
        organizationId: apiData.organizationId,
        userId: apiData.userId,
        organizationName: apiData.organizationName,
        organizationEmail: apiData.organizationEmail,
        userEmail: apiData.userEmail,
        status: 'pending',
        message:
          language === 'es'
            ? 'Cuenta creada exitosamente. Revisa tu email para verificar tu cuenta.'
            : 'Account created successfully. Please check your email to verify your account.',
        verificationCode: isDevMode ? verificationCode : undefined, // Solo en dev
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in signup API:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Error interno del servidor',
        code: 'INTERNAL_ERROR',
      },
      { status: 500 }
    )
  }
}

