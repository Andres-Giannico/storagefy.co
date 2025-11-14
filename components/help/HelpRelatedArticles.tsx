'use client'

import { useLanguage } from '@/lib/context/LanguageContext'
import { getRelatedArticles } from '@/lib/help/help-utils'
import { helpArticles } from '@/lib/help/help-content'
import { HelpArticle } from '@/lib/help/help-categories'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface HelpRelatedArticlesProps {
  article: HelpArticle
}

export default function HelpRelatedArticles({ article }: HelpRelatedArticlesProps) {
  const { language } = useLanguage()
  const related = getRelatedArticles(article, helpArticles, language, 4)

  if (related.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-primary-800 mb-6">
        {language === 'es' ? 'Artículos Relacionados' : 'Related Articles'}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {related.map((relatedArticle, index) => (
          <motion.div
            key={relatedArticle.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={`/help/${relatedArticle.categoryId}/${relatedArticle.id}`}
              className="block p-5 bg-white rounded-xl border border-gray-200 hover:border-accent-300 hover:shadow-md transition-all group"
            >
              <h4 className="font-semibold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors">
                {relatedArticle.title[language]}
              </h4>
              <p className="text-sm text-primary-600 line-clamp-2 mb-3">
                {relatedArticle.description[language]}
              </p>
              <div className="flex items-center gap-2 text-sm text-accent-600">
                <span>{language === 'es' ? 'Leer más' : 'Read more'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

