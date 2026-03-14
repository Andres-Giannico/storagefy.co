import type { Metadata } from 'next'
import { blogArticles } from '@/lib/blog/blog-content'
import BlogArticleCard from '@/components/blog/BlogArticleCard'
import BlogBreadcrumbs from '@/components/blog/BlogBreadcrumbs'
import StructuredData from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Blog - StorageFy | Software de Gestión de Trasteros',
  description: 'Artículos sobre software de self storage, gestión de trasteros, automatización y mejores prácticas para operadores de almacenamiento.',
  keywords: ['blog storage', 'software trasteros', 'gestión almacenamiento', 'self storage', 'automatización'],
  alternates: {
    canonical: 'https://storagefy.co/blog',
  },
  openGraph: {
    title: 'Blog - StorageFy | Software de Gestión de Trasteros',
    description: 'Artículos sobre software de self storage, gestión de trasteros y mejores prácticas.',
    url: 'https://storagefy.co/blog',
    siteName: 'StorageFy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - StorageFy',
    description: 'Artículos sobre software de self storage y gestión de trasteros.',
  },
}

export default function BlogPage() {
  const baseUrl = 'https://storagefy.co'

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'StorageFy Blog',
    description: 'Artículos sobre software de self storage, gestión de trasteros y mejores prácticas.',
    url: `${baseUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'StorageFy',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    blogPost: blogArticles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title.es,
      url: `${baseUrl}/blog/${article.slug}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      author: {
        '@type': 'Organization',
        name: article.author.name,
      },
    })),
  }

  return (
    <>
      <StructuredData data={blogListSchema} />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <BlogBreadcrumbs />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
              Blog StorageFy
            </h1>
            <p className="text-xl text-primary-600 max-w-2xl">
              Artículos sobre software de self storage, gestión de trasteros, automatización y mejores prácticas para operadores.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <BlogArticleCard key={article.slug} article={article} />
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
