import type { Metadata } from 'next'
import SeoLandingContent from '@/components/seo/SeoLandingContent'

export const metadata: Metadata = {
  title: 'Software de Trasteros y Self Storage España | StorageFy',
  description: 'Software de gestión para trasteros y self storage en España. Facturación con IVA, reservas online, cobros automáticos. Prueba gratis o reserva una demo.',
  keywords: ['storage software Spain', 'software trasteros España', 'software self storage España', 'gestión trasteros España', 'software almacenes España'],
  alternates: { canonical: 'https://storagefy.co/storage-software-spain' },
  openGraph: {
    title: 'Software de Trasteros y Self Storage España | StorageFy',
    description: 'Software de gestión para trasteros y self storage en España. IVA, reservas online, cobros automáticos.',
    url: 'https://storagefy.co/storage-software-spain',
    type: 'website',
  },
}

export default function StorageSoftwareSpainPage() {
  return (
    <SeoLandingContent
      title="Software de trasteros y self storage para España"
      subtitle="StorageFy es el software de gestión para operadores de trasteros y self storage en España: facturación con IVA, reservas online y cobros automáticos."
      body={
        <>
          <p>
            Gestionar trasteros, mini almacenes o plazas de parking en España requiere facturación con IVA, contratos claros y cobros recurrentes sin fricción. Con StorageFy tienes todo en una sola plataforma: unidades, clientes, contratos, facturas y pagos, más widget de reservas para tu web y analytics de ocupación.
          </p>
          <p>
            Más de 50 negocios en España ya usan StorageFy. Prueba gratis sin tarjeta o reserva una demo y te mostramos cómo encaja en tu operación.
          </p>
        </>
      }
    />
  )
}
