import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import {
  getClientIP,
  checkRateLimit,
  createRateLimitResponse,
} from '@/lib/utils/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key')

const DEMO_ACCESS_RATE_LIMIT = {
  maxAttempts: 5,
  windowMs: 60 * 60 * 1000, // 1 hora por IP
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, language } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const ip = getClientIP(request)
    const rateLimitKey = `demo-access:${ip}`
    const { allowed, retryAfter } = checkRateLimit(
      rateLimitKey,
      DEMO_ACCESS_RATE_LIMIT.maxAttempts,
      DEMO_ACCESS_RATE_LIMIT.windowMs
    )

    if (!allowed && retryAfter) {
      const rateLimitBody = createRateLimitResponse(retryAfter, language as 'es' | 'en')
      return NextResponse.json(rateLimitBody, {
        status: 429,
        headers: {
          'Retry-After': String(retryAfter),
        },
      })
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key') {
      console.log('Resend API key not configured, skipping email send')
      return NextResponse.json(
        {
          success: true,
          message:
            language === 'es'
              ? 'Acceso demo solicitado (modo desarrollo)'
              : 'Demo access requested (development mode)',
        },
        { status: 200 }
      )
    }

    const subject =
      language === 'es'
        ? `Nueva solicitud acceso demo - ${name}`
        : `New demo access request - ${name}`

    const htmlContent =
      language === 'es'
        ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1E293B; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            Nueva Solicitud de Acceso Demo - Campaña Email
          </h2>
          
          <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E293B; margin-top: 0;">Información del solicitante</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #7CB342;">${email}</a></p>
          </div>
          
          <div style="background-color: #7CB342; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">
              Solicitud enviada desde storagefy.co/demo-trial
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #64748B; font-size: 12px;">
            <p>StorageFy - Software para gestión de trasteros</p>
          </div>
        </div>
      `
        : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1E293B; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            New Demo Access Request - Email Campaign
          </h2>
          
          <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E293B; margin-top: 0;">Applicant information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #7CB342;">${email}</a></p>
          </div>
          
          <div style="background-color: #7CB342; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">
              Request sent from storagefy.co/demo-trial
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #64748B; font-size: 12px;">
            <p>StorageFy - Storage management software</p>
          </div>
        </div>
      `

    const { error } = await resend.emails.send({
      from: 'StorageFy Demo <demo@storagefy.app>',
      to: ['hello@storagefy.co'],
      subject,
      html: htmlContent,
      replyTo: email,
    })

    if (error) {
      console.error('Error sending demo access email:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json(
      {
        success: true,
        message:
          language === 'es'
            ? 'Acceso solicitado correctamente'
            : 'Access requested successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in demo access API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
