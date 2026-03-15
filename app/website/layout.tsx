import { Syne } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={syne.className}>{children}</div>
}
