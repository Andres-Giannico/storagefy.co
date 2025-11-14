'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import { useLanguage } from '@/lib/context/LanguageContext'
import HelpSearchBar from '@/components/help/HelpSearchBar'
import HelpArticleCard from '@/components/help/HelpArticleCard'
import HelpEmptyState from '@/components/help/HelpEmptyState'
import { useHelpSearch } from '@/hooks/useHelpSearch'
import { getCategoryById } from '@/lib/help/help-categories'
import { Search, Filter } from 'lucide-react'
import FadeInUp from '@/components/animations/FadeInUp'

function HelpSearchContent() {
  const { language } = useLanguage()
  const searchParams = useSearchParams()
  const queryParam = searchParams.get('q') || ''
  const { query, setQuery, results, isSearching } = useHelpSearch()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    if (queryParam) {
      setQuery(queryParam)
    }
  }, [queryParam, setQuery])

  const filteredResults = selectedCategory === 'all'
    ? results
    : results.filter(r => r.article.categoryId === selectedCategory)

  const categories = Array.from(
    new Set(results.map(r => r.article.categoryId))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header con búsqueda */}
        <div className="mb-12">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-accent-600" />
              <h1 className="text-4xl font-bold text-primary-800">
                {language === 'es' ? 'Resultados de Búsqueda' : 'Search Results'}
              </h1>
            </div>
            <div className="max-w-2xl">
              <HelpSearchBar variant="compact" />
            </div>
          </FadeInUp>
        </div>

        {/* Filtros y resultados */}
        {query.length >= 2 ? (
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar de filtros */}
            {results.length > 0 && (
              <aside className="lg:col-span-1">
                <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm sticky top-24">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <h3 className="text-sm font-semibold text-primary-800">
                      {language === 'es' ? 'Filtros' : 'Filters'}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`
                        w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                        ${selectedCategory === 'all'
                          ? 'bg-accent-50 text-accent-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      {language === 'es' ? 'Todas las categorías' : 'All categories'} ({results.length})
                    </button>
                    {categories.map(categoryId => {
                      const category = getCategoryById(categoryId)
                      const count = results.filter(r => r.article.categoryId === categoryId).length
                      return (
                        <button
                          key={categoryId}
                          onClick={() => setSelectedCategory(categoryId)}
                          className={`
                            w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                            ${selectedCategory === categoryId
                              ? 'bg-accent-50 text-accent-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                            }
                          `}
                        >
                          {category?.name[language] || categoryId} ({count})
                        </button>
                      )
                    })}
                  </div>
                </div>
              </aside>
            )}

            {/* Resultados */}
            <div className={results.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}>
              {isSearching ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent-600"></div>
                  <p className="mt-4 text-gray-500">
                    {language === 'es' ? 'Buscando...' : 'Searching...'}
                  </p>
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="space-y-4">
                  <p className="text-sm text-gray-500 mb-4">
                    {language === 'es' 
                      ? `Se encontraron ${filteredResults.length} resultado${filteredResults.length !== 1 ? 's' : ''} para "${query}"`
                      : `Found ${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''} for "${query}"`
                    }
                  </p>
                  {filteredResults.map((result, index) => {
                    const category = getCategoryById(result.article.categoryId)
                    return (
                      <FadeInUp key={result.article.id} delay={index * 0.05}>
                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {category && (
                                  <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded">
                                    {category.name[language]}
                                  </span>
                                )}
                                <span className="text-xs text-gray-500">
                                  Score: {result.score.toFixed(1)}
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                                <a
                                  href={`/help/${result.article.categoryId}/${result.article.id}`}
                                  className="hover:text-accent-600 transition-colors"
                                >
                                  {result.article.title[language]}
                                </a>
                              </h3>
                              <p className="text-primary-600 mb-3">
                                {result.article.description[language]}
                              </p>
                              {result.matches.length > 0 && (
                                <div className="text-sm text-gray-500 space-y-1">
                                  {result.matches.slice(0, 2).map((match, idx) => (
                                    <div key={idx} className="line-clamp-1">
                                      {match}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </FadeInUp>
                    )
                  })}
                </div>
              ) : (
                <HelpEmptyState
                  type="search"
                  query={query}
                />
              )}
            </div>
          </div>
        ) : (
          <HelpEmptyState
            type="no-query"
          />
        )}
      </div>
    </div>
  )
}

export default function HelpSearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent-600"></div>
        </div>
      </div>
    }>
      <HelpSearchContent />
    </Suspense>
  )
}

