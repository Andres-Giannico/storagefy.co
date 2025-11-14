'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { HelpCategory, getCategoryIcon } from '@/lib/help/help-categories'
import { helpArticles } from '@/lib/help/help-content'

interface HelpCategoryCardProps {
  category: HelpCategory
  index: number
}

export default function HelpCategoryCard({ category, index }: HelpCategoryCardProps) {
  const { language } = useLanguage()
  const Icon = getCategoryIcon(category.icon)
  const articlesCount = helpArticles.filter(a => a.categoryId === category.id).length

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Link
        href={`/help/${category.id}`}
        className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300 h-full"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-primary-800 mb-2">
              {category.name[language]}
            </h3>
            <p className="text-primary-600 text-sm mb-4 line-clamp-2">
              {category.description[language]}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-primary-500">
                {articlesCount} {language === 'es' ? 'artículos' : 'articles'}
              </span>
              <ArrowRight className="w-4 h-4 text-accent-600" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

