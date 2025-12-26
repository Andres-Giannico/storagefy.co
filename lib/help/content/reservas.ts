import { HelpArticle } from '../help-categories'

export const reservasArticles: HelpArticle[] = [
  {
    id: 'configurar-widget',
    categoryId: 'reservas',
    title: { es: 'Configurar Widget de Reservas', en: 'Configure Reservation Widget' },
    description: { es: 'Integra el widget en tu web', en: 'Integrate widget on your website' },
    content: {
      es: `# Configurar Widget de Reservas

## ¿Qué es el Widget de Reservas?

El Widget de Reservas es una herramienta que permite a tus clientes **reservar unidades directamente desde tu página web**, sin necesidad de que contacten contigo por teléfono o email.

**Ventajas:**
- ✅ **24/7**: Los clientes pueden reservar en cualquier momento
- ✅ **Tiempo real**: Muestra disponibilidad actualizada automáticamente
- ✅ **Reducción de trabajo**: Menos llamadas y emails de consulta
- ✅ **Conversión directa**: Los clientes pueden reservar inmediatamente

## Acceder a la Configuración

1. Ve a **Configuración** → **Widgets**
2. Haz clic en **"Nuevo Widget"** o edita uno existente

## Configuración Básica

### Nombre del Widget
- Asigna un nombre descriptivo (ej. "Reservas Online", "Reserva tu Unidad")
- Este nombre es solo para identificarlo internamente

### Seleccionar Locación
- Elige la locación para la cual se mostrarán unidades disponibles
- Puedes crear múltiples widgets para diferentes locaciones

### Token de Seguridad
- El sistema genera automáticamente un **token único** para cada widget
- Este token se usa en el código HTML para identificar el widget
- Mantén este token seguro

## Personalización

### Colores y Estilos
- **Color principal**: Color del botón de reserva
- **Color secundario**: Color de acento para elementos destacados
- **Texto del botón**: Personaliza el texto (ej. "Reservar Ahora", "Consultar Disponibilidad")
- **Tema**: Claro u Oscuro

### Configuración de Disponibilidad
- **Mostrar solo disponibles**: Solo muestra unidades con estado "Disponible"
- **Incluir reservadas**: Muestra también unidades reservadas (marcadas como "Próximamente disponibles")
- **Filtros por tipo**: Puedes filtrar qué tipos de unidades mostrar

## Obtener el Código HTML

1. Una vez configurado, haz clic en **"Generar Código"**
2. Copia el código HTML que aparece
3. El código incluye:
   - Script de carga del widget
   - Token de identificación
   - Estilos personalizados

## Integrar en tu Website

### WordPress
1. Ve al editor de páginas
2. Inserta un bloque "HTML personalizado"
3. Pega el código del widget
4. Guarda y publica

### HTML Estático
1. Abre el archivo HTML donde quieres mostrar el widget
2. Pega el código antes del cierre de \`</body>\`
3. Guarda el archivo

### Otras Plataformas
- **Wix**: Usa el bloque "HTML personalizado"
- **Squarespace**: Usa el bloque "Código"
- **Shopify**: Usa la sección "Código personalizado"`,
      en: `# Configure Reservation Widget

## What is the Reservation Widget?

The Reservation Widget is a tool that allows your customers to **reserve units directly from your website**, without needing to contact you by phone or email.

**Advantages:**
- ✅ **24/7**: Customers can reserve at any time
- ✅ **Real-time**: Shows automatically updated availability
- ✅ **Less work**: Fewer calls and inquiry emails
- ✅ **Direct conversion**: Customers can reserve immediately

## Access Configuration

1. Go to **Settings** → **Widgets**
2. Click **"New Widget"** or edit an existing one

## Basic Configuration

### Widget Name
- Assign a descriptive name (e.g., "Online Reservations", "Reserve Your Unit")
- This name is only for internal identification

### Select Location
- Choose the location for which available units will be shown
- You can create multiple widgets for different locations

### Security Token
- System automatically generates a **unique token** for each widget
- This token is used in the HTML code to identify the widget
- Keep this token secure

## Customization

### Colors and Styles
- **Primary color**: Color of the reservation button
- **Secondary color**: Accent color for highlighted elements
- **Button text**: Customize the text (e.g., "Reserve Now", "Check Availability")
- **Theme**: Light or Dark

### Availability Settings
- **Show only available**: Only shows units with "Available" status
- **Include reserved**: Also shows reserved units (marked as "Coming soon")
- **Filter by type**: You can filter which unit types to show

## Get HTML Code

1. Once configured, click **"Generate Code"**
2. Copy the HTML code that appears
3. The code includes:
   - Widget loading script
   - Identification token
   - Custom styles

## Integrate on Your Website

### WordPress
1. Go to page editor
2. Insert a "Custom HTML" block
3. Paste widget code
4. Save and publish

### Static HTML
1. Open the HTML file where you want to show the widget
2. Paste the code before the closing \`</body>\`
3. Save the file

### Other Platforms
- **Wix**: Use "Custom HTML" block
- **Squarespace**: Use "Code" block
- **Shopify**: Use "Custom code" section`
    },
    tags: ['widget', 'reservas', 'configuración'],
    order: 1,
    featured: true
  },
  {
    id: 'gestionar-reservas',
    categoryId: 'reservas',
    title: { es: 'Gestionar Reservas Recibidas', en: 'Manage Received Reservations' },
    description: { es: 'Cómo ver y gestionar las reservas que llegan a través del widget', en: 'How to view and manage reservations received through the widget' },
    content: {
      es: `# Gestionar Reservas Recibidas

## Acceder a las Reservas

1. Ve a **Reservas** en el menú principal
2. Verás todas las reservas recibidas ordenadas por fecha (más recientes primero)

## Información de Cada Reserva

Cada reserva muestra:
- **Cliente**: Nombre y contacto
- **Unidad**: Código y tipo de unidad reservada
- **Fecha de reserva**: Cuándo se hizo la reserva
- **Fecha de inicio**: Cuándo quiere empezar el cliente
- **Estado**: Pendiente, Confirmada, Cancelada
- **Contacto**: Email y teléfono del cliente

## Estados de Reserva

### Pendiente
- Reserva nueva, aún no procesada
- Requiere acción tuya
- **Acción**: Revisa la reserva y confírmala o contáctalo

### Confirmada
- Reserva confirmada y procesada
- Ya se ha creado el contrato (opcional)
- **Acción**: Puedes ver los detalles o cancelarla

### Cancelada
- Reserva cancelada por el cliente o por ti
- **Acción**: Solo visualización, no requiere acción

## Confirmar una Reserva

1. Haz clic en la reserva pendiente
2. Revisa todos los datos:
   - Verifica que la unidad esté disponible
   - Confirma la fecha de inicio
   - Valida el contacto del cliente
3. Haz clic en **"Confirmar Reserva"**
4. Opcional: El sistema puede crear automáticamente:
   - Ficha de cliente
   - Contrato temporal
   - Notificación por email

## Convertir Reserva en Contrato

Una vez confirmada, puedes convertir la reserva en un contrato completo:

1. Haz clic en **"Crear Contrato"**
2. El sistema pre-llena los datos del cliente
3. Completa los detalles faltantes:
   - Duración del contrato
   - Precio y método de pago
   - Documentación adicional
4. Guarda el contrato
5. La reserva se marca como "Convertida a Contrato"

## Contactar al Cliente

- **Email**: Haz clic en el email del cliente para enviarle un mensaje
- **Teléfono**: Copia el número para llamarle
- **Notificación interna**: Puedes dejar notas sobre el contacto

## Cancelar una Reserva

Si necesitas cancelar una reserva:

1. Haz clic en **"Cancelar Reserva"**
2. Elige el motivo (opcional)
3. Si el cliente canceló, marca **"Cancelada por cliente"**
4. La unidad vuelve a estar disponible automáticamente
5. El cliente recibe una notificación (si configuraste emails)

## Notificaciones

Puedes configurar notificaciones para:
- **Nueva reserva**: Recibe un email cuando llega una nueva reserva
- **Reserva confirmada**: Notifica al cliente cuando confirmas
- **Recordatorio**: Recuerda confirmar reservas pendientes después de X horas

## Estadísticas

En la página de Reservas puedes ver:
- **Total de reservas**: Cuántas reservas has recibido
- **Tasa de conversión**: % de reservas convertidas en contratos
- **Reservas pendientes**: Cuántas necesitan tu atención
- **Promedio de tiempo**: Tiempo promedio desde reserva hasta contrato`,
      en: `# Manage Received Reservations

## Access Reservations

1. Go to **Reservations** in the main menu
2. You'll see all received reservations sorted by date (most recent first)

## Information for Each Reservation

Each reservation shows:
- **Customer**: Name and contact
- **Unit**: Code and type of reserved unit
- **Reservation date**: When the reservation was made
- **Start date**: When the customer wants to start
- **Status**: Pending, Confirmed, Cancelled
- **Contact**: Customer email and phone

## Reservation Statuses

### Pending
- New reservation, not yet processed
- Requires your action
- **Action**: Review reservation and confirm or contact them

### Confirmed
- Reservation confirmed and processed
- Contract already created (optional)
- **Action**: You can view details or cancel it

### Cancelled
- Reservation cancelled by customer or by you
- **Action**: View only, no action required

## Confirm a Reservation

1. Click on the pending reservation
2. Review all data:
   - Verify unit is available
   - Confirm start date
   - Validate customer contact
3. Click **"Confirm Reservation"**
4. Optional: System can automatically create:
   - Customer record
   - Temporary contract
   - Email notification

## Convert Reservation to Contract

Once confirmed, you can convert the reservation into a complete contract:

1. Click **"Create Contract"**
2. System pre-fills customer data
3. Complete missing details:
   - Contract duration
   - Price and payment method
   - Additional documentation
4. Save contract
5. Reservation is marked as "Converted to Contract"

## Contact Customer

- **Email**: Click customer email to send a message
- **Phone**: Copy number to call them
- **Internal notification**: You can leave notes about the contact

## Cancel a Reservation

If you need to cancel a reservation:

1. Click **"Cancel Reservation"**
2. Choose reason (optional)
3. If customer cancelled, mark **"Cancelled by customer"**
4. Unit automatically becomes available again
5. Customer receives notification (if you configured emails)

## Notifications

You can configure notifications for:
- **New reservation**: Receive email when new reservation arrives
- **Confirmed reservation**: Notify customer when you confirm
- **Reminder**: Remind to confirm pending reservations after X hours

## Statistics

On the Reservations page you can see:
- **Total reservations**: How many reservations you've received
- **Conversion rate**: % of reservations converted to contracts
- **Pending reservations**: How many need your attention
- **Average time**: Average time from reservation to contract`
    },
    tags: ['reservas', 'gestionar'],
    order: 2
  },
  {
    id: 'convertir-reserva-contrato',
    categoryId: 'reservas',
    title: { es: 'Convertir Reservas en Contratos', en: 'Convert Reservations to Contracts' },
    description: { es: 'Proceso automatizado para convertir reservas en contratos completos', en: 'Automated process to convert reservations into complete contracts' },
    content: {
      es: `# Convertir Reservas en Contratos

## Proceso Automatizado

Cuando una reserva está confirmada, puedes convertirla automáticamente en un contrato completo con un solo clic.

## Paso 1: Confirmar la Reserva

Antes de convertir, asegúrate de que:
- La reserva está **Confirmada**
- Los datos del cliente son correctos
- La unidad está disponible para la fecha de inicio
- Has contactado con el cliente para validar todo

## Paso 2: Iniciar Conversión

1. Haz clic en la reserva confirmada
2. Verás el botón **"Crear Contrato"**
3. Haz clic para iniciar el proceso

## Paso 3: Datos Pre-llenados

El sistema pre-llena automáticamente:
- ✅ **Cliente**: Nombre, email, teléfono
- ✅ **Unidad**: Código, tipo, dimensiones
- ✅ **Fecha de inicio**: Fecha de la reserva
- ✅ **Locación**: Donde se hizo la reserva

## Paso 4: Completar Información Faltante

Necesitas completar:
- **Duración del contrato**: Meses de duración (ej. 3, 6, 12 meses)
- **Precio**: Precio mensual o total
- **Método de pago**: Transferencia, SEPA, tarjeta, etc.
- **Documentación**: Si requiere documentos adicionales
- **Notas**: Cualquier información adicional

## Paso 5: Revisar y Guardar

1. Revisa todos los campos pre-llenados
2. Verifica que todo sea correcto
3. Completa los campos faltantes
4. Haz clic en **"Guardar Contrato"**
5. El sistema:
   - Crea el contrato completo
   - Vincula la reserva al contrato
   - Marca la reserva como "Convertida"
   - Notifica al cliente (opcional)

## Opciones Avanzadas

### Crear Pago Inicial
- Puedes crear automáticamente el primer pago
- El sistema genera el pago vinculado al contrato
- Puedes enviar el link de pago al cliente

### Configurar Recordatorios
- Activa recordatorios automáticos de pago
- Configura SEPA Direct Debit si aplica
- Programa pagos recurrentes

### Documentación Adicional
- Adjunta documentos requeridos
- Solicita documentación al cliente
- Genera documentos automáticos

## Notificaciones

El cliente puede recibir:
- **Email de bienvenida**: Con detalles del contrato
- **Link de pago**: Si configuraste pago inicial
- **Documentos**: PDFs del contrato y condiciones

## Seguimiento

Una vez convertida, puedes:
- Ver el historial completo: Reserva → Confirmación → Contrato
- Rastrear todo en una sola vista
- Mantener registro de conversiones

## Ventajas del Proceso Automatizado

- ⚡ **Rapidez**: Convierte en segundos
- ✅ **Precisión**: Sin errores de transcripción
- 📊 **Trazabilidad**: Historial completo
- 🔄 **Consistencia**: Mismo proceso siempre`,
      en: `# Convert Reservations to Contracts

## Automated Process

When a reservation is confirmed, you can automatically convert it into a complete contract with a single click.

## Step 1: Confirm Reservation

Before converting, make sure:
- Reservation is **Confirmed**
- Customer data is correct
- Unit is available for start date
- You've contacted customer to validate everything

## Step 2: Start Conversion

1. Click on confirmed reservation
2. You'll see **"Create Contract"** button
3. Click to start the process

## Step 3: Pre-filled Data

System automatically pre-fills:
- ✅ **Customer**: Name, email, phone
- ✅ **Unit**: Code, type, dimensions
- ✅ **Start date**: Reservation date
- ✅ **Location**: Where reservation was made

## Step 4: Complete Missing Information

You need to complete:
- **Contract duration**: Months duration (e.g., 3, 6, 12 months)
- **Price**: Monthly or total price
- **Payment method**: Transfer, SEPA, card, etc.
- **Documentation**: If additional documents required
- **Notes**: Any additional information

## Step 5: Review and Save

1. Review all pre-filled fields
2. Verify everything is correct
3. Complete missing fields
4. Click **"Save Contract"**
5. System:
   - Creates complete contract
   - Links reservation to contract
   - Marks reservation as "Converted"
   - Notifies customer (optional)

## Advanced Options

### Create Initial Payment
- You can automatically create the first payment
- System generates payment linked to contract
- You can send payment link to customer

### Configure Reminders
- Activate automatic payment reminders
- Configure SEPA Direct Debit if applicable
- Schedule recurring payments

### Additional Documentation
- Attach required documents
- Request documentation from customer
- Generate automatic documents

## Notifications

Customer can receive:
- **Welcome email**: With contract details
- **Payment link**: If you configured initial payment
- **Documents**: PDFs of contract and conditions

## Tracking

Once converted, you can:
- View complete history: Reservation → Confirmation → Contract
- Track everything in a single view
- Maintain conversion records

## Advantages of Automated Process

- ⚡ **Speed**: Converts in seconds
- ✅ **Accuracy**: No transcription errors
- 📊 **Traceability**: Complete history
- 🔄 **Consistency**: Same process always`
    },
    tags: ['reservas', 'contratos', 'conversión'],
    order: 3
  },
  {
    id: 'personalizar-widget',
    categoryId: 'reservas',
    title: { es: 'Personalizar Widget (Colores y Estilos)', en: 'Customize Widget (Colors and Styles)' },
    description: { es: 'Personaliza la apariencia del widget para que coincida con tu marca', en: 'Customize widget appearance to match your brand' },
    content: {
      es: `# Personalizar Widget (Colores y Estilos)

## Personalización Visual

El widget se puede personalizar completamente para que coincida con la apariencia de tu página web y tu marca.

## Colores Principales

### Color Primario
- Este es el color principal del widget
- Se usa en:
  - Botones de acción (Reservar, Consultar)
  - Enlaces destacados
  - Elementos interactivos
- **Ejemplo**: Si tu web es azul, usa ese mismo azul

### Color Secundario
- Color de acento para elementos secundarios
- Se usa en:
  - Bordes y destacados
  - Hover states
  - Información adicional
- **Ejemplo**: Un tono más claro u oscuro del color primario

### Color de Texto
- Color del texto principal
- Asegúrate de que tenga buen contraste con el fondo
- **Recomendación**: Negro (#000) o gris oscuro (#333) sobre fondo claro

### Color de Fondo
- Fondo del widget
- Puede ser blanco, gris claro, o transparente
- **Transparente**: Se adapta al fondo de tu página

## Tipografía

### Fuente
- El widget usa las fuentes de tu página web por defecto
- Si tu página usa una fuente personalizada, el widget la heredará
- **Asegúrate**: Que la fuente sea legible

### Tamaños de Texto
- El widget ajusta automáticamente los tamaños
- En móvil se adapta para mejor legibilidad
- **Personalización**: Puedes ajustar tamaños base si es necesario

## Textos Personalizables

### Texto del Botón Principal
- **Por defecto**: "Reservar Ahora"
- **Personaliza**: "Consultar Disponibilidad", "Ver Unidades", etc.
- **Recomendación**: Usa texto claro y accionable

### Textos de Estado
- **Disponible**: "Disponible" o "Libre"
- **Ocupado**: "Ocupado" o "No disponible"
- **Reservado**: "Reservado" o "Próximamente disponible"

### Mensajes
- Mensaje de bienvenida
- Texto de ayuda
- Mensajes de confirmación

## Tema (Claro/Oscuro)

### Tema Claro
- Fondo blanco o claro
- Texto oscuro
- **Ideal para**: Páginas con fondo claro

### Tema Oscuro
- Fondo oscuro
- Texto claro
- **Ideal para**: Páginas con fondo oscuro o modo oscuro

### Tema Automático
- El widget detecta automáticamente el tema de tu página
- Se adapta al modo claro/oscuro de tu sitio

## Tamaño y Posición

### Ancho
- **Completo**: Toma todo el ancho disponible
- **Centrado**: Ancho fijo, centrado
- **Personalizado**: Define un ancho específico

### Posición
- **Izquierda**: Alineado a la izquierda
- **Centro**: Centrado en la página
- **Derecha**: Alineado a la derecha

## Responsive

El widget es totalmente responsive:
- Se adapta a móviles automáticamente
- Ajusta tamaños en tablets
- Mantiene usabilidad en todos los tamaños

## Vista Previa

Antes de publicar:
1. Usa la **vista previa** del widget
2. Revisa cómo se ve en diferentes dispositivos
3. Ajusta colores y textos
4. Cuando esté perfecto, copia el código

## Aplicar Cambios

Después de personalizar:
1. Haz clic en **"Generar Código"**
2. El nuevo código incluye todas tus personalizaciones
3. Reemplaza el código anterior en tu página web
4. Los cambios se aplican inmediatamente`,
      en: `# Customize Widget (Colors and Styles)

## Visual Customization

The widget can be completely customized to match your website appearance and brand.

## Primary Colors

### Primary Color
- This is the main color of the widget
- Used in:
  - Action buttons (Reserve, Check)
  - Highlighted links
  - Interactive elements
- **Example**: If your website is blue, use that same blue

### Secondary Color
- Accent color for secondary elements
- Used in:
  - Borders and highlights
  - Hover states
  - Additional information
- **Example**: A lighter or darker shade of the primary color

### Text Color
- Main text color
- Make sure it has good contrast with background
- **Recommendation**: Black (#000) or dark gray (#333) on light background

### Background Color
- Widget background
- Can be white, light gray, or transparent
- **Transparent**: Adapts to your page background

## Typography

### Font
- Widget uses your website fonts by default
- If your page uses a custom font, widget will inherit it
- **Make sure**: Font is readable

### Text Sizes
- Widget automatically adjusts sizes
- Adapts to mobile for better readability
- **Customization**: You can adjust base sizes if needed

## Customizable Texts

### Main Button Text
- **Default**: "Reserve Now"
- **Customize**: "Check Availability", "View Units", etc.
- **Recommendation**: Use clear and actionable text

### Status Texts
- **Available**: "Available" or "Free"
- **Occupied**: "Occupied" or "Not available"
- **Reserved**: "Reserved" or "Coming soon"

### Messages
- Welcome message
- Help text
- Confirmation messages

## Theme (Light/Dark)

### Light Theme
- White or light background
- Dark text
- **Ideal for**: Pages with light background

### Dark Theme
- Dark background
- Light text
- **Ideal for**: Pages with dark background or dark mode

### Automatic Theme
- Widget automatically detects your page theme
- Adapts to light/dark mode of your site

## Size and Position

### Width
- **Full**: Takes all available width
- **Centered**: Fixed width, centered
- **Custom**: Define a specific width

### Position
- **Left**: Left aligned
- **Center**: Centered on page
- **Right**: Right aligned

## Responsive

The widget is fully responsive:
- Automatically adapts to mobile
- Adjusts sizes on tablets
- Maintains usability on all sizes

## Preview

Before publishing:
1. Use widget **preview**
2. Review how it looks on different devices
3. Adjust colors and texts
4. When perfect, copy the code

## Apply Changes

After customizing:
1. Click **"Generate Code"**
2. New code includes all your customizations
3. Replace previous code on your website
4. Changes apply immediately`
    },
    tags: ['widget', 'personalización', 'estilos'],
    order: 4
  },
  {
    id: 'integrar-widget-website',
    categoryId: 'reservas',
    title: { es: 'Integrar Widget en tu Website', en: 'Integrate Widget on Your Website' },
    description: { es: 'Guía paso a paso para integrar el widget en diferentes plataformas', en: 'Step-by-step guide to integrate widget on different platforms' },
    content: {
      es: `# Integrar Widget en tu Website

## Antes de Empezar

Asegúrate de tener:
- ✅ Widget configurado en StorageFy
- ✅ Código HTML generado
- ✅ Acceso de edición a tu página web

## Método Universal: HTML Personalizado

La forma más común es usar un bloque o sección de "HTML personalizado" en tu plataforma.

## WordPress

### Opción 1: Editor de Bloques (Gutenberg)
1. Edita la página donde quieres el widget
2. Haz clic en **"+"** para agregar un bloque
3. Busca y selecciona **"HTML personalizado"**
4. Pega el código del widget
5. Haz clic en **"Vista previa"** para verificar
6. Publica o actualiza la página

### Opción 2: Editor Clásico
1. Cambia al editor de texto (no visual)
2. Pega el código donde quieres que aparezca
3. Guarda los cambios
4. Vista previa y publica

### Ubicación Recomendada
- **Página de Contacto**: Ideal para reservas
- **Página Principal**: Widget destacado
- **Página Dedicada**: "Reservas Online" o "Reserva tu Unidad"

## HTML Estático

### Archivo HTML
1. Abre el archivo HTML en un editor de texto
2. Encuentra donde quieres mostrar el widget (ej. después de una sección)
3. Pega el código del widget
4. **Importante**: Pega antes del cierre de \`</body>\`
5. Guarda el archivo
6. Sube el archivo actualizado a tu servidor

### Ejemplo de Ubicación:
\`\`\`html
<body>
  <!-- Tu contenido existente -->
  
  <!-- Widget de Reservas -->
  <script src="https://storagefy.app/widget/..." async></script>
  
</body>
\`\`\`

## Wix

1. Ve al Editor de Wix
2. Arrastra un elemento **"HTML"** o **"Código personalizado"**
3. Haz doble clic en el elemento
4. Pega el código del widget
5. Ajusta el tamaño y posición
6. Haz clic en **"Publicar"**

## Squarespace

1. Edita la página
2. Haz clic en **"+"** para agregar un bloque
3. Selecciona **"Código"**
4. Pega el código del widget
5. Haz clic en **"Aplicar"**
6. Guarda y publica

## Shopify

### En una Página
1. Ve a **Páginas Online** → Selecciona o crea una página
2. En el editor, haz clic en **"</>"** (Mostrar código HTML)
3. Pega el código del widget
4. Guarda

### En el Tema
1. Ve a **Tema** → **Editar código**
2. Busca el archivo donde quieres agregarlo (ej. \`theme.liquid\`)
3. Pega antes de \`</body>\`
4. Guarda

## Webflow

1. Abre tu proyecto en Webflow
2. Agrega un elemento **"Embed"** o **"Code Embed"**
3. Pega el código del widget
4. Posiciona donde quieras
5. Publica el sitio

## Verificar la Integración

Después de integrar:

1. **Carga la página** donde pusiste el widget
2. **Verifica que aparezca** el widget
3. **Prueba la funcionalidad**:
   - ¿Muestra unidades disponibles?
   - ¿El botón funciona?
   - ¿Se ve bien en móvil?
4. **Revisa en diferentes navegadores**:
   - Chrome
   - Firefox
   - Safari
   - Edge

## Problemas Comunes

### El Widget No Aparece
- **Causa**: Código mal pegado o bloqueado por seguridad
- **Solución**: Verifica que el código esté completo y en el lugar correcto

### Errores de JavaScript
- **Causa**: Conflicto con otros scripts
- **Solución**: Verifica la consola del navegador para errores

### No se Ve en Móvil
- **Causa**: Problema de responsive
- **Solución**: El widget es responsive por defecto, verifica que no haya CSS que lo bloquee

## Actualizar el Widget

Si cambias la configuración del widget:
1. Genera el nuevo código en StorageFy
2. Reemplaza el código anterior en tu página
3. Guarda y actualiza
4. El nuevo código se carga automáticamente`,
      en: `# Integrate Widget on Your Website

## Before Starting

Make sure you have:
- ✅ Widget configured in StorageFy
- ✅ Generated HTML code
- ✅ Edit access to your website

## Universal Method: Custom HTML

The most common way is to use a "Custom HTML" block or section on your platform.

## WordPress

### Option 1: Block Editor (Gutenberg)
1. Edit the page where you want the widget
2. Click **"+"** to add a block
3. Search and select **"Custom HTML"**
4. Paste widget code
5. Click **"Preview"** to verify
6. Publish or update the page

### Option 2: Classic Editor
1. Switch to text editor (not visual)
2. Paste code where you want it to appear
3. Save changes
4. Preview and publish

### Recommended Location
- **Contact Page**: Ideal for reservations
- **Homepage**: Featured widget
- **Dedicated Page**: "Online Reservations" or "Reserve Your Unit"

## Static HTML

### HTML File
1. Open HTML file in text editor
2. Find where you want to show widget (e.g., after a section)
3. Paste widget code
4. **Important**: Paste before closing \`</body>\`
5. Save file
6. Upload updated file to your server

### Location Example:
\`\`\`html
<body>
  <!-- Your existing content -->
  
  <!-- Reservation Widget -->
  <script src="https://storagefy.app/widget/..." async></script>
  
</body>
\`\`\`

## Wix

1. Go to Wix Editor
2. Drag an **"HTML"** or **"Custom Code"** element
3. Double-click the element
4. Paste widget code
5. Adjust size and position
6. Click **"Publish"**

## Squarespace

1. Edit the page
2. Click **"+"** to add a block
3. Select **"Code"**
4. Paste widget code
5. Click **"Apply"**
6. Save and publish

## Shopify

### On a Page
1. Go to **Online Pages** → Select or create a page
2. In editor, click **"</>"** (Show HTML code)
3. Paste widget code
4. Save

### In Theme
1. Go to **Theme** → **Edit code**
2. Find file where you want to add it (e.g., \`theme.liquid\`)
3. Paste before \`</body>\`
4. Save

## Webflow

1. Open your project in Webflow
2. Add an **"Embed"** or **"Code Embed"** element
3. Paste widget code
4. Position where you want
5. Publish site

## Verify Integration

After integrating:

1. **Load the page** where you put the widget
2. **Verify widget appears**
3. **Test functionality**:
   - Does it show available units?
   - Does the button work?
   - Does it look good on mobile?
4. **Check in different browsers**:
   - Chrome
   - Firefox
   - Safari
   - Edge

## Common Issues

### Widget Doesn't Appear
- **Cause**: Code pasted incorrectly or blocked by security
- **Solution**: Verify code is complete and in correct place

### JavaScript Errors
- **Cause**: Conflict with other scripts
- **Solution**: Check browser console for errors

### Not Visible on Mobile
- **Cause**: Responsive issue
- **Solution**: Widget is responsive by default, verify no CSS is blocking it

## Update Widget

If you change widget configuration:
1. Generate new code in StorageFy
2. Replace previous code on your page
3. Save and update
4. New code loads automatically`
    },
    tags: ['widget', 'integración', 'website'],
    order: 5
  }
]
