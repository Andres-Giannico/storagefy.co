import type { Metadata } from 'next'
import FAQPageClient from './FAQPageClient'
import StructuredData from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - StorageFy | FAQ',
  description: 'Encuentra respuestas a las preguntas más frecuentes sobre StorageFy: precios, funcionalidades, migración de datos y más.',
  keywords: ['faq storagefy', 'preguntas frecuentes', 'ayuda storagefy', 'soporte storagefy'],
  alternates: {
    canonical: 'https://storagefy.co/faq',
  },
  openGraph: {
    title: 'Preguntas Frecuentes - StorageFy',
    description: 'Encuentra respuestas a las preguntas más frecuentes sobre StorageFy.',
    url: 'https://storagefy.co/faq',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'FAQ StorageFy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preguntas Frecuentes - StorageFy',
    description: 'Encuentra respuestas a las preguntas más frecuentes sobre StorageFy.',
    images: ['/logo.png'],
  },
}

export default function FAQPage() {
  // FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuáles son los planes y precios de StorageFy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tenemos un modelo de precios simple: 1 EUR por unidad al mes + IVA hasta 200 unidades. Para más de 200 unidades ofrecemos precios personalizados con descuentos por volumen. Todos los planes incluyen locaciones ilimitadas, usuarios ilimitados y 14 días de prueba gratis sin tarjeta de crédito.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hay descuentos por volumen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, para más de 200 unidades ofrecemos precios personalizados con descuentos por volumen. Contacta con nuestro equipo para más información.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué funcionalidades incluye StorageFy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'StorageFy incluye gestión completa de unidades, contratos digitales con firma electrónica, cobros automáticos con Stripe, reportes y analytics en tiempo real, widget de reservas para tu web, y mucho más.',
        },
      },
    ],
  }

  return (
    <>
      <StructuredData data={faqSchema} />
      <FAQPageClient />
    </>
  )
}
