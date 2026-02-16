import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prueba StorageFy - Demo',
  description: 'Accede a la demo de StorageFy y explora el sistema de gestión de trasteros.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DemoTrialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
