import type { Metadata } from 'next'
import SeoLandingContent from '@/components/seo/SeoLandingContent'

export const metadata: Metadata = {
  title: 'Storage Management Software | Self-Storage Operations | StorageFy',
  description: 'Modern storage management software for self-storage operators. Multi-location, automated billing, occupancy analytics, contracts, invoices & online booking. Book a demo.',
  keywords: ['storage management software', 'self storage software', 'storage facility management', 'warehouse management software'],
  alternates: { canonical: 'https://storagefy.co/storage-management-software' },
  openGraph: {
    title: 'Storage Management Software | StorageFy',
    description: 'Modern storage management software for self-storage operators. Multi-location, automated billing, occupancy analytics.',
    url: 'https://storagefy.co/storage-management-software',
    type: 'website',
  },
}

export default function StorageManagementSoftwarePage() {
  return (
    <SeoLandingContent
      title="Storage management software for modern operators"
      subtitle="The all-in-one platform to run your self-storage business: multi-location, automated billing, occupancy analytics, contracts, invoices and online booking."
      body={
        <>
          <p>
            StorageFy is built for self-storage operators who want to replace spreadsheets and manual processes with a single, modern system. Manage multiple locations, automate recurring billing, track occupancy in real time, generate contracts and invoices, and accept online bookings 24/7 — all from one dashboard.
          </p>
          <p>
            Whether you run a single facility or a growing portfolio, our storage management software scales with you. Start with a free trial and see why operators across Europe choose StorageFy.
          </p>
        </>
      }
    />
  )
}
