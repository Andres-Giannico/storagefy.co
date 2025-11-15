import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/lib/context/LanguageContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Chatbot from '@/components/Chatbot'
import StructuredData from '@/components/seo/StructuredData'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'StorageFy - Gestión Avanzada de Trasteros',
  description: 'El software más avanzado de gestión de trasteros. Controla tus espacios con precisión, elegancia y control total.',
  keywords: ['trasteros', 'gestión', 'software', 'almacenamiento', 'control', 'SaaS', 'gestión de almacenes', 'software de trasteros', 'sistema de gestión'],
  authors: [{ name: 'StorageFy' }],
  creator: 'StorageFy',
  publisher: 'StorageFy',
  applicationName: 'StorageFy',
  category: 'Software',
  classification: 'Business Software',
  metadataBase: new URL('https://storagefy.co'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#7CB342',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://storagefy.co',
    title: 'StorageFy - Gestión Avanzada de Trasteros',
    description: 'El software más avanzado de gestión de trasteros. Controla tus espacios con precisión, elegancia y control total.',
    siteName: 'StorageFy',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'StorageFy - Gestión Avanzada de Trasteros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StorageFy - Gestión Avanzada de Trasteros',
    description: 'El software más avanzado de gestión de trasteros. Controla tus espacios con precisión, elegancia y control total.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://storagefy.co',
    languages: {
      'es-ES': 'https://storagefy.co',
      'en-US': 'https://storagefy.co',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StorageFy',
    url: 'https://storagefy.co',
    logo: 'https://storagefy.co/logo.png',
    description: 'Software de gestión avanzada para trasteros y almacenes',
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@storagefy.co',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StorageFy',
    url: 'https://storagefy.co',
    description: 'El software más avanzado de gestión de trasteros',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://storagefy.co/help/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  )
}

