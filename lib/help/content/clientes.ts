import { HelpArticle } from '../help-categories'

export const clientesArticles: HelpArticle[] = [
  {
    id: 'crear-clientes',
    categoryId: 'clientes',
    title: { es: 'Crear y Gestionar Fichas de Clientes', en: 'Create and Manage Customer Profiles' },
    description: { es: 'Guía completa para crear y gestionar fichas de clientes individuales y empresas', en: 'Complete guide to create and manage individual and company customer profiles' },
    content: {
      es: `# Crear y Gestionar Fichas de Clientes

## 1. Acceder al Formulario de Cliente

![Formulario de Creación de Cliente](/images/help/form_cliente.webp)
*Formulario completo para crear nuevos clientes con todas las secciones: información personal, dirección y datos adicionales*

1. En el Dashboard, ve a la sección **Clientes**
2. Haz clic en el botón **Nuevo Cliente** (o "Crear Primer Cliente" si no tienes ninguno)
   Se abrirá un diálogo con el formulario de creación, organizado en tres tarjetas principales

## 2. Seleccionar Tipo de Cliente

Antes de completar los datos, debes elegir el tipo de cliente:

- **Persona Física (INDIVIDUAL)**: Para clientes particulares
- **Empresa (COMPANY)**: Para empresas y organizaciones

El formulario cambiará dinámicamente según el tipo seleccionado.

## 3. Completar Información Personal

### Para Personas Físicas

**Campos obligatorios:**
- **Nombre**: Nombre de pila del cliente
- **Apellidos**: Apellidos completos

**Campos opcionales:**
- **DNI/NIE**: Documento de identidad (DNI para españoles, NIE para extranjeros)
- **Fecha de Nacimiento**: Útil para verificaciones legales
- **Email**: Dirección de correo para comunicaciones y facturas electrónicas
- **Teléfono**: Número de contacto (incluye código de país si es necesario)

**Foto de Perfil:**
- Haz clic en el área de foto para subir una imagen del cliente
- La foto se mostrará en la lista de clientes y en los contratos
- Puedes cambiarla o eliminarla en cualquier momento

**Fotos del DNI (Solo para Personas Físicas):**
- **DNI Frente**: Sube una foto clara del frente del DNI/NIE
- **DNI Dorso**: Sube una foto del reverso del documento
- Las imágenes se cifran automáticamente para cumplir con RGPD
- Solo usuarios autorizados pueden acceder a estas imágenes

### Para Empresas

**Campos obligatorios:**
- **Nombre de la Empresa**: Razón social o nombre comercial
- **CIF**: Código de Identificación Fiscal

**Campos opcionales:**
- **Representante Legal**: Nombre del representante legal
- **DNI Representante**: DNI del representante legal
- **Email**: Email corporativo
- **Teléfono**: Teléfono de contacto de la empresa

**Foto de Perfil:**
- Puedes subir un logo o foto representativa de la empresa
- Se mostrará en la lista de clientes

## 4. Completar Dirección

**Campos disponibles:**
- **Dirección**: Calle, número, piso, etc. (texto libre)
- **Ciudad**: Ciudad de residencia o sede
- **Código Postal**: Código postal
- **País**: Por defecto "Spain", pero puedes cambiarlo
- **Ubicación Preferida**: Selecciona una ubicación de tu lista si el cliente tiene preferencia por un almacén específico

## 5. Información Adicional

**Notas:**
- Campo de texto libre para anotaciones sobre el cliente
- Útil para recordar preferencias, historial, o información relevante
- Ejemplo: "Cliente VIP", "Prefiere contacto por email", "Alergia a..."

**Estado del Cliente:**
- **Cliente Activo**: Aparece en las listas y puede crear contratos
- **Cliente Inactivo**: Se oculta de las listas pero conserva todos sus datos e historial

> **Tip**: Desactiva clientes en lugar de eliminarlos para mantener el historial completo

## 6. Guardar el Cliente

1. Revisa que todos los campos obligatorios estén completos
2. Haz clic en **Crear Cliente** o **Actualizar Cliente** (si estás editando)
3. Si hay errores de validación, aparecerán bajo cada campo afectado
4. Las fotos se subirán automáticamente después de guardar los datos básicos

## 7. Editar y Eliminar Clientes

**Para editar:**
- Abre la lista de clientes
- Haz clic en el botón de editar (icono de lápiz) en la fila del cliente
- El formulario se abrirá con todos los datos precargados
- Modifica los campos necesarios y guarda

**Para eliminar:**
- Haz clic en el botón de eliminar (icono de papelera)
- Confirma la eliminación
- **Advertencia**: Verifica que el cliente no tenga contratos activos antes de eliminar

## 8. Validaciones y Límites

- El email debe tener un formato válido
- Los campos obligatorios están marcados con asterisco (*)
- Las fotos del DNI solo están disponibles para personas físicas
- El sistema valida automáticamente los formatos de DNI/NIE y CIF

## Próximos Pasos

- Una vez creado el cliente, puedes asignarle **contratos** desde la sección de Contratos
- Usa los **filtros y búsqueda** para encontrar clientes rápidamente
- Revisa las **estadísticas** en la parte superior para ver el resumen de tus clientes

> **Tip**: Las fotos del DNI se almacenan de forma segura y cifrada. Solo usuarios con permisos adecuados pueden acceder a ellas, cumpliendo con las normativas RGPD.`,
      en: `# Create and Manage Customer Profiles

## 1. Access the Customer Form

![Customer Creation Form](/images/help/form_cliente.webp)
*Complete form to create new customers with all sections: personal information, address, and additional data*

1. In the Dashboard, go to the **Customers** section
2. Click the **New Customer** button (or "Create First Customer" if you don't have any)
   A dialog will open with the creation form, organized into three main cards

## 2. Select Customer Type

Before completing the data, you must choose the customer type:

- **Individual (INDIVIDUAL)**: For private customers
- **Company (COMPANY)**: For businesses and organizations

The form will change dynamically based on the selected type.

## 3. Complete Personal Information

### For Individuals

**Required fields:**
- **First Name**: Customer's first name
- **Last Name**: Complete last name

**Optional fields:**
- **ID Number**: Identity document (DNI for Spanish, NIE for foreigners)
- **Birth Date**: Useful for legal verifications
- **Email**: Email address for communications and electronic invoices
- **Phone**: Contact number (include country code if necessary)

**Profile Photo:**
- Click on the photo area to upload a customer image
- The photo will appear in the customer list and in contracts
- You can change or delete it at any time

**ID Photos (Only for Individuals):**
- **ID Front**: Upload a clear photo of the front of the ID/NIE
- **ID Back**: Upload a photo of the back of the document
- Images are automatically encrypted to comply with GDPR
- Only authorized users can access these images

### For Companies

**Required fields:**
- **Company Name**: Legal name or trade name
- **Tax ID**: Tax Identification Number (CIF)

**Optional fields:**
- **Legal Representative**: Name of the legal representative
- **Representative ID**: ID of the legal representative
- **Email**: Corporate email
- **Phone**: Company contact phone

**Profile Photo:**
- You can upload a logo or representative photo of the company
- It will appear in the customer list

## 4. Complete Address

**Available fields:**
- **Address**: Street, number, floor, etc. (free text)
- **City**: City of residence or headquarters
- **Postal Code**: Postal code
- **Country**: Default "Spain", but you can change it
- **Preferred Location**: Select a location from your list if the customer has a preference for a specific warehouse

## 5. Additional Information

**Notes:**
- Free text field for notes about the customer
- Useful for remembering preferences, history, or relevant information
- Example: "VIP Customer", "Prefers email contact", "Allergy to..."

**Customer Status:**
- **Active Customer**: Appears in lists and can create contracts
- **Inactive Customer**: Hidden from lists but retains all data and history

> **Tip**: Deactivate customers instead of deleting them to maintain complete history

## 6. Save the Customer

1. Review that all required fields are complete
2. Click **Create Customer** or **Update Customer** (if editing)
3. If there are validation errors, they will appear under each affected field
4. Photos will be uploaded automatically after saving basic data

## 7. Edit and Delete Customers

**To edit:**
- Open the customer list
- Click the edit button (pencil icon) in the customer row
- The form will open with all data preloaded
- Modify the necessary fields and save

**To delete:**
- Click the delete button (trash icon)
- Confirm deletion
- **Warning**: Verify that the customer does not have active contracts before deleting

## 8. Validations and Limits

- Email must have a valid format
- Required fields are marked with an asterisk (*)
- ID photos are only available for individuals
- The system automatically validates DNI/NIE and CIF formats

## Next Steps

- Once the customer is created, you can assign **contracts** from the Contracts section
- Use **filters and search** to find customers quickly
- Review the **statistics** at the top to see your customer summary

> **Tip**: ID photos are stored securely and encrypted. Only users with appropriate permissions can access them, complying with GDPR regulations.`
    },
    tags: ['clientes', 'crear', 'gestionar', 'ficha', 'DNI', 'empresa'],
    order: 1,
    featured: true
  },
  {
    id: 'buscar-filtrar-clientes',
    categoryId: 'clientes',
    title: { es: 'Buscar y Filtrar Clientes', en: 'Search and Filter Customers' },
    description: { es: 'Aprende a encontrar clientes rápidamente usando búsqueda y filtros', en: 'Learn to find customers quickly using search and filters' },
    content: {
      es: `# Buscar y Filtrar Clientes

## Búsqueda de Clientes

![Lista de Clientes](/images/help/clients.webp)
*Vista de la lista de clientes con filtros y búsqueda activos, mostrando estadísticas y opciones de filtrado*

La barra de búsqueda te permite encontrar clientes por múltiples criterios:

**Campos de búsqueda:**
- **Nombre completo**: Busca en nombre y apellidos
- **Email**: Busca por dirección de correo
- **Teléfono**: Busca por número de teléfono
- **DNI/NIE/CIF**: Busca por documento de identidad o fiscal

**Cómo usar:**
1. Escribe en el campo de búsqueda en la parte superior de la lista
2. Los resultados se actualizan automáticamente mientras escribes
3. La búsqueda es **insensible a mayúsculas** y busca coincidencias parciales

## Filtros Disponibles

### Filtro por Estado

**Opciones:**
- **Todos**: Muestra todos los clientes (activos e inactivos)
- **Activos**: Solo clientes activos que pueden crear contratos
- **Inactivos**: Solo clientes desactivados

**Cómo usar:**
1. Abre el panel de filtros
2. Selecciona el estado deseado
3. Los resultados se actualizan automáticamente

## Panel de Filtros

El panel de filtros muestra:
- **Búsqueda**: Campo de texto para búsqueda general
- **Estado**: Botones para filtrar por estado
- **Contador**: Muestra cuántos clientes coinciden con los filtros actuales

**Abrir/Cerrar:**
- Haz clic en el botón "Filtros" para abrir o cerrar el panel
- El panel se puede colapsar para ahorrar espacio

## Visualización de Resultados

**Vista de Tabla (Desktop):**
- Muestra información clave: nombre, unidades, teléfono, estado
- Permite expandir cada fila para ver detalles completos
- Botones de acción (editar, eliminar) aparecen al hacer hover

**Vista de Tarjetas (Móvil):**
- Diseño optimizado para pantallas pequeñas
- Muestra la información esencial de forma clara
- Fácil de navegar con el dedo

## Estadísticas de Clientes

En la parte superior verás tarjetas con estadísticas:

- **Total Clientes**: Número total de clientes registrados
- **Clientes Activos**: Cantidad y porcentaje de clientes activos
- **Con Contratos**: Clientes que tienen al menos un contrato activo
- **Inactivos**: Clientes desactivados

Estas estadísticas se actualizan según los filtros aplicados.

## Consejos de Búsqueda

**Búsquedas efectivas:**
- Usa el **nombre completo** para encontrar clientes específicos
- Busca por **email** si conoces la dirección de correo
- Usa el **DNI** para verificación rápida de identidad
- Combina **búsqueda + filtros** para resultados precisos

**Ejemplos:**
- "Juan Pérez" → Encuentra clientes con ese nombre
- "juan@email.com" → Encuentra por email
- "12345678A" → Encuentra por DNI
- Filtro "Activos" + búsqueda "Madrid" → Clientes activos relacionados con Madrid

## Detalles Expandibles

Cada cliente en la tabla tiene una fila expandible que muestra:

**Información de Contacto:**
- Email completo
- Teléfono
- Dirección completa

**Ubicación:**
- Dirección física
- Código postal y ciudad
- País

**Datos Adicionales:**
- DNI/NIF/CIF
- Número de contratos activos

**Unidades Alquiladas:**
- Lista de todas las unidades con contrato activo
- Código de unidad y ubicación
- Precio mensual y número de contrato

Para expandir/contraer, haz clic en cualquier parte de la fila del cliente.

## Próximos Pasos

- Usa la búsqueda para encontrar clientes rápidamente antes de crear contratos
- Filtra por estado para ver solo clientes activos en tu día a día
- Revisa las estadísticas para tener una visión general de tu base de clientes

> **Tip**: La búsqueda funciona en tiempo real. No necesitas presionar Enter ni hacer clic en ningún botón.`,
      en: `# Search and Filter Customers

## Customer Search

![Customer List](/images/help/clients.webp)
*View of the customer list with filters and active search, showing statistics and filtering options*

The search bar allows you to find customers by multiple criteria:

**Search fields:**
- **Full name**: Searches in first and last name
- **Email**: Searches by email address
- **Phone**: Searches by phone number
- **ID/Tax Number**: Searches by identity or tax document

**How to use:**
1. Type in the search field at the top of the list
2. Results update automatically as you type
3. Search is **case-insensitive** and finds partial matches

## Available Filters

### Status Filter

**Options:**
- **All**: Shows all customers (active and inactive)
- **Active**: Only active customers who can create contracts
- **Inactive**: Only deactivated customers

**How to use:**
1. Open the filters panel
2. Select the desired status
3. Results update automatically

## Filters Panel

The filters panel shows:
- **Search**: Text field for general search
- **Status**: Buttons to filter by status
- **Counter**: Shows how many customers match current filters

**Open/Close:**
- Click the "Filters" button to open or close the panel
- The panel can be collapsed to save space

## Results Display

**Table View (Desktop):**
- Shows key information: name, units, phone, status
- Allows expanding each row to see complete details
- Action buttons (edit, delete) appear on hover

**Card View (Mobile):**
- Optimized design for small screens
- Shows essential information clearly
- Easy to navigate with finger

## Customer Statistics

At the top you'll see cards with statistics:

- **Total Customers**: Total number of registered customers
- **Active Customers**: Quantity and percentage of active customers
- **With Contracts**: Customers who have at least one active contract
- **Inactive**: Deactivated customers

These statistics update based on applied filters.

## Search Tips

**Effective searches:**
- Use **full name** to find specific customers
- Search by **email** if you know the email address
- Use **ID number** for quick identity verification
- Combine **search + filters** for precise results

**Examples:**
- "John Smith" → Finds customers with that name
- "john@email.com" → Finds by email
- "12345678A" → Finds by ID
- "Active" filter + "Madrid" search → Active customers related to Madrid

## Expandable Details

Each customer in the table has an expandable row that shows:

**Contact Information:**
- Complete email
- Phone
- Complete address

**Location:**
- Physical address
- Postal code and city
- Country

**Additional Data:**
- ID/Tax Number
- Number of active contracts

**Rented Units:**
- List of all units with active contract
- Unit code and location
- Monthly price and contract number

To expand/collapse, click anywhere on the customer row.

## Next Steps

- Use search to find customers quickly before creating contracts
- Filter by status to see only active customers in your daily work
- Review statistics for an overview of your customer base

> **Tip**: Search works in real-time. You don't need to press Enter or click any button.`
    },
    tags: ['clientes', 'búsqueda', 'filtros', 'buscar'],
    order: 2
  },
  {
    id: 'ver-historial-cliente',
    categoryId: 'clientes',
    title: { es: 'Ver Historial Completo de un Cliente', en: 'View Complete Customer History' },
    description: {
      es: 'Consulta toda la información y actividad de un cliente',
      en: 'View all information and activity for a customer'
    },
    content: {
      es: `# Ver Historial Completo de un Cliente

El historial de un cliente te permite ver toda su actividad y relación con tu negocio en un solo lugar.

## Acceder al historial

1. En la lista de clientes, encuentra el cliente que deseas revisar
2. Haz clic en la fila del cliente para expandir los detalles
3. O haz clic en el botón **"Ver Detalles"** o **"Ver Historial"**

## Información disponible

### Datos personales

- **Información completa**: Nombre, apellidos, DNI/NIE, fecha de nacimiento
- **Contacto**: Email, teléfono, dirección completa
- **Foto de perfil**: Imagen del cliente (si está disponible)
- **Documentos**: DNI frente y dorso (si están subidos)

### Contratos

- **Contratos activos**: Todos los contratos actualmente en vigor
- **Contratos finalizados**: Historial de contratos pasados
- **Número de contrato**: Identificador único de cada contrato
- **Unidades asignadas**: Qué unidades tiene o ha tenido
- **Fechas**: Inicio y fin de cada contrato
- **Precios**: Coste de cada contrato

### Pagos

- **Historial de pagos**: Todos los pagos realizados
- **Pagos pendientes**: Pagos que aún no se han realizado
- **Métodos de pago**: Cómo ha pagado el cliente
- **Estadísticas**: Total pagado, promedio mensual, etc.

### Facturas

- **Facturas emitidas**: Todas las facturas asociadas
- **Estado de facturas**: Pagadas, pendientes, vencidas
- **Descargas**: Acceso a PDFs de facturas

### Notas y recordatorios

- **Notas internas**: Anotaciones sobre el cliente
- **Recordatorios**: Tareas pendientes relacionadas
- **Comunicaciones**: Historial de emails o mensajes

## Navegación rápida

Desde el historial puedes acceder rápidamente a:

- **Crear nuevo contrato**: Asignar una nueva unidad
- **Generar factura**: Crear una factura manual
- **Registrar pago**: Anotar un pago recibido
- **Enviar email**: Contactar directamente con el cliente
- **Editar datos**: Actualizar información del cliente

## Exportar información

Puedes exportar el historial completo:

1. En la vista de historial, busca el botón **"Exportar"**
2. Selecciona el formato (PDF, Excel, CSV)
3. El archivo se generará con toda la información del cliente
4. Descarga el archivo para tus registros

## Filtros en el historial

Puedes filtrar el historial por:

- **Período**: Ver actividad de un rango de fechas específico
- **Tipo**: Solo contratos, solo pagos, solo facturas
- **Estado**: Activos, finalizados, pendientes

> **Tip**: El historial completo te ayuda a entender la relación a largo plazo con cada cliente y tomar decisiones informadas.`,
      en: `# View Complete Customer History

A customer's history allows you to see all their activity and relationship with your business in one place.

## Access history

1. In the customer list, find the customer you want to review
2. Click on the customer row to expand details
3. Or click the **"View Details"** or **"View History"** button

## Available information

### Personal data

- **Complete information**: Name, last name, ID/NIE, date of birth
- **Contact**: Email, phone, complete address
- **Profile photo**: Customer image (if available)
- **Documents**: ID front and back (if uploaded)

### Contracts

- **Active contracts**: All contracts currently in force
- **Completed contracts**: History of past contracts
- **Contract number**: Unique identifier for each contract
- **Assigned units**: Which units they have or have had
- **Dates**: Start and end of each contract
- **Prices**: Cost of each contract

### Payments

- **Payment history**: All payments made
- **Pending payments**: Payments not yet made
- **Payment methods**: How the customer has paid
- **Statistics**: Total paid, monthly average, etc.

### Invoices

- **Issued invoices**: All associated invoices
- **Invoice status**: Paid, pending, overdue
- **Downloads**: Access to invoice PDFs

### Notes and reminders

- **Internal notes**: Notes about the customer
- **Reminders**: Pending tasks related
- **Communications**: Email or message history

## Quick navigation

From the history you can quickly access:

- **Create new contract**: Assign a new unit
- **Generate invoice**: Create a manual invoice
- **Record payment**: Note a received payment
- **Send email**: Contact the customer directly
- **Edit data**: Update customer information

## Export information

You can export the complete history:

1. In the history view, look for the **"Export"** button
2. Select the format (PDF, Excel, CSV)
3. The file will be generated with all customer information
4. Download the file for your records

## History filters

You can filter the history by:

- **Period**: View activity from a specific date range
- **Type**: Only contracts, only payments, only invoices
- **Status**: Active, completed, pending

> **Tip**: The complete history helps you understand the long-term relationship with each customer and make informed decisions.`
    },
    tags: ['clientes', 'historial', 'detalles', 'información'],
    order: 3
  },
  {
    id: 'exportar-clientes',
    categoryId: 'clientes',
    title: { es: 'Exportar Datos de Clientes', en: 'Export Customer Data' },
    description: {
      es: 'Exporta información de clientes en diferentes formatos',
      en: 'Export customer information in different formats'
    },
    content: {
      es: `# Exportar Datos de Clientes

Puedes exportar la información de tus clientes para usarla en otros sistemas o para hacer respaldos.

## Formatos disponibles

StorageFy permite exportar datos en varios formatos:

- **Excel (.xlsx)**: Para análisis en Excel o Google Sheets
- **CSV**: Para importar en otros sistemas
- **PDF**: Para documentación o impresión

## Cómo exportar

### Exportar todos los clientes

1. Ve a la sección **Clientes**
2. Haz clic en el botón **"Exportar"** o **"Descargar"**
3. Selecciona el formato deseado
4. El archivo se generará y descargará automáticamente

### Exportar clientes filtrados

1. Aplica los filtros que desees (estado, búsqueda, etc.)
2. Haz clic en **"Exportar"**
3. Solo se exportarán los clientes que coincidan con los filtros
4. Selecciona el formato

### Exportar un cliente específico

1. Abre el historial del cliente
2. Busca el botón **"Exportar"** o **"Descargar"**
3. Selecciona el formato
4. Se exportará toda la información de ese cliente

## Información incluida en la exportación

### Datos básicos

- Nombre completo
- Email
- Teléfono
- Dirección completa
- DNI/NIE/CIF
- Fecha de registro
- Estado (activo/inactivo)

### Información adicional

- Notas internas
- Ubicación preferida
- Número de contratos
- Fecha del último contrato
- Total pagado
- Foto de perfil (si está disponible)

## Usos comunes

### Respaldos

- Exporta regularmente para tener respaldos de tus datos
- Guarda los archivos en un lugar seguro
- Cumple con normativas de retención de datos

### Análisis

- Importa en Excel para análisis avanzados
- Crea reportes personalizados
- Analiza tendencias de clientes

### Migración

- Exporta antes de migrar a otro sistema
- Usa CSV para importar en otras plataformas
- Mantén la compatibilidad de datos

### Reportes

- Genera reportes para la dirección
- Comparte información con contabilidad
- Crea documentación para auditorías

## Consideraciones de privacidad

- **RGPD**: Asegúrate de cumplir con normativas de protección de datos
- **Seguridad**: Guarda los archivos exportados de forma segura
- **Acceso**: Solo exporta lo necesario para tu propósito
- **Eliminación**: Elimina los archivos cuando ya no los necesites

## Limitaciones

- **Tamaño**: Exportaciones muy grandes pueden tardar más tiempo
- **Formato**: Algunos formatos pueden no incluir todas las imágenes
- **Filtros**: Los filtros aplicados afectan lo que se exporta

> **Tip**: Exporta regularmente tus datos como respaldo. Es una buena práctica para proteger tu información.`,
      en: `# Export Customer Data

You can export your customer information to use in other systems or for backups.

## Available formats

StorageFy allows exporting data in several formats:

- **Excel (.xlsx)**: For analysis in Excel or Google Sheets
- **CSV**: To import into other systems
- **PDF**: For documentation or printing

## How to export

### Export all customers

1. Go to the **Customers** section
2. Click the **"Export"** or **"Download"** button
3. Select the desired format
4. The file will be generated and downloaded automatically

### Export filtered customers

1. Apply the filters you want (status, search, etc.)
2. Click **"Export"**
3. Only customers matching the filters will be exported
4. Select the format

### Export a specific customer

1. Open the customer history
2. Look for the **"Export"** or **"Download"** button
3. Select the format
4. All information for that customer will be exported

## Information included in export

### Basic data

- Full name
- Email
- Phone
- Complete address
- ID/Tax Number
- Registration date
- Status (active/inactive)

### Additional information

- Internal notes
- Preferred location
- Number of contracts
- Date of last contract
- Total paid
- Profile photo (if available)

## Common uses

### Backups

- Export regularly to have backups of your data
- Save files in a secure location
- Comply with data retention regulations

### Analysis

- Import into Excel for advanced analysis
- Create custom reports
- Analyze customer trends

### Migration

- Export before migrating to another system
- Use CSV to import into other platforms
- Maintain data compatibility

### Reports

- Generate reports for management
- Share information with accounting
- Create documentation for audits

## Privacy considerations

- **GDPR**: Make sure you comply with data protection regulations
- **Security**: Store exported files securely
- **Access**: Only export what's necessary for your purpose
- **Deletion**: Delete files when you no longer need them

## Limitations

- **Size**: Very large exports may take longer
- **Format**: Some formats may not include all images
- **Filters**: Applied filters affect what is exported

> **Tip**: Export your data regularly as a backup. It's a good practice to protect your information.`
    },
    tags: ['clientes', 'exportar', 'datos', 'excel', 'csv'],
    order: 4
  },
  {
    id: 'notas-recordatorios',
    categoryId: 'clientes',
    title: { es: 'Gestionar Notas y Recordatorios', en: 'Manage Notes and Reminders' },
    description: {
      es: 'Añade notas y recordatorios sobre tus clientes',
      en: 'Add notes and reminders about your customers'
    },
    content: {
      es: `# Gestionar Notas y Recordatorios

Las notas y recordatorios te permiten mantener información importante sobre cada cliente y no olvidar tareas pendientes.

## Agregar notas

### Desde el formulario de cliente

1. Al crear o editar un cliente, busca el campo **"Notas"**
2. Escribe la información que quieras recordar
3. Las notas son visibles solo para tu equipo
4. Guarda los cambios

### Desde el historial del cliente

1. Abre el historial del cliente
2. Busca la sección **"Notas"**
3. Haz clic en **"Agregar Nota"**
4. Escribe tu nota y guarda

## Tipos de información útil

### Preferencias del cliente

- "Prefiere contacto por email"
- "No llamar después de las 20:00"
- "Cliente VIP - atención prioritaria"
- "Prefiere unidades en planta baja"

### Información importante

- "Alergia a productos químicos"
- "Requiere acceso 24/7"
- "Pago siempre puntual"
- "Historial de pagos atrasados"

### Recordatorios de seguimiento

- "Llamar en 3 meses para renovación"
- "Verificar estado de unidad en enero"
- "Recordar ofrecer unidad más grande"

## Recordatorios

Los recordatorios son notas con fecha que te alertan cuando es momento de hacer algo.

### Crear un recordatorio

1. En la sección de notas, haz clic en **"Agregar Recordatorio"**
2. Escribe la tarea o acción a recordar
3. Selecciona la fecha y hora
4. Opcionalmente, asigna el recordatorio a un usuario específico
5. Guarda el recordatorio

### Ver recordatorios

- **Dashboard**: Los recordatorios próximos aparecen en el dashboard
- **Lista de clientes**: Los clientes con recordatorios pendientes se marcan
- **Notificaciones**: Recibirás notificaciones cuando llegue el momento

### Completar recordatorios

1. Cuando completes la tarea, marca el recordatorio como completado
2. Puedes agregar una nota sobre lo que hiciste
3. El recordatorio se archivará pero seguirá visible en el historial

## Organización de notas

### Etiquetas

Puedes usar etiquetas para organizar notas:

- **VIP**: Para clientes importantes
- **Urgente**: Para temas que requieren atención inmediata
- **Seguimiento**: Para recordatorios de seguimiento
- **Problema**: Para clientes con incidencias

### Búsqueda en notas

- Usa el buscador para encontrar notas específicas
- Busca por palabras clave o etiquetas
- Filtra por fecha o autor de la nota

## Mejores prácticas

### Sé específico

- En lugar de "Cliente importante", escribe "Cliente desde 2020, siempre puntual"
- Incluye fechas y contexto cuando sea relevante

### Actualiza regularmente

- Revisa y actualiza las notas periódicamente
- Elimina información obsoleta
- Mantén las notas relevantes y útiles

### Usa recordatorios proactivamente

- Crea recordatorios para seguimientos futuros
- Programa recordatorios antes de fechas importantes
- Asigna recordatorios al equipo adecuado

## Privacidad

- **Confidencialidad**: Las notas son visibles solo para tu equipo
- **RGPD**: Asegúrate de que las notas cumplan con normativas de privacidad
- **Eliminación**: Puedes eliminar notas cuando ya no sean necesarias

> **Tip**: Las notas bien organizadas te ayudan a ofrecer un mejor servicio y no olvidar detalles importantes sobre cada cliente.`,
      en: `# Manage Notes and Reminders

Notes and reminders allow you to keep important information about each customer and not forget pending tasks.

## Add notes

### From customer form

1. When creating or editing a customer, look for the **"Notes"** field
2. Write the information you want to remember
3. Notes are visible only to your team
4. Save changes

### From customer history

1. Open the customer history
2. Look for the **"Notes"** section
3. Click **"Add Note"**
4. Write your note and save

## Types of useful information

### Customer preferences

- "Prefers email contact"
- "Don't call after 8:00 PM"
- "VIP customer - priority attention"
- "Prefers ground floor units"

### Important information

- "Allergy to chemicals"
- "Requires 24/7 access"
- "Always pays on time"
- "History of late payments"

### Follow-up reminders

- "Call in 3 months for renewal"
- "Check unit status in January"
- "Remember to offer larger unit"

## Reminders

Reminders are notes with dates that alert you when it's time to do something.

### Create a reminder

1. In the notes section, click **"Add Reminder"**
2. Write the task or action to remember
3. Select the date and time
4. Optionally, assign the reminder to a specific user
5. Save the reminder

### View reminders

- **Dashboard**: Upcoming reminders appear on the dashboard
- **Customer list**: Customers with pending reminders are marked
- **Notifications**: You'll receive notifications when the time comes

### Complete reminders

1. When you complete the task, mark the reminder as completed
2. You can add a note about what you did
3. The reminder will be archived but remain visible in history

## Note organization

### Tags

You can use tags to organize notes:

- **VIP**: For important customers
- **Urgent**: For issues requiring immediate attention
- **Follow-up**: For follow-up reminders
- **Problem**: For customers with issues

### Search in notes

- Use the search to find specific notes
- Search by keywords or tags
- Filter by date or note author

## Best practices

### Be specific

- Instead of "Important customer", write "Customer since 2020, always on time"
- Include dates and context when relevant

### Update regularly

- Review and update notes periodically
- Remove obsolete information
- Keep notes relevant and useful

### Use reminders proactively

- Create reminders for future follow-ups
- Schedule reminders before important dates
- Assign reminders to the appropriate team

## Privacy

- **Confidentiality**: Notes are visible only to your team
- **GDPR**: Make sure notes comply with privacy regulations
- **Deletion**: You can delete notes when no longer needed

> **Tip**: Well-organized notes help you provide better service and not forget important details about each customer.`
    },
    tags: ['clientes', 'notas', 'recordatorios', 'seguimiento'],
    order: 5
  },
  {
    id: 'estadisticas-clientes',
    categoryId: 'clientes',
    title: { es: 'Estadísticas y Métricas de Clientes', en: 'Customer Statistics and Metrics' },
    description: {
      es: 'Analiza métricas y estadísticas de tu base de clientes',
      en: 'Analyze metrics and statistics of your customer base'
    },
    content: {
      es: `# Estadísticas y Métricas de Clientes

Las estadísticas de clientes te dan una visión general del estado de tu base de clientes y te ayudan a tomar decisiones informadas.

## Acceder a las estadísticas

Las estadísticas aparecen en la parte superior de la sección de Clientes:

- **Tarjetas de resumen**: Muestran métricas clave de un vistazo
- **Gráficos**: Visualizan tendencias y distribuciones
- **Filtros**: Permiten analizar subconjuntos específicos

## Métricas principales

### Total de Clientes

- **Número total**: Cantidad total de clientes registrados
- **Incluye**: Activos e inactivos
- **Útil para**: Conocer el tamaño de tu base de datos

### Clientes Activos

- **Cantidad**: Número de clientes activos
- **Porcentaje**: Porcentaje del total
- **Útil para**: Ver cuántos clientes pueden crear contratos

### Clientes con Contratos

- **Cantidad**: Clientes que tienen al menos un contrato activo
- **Tasa de conversión**: Porcentaje de clientes con contratos
- **Útil para**: Medir la efectividad de captación

### Clientes Inactivos

- **Cantidad**: Clientes desactivados
- **Útil para**: Identificar clientes que podrían reactivarse

## Análisis por período

### Nuevos clientes

- **Este mes**: Clientes registrados en el mes actual
- **Este año**: Clientes registrados en el año actual
- **Tendencia**: Comparación con períodos anteriores

### Clientes perdidos

- **Este mes**: Clientes que se desactivaron
- **Tasa de retención**: Porcentaje de clientes que se mantienen activos

## Distribución geográfica

- **Por ciudad**: Ver dónde están ubicados tus clientes
- **Por ubicación preferida**: Clientes por almacén
- **Útil para**: Planificar expansiones o marketing local

## Análisis de valor

### Cliente promedio

- **Valor por cliente**: Ingresos promedio por cliente
- **Duración promedio**: Tiempo promedio de relación
- **Contratos promedio**: Número promedio de contratos por cliente

### Clientes VIP

- **Identificación**: Clientes de alto valor
- **Criterios**: Basado en ingresos, duración, o contratos
- **Útil para**: Ofrecer atención especializada

## Filtros y segmentación

Puedes analizar estadísticas aplicando filtros:

- **Por estado**: Activos, inactivos, todos
- **Por período**: Rango de fechas específico
- **Por ubicación**: Clientes de un almacén específico
- **Por tipo**: Personas físicas vs empresas

## Exportar estadísticas

1. Aplica los filtros que desees
2. Haz clic en **"Exportar Estadísticas"**
3. Selecciona el formato (Excel, PDF)
4. El reporte incluirá gráficos y tablas

## Uso de las estadísticas

### Toma de decisiones

- **Expansión**: Identifica dónde hay más demanda
- **Marketing**: Enfoca esfuerzos en segmentos específicos
- **Retención**: Identifica clientes en riesgo

### Reportes

- **Para dirección**: Resúmenes ejecutivos
- **Para inversores**: Crecimiento y métricas clave
- **Para planificación**: Tendencias y proyecciones

## Actualización en tiempo real

- Las estadísticas se actualizan automáticamente
- Reflejan cambios en tiempo real
- Los filtros afectan las métricas mostradas

> **Tip**: Revisa las estadísticas regularmente para mantenerte al día con el estado de tu base de clientes y identificar oportunidades de crecimiento.`,
      en: `# Customer Statistics and Metrics

Customer statistics give you an overview of your customer base status and help you make informed decisions.

## Access statistics

Statistics appear at the top of the Customers section:

- **Summary cards**: Show key metrics at a glance
- **Charts**: Visualize trends and distributions
- **Filters**: Allow analyzing specific subsets

## Main metrics

### Total Customers

- **Total number**: Total number of registered customers
- **Includes**: Active and inactive
- **Useful for**: Knowing the size of your database

### Active Customers

- **Quantity**: Number of active customers
- **Percentage**: Percentage of total
- **Useful for**: See how many customers can create contracts

### Customers with Contracts

- **Quantity**: Customers who have at least one active contract
- **Conversion rate**: Percentage of customers with contracts
- **Useful for**: Measure acquisition effectiveness

### Inactive Customers

- **Quantity**: Deactivated customers
- **Useful for**: Identify customers who could be reactivated

## Period analysis

### New customers

- **This month**: Customers registered in the current month
- **This year**: Customers registered in the current year
- **Trend**: Comparison with previous periods

### Lost customers

- **This month**: Customers who were deactivated
- **Retention rate**: Percentage of customers who remain active

## Geographic distribution

- **By city**: See where your customers are located
- **By preferred location**: Customers by warehouse
- **Useful for**: Plan expansions or local marketing

## Value analysis

### Average customer

- **Value per customer**: Average revenue per customer
- **Average duration**: Average relationship time
- **Average contracts**: Average number of contracts per customer

### VIP customers

- **Identification**: High-value customers
- **Criteria**: Based on revenue, duration, or contracts
- **Useful for**: Offer specialized attention

## Filters and segmentation

You can analyze statistics by applying filters:

- **By status**: Active, inactive, all
- **By period**: Specific date range
- **By location**: Customers from a specific warehouse
- **By type**: Individuals vs companies

## Export statistics

1. Apply the filters you want
2. Click **"Export Statistics"**
3. Select the format (Excel, PDF)
4. The report will include charts and tables

## Using statistics

### Decision making

- **Expansion**: Identify where there's more demand
- **Marketing**: Focus efforts on specific segments
- **Retention**: Identify at-risk customers

### Reports

- **For management**: Executive summaries
- **For investors**: Growth and key metrics
- **For planning**: Trends and projections

## Real-time updates

- Statistics update automatically
- Reflect changes in real time
- Filters affect the metrics shown

> **Tip**: Review statistics regularly to stay up to date with your customer base status and identify growth opportunities.`
    },
    tags: ['clientes', 'estadísticas', 'métricas', 'análisis'],
    order: 6
  },
]
