import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'StorageFy - Vídeo demo del sistema',
  description: 'Descubre StorageFy en acción. El software más completo para gestión de trasteros. Unidades, clientes, contratos, cobros y widget 24/7 en una sola plataforma.',
  openGraph: {
    title: 'StorageFy - Vídeo demo del sistema',
    description: 'Descubre StorageFy en acción. El software más completo para gestión de trasteros.',
    url: 'https://storagefy.co/video',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
