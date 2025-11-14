import { HelpArticle } from '../help-categories'

export const reportesArticles: HelpArticle[] = [
  {
    id: 'reportes-financieros',
    categoryId: 'reportes',
    title: { es: 'Reportes Financieros', en: 'Financial Reports' },
    description: { es: 'Analiza los ingresos de tu negocio', en: 'Analyze your business revenue' },
    content: {
      es: `# Reportes Financieros

## Tipos de Reportes

- Ingresos mensuales
- Ocupación por superficie/volumen
- Análisis de morosidad
- Proyecciones futuras

Todos los reportes se pueden exportar en PDF.`,
      en: `# Financial Reports

## Report Types

- Monthly revenue
- Occupancy by surface/volume
- Delinquency analysis
- Future projections

All reports can be exported to PDF.`
    },
    tags: ['reportes', 'financiero'],
    order: 1
  },
]
