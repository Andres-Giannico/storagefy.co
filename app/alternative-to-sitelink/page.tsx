import type { Metadata } from 'next'
import SeoLandingContent from '@/components/seo/SeoLandingContent'

export const metadata: Metadata = {
  title: 'Alternative to SiteLink | Self Storage Software | StorageFy',
  description: 'Looking for an alternative to SiteLink? StorageFy is a modern self storage software with simple pricing, multi-location, automated billing & online booking. Book a demo or start free trial.',
  keywords: ['alternative to SiteLink', 'SiteLink alternative', 'self storage software', 'storage management software'],
  alternates: { canonical: 'https://storagefy.co/alternative-to-sitelink' },
  openGraph: {
    title: 'Alternative to SiteLink | StorageFy',
    description: 'Modern alternative to SiteLink: simple pricing, multi-location, automated billing & online booking.',
    url: 'https://storagefy.co/alternative-to-sitelink',
    type: 'website',
  },
}

export default function AlternativeToSitelinkPage() {
  return (
    <SeoLandingContent
      title="A modern alternative to SiteLink"
      subtitle="Considering an alternative to SiteLink? StorageFy delivers modern self storage software with simple pricing, fast setup and the tools operators need: multi-location, automated billing, occupancy analytics and online booking."
      body={
        <>
          <p>
            SiteLink is widely used in the industry. If you’re looking for an alternative, StorageFy offers a focused self storage platform: per-unit pricing that’s easy to understand, quick onboarding, and one system for multiple locations, automated billing, occupancy analytics, contracts, invoices and 24/7 online booking.
          </p>
          <p>
            Operators choose StorageFy for transparent costs, EU/VAT-ready invoicing and support in Spanish and English. Start a free trial or book a demo to see how it compares for your business.
          </p>
        </>
      }
    />
  )
}
