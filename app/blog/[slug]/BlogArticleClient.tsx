'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'
import { BlogArticle, BlogArticleSummary } from '@/lib/blog/blog-types'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

interface BlogArticleClientProps {
  article: BlogArticle
  relatedArticles?: BlogArticleSummary[]
}

function simpleMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/^## (.+)$/gm, '</p><h2 class="text-2xl font-bold text-primary-800 mt-10 mb-6">$1</h2>')
    .replace(/^### (.+)$/gm, '</p><h3 class="text-xl font-semibold text-primary-800 mt-8 mb-4">$1</h3>')
    .replace(/^- (.+)$/gm, '<li class="mb-2 text-primary-700">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4 text-primary-700 leading-relaxed">')
    .replace(/\n/g, '<br/>')
}

export default function BlogArticleClient({ article, relatedArticles = [] }: BlogArticleClientProps) {
  const { language } = useLanguage()
  const title = article.title[language]
  const description = article.description[language]
  const content = article.content[language]
  const category = article.category[language]
  const readingTime = Math.max(1, Math.ceil(content.split(/\s+/).length / 200))
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const html = '<p class="mb-4 text-primary-700 leading-relaxed">' + simpleMarkdown(content) + '</p>'

  const header = React.createElement('header', { className: 'mb-8' },
    React.createElement(Link, { href: '/blog', className: 'inline-flex items-center gap-2 text-primary-600 hover:text-accent-600 transition-colors mb-6' },
      React.createElement(ArrowLeft, { className: 'w-4 h-4' }),
      language === 'es' ? 'Volver al blog' : 'Back to blog'
    ),
    React.createElement('div', { className: 'relative aspect-video rounded-xl overflow-hidden mb-6 bg-gray-100' },
      React.createElement(Image, { src: article.image, alt: article.imageAlt[language], fill: true, className: 'object-cover', priority: true, sizes: '(max-width: 768px) 100vw, 896px' })
    ),
    React.createElement('div', { className: 'flex flex-wrap items-center gap-4 text-sm text-primary-600 mb-4' },
      React.createElement('span', { className: 'px-3 py-1 bg-accent-100 text-accent-700 rounded-full font-medium' }, category),
      React.createElement('span', { className: 'flex items-center gap-2' },
        React.createElement(Calendar, { className: 'w-4 h-4' }),
        React.createElement('time', { dateTime: article.publishedAt }, publishedDate)
      ),
      React.createElement('span', { className: 'flex items-center gap-2' },
        React.createElement(Clock, { className: 'w-4 h-4' }),
        readingTime, ' ', language === 'es' ? 'min de lectura' : 'min read'
      ),
      React.createElement('span', { className: 'text-primary-500' }, '•'),
      React.createElement('span', null, article.author.name)
    ),
    React.createElement('h1', { className: 'text-4xl lg:text-5xl font-bold text-primary-800 mb-4' }, title),
    description ? React.createElement('p', { className: 'text-xl text-primary-600' }, description) : null
  )

  const contentDiv = React.createElement('div', {
    className: 'prose prose-lg max-w-none bg-white rounded-xl p-8 shadow-sm border border-gray-200',
    dangerouslySetInnerHTML: { __html: html }
  })

  const faqSection = article.faq && article.faq.length > 0 ? React.createElement('section', { className: 'mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-200' },
    React.createElement('h2', { className: 'text-2xl font-bold text-primary-800 mb-6' }, language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'),
    React.createElement('dl', { className: 'space-y-6' },
      ...article.faq.map((item, i) =>
        React.createElement('div', { key: i },
          React.createElement('dt', { className: 'font-semibold text-primary-800 mb-2' }, item.question[language]),
          React.createElement('dd', { className: 'text-primary-600' }, item.answer[language])
        )
      )
    )
  ) : null

  const relatedSection = relatedArticles.length > 0 ? React.createElement('section', { className: 'mt-12' },
    React.createElement('h2', { className: 'text-2xl font-bold text-primary-800 mb-6' }, language === 'es' ? 'Artículos relacionados' : 'Related articles'),
    React.createElement('div', { className: 'flex flex-wrap gap-4' },
      ...relatedArticles.map((r) =>
        React.createElement(Link, { key: r.slug, href: `/blog/${r.slug}`, className: 'px-4 py-2 bg-accent-50 text-accent-700 rounded-lg hover:bg-accent-100 transition-colors font-medium' },
          r.title[language]
        )
      )
    )
  ) : null

  const backLink = React.createElement('div', { className: 'mt-12 pt-8 border-t border-gray-200' },
    React.createElement(Link, { href: '/blog', className: 'inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium' },
      React.createElement(ArrowLeft, { className: 'w-4 h-4' }),
      language === 'es' ? 'Ver todos los artículos' : 'View all articles'
    )
  )

  return React.createElement('div', null, header, contentDiv, faqSection, relatedSection, backLink)
}
