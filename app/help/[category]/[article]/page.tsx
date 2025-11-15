import type { Metadata } from 'next'
import { getCategoryById } from '@/lib/help/help-categories'
import { helpArticles } from '@/lib/help/help-content'
import ArticlePageClient from './ArticlePageClient'
import StructuredData from '@/components/seo/StructuredData'
import { notFound } from 'next/navigation'

interface ArticlePageProps {
  params: {
    category: string
    article: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const category = getCategoryById(params.category)
  const article = helpArticles.find(a => a.id === params.article && a.categoryId === params.category)

  if (!category || !article) {
    return {
      title: 'Artículo no encontrado - StorageFy',
      description: 'El artículo que buscas no existe.',
    }
  }

  const baseUrl = 'https://storagefy.co'
  const url = `${baseUrl}/help/${params.category}/${params.article}`
  const title = `${article.title.es} - StorageFy Ayuda`
  const description = article.description.es || article.content.es.substring(0, 160)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: ['StorageFy'],
      tags: article.tags,
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.png'],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const category = getCategoryById(params.category)
  const article = helpArticles.find(a => a.id === params.article && a.categoryId === params.category)

  if (!category || !article) {
    notFound()
  }

  const baseUrl = 'https://storagefy.co'
  const url = `${baseUrl}/help/${params.category}/${params.article}`

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title.es,
    description: article.description.es,
    author: {
      '@type': 'Organization',
      name: 'StorageFy',
    },
    publisher: {
      '@type': 'Organization',
      name: 'StorageFy',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: category.name.es,
    keywords: article.tags.join(', '),
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ayuda',
        item: `${baseUrl}/help`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name.es,
        item: `${baseUrl}/help/${category.id}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: article.title.es,
        item: url,
      },
    ],
  }

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <ArticlePageClient category={category} article={article} />
    </>
  )
}
