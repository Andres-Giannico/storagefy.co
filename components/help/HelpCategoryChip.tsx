'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'
import { HelpCategory } from '@/lib/help/help-categories'
import { helpArticles } from '@/lib/help/help-content'

interface HelpCategoryChipProps {
  category: HelpCategory
  onClick?: () => void
  variant?: 'default' | 'large'
}

export default function HelpCategoryChip({ 
  category, 
  onClick,
  variant = 'default'
}: HelpCategoryChipProps) {
  const { language } = useLanguage()
  const articleCount = helpArticles.filter(a => a.categoryId === category.id).length
  
  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full
        bg-white border border-gray-200 hover:border-accent-400
        shadow-sm hover:shadow-md transition-all duration-200
        cursor-pointer group
        ${variant === 'large' ? 'px-6 py-3 text-base' : 'text-sm'}
      `}
      onClick={onClick}
    >
      <span className="font-medium text-primary-700 group-hover:text-accent-600 transition-colors">
        {category.name[language]}
      </span>
      {articleCount > 0 && (
        <span className="px-2 py-0.5 rounded-full bg-accent-50 text-accent-600 text-xs font-semibold">
          {articleCount}
        </span>
      )}
    </motion.div>
  )

  if (onClick) {
    return content
  }

  return (
    <Link href={`/help/${category.id}`}>
      {content}
    </Link>
  )
}

