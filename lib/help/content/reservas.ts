import { HelpArticle } from '../help-categories'

export const reservasArticles: HelpArticle[] = [
  {
    id: 'configurar-widget',
    categoryId: 'reservas',
    title: { es: 'Configurar Widget de Reservas', en: 'Configure Reservation Widget' },
    description: { es: 'Integra el widget en tu web', en: 'Integrate widget on your website' },
    content: {
      es: `# Configurar Widget de Reservas

1. Ve a Configuración > Widgets
2. Crea un nuevo widget
3. Personaliza colores y texto
4. Copia el código HTML
5. Pégalo en tu web

El widget mostrará unidades disponibles en tiempo real.`,
      en: `# Configure Reservation Widget

1. Go to Settings > Widgets
2. Create new widget
3. Customize colors and text
4. Copy HTML code
5. Paste on your website

The widget will show available units in real time.`
    },
    tags: ['widget', 'reservas'],
    order: 1,
    featured: true
  },
]
