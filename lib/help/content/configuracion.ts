import { HelpArticle } from '../help-categories'

export const configuracionArticles: HelpArticle[] = [
  {
    id: 'configuracion-general',
    categoryId: 'configuracion',
    title: { es: 'Configuración del Negocio', en: 'Business Configuration' },
    description: { es: 'Ajusta los datos y preferencias de tu organización', en: 'Adjust your organization data and preferences' },
    content: {
      es: `# Configuración del Negocio

## Acceder a Configuración

1. Ve a **Configuración** en el menú principal (ícono de engranaje)
2. Verás las diferentes secciones disponibles

## Información de la Organización

### Datos Básicos
- **Nombre**: Nombre de tu empresa o negocio
- **NIF/CIF**: Número de identificación fiscal
- **Dirección**: Dirección completa
- **Ciudad, Código Postal, País**
- **Teléfono**: Número de contacto principal
- **Email**: Email de contacto corporativo

### Logo y Branding
- **Logo**: Sube el logo de tu empresa
  - Formato: PNG, JPG, SVG
  - Recomendado: Fondo transparente
  - Tamaño sugerido: 200x200px mínimo
- **Colores**: Configura colores de marca (opcional)
  - Color primario
  - Color secundario
  - Se usa en emails y documentos generados

### Información Fiscal
- **Tipo de empresa**: Sociedad, Autónomo, etc.
- **Régimen fiscal**: General, Simplificado, etc.
- **Datos bancarios**: Para recibir pagos
  - IBAN
  - Entidad bancaria
  - Nombre de cuenta

## Preferencias Regionales

### Idioma
- Selecciona el idioma principal del sistema
- Opciones: Español, Inglés
- Afecta emails y documentos generados

### Moneda
- Moneda predeterminada (EUR, USD, etc.)
- Formato de números: Separadores decimales
- Formato de fechas: DD/MM/YYYY o MM/DD/YYYY

### Zona Horaria
- Selecciona tu zona horaria
- Importante para fechas y horas correctas
- Afecta reportes y registros

## Guardar Cambios

1. Completa los campos que quieres modificar
2. Haz clic en **"Guardar"**
3. Los cambios se aplican inmediatamente
4. Recibirás confirmación de que se guardaron

## Importante

- **Backup**: Los datos se respaldan automáticamente
- **Historial**: Puedes ver cambios anteriores
- **Validación**: El sistema valida formatos antes de guardar`,
      en: `# Business Configuration

## Access Settings

1. Go to **Settings** in the main menu (gear icon)
2. You'll see different available sections

## Organization Information

### Basic Data
- **Name**: Your company or business name
- **Tax ID**: Tax identification number
- **Address**: Complete address
- **City, Postal Code, Country**
- **Phone**: Main contact number
- **Email**: Corporate contact email

### Logo and Branding
- **Logo**: Upload your company logo
  - Format: PNG, JPG, SVG
  - Recommended: Transparent background
  - Suggested size: 200x200px minimum
- **Colors**: Configure brand colors (optional)
  - Primary color
  - Secondary color
  - Used in emails and generated documents

### Tax Information
- **Company type**: Corporation, Self-employed, etc.
- **Tax regime**: General, Simplified, etc.
- **Bank details**: To receive payments
  - IBAN
  - Bank entity
  - Account name

## Regional Preferences

### Language
- Select main system language
- Options: Spanish, English
- Affects emails and generated documents

### Currency
- Default currency (EUR, USD, etc.)
- Number format: Decimal separators
- Date format: DD/MM/YYYY or MM/DD/YYYY

### Time Zone
- Select your time zone
- Important for correct dates and times
- Affects reports and records

## Save Changes

1. Complete fields you want to modify
2. Click **"Save"**
3. Changes apply immediately
4. You'll receive confirmation that they were saved

## Important

- **Backup**: Data is automatically backed up
- **History**: You can view previous changes
- **Validation**: System validates formats before saving`
    },
    tags: ['configuración', 'negocio'],
    order: 1,
    featured: true
  },
  {
    id: 'gestion-usuarios-config',
    categoryId: 'configuracion',
    title: { es: 'Gestión de Usuarios y Permisos', en: 'User and Permission Management' },
    description: { es: 'Gestiona quién tiene acceso y qué puede hacer', en: 'Manage who has access and what they can do' },
    content: {
      es: `# Gestión de Usuarios y Permisos

## Acceder a Usuarios

1. Ve a **Configuración** → **Usuarios**
2. Verás la lista de todos los usuarios de tu organización

## Ver Usuarios

La lista muestra:
- **Nombre**: Nombre completo
- **Email**: Email de acceso
- **Rol**: Propietario, Administrador, Operador
- **Estado**: Activo, Inactivo
- **Última conexión**: Cuándo se conectó por última vez

## Agregar Usuario

### Paso 1: Invitar
1. Haz clic en **"Agregar Usuario"** o **"Invitar Usuario"**
2. Completa el formulario:
   - **Nombre completo**
   - **Email** (debe ser único)
   - **Rol**: Selecciona el rol apropiado

### Paso 2: Configurar Rol
Elige el rol según las responsabilidades:

**Propietario**:
- Acceso completo a todo
- Puede modificar configuración
- Puede eliminar la organización

**Administrador**:
- Gestión completa excepto configuración crítica
- Puede crear y editar usuarios
- Acceso a reportes y datos

**Operador**:
- Solo lectura y operaciones básicas
- Puede crear contratos y pagos
- No puede modificar configuración

### Paso 3: Enviar Invitación
1. El usuario recibe un email de invitación
2. Debe hacer clic en el link para crear su cuenta
3. Establece su contraseña
4. Accede al sistema

## Editar Usuario

![Formulario de Edición de Usuario](/images/help/edit_user.webp)
*Formulario completo para editar usuarios mostrando información personal, avatar, contraseña, rol y estado. Nota: algunos campos están protegidos si es el propietario de la organización.*

1. Haz clic en el usuario que quieres editar
2. Puedes modificar:
   - **Nombre**: Cambiar nombre completo
   - **Avatar**: Subir o cambiar foto de perfil
   - **Contraseña**: Actualizar contraseña (opcional)
   - **Rol**: Cambiar el rol (si tienes permisos)
   - **Estado**: Activar o desactivar usuario (no aplica para propietario)
3. **No puedes cambiar el email** (requiere eliminarlo y crear nuevo)
4. **Propietario**: Los campos de rol y estado están protegidos para el propietario

## Eliminar Usuario

1. Haz clic en **"Eliminar"** en el usuario
2. Confirma la eliminación
3. El usuario pierde acceso inmediatamente
4. Sus datos históricos se mantienen

## Permisos Detallados

### Personalización de Permisos
Para cada usuario puedes configurar:
- **Ver Dashboard**: Acceso al dashboard
- **Gestionar Unidades**: Crear, editar unidades
- **Gestionar Clientes**: Crear, editar clientes
- **Gestionar Contratos**: Crear, editar contratos
- **Gestionar Pagos**: Crear, procesar pagos
- **Ver Facturas**: Acceso a facturación
- **Ver Reportes**: Acceso a reportes
- **Configuración**: Modificar configuración

### Permisos por Rol
- Los roles tienen permisos predefinidos
- Puedes personalizar permisos individuales
- Los permisos personalizados sobrescriben los del rol

## Activar/Desactivar Usuarios

- **Activar**: Usuario puede acceder
- **Desactivar**: Usuario no puede acceder pero sus datos se mantienen
- Útil para suspensiones temporales

## Verificación de Seguridad

- **Autenticación de dos factores**: Opcional para mayor seguridad
- **Historial de acceso**: Ve quién accedió y cuándo
- **Gestión de sesiones**: Cierra sesiones remotas si es necesario`,
      en: `# User and Permission Management

## Access Users

1. Go to **Settings** → **Users**
2. You'll see the list of all users in your organization

## View Users

The list shows:
- **Name**: Full name
- **Email**: Access email
- **Role**: Owner, Administrator, Operator
- **Status**: Active, Inactive
- **Last login**: When they last connected

## Add User

### Step 1: Invite
1. Click **"Add User"** or **"Invite User"**
2. Complete the form:
   - **Full name**
   - **Email** (must be unique)
   - **Role**: Select appropriate role

### Step 2: Configure Role
Choose role according to responsibilities:

**Owner**:
- Full access to everything
- Can modify settings
- Can delete organization

**Administrator**:
- Full management except critical settings
- Can create and edit users
- Access to reports and data

**Operator**:
- Read-only and basic operations
- Can create contracts and payments
- Cannot modify settings

### Step 3: Send Invitation
1. User receives invitation email
2. Must click link to create account
3. Sets their password
4. Accesses the system

## Edit User

![User Edit Form](/images/help/edit_user.webp)
*Complete form to edit users showing personal information, avatar, password, role and status. Note: some fields are protected if it's the organization owner.*

1. Click on user you want to edit
2. You can modify:
   - **Name**: Change full name
   - **Avatar**: Upload or change profile photo
   - **Password**: Update password (optional)
   - **Role**: Change role (if you have permissions)
   - **Status**: Activate or deactivate user (doesn't apply to owner)
3. **You cannot change email** (requires deleting and creating new)
4. **Owner**: Role and status fields are protected for the owner

## Delete User

1. Click **"Delete"** on the user
2. Confirm deletion
3. User loses access immediately
4. Their historical data is maintained

## Detailed Permissions

### Permission Customization
For each user you can configure:
- **View Dashboard**: Access to dashboard
- **Manage Units**: Create, edit units
- **Manage Customers**: Create, edit customers
- **Manage Contracts**: Create, edit contracts
- **Manage Payments**: Create, process payments
- **View Invoices**: Access to invoicing
- **View Reports**: Access to reports
- **Settings**: Modify settings

### Permissions by Role
- Roles have predefined permissions
- You can customize individual permissions
- Custom permissions override role permissions

## Activate/Deactivate Users

- **Activate**: User can access
- **Deactivate**: User cannot access but data is maintained
- Useful for temporary suspensions

## Security Verification

- **Two-factor authentication**: Optional for greater security
- **Access history**: See who accessed and when
- **Session management**: Close remote sessions if necessary`
    },
    tags: ['configuración', 'usuarios', 'permisos'],
    order: 2
  },
  {
    id: 'notificaciones',
    categoryId: 'configuracion',
    title: { es: 'Configurar Notificaciones', en: 'Configure Notifications' },
    description: { es: 'Controla qué notificaciones recibes y cómo', en: 'Control what notifications you receive and how' },
    content: {
      es: `# Configurar Notificaciones

## Acceder a Notificaciones

1. Ve a **Configuración** → **Notificaciones**
2. Verás las opciones de notificaciones disponibles

## Tipos de Notificaciones

### Notificaciones por Email

#### Nuevas Reservas
- **Qué**: Email cuando llega una nueva reserva del widget
- **Frecuencia**: Inmediata
- **Configuración**: Activar/Desactivar

#### Pagos Recibidos
- **Qué**: Confirmación cuando se recibe un pago
- **Frecuencia**: Inmediata
- **Configuración**: Activar/Desactivar

#### Recordatorios de Pago
- **Qué**: Recordatorios automáticos de pagos próximos a vencer
- **Frecuencia**: Configurable (ej. 7 días antes, 3 días antes)
- **Configuración**: Activar/Desactivar y días

#### Facturas Generadas
- **Qué**: Notificación cuando se genera una factura
- **Frecuencia**: Inmediata
- **Configuración**: Activar/Desactivar

#### Problemas Críticos
- **Qué**: Alertas de problemas graves o errores del sistema
- **Frecuencia**: Inmediata
- **Configuración**: Siempre activo (no se puede desactivar)

### Notificaciones In-App

#### Nuevas Reservas
- **Qué**: Badge en el menú cuando hay nuevas reservas
- **Configuración**: Activar/Desactivar

#### Anuncios Urgentes
- **Qué**: Notificación en el tablón cuando hay anuncios urgentes
- **Configuración**: Activar/Desactivar

#### Recordatorios
- **Qué**: Recordatorios visuales en el dashboard
- **Configuración**: Activar/Desactivar

## Configurar Email

### Email de Notificación
- **Email principal**: Email donde recibes todas las notificaciones
- **Emails adicionales**: Puedes agregar más emails para recibir copias
- **Validación**: El sistema valida que el email sea válido

### Frecuencia de Emails
- **Inmediata**: Recibes cada notificación individualmente
- **Resumen diario**: Un email al día con todas las notificaciones
- **Resumen semanal**: Un email a la semana con resumen

### Formato de Email
- **HTML**: Emails con formato visual (recomendado)
- **Texto plano**: Solo texto sin formato

## Desactivar Notificaciones

### Temporales
- **No molestar**: Pausa notificaciones por un período
- **Vacaciones**: Desactiva notificaciones no críticas

### Permanentes
- Desactiva tipos específicos de notificaciones
- Mantiene activas las críticas (errores, problemas graves)

## Ver Historial

- **Historial de notificaciones**: Ve todas las notificaciones enviadas
- **Filtros**: Por tipo, por fecha, por estado (enviado/fallido)
- **Reenviar**: Si una notificación falló, puedes reenviarla

## Pruebas

- **Enviar prueba**: Envía una notificación de prueba a tu email
- **Verificar configuración**: Asegúrate de que todo funciona correctamente`,
      en: `# Configure Notifications

## Access Notifications

1. Go to **Settings** → **Notifications**
2. You'll see available notification options

## Notification Types

### Email Notifications

#### New Reservations
- **What**: Email when a new reservation arrives from widget
- **Frequency**: Immediate
- **Configuration**: Activate/Deactivate

#### Payments Received
- **What**: Confirmation when a payment is received
- **Frequency**: Immediate
- **Configuration**: Activate/Deactivate

#### Payment Reminders
- **What**: Automatic reminders for payments nearing due date
- **Frequency**: Configurable (e.g., 7 days before, 3 days before)
- **Configuration**: Activate/Deactivate and days

#### Invoices Generated
- **What**: Notification when an invoice is generated
- **Frequency**: Immediate
- **Configuration**: Activate/Deactivate

#### Critical Problems
- **What**: Alerts for serious problems or system errors
- **Frequency**: Immediate
- **Configuration**: Always active (cannot be disabled)

### In-App Notifications

#### New Reservations
- **What**: Badge on menu when there are new reservations
- **Configuration**: Activate/Deactivate

#### Urgent Announcements
- **What**: Notification on board when there are urgent announcements
- **Configuration**: Activate/Deactivate

#### Reminders
- **What**: Visual reminders on dashboard
- **Configuration**: Activate/Deactivate

## Configure Email

### Notification Email
- **Primary email**: Email where you receive all notifications
- **Additional emails**: You can add more emails to receive copies
- **Validation**: System validates email is valid

### Email Frequency
- **Immediate**: Receive each notification individually
- **Daily summary**: One email per day with all notifications
- **Weekly summary**: One email per week with summary

### Email Format
- **HTML**: Emails with visual format (recommended)
- **Plain text**: Text only without format

## Disable Notifications

### Temporary
- **Do not disturb**: Pause notifications for a period
- **Vacation**: Disable non-critical notifications

### Permanent
- Disable specific types of notifications
- Keeps critical ones active (errors, serious problems)

## View History

- **Notification history**: See all sent notifications
- **Filters**: By type, by date, by status (sent/failed)
- **Resend**: If a notification failed, you can resend it

## Tests

- **Send test**: Send a test notification to your email
- **Verify configuration**: Make sure everything works correctly`
    },
    tags: ['configuración', 'notificaciones'],
    order: 3
  },
  {
    id: 'integraciones',
    categoryId: 'configuracion',
    title: { es: 'Integraciones Disponibles', en: 'Available Integrations' },
    description: { es: 'Conecta StorageFy con otros servicios', en: 'Connect StorageFy with other services' },
    content: {
      es: `# Integraciones Disponibles

## Acceder a Integraciones

1. Ve a **Configuración** → **Integraciones**
2. Verás todas las integraciones disponibles

## Integraciones de Pago

### Stripe
- **Qué es**: Pasarela de pago con tarjeta
- **Configuración**: 
  - API Key pública (Publishable Key)
  - API Key secreta (Secret Key)
  - Modo Test/Producción
- **Uso**: Pagos con tarjeta de crédito/débito
- **Ventajas**: Acepta múltiples tarjetas, internacional

### Redsys
- **Qué es**: Pasarela de pago española
- **Configuración**:
  - Merchant Code
  - Terminal
  - Clave secreta
  - Entorno Test/Producción
- **Uso**: Pagos con tarjeta en España
- **Ventajas**: Popular en España, múltiples bancos

### SEPA Direct Debit
- **Qué es**: Domiciliación bancaria europea
- **Configuración**: Configurado a través de Stripe
- **Uso**: Cobros automáticos recurrentes
- **Ventajas**: Bajo costo, automatización completa

## Integraciones de Facturación

### Verifacti
- **Qué es**: Facturación electrónica con AEAT
- **Configuración**:
  - API Key de Verifacti
  - NIF de empresa
  - Modo Test/Producción
- **Uso**: Envío automático de facturas a Hacienda
- **Ventajas**: Cumplimiento legal automático

## Integraciones de Email

### Configuración SMTP
- **Qué es**: Servidor de correo personalizado
- **Configuración**:
  - Servidor SMTP
  - Puerto
  - Usuario y contraseña
  - Seguridad (TLS/SSL)
- **Uso**: Envío de emails desde tu dominio
- **Ventajas**: Emails personalizados con tu dominio

## Configurar una Integración

### Paso 1: Seleccionar
1. Haz clic en la integración que quieres configurar
2. Lee la información y requisitos

### Paso 2: Obtener Credenciales
- Cada integración requiere credenciales diferentes
- Sigue las instrucciones específicas
- Obtén las claves/credenciales del servicio externo

### Paso 3: Configurar
1. Ingresa las credenciales en StorageFy
2. Configura opciones adicionales (modo test/producción)
3. Haz clic en **"Validar"** para verificar conexión

### Paso 4: Activar
1. Si la validación es exitosa, activa la integración
2. El sistema prueba la conexión
3. Una vez activa, puedes usarla en el sistema

## Validar Integraciones

### Pruebas de Conexión
- El sistema valida automáticamente las credenciales
- Muestra mensajes de error si hay problemas
- Proporciona guías para solucionar problemas comunes

### Modo Test vs Producción
- **Test**: Prueba sin afectar operaciones reales
- **Producción**: Operaciones reales con dinero real
- **Recomendación**: Siempre prueba primero en modo test

## Desactivar Integraciones

- Puedes desactivar integraciones temporalmente
- Los datos históricos se mantienen
- Reactívala cuando la necesites de nuevo

## Seguridad

- **Credenciales encriptadas**: Todas las credenciales se guardan encriptadas
- **Acceso restringido**: Solo usuarios con permisos pueden configurar
- **Auditoría**: Historial de cambios en integraciones`,
      en: `# Available Integrations

## Access Integrations

1. Go to **Settings** → **Integrations**
2. You'll see all available integrations

## Payment Integrations

### Stripe
- **What it is**: Card payment gateway
- **Configuration**: 
  - Public API Key (Publishable Key)
  - Secret API Key (Secret Key)
  - Test/Production Mode
- **Use**: Credit/debit card payments
- **Advantages**: Accepts multiple cards, international

### Redsys
- **What it is**: Spanish payment gateway
- **Configuration**:
  - Merchant Code
  - Terminal
  - Secret key
  - Test/Production Environment
- **Use**: Card payments in Spain
- **Advantages**: Popular in Spain, multiple banks

### SEPA Direct Debit
- **What it is**: European bank direct debit
- **Configuration**: Configured through Stripe
- **Use**: Automatic recurring charges
- **Advantages**: Low cost, complete automation

## Invoicing Integrations

### Verifacti
- **What it is**: Electronic invoicing with AEAT
- **Configuration**:
  - Verifacti API Key
  - Company NIF
  - Test/Production Mode
- **Use**: Automatic invoice submission to tax office
- **Advantages**: Automatic legal compliance

## Email Integrations

### SMTP Configuration
- **What it is**: Custom email server
- **Configuration**:
  - SMTP server
  - Port
  - User and password
  - Security (TLS/SSL)
- **Use**: Send emails from your domain
- **Advantages**: Customized emails with your domain

## Configure an Integration

### Step 1: Select
1. Click on the integration you want to configure
2. Read information and requirements

### Step 2: Get Credentials
- Each integration requires different credentials
- Follow specific instructions
- Get keys/credentials from external service

### Step 3: Configure
1. Enter credentials in StorageFy
2. Configure additional options (test/production mode)
3. Click **"Validate"** to verify connection

### Step 4: Activate
1. If validation is successful, activate integration
2. System tests connection
3. Once active, you can use it in the system

## Validate Integrations

### Connection Tests
- System automatically validates credentials
- Shows error messages if there are problems
- Provides guides to solve common problems

### Test vs Production Mode
- **Test**: Test without affecting real operations
- **Production**: Real operations with real money
- **Recommendation**: Always test first in test mode

## Disable Integrations

- You can temporarily disable integrations
- Historical data is maintained
- Reactivate when you need it again

## Security

- **Encrypted credentials**: All credentials are stored encrypted
- **Restricted access**: Only users with permissions can configure
- **Audit**: History of changes in integrations`
    },
    tags: ['configuración', 'integraciones'],
    order: 4
  },
  {
    id: 'limites-suscripcion',
    categoryId: 'configuracion',
    title: { es: 'Límites de Suscripción', en: 'Subscription Limits' },
    description: { es: 'Entiende los límites de tu plan y cómo gestionarlos', en: 'Understand your plan limits and how to manage them' },
    content: {
      es: `# Límites de Suscripción

## Ver Límites Actuales

1. Ve a **Configuración** → **Suscripción**
2. Verás un resumen de tu plan actual y límites

## Tipos de Límites

### Límite de Locaciones
- **Qué significa**: Cantidad máxima de locaciones que puedes crear
- **Ver uso**: Barra de progreso muestra cuántas usas
- **Ejemplo**: Plan Básico = 1 locación, Plan Pro = 5 locaciones

### Límite de Unidades
- **Qué significa**: Cantidad máxima de unidades totales
- **Ver uso**: Contador de unidades creadas vs máximo
- **Actualización**: Se suma cuando creas nuevas unidades

### Límite de Usuarios
- **Qué significa**: Cantidad máxima de usuarios en tu organización
- **Ver uso**: Lista de usuarios activos
- **Importante**: Usuarios inactivos no cuentan

## Verificar Uso Actual

### Dashboard de Uso
- **Barra de progreso**: Visual de uso vs límite
- **Porcentaje**: Cuánto has usado
- **Restante**: Cuánto te queda disponible

### Detalles por Categoría
- **Locaciones**: Lista de locaciones creadas
- **Unidades**: Total de unidades por locación
- **Usuarios**: Lista de usuarios activos

## Alcanzar un Límite

### Qué Pasa
- **Crear nueva locación**: Mensaje "Has alcanzado el límite"
- **Crear nueva unidad**: Error al intentar crear
- **Agregar usuario**: No permite agregar más usuarios

### Soluciones

#### Opción 1: Actualizar Plan
1. Haz clic en **"Actualizar Plan"**
2. Ve las opciones de planes superiores
3. Selecciona el plan que necesitas
4. Confirma la actualización
5. Los límites se actualizan inmediatamente

#### Opción 2: Eliminar Recursos
1. **Desactivar locaciones**: Desactiva locaciones no usadas
2. **Eliminar unidades**: Elimina unidades obsoletas
3. **Desactivar usuarios**: Desactiva usuarios que ya no necesitas

**Nota**: Los datos se mantienen, solo se desactivan

## Planes Disponibles

### Plan Básico (Free)
- 1 locación
- 10 unidades
- 1 usuario
- Funcionalidades básicas

### Plan Pro
- 5 locaciones
- 100 unidades
- 5 usuarios
- Todas las funcionalidades

### Plan Enterprise
- Locaciones ilimitadas
- Unidades ilimitadas
- Usuarios ilimitados
- Soporte prioritario

## Solicitar Aumento de Límites

### Contacto
- **Email**: contact@storagefy.app
- **Desde el sistema**: Botón "Contactar Soporte"
- **Asunto**: "Solicitud de aumento de límites"

### Información a Proporcionar
- Plan actual
- Límite que quieres aumentar
- Justificación del aumento
- Fecha esperada

## Monitoreo Continuo

- **Alertas**: Recibes alertas cuando te acercas a un límite
- **Recomendaciones**: El sistema sugiere acciones
- **Historial**: Ve el crecimiento de uso a lo largo del tiempo`,
      en: `# Subscription Limits

## View Current Limits

1. Go to **Settings** → **Subscription**
2. You'll see a summary of your current plan and limits

## Types of Limits

### Location Limit
- **What it means**: Maximum number of locations you can create
- **View usage**: Progress bar shows how many you use
- **Example**: Basic Plan = 1 location, Pro Plan = 5 locations

### Unit Limit
- **What it means**: Maximum number of total units
- **View usage**: Counter of created units vs maximum
- **Update**: Adds up when you create new units

### User Limit
- **What it means**: Maximum number of users in your organization
- **View usage**: List of active users
- **Important**: Inactive users don't count

## Verify Current Usage

### Usage Dashboard
- **Progress bar**: Visual of usage vs limit
- **Percentage**: How much you've used
- **Remaining**: How much you have available

### Details by Category
- **Locations**: List of created locations
- **Units**: Total units per location
- **Users**: List of active users

## Reach a Limit

### What Happens
- **Create new location**: Message "You've reached the limit"
- **Create new unit**: Error when trying to create
- **Add user**: Doesn't allow adding more users

### Solutions

#### Option 1: Upgrade Plan
1. Click **"Upgrade Plan"**
2. See higher plan options
3. Select the plan you need
4. Confirm upgrade
5. Limits update immediately

#### Option 2: Remove Resources
1. **Deactivate locations**: Deactivate unused locations
2. **Delete units**: Delete obsolete units
3. **Deactivate users**: Deactivate users you no longer need

**Note**: Data is maintained, only deactivated

## Available Plans

### Basic Plan (Free)
- 1 location
- 10 units
- 1 user
- Basic features

### Pro Plan
- 5 locations
- 100 units
- 5 users
- All features

### Enterprise Plan
- Unlimited locations
- Unlimited units
- Unlimited users
- Priority support

## Request Limit Increase

### Contact
- **Email**: contact@storagefy.app
- **From system**: "Contact Support" button
- **Subject**: "Limit increase request"

### Information to Provide
- Current plan
- Limit you want to increase
- Justification for increase
- Expected date

## Continuous Monitoring

- **Alerts**: You receive alerts when approaching a limit
- **Recommendations**: System suggests actions
- **History**: See usage growth over time`
    },
    tags: ['configuración', 'suscripción', 'límites'],
    order: 5
  }
]
