import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Implementation from '@/components/sections/Implementation'
import ClientProfiles from '@/components/sections/ClientProfiles'
import Features from '@/components/sections/Features'
import UseCases from '@/components/sections/UseCases'
import ROICalculator from '@/components/ROICalculator'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'
import StructuredData from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'StorageFy - Gestión de Trasteros y Parkings | Software SaaS',
  description: 'Software de gestión para trasteros y parkings. Reservas online, cobros automáticos y control total de unidades. Gestiona clientes, contratos y pagos en una sola plataforma.',
  keywords: ['software de trasteros', 'gestión de parkings', 'software gestión almacenamiento', 'sistema de gestión trasteros', 'alquiler parking largo plazo'],
  alternates: {
    canonical: 'https://storagefy.co',
  },
  openGraph: {
    title: 'StorageFy - Gestión de Trasteros y Parkings',
    description: 'Software de gestión para trasteros y parkings. Reservas online, cobros automáticos y control total de unidades.',
    url: 'https://storagefy.co',
    siteName: 'StorageFy',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'StorageFy - Gestión de Trasteros y Parkings',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StorageFy - Gestión de Trasteros y Parkings',
    description: 'Software de gestión para trasteros y parkings. Reservas online y cobros automáticos.',
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
    description: 'Software de gestión avanzada para trasteros y parkings. Controla unidades, clientes, contratos y pagos en una sola plataforma.',
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
        <Implementation />
        <ClientProfiles />
        <Features />
        <UseCases />
        <ROICalculator />
        <Testimonials />
        <FinalCTA />
      </div>
    </>
  )
}

