import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key')

interface ChatMessage {
  type: 'bot' | 'user'
  content: string
  timestamp: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userName, userContact, messages, language } = body as {
      userName: string
      userContact: string
      messages: ChatMessage[]
      language: string
    }

    if (!userName || !userContact || !messages || messages.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Skip email sending in development if API key is not configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key') {
      console.log('Resend API key not configured, skipping email send')
      console.log('Chatbot transcript:', { userName, userContact, messagesCount: messages.length })
      return NextResponse.json(
        { success: true, emailId: 'dev-mode' },
        { status: 200 }
      )
    }

    // Format chat transcript
    const transcriptHtml = messages.map(msg => {
      const time = new Date(msg.timestamp).toLocaleTimeString(language === 'es' ? 'es-ES' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit'
      })
      
      if (msg.type === 'bot') {
        return `
          <div style="margin: 15px 0; padding: 12px; background: #f8fafc; border-left: 4px solid #7CB342; border-radius: 8px;">
            <div style="font-size: 11px; color: #7CB342; font-weight: 600; margin-bottom: 5px;">🤖 BOT · ${time}</div>
            <div style="color: #334155;">${msg.content}</div>
          </div>
        `
      } else {
        return `
          <div style="margin: 15px 0; padding: 12px; background: #e0f2f1; border-left: 4px solid #1E293B; border-radius: 8px;">
            <div style="font-size: 11px; color: #1E293B; font-weight: 600; margin-bottom: 5px;">👤 ${userName.toUpperCase()} · ${time}</div>
            <div style="color: #334155;">${msg.content}</div>
          </div>
        `
      }
    }).join('')

    // Email to admin with transcript
    const adminSubject = `[StorageFy Chatbot] Conversación con ${userName}`
    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1E293B 0%, #334155 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .info-card { background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb; }
            .label { font-weight: 600; color: #7CB342; margin-bottom: 5px; }
            .value { color: #334155; }
            .transcript { background: #ffffff; padding: 20px; border-radius: 8px; border: 2px solid #e5e7eb; margin-top: 20px; }
            .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">💬 Nueva Conversación de Chatbot</h1>
            </div>
            <div class="content">
              <div class="info-card">
                <div class="label">👤 Nombre del Usuario:</div>
                <div class="value" style="font-size: 18px; font-weight: 600;">${userName}</div>
              </div>
              
              <div class="info-card">
                <div class="label">📞 Información de Contacto:</div>
                <div class="value" style="font-size: 16px;">${userContact}</div>
              </div>
              
              <div class="info-card">
                <div class="label">📊 Estadísticas de la Conversación:</div>
                <div class="value">
                  <strong>${messages.length}</strong> mensajes en total<br>
                  <strong>${messages.filter(m => m.type === 'user').length}</strong> preguntas del usuario<br>
                  <strong>${messages.filter(m => m.type === 'bot').length}</strong> respuestas del bot
                </div>
              </div>
              
              <div class="transcript">
                <h3 style="margin-top: 0; color: #1E293B; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
                  📝 Transcripción Completa
                </h3>
                ${transcriptHtml}
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #7CB342;">
                <strong>💡 Próximos Pasos:</strong><br>
                Contacta a ${userName} en: <strong>${userContact}</strong><br>
                Para dar seguimiento a sus consultas.
              </div>
            </div>
            <div class="footer">
              StorageFy © ${new Date().getFullYear()} · Sistema de Gestión de Trasteros
            </div>
          </div>
        </body>
      </html>
    `

    // Confirmation email to user
    const clientSubject = language === 'es'
      ? '✅ Gracias por chatear con StorageFy'
      : '✅ Thank you for chatting with StorageFy'

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
            .cta-button { display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #7CB342 0%, #8BC34A 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px 5px; }
            .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0 0 10px 0; font-size: 28px;">✅ ${language === 'es' ? '¡Gracias por chatear!' : 'Thanks for chatting!'}</h1>
              <p style="margin: 0; opacity: 0.9; font-size: 16px;">${language === 'es' ? 'Conversación guardada con StorageFy' : 'Conversation saved with StorageFy'}</p>
            </div>
            <div class="content">
              <p>${language === 'es' ? 'Hola' : 'Hello'} <strong>${userName}</strong>,</p>
              
              <p>${language === 'es'
                ? 'Gracias por usar nuestro chatbot. Hemos guardado la conversación y nuestro equipo la revisará para darte el mejor seguimiento posible.'
                : 'Thank you for using our chatbot. We have saved the conversation and our team will review it to give you the best possible follow-up.'
              }</p>
              
              <div class="highlight">
                <strong>💬 ${language === 'es' ? 'Tu conversación:' : 'Your conversation:'}</strong><br>
                ${messages.length} ${language === 'es' ? 'mensajes intercambiados' : 'messages exchanged'}<br>
                ${new Date().toLocaleString(language === 'es' ? 'es-ES' : 'en-US')}
              </div>
              
              <p><strong>${language === 'es' ? '¿Necesitas más ayuda?' : 'Need more help?'}</strong></p>
              
              <div style="text-align: center;">
                <a href="https://wa.me/34654082728" class="cta-button">
                  📱 WhatsApp
                </a>
                <a href="mailto:hello@storagefy.co" class="cta-button">
                  ✉️ Email
                </a>
                <a href="https://storagefy.co/demo" class="cta-button">
                  🎯 ${language === 'es' ? 'Ver Demo' : 'See Demo'}
                </a>
              </div>
              
              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #64748b;">
                ${language === 'es'
                  ? 'Te contactaremos pronto en: <strong>' + userContact + '</strong>'
                  : 'We\'ll contact you soon at: <strong>' + userContact + '</strong>'
                }
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
      from: 'StorageFy Chatbot <chatbot@storagefy.app>',
      to: ['hello@storagefy.co'],
      subject: adminSubject,
      html: adminHtml,
    })

    // Send confirmation to user (if email provided)
    if (userContact.includes('@')) {
      await resend.emails.send({
        from: 'StorageFy <noreply@storagefy.app>',
        to: [userContact],
        subject: clientSubject,
        html: clientHtml,
      })
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending chatbot transcript:', error)
    return NextResponse.json(
      { error: 'Failed to send transcript' },
      { status: 500 }
    )
  }
}

