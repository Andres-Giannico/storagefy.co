import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prueba StorageFy - El software más completo para trasteros',
  description: 'El software más completo para trasteros: unidades, clientes, contratos, widget 24/7, control de puertas, roles, exportaciones. Accede a la demo sin compromiso.',
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
