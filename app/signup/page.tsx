import type { Metadata } from 'next'
import SignupPageClient from './SignupPageClient'

export const metadata: Metadata = {
  title: 'Regístrate - StorageFy | Crear cuenta gratuita',
  description: 'Crea tu cuenta gratuita en StorageFy y empieza a gestionar tu negocio de trasteros y parkings. Registro rápido y fácil.',
  keywords: ['registro', 'crear cuenta', 'signup', 'storagefy', 'gestión trasteros'],
  alternates: {
    canonical: 'https://storagefy.co/signup',
  },
  openGraph: {
    title: 'Regístrate en StorageFy - Crear cuenta gratuita',
    description: 'Crea tu cuenta gratuita y empieza a gestionar tu negocio de trasteros.',
    url: 'https://storagefy.co/signup',
    siteName: 'StorageFy',
    type: 'website',
  },
}

export default function SignupPage() {
  return <SignupPageClient />
}

