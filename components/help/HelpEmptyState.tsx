'use client'

import React from 'react'
import { Search, BookOpen, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import Link from 'next/link'

interface HelpEmptyStateProps {
  type: 'search' | 'no-query' | 'category'
  query?: string
}

export default function HelpEmptyState({ type, query }: HelpEmptyStateProps) {
  const { language } = useLanguage()

  if (type === 'search' && query) {
    return React.createElement(
      'div',
      { className: 'text-center py-16' },
      React.createElement(
        'div',
        { className: 'inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6' },
        React.createElement(Search, { className: 'w-10 h-10 text-gray-400' })
      ),
      React.createElement(
        'h3',
        { className: 'text-2xl font-bold text-primary-800 mb-3' },
        language === 'es' ? 'No se encontraron resultados' : 'No results found'
      ),
      React.createElement(
        'p',
        { className: 'text-primary-600 mb-6 max-w-md mx-auto' },
        language === 'es'
          ? `No encontramos artículos que coincidan con "${query}". Intenta con otros términos o explora nuestras categorías.`
          : `We couldn't find any articles matching "${query}". Try different terms or browse our categories.`
      ),
      React.createElement(
        'div',
        { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
        React.createElement(
          Link,
          {
            href: '/help',
            className: 'inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors'
          },
          React.createElement(BookOpen, { className: 'w-5 h-5' }),
          language === 'es' ? 'Explorar Categorías' : 'Browse Categories'
        ),
        React.createElement(
          Link,
          {
            href: '/contact',
            className: 'inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-primary-700 rounded-lg hover:bg-gray-50 transition-colors'
          },
          React.createElement(Mail, { className: 'w-5 h-5' }),
          language === 'es' ? 'Contactar Soporte' : 'Contact Support'
        )
      )
    )
  }

  if (type === 'no-query') {
    return React.createElement(
      'div',
      { className: 'text-center py-16' },
      React.createElement(
        'div',
        { className: 'inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6' },
        React.createElement(Search, { className: 'w-10 h-10 text-gray-400' })
      ),
      React.createElement(
        'h3',
        { className: 'text-2xl font-bold text-primary-800 mb-3' },
        language === 'es' ? 'Busca en el Centro de Ayuda' : 'Search Help Center'
      ),
      React.createElement(
        'p',
        { className: 'text-primary-600 mb-6 max-w-md mx-auto' },
        language === 'es'
          ? 'Escribe tu pregunta o término de búsqueda arriba para encontrar artículos relacionados.'
          : 'Type your question or search term above to find related articles.'
      ),
      React.createElement(
        Link,
        {
          href: '/help',
          className: 'inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors'
        },
        React.createElement(BookOpen, { className: 'w-5 h-5' }),
        language === 'es' ? 'Explorar Categorías' : 'Browse Categories'
      )
    )
  }

  return React.createElement(
    'div',
    { className: 'text-center py-16' },
    React.createElement(
      'div',
      { className: 'inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6' },
      React.createElement(BookOpen, { className: 'w-10 h-10 text-gray-400' })
    ),
    React.createElement(
      'h3',
      { className: 'text-2xl font-bold text-primary-800 mb-3' },
      language === 'es' ? 'No hay artículos disponibles' : 'No articles available'
    ),
    React.createElement(
      'p',
      { className: 'text-primary-600 mb-6' },
      language === 'es'
        ? 'Esta categoría aún no tiene artículos. Pronto agregaremos contenido aquí.'
        : "This category doesn't have articles yet. We'll add content here soon."
    )
  )
}
