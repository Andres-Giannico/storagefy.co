import type { Metadata } from 'next'
import SeoLandingContent from '@/components/seo/SeoLandingContent'

export const metadata: Metadata = {
  title: 'Self Storage Software Europe | Multi-Country & VAT-Ready | StorageFy',
  description: 'Self storage software for Europe: multi-country, VAT-compliant billing, multi-language. Built for EU operators. Book a demo or start free trial.',
  keywords: ['self storage software europe', 'storage software EU', 'European self storage software', 'storage management Europe'],
  alternates: { canonical: 'https://storagefy.co/self-storage-software-europe' },
  openGraph: {
    title: 'Self Storage Software Europe | StorageFy',
    description: 'Self storage software for Europe: multi-country, VAT-compliant, built for EU operators.',
    url: 'https://storagefy.co/self-storage-software-europe',
    type: 'website',
  },
}

export default function SelfStorageSoftwareEuropePage() {
  return (
    <SeoLandingContent
      title="Self storage software for Europe"
      subtitle="StorageFy is built for European self-storage operators: multi-country support, VAT-compliant invoicing, and pricing in local currency."
      body={
        <>
          <p>
            Running self storage in Europe means dealing with multiple countries, VAT rules and local expectations. Our self storage software for Europe is designed for that: manage facilities across borders, issue compliant invoices, and offer online booking and automated billing in the way your customers expect.
          </p>
          <p>
            From Spain to the UK and across the EU, operators use StorageFy for occupancy analytics, contracts, payments and integrations. Start a free trial or book a demo to see how it fits your European operations.
          </p>
        </>
      }
    />
  )
}
