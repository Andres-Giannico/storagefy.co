'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { HelpCategory, getCategoryById } from '@/lib/help/help-categories'
import { HelpArticle } from '@/lib/help/help-categories'

interface HelpBreadcrumbsProps {
  category?: HelpCategory
  article?: HelpArticle
}

export default function HelpBreadcrumbs({ category, article }: HelpBreadcrumbsProps) {
  const { language } = useLanguage()

  return (
    <nav className="flex items-center gap-2 text-sm text-primary-600 mb-6">
      <Link href="/" className="hover:text-accent-600 transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link href="/help" className="hover:text-accent-600 transition-colors">
        {language === 'es' ? 'Ayuda' : 'Help'}
      </Link>
      {category && (
        <>
          <ChevronRight className="w-4 h-4" />
          <Link
            href={`/help/${category.id}`}
            className="hover:text-accent-600 transition-colors"
          >
            {category.name[language]}
          </Link>
        </>
      )}
      {article && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary-800 font-medium">{article.title[language]}</span>
        </>
      )}
    </nav>
  )
}

