import { HelpArticle } from '../help-categories'

export const planosArticles: HelpArticle[] = [
  {
    id: 'visualizar-planos',
    categoryId: 'planos',
    title: { es: 'Visualizar Planos Interactivos', en: 'View Interactive Floor Plans' },
    description: { es: 'Ve el estado de tus unidades en tiempo real', en: 'See your units status in real time' },
    content: {
      es: `# Visualizar Planos Interactivos

## Ver Plano

1. Ve a **Planos** en el menú principal
2. Selecciona la locación que quieres visualizar
3. Verás todas las unidades representadas en el plano

## Estados Visuales

Cada unidad se muestra con un color según su estado:
- 🟢 **Verde**: Disponible - Lista para alquilar
- 🔴 **Rojo**: Ocupada - Actualmente en uso
- 🟡 **Amarillo**: Reservada - Asignada pero aún no iniciada
- ⚫ **Gris**: Mantenimiento - No disponible temporalmente
- ⚪ **Blanco**: Sin definir - Estado pendiente

## Interacción con el Plano

### Ver Detalles de una Unidad
- **Desktop**: Pasa el cursor sobre una unidad para ver información
- **Móvil**: Toca una unidad para ver detalles
- **Información mostrada**:
  - Código de unidad
  - Tipo y dimensiones
  - Estado actual
  - Cliente asignado (si aplica)
  - Fecha de inicio/fin

### Navegar por el Plano
- **Zoom**: Usa la rueda del mouse o gestos en móvil
- **Arrastrar**: Haz clic y arrastra para mover la vista
- **Reset**: Botón para volver a la vista completa

### Vista de Lista Alternativa
- Puedes cambiar entre vista de plano y lista
- La lista muestra todas las unidades con filtros
- Útil para búsquedas rápidas

## Time Travel

Usa el selector de fecha para ver estados históricos o futuros:
- **Fecha pasada**: Ve cómo estaba el plano en cualquier fecha anterior
- **Fecha futura**: Visualiza cómo estará el plano según contratos programados
- **Indicador visual**: Badge muestra si estás viendo fecha pasada o futura

## Filtros y Búsqueda

- **Por estado**: Filtra solo disponibles, ocupadas, etc.
- **Por tipo**: Muestra solo ciertos tipos de unidades
- **Por cliente**: Busca unidades de un cliente específico
- **Por código**: Búsqueda rápida por código de unidad`,
      en: `# View Interactive Floor Plans

## View Floor Plan

1. Go to **Floor Plans** in the main menu
2. Select the location you want to visualize
3. You'll see all units represented on the floor plan

## Visual States

Each unit is shown with a color according to its status:
- 🟢 **Green**: Available - Ready to rent
- 🔴 **Red**: Occupied - Currently in use
- 🟡 **Yellow**: Reserved - Assigned but not yet started
- ⚫ **Gray**: Maintenance - Temporarily unavailable
- ⚪ **White**: Undefined - Pending status

## Interact with Floor Plan

### View Unit Details
- **Desktop**: Hover over a unit to see information
- **Mobile**: Tap a unit to see details
- **Information shown**:
  - Unit code
  - Type and dimensions
  - Current status
  - Assigned customer (if applicable)
  - Start/end date

### Navigate Floor Plan
- **Zoom**: Use mouse wheel or gestures on mobile
- **Drag**: Click and drag to move view
- **Reset**: Button to return to full view

### Alternative List View
- You can switch between floor plan and list view
- List shows all units with filters
- Useful for quick searches

## Time Travel

Use date selector to view historical or future states:
- **Past date**: See how the floor plan was on any previous date
- **Future date**: Visualize how the floor plan will be according to scheduled contracts
- **Visual indicator**: Badge shows if you're viewing past or future date

## Filters and Search

- **By status**: Filter only available, occupied, etc.
- **By type**: Show only certain unit types
- **By customer**: Search units of a specific customer
- **By code**: Quick search by unit code`
    },
    tags: ['planos', 'visualizar'],
    order: 1,
    featured: true
  },
  {
    id: 'crear-editar-planos',
    categoryId: 'planos',
    title: { es: 'Crear y Editar Planos', en: 'Create and Edit Floor Plans' },
    description: { es: 'Cómo crear y editar planos interactivos de tus locaciones', en: 'How to create and edit interactive floor plans for your locations' },
    content: {
      es: `# Crear y Editar Planos

## Crear un Plano

### Método 1: Automático
1. Ve a **Locaciones** → Selecciona una locación
2. En la sección de Plano, selecciona **"Generación Automática"**
3. El sistema calcula proporciones 4:3 usando el área total
4. Haz clic en **"Generar Plano"**
5. El plano se crea automáticamente con el área especificada

### Método 2: Manual
1. Selecciona **"Modo Manual"**
2. Ingresa las dimensiones:
   - **Ancho**: En metros
   - **Largo**: En metros
3. Valida que ancho × largo ≈ área total
4. El sistema muestra alerta si hay diferencia mayor a 0.5 m²
5. Haz clic en **"Crear Plano"**

## Formas de Plano

### Rectángulo Simple
- Forma rectangular estándar
- Ideal para espacios cuadrados o rectangulares
- Configuración más simple

### Multi-Zona
- Para espacios con formas L, T, U
- Permite definir múltiples zonas
- Cada zona tiene:
  - Ancho y largo
  - Posición (offset X, Y)
  - Etiqueta descriptiva

### Plantillas Rápidas
- El sistema ofrece plantillas predefinidas:
  - **L-Shape**: Dos rectángulos conectados en L
  - **T-Shape**: Tres zonas en forma de T
  - **U-Shape**: Tres zonas formando una U
- Selecciona plantilla y ajusta dimensiones

## Editar un Plano Existente

1. Ve a **Planos** → Selecciona el plano
2. Haz clic en **"Editar"**
3. Puedes modificar:
   - Dimensiones generales
   - Forma (rectángulo a multi-zona o viceversa)
   - Posiciones de zonas
   - Etiquetas

## Vista Previa

Antes de guardar:
- **Vista previa responsive**: Ve cómo se verá en diferentes tamaños
- **Validación visual**: Asegúrate de que las proporciones sean correctas
- **Escalado automático**: El sistema ajusta para móvil automáticamente

## Dibujar Unidades en el Plano

Una vez creado el plano base:

1. Haz clic en **"Añadir Unidades"**
2. Selecciona el área donde quieres colocar la unidad
3. Define:
   - **Código**: Identificador único
   - **Dimensiones**: Ancho y largo en metros
   - **Tipo**: Tipo de unidad (storage, parking, etc.)
4. El sistema posiciona la unidad en el plano
5. Puedes moverla y ajustarla después

## Organizar Unidades

- **Arrastrar y soltar**: Mueve unidades en el plano
- **Redimensionar**: Ajusta el tamaño manteniendo proporciones
- **Eliminar**: Quita unidades del plano
- **Agrupar**: Organiza unidades por zona o tipo

## Guardar Cambios

- **Guardar**: Guarda los cambios realizados
- **Descartar**: Cancela todos los cambios
- **Vista previa**: Ve cómo quedará antes de guardar
- **Validación**: El sistema valida que no haya solapamientos`,
      en: `# Create and Edit Floor Plans

## Create a Floor Plan

### Method 1: Automatic
1. Go to **Locations** → Select a location
2. In Floor Plan section, select **"Automatic Generation"**
3. System calculates 4:3 proportions using total area
4. Click **"Generate Floor Plan"**
5. Floor plan is automatically created with specified area

### Method 2: Manual
1. Select **"Manual Mode"**
2. Enter dimensions:
   - **Width**: In meters
   - **Length**: In meters
3. Validate that width × length ≈ total area
4. System shows alert if difference is greater than 0.5 m²
5. Click **"Create Floor Plan"**

## Floor Plan Shapes

### Simple Rectangle
- Standard rectangular shape
- Ideal for square or rectangular spaces
- Simplest configuration

### Multi-Zone
- For spaces with L, T, U shapes
- Allows defining multiple zones
- Each zone has:
  - Width and length
  - Position (offset X, Y)
  - Descriptive label

### Quick Templates
- System offers predefined templates:
  - **L-Shape**: Two connected rectangles in L
  - **T-Shape**: Three zones in T shape
  - **U-Shape**: Three zones forming a U
- Select template and adjust dimensions

## Edit Existing Floor Plan

1. Go to **Floor Plans** → Select the floor plan
2. Click **"Edit"**
3. You can modify:
   - General dimensions
   - Shape (rectangle to multi-zone or vice versa)
   - Zone positions
   - Labels

## Preview

Before saving:
- **Responsive preview**: See how it will look at different sizes
- **Visual validation**: Make sure proportions are correct
- **Automatic scaling**: System adjusts for mobile automatically

## Draw Units on Floor Plan

Once base floor plan is created:

1. Click **"Add Units"**
2. Select area where you want to place the unit
3. Define:
   - **Code**: Unique identifier
   - **Dimensions**: Width and length in meters
   - **Type**: Unit type (storage, parking, etc.)
4. System positions unit on floor plan
5. You can move and adjust it later

## Organize Units

- **Drag and drop**: Move units on floor plan
- **Resize**: Adjust size maintaining proportions
- **Delete**: Remove units from floor plan
- **Group**: Organize units by zone or type

## Save Changes

- **Save**: Save changes made
- **Discard**: Cancel all changes
- **Preview**: See how it will look before saving
- **Validation**: System validates no overlaps`
    },
    tags: ['planos', 'crear', 'editar'],
    order: 2
  },
  {
    id: 'time-travel-planos',
    categoryId: 'planos',
    title: { es: 'Time Travel en Planos', en: 'Time Travel in Floor Plans' },
    description: { es: 'Visualiza el estado de tus unidades en cualquier fecha', en: 'Visualize your units status at any date' },
    content: {
      es: `# Time Travel en Planos

## ¿Qué es Time Travel?

Time Travel es una funcionalidad que te permite **ver el estado de tus unidades en cualquier fecha**, tanto pasada como futura. Esto es útil para:

- 📊 **Consultar ocupación histórica**: Ver cómo estaba el almacén en el pasado
- 🔮 **Planificar el futuro**: Visualizar ocupación programada según contratos
- 📈 **Análisis de tendencias**: Comparar ocupación entre diferentes períodos
- 🔍 **Auditoría**: Revisar estados históricos para reportes o investigaciones

## Cómo Usar Time Travel

### Acceder al Selector de Fecha
1. Ve a **Planos** → Selecciona una locación
2. En la parte superior del visor verás el selector de fecha
3. Por defecto muestra la fecha actual

### Seleccionar una Fecha
1. Haz clic en el selector de fecha
2. Elige la fecha que quieres visualizar:
   - **Calendario**: Navega por meses y años
   - **Rápido**: Botones para "Hoy", "Ayer", "Hace 1 semana", etc.
3. El plano se actualiza automáticamente

## Visualización de Fechas

### Fecha Pasada (Histórico)
- Badge **"Vista Pasada"** + fecha seleccionada
- Muestra cómo estaban las unidades en esa fecha
- Basado en:
  - Contratos activos en esa fecha
  - Historial de cambios de estado
  - Movimientos de unidades registrados

### Fecha Futura (Proyección)
- Badge **"Vista Futura"** + fecha seleccionada
- Muestra cómo estarán las unidades según:
  - Contratos programados para empezar
  - Contratos que terminarán
  - Reservas confirmadas
  - Cambios de estado programados

### Fecha Actual
- Sin badge especial
- Muestra estado en tiempo real
- Botón **"Hoy"** para volver rápidamente

## Casos de Uso

### 1. Consultar Ocupación Pasada
**Escenario**: Necesitas saber la ocupación del mes pasado para un reporte

1. Selecciona una fecha del mes pasado
2. Ve el estado de todas las unidades en esa fecha
3. Identifica qué unidades estaban ocupadas
4. Usa esta información para reportes o análisis

### 2. Planificar Ocupación Futura
**Escenario**: Quieres saber cuántas unidades estarán disponibles en 3 meses

1. Selecciona una fecha 3 meses en el futuro
2. Visualiza qué unidades estarán ocupadas
3. Identifica espacios disponibles
4. Planifica nuevas contrataciones basándote en esto

### 3. Comparar Estados
**Escenario**: Comparar ocupación entre diferentes meses

1. Visualiza el plano para el mes pasado
2. Anota la ocupación
3. Cambia a la fecha actual
4. Compara diferencias

### 4. Auditoría de Contratos
**Escenario**: Verificar cuándo empezó un contrato específico

1. Busca la unidad del contrato
2. Selecciona diferentes fechas alrededor de la fecha de inicio
3. Observa el cambio de estado de disponible a ocupada
4. Confirma la fecha exacta de inicio

## Limitaciones

- **Datos históricos**: Solo muestra estados desde que empezaste a usar StorageFy
- **Proyecciones futuras**: Basadas en contratos y reservas confirmadas
- **Cambios no programados**: No puede predecir cancelaciones o cambios inesperados

## Exportar Vista Time Travel

Puedes exportar una captura del plano en cualquier fecha:
1. Selecciona la fecha deseada
2. Haz clic en **"Exportar Vista"**
3. Descarga la imagen del plano
4. Úsala en reportes o presentaciones`,
      en: `# Time Travel in Floor Plans

## What is Time Travel?

Time Travel is a feature that allows you to **see the status of your units at any date**, both past and future. This is useful for:

- 📊 **Consult historical occupancy**: See how the warehouse was in the past
- 🔮 **Plan for the future**: Visualize scheduled occupancy according to contracts
- 📈 **Trend analysis**: Compare occupancy between different periods
- 🔍 **Audit**: Review historical states for reports or investigations

## How to Use Time Travel

### Access Date Selector
1. Go to **Floor Plans** → Select a location
2. At the top of the viewer you'll see the date selector
3. By default shows current date

### Select a Date
1. Click on the date selector
2. Choose the date you want to visualize:
   - **Calendar**: Navigate through months and years
   - **Quick**: Buttons for "Today", "Yesterday", "1 week ago", etc.
3. Floor plan updates automatically

## Date Visualization

### Past Date (Historical)
- **"Past View"** badge + selected date
- Shows how units were on that date
- Based on:
  - Active contracts on that date
  - Status change history
  - Recorded unit movements

### Future Date (Projection)
- **"Future View"** badge + selected date
- Shows how units will be according to:
  - Scheduled contracts to start
  - Contracts that will end
  - Confirmed reservations
  - Scheduled status changes

### Current Date
- No special badge
- Shows real-time status
- **"Today"** button to quickly return

## Use Cases

### 1. Consult Past Occupancy
**Scenario**: You need to know last month's occupancy for a report

1. Select a date from last month
2. See status of all units on that date
3. Identify which units were occupied
4. Use this information for reports or analysis

### 2. Plan Future Occupancy
**Scenario**: You want to know how many units will be available in 3 months

1. Select a date 3 months in the future
2. Visualize which units will be occupied
3. Identify available spaces
4. Plan new contracts based on this

### 3. Compare States
**Scenario**: Compare occupancy between different months

1. Visualize floor plan for last month
2. Note occupancy
3. Switch to current date
4. Compare differences

### 4. Contract Audit
**Scenario**: Verify when a specific contract started

1. Find the contract's unit
2. Select different dates around start date
3. Observe status change from available to occupied
4. Confirm exact start date

## Limitations

- **Historical data**: Only shows states since you started using StorageFy
- **Future projections**: Based on confirmed contracts and reservations
- **Unplanned changes**: Cannot predict cancellations or unexpected changes

## Export Time Travel View

You can export a capture of the floor plan at any date:
1. Select desired date
2. Click **"Export View"**
3. Download floor plan image
4. Use in reports or presentations`
    },
    tags: ['planos', 'time-travel', 'histórico'],
    order: 3
  },
  {
    id: 'planos-multizona',
    categoryId: 'planos',
    title: { es: 'Planos Multi-Zona (L, T, U)', en: 'Multi-Zone Floor Plans (L, T, U)' },
    description: { es: 'Crea planos complejos con múltiples zonas conectadas', en: 'Create complex floor plans with multiple connected zones' },
    content: {
      es: `# Planos Multi-Zona (L, T, U)

## ¿Qué son los Planos Multi-Zona?

Los planos multi-zona permiten representar espacios que no son rectángulos simples, como formas **L**, **T** o **U**. Son ideales para:

- Almacenes con múltiples secciones conectadas
- Parkings con diferentes áreas
- Espacios con pasillos o divisiones
- Locaciones con pisos o niveles diferentes

## Tipos de Formas Disponibles

### Forma L (L-Shape)
- Dos rectángulos conectados formando una L
- Ideal para esquinas o áreas con extensión lateral
- **Ejemplo**: Un almacén principal con una sección adicional

### Forma T (T-Shape)
- Tres zonas: una central y dos laterales
- Perfecto para espacios con cruces o intersecciones
- **Ejemplo**: Un pasillo central con áreas a ambos lados

### Forma U (U-Shape)
- Tres zonas formando una U
- Útil para espacios alrededor de un patio o área central
- **Ejemplo**: Un parking con tres secciones alrededor de un patio

### Personalizado
- Crea tu propia configuración multi-zona
- Define tantas zonas como necesites
- Cada zona es independiente pero conectada visualmente

## Crear un Plano Multi-Zona

### Paso 1: Seleccionar Tipo
1. Al crear un plano, selecciona **"Multi-Zona"**
2. Elige la forma base: L, T, U o Personalizado
3. El sistema muestra una vista previa de la forma

### Paso 2: Definir Dimensiones de Cada Zona

Para cada zona necesitas:
- **Ancho**: Ancho de la zona en metros
- **Largo**: Largo de la zona en metros
- **Etiqueta**: Nombre descriptivo (ej. "Sección A", "Zona Norte")
- **Offset X**: Posición horizontal relativa
- **Offset Y**: Posición vertical relativa

### Paso 3: Ajustar Posiciones

- **Vista previa en tiempo real**: Ve cómo se conectan las zonas
- **Arrastrar zonas**: Mueve zonas para ajustar la conexión
- **Validación automática**: El sistema valida que las zonas estén bien conectadas

### Paso 4: Validar Totales

- **Área total**: Suma de todas las zonas
- **Debe coincidir**: Con el área total de la locación
- **Tolerancia**: Diferencia permitida de 0.5 m²

## Plantillas Rápidas

El sistema ofrece plantillas preconfiguradas:

### Plantilla L Estándar
- Dos zonas de igual tamaño
- Conexión en esquina
- Ajusta dimensiones según tu espacio

### Plantilla T Estándar
- Zona central más grande
- Dos zonas laterales simétricas
- Ideal para pasillos centrales

### Plantilla U Estándar
- Tres zonas simétricas
- Área central abierta
- Perfecto para patios o áreas centrales

## Editar Zonas Existentes

1. Haz clic en **"Editar Zona"**
2. Modifica dimensiones o posición
3. Añade nuevas zonas si es necesario
4. Elimina zonas que no necesites
5. La vista previa se actualiza en tiempo real

## Organizar Unidades en Multi-Zona

- **Asignación por zona**: Asigna unidades a zonas específicas
- **Vista por zona**: Filtra unidades por zona
- **Distribución visual**: Las unidades aparecen en su zona correspondiente

## Vista Responsive

- **Desktop**: Vista completa con todas las zonas visibles
- **Tablet**: Vista adaptada con zoom automático
- **Móvil**: Navegación por zonas individuales
- **Tooltip**: Información de zona al hacer hover/tap

## Consejos

- **Empieza simple**: Usa las plantillas primero
- **Valida áreas**: Asegúrate de que las áreas sumen correctamente
- **Etiquetas claras**: Usa nombres descriptivos para cada zona
- **Vista previa**: Siempre revisa antes de guardar`,
      en: `# Multi-Zone Floor Plans (L, T, U)

## What are Multi-Zone Floor Plans?

Multi-zone floor plans allow representing spaces that are not simple rectangles, like **L**, **T** or **U** shapes. They are ideal for:

- Warehouses with multiple connected sections
- Parkings with different areas
- Spaces with aisles or divisions
- Locations with different floors or levels

## Available Shape Types

### L Shape
- Two connected rectangles forming an L
- Ideal for corners or areas with lateral extension
- **Example**: A main warehouse with an additional section

### T Shape
- Three zones: one central and two lateral
- Perfect for spaces with crosses or intersections
- **Example**: A central aisle with areas on both sides

### U Shape
- Three zones forming a U
- Useful for spaces around a courtyard or central area
- **Example**: A parking with three sections around a courtyard

### Custom
- Create your own multi-zone configuration
- Define as many zones as needed
- Each zone is independent but visually connected

## Create Multi-Zone Floor Plan

### Step 1: Select Type
1. When creating a floor plan, select **"Multi-Zone"**
2. Choose base shape: L, T, U or Custom
3. System shows a preview of the shape

### Step 2: Define Dimensions for Each Zone

For each zone you need:
- **Width**: Zone width in meters
- **Length**: Zone length in meters
- **Label**: Descriptive name (e.g., "Section A", "North Zone")
- **Offset X**: Relative horizontal position
- **Offset Y**: Relative vertical position

### Step 3: Adjust Positions

- **Real-time preview**: See how zones connect
- **Drag zones**: Move zones to adjust connection
- **Automatic validation**: System validates zones are well connected

### Step 4: Validate Totals

- **Total area**: Sum of all zones
- **Must match**: With total location area
- **Tolerance**: Allowed difference of 0.5 m²

## Quick Templates

System offers preconfigured templates:

### Standard L Template
- Two zones of equal size
- Corner connection
- Adjust dimensions according to your space

### Standard T Template
- Larger central zone
- Two symmetric lateral zones
- Ideal for central aisles

### Standard U Template
- Three symmetric zones
- Open central area
- Perfect for courtyards or central areas

## Edit Existing Zones

1. Click **"Edit Zone"**
2. Modify dimensions or position
3. Add new zones if needed
4. Delete zones you don't need
5. Preview updates in real time

## Organize Units in Multi-Zone

- **Assignment by zone**: Assign units to specific zones
- **View by zone**: Filter units by zone
- **Visual distribution**: Units appear in their corresponding zone

## Responsive View

- **Desktop**: Full view with all zones visible
- **Tablet**: Adapted view with automatic zoom
- **Mobile**: Navigation by individual zones
- **Tooltip**: Zone information on hover/tap

## Tips

- **Start simple**: Use templates first
- **Validate areas**: Make sure areas sum correctly
- **Clear labels**: Use descriptive names for each zone
- **Preview**: Always review before saving`
    },
    tags: ['planos', 'multizona', 'formas'],
    order: 4
  }
]
