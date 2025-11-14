'use client'

import { useLanguage } from '@/lib/context/LanguageContext'
import HelpBreadcrumbs from '@/components/help/HelpBreadcrumbs'
import HelpNavigation from '@/components/help/HelpNavigation'
import HelpTableOfContents from '@/components/help/HelpTableOfContents'
import HelpFeedback from '@/components/help/HelpFeedback'
import HelpRelatedArticles from '@/components/help/HelpRelatedArticles'
import { getCategoryById, getCategoryArticles } from '@/lib/help/help-categories'
import { helpArticles } from '@/lib/help/help-content'
import { calculateReadingTime, generateHeadingId } from '@/lib/help/help-utils'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import Link from 'next/link'
import FadeInUp from '@/components/animations/FadeInUp'

interface ArticlePageProps {
  params: {
    category: string
    article: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { language } = useLanguage()
  const category = getCategoryById(params.category)
  const article = helpArticles.find(a => a.id === params.article && a.categoryId === params.category)

  if (!category || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-800 mb-4">
            {language === 'es' ? 'Artículo no encontrado' : 'Article not found'}
          </h1>
          <p className="text-primary-600 mb-6">
            {language === 'es' ? 'El artículo que buscas no existe.' : 'The article you are looking for does not exist.'}
          </p>
          <Link
            href={category ? `/help/${category.id}` : '/help'}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all"
          >
            {language === 'es' ? 'Volver' : 'Back'}
          </Link>
        </div>
      </div>
    )
  }

  const categoryArticles = getCategoryArticles(category.id, helpArticles)
  const currentIndex = categoryArticles.findIndex(a => a.id === article.id)
  const prevArticle = currentIndex > 0 ? categoryArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < categoryArticles.length - 1 ? categoryArticles[currentIndex + 1] : null
  
  const readingTime = calculateReadingTime(article.content[language])
  const existingIds = new Set<string>()

  // Simple markdown-like rendering con IDs para headings
  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let currentParagraph: string[] = []
    let listItems: Array<{ text: string; subItems: string[] }> = []
    let currentSubItems: string[] = []
    let currentCodeBlock: string[] = []
    let inCodeBlock = false
    let codeBlockLanguage = ''

    const flushCodeBlock = () => {
      if (currentCodeBlock.length > 0) {
        const code = currentCodeBlock.join('\n')
        elements.push(
          <pre key={`code-${elements.length}`} className="mb-6 rounded-lg overflow-hidden border border-gray-200 bg-gray-900">
            <code className={`block p-4 text-sm text-gray-100 overflow-x-auto ${codeBlockLanguage || 'text'}`}>
              {code}
            </code>
          </pre>
        )
        currentCodeBlock = []
        codeBlockLanguage = ''
        inCodeBlock = false
      }
    }

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ')
        // Simple link detection
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
        const parts: (string | JSX.Element)[] = []
        let lastIndex = 0
        let match

        while ((match = linkRegex.exec(text)) !== null) {
          if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index))
          }
          parts.push(
            <a
              key={`link-${match.index}`}
              href={match[2]}
              target={match[2].startsWith('http') ? '_blank' : undefined}
              rel={match[2].startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-accent-600 hover:text-accent-700 font-semibold underline decoration-2 underline-offset-2"
            >
              {match[1]}
            </a>
          )
          lastIndex = match.index + match[0].length
        }
        if (lastIndex < text.length) {
          parts.push(text.substring(lastIndex))
        }

        // Detectar palabras clave y destacarlas
        const processedParts = parts.length > 0 ? parts.map((part, partIdx) => {
          if (typeof part === 'string') {
            return processInlineCode(processBold(part, partIdx), partIdx)
          }
          return part
        }) : processInlineCode(processBold(text, 0), 0)

        elements.push(
          <p key={`p-${elements.length}`} className="mb-5 text-primary-700 leading-relaxed text-base">
            {processedParts}
          </p>
        )
        currentParagraph = []
      }
    }

    const processBold = (text: string, partIdx: number) => {
      const boldRegex = /\*\*([^*]+)\*\*/g
      const boldParts: (string | JSX.Element)[] = []
      let lastBoldIndex = 0
      let boldMatch
      
      while ((boldMatch = boldRegex.exec(text)) !== null) {
        if (boldMatch.index > lastBoldIndex) {
          boldParts.push(text.substring(lastBoldIndex, boldMatch.index))
        }
        boldParts.push(
          <strong key={`bold-${partIdx}-${boldMatch.index}`} className="font-bold text-primary-900">
            {boldMatch[1]}
          </strong>
        )
        lastBoldIndex = boldMatch.index + boldMatch[0].length
      }
      if (lastBoldIndex < text.length) {
        boldParts.push(text.substring(lastBoldIndex))
      }
      return boldParts.length > 0 ? boldParts : text
    }

    const processInlineCode = (text: string | (string | JSX.Element)[], partIdx: number) => {
      // Procesar código inline (backticks escapados primero, luego normales)
      const processString = (str: string): (string | JSX.Element)[] => {
        const codeParts: (string | JSX.Element)[] = []
        let processedStr = str
        let matchCount = 0
        
        // Primero procesar backticks escapados (\`)
        const escapedRegex = /\\`([^`]+)\\`/g
        let escapedMatch
        let lastIndex = 0
        const escapedParts: Array<{ index: number; length: number; content: string }> = []
        
        while ((escapedMatch = escapedRegex.exec(processedStr)) !== null) {
          escapedParts.push({
            index: escapedMatch.index,
            length: escapedMatch[0].length,
            content: escapedMatch[1]
          })
        }
        
        // Luego procesar backticks normales (que no estén escapados)
        const normalRegex = /(?<!\\)`([^`]+)`/g
        let normalMatch: RegExpExecArray | null
        
        while ((normalMatch = normalRegex.exec(processedStr)) !== null) {
          // Verificar que no esté dentro de un backtick escapado
          const isInEscaped = escapedParts.some(ep => 
            normalMatch!.index >= ep.index && normalMatch!.index < ep.index + ep.length
          )
          if (!isInEscaped) {
            escapedParts.push({
              index: normalMatch.index,
              length: normalMatch[0].length,
              content: normalMatch[1]
            })
          }
        }
        
        // Ordenar por índice y procesar
        escapedParts.sort((a, b) => a.index - b.index)
        
        lastIndex = 0
        escapedParts.forEach((part) => {
          if (part.index > lastIndex) {
            codeParts.push(processedStr.substring(lastIndex, part.index))
          }
          codeParts.push(
            <code key={`inline-code-${partIdx}-${matchCount++}`} className="px-2 py-1 bg-gray-100 text-accent-700 rounded text-sm font-mono border border-gray-200">
              {part.content}
            </code>
          )
          lastIndex = part.index + part.length
        })
        
        if (lastIndex < processedStr.length) {
          codeParts.push(processedStr.substring(lastIndex))
        }
        
        return codeParts.length > 0 ? codeParts : [str]
      }

      if (typeof text === 'string') {
        return processString(text)
      } else {
        // Si es un array, procesar cada elemento
        const result: (string | JSX.Element)[] = []
        text.forEach((item, idx) => {
          if (typeof item === 'string') {
            result.push(...processString(item))
          } else {
            result.push(item)
          }
        })
        return result
      }
    }

    const processTextWithBold = (text: string, keyPrefix: string) => {
      return processInlineCode(processBold(text, 0), 0)
    }

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-none mb-8 space-y-5 ml-0">
            {listItems.map((item, idx) => (
              <li key={idx} className="group">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white flex items-center justify-center text-sm font-bold mt-0.5 shadow-sm group-hover:shadow-md transition-all">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <span className="text-primary-700 leading-relaxed text-base block mb-2">
                      {processTextWithBold(item.text, `item-${idx}`)}
                    </span>
                    {item.subItems.length > 0 && (
                      <ul className="list-none space-y-2 mt-3 ml-4">
                        {item.subItems.map((subItem, subIdx) => (
                          <li key={subIdx} className="flex items-start gap-2">
                            <span className="text-accent-600 mt-1.5">•</span>
                            <span className="text-primary-600 text-sm leading-relaxed flex-1">
                              {processTextWithBold(subItem, `sub-${idx}-${subIdx}`)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )
        listItems = []
        currentSubItems = []
      }
    }

    lines.forEach((line, index) => {
      // Manejar bloques de código (```)
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          // Cerrar bloque de código
          flushCodeBlock()
        } else {
          // Abrir bloque de código
          flushList()
          flushParagraph()
          const languageMatch = line.trim().match(/^```(\w+)?/)
          codeBlockLanguage = languageMatch ? languageMatch[1] || '' : ''
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        // Agregar línea al bloque de código
        currentCodeBlock.push(line)
        return
      }

      if (line.startsWith('# ')) {
        flushList()
        flushParagraph()
        flushCodeBlock()
        const text = line.substring(2)
        elements.push(
          <h1 key={`h1-${index}`} className="text-3xl font-bold bg-gradient-to-r from-primary-800 to-accent-700 bg-clip-text text-transparent mb-6 mt-8 first:mt-0">
            {text}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        flushList()
        flushParagraph()
        flushCodeBlock()
        const text = line.substring(3)
        const id = generateHeadingId(text, existingIds)
        elements.push(
          <h2 
            key={`h2-${index}`} 
            id={id}
            className="text-2xl font-bold text-primary-800 mb-4 mt-8 scroll-mt-24 border-l-4 border-accent-500 pl-4"
          >
            {text}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        flushList()
        flushParagraph()
        flushCodeBlock()
        const text = line.substring(4)
        const id = generateHeadingId(text, existingIds)
        elements.push(
          <h3 
            key={`h3-${index}`} 
            id={id}
            className="text-xl font-semibold text-accent-700 mb-3 mt-6 scroll-mt-24"
          >
            {text}
          </h3>
        )
      } else if (/^\d+\.\s/.test(line)) {
        // Lista numerada (1., 2., etc.)
        flushParagraph()
        flushCodeBlock()
        const itemText = line.replace(/^\d+\.\s/, '').trim()
        listItems.push({ text: itemText, subItems: [] })
      } else if ((line.startsWith('   - ') || line.startsWith('   * ') || line.startsWith('  - ') || line.startsWith('  * ')) && listItems.length > 0) {
        // Sub-item de lista (dentro de una lista numerada, con indentación)
        const subItemText = line.replace(/^\s+[-*]\s/, '').trim()
        if (listItems.length > 0) {
          listItems[listItems.length - 1].subItems.push(subItemText)
        }
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        // Lista simple (no numerada)
        flushParagraph()
        flushCodeBlock()
        const itemText = line.substring(2).trim()
        listItems.push({ text: itemText, subItems: [] })
      } else if (line.trim() === '') {
        flushList()
        flushParagraph()
        flushCodeBlock()
      } else {
        flushList()
        flushCodeBlock()
        currentParagraph.push(line.trim())
      }
    })

    flushList()
    flushParagraph()
    flushCodeBlock()

    return elements
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8 lg:hidden">
          <p className="text-sm uppercase tracking-wide text-primary-500 mb-3">
            {language === 'es' ? 'Navega por categorías' : 'Browse categories'}
          </p>
          <HelpNavigation variant="mobile" />
        </div>

        <div className="grid lg:grid-cols-12 xl:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24">
              <HelpNavigation />
            </div>
          </aside>

          {/* Main Content - Centrado con ancho máximo */}
          <main className="lg:col-span-9 xl:col-span-6">
            <HelpBreadcrumbs category={category} article={article} />

            <FadeInUp>
              <article className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
                <div className="mb-8 pb-6 border-b border-gray-200">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-800 via-accent-600 to-primary-800 bg-clip-text text-transparent mb-4">
                    {article.title[language]}
                  </h1>
                  <p className="text-lg text-primary-700 font-medium mb-4">
                    {article.description[language]}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-50 text-accent-700 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">
                        {readingTime} {language === 'es' ? 'min de lectura' : 'min read'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="help-content space-y-6">
                    {renderContent(article.content[language])}
                  </div>
                </div>

                {/* Feedback */}
                <HelpFeedback articleId={article.id} />

                {/* Artículos relacionados */}
                <HelpRelatedArticles article={article} />
              </article>
            </FadeInUp>

            {/* Navigation between articles */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  href={`/help/${category.id}/${prevArticle.id}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-accent-300 hover:shadow-md transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-accent-600" />
                  <div>
                    <div className="text-xs text-primary-500 mb-1">
                      {language === 'es' ? 'Anterior' : 'Previous'}
                    </div>
                    <div className="font-semibold text-primary-800">
                      {prevArticle.title[language]}
                    </div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              {nextArticle ? (
                <Link
                  href={`/help/${category.id}/${nextArticle.id}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-accent-300 hover:shadow-md transition-all ml-auto"
                >
                  <div className="text-right">
                    <div className="text-xs text-primary-500 mb-1">
                      {language === 'es' ? 'Siguiente' : 'Next'}
                    </div>
                    <div className="font-semibold text-primary-800">
                      {nextArticle.title[language]}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-accent-600" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </main>

          {/* Table of Contents Sidebar */}
          <aside className="hidden xl:block xl:col-span-3">
            <HelpTableOfContents content={article.content[language]} />
          </aside>
        </div>
      </div>
    </div>
  )
}

