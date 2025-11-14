'use client'

import { useLanguage } from '@/lib/context/LanguageContext'
import HelpCenterHero from '@/components/help/HelpCenterHero'
import HelpCategoryCard from '@/components/help/HelpCategoryCard'
import HelpArticleCard from '@/components/help/HelpArticleCard'
import { helpCategories } from '@/lib/help/help-categories'
import { helpArticles } from '@/lib/help/help-content'
import FadeInUp from '@/components/animations/FadeInUp'

export default function HelpPage() {
  const { language } = useLanguage()
  const featuredArticles = helpArticles.filter(a => a.featured).slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <HelpCenterHero />

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <FadeInUp className="mb-8">
              <h2 className="text-3xl font-bold text-primary-800 mb-4">
                {language === 'es' ? 'Artículos Destacados' : 'Featured Articles'}
              </h2>
              <p className="text-primary-600">
                {language === 'es'
                  ? 'Comienza aquí con las guías más importantes'
                  : 'Start here with the most important guides'}
              </p>
            </FadeInUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => {
                const category = helpCategories.find(c => c.id === article.categoryId)
                if (!category) return null
                return (
                  <HelpArticleCard
                    key={article.id}
                    article={article}
                    categoryId={category.id}
                    index={index}
                  />
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              {language === 'es' ? 'Explora por Categoría' : 'Browse by Category'}
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Encuentra la información que necesitas organizada por temas'
                : 'Find the information you need organized by topic'}
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <HelpCategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

