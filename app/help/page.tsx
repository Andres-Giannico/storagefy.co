import type { Metadata } from 'next'
import HelpPageClient from './HelpPageClient'

export const metadata: Metadata = {
  title: 'Centro de Ayuda - StorageFy | Documentación y Soporte',
  description: 'Encuentra respuestas rápidas, guías paso a paso y documentación completa sobre cómo usar StorageFy para gestionar tu negocio de trasteros.',
  keywords: ['ayuda storagefy', 'documentación storagefy', 'soporte storagefy', 'guías storagefy'],
  alternates: {
    canonical: 'https://storagefy.co/help',
  },
  openGraph: {
    title: 'Centro de Ayuda - StorageFy',
    description: 'Encuentra respuestas rápidas y guías paso a paso sobre StorageFy.',
    url: 'https://storagefy.co/help',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Centro de Ayuda StorageFy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro de Ayuda - StorageFy',
    description: 'Encuentra respuestas rápidas y guías paso a paso sobre StorageFy.',
    images: ['/logo.png'],
  },
}

export default function HelpPage() {
  return <HelpPageClient />
}
