import { HelpArticle } from '../help-categories'

export const configuracionArticles: HelpArticle[] = [
  {
    id: 'configuracion-general',
    categoryId: 'configuracion',
    title: { es: 'Configuración General', en: 'General Settings' },
    description: { es: 'Ajusta la configuración del sistema', en: 'Adjust system settings' },
    content: {
      es: `# Configuración General

Desde Configuración puedes:
- Modificar datos del negocio
- Cambiar preferencias de usuario
- Configurar notificaciones
- Gestionar integraciones`,
      en: `# General Settings

From Settings you can:
- Modify business data
- Change user preferences
- Configure notifications
- Manage integrations`
    },
    tags: ['configuración'],
    order: 1
  },
]
