import { HelpArticle } from '../help-categories'

export const usuariosArticles: HelpArticle[] = [
  {
    id: 'roles-permisos',
    categoryId: 'usuarios',
    title: { es: 'Roles y Permisos', en: 'Roles and Permissions' },
    description: { es: 'Gestiona el acceso de tu equipo', en: 'Manage your team access' },
    content: {
      es: `# Roles y Permisos

## Roles Disponibles

- **Propietario**: Acceso completo
- **Administrador**: Gestión completa excepto facturación
- **Operador**: Solo lectura y operaciones básicas

Puedes personalizar permisos por rol.`,
      en: `# Roles and Permissions

## Available Roles

- **Owner**: Full access
- **Administrator**: Full management except billing
- **Operator**: Read-only and basic operations

You can customize permissions per role.`
    },
    tags: ['usuarios', 'roles'],
    order: 1
  },
]
