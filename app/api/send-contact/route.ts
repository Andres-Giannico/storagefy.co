import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, language } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject and message are required' },
        { status: 400 }
      )
    }

    // Skip email sending in development if API key is not configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key') {
      console.log('Resend API key not configured, skipping email send')
      console.log('Contact form data:', { name, email, phone, subject, message })
      return NextResponse.json(
        { 
          success: true, 
          message: language === 'es' 
            ? 'Mensaje enviado exitosamente (modo desarrollo)' 
            : 'Message sent successfully (development mode)',
          emailId: 'dev-mode' 
        },
        { status: 200 }
      )
    }

    const subjectTranslations: Record<string, Record<string, string>> = {
      es: {
        demo: 'Solicitud de Demo',
        pricing: 'Consulta sobre Precios',
        technical: 'Soporte Técnico',
        enterprise: 'Consulta Plan Enterprise',
        other: 'Consulta General'
      },
      en: {
        demo: 'Demo Request',
        pricing: 'Pricing Inquiry',
        technical: 'Technical Support',
        enterprise: 'Enterprise Plan Inquiry',
        other: 'General Inquiry'
      }
    }

    const subjectLabel = subjectTranslations[language][subject] || subject

    // Email to admin
    const adminSubject = `[StorageFy Contact] ${subjectLabel} - ${name}`
    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1E293B 0%, #334155 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .info-row { margin: 15px 0; padding: 15px; background: #f8fafc; border-radius: 8px; }
            .label { font-weight: 600; color: #7CB342; margin-bottom: 5px; }
            .value { color: #334155; }
            .message-box { background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #7CB342; margin-top: 20px; }
            .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">📩 Nuevo Mensaje de Contacto</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">👤 Nombre:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="info-row">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}" style="color: #7CB342;">${email}</a></div>
              </div>
              
              ${phone ? `
                <div class="info-row">
                  <div class="label">📱 Teléfono:</div>
                  <div class="value"><a href="tel:${phone}" style="color: #7CB342;">${phone}</a></div>
                </div>
              ` : ''}
              
              <div class="info-row">
                <div class="label">📋 Asunto:</div>
                <div class="value">${subjectLabel}</div>
              </div>
              
              <div class="message-box">
                <div class="label">💬 Mensaje:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              StorageFy © ${new Date().getFullYear()} · Sistema de Gestión de Trasteros
            </div>
          </div>
        </body>
      </html>
    `

    // Email confirmation to client
    const clientSubject = language === 'es' 
      ? '✅ Hemos recibido tu mensaje - StorageFy'
      : '✅ We received your message - StorageFy'

    const clientHtml = `
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
            .highlight { background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #7CB342; }
            .cta-button { display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #7CB342 0%, #8BC34A 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0 0 10px 0; font-size: 28px;">✅ ${language === 'es' ? '¡Mensaje recibido!' : 'Message received!'}</h1>
              <p style="margin: 0; opacity: 0.9; font-size: 16px;">${language === 'es' ? 'Gracias por contactar con StorageFy' : 'Thank you for contacting StorageFy'}</p>
            </div>
            <div class="content">
              <p>${language === 'es' ? 'Hola' : 'Hello'} <strong>${name}</strong>,</p>
              
              <p>${language === 'es' 
                ? 'Hemos recibido tu mensaje correctamente y nuestro equipo lo revisará en breve.'
                : 'We have received your message and our team will review it shortly.'
              }</p>
              
              <div class="highlight">
                <strong>⏱️ ${language === 'es' ? 'Tiempo de respuesta:' : 'Response time:'}</strong><br>
                ${language === 'es' 
                  ? 'Responderemos a tu consulta en menos de 24 horas laborables.'
                  : 'We will respond to your inquiry within 24 business hours.'
                }
              </div>
              
              <p>${language === 'es' 
                ? '¿Necesitas ayuda inmediata? Contáctanos por teléfono:'
                : 'Need immediate help? Contact us by phone:'
              }</p>
              
              <div style="text-align: center; margin-top: 15px;">
                <p style="margin-bottom: 10px; font-weight: 600;">${language === 'es' ? 'Teléfonos de contacto:' : 'Contact phones:'}</p>
                <p style="margin: 5px 0;"><a href="tel:+34871242618" style="color: #7CB342; text-decoration: none;">+34 871 242 618</a></p>
                <p style="margin: 5px 0;"><a href="tel:+34871242616" style="color: #7CB342; text-decoration: none;">+34 871 242 616</a></p>
                <p style="margin: 5px 0;"><a href="tel:+34871242628" style="color: #7CB342; text-decoration: none;">+34 871 242 628</a> ${language === 'es' ? '(Desarrollo)' : '(Development)'}</p>
              </div>
              
              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <strong>${language === 'es' ? 'Resumen de tu consulta:' : 'Summary of your inquiry:'}</strong><br>
                <strong>${language === 'es' ? 'Asunto:' : 'Subject:'}</strong> ${subjectLabel}<br>
                <strong>${language === 'es' ? 'Fecha:' : 'Date:'}</strong> ${new Date().toLocaleString(language === 'es' ? 'es-ES' : 'en-US')}
              </p>
            </div>
            <div class="footer">
              <p>StorageFy © ${new Date().getFullYear()}</p>
              <p>${language === 'es' ? 'El software más avanzado de gestión de trasteros' : 'The most advanced storage management software'}</p>
              <p>
                <a href="https://storagefy.co" style="color: #7CB342; text-decoration: none;">storagefy.co</a> · 
                <a href="mailto:hello@storagefy.co" style="color: #7CB342; text-decoration: none;">hello@storagefy.co</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to admin
    await resend.emails.send({
      from: 'StorageFy Contact <contact@storagefy.app>',
      to: ['hello@storagefy.co'],
      subject: adminSubject,
      html: adminHtml,
      replyTo: email,
    })

    // Send confirmation to client
    await resend.emails.send({
      from: 'StorageFy <noreply@storagefy.app>',
      to: [email],
      subject: clientSubject,
      html: clientHtml,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: language === 'es' 
          ? 'Mensaje enviado exitosamente. Te responderemos pronto.' 
          : 'Message sent successfully. We\'ll respond soon.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

