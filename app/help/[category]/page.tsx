import type { Metadata } from 'next'
import { getCategoryById } from '@/lib/help/help-categories'
import { helpArticles } from '@/lib/help/help-content'
import CategoryPageClient from './CategoryPageClient'
import StructuredData from '@/components/seo/StructuredData'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryById(params.category)

  if (!category) {
    return {
      title: 'Categoría no encontrada - StorageFy Ayuda',
      description: 'La categoría que buscas no existe.',
    }
  }

  const baseUrl = 'https://storagefy.co'
  const url = `${baseUrl}/help/${params.category}`
  const title = `${category.name.es} - StorageFy Ayuda`
  const description = category.description.es

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
      type: 'website',
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

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.category)

  if (!category) {
    notFound()
  }

  const baseUrl = 'https://storagefy.co'
  const url = `${baseUrl}/help/${category.id}`

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
        item: url,
      },
    ],
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <CategoryPageClient category={category} />
    </>
  )
}
