import type { Metadata } from 'next'
import WebsitePageClient from './WebsitePageClient'

export const metadata: Metadata = {
  title: 'Página Web para Trasteros | StorageFy — Web + Widget + Dominio',
  description: '¿Tienes trasteros pero no presencia web? Creamos tu página profesional, instalamos el widget de reservas 24/7, dominio incluido y hosting en Vercel. Desde 19€/mes.',
  keywords: ['página web trasteros', 'web self storage', 'landing trasteros', 'widget reservas trasteros', 'dominio trasteros'],
  alternates: {
    canonical: 'https://storagefy.co/website',
  },
  openGraph: {
    title: 'Página Web para Trasteros | StorageFy',
    description: 'Web profesional + widget de reservas + dominio. Para operadores sin presencia online. Desde 19€/mes.',
    url: 'https://storagefy.co/website',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'StorageFy - Página Web para Trasteros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Página Web para Trasteros | StorageFy',
    description: 'Web profesional + widget + dominio. Desde 19€/mes.',
    images: ['/logo.png'],
  },
}

export default function WebsitePage() {
  return <WebsitePageClient />
}
