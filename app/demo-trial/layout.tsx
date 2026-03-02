import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-demo',
  display: 'swap',
})

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
  return <div className={plusJakarta.variable}>{children}</div>
}
