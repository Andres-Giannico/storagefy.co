'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/context/LanguageContext'
import { helpCategories, getCategoryIcon } from '@/lib/help/help-categories'
import { cn } from '@/lib/utils'

type HelpNavigationProps = {
  variant?: 'sidebar' | 'mobile'
}

export default function HelpNavigation({ variant = 'sidebar' }: HelpNavigationProps) {
  const { language } = useLanguage()
  const pathname = usePathname()

  if (variant === 'mobile') {
    return (
      <nav
        className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 snap-x snap-mandatory"
        aria-label={language === 'es' ? 'Navegación del centro de ayuda' : 'Help center navigation'}
      >
        <Link
          href="/help"
          className={cn(
            'flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all snap-start',
            pathname === '/help'
              ? 'bg-accent-600 text-white border-accent-600 shadow-md'
              : 'text-primary-700 border-primary-100 bg-white hover:border-accent-200'
          )}
        >
          {language === 'es' ? 'Todas las Categorías' : 'All Categories'}
        </Link>
        {helpCategories.map((category) => {
          const Icon = getCategoryIcon(category.icon)
          const isActive = pathname?.includes(`/help/${category.id}`)

          return (
            <Link
              key={category.id}
              href={`/help/${category.id}`}
              className={cn(
                'flex items-center gap-2 flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all snap-start',
                isActive
                  ? 'bg-accent-50 text-accent-700 border-accent-200'
                  : 'text-primary-700 border-primary-100 bg-white hover:border-accent-200'
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {category.name[language]}
            </Link>
          )
        })}
      </nav>
    )
  }

  return (
    <nav className="space-y-2">
      <Link
        href="/help"
        className={cn(
          'block px-4 py-2 rounded-lg transition-colors',
          pathname === '/help'
            ? 'bg-accent-100 text-accent-700 font-semibold'
            : 'text-primary-700 hover:bg-primary-50'
        )}
      >
        {language === 'es' ? 'Todas las Categorías' : 'All Categories'}
      </Link>
      {helpCategories.map((category) => {
        const Icon = getCategoryIcon(category.icon)
        const isActive = pathname?.includes(`/help/${category.id}`)

        return (
          <Link
            key={category.id}
            href={`/help/${category.id}`}
            className={cn(
              'flex items-center gap-3 px-4 py-2 rounded-lg transition-colors',
              isActive
                ? 'bg-accent-100 text-accent-700 font-semibold'
                : 'text-primary-700 hover:bg-primary-50'
            )}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{category.name[language]}</span>
          </Link>
        )
      })}
    </nav>
  )
}

