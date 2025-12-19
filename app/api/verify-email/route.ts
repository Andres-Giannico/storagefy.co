import { NextRequest, NextResponse } from 'next/server'
import { validateVerificationCode } from '@/lib/utils/email-verification'
import {
  checkRateLimit,
  RateLimitConfig,
  createRateLimitResponse,
} from '@/lib/utils/rate-limit'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, code, language = 'es' } = body

    // Rate limiting: máximo 5 intentos por email cada 15 minutos
    if (email) {
      const rateLimitKey = `email-verify:${email.toLowerCase()}`
      const rateLimitCheck = checkRateLimit(
        rateLimitKey,
        RateLimitConfig.EMAIL_VERIFICATION.maxAttempts,
        RateLimitConfig.EMAIL_VERIFICATION.windowMs
      )

      if (!rateLimitCheck.allowed) {
        return NextResponse.json(
          createRateLimitResponse(rateLimitCheck.retryAfter || 900, language),
          {
            status: 429,
            headers: {
              'Retry-After': String(rateLimitCheck.retryAfter || 900),
              'X-RateLimit-Limit': String(
                RateLimitConfig.EMAIL_VERIFICATION.maxAttempts
              ),
              'X-RateLimit-Remaining': String(rateLimitCheck.remaining),
              'X-RateLimit-Reset': String(rateLimitCheck.resetAt),
            },
          }
        )
      }
    }

    // Validar campos requeridos
    if (!email || !code) {
      return NextResponse.json(
        {
          success: false,
          error:
            language === 'es'
              ? 'Email y código son requeridos'
              : 'Email and code are required',
          code: 'VALIDATION_ERROR',
        },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error:
            language === 'es'
              ? 'Email no válido'
              : 'Invalid email format',
          code: 'VALIDATION_ERROR',
        },
        { status: 400 }
      )
    }

    // Validar código
    const isValid = validateVerificationCode(email, code)

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          error:
            language === 'es'
              ? 'Código de verificación inválido o expirado'
              : 'Invalid or expired verification code',
          code: 'INVALID_CODE',
        },
        { status: 400 }
      )
    }

    // Código válido
    return NextResponse.json(
      {
        success: true,
        message:
          language === 'es'
            ? 'Email verificado exitosamente'
            : 'Email verified successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in verify-email API:', error)
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

