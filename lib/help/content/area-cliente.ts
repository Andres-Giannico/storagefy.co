import { HelpArticle } from '../help-categories'

export const areaClienteArticles: HelpArticle[] = [
  {
    id: 'acceder-area-cliente',
    categoryId: 'area-cliente',
    title: { es: 'Acceder al Área de Cliente', en: 'Access Client Area' },
    description: {
      es: 'Cómo acceder a tu portal personal de cliente',
      en: 'How to access your personal client portal'
    },
    content: {
      es: `# Acceder al Área de Cliente

El **Área de Cliente** es tu portal personal donde puedes gestionar todos tus contratos, facturas, pagos y accesos de forma autónoma.

## ¿Cómo acceder?

1. Recibirás un email de bienvenida con un enlace único para acceder
2. Haz clic en el enlace del email o visita la URL que te proporcionó tu empresa
3. Si es tu primera vez, deberás crear una contraseña segura
4. Una vez configurada, podrás iniciar sesión con tu email y contraseña

## Requisitos

- **Email válido**: Debe ser el mismo que registraste con la empresa
- **Contraseña segura**: Mínimo 8 caracteres, incluyendo mayúsculas, minúsculas y números
- **Navegador actualizado**: Chrome, Firefox, Safari o Edge (versiones recientes)

## ¿Olvidaste tu contraseña?

1. En la pantalla de login, haz clic en "¿Olvidaste tu contraseña?"
2. Ingresa tu email
3. Recibirás un enlace para restablecer tu contraseña
4. Sigue las instrucciones del email

## Seguridad

- Tu sesión expira después de 30 minutos de inactividad
- Puedes cerrar sesión en cualquier momento
- Todos los accesos quedan registrados por seguridad

> **Tip**: Guarda tus credenciales en un lugar seguro. Nunca compartas tu contraseña con nadie.`,
      en: `# Access Client Area

The **Client Area** is your personal portal where you can manage all your contracts, invoices, payments and access autonomously.

## How to access?

1. You will receive a welcome email with a unique access link
2. Click the link in the email or visit the URL provided by your company
3. If it's your first time, you'll need to create a secure password
4. Once set up, you can log in with your email and password

## Requirements

- **Valid email**: Must be the same one you registered with the company
- **Secure password**: Minimum 8 characters, including uppercase, lowercase and numbers
- **Updated browser**: Chrome, Firefox, Safari or Edge (recent versions)

## Forgot your password?

1. On the login screen, click "Forgot your password?"
2. Enter your email
3. You will receive a link to reset your password
4. Follow the instructions in the email

## Security

- Your session expires after 30 minutes of inactivity
- You can log out at any time
- All access is logged for security

> **Tip**: Keep your credentials in a safe place. Never share your password with anyone.`
    },
    tags: ['acceso', 'login', 'portal', 'cliente'],
    order: 1,
    featured: true
  },
  {
    id: 'ver-contratos',
    categoryId: 'area-cliente',
    title: { es: 'Ver Mis Contratos', en: 'View My Contracts' },
    description: {
      es: 'Consulta todos tus contratos activos y finalizados',
      en: 'View all your active and completed contracts'
    },
    content: {
      es: `# Ver Mis Contratos

En el **Área de Cliente** puedes ver todos tus contratos de alquiler, tanto activos como finalizados.

## Acceder a tus contratos

1. Una vez dentro del área de cliente, verás la sección **"Mis Contratos"**
2. Haz clic para ver el listado completo
3. Los contratos activos aparecen primero, seguidos de los finalizados

## Información disponible

Para cada contrato verás:

- **Número de contrato**: Identificador único
- **Unidad asignada**: Ubicación y número de unidad
- **Fecha de inicio y fin**: Período de alquiler
- **Precio mensual**: Coste del alquiler
- **Estado**: Activo, Finalizado, Cancelado
- **Próximo pago**: Fecha y monto del próximo pago

## Detalles del contrato

Al hacer clic en un contrato verás:

- **Datos completos**: Información detallada del contrato
- **Historial de pagos**: Todos los pagos realizados
- **Facturas**: Facturas asociadas al contrato
- **Accesos**: Historial de accesos a la unidad
- **Documentos**: Contrato firmado en PDF

## Descargar contrato

1. Abre el contrato que deseas descargar
2. Haz clic en el botón **"Descargar PDF"**
3. El documento se descargará con toda la información legal

> **Tip**: Guarda una copia de tus contratos en un lugar seguro para tus registros.`,
      en: `# View My Contracts

In the **Client Area** you can view all your rental contracts, both active and completed.

## Access your contracts

1. Once inside the client area, you'll see the **"My Contracts"** section
2. Click to see the complete list
3. Active contracts appear first, followed by completed ones

## Available information

For each contract you'll see:

- **Contract number**: Unique identifier
- **Assigned unit**: Location and unit number
- **Start and end date**: Rental period
- **Monthly price**: Rental cost
- **Status**: Active, Completed, Cancelled
- **Next payment**: Date and amount of next payment

## Contract details

When you click on a contract you'll see:

- **Complete data**: Detailed contract information
- **Payment history**: All payments made
- **Invoices**: Invoices associated with the contract
- **Access**: Access history to the unit
- **Documents**: Signed contract in PDF

## Download contract

1. Open the contract you want to download
2. Click the **"Download PDF"** button
3. The document will download with all legal information

> **Tip**: Keep a copy of your contracts in a safe place for your records.`
    },
    tags: ['contratos', 'alquiler', 'unidades'],
    order: 2,
    featured: true
  },
  {
    id: 'ver-facturas',
    categoryId: 'area-cliente',
    title: { es: 'Ver y Descargar Facturas', en: 'View and Download Invoices' },
    description: {
      es: 'Consulta y descarga todas tus facturas',
      en: 'View and download all your invoices'
    },
    content: {
      es: `# Ver y Descargar Facturas

En el **Área de Cliente** puedes ver y descargar todas tus facturas de forma sencilla.

## Acceder a tus facturas

1. En el menú principal, selecciona **"Facturas"**
2. Verás un listado de todas tus facturas
3. Puedes filtrar por estado: Pagadas, Pendientes, Vencidas

## Información de cada factura

Cada factura muestra:

- **Número de factura**: Identificador único
- **Fecha de emisión**: Cuándo se generó la factura
- **Importe total**: Monto a pagar
- **Estado**: Pagada, Pendiente, Vencida
- **Período facturado**: Fechas que cubre la factura
- **Método de pago**: Cómo se realizó o se realizará el pago

## Descargar factura

1. Haz clic en la factura que deseas descargar
2. Verás los detalles completos
3. Haz clic en el botón **"Descargar PDF"**
4. La factura se descargará en formato PDF

## Filtrar facturas

Puedes filtrar tus facturas por:

- **Todas**: Muestra todas las facturas
- **Pagadas**: Solo facturas ya pagadas
- **Pendientes**: Facturas que aún no has pagado
- **Vencidas**: Facturas con fecha de vencimiento pasada

## Buscar facturas

Usa el buscador para encontrar facturas por:

- Número de factura
- Fecha
- Importe
- Estado

> **Tip**: Descarga y guarda tus facturas para tus registros fiscales. Todas las facturas están disponibles en formato PDF.`,
      en: `# View and Download Invoices

In the **Client Area** you can view and download all your invoices easily.

## Access your invoices

1. In the main menu, select **"Invoices"**
2. You'll see a list of all your invoices
3. You can filter by status: Paid, Pending, Overdue

## Information for each invoice

Each invoice shows:

- **Invoice number**: Unique identifier
- **Issue date**: When the invoice was generated
- **Total amount**: Amount to pay
- **Status**: Paid, Pending, Overdue
- **Billed period**: Dates covered by the invoice
- **Payment method**: How payment was or will be made

## Download invoice

1. Click on the invoice you want to download
2. You'll see complete details
3. Click the **"Download PDF"** button
4. The invoice will download in PDF format

## Filter invoices

You can filter your invoices by:

- **All**: Shows all invoices
- **Paid**: Only already paid invoices
- **Pending**: Invoices you haven't paid yet
- **Overdue**: Invoices with past due date

## Search invoices

Use the search to find invoices by:

- Invoice number
- Date
- Amount
- Status

> **Tip**: Download and save your invoices for your tax records. All invoices are available in PDF format.`
    },
    tags: ['facturas', 'descargar', 'pdf'],
    order: 3
  },
  {
    id: 'gestionar-pagos',
    categoryId: 'area-cliente',
    title: { es: 'Gestionar Pagos y Pagar Online', en: 'Manage Payments and Pay Online' },
    description: {
      es: 'Realiza pagos y gestiona tu historial de pagos',
      en: 'Make payments and manage your payment history'
    },
    content: {
      es: `# Gestionar Pagos y Pagar Online

El **Área de Cliente** te permite gestionar todos tus pagos de forma sencilla y segura.

## Ver tus pagos

1. En el menú principal, selecciona **"Pagos"**
2. Verás un listado de todos tus pagos
3. Puedes filtrar por estado: Todos, Pagados, Pendientes, Fallidos

## Información de cada pago

Cada pago muestra:

- **Número de pago**: Identificador único
- **Importe**: Monto del pago
- **Fecha de vencimiento**: Cuándo vence el pago
- **Estado**: Pagado, Pendiente, Fallido, Reembolsado
- **Método de pago**: Cómo se realizó o se realizará
- **Unidad asociada**: A qué unidad corresponde el pago

## Pagar online

Para pagar un pago pendiente:

1. En la lista de pagos, encuentra el pago pendiente
2. Haz clic en el botón **"Pagar con Tarjeta"**
3. Serás redirigido a una pasarela de pago segura
4. Completa los datos de tu tarjeta
5. Confirma el pago
6. Recibirás una confirmación por email

## Métodos de pago disponibles

- **Tarjeta de crédito/débito**: Visa, Mastercard, American Express
- **Domiciliación bancaria (SEPA)**: Pago automático desde tu cuenta
- **Transferencia bancaria**: Pago manual por transferencia

## Activar domiciliación SEPA

Para activar el pago automático:

1. Ve a tu perfil
2. Busca la sección **"Métodos de Pago"**
3. Haz clic en **"Activar SEPA"**
4. Completa los datos de tu cuenta bancaria
5. Confirma la activación

## Historial de pagos

Puedes ver el historial completo de todos tus pagos:

- **Pagos realizados**: Todos los pagos completados
- **Pagos pendientes**: Pagos que aún no has realizado
- **Pagos fallidos**: Pagos que no se pudieron procesar
- **Reembolsos**: Pagos que han sido reembolsados

## Notificaciones

Recibirás notificaciones por email cuando:

- Un pago está próximo a vencer
- Un pago ha sido procesado exitosamente
- Un pago ha fallado
- Se genera un nuevo pago

> **Tip**: Activa la domiciliación SEPA para no tener que preocuparte por los pagos. Se cargarán automáticamente en la fecha de vencimiento.`,
      en: `# Manage Payments and Pay Online

The **Client Area** allows you to manage all your payments easily and securely.

## View your payments

1. In the main menu, select **"Payments"**
2. You'll see a list of all your payments
3. You can filter by status: All, Paid, Pending, Failed

## Information for each payment

Each payment shows:

- **Payment number**: Unique identifier
- **Amount**: Payment amount
- **Due date**: When the payment is due
- **Status**: Paid, Pending, Failed, Refunded
- **Payment method**: How it was or will be made
- **Associated unit**: Which unit the payment corresponds to

## Pay online

To pay a pending payment:

1. In the payment list, find the pending payment
2. Click the **"Pay with Card"** button
3. You'll be redirected to a secure payment gateway
4. Complete your card details
5. Confirm the payment
6. You'll receive a confirmation email

## Available payment methods

- **Credit/debit card**: Visa, Mastercard, American Express
- **Bank direct debit (SEPA)**: Automatic payment from your account
- **Bank transfer**: Manual payment by transfer

## Activate SEPA direct debit

To activate automatic payment:

1. Go to your profile
2. Look for the **"Payment Methods"** section
3. Click **"Activate SEPA"**
4. Complete your bank account details
5. Confirm activation

## Payment history

You can view the complete history of all your payments:

- **Completed payments**: All payments completed
- **Pending payments**: Payments you haven't made yet
- **Failed payments**: Payments that couldn't be processed
- **Refunds**: Payments that have been refunded

## Notifications

You'll receive email notifications when:

- A payment is approaching its due date
- A payment has been processed successfully
- A payment has failed
- A new payment is generated

> **Tip**: Activate SEPA direct debit so you don't have to worry about payments. They'll be charged automatically on the due date.`
    },
    tags: ['pagos', 'tarjeta', 'sepa', 'online'],
    order: 4,
    featured: true
  },
  {
    id: 'actualizar-perfil',
    categoryId: 'area-cliente',
    title: { es: 'Actualizar Mi Perfil', en: 'Update My Profile' },
    description: {
      es: 'Actualiza tus datos personales y de contacto',
      en: 'Update your personal and contact information'
    },
    content: {
      es: `# Actualizar Mi Perfil

En el **Área de Cliente** puedes actualizar tu información personal en cualquier momento.

## Acceder a tu perfil

1. Haz clic en tu nombre o avatar en la esquina superior derecha
2. Selecciona **"Mi Perfil"**
3. Verás todos tus datos personales

## Información que puedes actualizar

### Datos personales

- **Nombre y apellidos**: Tu nombre completo
- **Email**: Dirección de correo electrónico
- **Teléfono**: Número de contacto
- **Fecha de nacimiento**: Para verificaciones legales

### Dirección

- **Dirección completa**: Calle, número, piso
- **Ciudad**: Ciudad de residencia
- **Código postal**: Código postal
- **País**: País de residencia

### Preferencias

- **Idioma**: Idioma preferido para la interfaz
- **Notificaciones**: Cómo quieres recibir notificaciones
- **Comunicaciones**: Preferencias de marketing

## Guardar cambios

1. Actualiza los campos que desees modificar
2. Haz clic en el botón **"Guardar Cambios"**
3. Recibirás una confirmación de que los cambios se guardaron

## Validaciones

El sistema valida automáticamente:

- **Email**: Debe tener un formato válido
- **Teléfono**: Debe tener un formato correcto
- **Código postal**: Debe coincidir con el formato del país

## Cambiar contraseña

Para cambiar tu contraseña:

1. Ve a la sección **"Seguridad"** en tu perfil
2. Haz clic en **"Cambiar Contraseña"**
3. Ingresa tu contraseña actual
4. Ingresa la nueva contraseña (mínimo 8 caracteres)
5. Confirma la nueva contraseña
6. Guarda los cambios

> **Tip**: Mantén tu información actualizada para recibir notificaciones importantes y facturas correctamente.`,
      en: `# Update My Profile

In the **Client Area** you can update your personal information at any time.

## Access your profile

1. Click on your name or avatar in the top right corner
2. Select **"My Profile"**
3. You'll see all your personal data

## Information you can update

### Personal data

- **First and last name**: Your full name
- **Email**: Email address
- **Phone**: Contact number
- **Date of birth**: For legal verifications

### Address

- **Full address**: Street, number, floor
- **City**: City of residence
- **Postal code**: Postal code
- **Country**: Country of residence

### Preferences

- **Language**: Preferred language for the interface
- **Notifications**: How you want to receive notifications
- **Communications**: Marketing preferences

## Save changes

1. Update the fields you want to modify
2. Click the **"Save Changes"** button
3. You'll receive a confirmation that changes were saved

## Validations

The system automatically validates:

- **Email**: Must have a valid format
- **Phone**: Must have a correct format
- **Postal code**: Must match the country format

## Change password

To change your password:

1. Go to the **"Security"** section in your profile
2. Click **"Change Password"**
3. Enter your current password
4. Enter the new password (minimum 8 characters)
5. Confirm the new password
6. Save changes

> **Tip**: Keep your information updated to receive important notifications and invoices correctly.`
    },
    tags: ['perfil', 'datos', 'actualizar'],
    order: 5
  },
  {
    id: 'subir-documentos',
    categoryId: 'area-cliente',
    title: { es: 'Subir Documentos (DNI)', en: 'Upload Documents (ID)' },
    description: {
      es: 'Sube fotos de tu DNI para verificación',
      en: 'Upload ID photos for verification'
    },
    content: {
      es: `# Subir Documentos (DNI)

En el **Área de Cliente** puedes subir fotos de tu DNI para completar tu verificación de identidad.

## ¿Por qué subir mi DNI?

La verificación de identidad es necesaria para:

- Cumplir con normativas legales
- Validar contratos de alquiler
- Asegurar la seguridad de todos los usuarios
- Cumplir con normativas RGPD

## Cómo subir tu DNI

### DNI Frente

1. Ve a tu perfil
2. Busca la sección **"Documentos"**
3. Haz clic en **"Subir DNI Frente"**
4. Selecciona una foto clara del frente de tu DNI/NIE
5. Asegúrate de que:
   - La foto esté bien iluminada
   - Todos los datos sean legibles
   - No haya reflejos ni sombras
   - El documento esté completo en la foto
6. Confirma la subida

### DNI Dorso

1. En la misma sección, haz clic en **"Subir DNI Dorso"**
2. Selecciona una foto clara del reverso de tu DNI/NIE
3. Sigue las mismas recomendaciones de calidad
4. Confirma la subida

## Requisitos de las fotos

- **Formato**: JPG, PNG o PDF
- **Tamaño máximo**: 5 MB por archivo
- **Calidad**: Debe ser legible y nítida
- **Orientación**: Correcta (no rotada)

## Seguridad

Tus documentos están protegidos:

- **Cifrado**: Todas las imágenes se cifran automáticamente
- **Acceso restringido**: Solo personal autorizado puede verlas
- **Cumplimiento RGPD**: Cumplimos con todas las normativas de protección de datos
- **Almacenamiento seguro**: Los documentos se guardan en servidores seguros

## Verificar estado

Puedes verificar el estado de tus documentos:

- **Pendiente**: El documento está siendo revisado
- **Aprobado**: El documento ha sido verificado
- **Rechazado**: El documento necesita ser corregido (verás el motivo)

## Actualizar documentos

Si necesitas actualizar tus documentos:

1. Ve a la sección de documentos
2. Haz clic en **"Actualizar"** junto al documento
3. Sube la nueva foto
4. El documento anterior será reemplazado

> **Tip**: Toma las fotos en un lugar bien iluminado y asegúrate de que todos los datos sean claramente visibles. Esto acelerará el proceso de verificación.`,
      en: `# Upload Documents (ID)

In the **Client Area** you can upload photos of your ID to complete your identity verification.

## Why upload my ID?

Identity verification is necessary for:

- Complying with legal regulations
- Validating rental contracts
- Ensuring security for all users
- Complying with GDPR regulations

## How to upload your ID

### ID Front

1. Go to your profile
2. Look for the **"Documents"** section
3. Click **"Upload ID Front"**
4. Select a clear photo of the front of your ID/NIE
5. Make sure:
   - The photo is well lit
   - All data is readable
   - There are no reflections or shadows
   - The document is complete in the photo
6. Confirm the upload

### ID Back

1. In the same section, click **"Upload ID Back"**
2. Select a clear photo of the back of your ID/NIE
3. Follow the same quality recommendations
4. Confirm the upload

## Photo requirements

- **Format**: JPG, PNG or PDF
- **Maximum size**: 5 MB per file
- **Quality**: Must be readable and sharp
- **Orientation**: Correct (not rotated)

## Security

Your documents are protected:

- **Encryption**: All images are automatically encrypted
- **Restricted access**: Only authorized personnel can view them
- **GDPR compliance**: We comply with all data protection regulations
- **Secure storage**: Documents are stored on secure servers

## Check status

You can check the status of your documents:

- **Pending**: The document is being reviewed
- **Approved**: The document has been verified
- **Rejected**: The document needs to be corrected (you'll see the reason)

## Update documents

If you need to update your documents:

1. Go to the documents section
2. Click **"Update"** next to the document
3. Upload the new photo
4. The previous document will be replaced

> **Tip**: Take photos in a well-lit place and make sure all data is clearly visible. This will speed up the verification process.`
    },
    tags: ['dni', 'documentos', 'verificación', 'subir'],
    order: 6
  },
  {
    id: 'control-puertas',
    categoryId: 'area-cliente',
    title: { es: 'Control de Puertas Remoto', en: 'Remote Door Control' },
    description: {
      es: 'Abre puertas de acceso desde tu móvil',
      en: 'Open access doors from your mobile'
    },
    content: {
      es: `# Control de Puertas Remoto

El **Área de Cliente** te permite abrir las puertas de acceso a tus unidades de forma remota desde tu móvil.

## ¿Cómo funciona?

El sistema utiliza tecnología Sonoff para controlar las puertas de acceso. Puedes abrir las puertas directamente desde tu área de cliente durante el horario de acceso permitido.

## Acceder al control de puertas

1. En el dashboard, busca la sección **"Control de Acceso"**
2. Verás todas las ubicaciones donde tienes unidades
3. Cada ubicación muestra si tiene control remoto disponible

## Abrir una puerta

Para abrir una puerta:

1. Selecciona la ubicación donde está tu unidad
2. Verás el estado de la puerta (disponible, fuera de horario, etc.)
3. Haz clic en el botón **"Abrir Puerta"**
4. La puerta se abrirá automáticamente
5. Recibirás una confirmación

## Horarios de acceso

Cada ubicación tiene horarios de acceso configurados:

- **Acceso 24/7**: Puedes abrir la puerta en cualquier momento
- **Horario restringido**: Solo puedes abrir durante el horario permitido (ej: 06:00 - 23:30)

Si intentas abrir fuera del horario, verás un mensaje indicando el horario permitido.

## Estados de la puerta

- **Disponible**: La puerta está lista para abrirse
- **Fuera de horario**: No está dentro del horario permitido
- **Sin conexión**: El dispositivo no está conectado
- **Mantenimiento**: La puerta está en mantenimiento

## Registro de accesos

Todos tus accesos quedan registrados:

- **Fecha y hora**: Cuándo abriste la puerta
- **Ubicación**: Dónde se abrió la puerta
- **Método**: Remoto (desde el área de cliente)

Puedes ver tu historial de accesos en la sección correspondiente.

## Solución de problemas

### La puerta no se abre

- Verifica que estés dentro del horario permitido
- Comprueba tu conexión a internet
- Asegúrate de que el dispositivo esté en línea
- Contacta con soporte si el problema persiste

### Mensaje "Fuera de horario"

- Revisa el horario de acceso de la ubicación
- El horario se muestra en la pantalla de control
- Solo puedes abrir durante el horario configurado

### Dispositivo sin conexión

- El dispositivo puede estar en mantenimiento
- Contacta con la empresa para reportar el problema
- Mientras tanto, puedes usar el acceso físico si está disponible

> **Tip**: Guarda el acceso al área de cliente en la pantalla de inicio de tu móvil para acceso rápido a las puertas.`,
      en: `# Remote Door Control

The **Client Area** allows you to open access doors to your units remotely from your mobile.

## How does it work?

The system uses Sonoff technology to control access doors. You can open doors directly from your client area during the allowed access hours.

## Access door control

1. In the dashboard, look for the **"Access Control"** section
2. You'll see all locations where you have units
3. Each location shows if remote control is available

## Open a door

To open a door:

1. Select the location where your unit is
2. You'll see the door status (available, outside hours, etc.)
3. Click the **"Open Door"** button
4. The door will open automatically
5. You'll receive a confirmation

## Access hours

Each location has configured access hours:

- **24/7 access**: You can open the door at any time
- **Restricted hours**: You can only open during allowed hours (e.g., 06:00 - 23:30)

If you try to open outside hours, you'll see a message indicating the allowed hours.

## Door status

- **Available**: The door is ready to open
- **Outside hours**: Not within allowed hours
- **No connection**: The device is not connected
- **Maintenance**: The door is under maintenance

## Access log

All your access is logged:

- **Date and time**: When you opened the door
- **Location**: Where the door was opened
- **Method**: Remote (from client area)

You can view your access history in the corresponding section.

## Troubleshooting

### Door doesn't open

- Verify you're within allowed hours
- Check your internet connection
- Make sure the device is online
- Contact support if the problem persists

### "Outside hours" message

- Review the location's access hours
- The hours are shown on the control screen
- You can only open during configured hours

### Device not connected

- The device may be under maintenance
- Contact the company to report the problem
- Meanwhile, you can use physical access if available

> **Tip**: Save access to the client area on your mobile home screen for quick access to doors.`
    },
    tags: ['puertas', 'acceso', 'remoto', 'sonoff'],
    order: 7,
    featured: true
  },
  {
    id: 'activar-sepa',
    categoryId: 'area-cliente',
    title: { es: 'Activar Domiciliación SEPA', en: 'Activate SEPA Direct Debit' },
    description: {
      es: 'Configura el pago automático desde tu cuenta bancaria',
      en: 'Set up automatic payment from your bank account'
    },
    content: {
      es: `# Activar Domiciliación SEPA

La domiciliación SEPA te permite pagar automáticamente desde tu cuenta bancaria sin tener que realizar pagos manuales cada mes.

## ¿Qué es SEPA?

SEPA (Single Euro Payments Area) es un sistema de domiciliación bancaria que permite cargar pagos automáticamente desde tu cuenta bancaria. Es muy común en Europa y especialmente útil para pagos recurrentes.

## Ventajas de SEPA

- **Automático**: Los pagos se realizan automáticamente en la fecha de vencimiento
- **Sin preocupaciones**: No tienes que recordar pagar cada mes
- **Seguro**: Transacciones bancarias seguras y reguladas
- **Sin comisiones**: Generalmente no hay comisiones adicionales

## Cómo activar SEPA

### Paso 1: Acceder a la configuración

1. Ve a tu perfil en el área de cliente
2. Busca la sección **"Métodos de Pago"**
3. Haz clic en **"Activar Domiciliación SEPA"**

### Paso 2: Completar datos bancarios

Necesitarás proporcionar:

- **IBAN**: Número de cuenta bancaria internacional
- **BIC/SWIFT**: Código del banco (opcional en algunos casos)
- **Titular de la cuenta**: Nombre del titular
- **Dirección del titular**: Dirección asociada a la cuenta

### Paso 3: Autorización

1. Lee y acepta los términos y condiciones
2. Autoriza la domiciliación de recibos
3. Confirma la activación

### Paso 4: Verificación

- Recibirás un email de confirmación
- Puede haber una verificación inicial (depende del banco)
- Una vez verificada, la domiciliación estará activa

## Información importante

### IBAN

El IBAN (International Bank Account Number) es tu número de cuenta en formato internacional. Lo encontrarás en:

- Extractos bancarios
- Aplicación móvil de tu banco
- Portal web de tu banco

Formato típico: ES91 2100 0418 4502 0005 1332

### BIC/SWIFT

El código BIC (Bank Identifier Code) identifica tu banco. No siempre es obligatorio, pero puede ser necesario para algunas transacciones.

## Gestión de la domiciliación

Una vez activada, puedes:

- **Ver el estado**: Si está activa o pendiente
- **Ver próximos cargos**: Cuándo se realizará el próximo cargo
- **Desactivar**: Cancelar la domiciliación en cualquier momento
- **Actualizar datos**: Modificar información bancaria si es necesario

## Desactivar SEPA

Si deseas desactivar la domiciliación:

1. Ve a la sección de métodos de pago
2. Haz clic en **"Desactivar SEPA"**
3. Confirma la desactivación
4. A partir de ese momento, deberás pagar manualmente

## Preguntas frecuentes

### ¿Cuándo se cargará el pago?

Los pagos se cargan automáticamente en la fecha de vencimiento del pago.

### ¿Puedo cancelar un cargo?

Puedes cancelar la domiciliación en cualquier momento, pero los cargos ya autorizados se procesarán.

### ¿Hay comisiones?

Generalmente no hay comisiones adicionales, pero consulta con tu banco para confirmar.

### ¿Qué pasa si no hay fondos?

Si no hay fondos suficientes, el cargo fallará y deberás pagar manualmente. Puede haber comisiones por parte de tu banco.

> **Tip**: La domiciliación SEPA es la forma más cómoda de pagar. Una vez configurada, no tendrás que preocuparte por los pagos mensuales.`,
      en: `# Activate SEPA Direct Debit

SEPA direct debit allows you to pay automatically from your bank account without having to make manual payments each month.

## What is SEPA?

SEPA (Single Euro Payments Area) is a bank direct debit system that allows automatic charges from your bank account. It's very common in Europe and especially useful for recurring payments.

## SEPA advantages

- **Automatic**: Payments are made automatically on the due date
- **No worries**: You don't have to remember to pay each month
- **Secure**: Secure and regulated bank transactions
- **No fees**: Generally no additional fees

## How to activate SEPA

### Step 1: Access settings

1. Go to your profile in the client area
2. Look for the **"Payment Methods"** section
3. Click **"Activate SEPA Direct Debit"**

### Step 2: Complete bank details

You'll need to provide:

- **IBAN**: International bank account number
- **BIC/SWIFT**: Bank code (optional in some cases)
- **Account holder**: Account holder name
- **Holder address**: Address associated with the account

### Step 3: Authorization

1. Read and accept the terms and conditions
2. Authorize direct debit of receipts
3. Confirm activation

### Step 4: Verification

- You'll receive a confirmation email
- There may be an initial verification (depends on the bank)
- Once verified, direct debit will be active

## Important information

### IBAN

The IBAN (International Bank Account Number) is your account number in international format. You'll find it in:

- Bank statements
- Your bank's mobile app
- Your bank's web portal

Typical format: ES91 2100 0418 4502 0005 1332

### BIC/SWIFT

The BIC (Bank Identifier Code) identifies your bank. It's not always mandatory, but may be necessary for some transactions.

## Managing direct debit

Once activated, you can:

- **View status**: If it's active or pending
- **View upcoming charges**: When the next charge will be made
- **Deactivate**: Cancel direct debit at any time
- **Update data**: Modify bank information if necessary

## Deactivate SEPA

If you want to deactivate direct debit:

1. Go to the payment methods section
2. Click **"Deactivate SEPA"**
3. Confirm deactivation
4. From that moment, you'll need to pay manually

## Frequently asked questions

### When will the payment be charged?

Payments are charged automatically on the payment due date.

### Can I cancel a charge?

You can cancel direct debit at any time, but already authorized charges will be processed.

### Are there fees?

Generally there are no additional fees, but check with your bank to confirm.

### What happens if there are no funds?

If there are insufficient funds, the charge will fail and you'll need to pay manually. There may be fees from your bank.

> **Tip**: SEPA direct debit is the most convenient way to pay. Once set up, you won't have to worry about monthly payments.`
    },
    tags: ['sepa', 'domiciliación', 'pago automático', 'iban'],
    order: 8
  },
  {
    id: 'recuperar-contraseña',
    categoryId: 'area-cliente',
    title: { es: 'Recuperar Mi Contraseña', en: 'Recover My Password' },
    description: {
      es: 'Restablece tu contraseña si la olvidaste',
      en: 'Reset your password if you forgot it'
    },
    content: {
      es: `# Recuperar Mi Contraseña

Si olvidaste tu contraseña del área de cliente, puedes restablecerla fácilmente.

## Proceso de recuperación

### Paso 1: Solicitar recuperación

1. En la pantalla de login, haz clic en **"¿Olvidaste tu contraseña?"**
2. Ingresa el email con el que te registraste
3. Haz clic en **"Enviar enlace de recuperación"**

### Paso 2: Revisar tu email

1. Revisa tu bandeja de entrada
2. Busca un email de StorageFy con el asunto "Recuperar contraseña"
3. Si no lo ves, revisa la carpeta de spam
4. El email contiene un enlace único para restablecer tu contraseña

### Paso 3: Restablecer contraseña

1. Haz clic en el enlace del email
2. Serás redirigido a una página segura
3. Ingresa tu nueva contraseña
4. Confirma la nueva contraseña
5. Haz clic en **"Restablecer Contraseña"**

### Paso 4: Iniciar sesión

1. Una vez restablecida, podrás iniciar sesión con tu nueva contraseña
2. Usa tu email y la nueva contraseña

## Requisitos de la contraseña

Tu nueva contraseña debe cumplir:

- **Mínimo 8 caracteres**: Al menos 8 caracteres de longitud
- **Mayúsculas y minúsculas**: Al menos una de cada
- **Números**: Al menos un número
- **Caracteres especiales**: Recomendado (opcional)

## Seguridad del enlace

- **Vigencia limitada**: El enlace expira después de 24 horas
- **Uso único**: Solo se puede usar una vez
- **Seguro**: El enlace es único y no puede ser adivinado

## Si no recibes el email

Si no recibes el email de recuperación:

1. **Revisa spam**: A veces los emails van a spam
2. **Verifica el email**: Asegúrate de usar el email correcto
3. **Espera unos minutos**: Puede tardar unos minutos en llegar
4. **Solicita otro**: Puedes solicitar otro enlace después de unos minutos
5. **Contacta soporte**: Si el problema persiste, contacta con soporte

## Cambiar contraseña (si ya estás logueado)

Si ya estás dentro del área de cliente y quieres cambiar tu contraseña:

1. Ve a tu perfil
2. Busca la sección **"Seguridad"**
3. Haz clic en **"Cambiar Contraseña"**
4. Ingresa tu contraseña actual
5. Ingresa la nueva contraseña
6. Confirma la nueva contraseña
7. Guarda los cambios

## Consejos de seguridad

- **No compartas tu contraseña**: Nunca compartas tu contraseña con nadie
- **Úsala solo tú**: No uses la misma contraseña en otros sitios
- **Cámbiala regularmente**: Cambia tu contraseña periódicamente
- **Usa un gestor de contraseñas**: Considera usar un gestor de contraseñas seguro

> **Tip**: Si tienes problemas para recuperar tu contraseña, contacta con el soporte de tu empresa. Ellos pueden ayudarte a restablecer tu acceso.`,
      en: `# Recover My Password

If you forgot your client area password, you can easily reset it.

## Recovery process

### Step 1: Request recovery

1. On the login screen, click **"Forgot your password?"**
2. Enter the email you registered with
3. Click **"Send recovery link"**

### Step 2: Check your email

1. Check your inbox
2. Look for an email from StorageFy with subject "Recover password"
3. If you don't see it, check your spam folder
4. The email contains a unique link to reset your password

### Step 3: Reset password

1. Click the link in the email
2. You'll be redirected to a secure page
3. Enter your new password
4. Confirm the new password
5. Click **"Reset Password"**

### Step 4: Log in

1. Once reset, you can log in with your new password
2. Use your email and the new password

## Password requirements

Your new password must meet:

- **Minimum 8 characters**: At least 8 characters long
- **Uppercase and lowercase**: At least one of each
- **Numbers**: At least one number
- **Special characters**: Recommended (optional)

## Link security

- **Limited validity**: The link expires after 24 hours
- **Single use**: Can only be used once
- **Secure**: The link is unique and cannot be guessed

## If you don't receive the email

If you don't receive the recovery email:

1. **Check spam**: Sometimes emails go to spam
2. **Verify email**: Make sure you're using the correct email
3. **Wait a few minutes**: It may take a few minutes to arrive
4. **Request another**: You can request another link after a few minutes
5. **Contact support**: If the problem persists, contact support

## Change password (if already logged in)

If you're already in the client area and want to change your password:

1. Go to your profile
2. Look for the **"Security"** section
3. Click **"Change Password"**
4. Enter your current password
5. Enter the new password
6. Confirm the new password
7. Save changes

## Security tips

- **Don't share your password**: Never share your password with anyone
- **Use it only yourself**: Don't use the same password on other sites
- **Change it regularly**: Change your password periodically
- **Use a password manager**: Consider using a secure password manager

> **Tip**: If you have problems recovering your password, contact your company's support. They can help you reset your access.`
    },
    tags: ['contraseña', 'recuperar', 'seguridad'],
    order: 9
  }
]
