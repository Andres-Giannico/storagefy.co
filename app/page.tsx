import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Implementation from '@/components/sections/Implementation'
import ClientProfiles from '@/components/sections/ClientProfiles'
import Features from '@/components/sections/Features'
import UseCases from '@/components/sections/UseCases'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'
import StructuredData from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'StorageFy - Software Potente para Self Storage y Parkings | SaaS',
  description: 'Software potente y automatizado para trasteros y parkings. Accesos, automatización, multi-sede, SEPA, reporting e integraciones. Fácil de implantar, potente para escalar.',
  keywords: ['software de trasteros', 'gestión de parkings', 'software self storage', 'accesos automatización', 'SEPA cobros', 'multi-sede', 'software gestión almacenamiento'],
  alternates: {
    canonical: 'https://storagefy.co',
  },
  openGraph: {
    title: 'StorageFy - Software Potente para Self Storage y Parkings',
    description: 'Software potente y automatizado. Accesos, automatización, multi-sede, SEPA, reporting e integraciones. Fácil de implantar, potente para escalar.',
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
    title: 'StorageFy - Software Potente para Self Storage y Parkings',
    description: 'Software potente y automatizado. Accesos, multi-sede, SEPA, reporting e integraciones.',
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
    description: 'Software potente y automatizado para self storage y parkings. Accesos, automatización, multi-sede, SEPA, reporting e integraciones en una plataforma.',
    url: 'https://storagefy.co',
    screenshot: 'https://storagefy.co/logo.png',
    featureList: [
      'Control de accesos y automatización',
      'Multi-sede y gestión de locaciones',
      'SEPA, cobros bancarios y recobro',
      'Reporting e inteligencia de negocio',
      'Integraciones (Stripe, widget, contabilidad)',
      'Bloqueo por impago',
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
        <Testimonials />
        <FinalCTA />
      </div>
    </>
  )
}

