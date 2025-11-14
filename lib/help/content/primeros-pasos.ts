import { HelpArticle } from '../help-categories'

export const primerospasosArticles: HelpArticle[] = [
  {
    id: 'registro-acceso',
    categoryId: 'primeros-pasos',
    title: {
      es: 'Registro y Acceso a tu Cuenta',
      en: 'Registration and Account Access'
    },
    description: {
      es: 'Aprende a crear tu cuenta y acceder a StorageFy',
      en: 'Learn how to create your account and access StorageFy'
    },
    content: {
      es: `# Registro y Acceso a tu Cuenta

## Crear una Cuenta Nueva

1. Visita [storagefy.app](https://storagefy.app) y haz clic en "Comenzar prueba gratis"
2. Completa el formulario de registro con:
   - Tu nombre completo
   - Email corporativo
   - Contraseña segura (mínimo 8 caracteres)
3. Confirma tu email haciendo clic en el enlace que recibirás
4. Selecciona tu plan (puedes cambiarlo después)

## Iniciar Sesión

1. Ve a la página de inicio de sesión
2. Ingresa tu email y contraseña
3. Haz clic en "Iniciar Sesión"

## Recuperar Contraseña

Si olvidaste tu contraseña:
1. Haz clic en "¿Olvidaste tu contraseña?"
2. Ingresa tu email
3. Revisa tu bandeja de entrada y sigue las instrucciones

## Seguridad

- Usa contraseñas seguras y únicas
- No compartas tus credenciales
- Activa la verificación en dos pasos si está disponible`,
      en: `# Registration and Account Access

## Create a New Account

1. Visit [storagefy.app](https://storagefy.app) and click "Start free trial"
2. Complete the registration form with:
   - Your full name
   - Corporate email
   - Secure password (minimum 8 characters)
3. Confirm your email by clicking the link you'll receive
4. Select your plan (you can change it later)

## Sign In

1. Go to the sign in page
2. Enter your email and password
3. Click "Sign In"

## Recover Password

If you forgot your password:
1. Click "Forgot your password?"
2. Enter your email
3. Check your inbox and follow the instructions

## Security

- Use strong and unique passwords
- Don't share your credentials
- Enable two-factor authentication if available`
    },
    tags: ['registro', 'acceso', 'cuenta', 'login'],
    order: 1,
    featured: true
  },
  {
    id: 'onboarding-guiado',
    categoryId: 'primeros-pasos',
    title: {
      es: 'Onboarding Guiado en 5 Pasos',
      en: '5-Step Guided Onboarding'
    },
    description: {
      es: 'Configura tu cuenta en 5 minutos con nuestro asistente',
      en: 'Set up your account in 5 minutes with our assistant'
    },
    content: {
      es: `# Onboarding Guiado en 5 Pasos

El onboarding te guía paso a paso para configurar tu cuenta completamente.

## Paso 1: Información del Negocio
- Nombre de tu empresa
- CIF/NIF
- Dirección
- Teléfono
- Logo (opcional)

## Paso 2: Ubicaciones
- Agrega tu primera locación
- Dirección completa
- Horarios de atención
- Servicios disponibles

## Paso 3: Unidades
- Crea tus primeras unidades
- Define dimensiones
- Establece precios
- Asigna tipos

## Paso 4: Clientes (Opcional)
- Importa clientes existentes
- O créalos manualmente
- Puedes saltar este paso

## Paso 5: Contratos (Opcional)
- Crea contratos de ejemplo
- O continúa después

## Navegación Flexible

- Puedes saltar pasos opcionales
- Volver atrás en cualquier momento
- Completar después si lo prefieres`,
      en: `# 5-Step Guided Onboarding

The onboarding guides you step by step to fully configure your account.

## Step 1: Business Information
- Company name
- Tax ID
- Address
- Phone
- Logo (optional)

## Step 2: Locations
- Add your first location
- Complete address
- Business hours
- Available services

## Step 3: Units
- Create your first units
- Define dimensions
- Set prices
- Assign types

## Step 4: Customers (Optional)
- Import existing customers
- Or create them manually
- You can skip this step

## Step 5: Contracts (Optional)
- Create sample contracts
- Or continue later

## Flexible Navigation

- You can skip optional steps
- Go back at any time
- Complete later if you prefer`
    },
    tags: ['onboarding', 'configuración', 'setup'],
    order: 2,
    featured: true
  },
  {
    id: 'configuracion-inicial',
    categoryId: 'primeros-pasos',
    title: {
      es: 'Configuración Inicial del Negocio',
      en: 'Initial Business Setup'
    },
    description: {
      es: 'Configura los datos básicos de tu negocio',
      en: 'Configure your business basic data'
    },
    content: {
      es: `# Configuración Inicial del Negocio

## Información Básica

### Datos de la Empresa
- **Nombre**: Nombre oficial de tu negocio
- **CIF/NIF**: Número de identificación fiscal
- **Dirección**: Dirección completa
- **Teléfono**: Teléfono de contacto
- **Email**: Email corporativo

### Logo y Branding
- Sube tu logo en formato PNG o JPG
- Tamaño recomendado: 200x200px
- Se usará en facturas y documentos

### Configuración Fiscal
- Tipo de IVA aplicable
- Número de cuenta bancaria
- Datos para facturación

## Configuración Regional

- Idioma por defecto
- Moneda (EUR, USD, etc.)
- Formato de fecha
- Zona horaria

## Guardar Cambios

Todos los cambios se guardan automáticamente. Puedes modificar esta información en cualquier momento desde Configuración.`,
      en: `# Initial Business Setup

## Basic Information

### Company Data
- **Name**: Official business name
- **Tax ID**: Tax identification number
- **Address**: Complete address
- **Phone**: Contact phone
- **Email**: Corporate email

### Logo and Branding
- Upload your logo in PNG or JPG format
- Recommended size: 200x200px
- Will be used in invoices and documents

### Tax Configuration
- Applicable VAT type
- Bank account number
- Billing data

## Regional Settings

- Default language
- Currency (EUR, USD, etc.)
- Date format
- Time zone

## Save Changes

All changes are saved automatically. You can modify this information at any time from Settings.`
    },
    tags: ['configuración', 'negocio', 'empresa'],
    order: 3
  },
  {
    id: 'navegacion-basica',
    categoryId: 'primeros-pasos',
    title: {
      es: 'Navegación Básica del Dashboard',
      en: 'Basic Dashboard Navigation'
    },
    description: {
      es: 'Aprende a navegar por la interfaz de StorageFy',
      en: 'Learn to navigate the StorageFy interface'
    },
    content: {
      es: `# Navegación Básica del Dashboard

## Menú Principal

El menú lateral te da acceso a todas las secciones:

### Dashboard
- Vista general de tu negocio
- Métricas clave
- Alertas importantes

### Unidades
- Gestiona todas tus unidades
- Crea, edita y elimina unidades
- Filtros avanzados

### Clientes
- Base de datos de clientes
- Fichas completas
- Historial de contratos

### Contratos
- Todos tus contratos activos
- Crear nuevos contratos
- Renovaciones

### Pagos
- Gestión de pagos
- Recordatorios
- Reconciliación bancaria

### Reportes
- Análisis financiero
- Ocupación
- Exportación PDF

## Accesos Rápidos

En la parte superior encontrarás:
- Búsqueda global
- Notificaciones
- Perfil de usuario
- Cambio de organización (si tienes varias)

## Atajos de Teclado

- \`Ctrl + K\`: Búsqueda rápida
- \`Esc\`: Cerrar modales
- \`/\`: Enfocar búsqueda`,
      en: `# Basic Dashboard Navigation

## Main Menu

The side menu gives you access to all sections:

### Dashboard
- Business overview
- Key metrics
- Important alerts

### Units
- Manage all your units
- Create, edit and delete units
- Advanced filters

### Customers
- Customer database
- Complete profiles
- Contract history

### Contracts
- All your active contracts
- Create new contracts
- Renewals

### Payments
- Payment management
- Reminders
- Bank reconciliation

### Reports
- Financial analysis
- Occupancy
- PDF export

## Quick Access

At the top you'll find:
- Global search
- Notifications
- User profile
- Organization switch (if you have multiple)

## Keyboard Shortcuts

- \`Ctrl + K\`: Quick search
- \`Esc\`: Close modals
- \`/\`: Focus search`
    },
    tags: ['navegación', 'dashboard', 'interfaz'],
    order: 4
  },
  {
    id: 'migracion-datos',
    categoryId: 'primeros-pasos',
    title: {
      es: 'Migración de Datos desde Excel',
      en: 'Data Migration from Excel'
    },
    description: {
      es: 'Importa tus datos existentes desde Excel',
      en: 'Import your existing data from Excel'
    },
    content: {
      es: `# Migración de Datos desde Excel

## Preparar tus Datos

### Formato del Archivo
- Formato: CSV o Excel (.xlsx)
- Primera fila debe contener los encabezados
- Codificación: UTF-8

### Datos que Puedes Importar

#### Unidades
- Código de unidad
- Dimensiones (largo, ancho, alto)
- Tipo
- Precio
- Estado

#### Clientes
- Nombre completo
- Email
- Teléfono
- DNI/NIE
- Dirección

#### Contratos
- Cliente
- Unidad
- Fecha inicio
- Fecha fin
- Precio mensual

## Proceso de Importación

1. **Descarga la plantilla**
   - Ve a Configuración > Importar Datos
   - Descarga la plantilla Excel

2. **Completa la plantilla**
   - Copia tus datos siguiendo el formato
   - Verifica que no haya errores

3. **Sube el archivo**
   - Selecciona el archivo completado
   - Haz clic en "Importar"

4. **Revisa los resultados**
   - El sistema te mostrará un resumen
   - Revisa errores o advertencias
   - Confirma la importación

## Soporte

Si necesitas ayuda con la migración, contacta con nuestro equipo de soporte.`,
      en: `# Data Migration from Excel

## Prepare Your Data

### File Format
- Format: CSV or Excel (.xlsx)
- First row must contain headers
- Encoding: UTF-8

### Data You Can Import

#### Units
- Unit code
- Dimensions (length, width, height)
- Type
- Price
- Status

#### Customers
- Full name
- Email
- Phone
- ID number
- Address

#### Contracts
- Customer
- Unit
- Start date
- End date
- Monthly price

## Import Process

1. **Download the template**
   - Go to Settings > Import Data
   - Download the Excel template

2. **Complete the template**
   - Copy your data following the format
   - Verify there are no errors

3. **Upload the file**
   - Select the completed file
   - Click "Import"

4. **Review results**
   - The system will show you a summary
   - Review errors or warnings
   - Confirm the import

## Support

If you need help with migration, contact our support team.`
    },
    tags: ['migración', 'importar', 'excel', 'datos'],
    order: 5
  },
]
