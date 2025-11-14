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
]
