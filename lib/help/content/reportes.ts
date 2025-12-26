import { HelpArticle } from '../help-categories'

export const reportesArticles: HelpArticle[] = [
  {
    id: 'reportes-financieros',
    categoryId: 'reportes',
    title: { es: 'Generar Reportes Financieros', en: 'Generate Financial Reports' },
    description: { es: 'Analiza los ingresos de tu negocio', en: 'Analyze your business revenue' },
    content: {
      es: `# Generar Reportes Financieros

## Acceder a Reportes

1. Ve a **Reportes** en el menú principal
2. Selecciona **"Reportes Financieros"**
3. Verás las opciones de reportes disponibles

## Tipos de Reportes Disponibles

### Ingresos Mensuales Recurrentes (MRR)
- **Qué muestra**: Suma de todos los pagos mensuales activos
- **Utilidad**: Ver ingresos predecibles mensualmente
- **Período**: Puedes filtrar por mes, trimestre o año
- **Incluye**: Todos los contratos activos y sus pagos programados

### Ingresos Totales
- **Qué muestra**: Ingresos reales del período seleccionado
- **Utilidad**: Comparar ingresos entre diferentes períodos
- **Desglose**: Por mes, por locación, por tipo de servicio
- **Comparación**: Muestra diferencia con período anterior

### Análisis de Morosidad
- **Qué muestra**: Pagos pendientes, vencidos, y días de atraso
- **Utilidad**: Identificar clientes con pagos atrasados
- **Detalles**: Lista de pagos pendientes con fechas
- **Alertas**: Resalta pagos críticos

### Proyecciones Futuras
- **Qué muestra**: Ingresos esperados según contratos activos
- **Utilidad**: Planificar presupuesto y crecimiento
- **Período**: Hasta 12 meses adelante
- **Factores**: Considera contratos que terminan y nuevos

## Generar un Reporte

### Paso 1: Seleccionar Tipo
1. Elige el tipo de reporte que necesitas
2. Haz clic en **"Generar"**

### Paso 2: Configurar Período
- **Rango de fechas**: Selecciona fecha inicial y final
- **Rápido**: Usa presets como "Último mes", "Último trimestre", "Este año"
- **Personalizado**: Define tu propio rango

### Paso 3: Aplicar Filtros (Opcional)
- **Por locación**: Filtra por una o varias locaciones
- **Por tipo de unidad**: Solo ciertos tipos
- **Por método de pago**: Transferencia, SEPA, tarjeta, etc.
- **Por estado**: Pagos completados, pendientes, vencidos

### Paso 4: Generar
1. Haz clic en **"Generar Reporte"**
2. El sistema procesa los datos
3. El reporte aparece en pantalla
4. Puedes exportarlo en PDF o Excel

## Exportar Reportes

### Exportar a PDF
1. Haz clic en **"Exportar PDF"**
2. El sistema genera un PDF profesional
3. Incluye:
   - Gráficos y tablas
   - Logo de tu empresa
   - Fecha de generación
   - Filtros aplicados

### Exportar a Excel
1. Haz clic en **"Exportar Excel"**
2. Descarga el archivo .xlsx
3. Útil para:
   - Análisis adicional
   - Crear gráficos personalizados
   - Compartir con contabilidad

## Gráficos y Visualizaciones

Los reportes incluyen:
- **Gráficos de barras**: Comparación entre períodos
- **Gráficos de líneas**: Tendencias a lo largo del tiempo
- **Gráficos circulares**: Distribución por categorías
- **Tablas detalladas**: Datos completos en formato tabla

## Compartir Reportes

- **Enviar por email**: Comparte reportes con tu equipo
- **Programar envío**: Recibe reportes automáticamente
- **Guardar favoritos**: Guarda configuraciones de reportes frecuentes`,
      en: `# Generate Financial Reports

## Access Reports

1. Go to **Reports** in the main menu
2. Select **"Financial Reports"**
3. You'll see available report options

## Available Report Types

### Monthly Recurring Revenue (MRR)
- **What it shows**: Sum of all active monthly payments
- **Usefulness**: See predictable monthly income
- **Period**: You can filter by month, quarter or year
- **Includes**: All active contracts and their scheduled payments

### Total Revenue
- **What it shows**: Actual revenue for selected period
- **Usefulness**: Compare revenue between different periods
- **Breakdown**: By month, by location, by service type
- **Comparison**: Shows difference with previous period

### Delinquency Analysis
- **What it shows**: Pending, overdue payments, and days overdue
- **Usefulness**: Identify customers with overdue payments
- **Details**: List of pending payments with dates
- **Alerts**: Highlights critical payments

### Future Projections
- **What it shows**: Expected revenue according to active contracts
- **Usefulness**: Plan budget and growth
- **Period**: Up to 12 months ahead
- **Factors**: Considers contracts ending and new ones

## Generate a Report

### Step 1: Select Type
1. Choose the type of report you need
2. Click **"Generate"**

### Step 2: Configure Period
- **Date range**: Select start and end date
- **Quick**: Use presets like "Last month", "Last quarter", "This year"
- **Custom**: Define your own range

### Step 3: Apply Filters (Optional)
- **By location**: Filter by one or several locations
- **By unit type**: Only certain types
- **By payment method**: Transfer, SEPA, card, etc.
- **By status**: Completed, pending, overdue payments

### Step 4: Generate
1. Click **"Generate Report"**
2. System processes data
3. Report appears on screen
4. You can export it as PDF or Excel

## Export Reports

### Export to PDF
1. Click **"Export PDF"**
2. System generates a professional PDF
3. Includes:
   - Charts and tables
   - Your company logo
   - Generation date
   - Applied filters

### Export to Excel
1. Click **"Export Excel"**
2. Download .xlsx file
3. Useful for:
   - Additional analysis
   - Create custom charts
   - Share with accounting

## Charts and Visualizations

Reports include:
- **Bar charts**: Comparison between periods
- **Line charts**: Trends over time
- **Pie charts**: Distribution by categories
- **Detailed tables**: Complete data in table format

## Share Reports

- **Send by email**: Share reports with your team
- **Schedule delivery**: Receive reports automatically
- **Save favorites**: Save configurations of frequent reports`
    },
    tags: ['reportes', 'financiero'],
    order: 1,
    featured: true
  },
  {
    id: 'reportes-ocupacion',
    categoryId: 'reportes',
    title: { es: 'Reportes de Ocupación', en: 'Occupancy Reports' },
    description: { es: 'Analiza la ocupación de tus unidades por superficie y volumen', en: 'Analyze your units occupancy by surface and volume' },
    content: {
      es: `# Reportes de Ocupación

## ¿Qué Son los Reportes de Ocupación?

Los reportes de ocupación te permiten analizar cómo se está utilizando el espacio en tus locaciones, tanto por superficie (m²) como por volumen (m³).

## Tipos de Análisis

### Ocupación por Superficie (m²)
- **Qué mide**: Área ocupada vs área disponible en m²
- **Utilidad**: Optimizar distribución del espacio
- **Métrica clave**: Tasa de ocupación en %
- **Desglose**: Por locación, por tipo de unidad, por planta

### Ocupación por Volumen (m³)
- **Qué mide**: Volumen ocupado vs volumen disponible en m³
- **Utilidad**: Para unidades con altura variable o almacenes verticales
- **Métrica clave**: Porcentaje de uso del espacio vertical
- **Aplicación**: Ideal para optimizar apilamiento o altura de unidades

## Generar Reporte de Ocupación

### Paso 1: Seleccionar Métrica
1. Elige entre:
   - **Superficie (m²)**: Análisis por área
   - **Volumen (m³)**: Análisis por volumen
   - **Ambas**: Compara ambas métricas

### Paso 2: Seleccionar Período
- **Fecha específica**: Ocupación en un día determinado
- **Rango de fechas**: Evolución de la ocupación en un período
- **Mes actual**: Últimos 30 días
- **Año completo**: Análisis anual

### Paso 3: Filtrar
- **Por locación**: Una o varias locaciones
- **Por tipo de unidad**: Storage, parking, mixto
- **Por estado**: Disponible, ocupada, reservada
- **Por planta/piso**: Si aplica a tu locación

### Paso 4: Generar
1. Haz clic en **"Generar Reporte"**
2. Verás:
   - Tasa de ocupación total
   - Desglose por categorías
   - Gráficos visuales
   - Comparación con períodos anteriores

## Métricas Clave

### Tasa de Ocupación
- **Fórmula**: (Ocupado / Total) × 100
- **Interpretación**: 
  - < 60%: Espacio infrautilizado
  - 60-80%: Óptimo
  - > 80%: Alto uso, considerar expansión

### Espacio Disponible
- **Total disponible**: Área/volumen libre
- **Próximamente disponible**: Reservado pero no ocupado aún
- **En mantenimiento**: Temporalmente no disponible

### Espacio Ocupado
- **Actualmente ocupado**: En uso activo
- **Ocupación promedio**: Media del período
- **Pico de ocupación**: Máximo alcanzado

## Visualizaciones

### Gráficos de Barras
- Compara ocupación entre diferentes locaciones
- Muestra evolución mes a mes
- Facilita identificar tendencias

### Gráficos Circulares
- Distribución del espacio
- Proporción ocupada vs disponible
- Por tipo de unidad

### Heat Maps
- Mapa de calor de ocupación
- Identifica zonas más/menos utilizadas
- Útil para redistribución

## Análisis de Tendencias

### Comparación Temporal
- Ocupación mes a mes
- Identifica estacionalidad
- Predice períodos de alta/baja ocupación

### Proyecciones
- Basadas en contratos activos
- Ocupación futura esperada
- Útil para planificación

## Optimización

### Identificar Oportunidades
- Espacios infrautilizados
- Zonas con alta demanda
- Reorganización posible

### Recomendaciones
- El sistema puede sugerir:
  - Redistribución de unidades
  - Cambios de precios
  - Nuevas locaciones necesarias

## Exportar

- **PDF**: Reporte visual completo
- **Excel**: Para análisis detallado
- **Compartir**: Enviar a equipo o inversores`,
      en: `# Occupancy Reports

## What are Occupancy Reports?

Occupancy reports allow you to analyze how space is being used in your locations, both by surface (m²) and volume (m³).

## Types of Analysis

### Occupancy by Surface (m²)
- **What it measures**: Occupied area vs available area in m²
- **Usefulness**: Optimize space distribution
- **Key metric**: Occupancy rate in %
- **Breakdown**: By location, by unit type, by floor

### Occupancy by Volume (m³)
- **What it measures**: Occupied volume vs available volume in m³
- **Usefulness**: For units with variable height or vertical warehouses
- **Key metric**: Percentage of vertical space use
- **Application**: Ideal for optimizing stacking or unit height

## Generate Occupancy Report

### Step 1: Select Metric
1. Choose between:
   - **Surface (m²)**: Area analysis
   - **Volume (m³)**: Volume analysis
   - **Both**: Compare both metrics

### Step 2: Select Period
- **Specific date**: Occupancy on a specific day
- **Date range**: Occupancy evolution over a period
- **Current month**: Last 30 days
- **Full year**: Annual analysis

### Step 3: Filter
- **By location**: One or several locations
- **By unit type**: Storage, parking, mixed
- **By status**: Available, occupied, reserved
- **By floor/level**: If applicable to your location

### Step 4: Generate
1. Click **"Generate Report"**
2. You'll see:
   - Total occupancy rate
   - Breakdown by categories
   - Visual charts
   - Comparison with previous periods

## Key Metrics

### Occupancy Rate
- **Formula**: (Occupied / Total) × 100
- **Interpretation**: 
  - < 60%: Underutilized space
  - 60-80%: Optimal
  - > 80%: High use, consider expansion

### Available Space
- **Total available**: Free area/volume
- **Coming soon**: Reserved but not yet occupied
- **Under maintenance**: Temporarily unavailable

### Occupied Space
- **Currently occupied**: In active use
- **Average occupancy**: Period average
- **Peak occupancy**: Maximum reached

## Visualizations

### Bar Charts
- Compares occupancy between different locations
- Shows month-to-month evolution
- Facilitates trend identification

### Pie Charts
- Space distribution
- Occupied vs available proportion
- By unit type

### Heat Maps
- Occupancy heat map
- Identifies most/least used zones
- Useful for redistribution

## Trend Analysis

### Temporal Comparison
- Month-to-month occupancy
- Identifies seasonality
- Predicts high/low occupancy periods

### Projections
- Based on active contracts
- Expected future occupancy
- Useful for planning

## Optimization

### Identify Opportunities
- Underutilized spaces
- High demand zones
- Possible reorganization

### Recommendations
- System can suggest:
  - Unit redistribution
  - Price changes
  - New locations needed

## Export

- **PDF**: Complete visual report
- **Excel**: For detailed analysis
- **Share**: Send to team or investors`
    },
    tags: ['reportes', 'ocupación'],
    order: 2
  },
  {
    id: 'exportar-reportes',
    categoryId: 'reportes',
    title: { es: 'Exportar Reportes a PDF', en: 'Export Reports to PDF' },
    description: { es: 'Cómo exportar y compartir tus reportes', en: 'How to export and share your reports' },
    content: {
      es: `# Exportar Reportes a PDF

## Exportar un Reporte

### Paso 1: Generar el Reporte
1. Configura y genera el reporte que necesitas
2. Verifica que los datos sean correctos
3. Aplica los filtros necesarios

### Paso 2: Exportar
1. Haz clic en el botón **"Exportar PDF"**
2. El sistema genera el PDF automáticamente
3. Se descarga automáticamente a tu dispositivo

## Contenido del PDF

El PDF exportado incluye:
- **Encabezado**: Logo de tu empresa y título del reporte
- **Fecha de generación**: Fecha y hora exacta
- **Período analizado**: Rango de fechas del reporte
- **Filtros aplicados**: Qué filtros se usaron
- **Gráficos**: Todas las visualizaciones del reporte
- **Tablas de datos**: Información detallada en formato tabla
- **Pie de página**: Información de tu organización

## Personalización

### Logo y Branding
- El PDF usa el logo configurado en tu organización
- Colores de marca si están configurados
- Formato profesional

### Configuración de Exportación
- **Incluir gráficos**: Sí/No
- **Incluir tablas**: Sí/No
- **Formato**: A4, Carta, etc.
- **Orientación**: Vertical u horizontal

## Compartir Reportes

### Por Email
1. Después de exportar, haz clic en **"Compartir"**
2. Ingresa los emails de los destinatarios
3. Agrega un mensaje opcional
4. El PDF se envía automáticamente

### Descargar y Compartir Manualmente
1. Descarga el PDF
2. Compártelo por:
   - Email
   - Mensajería (WhatsApp, Slack, etc.)
   - Almacenamiento en la nube
   - Impresión

## Programar Exportación

### Reportes Automáticos
1. Ve a **Configuración** → **Reportes Automáticos**
2. Crea una nueva programación
3. Configura:
   - Tipo de reporte
   - Frecuencia (diario, semanal, mensual)
   - Destinatarios
   - Formato de exportación
4. El sistema envía reportes automáticamente

### Frecuencias Disponibles
- **Diario**: Cada día a la hora especificada
- **Semanal**: Una vez por semana (día y hora)
- **Mensual**: Primero de cada mes
- **Trimestral**: Cada 3 meses

## Guardar Configuraciones

### Favoritos
1. Después de configurar un reporte
2. Haz clic en **"Guardar como Favorito"**
3. Dale un nombre descriptivo
4. La próxima vez, selecciona el favorito para regenerar rápidamente

### Plantillas
- Crea plantillas de reportes frecuentes
- Reutiliza configuraciones
- Ahorra tiempo`,
      en: `# Export Reports to PDF

## Export a Report

### Step 1: Generate Report
1. Configure and generate the report you need
2. Verify data is correct
3. Apply necessary filters

### Step 2: Export
1. Click **"Export PDF"** button
2. System generates PDF automatically
3. Downloads automatically to your device

## PDF Content

Exported PDF includes:
- **Header**: Your company logo and report title
- **Generation date**: Exact date and time
- **Analyzed period**: Date range of report
- **Applied filters**: What filters were used
- **Charts**: All report visualizations
- **Data tables**: Detailed information in table format
- **Footer**: Your organization information

## Customization

### Logo and Branding
- PDF uses logo configured in your organization
- Brand colors if configured
- Professional format

### Export Configuration
- **Include charts**: Yes/No
- **Include tables**: Yes/No
- **Format**: A4, Letter, etc.
- **Orientation**: Portrait or landscape

## Share Reports

### By Email
1. After exporting, click **"Share"**
2. Enter recipient emails
3. Add optional message
4. PDF is sent automatically

### Download and Share Manually
1. Download PDF
2. Share via:
   - Email
   - Messaging (WhatsApp, Slack, etc.)
   - Cloud storage
   - Print

## Schedule Export

### Automatic Reports
1. Go to **Settings** → **Automatic Reports**
2. Create new schedule
3. Configure:
   - Report type
   - Frequency (daily, weekly, monthly)
   - Recipients
   - Export format
4. System sends reports automatically

### Available Frequencies
- **Daily**: Every day at specified time
- **Weekly**: Once per week (day and time)
- **Monthly**: First of each month
- **Quarterly**: Every 3 months

## Save Configurations

### Favorites
1. After configuring a report
2. Click **"Save as Favorite"**
3. Give it a descriptive name
4. Next time, select favorite to quickly regenerate

### Templates
- Create templates of frequent reports
- Reuse configurations
- Save time`
    },
    tags: ['reportes', 'exportar', 'pdf'],
    order: 3
  },
  {
    id: 'analisis-morosidad',
    categoryId: 'reportes',
    title: { es: 'Análisis de Morosidad', en: 'Delinquency Analysis' },
    description: { es: 'Identifica y gestiona pagos pendientes y vencidos', en: 'Identify and manage pending and overdue payments' },
    content: {
      es: `# Análisis de Morosidad

## ¿Qué es el Análisis de Morosidad?

El análisis de morosidad te ayuda a identificar y gestionar pagos pendientes, vencidos o con retraso, permitiéndote tomar acciones proactivas para recuperar cobros.

## Métricas Clave

### Total de Pagos Pendientes
- **Qué mide**: Suma total de montos pendientes
- **Utilidad**: Ver el impacto financiero total
- **Categorización**: Por días de vencimiento

### Días de Atraso Promedio
- **Qué mide**: Promedio de días desde el vencimiento
- **Utilidad**: Entender la gravedad del retraso
- **Interpretación**: Más días = más urgente

### Tasa de Morosidad
- **Fórmula**: (Pendiente / Total esperado) × 100
- **Utilidad**: Porcentaje de ingresos en riesgo
- **Meta**: Mantener por debajo del 5%

## Generar Reporte de Morosidad

### Paso 1: Acceder
1. Ve a **Reportes** → **Análisis de Morosidad**
2. O filtra reportes financieros por "Pagos pendientes"

### Paso 2: Configurar Filtros
- **Rango de fechas**: Período a analizar
- **Por estado**: Pendiente, Vencido, Crítico
- **Por locación**: Una o varias locaciones
- **Por días de vencimiento**: 
  - 0-30 días
  - 31-60 días
  - 61-90 días
  - Más de 90 días

### Paso 3: Generar
1. Haz clic en **"Generar Reporte"**
2. Verás:
   - Lista detallada de pagos pendientes
   - Clientes con pagos vencidos
   - Días de atraso de cada pago
   - Montos pendientes

## Categorización por Urgencia

### Verde (0-15 días)
- Pagos recientemente vencidos
- **Acción**: Enviar recordatorio amable
- **Prioridad**: Baja

### Amarillo (16-30 días)
- Pagos con retraso moderado
- **Acción**: Contactar cliente directamente
- **Prioridad**: Media

### Naranja (31-60 días)
- Pagos con retraso significativo
- **Acción**: Notificación formal y seguimiento intensivo
- **Prioridad**: Alta

### Rojo (61+ días)
- Pagos críticos
- **Acción**: Proceso de cobro o acción legal
- **Prioridad**: Crítica

## Información Detallada

Cada pago pendiente muestra:
- **Cliente**: Nombre y contacto
- **Contrato**: Contrato asociado
- **Monto**: Cantidad pendiente
- **Fecha de vencimiento**: Cuándo debía pagarse
- **Días de atraso**: Cuántos días tiene de retraso
- **Intentos de contacto**: Historial de comunicación
- **Acciones tomadas**: Qué se ha hecho para cobrar

## Acciones Recomendadas

### Para Pagos Recientes (0-15 días)
1. Enviar recordatorio automático por email
2. Verificar si el pago está en tránsito
3. Contacto amable para confirmar

### Para Pagos Moderados (16-30 días)
1. Llamada telefónica al cliente
2. Enviar recordatorio formal
3. Ofrecer opciones de pago (planes, descuentos por pronto pago)

### Para Pagos Críticos (31+ días)
1. Notificación formal de morosidad
2. Revisar términos del contrato
3. Considerar suspensión de servicio
4. Evaluar acción legal si aplica

## Seguimiento

### Historial de Comunicación
- Registra todos los contactos con el cliente
- Notas de conversaciones
- Compromisos acordados
- Fechas de seguimiento

### Actualizar Estado
- Marca pagos como "En gestión"
- Actualiza cuando se recibe el pago
- Registra resoluciones

## Exportar y Compartir

- **PDF**: Reporte completo para revisión
- **Excel**: Para análisis detallado y seguimiento
- **Compartir**: Enviar a equipo de cobranza

## Prevención

### Recomendaciones
- Configurar recordatorios automáticos antes del vencimiento
- Ofrecer múltiples métodos de pago
- Comunicar claramente términos de pago
- Seguimiento proactivo de pagos próximos a vencer`,
      en: `# Delinquency Analysis

## What is Delinquency Analysis?

Delinquency analysis helps you identify and manage pending, overdue, or late payments, allowing you to take proactive actions to recover collections.

## Key Metrics

### Total Pending Payments
- **What it measures**: Total sum of pending amounts
- **Usefulness**: See total financial impact
- **Categorization**: By days overdue

### Average Days Overdue
- **What it measures**: Average days since due date
- **Usefulness**: Understand severity of delay
- **Interpretation**: More days = more urgent

### Delinquency Rate
- **Formula**: (Pending / Total expected) × 100
- **Usefulness**: Percentage of revenue at risk
- **Target**: Keep below 5%

## Generate Delinquency Report

### Step 1: Access
1. Go to **Reports** → **Delinquency Analysis**
2. Or filter financial reports by "Pending payments"

### Step 2: Configure Filters
- **Date range**: Period to analyze
- **By status**: Pending, Overdue, Critical
- **By location**: One or several locations
- **By days overdue**: 
  - 0-30 days
  - 31-60 days
  - 61-90 days
  - More than 90 days

### Step 3: Generate
1. Click **"Generate Report"**
2. You'll see:
   - Detailed list of pending payments
   - Customers with overdue payments
   - Days overdue for each payment
   - Pending amounts

## Categorization by Urgency

### Green (0-15 days)
- Recently overdue payments
- **Action**: Send friendly reminder
- **Priority**: Low

### Yellow (16-30 days)
- Payments with moderate delay
- **Action**: Contact customer directly
- **Priority**: Medium

### Orange (31-60 days)
- Payments with significant delay
- **Action**: Formal notification and intensive follow-up
- **Priority**: High

### Red (61+ days)
- Critical payments
- **Action**: Collection process or legal action
- **Priority**: Critical

## Detailed Information

Each pending payment shows:
- **Customer**: Name and contact
- **Contract**: Associated contract
- **Amount**: Pending quantity
- **Due date**: When it should have been paid
- **Days overdue**: How many days overdue
- **Contact attempts**: Communication history
- **Actions taken**: What has been done to collect

## Recommended Actions

### For Recent Payments (0-15 days)
1. Send automatic email reminder
2. Verify if payment is in transit
3. Friendly contact to confirm

### For Moderate Payments (16-30 days)
1. Phone call to customer
2. Send formal reminder
3. Offer payment options (plans, early payment discounts)

### For Critical Payments (31+ days)
1. Formal delinquency notification
2. Review contract terms
3. Consider service suspension
4. Evaluate legal action if applicable

## Tracking

### Communication History
- Record all contacts with customer
- Conversation notes
- Agreed commitments
- Follow-up dates

### Update Status
- Mark payments as "In process"
- Update when payment is received
- Record resolutions

## Export and Share

- **PDF**: Complete report for review
- **Excel**: For detailed analysis and tracking
- **Share**: Send to collection team

## Prevention

### Recommendations
- Configure automatic reminders before due date
- Offer multiple payment methods
- Clearly communicate payment terms
- Proactive follow-up of payments nearing due date`
    },
    tags: ['reportes', 'morosidad', 'cobranza'],
    order: 4
  }
]
