export const CONSENT_VERSION = '2024-11-15'

export type CookieCategory = 'necessary' | 'preferences' | 'analytics' | 'marketing'

export interface CookieCategoryDescriptor {
  id: CookieCategory
  title: {
    es: string
    en: string
  }
  description: {
    es: string
    en: string
  }
  required: boolean
}

export type CookieStatus = 'active' | 'planned'

export interface CookieDescriptor {
  id: string
  name: string
  provider: string
  category: CookieCategory
  duration: string
  storage: 'cookie' | 'localStorage' | 'sessionStorage'
  purpose: {
    es: string
    en: string
  }
  status: CookieStatus
  regulationNotes?: string
}

export const cookieCategories: CookieCategoryDescriptor[] = [
  {
    id: 'necessary',
    title: { es: 'Estrictamente necesarias', en: 'Strictly necessary' },
    description: {
      es: 'Garantizan el funcionamiento básico del sitio (seguridad, preferencias fundamentales, balanceo). No requieren consentimiento.',
      en: 'Guarantee the basic operation of the site (security, core preferences, load balancing). Consent is not required.',
    },
    required: true,
  },
  {
    id: 'preferences',
    title: { es: 'Preferencias', en: 'Preferences' },
    description: {
      es: 'Permiten recordar idioma, región o personalización de la experiencia. Puedes rechazarlas sin impacto crítico.',
      en: 'Let us remember language, region or UI customization. You may reject them without critical impact.',
    },
    required: false,
  },
  {
    id: 'analytics',
    title: { es: 'Analíticas', en: 'Analytics' },
    description: {
      es: 'Nos ayudan a medir el rendimiento del sitio y mejorar funciones usando datos agregados (Google Analytics, etc.).',
      en: 'Help us measure site performance and improve features using aggregated data (Google Analytics, etc.).',
    },
    required: false,
  },
  {
    id: 'marketing',
    title: { es: 'Marketing', en: 'Marketing' },
    description: {
      es: 'Activan herramientas publicitarias de Google y partners para personalizar campañas y medir conversiones.',
      en: 'Enable Google and partner advertising tools to personalize campaigns and measure conversions.',
    },
    required: false,
  },
]

export const cookieInventory: CookieDescriptor[] = [
  {
    id: 'sfy_consent',
    name: 'sfy_consent',
    provider: 'StorageFy',
    category: 'necessary',
    duration: '6 meses',
    storage: 'localStorage',
    purpose: {
      es: 'Almacena el consentimiento granular de cookies y la versión aceptada para demostrar cumplimiento.',
      en: 'Stores granular cookie consent and accepted version for compliance evidence.',
    },
    status: 'active',
    regulationNotes: 'Documentar aceptación con sello de tiempo y versión.',
  },
  {
    id: '_ga',
    name: '_ga',
    provider: 'Google Analytics 4',
    category: 'analytics',
    duration: '2 años',
    storage: 'cookie',
    purpose: {
      es: 'Diferenciar usuarios únicos para métricas agregadas de tráfico.',
      en: 'Distinguishes unique users for aggregated traffic metrics.',
    },
    status: 'planned',
  },
  {
    id: '_ga_measurement',
    name: `_ga_${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'XXXX'}`,
    provider: 'Google Analytics 4',
    category: 'analytics',
    duration: '90 días',
    storage: 'cookie',
    purpose: {
      es: 'Mantiene la sesión asociada al ID de medición específico.',
      en: 'Keeps the session tied to the specific GA4 measurement ID.',
    },
    status: 'planned',
  },
  {
    id: '_gid',
    name: '_gid',
    provider: 'Google Analytics 4',
    category: 'analytics',
    duration: '24 horas',
    storage: 'cookie',
    purpose: {
      es: 'Agrupa interacciones por sesión para informes diarios.',
      en: 'Groups interactions per session for day-level reporting.',
    },
    status: 'planned',
  },
  {
    id: '_gcl_au',
    name: '_gcl_au',
    provider: 'Google Ads',
    category: 'marketing',
    duration: '90 días',
    storage: 'cookie',
    purpose: {
      es: 'Rastrea conversiones de campañas publicitarias en sitios y apps.',
      en: 'Tracks ad campaign conversions across sites and apps.',
    },
    status: 'planned',
  },
  {
    id: 'IDE',
    name: 'IDE',
    provider: 'Google DoubleClick',
    category: 'marketing',
    duration: '13 meses',
    storage: 'cookie',
    purpose: {
      es: 'Registra e informa interacciones del usuario con anuncios para personalizar campañas.',
      en: 'Records and reports user interactions with ads to personalize campaigns.',
    },
    status: 'planned',
  },
]

export const cookieCategoryOrder: CookieCategory[] = ['necessary', 'preferences', 'analytics', 'marketing']


