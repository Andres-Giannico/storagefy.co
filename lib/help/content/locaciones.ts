import { HelpArticle } from '../help-categories'

export const locacionesArticles: HelpArticle[] = [
  {
    id: 'crear-locaciones',
    categoryId: 'locaciones',
    title: { es: 'Crear Múltiples Locaciones', en: 'Create Multiple Locations' },
    description: {
      es: 'Paso a paso para cargar una nueva locación con plano, servicios y límites',
      en: 'Step-by-step guide to add a new location with floor plan, services and limits'
    },
    content: {
      es: `# Crear Múltiples Locaciones

La pantalla **Locaciones** centraliza todos tus almacenes/parkings. Desde aquí puedes:
- Ver métricas rápidas (total, activas, clientes, unidades)
- Filtrar por nombre/dirección
- Crear, editar o desactivar ubicaciones sin salir del panel

## Antes de empezar

Ten a mano:
- Dirección completa y datos de contacto (teléfono/email)
- Área total aproximada y número de plantas
- Servicios disponibles (baños, duchas, parking, vigilancia, etc.)
- Dimensiones del plano si quieres dibujar el layout
- Conoce el límite de locaciones incluido en tu plan (se muestra como barra de progreso)

## Paso a paso para crear una locación

1. Ve a **Dashboard > Locaciones** y pulsa **Nueva Ubicación**
2. Completa la sección **Información Básica**
   - Nombre interno (ej. “Almacén Centro Madrid”)
   - Dirección, ciudad y código postal (obligatorios)
   - País (por defecto España)
3. Añade la **Información de contacto**
   - Teléfono directo del centro
   - Email operativo (se valida el formato)
4. Define la **Información del local**
   - Área total en m² (número, acepta decimales)
   - Número de pisos
5. Decide cómo se generará el **plano del local**
   - **Automático**: StorageFy calcula las proporciones (4:3) usando el área total
   - **Manual**: ingresas ancho y largo exactos; se exige que ambos valores sean > 0
   - Valida que ancho × largo ≈ área total (aparece alerta si difiere más de 0,5 m²)

## Diseñar el plano (opcional pero recomendado)

Cuando eliges modo manual:
- Selecciona la **forma del local**: rectángulo o multi-zona (formas L, T, U)
- Usa las plantillas rápidas para generar zonas basadas en tus dimensiones
- Ajusta cada zona: ancho, largo, offset X/Y y etiqueta
- Observa la vista previa responsive para validar proporciones antes de guardar

## Servicios y características

El formulario muestra campos distintos según tu tipo de negocio (STORAGE, PARKING o MIXED):

- **Servicios básicos** (storage/mixed): baños, duchas, escaleras, ascensor
- **Parking**:
  - Activa “Tiene parking” y define número de plazas
  - Campos avanzados: carga EV, parking cubierto, altura/longitud máxima
- **Seguridad y accesos**: alarma, cámaras, vigilancia 24 h, acceso 24 h, clima, wifi, oficina, muelle de carga, horarios personalizados
- **Accesos físicos**: altura y ancho de puerta, dock, acceso 24/7

Todos los campos numéricos se validan (no admite valores negativos) y los interruptores actualizan el formulario en tiempo real.

## Configuración adicional

- **Estado**: deja “Activa” para que aparezca en el dashboard; puedes desactivarla sin perder datos.
- **Mostrar en Plano**: marca esta opción si quieres visualizarla en la vista 3D / Plano interactivo.
- **Estrategia de precios**: FLAT, por m² o por m³ (afecta precios por defecto de unidades).
- **Horarios de acceso**: texto libre para indicar turnos especiales.

## Límite de locaciones por suscripción

Antes de guardar, el sistema revisa tu plan:
- Si llegaste al máximo, aparece un mensaje “Has alcanzado el límite…” y la API devuelve 403
- Para ampliar el límite, contacta a StorageFy; hasta entonces no podrás crear nuevas locaciones

## Guardar, editar y eliminar

1. Pulsa **Guardar**. El botón muestra estado de carga y se bloquea para evitar envíos duplicados.
2. Si hubo errores de validación (ej. email inválido, dimensiones incompletas), verás el detalle bajo cada campo.
3. Para editar, abre la tarjeta de la locación y pulsa **Editar**:
   - Todo se carga con los valores actuales
   - Puedes cambiar servicios, dimensiones o activar/desactivar el campo "showOnPlan"
4. Para eliminarla:
   - Pulsa **Eliminar**, confirma en el alert y el sistema la borra definitivamente (verifica antes que no tengas unidades críticas).

## Próximos pasos

- Una vez creada la locación, ve a **Unidades** para añadir unidades dentro de ese espacio
- Usa **Planos** si necesitas dibujar layouts avanzados con la vista "PlanoViewer"
- Activa **Recordatorios** o **Automatizaciones** por locación (pagos, emails, SEPA)

> **Tip**: Más adelante añadiremos capturas y video de apoyo. Mientras tanto, guarda un borrador antes de introducir datos complejos (multi-zona) para no perder cambios.`,
      en: `# Create Multiple Locations

The **Locations** screen centralizes every warehouse/parking you operate. From here you can:
- See quick metrics (total, active, customers, units)
- Filter by name or address
- Create, edit or deactivate locations without leaving the dashboard

## Before you start

Have this ready:
- Full address and contact info (phone/email)
- Approximate total area and number of floors
- Available services (bathrooms, showers, parking, security, etc.)
- Floor plan dimensions if you want to draw the layout
- Your subscription limit (progress bar shows how many locations you have left)

## Step-by-step to add a location

1. Go to **Dashboard > Locations** and click **New Location**
2. Fill the **Basic Information**
   - Internal name (e.g. “Downtown Storage Madrid”)
   - Address, city, postal code (required)
   - Country (defaults to Spain)
3. Add **Contact Information**
   - Direct phone number
   - Operational email (validated)
4. Define the **Facility Information**
   - Total area in m²
   - Number of floors
5. Choose how the **Floor Plan** will be generated
   - **Automatic**: StorageFy calculates a 4:3 ratio using total area
   - **Manual**: enter exact width and length (> 0)
   - The form warns you if width × length differs from the total area

## Designing the floor layout

When manual mode is enabled:
- Pick the **shape**: rectangle or multi-zone (L, T, U templates)
- Use quick presets to auto-generate zones based on your dimensions
- Adjust each zone (width, length, offsets, label)
- Review the responsive preview before saving; it scales to mobile widths automatically

## Services and amenities

Depending on your business type (STORAGE, PARKING, MIXED) different blocks appear:

- **Basic services**: bathrooms, showers, stairs, elevator
- **Parking**:
  - Toggle “Has parking” and set the number of spaces
  - Advanced fields: EV charging, covered parking, max vehicle height/length
- **Security & access**: alarm, cameras, on-site security, 24h access, climate control, wifi, office space, loading dock, custom access hours
- **Physical access**: door measurements, docks, 24/7 flag

Numeric inputs enforce positive values and switches update related fields instantly.

## Additional settings

- **Status**: keep “Active” to display it across the app; you can deactivate it later.
- **Show on Plan**: enable it if you want this location inside the interactive plan (PlanoViewer).
- **Default pricing strategy**: FLAT, by m², by m³ (used when creating units).
- **Business hours**: free text for specific schedules.

## Subscription limit

Before saving, the API checks your organization plan:
- If you hit the limit, you’ll see “You reached the limit…” and the request returns 403.
- Contact StorageFy to upgrade if you need more locations.

## Save, edit, delete

1. Click **Save**. The button shows a spinner and prevents double submissions.
2. Validation errors (invalid email, missing dimensions, etc.) appear under the affected fields.
3. To edit, open the card and click **Edit**:
   - Existing values pre-fill the form
   - You can change services, dimensions or toggle the "showOnPlan" flag
4. To delete:
   - Click **Delete**, confirm, and the system removes the location (ensure there are no critical units/contracts first).

## What’s next?

- After creating the location, go to **Units** to add storage units or parking spots.
- Use the "PlanoViewer" view for advanced layouts or multi-zone setups.
- Configure **Reminders/Automations** per location (payments, emails, SEPA, etc.).

> **Tip**: Screenshots and walkthrough videos will be added later. For now, consider saving frequently when editing complex multi-zone layouts.`
    },
    tags: ['locaciones', 'crear'],
    order: 1
  },
]
