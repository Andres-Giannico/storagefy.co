export interface SignupFormData {
  // Obligatorios
  userName: string
  userEmail: string
  userPassword: string
  organizationName: string
  organizationEmail?: string // Opcional, se usará userEmail si no se proporciona
  taxId?: string // NIF/CIF (opcional, va en taxId, no en companyId)
  
  // Opcionales - empresa
  phone?: string
  address?: string
  city?: string
  postalCode?: string
  country?: string
  businessType?: 'STORAGE' | 'PARKING' | 'MIXED'
  
  // Opcionales - preguntas
  wantsVerifacti?: boolean
  heardFrom?: string
  numLocations?: number
  numUnits?: number
  currentSystem?: string
  mainNeeds?: string[]
  expectedStartDate?: string
  additionalComments?: string
  
  // Código promocional
  promoCode?: string
  
  // Verificación de email
  emailVerified?: boolean // true si verificó, false si saltó
}

export interface SignupPayload {
  // Obligatorios
  organizationName: string
  organizationEmail: string // Se usa userEmail si no se proporciona
  userName: string
  userEmail: string
  userPassword: string
  
  // Opcionales - empresa
  taxId?: string // NIF/CIF (opcional, va en taxId)
  phone?: string
  address?: string
  city?: string
  postalCode?: string
  country?: string
  businessType?: 'STORAGE' | 'PARKING' | 'MIXED'
  
  // Preguntas opcionales
  wantsVerifacti?: boolean
  heardFrom?: string
  signupQuestions?: {
    numLocations?: number
    numUnits?: number
    currentSystem?: string
    mainNeeds?: string[]
    expectedStartDate?: string
    additionalComments?: string
  }
  
  // Código promocional
  promoCode?: string
  
  // Verificación de email
  emailVerified?: boolean // true si verificó, false si saltó
  
  // Metadata
  source?: string
  referrer?: string
}

export interface SignupApiResponse {
  success: boolean
  organizationId?: string
  userId?: string
  organizationName?: string
  organizationEmail?: string
  userEmail?: string
  status?: string
  message?: string
  error?: string
  code?: string
  details?: Array<{
    path: string[]
    message: string
  }>
}

