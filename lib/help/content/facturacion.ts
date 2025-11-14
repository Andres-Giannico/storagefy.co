import { HelpArticle } from '../help-categories'

export const facturacionArticles: HelpArticle[] = [
  {
    id: 'generar-facturas',
    categoryId: 'facturacion',
    title: { es: 'Generación Automática de Facturas', en: 'Automatic Invoice Generation' },
    description: { es: 'Las facturas se generan automáticamente', en: 'Invoices are generated automatically' },
    content: {
      es: `# Generación Automática de Facturas

Las facturas se generan automáticamente cada mes según la fecha de inicio del contrato. Puedes verlas y descargarlas en formato PDF.`,
      en: `# Automatic Invoice Generation

Invoices are automatically generated each month according to the contract start date. You can view and download them in PDF format.`
    },
    tags: ['facturas', 'generar'],
    order: 1
  },
]
