'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Clock } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { HelpArticle } from '@/lib/help/help-categories'
import { calculateReadingTime } from '@/lib/help/help-utils'

interface HelpArticleCardProps {
  article: HelpArticle
  categoryId: string
  index?: number
}

export default function HelpArticleCard({ article, categoryId, index = 0 }: HelpArticleCardProps) {
  const { language } = useLanguage()
  const readingTime = calculateReadingTime(article.content[language])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <Link
        href={`/help/${categoryId}/${article.id}`}
        className="block bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:border-accent-300 hover:shadow-xl transition-all duration-300 group"
      >
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 mb-2">
              <h4 className="text-lg font-semibold text-primary-800 group-hover:text-accent-600 transition-colors">
                {article.title[language]}
              </h4>
              {article.featured && (
                <Star className="w-4 h-4 text-accent-500 fill-accent-500 flex-shrink-0 mt-1" />
              )}
            </div>
            <p className="text-sm text-primary-600 line-clamp-2 mb-3">
              {article.description[language]}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{readingTime} {language === 'es' ? 'min' : 'min'}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-accent-600 group-hover:gap-3 transition-all">
                <span>{language === 'es' ? 'Leer más' : 'Read more'}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

