'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useHelpSearch } from '@/hooks/useHelpSearch'
import { getCategoryById } from '@/lib/help/help-categories'
import HelpSearchBar from '@/components/help/HelpSearchBar'
import HelpBreadcrumbs from '@/components/help/HelpBreadcrumbs'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'
import { ArrowRight, Search, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HelpSearchPageClient() {
  const { language } = useLanguage()
  const searchParams = useSearchParams()
  const queryParam = searchParams.get('q') || ''
  const { query, setQuery, results, isSearching } = useHelpSearch()
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    if (queryParam) {
      setQuery(queryParam)
      setHasSearched(true)
    }
  }, [queryParam, setQuery])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <HelpBreadcrumbs />

        {/* Search Section */}
        <FadeInUp className="mb-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-4 text-center">
              {language === 'es' ? 'Buscar en la Ayuda' : 'Search Help'}
            </h1>
            <p className="text-xl text-primary-600 text-center mb-8">
              {language === 'es' 
                ? 'Encuentra respuestas rápidas a tus preguntas'
                : 'Find quick answers to your questions'}
            </p>
            <HelpSearchBar variant="hero" />
          </div>
        </FadeInUp>

        {/* Results Section */}
        {(hasSearched || query.length >= 2) && (
          <div className="max-w-4xl mx-auto">
            {isSearching ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center gap-3 text-primary-600">
                  <Search className="w-6 h-6 animate-pulse" />
                  <span>
                    {language === 'es' ? 'Buscando...' : 'Searching...'}
                  </span>
                </div>
              </div>
            ) : results.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-primary-800">
                    {language === 'es' 
                      ? `Resultados de búsqueda (${results.length})`
                      : `Search results (${results.length})`
                    }
                  </h2>
                </div>

                {results.map((result, index) => {
                  const category = getCategoryById(result.article.categoryId)
                  return (
                    <motion.div
                      key={result.article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={`/help/${result.article.categoryId}/${result.article.id}`}
                        className="block bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-accent-300 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-accent-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="text-lg font-semibold text-primary-800 group-hover:text-accent-600 transition-colors">
                                {result.article.title[language]}
                              </h3>
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                            </div>
                            {category && (
                              <span className="inline-block text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded mb-2">
                                {category.name[language]}
                              </span>
                            )}
                            <p className="text-primary-600 text-sm mb-2 line-clamp-2">
                              {result.article.description[language]}
                            </p>
                            {result.matches && result.matches.length > 0 && (
                              <div className="mt-2 text-xs text-gray-500">
                                {result.matches[0]}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
            ) : query.length >= 2 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">
                  {language === 'es' ? 'No se encontraron resultados' : 'No results found'}
                </h3>
                <p className="text-primary-600 mb-6">
                  {language === 'es' 
                    ? `No encontramos resultados para "${query}". Intenta con otros términos de búsqueda.`
                    : `We couldn't find any results for "${query}". Try different search terms.`
                  }
                </p>
                <Link
                  href="/help"
                  className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium"
                >
                  {language === 'es' ? 'Ver todas las categorías' : 'View all categories'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ) : null}
          </div>
        )}

        {/* Empty State - No search yet */}
        {!hasSearched && query.length < 2 && (
          <FadeInUp className="max-w-2xl mx-auto text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
              <Search className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-xl font-semibold text-primary-800 mb-2">
              {language === 'es' ? 'Comienza tu búsqueda' : 'Start your search'}
            </h3>
            <p className="text-primary-600">
              {language === 'es' 
                ? 'Escribe en el campo de búsqueda para encontrar artículos de ayuda'
                : 'Type in the search field to find help articles'
              }
            </p>
          </FadeInUp>
        )}
      </div>
    </div>
  )
}

