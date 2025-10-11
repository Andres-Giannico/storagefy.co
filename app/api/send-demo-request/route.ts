import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, language } = body

    // Validar campos requeridos
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Crear el contenido del email
    const subject = language === 'es' 
      ? `Nueva solicitud de demo - ${name}`
      : `New demo request - ${name}`

    const htmlContent = language === 'es' 
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1E293B; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            Nueva Solicitud de Demo StorageFy
          </h2>
          
          <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E293B; margin-top: 0;">Información del Cliente</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
          </div>
          
          ${message ? `
            <div style="background-color: #F1F5F9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1E293B; margin-top: 0;">Mensaje</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          ` : ''}
          
          <div style="background-color: #7CB342; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">
              🚀 Solicitud enviada desde storagefy.co/demo
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #64748B; font-size: 12px;">
            <p>StorageFy - Software para gestión de trasteros</p>
            <p>Responder a: <a href="mailto:${email}" style="color: #7CB342;">${email}</a></p>
          </div>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1E293B; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            New StorageFy Demo Request
          </h2>
          
          <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E293B; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not specified'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not specified'}</p>
          </div>
          
          ${message ? `
            <div style="background-color: #F1F5F9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1E293B; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          ` : ''}
          
          <div style="background-color: #7CB342; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">
              🚀 Request sent from storagefy.co/demo
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #64748B; font-size: 12px;">
            <p>StorageFy - Storage management software</p>
            <p>Reply to: <a href="mailto:${email}" style="color: #7CB342;">${email}</a></p>
          </div>
        </div>
      `

    // Enviar email a StorageFy
    const { data, error } = await resend.emails.send({
      from: 'StorageFy Demo <demo@storagefy.app>',
      to: ['admin@storagefy.app'],
      subject: subject,
      html: htmlContent,
      replyTo: email,
    })

    if (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Enviar email de confirmación al cliente
    const confirmationSubject = language === 'es' 
      ? 'Confirmación de solicitud de demo - StorageFy'
      : 'Demo request confirmation - StorageFy'

    const confirmationHtml = language === 'es' 
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1E293B; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            ¡Demo Solicitado Exitosamente!
          </h2>
          
          <p>Hola ${name},</p>
          
          <p>Gracias por tu interés en StorageFy. Hemos recibido tu solicitud de demo y nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.</p>
          
          <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E293B; margin-top: 0;">Resumen de tu solicitud</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
          </div>
          
          <div style="background-color: #7CB342; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <h3 style="margin-top: 0;">¿Qué sigue?</h3>
            <p>Nuestro equipo revisará tu solicitud y te contactará para programar una demostración personalizada de StorageFy.</p>
          </div>
          
          <p>Mientras tanto, puedes explorar más sobre StorageFy:</p>
          <ul>
            <li><a href="https://storagefy.co/features" style="color: #7CB342;">Ver características</a></li>
            <li><a href="https://storagefy.co/pricing" style="color: #7CB342;">Consultar precios</a></li>
            <li><a href="https://storagefy.co" style="color: #7CB342;">Visitar nuestro sitio</a></li>
          </ul>
          
          <p>¡Gracias por elegir StorageFy!</p>
          
          <div style="text-align: center; margin-top: 30px; color: #64748B; font-size: 12px;">
            <p>StorageFy - Software para gestión de trasteros</p>
            <p>Ibiza, España 🇪🇸</p>
          </div>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1E293B; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            Demo Request Successful!
          </h2>
          
          <p>Hello ${name},</p>
          
          <p>Thank you for your interest in StorageFy. We have received your demo request and our team will contact you within the next 24 hours.</p>
          
          <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E293B; margin-top: 0;">Your request summary</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not specified'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #7CB342; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <h3 style="margin-top: 0;">What's next?</h3>
            <p>Our team will review your request and contact you to schedule a personalized StorageFy demonstration.</p>
          </div>
          
          <p>In the meantime, you can explore more about StorageFy:</p>
          <ul>
            <li><a href="https://storagefy.co/features" style="color: #7CB342;">View features</a></li>
            <li><a href="https://storagefy.co/pricing" style="color: #7CB342;">Check pricing</a></li>
            <li><a href="https://storagefy.co" style="color: #7CB342;">Visit our site</a></li>
          </ul>
          
          <p>Thank you for choosing StorageFy!</p>
          
          <div style="text-align: center; margin-top: 30px; color: #64748B; font-size: 12px;">
            <p>StorageFy - Storage management software</p>
            <p>Ibiza, Spain 🇪🇸</p>
          </div>
        </div>
      `

    // Enviar email de confirmación
    await resend.emails.send({
      from: 'StorageFy <noreply@storagefy.app>',
      to: [email],
      subject: confirmationSubject,
      html: confirmationHtml,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: language === 'es' 
          ? 'Demo solicitado exitosamente' 
          : 'Demo requested successfully',
        emailId: data?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error in demo request API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
