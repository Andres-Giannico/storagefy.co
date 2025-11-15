import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import UseCases from '@/components/sections/UseCases'
import ROICalculator from '@/components/ROICalculator'
import DetailedMetrics from '@/components/sections/DetailedMetrics'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'
import StructuredData from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'StorageFy - Gestión Avanzada de Trasteros | Software SaaS',
  description: 'El software más avanzado de gestión de trasteros. Controla tus espacios con precisión, elegancia y control total. Gestiona unidades, clientes, contratos y pagos en una sola plataforma.',
  keywords: ['software de trasteros', 'gestión de almacenes', 'SaaS trasteros', 'software gestión almacenamiento', 'sistema de gestión trasteros'],
  alternates: {
    canonical: 'https://storagefy.co',
  },
  openGraph: {
    title: 'StorageFy - Gestión Avanzada de Trasteros',
    description: 'El software más avanzado de gestión de trasteros. Controla tus espacios con precisión, elegancia y control total.',
    url: 'https://storagefy.co',
    siteName: 'StorageFy',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'StorageFy - Gestión Avanzada de Trasteros',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StorageFy - Gestión Avanzada de Trasteros',
    description: 'El software más avanzado de gestión de trasteros.',
    images: ['/logo.png'],
  },
}

export default function Home() {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'StorageFy',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '3',
      lowPrice: '29',
      highPrice: '149',
      priceCurrency: 'EUR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    description: 'Software de gestión avanzada para trasteros y almacenes. Controla unidades, clientes, contratos y pagos en una sola plataforma.',
    url: 'https://storagefy.co',
    screenshot: 'https://storagefy.co/logo.png',
    featureList: [
      'Gestión de unidades con dimensiones precisas',
      'CRM integrado para clientes',
      'Contratos digitales',
      'Sistema de pagos integrado',
      'Reportes y analytics',
      'Planos interactivos',
    ],
  }

  return (
    <>
      <StructuredData data={softwareApplicationSchema} />
      <div className="min-h-screen">
        <Hero />
        <Features />
        <UseCases />
        <ROICalculator />
        <DetailedMetrics />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </div>
    </>
  )
}

