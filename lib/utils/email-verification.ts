// Almacenamiento temporal en memoria para códigos de verificación
// En producción, considerar usar Vercel KV para mejor escalabilidad
const verificationCodes = new Map<
  string,
  { code: string; expiresAt: number; email: string }
>()

// Limpiar códigos expirados cada 5 minutos
if (typeof global !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, value] of verificationCodes.entries()) {
      if (value.expiresAt < now) {
        verificationCodes.delete(key)
      }
    }
  }, 5 * 60 * 1000)
}

/**
 * Genera un código de verificación de 6 dígitos
 */
export function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

/**
 * Almacena un código de verificación temporalmente
 * @param email Email del usuario
 * @param code Código de verificación
 * @param ttl Tiempo de vida en minutos (default: 15)
 */
export function storeVerificationCode(
  email: string,
  code: string,
  ttl: number = 15
): void {
  const expiresAt = Date.now() + ttl * 60 * 1000
  verificationCodes.set(email.toLowerCase(), { code, expiresAt, email })
}

/**
 * Valida un código de verificación
 * @param email Email del usuario
 * @param code Código a validar
 * @returns true si el código es válido, false si es inválido o expiró
 */
export function validateVerificationCode(
  email: string,
  code: string
): boolean {
  const stored = verificationCodes.get(email.toLowerCase())
  
  if (!stored) {
    return false
  }
  
  // Verificar expiración
  if (stored.expiresAt < Date.now()) {
    verificationCodes.delete(email.toLowerCase())
    return false
  }
  
  // Verificar código
  if (stored.code !== code) {
    return false
  }
  
  // Código válido, eliminarlo para que no se pueda reusar
  verificationCodes.delete(email.toLowerCase())
  return true
}

/**
 * Obtiene información de un código de verificación (sin eliminarlo)
 * Útil para verificar si existe sin consumirlo
 */
export function getVerificationCodeInfo(email: string): {
  exists: boolean
  expiresAt: number | null
} {
  const stored = verificationCodes.get(email.toLowerCase())
  
  if (!stored) {
    return { exists: false, expiresAt: null }
  }
  
  if (stored.expiresAt < Date.now()) {
    verificationCodes.delete(email.toLowerCase())
    return { exists: false, expiresAt: null }
  }
  
  return { exists: true, expiresAt: stored.expiresAt }
}

/**
 * Elimina un código de verificación
 */
export function deleteVerificationCode(email: string): void {
  verificationCodes.delete(email.toLowerCase())
}

