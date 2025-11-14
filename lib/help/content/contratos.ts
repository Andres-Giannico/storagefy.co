import { HelpArticle } from '../help-categories'

export const contratosArticles: HelpArticle[] = [
  {
    id: 'crear-contratos',
    categoryId: 'contratos',
    title: { es: 'Crear Contratos Digitales', en: 'Create Digital Contracts' },
    description: { es: 'Genera contratos en segundos', en: 'Generate contracts in seconds' },
    content: {
      es: `# Crear Contratos Digitales

## Asistente de Creación

1. Selecciona el cliente
2. Elige la unidad (verás dimensiones)
3. El sistema sugiere precio
4. Ajusta fechas y términos
5. Genera el contrato

## Contratos Multi-Unidad

Puedes agregar múltiples unidades al mismo contrato con precio calculado automáticamente.`,
      en: `# Create Digital Contracts

## Creation Assistant

1. Select the customer
2. Choose the unit (you'll see dimensions)
3. System suggests price
4. Adjust dates and terms
5. Generate contract

## Multi-Unit Contracts

You can add multiple units to the same contract with automatically calculated price.`
    },
    tags: ['contratos', 'crear'],
    order: 1,
    featured: true
  },
]
