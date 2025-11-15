import type { Metadata } from 'next'
import { Suspense } from 'react'
import HelpSearchPageClient from './HelpSearchPageClient'

export const metadata: Metadata = {
  title: 'Búsqueda de Ayuda - StorageFy',
  description: 'Busca en nuestra base de conocimiento para encontrar respuestas rápidas sobre StorageFy.',
  alternates: {
    canonical: 'https://storagefy.co/help/search',
  },
  robots: {
    index: false,
    follow: false,
  },
}

function SearchFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-4 border-accent-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-primary-600">Cargando búsqueda...</p>
      </div>
    </div>
  )
}

export default function HelpSearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <HelpSearchPageClient />
    </Suspense>
  )
}
