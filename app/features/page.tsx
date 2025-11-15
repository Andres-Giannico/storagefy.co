import type { Metadata } from 'next'
import FeaturesPageClient from './FeaturesPageClient'

export const metadata: Metadata = {
  title: 'Funcionalidades - StorageFy | Software de Gestión de Trasteros',
  description: 'Descubre todas las funcionalidades de StorageFy: gestión de unidades, clientes, contratos digitales, pagos, reportes y más.',
  keywords: ['funcionalidades storagefy', 'características software trasteros', 'features gestión almacenes'],
  alternates: {
    canonical: 'https://storagefy.co/features',
  },
  openGraph: {
    title: 'Funcionalidades - StorageFy',
    description: 'Descubre todas las funcionalidades de StorageFy para gestionar tu negocio de trasteros.',
    url: 'https://storagefy.co/features',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Funcionalidades StorageFy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funcionalidades - StorageFy',
    description: 'Descubre todas las funcionalidades de StorageFy.',
    images: ['/logo.png'],
  },
}

export default function FeaturesPage() {
  return <FeaturesPageClient />
}
