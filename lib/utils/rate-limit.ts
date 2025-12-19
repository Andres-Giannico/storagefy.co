/**
 * Sistema de Rate Limiting en memoria
 * Para producción, considerar usar Vercel KV o Redis para mejor escalabilidad
 */

interface RateLimitEntry {
  count: number
  resetAt: number
  attempts: number[] // Timestamps de intentos recientes
}

// Almacenamiento en memoria
const rateLimitStore = new Map<string, RateLimitEntry>()

// Limpiar entradas expiradas cada 5 minutos
if (typeof global !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetAt < now) {
        rateLimitStore.delete(key)
      }
    }
  }, 5 * 60 * 1000)
}

/**
 * Obtiene la IP del cliente desde el request
 */
export function getClientIP(request: Request): string {
  // Intentar obtener IP desde headers comunes (Vercel, Cloudflare, etc.)
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP.trim()
  }

  // Fallback
  return 'unknown'
}

/**
 * Verifica rate limiting basado en clave, intentos máximos y ventana de tiempo
 * @param key Clave única para el rate limit (ej: IP, email, etc.)
 * @param maxAttempts Número máximo de intentos permitidos
 * @param windowMs Ventana de tiempo en milisegundos
 * @returns { allowed: boolean, remaining: number, resetAt: number }
 */
export function checkRateLimit(
  key: string,
  maxAttempts: number,
  windowMs: number
): {
  allowed: boolean
  remaining: number
  resetAt: number
  retryAfter?: number // Segundos hasta que se pueda intentar de nuevo
} {
  const now = Date.now()
  const entry = rateLimitStore.get(key)

  if (!entry) {
    // Primera vez, crear entrada
    const resetAt = now + windowMs
    rateLimitStore.set(key, {
      count: 1,
      resetAt,
      attempts: [now],
    })
    return {
      allowed: true,
      remaining: maxAttempts - 1,
      resetAt,
    }
  }

  // Verificar si la ventana expiró
  if (entry.resetAt < now) {
    // Resetear contador
    const resetAt = now + windowMs
    rateLimitStore.set(key, {
      count: 1,
      resetAt,
      attempts: [now],
    })
    return {
      allowed: true,
      remaining: maxAttempts - 1,
      resetAt,
    }
  }

  // Verificar si excede el límite
  if (entry.count >= maxAttempts) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000)
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetAt,
      retryAfter,
    }
  }

  // Incrementar contador
  entry.count += 1
  entry.attempts.push(now)
  // Mantener solo los últimos 10 intentos para no consumir mucha memoria
  if (entry.attempts.length > 10) {
    entry.attempts = entry.attempts.slice(-10)
  }

  return {
    allowed: true,
    remaining: maxAttempts - entry.count,
    resetAt: entry.resetAt,
  }
}

/**
 * Configuraciones predefinidas de rate limiting
 */
export const RateLimitConfig = {
  // Signup: máximo 3 intentos por IP cada 24 horas
  SIGNUP: {
    maxAttempts: 3,
    windowMs: 24 * 60 * 60 * 1000, // 24 horas
  },
  // Verificación de email: máximo 5 intentos por email cada 15 minutos
  EMAIL_VERIFICATION: {
    maxAttempts: 5,
    windowMs: 15 * 60 * 1000, // 15 minutos
  },
  // Código promocional: máximo 10 intentos por IP cada hora
  PROMO_CODE: {
    maxAttempts: 10,
    windowMs: 60 * 60 * 1000, // 1 hora
  },
} as const

/**
 * Helper para crear respuesta de rate limit excedido
 */
export function createRateLimitResponse(
  retryAfter: number,
  language: 'es' | 'en' = 'es'
) {
  const minutes = Math.ceil(retryAfter / 60)
  const hours = Math.floor(minutes / 60)
  
  let message = ''
  if (language === 'es') {
    if (hours > 0) {
      message = `Demasiados intentos. Por favor espera ${hours} ${hours === 1 ? 'hora' : 'horas'} antes de intentar nuevamente.`
    } else {
      message = `Demasiados intentos. Por favor espera ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'} antes de intentar nuevamente.`
    }
  } else {
    if (hours > 0) {
      message = `Too many attempts. Please wait ${hours} ${hours === 1 ? 'hour' : 'hours'} before trying again.`
    } else {
      message = `Too many attempts. Please wait ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} before trying again.`
    }
  }

  return {
    success: false,
    error: message,
    code: 'RATE_LIMIT_EXCEEDED',
    retryAfter,
  }
}

