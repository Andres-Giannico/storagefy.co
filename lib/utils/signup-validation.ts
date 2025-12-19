/**
 * Valida formato de email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida que la contraseña tenga mínimo 6 caracteres
 */
export function isValidPassword(password: string): boolean {
  return password.length >= 6
}

/**
 * Valida formato básico de CIF/NIF español
 * Acepta formatos: X12345678, B12345678, A12345678, etc.
 */
export function isValidCIF(cif: string): boolean {
  // Formato básico: letra seguida de 8 dígitos
  const cifRegex = /^[A-Z][0-9]{8}$/i
  return cifRegex.test(cif.trim())
}

/**
 * Valida campos obligatorios del formulario
 */
export function validateRequiredFields(data: {
  userName?: string
  userEmail?: string
  userPassword?: string
  organizationName?: string
  organizationEmail?: string
  companyId?: string
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.userName || data.userName.trim().length === 0) {
    errors.push('El nombre es requerido')
  }

  if (!data.userEmail || data.userEmail.trim().length === 0) {
    errors.push('El email del usuario es requerido')
  } else if (!isValidEmail(data.userEmail)) {
    errors.push('El email del usuario no tiene un formato válido')
  }

  if (!data.userPassword || data.userPassword.length === 0) {
    errors.push('La contraseña es requerida')
  } else if (!isValidPassword(data.userPassword)) {
    errors.push('La contraseña debe tener al menos 6 caracteres')
  }

  if (!data.organizationName || data.organizationName.trim().length === 0) {
    errors.push('El nombre de la empresa es requerido')
  }

  // organizationEmail ya no es requerido, se usará userEmail si no se proporciona

  if (data.companyId && data.companyId.trim().length > 0 && !isValidCIF(data.companyId)) {
    errors.push('El CIF/NIF debe tener formato válido (letra + 8 dígitos)')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Sanitiza un string para prevenir XSS
 */
export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

