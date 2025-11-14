import { 
  Rocket, 
  BarChart3, 
  Package, 
  MapPin, 
  Users, 
  FileText, 
  CreditCard, 
  Receipt, 
  Map, 
  Globe, 
  TrendingUp, 
  MessageSquare, 
  UserCog, 
  Settings 
} from 'lucide-react'

export interface HelpCategory {
  id: string
  name: { es: string; en: string }
  description: { es: string; en: string }
  icon: string // nombre del icono de Lucide
  order: number
}

export interface HelpArticle {
  id: string
  categoryId: string
  title: { es: string; en: string }
  description: { es: string; en: string }
  content: { es: string; en: string }
  tags: string[]
  order: number
  featured?: boolean
}

export const helpCategories: HelpCategory[] = [
  {
    id: 'primeros-pasos',
    name: { es: 'Primeros Pasos', en: 'Getting Started' },
    description: { es: 'Guía para comenzar con StorageFy', en: 'Guide to get started with StorageFy' },
    icon: 'Rocket',
    order: 1
  },
  {
    id: 'dashboard',
    name: { es: 'Dashboard y Métricas', en: 'Dashboard & Metrics' },
    description: { es: 'Vista general y métricas de tu negocio', en: 'Overview and business metrics' },
    icon: 'BarChart3',
    order: 2
  },
  {
    id: 'unidades',
    name: { es: 'Gestión de Unidades', en: 'Unit Management' },
    description: { es: 'Gestiona tus unidades de almacenamiento', en: 'Manage your storage units' },
    icon: 'Package',
    order: 3
  },
  {
    id: 'locaciones',
    name: { es: 'Gestión de Locaciones', en: 'Location Management' },
    description: { es: 'Administra múltiples ubicaciones', en: 'Manage multiple locations' },
    icon: 'MapPin',
    order: 4
  },
  {
    id: 'clientes',
    name: { es: 'Gestión de Clientes', en: 'Customer Management' },
    description: { es: 'CRM integrado para tus clientes', en: 'Integrated CRM for your customers' },
    icon: 'Users',
    order: 5
  },
  {
    id: 'contratos',
    name: { es: 'Contratos Digitales', en: 'Digital Contracts' },
    description: { es: 'Gestiona contratos de alquiler', en: 'Manage rental contracts' },
    icon: 'FileText',
    order: 6
  },
  {
    id: 'pagos',
    name: { es: 'Sistema de Pagos', en: 'Payment System' },
    description: { es: 'Cobra y gestiona pagos', en: 'Collect and manage payments' },
    icon: 'CreditCard',
    order: 7
  },
  {
    id: 'facturacion',
    name: { es: 'Facturación', en: 'Invoicing' },
    description: { es: 'Genera y gestiona facturas', en: 'Generate and manage invoices' },
    icon: 'Receipt',
    order: 8
  },
  {
    id: 'planos',
    name: { es: 'Planos Interactivos', en: 'Interactive Floor Plans' },
    description: { es: 'Visualiza y edita planos', en: 'View and edit floor plans' },
    icon: 'Map',
    order: 9
  },
  {
    id: 'reservas',
    name: { es: 'Reservas Online', en: 'Online Reservations' },
    description: { es: 'Widget de reservas y captación', en: 'Reservation widget and lead capture' },
    icon: 'Globe',
    order: 10
  },
  {
    id: 'reportes',
    name: { es: 'Reportes y Analytics', en: 'Reports & Analytics' },
    description: { es: 'Análisis y reportes de tu negocio', en: 'Business analysis and reports' },
    icon: 'TrendingUp',
    order: 11
  },
  {
    id: 'tablon',
    name: { es: 'Tablón de Anuncios', en: 'Announcement Board' },
    description: { es: 'Comunicación interna con tu equipo', en: 'Internal team communication' },
    icon: 'MessageSquare',
    order: 12
  },
  {
    id: 'usuarios',
    name: { es: 'Gestión de Usuarios', en: 'User Management' },
    description: { es: 'Roles y permisos del equipo', en: 'Team roles and permissions' },
    icon: 'UserCog',
    order: 13
  },
  {
    id: 'configuracion',
    name: { es: 'Configuración', en: 'Settings' },
    description: { es: 'Configuración general del sistema', en: 'General system settings' },
    icon: 'Settings',
    order: 14
  }
]

export const getCategoryIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    Rocket,
    BarChart3,
    Package,
    MapPin,
    Users,
    FileText,
    CreditCard,
    Receipt,
    Map,
    Globe,
    TrendingUp,
    MessageSquare,
    UserCog,
    Settings
  }
  return icons[iconName] || Settings
}

export const getCategoryById = (id: string): HelpCategory | undefined => {
  return helpCategories.find(cat => cat.id === id)
}

export const getCategoryArticles = (categoryId: string, articles: HelpArticle[]): HelpArticle[] => {
  return articles
    .filter(article => article.categoryId === categoryId)
    .sort((a, b) => a.order - b.order)
}

