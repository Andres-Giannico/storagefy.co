import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getBlogArticleBySlug, getAllBlogSlugs, blogArticles } from '@/lib/blog/blog-content'
import { calculateReadingTime } from '@/lib/blog/blog-utils'
import BlogBreadcrumbs from '@/components/blog/BlogBreadcrumbs'
import BlogArticleClient from './BlogArticleClient'
import StructuredData from '@/components/seo/StructuredData'

interface BlogArticlePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = params
  const article = getBlogArticleBySlug(slug)
  if (!article) return { title: 'Artículo no encontrado - StorageFy' }

  const baseUrl = 'https://storagefy.co'
  const url = `${baseUrl}/blog/${slug}`
  const title = `${article.title.es} | StorageFy Blog`
  const description = article.description.es

  return {
    title,
    description,
    keywords: article.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.keywords,
      images: [
        {
          url: `${baseUrl}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.imageAlt.es,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${article.image}`],
    },
  }
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = params
  const article = getBlogArticleBySlug(slug)
  if (!article) notFound()

  const baseUrl = 'https://storagefy.co'
  const url = `${baseUrl}/blog/${slug}`
  const imageUrl = article.image.startsWith('http') ? article.image : `${baseUrl}${article.image}`

  // Sharefox-style schema: Article + BlogPosting, WebPage, BreadcrumbList, ImageObject, Person
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': ['Article', 'BlogPosting'],
    '@id': `${url}#article`,
    headline: article.title.es,
    description: article.description.es,
    image: {
      '@type': 'ImageObject',
      '@id': `${url}#primaryimage`,
      url: imageUrl,
      width: 1200,
      height: 630,
      caption: article.imageAlt.es,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url,
      image: article.author.image,
    },
    publisher: {
      '@type': 'Organization',
      name: 'StorageFy',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: article.keywords,
    articleSection: article.category.es,
    inLanguage: 'es-ES',
    thumbnailUrl: imageUrl,
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    name: article.title.es,
    description: article.description.es,
    isPartOf: { '@id': `${baseUrl}/#website` },
    primaryImageOfPage: { '@id': `${url}#primaryimage` },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    breadcrumb: { '@id': `${url}#breadcrumb` },
    inLanguage: 'es-ES',
    potentialAction: {
      '@type': 'ReadAction',
      target: [url],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'StorageFy', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title.es, item: url },
    ],
  }

  const imageObjectSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${url}#primaryimage`,
    url: imageUrl,
    width: 1200,
    height: 630,
    caption: article.imageAlt.es,
  }

  const schemas: Record<string, unknown>[] = [
    articleSchema,
    webPageSchema,
    breadcrumbSchema,
    imageObjectSchema,
  ]

  if (article.faq && article.faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faq.map((item) => ({
        '@type': 'Question',
        name: item.question.es,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer.es,
        },
      })),
    })
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <StructuredData key={i} data={schema as Record<string, unknown>} />
      ))}
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <BlogBreadcrumbs articleTitle={article.title.es} />
          <BlogArticleClient
            article={article}
            relatedArticles={
              article.relatedSlugs
                ?.map((slug) => blogArticles.find((a) => a.slug === slug))
                ?.filter((r): r is NonNullable<typeof r> => !!r)
                ?.map((r) => ({ slug: r.slug, title: r.title })) ?? []
            }
          />
        </div>
      </div>
    </>
  )
}
