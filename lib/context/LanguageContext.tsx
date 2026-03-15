'use client'

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react'

interface LanguageContextType {
  language: 'es' | 'en'
  setLanguage: (lang: 'es' | 'en') => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traducciones básicas
const translations = {
  es: {
    // Navbar
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.help': 'Ayuda',
    'nav.blog': 'Blog',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.signIn': 'Iniciar Sesión',
    'nav.language': 'Idioma',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
  },
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.help': 'Help',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.signIn': 'Sign In',
    'nav.language': 'Language',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Siempre iniciar con 'es' para evitar hydration mismatch (server no tiene acceso a URL/localStorage)
  const [language, setLanguageState] = useState<'es' | 'en'>('es')
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!hasInitialized.current) {
      hasInitialized.current = true
      const url = new URL(window.location.href)
      const langParam = url.searchParams.get('lang')
      if (langParam === 'en' || langParam === 'es') {
        setLanguageState(langParam)
        return
      }
      const saved = localStorage.getItem('storagefy-language')
      if (saved === 'en' || saved === 'es') {
        setLanguageState(saved)
      }
      return
    }
    // Sincronizar a localStorage y URL cuando cambie (tras init)
    localStorage.setItem('storagefy-language', language)
    const url = new URL(window.location.href)
    if (url.searchParams.get('lang') !== language) {
      url.searchParams.set('lang', language)
      window.history.replaceState({}, '', url.toString())
    }
  }, [language])

  // Función para cambiar idioma
  const setLanguage = (lang: 'es' | 'en') => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('storagefy-language', lang)
      // Actualizar URL actual
      const url = new URL(window.location.href)
      url.searchParams.set('lang', lang)
      window.history.replaceState({}, '', url.toString())
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
