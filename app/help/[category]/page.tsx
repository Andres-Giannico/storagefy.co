'use client'

import { useLanguage } from '@/lib/context/LanguageContext'
import HelpBreadcrumbs from '@/components/help/HelpBreadcrumbs'
import HelpArticleCard from '@/components/help/HelpArticleCard'
import HelpNavigation from '@/components/help/HelpNavigation'
import HelpEmptyState from '@/components/help/HelpEmptyState'
import { getCategoryById, getCategoryArticles } from '@/lib/help/help-categories'
import { helpArticles } from '@/lib/help/help-content'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { language } = useLanguage()
  const category = getCategoryById(params.category)

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-800 mb-4">
            {language === 'es' ? 'Categoría no encontrada' : 'Category not found'}
          </h1>
          <p className="text-primary-600 mb-6">
            {language === 'es' ? 'La categoría que buscas no existe.' : 'The category you are looking for does not exist.'}
          </p>
          <Link
            href="/help"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all"
          >
            {language === 'es' ? 'Volver al Centro de Ayuda' : 'Back to Help Center'}
          </Link>
        </div>
      </div>
    )
  }

  const articles = getCategoryArticles(category.id, helpArticles)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8 lg:hidden">
          <p className="text-sm uppercase tracking-wide text-primary-500 mb-3">
            {language === 'es' ? 'Navega por categorías' : 'Browse categories'}
          </p>
          <HelpNavigation variant="mobile" />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <HelpNavigation />
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <HelpBreadcrumbs category={category} />

            <FadeInUp className="mb-8">
              <h1 className="text-4xl font-bold text-primary-800 mb-4">
                {category.name[language]}
              </h1>
              <p className="text-lg text-primary-600">
                {category.description[language]}
              </p>
            </FadeInUp>

            {articles.length > 0 ? (
              <div className="space-y-4">
                {articles.map((article, index) => (
                  <HelpArticleCard
                    key={article.id}
                    article={article}
                    categoryId={category.id}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <HelpEmptyState type="category" />
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

