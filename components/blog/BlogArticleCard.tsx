'use client'

import Image from 'next/image'
import LinkWithLang from '@/components/common/LinkWithLang'
import { useLanguage } from '@/lib/context/LanguageContext'
import { BlogArticle } from '@/lib/blog/blog-types'
import { Calendar } from 'lucide-react'

interface BlogArticleCardProps {
  article: BlogArticle
}

export default function BlogArticleCard({ article }: BlogArticleCardProps) {
  const { language } = useLanguage()
  const title = article.title[language]
  const excerpt = article.excerpt[language]
  const category = article.category[language]
  const date = new Date(article.publishedAt).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <LinkWithLang href={`/blog/${article.slug}`} className="group block">
      <article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-accent-200">
        <div className="relative aspect-video bg-gray-100">
          <Image
            src={article.image}
            alt={article.imageAlt[language]}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-primary-600 mb-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={article.publishedAt}>{date}</time>
          </div>
          <h2 className="text-xl font-bold text-primary-800 group-hover:text-accent-600 transition-colors line-clamp-2 mb-2">
            {title}
          </h2>
          <p className="text-primary-600 line-clamp-2">{excerpt}</p>
        </div>
      </article>
    </LinkWithLang>
  )
}
