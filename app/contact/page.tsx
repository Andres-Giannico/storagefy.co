import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contacto - StorageFy | Habla con Nosotros',
  description: 'Contacta con el equipo de StorageFy. Estamos aquí para ayudarte con cualquier pregunta sobre nuestro software de gestión de trasteros.',
  keywords: ['contacto storagefy', 'soporte storagefy', 'hablar con storagefy'],
  alternates: {
    canonical: 'https://storagefy.co/contact',
  },
  openGraph: {
    title: 'Contacto - StorageFy',
    description: 'Contacta con el equipo de StorageFy. Estamos aquí para ayudarte.',
    url: 'https://storagefy.co/contact',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contacto StorageFy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - StorageFy',
    description: 'Contacta con el equipo de StorageFy.',
    images: ['/logo.png'],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
