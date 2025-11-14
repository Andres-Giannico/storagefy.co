import { HelpArticle } from '../help-categories'

export const unidadesArticles: HelpArticle[] = [
  {
    id: 'crear-unidades',
    categoryId: 'unidades',
    title: {
      es: 'Crear Nuevas Unidades',
      en: 'Create New Units'
    },
    description: {
      es: 'Aprende a crear unidades de almacenamiento',
      en: 'Learn to create storage units'
    },
    content: {
      es: `# Crear Nuevas Unidades

La pantalla **Unidades** centraliza todo el inventario de espacios disponibles. El formulario está dividido en bloques para que no se escape nada.

## Antes de comenzar

- Asegúrate de tener creada la **locación** donde vivirá la unidad.
- Confirma cuántas unidades permite tu plan. En la parte superior del formulario verás una barra con el consumo (si llegas al máximo, el sistema bloquea el guardado y te muestra un mensaje 403).
- Define un formato de código consistente (ej. A-001, A-002); StorageFy puede sugerir el siguiente correlativo más adelante.

## 1. Información básica

- **Código** (obligatorio): Identificador único visible en tabla y contratos.
- **Locación**: Selecciona el centro donde estará la unidad. No podrás moverla si luego tiene contratos activos.
- **Tipo**:
  - Interior / Exterior / Climatizado disponibles para todos los negocios.
  - Parking solo aparece si tu negocio es Parking o Mixed; en Storage puro se bloquea.
- **Estado inicial**: Disponible, Reservado, Ocupado, Alquilado, Mantenimiento o Inactivo.
- **Planta y acceso**: Define el piso y si se llega por escaleras, ascensor o acceso directo (drive-up).

Si marcas estado **Alquilado** al crearla, inmediatamente tendrás que elegir un contrato activo en el desplegable de leases (solo muestra contratos sin unidad asignada, a menos que estés editando un contrato existente).

## 2. Dimensiones

Los campos se ingresan en **metros** con decimales (ej. 2.30). El sistema convierte a milímetros internamente y calcula:

- Área en m² (obligatoria).
- Volumen en m³ (solo si indicas altura).

Notas:
- Para negocios Parking o Mixed la altura es opcional; si la dejas vacía, se guardará como nula.
- Si la unidad es exclusivamente de almacenamiento, se exige altura.
- Cualquier cambio en largo/ancho/alto recalcula automáticamente área y volumen.

## 3. Precios y estrategias

- **Precio base mensual** (obligatorio).
- **Moneda**: por defecto EUR.
- **Impuesto personalizado** (opcional) si quieres un IVA distinto al general.
- **Precio por m² / por m³**: el formulario los calcula solo tomando tu precio base y las dimensiones. Puedes editarlos manualmente si necesitas redondear.
- **Estrategia sugerida**: al seleccionar una locación, StorageFy detecta su estrategia por defecto (flat, por m² o por m³) y muestra una etiqueta.
- Botón **Usar precio sugerido**: rellena automáticamente el precio base en función del cálculo anterior.

## 4. Características y notas

- **Características**: interruptores para marcar puerta automática, iluminación, alarma, ventilación, etc. (varía según negocio).
- **Notas internas**: texto libre que verán solo los usuarios del dashboard.
- **Disponible desde**: fecha para indicar cuándo se libera la unidad; aparece en listados y filtros.

## 5. Contratos y asignaciones

Cuando el estado pasa a **Alquilado**:

1. El bloque “Información del contrato” se despliega.
2. Si la unidad ya tenía un lease activo, verás el resumen con cliente, fecha de inicio/fin y un botón para cambiarlo.
3. Si no tiene contrato, el selector te lista los contratos activos sin unidad asignada (o todos si estás editando). Al elegir uno, StorageFy agrega la unidad al array llamado “unitIds” del contrato automáticamente.

## 6. Validaciones y límites

- Todos los campos numéricos muestran mensajes inmediatos (ej. “Debe ser mayor a 0”).
- Si intentas guardar un código duplicado, la API devuelve error y verás la alerta roja superior.
- En planes con límite de unidades, el backend responde con 403 y el mensaje “Has alcanzado el límite…”.
- No uses comillas ni caracteres especiales raros en el código para facilitar los filtros.

## 7. Guardar y siguientes pasos

1. Haz clic en **Guardar**. El botón mostrará un spinner y se deshabilita para evitar envíos duplicados.
2. Si todo salió bien, se cierra el diálogo y la unidad aparece en la tabla (desktop) o en las tarjetas móviles.
3. Desde la tabla podrás:
   - **Editar** para ajustar dimensiones, precios o estado.
   - **Clonar** para crear variaciones (mantiene locación, dimensiones y precio; solo cambia el código).
   - **Eliminar** (solo si no tiene contratos activos o pagos pendientes).

> Consejo: después de crear las unidades principales, usa la vista de filtros para validar que los m² totales por locación coincidan con tu inventario físico.`,
      en: `# Create New Units

The **Units** screen centralizes every available space. The form is organized in sections so you never miss a required field.

## Before you start

- Make sure the **location** already exists.
- Check how many units your subscription allows. A progress bar shows how many you have; if you hit the cap the API returns 403 and the UI blocks the save.
- Define a code pattern (e.g. A-001, A-002). StorageFy can suggest the next available code later.

## 1. Basic information

- **Code** (required): unique identifier shown in listings and contracts.
- **Location**: storage site where the unit lives. Once the unit has contracts you can’t move it.
- **Type**:
  - Indoor / Outdoor / Climate are available for every business.
  - Parking only shows up if your business type is Parking or Mixed; pure storage accounts can’t select it.
- **Status**: Available, Reserved, Occupied, Rented, Maintenance or Inactive.
- **Floor & access level**: indicate where it is and whether customers reach it via stairs, elevator or drive-up.

If you set the status to **Rented** while creating, the “Contract info” block appears so you can link an active lease right away.

## 2. Dimensions

Enter values in **meters** (e.g. 2.30). StorageFy converts them to millimeters internally and calculates:

- Area in m² (required).
- Volume in m³ (only when height is provided).

Notes:
- Parking or Mixed businesses treat height as optional. For storage-only tenants the height field remains mandatory.
- Whenever length/width/height changes, area and volume update automatically.

## 3. Pricing & strategy

- **Base monthly price** (required).
- **Currency** default is EUR.
- **Custom tax rate** (optional) if you need a different VAT.
- **Price per m² / per m³**: automatically derived from base price and dimensions, editable if you want to round numbers.
- **Suggested strategy**: based on the location default (flat, per m², per m³). The UI shows a helper badge.
- **Use suggested price** button copies the calculated suggestion into the base price field.

## 4. Features & notes

- Toggle amenities such as automatic door, lighting, alarm, ventilation, etc.
- Add **internal notes** for your team.
- **Available from** lets you set a future release date so the unit stays in “Reserved” until that day.

## 5. Contracts & leases

When status is **Rented**:

1. The contract summary pops up.
2. If the unit already has an active lease you’ll see customer info, dates and an “Edit” button.
3. If it doesn’t, the dropdown lists every active lease with no unit assigned (or all leases when editing). Selecting one updates the lease array called “unitIds” automatically.

## 6. Validation & limits

- Numeric inputs show live messages (“must be greater than 0”, etc.).
- Duplicate codes trigger an error banner returned by the API.
- If your plan limit is reached, the backend responds with 403 and the UI explains how many units you’re allowed.
- Avoid quotes or special characters in the code to keep filters simple.

## 7. Save & follow-up

1. Click **Save**. The button spins and disables while the request is in flight.
2. On success the dialog closes and the unit appears in the desktop table/mobile cards.
3. From the table you can:
   - **Edit** to adjust dimensions, prices or status.
   - **Clone** to create a similar unit (same location, dimensions and price, different code).
   - **Delete** (only if there’s no active contract or overdue payment).

> Tip: after creating your core units, open the filters view and verify the total m² per location matches your real inventory.`
    },
    tags: ['unidades', 'crear'],
    order: 1,
    featured: true
  },
  {
    id: 'editar-unidades',
    categoryId: 'unidades',
    title: {
      es: 'Editar Unidades Existentes',
      en: 'Edit Existing Units'
    },
    description: {
      es: 'Modifica la información de tus unidades',
      en: 'Modify your units information'
    },
    content: {
      es: `# Editar Unidades Existentes

## Acceder a la Edición

1. Ve a la sección "Unidades"
2. Busca la unidad que quieres editar
3. Haz clic en el botón "Editar" o en el nombre de la unidad

## Campos Editables

Puedes modificar:
- Código (si no tiene contratos activos)
- Nombre
- Dimensiones
- Tipo
- Precio
- Estado
- Locación (si no tiene contratos activos)

## Restricciones

- **Código**: No se puede cambiar si la unidad tiene contratos activos
- **Locación**: No se puede cambiar si hay contratos activos
- **Dimensiones**: Se pueden cambiar, pero afectará los cálculos de pricing

## Guardar Cambios

Los cambios se guardan automáticamente. Si modificas el precio, los nuevos contratos usarán el nuevo precio, pero los contratos existentes mantendrán su precio original.`,
      en: `# Edit Existing Units

## Access Editing

1. Go to the "Units" section
2. Find the unit you want to edit
3. Click the "Edit" button or on the unit name

## Editable Fields

You can modify:
- Code (if it has no active contracts)
- Name
- Dimensions
- Type
- Price
- Status
- Location (if it has no active contracts)

## Restrictions

- **Code**: Cannot be changed if the unit has active contracts
- **Location**: Cannot be changed if there are active contracts
- **Dimensions**: Can be changed, but will affect pricing calculations

## Save Changes

Changes are saved automatically. If you modify the price, new contracts will use the new price, but existing contracts will maintain their original price.`
    },
    tags: ['unidades', 'editar'],
    order: 2
  },
  {
    id: 'dimensiones-exactas',
    categoryId: 'unidades',
    title: {
      es: 'Dimensiones Exactas en Milímetros',
      en: 'Exact Dimensions in Millimeters'
    },
    description: {
      es: 'Cómo medir y registrar dimensiones precisas',
      en: 'How to measure and record precise dimensions'
    },
    content: {
      es: `# Dimensiones Exactas en Milímetros

## Por Qué Milímetros

StorageFy usa milímetros para máxima precisión:
- Permite cálculos exactos de superficie y volumen
- Evita errores de redondeo
- Facilita comparaciones precisas

## Cómo Medir

### Herramientas Recomendadas
- Cinta métrica láser (más precisa)
- Cinta métrica tradicional
- Regla para espacios pequeños

### Proceso de Medición
1. **Largo**: Mide la distancia más larga
2. **Ancho**: Mide perpendicular al largo
3. **Alto**: Mide desde el suelo hasta el techo

### Conversión de Unidades
- **Metros a mm**: Multiplica por 1000
  - Ejemplo: 2.5m = 2500mm
- **Centímetros a mm**: Multiplica por 10
  - Ejemplo: 150cm = 1500mm

## Cálculos Automáticos

El sistema calcula automáticamente:
- **Superficie (m²)**: (largo × ancho) / 1,000,000
- **Volumen (m³)**: (largo × ancho × alto) / 1,000,000,000

## Ejemplos

### Unidad Pequeña
- Largo: 2000mm (2m)
- Ancho: 1500mm (1.5m)
- Alto: 2500mm (2.5m)
- Superficie: 3 m²
- Volumen: 7.5 m³

### Parking
- Largo: 5000mm (5m)
- Ancho: 2500mm (2.5m)
- Alto: 0mm (descubierto)
- Superficie: 12.5 m²
- Volumen: 0 m³`,
      en: `# Exact Dimensions in Millimeters

## Why Millimeters

StorageFy uses millimeters for maximum precision:
- Allows exact surface and volume calculations
- Avoids rounding errors
- Facilitates precise comparisons

## How to Measure

### Recommended Tools
- Laser measuring tape (most accurate)
- Traditional measuring tape
- Ruler for small spaces

### Measurement Process
1. **Length**: Measure the longest distance
2. **Width**: Measure perpendicular to length
3. **Height**: Measure from floor to ceiling

### Unit Conversion
- **Meters to mm**: Multiply by 1000
  - Example: 2.5m = 2500mm
- **Centimeters to mm**: Multiply by 10
  - Example: 150cm = 1500mm

## Automatic Calculations

The system automatically calculates:
- **Surface (m²)**: (length × width) / 1,000,000
- **Volume (m³)**: (length × width × height) / 1,000,000,000

## Examples

### Small Unit
- Length: 2000mm (2m)
- Width: 1500mm (1.5m)
- Height: 2500mm (2.5m)
- Surface: 3 m²
- Volume: 7.5 m³

### Parking
- Length: 5000mm (5m)
- Width: 2500mm (2.5m)
- Height: 0mm (uncovered)
- Surface: 12.5 m²
- Volume: 0 m³`
    },
    tags: ['dimensiones', 'medición', 'mm'],
    order: 3
  },
  {
    id: 'estados-tipos-unidades',
    categoryId: 'unidades',
    title: {
      es: 'Estados y Tipos de Unidades',
      en: 'Unit States and Types'
    },
    description: {
      es: 'Gestiona los estados y tipos de tus unidades',
      en: 'Manage your units states and types'
    },
    content: {
      es: `# Estados y Tipos de Unidades

## Estados de Unidades

### Disponible
- Unidad lista para alquilar
- Aparece en el widget de reservas
- Puede ser asignada a contratos

### Reservada
- Unidad reservada temporalmente
- Esperando confirmación de pago o firma
- No disponible para otras reservas

### Ocupada
- Unidad con contrato activo
- No disponible hasta que termine el contrato
- Aparece en reportes de ocupación

### Mantenimiento
- Unidad en reparación o limpieza
- No disponible para alquiler
- Puede tener fecha estimada de disponibilidad

### Inactiva
- Unidad deshabilitada temporalmente
- No aparece en búsquedas
- Útil para unidades fuera de servicio

## Tipos de Unidades

### Interior
- Unidad dentro de un edificio
- Protegida de elementos
- Ideal para objetos sensibles

### Exterior
- Unidad al aire libre
- Acceso directo
- Para vehículos o maquinaria

### Parking
- Espacio de estacionamiento
- Puede tener altura 0 (descubierto)
- Pricing generalmente por m²

### Climatizado
- Control de temperatura y humedad
- Ideal para objetos sensibles
- Precio premium

## Cambiar Estado

1. Ve a la lista de unidades
2. Haz clic en el estado actual
3. Selecciona el nuevo estado
4. Guarda los cambios`,
      en: `# Unit States and Types

## Unit States

### Available
- Unit ready to rent
- Appears in reservation widget
- Can be assigned to contracts

### Reserved
- Temporarily reserved unit
- Waiting for payment confirmation or signature
- Not available for other reservations

### Occupied
- Unit with active contract
- Not available until contract ends
- Appears in occupancy reports

### Maintenance
- Unit under repair or cleaning
- Not available for rent
- May have estimated availability date

### Inactive
- Temporarily disabled unit
- Does not appear in searches
- Useful for out-of-service units

## Unit Types

### Interior
- Unit inside a building
- Protected from elements
- Ideal for sensitive objects

### Exterior
- Outdoor unit
- Direct access
- For vehicles or machinery

### Parking
- Parking space
- Can have height 0 (uncovered)
- Pricing generally per m²

### Climate Controlled
- Temperature and humidity control
- Ideal for sensitive objects
- Premium price

## Change State

1. Go to units list
2. Click on current state
3. Select new state
4. Save changes`
    },
    tags: ['estados', 'tipos', 'unidades'],
    order: 4
  },
  {
    id: 'filtros-unidades',
    categoryId: 'unidades',
    title: {
      es: 'Filtros Avanzados de Unidades',
      en: 'Advanced Unit Filters'
    },
    description: {
      es: 'Busca unidades usando filtros avanzados',
      en: 'Search units using advanced filters'
    },
    content: {
      es: `# Filtros Avanzados de Unidades

## Filtros Disponibles

### Por Locación
- Filtra unidades por locación específica
- Útil para gestionar múltiples ubicaciones

### Por Estado
- Disponible
- Reservada
- Ocupada
- Mantenimiento
- Inactiva

### Por Tipo
- Interior
- Exterior
- Parking
- Climatizado

### Por Dimensiones
- **Superficie mínima**: m² mínimo
- **Superficie máxima**: m² máximo
- **Volumen mínimo**: m³ mínimo
- **Volumen máximo**: m³ máximo

### Por Precio
- Precio mínimo mensual
- Precio máximo mensual

### Búsqueda por Texto
- Busca por código
- Busca por nombre
- Búsqueda en tiempo real

## Combinar Filtros

Puedes combinar múltiples filtros:
- Ejemplo: Unidades disponibles, tipo Interior, entre 5-10 m², precio menor a 100€

## Guardar Filtros

Puedes guardar combinaciones de filtros frecuentes para acceso rápido.`,
      en: `# Advanced Unit Filters

## Available Filters

### By Location
- Filter units by specific location
- Useful for managing multiple locations

### By State
- Available
- Reserved
- Occupied
- Maintenance
- Inactive

### By Type
- Interior
- Exterior
- Parking
- Climate Controlled

### By Dimensions
- **Minimum surface**: Minimum m²
- **Maximum surface**: Maximum m²
- **Minimum volume**: Minimum m³
- **Maximum volume**: Maximum m³

### By Price
- Minimum monthly price
- Maximum monthly price

### Text Search
- Search by code
- Search by name
- Real-time search

## Combine Filters

You can combine multiple filters:
- Example: Available units, Interior type, between 5-10 m², price less than 100€

## Save Filters

You can save frequent filter combinations for quick access.`
    },
    tags: ['filtros', 'búsqueda', 'unidades'],
    order: 5
  },
]
