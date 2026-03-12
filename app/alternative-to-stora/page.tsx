import type { Metadata } from 'next'
import SeoLandingContent from '@/components/seo/SeoLandingContent'

export const metadata: Metadata = {
  title: 'Alternative to Stora | Modern Self Storage Software | StorageFy',
  description: 'Looking for an alternative to Stora? StorageFy offers modern self storage software: simpler pricing, faster onboarding, multi-location, automated billing & online booking. Book a demo.',
  keywords: ['alternative to Stora', 'Stora alternative', 'self storage software', 'storage management software'],
  alternates: { canonical: 'https://storagefy.co/alternative-to-stora' },
  openGraph: {
    title: 'Alternative to Stora | StorageFy',
    description: 'Modern alternative to Stora: simpler pricing, faster onboarding, multi-location & automated billing.',
    url: 'https://storagefy.co/alternative-to-stora',
    type: 'website',
  },
}

export default function AlternativeToStoraPage() {
  return (
    <SeoLandingContent
      title="A modern alternative to Stora"
      subtitle="If you’re looking for an alternative to Stora, StorageFy offers modern self storage software with simpler pricing, faster onboarding and the features operators need today."
      body={
        <>
          <p>
            Stora is a well-known option in self storage software. If you’re evaluating alternatives, StorageFy is built for operators who want straightforward pricing (e.g. per-unit), quick setup, and a single place for multi-location management, automated billing, occupancy analytics, contracts, invoices and online booking.
          </p>
          <p>
            Many teams switch for easier onboarding, native EU/VAT-friendly invoicing and support in Spanish and English. You can start a free trial or book a demo to compare and see if StorageFy fits your operations.
          </p>
        </>
      }
    />
  )
}
