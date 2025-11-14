import { HelpArticle } from '../help-categories'

export const dashboardArticles: HelpArticle[] = [
  {
    id: 'vista-general-dashboard',
    categoryId: 'dashboard',
    title: {
      es: 'Vista General del Dashboard',
      en: 'Dashboard Overview'
    },
    description: {
      es: 'Entiende las métricas y KPIs principales',
      en: 'Understand the main metrics and KPIs'
    },
    content: {
      es: `# Vista General del Dashboard

El dashboard es tu centro de control donde verás toda la información importante de tu negocio.

## Métricas Principales

### Ocupación
- Porcentaje de unidades ocupadas
- Tendencias del último mes
- Comparación con períodos anteriores

### Ingresos
- Ingresos del mes actual
- Proyección mensual
- Comparación con meses anteriores

### Clientes Activos
- Número total de clientes
- Nuevos clientes este mes
- Clientes con contratos activos

### Facturas Pendientes
- Cantidad de facturas sin pagar
- Monto total pendiente
- Alertas de vencimiento

## Alertas Urgentes

El sistema te alerta sobre:
- Pagos vencidos
- Contratos próximos a vencer
- Unidades disponibles sin reservar
- Problemas que requieren atención

## Acciones Rápidas

Desde el dashboard puedes:
- Crear un nuevo contrato
- Registrar un pago
- Agregar una unidad
- Ver reportes`,
      en: `# Dashboard Overview

The dashboard is your control center where you'll see all important business information.

## Main Metrics

### Occupancy
- Percentage of occupied units
- Last month trends
- Comparison with previous periods

### Revenue
- Current month revenue
- Monthly projection
- Comparison with previous months

### Active Customers
- Total number of customers
- New customers this month
- Customers with active contracts

### Pending Invoices
- Number of unpaid invoices
- Total pending amount
- Expiration alerts

## Urgent Alerts

The system alerts you about:
- Overdue payments
- Contracts about to expire
- Available units without reservation
- Issues requiring attention

## Quick Actions

From the dashboard you can:
- Create a new contract
- Register a payment
- Add a unit
- View reports`
    },
    tags: ['dashboard', 'métricas', 'kpi'],
    order: 1,
    featured: true
  },
  {
    id: 'metricas-kpis',
    categoryId: 'dashboard',
    title: {
      es: 'Métricas y KPIs Principales',
      en: 'Main Metrics and KPIs'
    },
    description: {
      es: 'Aprende a interpretar las métricas del dashboard',
      en: 'Learn to interpret dashboard metrics'
    },
    content: {
      es: `# Métricas y KPIs Principales

## Ocupación

### Tasa de Ocupación
- Porcentaje de unidades ocupadas vs disponibles
- Se calcula en tiempo real
- Incluye unidades reservadas

### Ocupación por Superficie
- m² ocupados vs disponibles
- Útil para optimizar espacios

### Ocupación por Volumen
- m³ ocupados vs disponibles
- Para unidades con altura variable

## Ingresos

### Ingresos Mensuales Recurrentes (MRR)
- Suma de todos los pagos mensuales activos
- Proyección basada en contratos vigentes

### Ingresos Totales
- Ingresos del mes actual
- Comparación con meses anteriores
- Tendencias de crecimiento

## Clientes

### Clientes Activos
- Clientes con contratos vigentes
- Nuevos clientes del mes
- Tasa de retención

### Valor por Cliente
- Ingreso promedio por cliente
- Útil para estrategias de pricing

## Eficiencia

### Tiempo Promedio de Ocupación
- Cuánto tiempo tarda una unidad en ocuparse
- Desde que queda disponible hasta que se alquila

### Tasa de Renovación
- Porcentaje de contratos que se renuevan
- Indicador de satisfacción del cliente`,
      en: `# Main Metrics and KPIs

## Occupancy

### Occupancy Rate
- Percentage of occupied vs available units
- Calculated in real time
- Includes reserved units

### Occupancy by Surface
- m² occupied vs available
- Useful for optimizing spaces

### Occupancy by Volume
- m³ occupied vs available
- For units with variable height

## Revenue

### Monthly Recurring Revenue (MRR)
- Sum of all active monthly payments
- Projection based on active contracts

### Total Revenue
- Current month revenue
- Comparison with previous months
- Growth trends

## Customers

### Active Customers
- Customers with active contracts
- New customers this month
- Retention rate

### Value per Customer
- Average revenue per customer
- Useful for pricing strategies

## Efficiency

### Average Occupancy Time
- How long it takes for a unit to be occupied
- From available to rented

### Renewal Rate
- Percentage of contracts that renew
- Customer satisfaction indicator`
    },
    tags: ['métricas', 'kpi', 'analytics'],
    order: 2
  },
  {
    id: 'alertas-notificaciones',
    categoryId: 'dashboard',
    title: {
      es: 'Alertas y Notificaciones',
      en: 'Alerts and Notifications'
    },
    description: {
      es: 'Gestiona las alertas del sistema',
      en: 'Manage system alerts'
    },
    content: {
      es: `# Alertas y Notificaciones

## Tipos de Alertas

### Alertas Urgentes
- **Pagos Vencidos**: Pagos que han pasado su fecha de vencimiento
- **Contratos por Vencer**: Contratos que expiran en los próximos 7 días
- **Unidades Disponibles**: Unidades que llevan más de 30 días disponibles

### Alertas Informativas
- **Nuevas Reservas**: Reservas recibidas desde el widget
- **Pagos Recibidos**: Confirmación de pagos procesados
- **Renovaciones**: Contratos que se han renovado automáticamente

## Configurar Notificaciones

1. Ve a Configuración > Notificaciones
2. Selecciona qué alertas quieres recibir
3. Elige el método de notificación:
   - Email
   - Notificaciones en la app
   - Ambos

## Gestionar Alertas

- **Marcar como Leída**: Haz clic en la alerta para marcarla
- **Resolver**: Toma acción directamente desde la alerta
- **Descartar**: Si no requiere acción inmediata

## Filtros

Puedes filtrar alertas por:
- Tipo
- Urgencia
- Fecha
- Estado (leída/no leída)`,
      en: `# Alerts and Notifications

## Alert Types

### Urgent Alerts
- **Overdue Payments**: Payments that have passed their due date
- **Expiring Contracts**: Contracts expiring in the next 7 days
- **Available Units**: Units that have been available for more than 30 days

### Informative Alerts
- **New Reservations**: Reservations received from the widget
- **Payments Received**: Payment processing confirmations
- **Renewals**: Contracts that have been automatically renewed

## Configure Notifications

1. Go to Settings > Notifications
2. Select which alerts you want to receive
3. Choose notification method:
   - Email
   - In-app notifications
   - Both

## Manage Alerts

- **Mark as Read**: Click the alert to mark it
- **Resolve**: Take action directly from the alert
- **Dismiss**: If it doesn't require immediate action

## Filters

You can filter alerts by:
- Type
- Urgency
- Date
- Status (read/unread)`
    },
    tags: ['alertas', 'notificaciones'],
    order: 3
  },
]
