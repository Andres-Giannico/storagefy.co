import { HelpArticle } from '../help-categories'

export const tablonArticles: HelpArticle[] = [
  {
    id: 'crear-anuncios',
    categoryId: 'tablon',
    title: { es: 'Crear Anuncios en el Tablón', en: 'Create Board Announcements' },
    description: { es: 'Comunícate con tu equipo', en: 'Communicate with your team' },
    content: {
      es: `# Crear Anuncios en el Tablón

## ¿Qué es el Tablón de Anuncios?

El Tablón de Anuncios es una herramienta interna de comunicación que permite a todos los miembros del equipo compartir información, ideas, problemas y actualizaciones de forma centralizada.

## Crear un Nuevo Anuncio

1. Ve a **Tablón de Anuncios** en el menú principal
2. Haz clic en **"Nuevo Anuncio"** (botón en la parte superior)
3. Se abre el formulario de creación

## Completar el Formulario

### Título
- Escribe un título claro y descriptivo
- **Ejemplo**: "Nueva ubicación en proceso", "Problema con acceso principal"
- El título aparece en la lista de anuncios

### Categoría
Selecciona la categoría que mejor describa tu anuncio:

- 📢 **Anuncios**: Información general, noticias, actualizaciones
- 💡 **Ideas**: Sugerencias, mejoras, propuestas
- ⚠️ **Problemas**: Issues, bugs, problemas a resolver
- 🚨 **Urgente**: Cosas que requieren atención inmediata

### Contenido
- Escribe el mensaje completo
- Puedes incluir:
  - Texto formateado (negrita, listas, etc.)
  - Enlaces
  - Información detallada
- **Sé claro y conciso**: Facilita la lectura

### Etiquetas (Opcional)
- Añade etiquetas para facilitar la búsqueda
- **Ejemplos**: "Mantenimiento", "Clientes", "Sistema", "Ubicación A"
- Ayuda a filtrar y organizar anuncios

## Publicar

1. Revisa todos los campos
2. Haz clic en **"Publicar"**
3. El anuncio aparece inmediatamente en el tablón
4. Todos los usuarios reciben una notificación (si está configurado)

## Editar un Anuncio

- Solo puedes editar tus propios anuncios
- Haz clic en **"Editar"** en el anuncio
- Modifica el contenido
- Los cambios se guardan inmediatamente

## Eliminar un Anuncio

- Haz clic en **"Eliminar"** en tu anuncio
- Confirma la eliminación
- El anuncio se borra permanentemente

## Mejores Prácticas

- ✅ **Títulos descriptivos**: Facilita encontrar el anuncio
- ✅ **Categorías correctas**: Ayuda a la organización
- ✅ **Contenido claro**: Mensajes fáciles de entender
- ✅ **Actualizar estado**: Marca como resuelto cuando aplique`,
      en: `# Create Board Announcements

## What is the Announcement Board?

The Announcement Board is an internal communication tool that allows all team members to share information, ideas, problems, and updates in a centralized way.

## Create a New Announcement

1. Go to **Announcement Board** in the main menu
2. Click **"New Announcement"** (button at the top)
3. Creation form opens

## Complete the Form

### Title
- Write a clear and descriptive title
- **Example**: "New location in process", "Problem with main access"
- Title appears in announcement list

### Category
Select the category that best describes your announcement:

- 📢 **Announcements**: General information, news, updates
- 💡 **Ideas**: Suggestions, improvements, proposals
- ⚠️ **Problems**: Issues, bugs, problems to solve
- 🚨 **Urgent**: Things requiring immediate attention

### Content
- Write the complete message
- You can include:
  - Formatted text (bold, lists, etc.)
  - Links
  - Detailed information
- **Be clear and concise**: Facilitates reading

### Tags (Optional)
- Add tags to facilitate search
- **Examples**: "Maintenance", "Customers", "System", "Location A"
- Helps filter and organize announcements

## Publish

1. Review all fields
2. Click **"Publish"**
3. Announcement appears immediately on the board
4. All users receive a notification (if configured)

## Edit an Announcement

- You can only edit your own announcements
- Click **"Edit"** on the announcement
- Modify content
- Changes are saved immediately

## Delete an Announcement

- Click **"Delete"** on your announcement
- Confirm deletion
- Announcement is permanently deleted

## Best Practices

- ✅ **Descriptive titles**: Makes finding the announcement easier
- ✅ **Correct categories**: Helps organization
- ✅ **Clear content**: Easy to understand messages
- ✅ **Update status**: Mark as resolved when applicable`
    },
    tags: ['tablón', 'anuncios'],
    order: 1,
    featured: true
  },
  {
    id: 'categorias-seguimiento',
    categoryId: 'tablon',
    title: { es: 'Categorías y Seguimiento de Lecturas', en: 'Categories and Read Tracking' },
    description: { es: 'Organiza anuncios y haz seguimiento de quién los ha leído', en: 'Organize announcements and track who has read them' },
    content: {
      es: `# Categorías y Seguimiento de Lecturas

## Categorías Disponibles

### 📢 Anuncios
- **Uso**: Información general, noticias, actualizaciones
- **Ejemplos**:
  - "Nueva funcionalidad disponible"
  - "Horario especial durante fiestas"
  - "Cambios en procedimientos"
- **Prioridad**: Normal

### 💡 Ideas
- **Uso**: Sugerencias, mejoras, propuestas
- **Ejemplos**:
  - "Propuesta para mejorar el proceso de reservas"
  - "Idea para optimizar espacio"
  - "Sugerencia de nueva funcionalidad"
- **Prioridad**: Baja (para consideración)

### ⚠️ Problemas
- **Uso**: Issues, bugs, problemas que necesitan resolución
- **Ejemplos**:
  - "Error en generación de facturas"
  - "Problema con acceso a ubicación B"
  - "Bug en reporte de ocupación"
- **Prioridad**: Alta (requiere atención)

### 🚨 Urgente
- **Uso**: Cosas que requieren atención inmediata
- **Ejemplos**:
  - "Sistema caído - Acceso limitado"
  - "Incidente de seguridad"
  - "Necesidad de acción inmediata"
- **Prioridad**: Crítica

## Seguimiento de Lecturas

### ¿Cómo Funciona?
- El sistema registra automáticamente cuando un usuario lee un anuncio
- Cada anuncio muestra quién lo ha leído
- Útil para asegurar que información importante sea vista por todos

### Ver Lecturas
1. Abre cualquier anuncio
2. En la parte inferior verás la sección **"Lecturas"**
3. Lista todos los usuarios que han leído el anuncio
4. Muestra:
   - Nombre del usuario
   - Fecha y hora de lectura
   - Estado (Leído / No leído)

### Estadísticas de Lectura
- **Total de usuarios**: Cuántos usuarios tiene acceso
- **Leído por**: Cantidad de usuarios que han leído
- **Pendiente**: Usuarios que aún no han leído
- **Tasa de lectura**: Porcentaje de usuarios que han leído

## Notificaciones

### Configuración
- Activa notificaciones para recibir alertas de nuevos anuncios
- Puedes elegir:
  - Todos los anuncios
  - Solo categorías específicas
  - Solo urgentes
  - Ninguno

### Tipos de Notificación
- **Email**: Recibe emails cuando hay nuevos anuncios
- **In-app**: Notificación dentro de StorageFy
- **Urgentes**: Siempre recibes notificaciones de anuncios urgentes

## Filtrar por Categoría

### En el Tablón
1. Usa los filtros en la parte superior
2. Selecciona una o más categorías
3. El tablón muestra solo anuncios de esas categorías
4. Útil para:
   - Ver solo problemas pendientes
   - Revisar ideas sugeridas
   - Encontrar anuncios urgentes

## Búsqueda

- **Buscar por texto**: Escribe en el buscador
- **Buscar por etiquetas**: Filtra por tags
- **Buscar por autor**: Encuentra anuncios de un usuario específico
- **Buscar por fecha**: Filtra por rango de fechas

## Mejores Prácticas

- ✅ **Usa categorías correctamente**: Facilita la organización
- ✅ **Marca como urgente solo cuando sea necesario**: Evita saturación
- ✅ **Revisa lecturas**: Asegúrate de que información importante sea vista
- ✅ **Responde a problemas**: Actualiza el estado cuando se resuelva`,
      en: `# Categories and Read Tracking

## Available Categories

### 📢 Announcements
- **Use**: General information, news, updates
- **Examples**:
  - "New feature available"
  - "Special schedule during holidays"
  - "Changes in procedures"
- **Priority**: Normal

### 💡 Ideas
- **Use**: Suggestions, improvements, proposals
- **Examples**:
  - "Proposal to improve reservation process"
  - "Idea to optimize space"
  - "Suggestion for new feature"
- **Priority**: Low (for consideration)

### ⚠️ Problems
- **Use**: Issues, bugs, problems needing resolution
- **Examples**:
  - "Error in invoice generation"
  - "Problem with access to location B"
  - "Bug in occupancy report"
- **Priority**: High (requires attention)

### 🚨 Urgent
- **Use**: Things requiring immediate attention
- **Examples**:
  - "System down - Limited access"
  - "Security incident"
  - "Need for immediate action"
- **Priority**: Critical

## Read Tracking

### How Does It Work?
- System automatically records when a user reads an announcement
- Each announcement shows who has read it
- Useful to ensure important information is seen by everyone

### View Reads
1. Open any announcement
2. At the bottom you'll see **"Reads"** section
3. Lists all users who have read the announcement
4. Shows:
   - User name
   - Date and time of reading
   - Status (Read / Not read)

### Read Statistics
- **Total users**: How many users have access
- **Read by**: Number of users who have read
- **Pending**: Users who haven't read yet
- **Read rate**: Percentage of users who have read

## Notifications

### Configuration
- Activate notifications to receive alerts for new announcements
- You can choose:
  - All announcements
  - Only specific categories
  - Only urgent
  - None

### Notification Types
- **Email**: Receive emails when there are new announcements
- **In-app**: Notification within StorageFy
- **Urgent**: You always receive notifications for urgent announcements

## Filter by Category

### On the Board
1. Use filters at the top
2. Select one or more categories
3. Board shows only announcements from those categories
4. Useful for:
   - View only pending problems
   - Review suggested ideas
   - Find urgent announcements

## Search

- **Search by text**: Type in search box
- **Search by tags**: Filter by tags
- **Search by author**: Find announcements from a specific user
- **Search by date**: Filter by date range

## Best Practices

- ✅ **Use categories correctly**: Facilitates organization
- ✅ **Mark as urgent only when necessary**: Avoids saturation
- ✅ **Review reads**: Ensure important information is seen
- ✅ **Respond to problems**: Update status when resolved`
    },
    tags: ['tablón', 'categorías', 'seguimiento'],
    order: 2
  },
  {
    id: 'resolucion-problemas',
    categoryId: 'tablon',
    title: { es: 'Resolución de Problemas en el Tablón', en: 'Problem Resolution on the Board' },
    description: { es: 'Cómo marcar problemas como resueltos y hacer seguimiento', en: 'How to mark problems as resolved and track them' },
    content: {
      es: `# Resolución de Problemas en el Tablón

## Marcar Problemas como Resueltos

Cuando un problema publicado en el tablón se resuelve, es importante marcarlo como resuelto para:

- ✅ Informar al equipo que ya está solucionado
- ✅ Mantener el tablón actualizado
- ✅ Mejorar la organización y seguimiento
- ✅ Generar estadísticas de resolución

## Proceso de Resolución

### Paso 1: Revisar el Problema
1. Abre el problema que quieres resolver
2. Lee todos los detalles
3. Verifica que entiendes completamente el issue
4. Revisa comentarios o actualizaciones previas

### Paso 2: Resolver el Problema
1. Toma las acciones necesarias para resolver el issue
2. Documenta lo que hiciste (opcional pero recomendado)
3. Verifica que el problema está efectivamente resuelto

### Paso 3: Marcar como Resuelto
1. Haz clic en el botón **"Marcar como Resuelto"**
2. Aparece un formulario para completar

### Paso 4: Completar Información de Resolución

**Solución aplicada** (obligatorio):
- Describe brevemente qué se hizo para resolverlo
- **Ejemplo**: "Corregido bug en cálculo de precios", "Reemplazado hardware defectuoso"

**Notas adicionales** (opcional):
- Información adicional relevante
- Pasos adicionales tomados
- Referencias o enlaces útiles

**Fecha de resolución**:
- Por defecto: fecha actual
- Puedes cambiarla si se resolvió antes

### Paso 5: Confirmar Resolución
1. Revisa la información
2. Haz clic en **"Confirmar Resolución"**
3. El problema cambia de estado a "Resuelto"
4. Todos los usuarios son notificados (si está configurado)

## Estados de Problemas

### 🔴 Abierto
- Problema reportado, aún no resuelto
- Requiere atención
- Visible en el tablón como pendiente

### 🟡 En Proceso
- Alguien está trabajando en el problema
- Puedes cambiar manualmente a este estado
- Indica que hay progreso

### 🟢 Resuelto
- Problema solucionado
- Ya no requiere acción
- Se mantiene en el historial

### 🔵 Cerrado
- Problema resuelto y cerrado definitivamente
- No se esperan más acciones
- Puede archivarse

## Seguimiento de Problemas

### Vista de Problemas Abiertos
- Filtra por **"Problemas"** y estado **"Abierto"**
- Ve todos los problemas pendientes de resolución
- Útil para priorizar trabajo

### Historial de Resolución
- Cada problema resuelto mantiene:
  - Fecha de reporte
  - Fecha de resolución
  - Tiempo de resolución
  - Persona que lo resolvió
  - Solución aplicada

### Estadísticas
- **Tasa de resolución**: % de problemas resueltos
- **Tiempo promedio**: Tiempo promedio para resolver
- **Problemas por categoría**: Distribución de problemas
- **Más comunes**: Tipos de problemas más frecuentes

## Comentarios y Actualizaciones

### Agregar Comentarios
- Puedes comentar en cualquier problema
- Útil para:
  - Proporcionar más información
  - Hacer preguntas
  - Actualizar sobre el progreso
  - Sugerir soluciones

### Notificaciones de Comentarios
- Recibes notificación cuando hay nuevos comentarios
- Especialmente útil si reportaste el problema
- Permite seguir el progreso sin abrir constantemente

## Reabrir Problemas

Si un problema resuelto vuelve a ocurrir:

1. Abre el problema resuelto
2. Haz clic en **"Reabrir Problema"**
3. Explica por qué se reabre
4. El problema vuelve a estado "Abierto"
5. El historial previo se mantiene

## Mejores Prácticas

- ✅ **Resuelve rápido**: No dejes problemas abiertos por mucho tiempo
- ✅ **Documenta bien**: Describe claramente la solución
- ✅ **Comunica**: Notifica a quien reportó el problema
- ✅ **Aprende**: Revisa problemas comunes para prevenir futuros`,
      en: `# Problem Resolution on the Board

## Mark Problems as Resolved

When a problem posted on the board is resolved, it's important to mark it as resolved to:

- ✅ Inform team it's already solved
- ✅ Keep board updated
- ✅ Improve organization and tracking
- ✅ Generate resolution statistics

## Resolution Process

### Step 1: Review Problem
1. Open the problem you want to resolve
2. Read all details
3. Verify you fully understand the issue
4. Review comments or previous updates

### Step 2: Resolve Problem
1. Take necessary actions to resolve the issue
2. Document what you did (optional but recommended)
3. Verify the problem is effectively resolved

### Step 3: Mark as Resolved
1. Click **"Mark as Resolved"** button
2. A form appears to complete

### Step 4: Complete Resolution Information

**Applied solution** (required):
- Briefly describe what was done to resolve it
- **Example**: "Fixed bug in price calculation", "Replaced defective hardware"

**Additional notes** (optional):
- Additional relevant information
- Additional steps taken
- Useful references or links

**Resolution date**:
- Default: current date
- You can change it if resolved earlier

### Step 5: Confirm Resolution
1. Review information
2. Click **"Confirm Resolution"**
3. Problem changes status to "Resolved"
4. All users are notified (if configured)

## Problem Statuses

### 🔴 Open
- Problem reported, not yet resolved
- Requires attention
- Visible on board as pending

### 🟡 In Progress
- Someone is working on the problem
- You can manually change to this status
- Indicates there's progress

### 🟢 Resolved
- Problem solved
- No longer requires action
- Maintained in history

### 🔵 Closed
- Problem resolved and definitively closed
- No further actions expected
- Can be archived

## Problem Tracking

### Open Problems View
- Filter by **"Problems"** and status **"Open"**
- See all problems pending resolution
- Useful for prioritizing work

### Resolution History
- Each resolved problem maintains:
  - Report date
  - Resolution date
  - Resolution time
  - Person who resolved it
  - Applied solution

### Statistics
- **Resolution rate**: % of problems resolved
- **Average time**: Average time to resolve
- **Problems by category**: Problem distribution
- **Most common**: Most frequent problem types

## Comments and Updates

### Add Comments
- You can comment on any problem
- Useful for:
  - Providing more information
  - Asking questions
  - Updating on progress
  - Suggesting solutions

### Comment Notifications
- Receive notification when there are new comments
- Especially useful if you reported the problem
- Allows tracking progress without constantly opening

## Reopen Problems

If a resolved problem occurs again:

1. Open the resolved problem
2. Click **"Reopen Problem"**
3. Explain why it's being reopened
4. Problem returns to "Open" status
5. Previous history is maintained

## Best Practices

- ✅ **Resolve quickly**: Don't leave problems open for long
- ✅ **Document well**: Clearly describe the solution
- ✅ **Communicate**: Notify who reported the problem
- ✅ **Learn**: Review common problems to prevent future ones`
    },
    tags: ['tablón', 'problemas', 'resolución'],
    order: 3
  }
]
