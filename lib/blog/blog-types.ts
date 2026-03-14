export interface BlogAuthor {
  name: string
  url?: string
  image?: string
}

export interface BlogArticleSummary {
  slug: string
  title: { es: string; en: string }
}

export interface BlogArticle {
  slug: string
  title: { es: string; en: string }
  description: { es: string; en: string }
  content: { es: string; en: string }
  excerpt: { es: string; en: string }
  author: BlogAuthor
  publishedAt: string // ISO date
  updatedAt: string // ISO date
  image: string
  imageAlt: { es: string; en: string }
  keywords: string[]
  category: { es: string; en: string }
  featured?: boolean
  relatedSlugs?: string[]
  faq?: Array<{
    question: { es: string; en: string }
    answer: { es: string; en: string }
  }>
}
