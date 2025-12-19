'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'
import { ReactNode } from 'react'

interface LinkWithLangProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  [key: string]: any
}

/**
 * Componente Link que automáticamente agrega el parámetro de idioma a la URL
 */
export default function LinkWithLang({ href, children, className, onClick, ...props }: LinkWithLangProps) {
  const { language } = useLanguage()
  
  const getHrefWithLang = (): string => {
    // Si es un link externo, no agregar lang
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('#')) {
      return href
    }

    try {
      const url = new URL(href, typeof window !== 'undefined' ? window.location.origin : 'https://storagefy.co')
      url.searchParams.set('lang', language)
      return url.pathname + url.search
    } catch {
      // Si la URL es inválida, simplemente agregar el query param manualmente
      const separator = href.includes('?') ? '&' : '?'
      return `${href}${separator}lang=${language}`
    }
  }

  return (
    <Link href={getHrefWithLang()} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  )
}

