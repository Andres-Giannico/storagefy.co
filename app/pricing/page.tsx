import type { Metadata } from 'next'
import PricingPageClient from './PricingPageClient'

export const metadata: Metadata = {
  title: 'Precios - StorageFy | Planes y Tarifas',
  description: 'Precio simple: 1 EUR por unidad al mes + IVA. Hasta 140 unidades. Prueba la demo en 2 minutos, sin tarjeta.',
  keywords: ['precios storagefy', 'planes trasteros', 'tarifas software trasteros', 'precio gestión almacenes'],
  alternates: {
    canonical: 'https://storagefy.co/pricing',
  },
  openGraph: {
    title: 'Precios - StorageFy',
    description: 'Precio simple: 1 EUR por unidad al mes + IVA. Hasta 140 unidades.',
    url: 'https://storagefy.co/pricing',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Precios StorageFy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precios - StorageFy',
    description: 'Planes flexibles para gestionar tu negocio de trasteros.',
    images: ['/logo.png'],
  },
}

export default function PricingPage() {
  return <PricingPageClient />
}
