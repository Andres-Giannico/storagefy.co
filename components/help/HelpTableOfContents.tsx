'use client'

import { useEffect, useState } from 'react'
import { extractHeadings, Heading } from '@/lib/help/help-utils'
import { useLanguage } from '@/lib/context/LanguageContext'
import { motion } from 'framer-motion'

interface HelpTableOfContentsProps {
  content: string
}

export default function HelpTableOfContents({ content }: HelpTableOfContentsProps) {
  const { language } = useLanguage()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)

    // Generar IDs únicos para los headings en el DOM
    const headingElements = document.querySelectorAll('h2, h3')
    headingElements.forEach((el, index) => {
      const text = el.textContent || ''
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') || `heading-${index}`
      el.id = id
    })
  }, [content])

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = Array.from(document.querySelectorAll('h2, h3'))
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i] as HTMLElement
        const rect = element.getBoundingClientRect()
        
        if (rect.top <= 100) {
          setActiveId(element.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Llamar inmediatamente para establecer el estado inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  if (headings.length === 0) return null

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Offset para el header sticky
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0">
      <div className="sticky top-24">
        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-primary-800 mb-3">
            {language === 'es' ? 'Contenido' : 'Table of Contents'}
          </h3>
          <nav className="space-y-1">
            {headings.map((heading) => {
              const isActive = activeId === heading.id
              return (
                <motion.button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                    ${isActive
                      ? 'bg-accent-50 text-accent-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary-700'
                    }
                    ${heading.level === 3 ? 'pl-6' : ''}
                  `}
                  whileHover={{ x: 2 }}
                >
                  {heading.text}
                </motion.button>
              )
            })}
          </nav>
        </div>
      </div>
    </aside>
  )
}

