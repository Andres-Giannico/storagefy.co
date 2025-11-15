'use client'

import { useLanguage } from '@/lib/context/LanguageContext'
import { HelpCategory, HelpArticle } from '@/lib/help/help-categories'
import HelpBreadcrumbs from '@/components/help/HelpBreadcrumbs'
import HelpTableOfContents from '@/components/help/HelpTableOfContents'
import HelpRelatedArticles from '@/components/help/HelpRelatedArticles'
import HelpFeedback from '@/components/help/HelpFeedback'
import { calculateReadingTime } from '@/lib/help/help-utils'
import { Clock, Star } from 'lucide-react'
import { useEffect } from 'react'

interface ArticlePageClientProps {
  category: HelpCategory
  article: HelpArticle
}

// Procesar markdown inline (bold, italic, links, code)
function processInlineMarkdown(text: string): string {
  let processed = text
  
  // Code inline
  processed = processed.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>')
  
  // Links
  processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent-600 hover:text-accent-700 underline" target="_blank" rel="noopener noreferrer">$1</a>')
  
  // Bold
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-primary-800">$1</strong>')
  
  // Italic
  processed = processed.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
  
  return processed
}

// Renderizar markdown básico a HTML
function renderMarkdown(content: string): string {
    let html = content
    
    // Dividir en líneas para procesar mejor
    const lines = html.split('\n')
    const processedLines: string[] = []
    let inList = false
    let listType: 'ul' | 'ol' | null = null
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()
      
      // Headings
      if (trimmed.startsWith('### ')) {
        if (inList) {
          processedLines.push(`</${listType}>`)
          inList = false
          listType = null
        }
        const text = trimmed.substring(4).trim()
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        processedLines.push(`<h3 class="text-xl font-semibold text-primary-800 mt-8 mb-4" id="${id}">${text}</h3>`)
        continue
      }
      
      if (trimmed.startsWith('## ')) {
        if (inList) {
          processedLines.push(`</${listType}>`)
          inList = false
          listType = null
        }
        const text = trimmed.substring(3).trim()
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        processedLines.push(`<h2 class="text-2xl font-bold text-primary-800 mt-10 mb-6" id="${id}">${text}</h2>`)
        continue
      }
      
      if (trimmed.startsWith('# ')) {
        if (inList) {
          processedLines.push(`</${listType}>`)
          inList = false
          listType = null
        }
        const text = trimmed.substring(2).trim()
        processedLines.push(`<h1 class="text-3xl font-bold text-primary-800 mb-6">${text}</h1>`)
        continue
      }
      
      // Listas numeradas
      const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/)
      if (numberedMatch) {
        if (!inList || listType !== 'ol') {
          if (inList) {
            processedLines.push(`</${listType}>`)
          }
          processedLines.push('<ol class="list-decimal list-inside mb-4 space-y-2 ml-4">')
          inList = true
          listType = 'ol'
        }
        const itemText = processInlineMarkdown(numberedMatch[2])
        processedLines.push(`<li class="mb-2 text-primary-700">${itemText}</li>`)
        continue
      }
      
      // Listas con viñetas
      const bulletMatch = trimmed.match(/^[-*]\s+(.+)$/)
      if (bulletMatch) {
        if (!inList || listType !== 'ul') {
          if (inList) {
            processedLines.push(`</${listType}>`)
          }
          processedLines.push('<ul class="list-disc list-inside mb-4 space-y-2 ml-4">')
          inList = true
          listType = 'ul'
        }
        const itemText = processInlineMarkdown(bulletMatch[1])
        processedLines.push(`<li class="mb-2 text-primary-700">${itemText}</li>`)
        continue
      }
      
      // Cerrar lista si hay línea vacía
      if (trimmed === '' && inList) {
        processedLines.push(`</${listType}>`)
        inList = false
        listType = null
        continue
      }
      
      // Párrafos
      if (trimmed && !trimmed.startsWith('<')) {
        if (inList) {
          processedLines.push(`</${listType}>`)
          inList = false
          listType = null
        }
        const processedText = processInlineMarkdown(trimmed)
        processedLines.push(`<p class="mb-4 text-primary-700 leading-relaxed">${processedText}</p>`)
        continue
      }
      
      // Línea vacía
      if (trimmed === '') {
        if (inList) {
          processedLines.push(`</${listType}>`)
          inList = false
          listType = null
        }
        continue
      }
      
      processedLines.push(line)
    }
    
    // Cerrar lista si aún está abierta
    if (inList && listType) {
      processedLines.push(`</${listType}>`)
    }
    
    return processedLines.join('\n')
}

export default function ArticlePageClient({ category, article }: ArticlePageClientProps) {
  const { language } = useLanguage()
  const readingTime = calculateReadingTime(article.content[language])

  useEffect(() => {
    // Generar IDs para los headings después de renderizar
    const headingElements = document.querySelectorAll('h2')
    headingElements.forEach((el) => {
      const text = el.textContent || ''
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      el.id = id
    })
  }, [article.content, language])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <HelpBreadcrumbs category={category} article={article} />

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 flex-1">
                  {article.title[language]}
                </h1>
                {article.featured && (
                  <Star className="w-6 h-6 text-accent-500 fill-accent-500 flex-shrink-0 mt-2" />
                )}
              </div>
              
              {article.description[language] && (
                <p className="text-xl text-primary-600 mb-6">
                  {article.description[language]}
                </p>
              )}

              <div className="flex items-center gap-4 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} {language === 'es' ? 'min de lectura' : 'min read'}</span>
                </div>
                <span className="text-primary-400">•</span>
                <span>{category.name[language]}</span>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content[language]) }}
            />

            {/* Related Articles */}
            <HelpRelatedArticles article={article} />

            {/* Feedback */}
            <HelpFeedback articleId={article.id} />
          </article>

          {/* Sidebar - Table of Contents */}
          <HelpTableOfContents content={article.content[language]} />
        </div>
      </div>
    </div>
  )
}

