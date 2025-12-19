import { NextRequest, NextResponse } from 'next/server'
import {
  getClientIP,
  checkRateLimit,
  RateLimitConfig,
  createRateLimitResponse,
} from '@/lib/utils/rate-limit'

const STORAGEFY_API_URL =
  process.env.NEXT_PUBLIC_STORAGEFY_API_URL?.replace('/signup', '') ||
  'https://storagefy.app/api/public'
const STORAGEFY_API_KEY = process.env.STORAGEFY_API_KEY || ''

// Construir URL del endpoint de validación
const VALIDATE_PROMO_CODE_URL = `${STORAGEFY_API_URL}/validate-promo-code`

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: máximo 10 intentos por IP cada hora
    // Aplicar ANTES de parsear el body para proteger contra abuso
    const clientIP = getClientIP(request)
    const rateLimitKey = `promo-code:${clientIP}`
    const rateLimitCheck = checkRateLimit(
      rateLimitKey,
      RateLimitConfig.PROMO_CODE.maxAttempts,
      RateLimitConfig.PROMO_CODE.windowMs
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
            'X-RateLimit-Limit': String(RateLimitConfig.PROMO_CODE.maxAttempts),
            'X-RateLimit-Remaining': String(rateLimitCheck.remaining),
            'X-RateLimit-Reset': String(rateLimitCheck.resetAt),
          },
        }
      )
    }

    // Parsear body solo si pasa el rate limiting
    const body = await request.json()
    const { code } = body
    const { language = defaultLanguage } = body

    if (!code || !code.trim()) {
      return NextResponse.json(
        {
          valid: false,
          error:
            language === 'es'
              ? 'Código promocional requerido'
              : 'Promo code is required',
          code: 'MISSING_PROMO_CODE',
        },
        { status: 400 }
      )
    }

    // Llamar a storagefy.app para validar el código
    let apiResponse: Response
    try {
      apiResponse = await fetch(VALIDATE_PROMO_CODE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': STORAGEFY_API_KEY,
        },
        body: JSON.stringify({ code: code.trim().toUpperCase() }),
      })
    } catch (fetchError) {
      console.error('Error calling storagefy.app API:', fetchError)
      return NextResponse.json(
        {
          valid: false,
          error:
            language === 'es'
              ? 'Error al conectar con el servidor. Intenta más tarde.'
              : 'Error connecting to server. Please try again later.',
          code: 'API_CONNECTION_ERROR',
        },
        { status: 500 }
      )
    }

    const data = await apiResponse.json()

    // Si la API retorna error, propagarlo
    if (!apiResponse.ok) {
      return NextResponse.json(
        {
          valid: false,
          error: data.error || 'Código promocional inválido',
          code: data.code || 'INVALID_PROMO_CODE',
        },
        { status: apiResponse.status }
      )
    }

    // Retornar respuesta exitosa
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Error in validate-promo-code API:', error)
    return NextResponse.json(
      {
        valid: false,
        error: 'Error interno del servidor',
        code: 'INTERNAL_ERROR',
      },
      { status: 500 }
    )
  }
}

