import { HelpArticle } from '../help-categories'

export const tablonArticles: HelpArticle[] = [
  {
    id: 'crear-anuncios',
    categoryId: 'tablon',
    title: { es: 'Crear Anuncios en el Tablón', en: 'Create Board Announcements' },
    description: { es: 'Comunícate con tu equipo', en: 'Communicate with your team' },
    content: {
      es: `# Crear Anuncios en el Tablón

1. Ve a Tablón de Anuncios
2. Haz clic en "Nuevo Anuncio"
3. Selecciona categoría
4. Escribe tu mensaje
5. Publica

Las categorías ayudan a organizar: Anuncios, Ideas, Problemas, Urgente.`,
      en: `# Create Board Announcements

1. Go to Announcement Board
2. Click "New Announcement"
3. Select category
4. Write your message
5. Publish

Categories help organize: Announcements, Ideas, Problems, Urgent.`
    },
    tags: ['tablón', 'anuncios'],
    order: 1
  },
]
