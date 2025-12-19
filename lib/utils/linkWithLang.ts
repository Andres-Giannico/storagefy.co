'use client'

import { useLanguage } from '@/lib/context/LanguageContext'

/**
 * Hook para generar links con el parámetro de idioma
 */
export function useLinkWithLang() {
  const { language } = useLanguage()
  
  return (path: string): string => {
    try {
      const url = new URL(path, typeof window !== 'undefined' ? window.location.origin : 'https://storagefy.co')
      url.searchParams.set('lang', language)
      return url.pathname + url.search
    } catch {
      // Si la URL es inválida, simplemente agregar el query param manualmente
      const separator = path.includes('?') ? '&' : '?'
      return `${path}${separator}lang=${language}`
    }
  }
}

