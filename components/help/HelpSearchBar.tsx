'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, Loader2 } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useHelpSearch } from '@/hooks/useHelpSearch'
import { helpArticles } from '@/lib/help/help-content'
import { getCategoryById } from '@/lib/help/help-categories'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface HelpSearchBarProps {
  variant?: 'hero' | 'compact'
  onResultClick?: () => void
}

export default function HelpSearchBar({ 
  variant = 'hero',
  onResultClick
}: HelpSearchBarProps) {
  const { language } = useLanguage()
  const router = useRouter()
  const { query, setQuery, results, isSearching } = useHelpSearch()
  const [isFocused, setIsFocused] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const showResults = isFocused && query.length >= 2

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/help/search?q=${encodeURIComponent(query)}`)
      setIsFocused(false)
      onResultClick?.()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => 
        prev < Math.min(results.length - 1, 4) ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault()
      const selectedResult = results[selectedIndex]
      if (selectedResult) {
        router.push(`/help/${selectedResult.article.categoryId}/${selectedResult.article.id}`)
        setIsFocused(false)
        onResultClick?.()
      }
    } else if (e.key === 'Escape') {
      setIsFocused(false)
      inputRef.current?.blur()
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const displayResults = results.slice(0, 5)

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`
          relative flex items-center
          ${variant === 'hero' 
            ? 'bg-white rounded-full shadow-lg border-2 border-gray-200 focus-within:border-accent-500 transition-all' 
            : 'bg-gray-50 rounded-lg border border-gray-300 focus-within:border-accent-400'
          }
        `}>
          <Search className={`
            absolute left-4 text-gray-400
            ${variant === 'hero' ? 'w-6 h-6' : 'w-5 h-5'}
          `} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(-1)
            }}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder={
              language === 'es' 
                ? 'Buscar en la ayuda...' 
                : 'Search help...'
            }
            className={`
              w-full bg-transparent border-0 outline-none
              text-primary-800 placeholder-gray-400
              ${variant === 'hero' 
                ? 'pl-14 pr-12 py-5 text-lg' 
                : 'pl-10 pr-8 py-3 text-sm'
              }
            `}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                inputRef.current?.focus()
              }}
              className="absolute right-12 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          {isSearching && (
            <div className="absolute right-12">
              <Loader2 className="w-5 h-5 text-accent-600 animate-spin" />
            </div>
          )}
        </div>
      </form>

      <AnimatePresence>
        {showResults && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto"
          >
            {displayResults.length > 0 ? (
              <div className="p-2">
                {displayResults.map((result, index) => {
                  const category = getCategoryById(result.article.categoryId)
                  return (
                    <Link
                      key={result.article.id}
                      href={`/help/${result.article.categoryId}/${result.article.id}`}
                      onClick={() => {
                        setIsFocused(false)
                        onResultClick?.()
                      }}
                      className={`
                        block p-3 rounded-lg transition-colors
                        ${selectedIndex === index
                          ? 'bg-accent-50 border border-accent-200'
                          : 'hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-primary-800 text-sm">
                              {result.article.title[language]}
                            </h4>
                            {category && (
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                {category.name[language]}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {result.article.description[language]}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
                {results.length > 5 && (
                  <button
                    onClick={handleSubmit}
                    className="w-full mt-2 p-3 text-sm font-medium text-accent-600 hover:bg-accent-50 rounded-lg transition-colors"
                  >
                    {language === 'es' 
                      ? `Ver todos los resultados (${results.length})` 
                      : `View all results (${results.length})`
                    }
                  </button>
                )}
              </div>
            ) : (
              <div className="p-6 text-center">
                <p className="text-gray-500 text-sm">
                  {language === 'es' 
                    ? 'No se encontraron resultados' 
                    : 'No results found'
                  }
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

