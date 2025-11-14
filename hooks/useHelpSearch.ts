'use client'

import { useState, useMemo } from 'react'
import { helpArticles } from '@/lib/help/help-content'
import { searchArticles, SearchResult } from '@/lib/help/help-utils'
import { useLanguage } from '@/lib/context/LanguageContext'

export function useHelpSearch() {
  const { language } = useLanguage()
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) {
      return []
    }
    
    setIsSearching(true)
    const searchResults = searchArticles(query, helpArticles, language)
    setIsSearching(false)
    
    return searchResults
  }, [query, language])

  return {
    query,
    setQuery,
    results,
    isSearching,
    hasResults: results.length > 0
  }
}

