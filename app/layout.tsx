import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/lib/context/LanguageContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'StorageFy - Gestión Avanzada de Trasteros',
  description: 'El software más avanzado de gestión de trasteros. Controla tus espacios con precisión, elegancia y control total.',
  keywords: ['trasteros', 'gestión', 'software', 'almacenamiento', 'control'],
  authors: [{ name: 'StorageFy' }],
  creator: 'StorageFy',
  publisher: 'StorageFy',
  metadataBase: new URL('https://storagefy.co'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#7CB342',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://storagefy.co',
    title: 'StorageFy - Gestión Avanzada de Trasteros',
    description: 'El software más avanzado de gestión de trasteros. Controla tus espacios con precisión, elegancia y control total.',
    siteName: 'StorageFy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StorageFy - Gestión Avanzada de Trasteros',
    description: 'El software más avanzado de gestión de trasteros. Controla tus espacios con precisión, elegancia y control total.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

