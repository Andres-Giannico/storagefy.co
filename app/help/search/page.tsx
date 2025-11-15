import type { Metadata } from 'next'
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

export default function HelpSearchPage() {
  return <HelpSearchPageClient />
