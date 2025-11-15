import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'Sobre Nosotros - StorageFy | Nuestra Historia',
  description: 'Conoce la historia de StorageFy y nuestro equipo. Creamos software de gestión de trasteros para ayudar a negocios a crecer.',
  keywords: ['sobre storagefy', 'equipo storagefy', 'historia storagefy'],
  alternates: {
    canonical: 'https://storagefy.co/about',
  },
  openGraph: {
    title: 'Sobre Nosotros - StorageFy',
    description: 'Conoce la historia de StorageFy y nuestro equipo.',
    url: 'https://storagefy.co/about',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sobre StorageFy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nosotros - StorageFy',
    description: 'Conoce la historia de StorageFy y nuestro equipo.',
    images: ['/logo.png'],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
