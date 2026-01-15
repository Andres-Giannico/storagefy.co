import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { articleId, feedback, comment, articleTitle, articleUrl, language } = body

    if (!articleId || !feedback) {
      return NextResponse.json(
        { error: 'Article ID and feedback are required' },
        { status: 400 }
      )
    }

    // Skip email sending in development if API key is not configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key') {
      console.log('Resend API key not configured, skipping email send')
      console.log('Help feedback data:', { articleId, feedback, comment, articleTitle })
      return NextResponse.json(
        { 
          success: true, 
          message: language === 'es' 
            ? 'Feedback enviado exitosamente (modo desarrollo)' 
            : 'Feedback sent successfully (development mode)'
        },
        { status: 200 }
      )
    }

    const feedbackLabel = feedback === 'positive' 
      ? (language === 'es' ? '✅ Positivo' : '✅ Positive')
      : (language === 'es' ? '❌ Negativo' : '❌ Negative')

    const adminSubject = `[StorageFy Help] Feedback sobre artículo: ${articleTitle || articleId}`

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
            .feedback-box { background: ${feedback === 'positive' ? '#d4edda' : '#f8d7da'}; padding: 20px; border-radius: 8px; border-left: 4px solid ${feedback === 'positive' ? '#28a745' : '#dc3545'}; margin-top: 20px; }
            .comment-box { background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #7CB342; margin-top: 20px; }
            .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">📝 Feedback de Ayuda</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">📄 Artículo:</div>
                <div class="value">
                  ${articleTitle || articleId}
                  ${articleUrl ? `<br><a href="${articleUrl}" style="color: #7CB342; font-size: 14px;">Ver artículo</a>` : ''}
                </div>
              </div>
              
              <div class="info-row">
                <div class="label">🆔 ID del Artículo:</div>
                <div class="value">${articleId}</div>
              </div>
              
              <div class="feedback-box">
                <div class="label">${feedbackLabel}</div>
                <div class="value" style="font-size: 18px; margin-top: 10px;">
                  ${feedback === 'positive' 
                    ? (language === 'es' ? 'El usuario encontró útil este artículo' : 'User found this article helpful')
                    : (language === 'es' ? 'El usuario NO encontró útil este artículo' : 'User did NOT find this article helpful')
                  }
                </div>
              </div>
              
              ${comment ? `
                <div class="comment-box">
                  <div class="label">💬 Comentario del usuario:</div>
                  <div class="value" style="white-space: pre-wrap; margin-top: 10px;">${comment}</div>
                </div>
              ` : ''}
              
              <div class="info-row" style="margin-top: 20px;">
                <div class="label">🕐 Fecha y hora:</div>
                <div class="value">${new Date().toLocaleString(language === 'es' ? 'es-ES' : 'en-US')}</div>
              </div>
            </div>
            <div class="footer">
              StorageFy © ${new Date().getFullYear()} · Sistema de Gestión de Trasteros
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to admin
    await resend.emails.send({
      from: 'StorageFy Help <help@storagefy.app>',
      to: ['hello@storagefy.co'],
      subject: adminSubject,
      html: adminHtml,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: language === 'es' 
          ? 'Gracias por tu feedback' 
          : 'Thanks for your feedback'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending help feedback:', error)
    return NextResponse.json(
      { error: 'Failed to send feedback' },
      { status: 500 }
    )
  }
}

