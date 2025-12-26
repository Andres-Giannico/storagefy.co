import { HelpArticle } from '../help-categories'

export const usuariosArticles: HelpArticle[] = [
  {
    id: 'roles-permisos',
    categoryId: 'usuarios',
    title: { es: 'Roles y Permisos', en: 'Roles and Permissions' },
    description: { es: 'Gestiona el acceso de tu equipo', en: 'Manage your team access' },
    content: {
      es: `# Roles y Permisos

## ¿Qué son los Roles?

Los roles definen qué puede hacer cada usuario en StorageFy. Cada rol tiene un conjunto de permisos predefinidos que controlan el acceso a diferentes funcionalidades.

## Roles Disponibles

### Propietario (Owner)
- **Acceso completo**: Puede hacer todo en el sistema
- **Configuración**: Puede modificar toda la configuración
- **Usuarios**: Puede crear, editar y eliminar usuarios
- **Organización**: Puede eliminar la organización
- **Limitaciones**: Ninguna

**Ideal para**: Dueños del negocio o administradores principales

### Administrador (Administrator)
- **Gestión completa**: Puede gestionar unidades, clientes, contratos, pagos
- **Reportes**: Acceso completo a reportes
- **Facturación**: Puede ver y generar facturas
- **Configuración limitada**: Puede modificar configuración básica pero no crítica
- **Usuarios**: Puede crear usuarios pero no eliminarlos

**Ideal para**: Gerentes o supervisores que necesitan acceso completo operativo

### Operador (Operator)
- **Solo lectura**: Puede ver la mayoría de la información
- **Operaciones básicas**: Puede crear contratos y pagos
- **Limitado**: No puede modificar configuración
- **Sin reportes**: Acceso limitado a reportes básicos

**Ideal para**: Personal operativo que necesita crear registros pero no modificar el sistema

## Permisos Detallados

### Ver Dashboard
- Acceso al dashboard principal
- Ver métricas y KPIs
- Ver alertas y notificaciones

### Gestionar Unidades
- Crear nuevas unidades
- Editar unidades existentes
- Eliminar unidades
- Cambiar estados de unidades

### Gestionar Clientes
- Crear fichas de clientes
- Editar información de clientes
- Ver historial de clientes
- Eliminar clientes

### Gestionar Contratos
- Crear nuevos contratos
- Editar contratos existentes
- Terminar contratos
- Ver historial de contratos

### Gestionar Pagos
- Crear pagos
- Procesar pagos
- Marcar pagos como recibidos
- Crear pagos recurrentes

### Ver Facturas
- Ver facturas generadas
- Descargar facturas
- Ver estado de facturas Verifacti

### Ver Reportes
- Acceder a reportes financieros
- Ver reportes de ocupación
- Exportar reportes

### Configuración
- Modificar configuración del negocio
- Gestionar usuarios
- Configurar integraciones
- Modificar límites

## Personalizar Permisos

### Para un Usuario Específico
1. Ve a **Configuración** → **Usuarios**
2. Haz clic en el usuario
3. Ve a la sección **"Permisos"**
4. Activa/desactiva permisos individuales
5. Los permisos personalizados sobrescriben los del rol

### Ejemplo de Personalización
- Usuario con rol "Operador" pero con permiso "Ver Reportes"
- Usuario con rol "Administrador" pero sin permiso "Configuración"

## Mejores Prácticas

- ✅ **Principio de menor privilegio**: Da solo los permisos necesarios
- ✅ **Usa roles predefinidos**: Solo personaliza cuando sea necesario
- ✅ **Revisa permisos regularmente**: Asegúrate de que sigan siendo apropiados
- ✅ **Documenta personalizaciones**: Nota por qué se personalizó`,
      en: `# Roles and Permissions

## What are Roles?

Roles define what each user can do in StorageFy. Each role has a predefined set of permissions that control access to different functionalities.

## Available Roles

### Owner
- **Full access**: Can do everything in the system
- **Settings**: Can modify all settings
- **Users**: Can create, edit and delete users
- **Organization**: Can delete the organization
- **Limitations**: None

**Ideal for**: Business owners or main administrators

### Administrator
- **Full management**: Can manage units, customers, contracts, payments
- **Reports**: Full access to reports
- **Invoicing**: Can view and generate invoices
- **Limited settings**: Can modify basic but not critical settings
- **Users**: Can create users but not delete them

**Ideal for**: Managers or supervisors who need full operational access

### Operator
- **Read-only**: Can view most information
- **Basic operations**: Can create contracts and payments
- **Limited**: Cannot modify settings
- **No reports**: Limited access to basic reports

**Ideal for**: Operational staff who need to create records but not modify the system

## Detailed Permissions

### View Dashboard
- Access to main dashboard
- View metrics and KPIs
- View alerts and notifications

### Manage Units
- Create new units
- Edit existing units
- Delete units
- Change unit statuses

### Manage Customers
- Create customer records
- Edit customer information
- View customer history
- Delete customers

### Manage Contracts
- Create new contracts
- Edit existing contracts
- Terminate contracts
- View contract history

### Manage Payments
- Create payments
- Process payments
- Mark payments as received
- Create recurring payments

### View Invoices
- View generated invoices
- Download invoices
- View Verifacti invoice status

### View Reports
- Access financial reports
- View occupancy reports
- Export reports

### Settings
- Modify business settings
- Manage users
- Configure integrations
- Modify limits

## Customize Permissions

### For a Specific User
1. Go to **Settings** → **Users**
2. Click on the user
3. Go to **"Permissions"** section
4. Activate/deactivate individual permissions
5. Custom permissions override role permissions

### Customization Example
- User with "Operator" role but with "View Reports" permission
- User with "Administrator" role but without "Settings" permission

## Best Practices

- ✅ **Principle of least privilege**: Give only necessary permissions
- ✅ **Use predefined roles**: Only customize when necessary
- ✅ **Review permissions regularly**: Ensure they remain appropriate
- ✅ **Document customizations**: Note why it was customized`
    },
    tags: ['usuarios', 'roles', 'permisos'],
    order: 1,
    featured: true
  },
  {
    id: 'gestionar-usuarios',
    categoryId: 'usuarios',
    title: { es: 'Gestionar Usuarios', en: 'Manage Users' },
    description: { es: 'Cómo agregar, editar y eliminar usuarios', en: 'How to add, edit and delete users' },
    content: {
      es: `# Gestionar Usuarios

## Ver Lista de Usuarios

1. Ve a **Configuración** → **Usuarios**
2. Verás la lista completa de usuarios de tu organización

## Información Mostrada

Cada usuario muestra:
- **Nombre completo**
- **Email** (usado para login)
- **Rol** (Propietario, Administrador, Operador)
- **Estado** (Activo, Inactivo)
- **Última conexión** (cuándo se conectó por última vez)
- **Fecha de creación**

## Agregar Nuevo Usuario

### Paso 1: Invitar
1. Haz clic en **"Agregar Usuario"** o **"Invitar Usuario"**
2. Completa el formulario:
   - **Nombre completo**: Nombre y apellidos
   - **Email**: Email único (no puede estar en uso)
   - **Rol**: Selecciona Propietario, Administrador u Operador

### Paso 2: Enviar Invitación
1. Haz clic en **"Enviar Invitación"**
2. El usuario recibe un email con un link de invitación
3. El link expira después de 7 días (por seguridad)

### Paso 3: Usuario Crea su Cuenta
1. El usuario hace clic en el link del email
2. Crea su contraseña
3. Confirma su cuenta
4. Ya puede acceder a StorageFy

## Editar Usuario

1. Haz clic en el usuario que quieres editar
2. Puedes modificar:
   - **Nombre**: Cambiar nombre completo
   - **Rol**: Cambiar el rol (si tienes permisos)
   - **Estado**: Activar o desactivar usuario
3. **Email NO se puede cambiar** (requiere eliminar y crear nuevo usuario)
4. Haz clic en **"Guardar Cambios"**

## Activar/Desactivar Usuario

### Desactivar
- El usuario pierde acceso inmediatamente
- Sus datos históricos se mantienen
- No cuenta para el límite de usuarios
- Puedes reactivarlo después

### Activar
- El usuario recupera acceso
- Vuelve a contar para el límite
- Todos sus permisos se restauran

**Útil para**: Suspensiones temporales sin perder datos

## Eliminar Usuario

### Proceso
1. Haz clic en **"Eliminar"** en el usuario
2. Confirma la eliminación
3. El sistema te pregunta qué hacer con:
   - **Contratos**: Asignar a otro usuario o mantener sin asignar
   - **Pagos**: Mantener historial
   - **Datos**: Mantener historial pero sin acceso

### Importante
- **No se puede deshacer**: La eliminación es permanente
- **Datos históricos**: Se mantienen para auditoría
- **Acceso**: Se pierde inmediatamente

## Reenviar Invitación

Si un usuario no recibió el email de invitación:

1. Haz clic en el usuario (debe estar en estado "Invitación pendiente")
2. Haz clic en **"Reenviar Invitación"**
3. El usuario recibe un nuevo email con el link
4. El link anterior expira

## Ver Historial

- **Actividad**: Ve qué acciones realizó el usuario
- **Conexiones**: Historial de accesos
- **Cambios**: Quién modificó qué en el sistema

## Límites

- **Plan Básico**: 1 usuario (solo tú)
- **Plan Pro**: 5 usuarios
- **Plan Enterprise**: Usuarios ilimitados

Si alcanzas el límite:
- Verás un mensaje al intentar agregar usuario
- Opciones: Actualizar plan o desactivar usuarios existentes`,
      en: `# Manage Users

## View User List

1. Go to **Settings** → **Users**
2. You'll see the complete list of users in your organization

## Information Shown

Each user shows:
- **Full name**
- **Email** (used for login)
- **Role** (Owner, Administrator, Operator)
- **Status** (Active, Inactive)
- **Last login** (when they last connected)
- **Creation date**

## Add New User

### Step 1: Invite
1. Click **"Add User"** or **"Invite User"**
2. Complete the form:
   - **Full name**: First and last name
   - **Email**: Unique email (cannot be in use)
   - **Role**: Select Owner, Administrator or Operator

### Step 2: Send Invitation
1. Click **"Send Invitation"**
2. User receives an email with invitation link
3. Link expires after 7 days (for security)

### Step 3: User Creates Account
1. User clicks link in email
2. Creates their password
3. Confirms their account
4. Can now access StorageFy

## Edit User

1. Click on user you want to edit
2. You can modify:
   - **Name**: Change full name
   - **Role**: Change role (if you have permissions)
   - **Status**: Activate or deactivate user
3. **Email CANNOT be changed** (requires deleting and creating new user)
4. Click **"Save Changes"**

## Activate/Deactivate User

### Deactivate
- User loses access immediately
- Their historical data is maintained
- Doesn't count toward user limit
- You can reactivate later

### Activate
- User regains access
- Counts toward limit again
- All their permissions are restored

**Useful for**: Temporary suspensions without losing data

## Delete User

### Process
1. Click **"Delete"** on the user
2. Confirm deletion
3. System asks what to do with:
   - **Contracts**: Assign to another user or keep unassigned
   - **Payments**: Maintain history
   - **Data**: Maintain history but without access

### Important
- **Cannot undo**: Deletion is permanent
- **Historical data**: Maintained for auditing
- **Access**: Lost immediately

## Resend Invitation

If a user didn't receive invitation email:

1. Click on the user (must be in "Invitation pending" status)
2. Click **"Resend Invitation"**
3. User receives new email with link
4. Previous link expires

## View History

- **Activity**: See what actions the user performed
- **Connections**: Access history
- **Changes**: Who modified what in the system

## Limits

- **Basic Plan**: 1 user (only you)
- **Pro Plan**: 5 users
- **Enterprise Plan**: Unlimited users

If you reach the limit:
- You'll see a message when trying to add user
- Options: Upgrade plan or deactivate existing users`
    },
    tags: ['usuarios', 'gestionar'],
    order: 2
  },
  {
    id: 'invitaciones-usuarios',
    categoryId: 'usuarios',
    title: { es: 'Invitaciones de Usuarios', en: 'User Invitations' },
    description: { es: 'Cómo funcionan las invitaciones y cómo gestionarlas', en: 'How invitations work and how to manage them' },
    content: {
      es: `# Invitaciones de Usuarios

## ¿Qué es una Invitación?

Una invitación es el proceso mediante el cual agregas nuevos usuarios a tu organización. El usuario recibe un email con un link que le permite crear su cuenta.

## Proceso de Invitación

### 1. Crear Invitación
- Tú creas la invitación desde Configuración → Usuarios
- Ingresas el nombre y email del usuario
- Seleccionas el rol que tendrá
- El sistema genera un link único y seguro

### 2. Envío del Email
- El usuario recibe un email automático
- El email incluye:
  - Tu nombre (quien lo invita)
  - Nombre de la organización
  - Link para aceptar la invitación
  - Instrucciones de cómo proceder

### 3. Aceptar Invitación
- El usuario hace clic en el link
- Es redirigido a una página de StorageFy
- Crea su contraseña
- Confirma su cuenta
- Ya puede acceder

## Estados de Invitación

### Pendiente
- Invitación enviada pero aún no aceptada
- Usuario puede aceptar cuando quiera
- Link válido por 7 días

### Aceptada
- Usuario ya creó su cuenta
- Ya puede acceder al sistema
- Invitación completada

### Expirada
- Pasaron 7 días sin aceptar
- Link ya no funciona
- Puedes reenviar la invitación

## Reenviar Invitación

Si un usuario no recibió el email o expiró:

1. Ve a **Configuración** → **Usuarios**
2. Encuentra el usuario con estado "Pendiente" o "Expirada"
3. Haz clic en **"Reenviar Invitación"**
4. El usuario recibe un nuevo email
5. El link anterior expira (por seguridad)

## Cancelar Invitación

Si ya no quieres que el usuario se una:

1. Haz clic en el usuario con invitación pendiente
2. Haz clic en **"Cancelar Invitación"**
3. La invitación se cancela
4. El link deja de funcionar
5. El usuario no puede crear cuenta con ese link

## Problemas Comunes

### Usuario no recibió el email
**Soluciones**:
- Verifica que el email sea correcto
- Revisa carpeta de spam
- Reenvía la invitación
- Contacta al usuario para verificar su email

### Link expiró
**Solución**: Reenvía la invitación

### Usuario ya tiene cuenta
**Solución**: Si el email ya está registrado, no puedes invitarlo. El usuario debe iniciar sesión normalmente.

### Error al crear cuenta
**Soluciones**:
- Verifica que el link no haya expirado
- Asegúrate de que el email no esté ya en uso
- Contacta a soporte si persiste

## Seguridad

### Link Único
- Cada invitación tiene un link único
- No se puede reutilizar
- Expira después de 7 días

### Validación
- El sistema valida que el email sea válido
- Verifica que no esté ya en uso
- Comprueba formato correcto

### Expiración
- Links expiran por seguridad
- Después de 7 días, se debe reenviar
- Previene accesos no autorizados`,
      en: `# User Invitations

## What is an Invitation?

An invitation is the process by which you add new users to your organization. The user receives an email with a link that allows them to create their account.

## Invitation Process

### 1. Create Invitation
- You create the invitation from Settings → Users
- Enter user's name and email
- Select the role they'll have
- System generates a unique and secure link

### 2. Email Delivery
- User receives automatic email
- Email includes:
  - Your name (who invites them)
  - Organization name
  - Link to accept invitation
  - Instructions on how to proceed

### 3. Accept Invitation
- User clicks on link
- Redirected to StorageFy page
- Creates their password
- Confirms their account
- Can now access

## Invitation Statuses

### Pending
- Invitation sent but not yet accepted
- User can accept whenever they want
- Link valid for 7 days

### Accepted
- User already created account
- Can now access system
- Invitation completed

### Expired
- 7 days passed without accepting
- Link no longer works
- You can resend invitation

## Resend Invitation

If a user didn't receive email or it expired:

1. Go to **Settings** → **Users**
2. Find user with "Pending" or "Expired" status
3. Click **"Resend Invitation"**
4. User receives new email
5. Previous link expires (for security)

## Cancel Invitation

If you no longer want user to join:

1. Click on user with pending invitation
2. Click **"Cancel Invitation"**
3. Invitation is cancelled
4. Link stops working
5. User cannot create account with that link

## Common Issues

### User didn't receive email
**Solutions**:
- Verify email is correct
- Check spam folder
- Resend invitation
- Contact user to verify their email

### Link expired
**Solution**: Resend invitation

### User already has account
**Solution**: If email is already registered, you cannot invite them. User must log in normally.

### Error creating account
**Solutions**:
- Verify link hasn't expired
- Make sure email isn't already in use
- Contact support if persists

## Security

### Unique Link
- Each invitation has a unique link
- Cannot be reused
- Expires after 7 days

### Validation
- System validates email is valid
- Verifies it's not already in use
- Checks correct format

### Expiration
- Links expire for security
- After 7 days, must resend
- Prevents unauthorized access`
    },
    tags: ['usuarios', 'invitaciones'],
    order: 3
  }
]
