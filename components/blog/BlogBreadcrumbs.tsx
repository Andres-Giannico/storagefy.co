'use client'

import LinkWithLang from '@/components/common/LinkWithLang'
import { useLanguage } from '@/lib/context/LanguageContext'
import { ChevronRight } from 'lucide-react'

interface BlogBreadcrumbsProps {
  articleTitle?: string
}

export default function BlogBreadcrumbs({ articleTitle }: BlogBreadcrumbsProps) {
  const { language } = useLanguage()

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-primary-600">
        <li>
          <LinkWithLang href="/" className="hover:text-accent-600 transition-colors">
            {language === 'es' ? 'Inicio' : 'Home'}
          </LinkWithLang>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-primary-400" />
          <LinkWithLang href="/blog" className="hover:text-accent-600 transition-colors">
            {language === 'es' ? 'Blog' : 'Blog'}
          </LinkWithLang>
        </li>
        {articleTitle && (
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-primary-400" />
            <span className="text-primary-800 font-medium truncate max-w-[200px] sm:max-w-none">
              {articleTitle}
            </span>
          </li>
        )}
      </ol>
    </nav>
  )
}
