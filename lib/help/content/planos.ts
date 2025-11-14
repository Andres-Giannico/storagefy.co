import { HelpArticle } from '../help-categories'

export const planosArticles: HelpArticle[] = [
  {
    id: 'visualizar-planos',
    categoryId: 'planos',
    title: { es: 'Visualizar Planos Interactivos', en: 'View Interactive Floor Plans' },
    description: { es: 'Ve el estado de tus unidades en tiempo real', en: 'See your units status in real time' },
    content: {
      es: `# Visualizar Planos Interactivos

## Ver Plano

1. Ve a Planos
2. Selecciona la locación
3. Verás todas las unidades con colores:
   - Verde: Disponible
   - Rojo: Ocupada
   - Amarillo: Reservada
   - Gris: Mantenimiento

## Time Travel

Usa el selector de fecha para ver estados históricos o futuros.`,
      en: `# View Interactive Floor Plans

## View Floor Plan

1. Go to Floor Plans
2. Select location
3. You'll see all units with colors:
   - Green: Available
   - Red: Occupied
   - Yellow: Reserved
   - Gray: Maintenance

## Time Travel

Use the date selector to view historical or future states.`
    },
    tags: ['planos', 'visualizar'],
    order: 1
  },
]
