import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-demo',
  display: 'swap',
})

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={plusJakarta.variable}>{children}</div>
}
