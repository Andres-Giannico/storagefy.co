import { HelpArticle } from '../help-categories'

export const pagosArticles: HelpArticle[] = [
  {
    id: 'crear-pagos',
    categoryId: 'pagos',
    title: { es: 'Crear y Gestionar Pagos', en: 'Create and Manage Payments' },
    description: { es: 'Registra pagos y genera links automáticos', en: 'Record payments and generate automatic links' },
    content: {
      es: `# Crear y Gestionar Pagos

## 1. Acceder al Formulario de Pago

![Formulario de Pago](/images/help/form_pago.webp)
*Formulario completo de pago con desglose de conceptos, métodos de pago y opciones de recordatorios automáticos*

1. En el Dashboard, ve a la sección **Pagos**
2. Haz clic en el botón **Nuevo Pago**
   Se abrirá un formulario completo organizado en tarjetas

## 2. Seleccionar Contrato

**Información del Pago:**
- Selecciona el **contrato** del cliente desde el desplegable
- El sistema carga automáticamente:
  - Información del cliente
  - Unidades asociadas al contrato
  - Precio por ciclo del contrato
  - Moneda (EUR por defecto)

**Validación:**
- El contrato es obligatorio
- Solo se muestran contratos activos de tu organización

## 3. Definir Período y Fechas

**Período del Pago:**
- **Fecha de Inicio**: Primer día del período que se está pagando
- **Fecha de Fin**: Último día del período
- **Fecha de Pago**: Fecha en que se realizó o realizará el pago (por defecto hoy)

**Ejemplo:**
- Período: 1 de enero - 31 de enero
- Fecha de pago: 5 de febrero (pago recibido después del período)

## 4. Desglose de Pagos

El sistema permite crear un **desglose** con múltiples conceptos en un solo pago:

**Agregar Conceptos:**
1. Haz clic en **"Agregar"** en la tarjeta "Desglose de Pagos"
2. Para cada concepto, define:
   - **Método de Pago**: Selecciona cómo se pagó este concepto
   - **Monto**: Cantidad específica de este concepto
   - **Descripción** (opcional): Detalle del concepto

**Métodos de Pago Disponibles:**

**Métodos Manuales:**
- **Efectivo (CASH)**: Pago en efectivo recibido físicamente
- **Transferencia Bancaria (BANK_TRANSFER)**: Transferencia recibida en cuenta bancaria
- **Tarjeta TPV (TPV)**: Pago con tarjeta en terminal físico
- **Bizum**: Pago mediante Bizum
- **Cheque (CHECK)**: Cheque recibido
- **Revolut**: Pago mediante Revolut
- **Otro (OTHER)**: Otro método no listado

**Métodos Online (requieren configuración):**
- **Pago vía Link (PAYMENT_LINK)**: Link de pago público con Stripe/Redsys
- **Stripe SEPA**: Domiciliación SEPA procesada por Stripe

**Características del Desglose:**
- Puedes agregar múltiples conceptos
- El total se calcula automáticamente sumando todos los conceptos
- Cada concepto puede tener un método de pago diferente
- Si usas **PAYMENT_LINK**, solo puede haber un concepto (el sistema lo genera automáticamente)

## 5. Crear Link de Pago (Opcional)

Si seleccionas **"Pago vía Link"** como método:

**Requisitos:**
- Debes tener **Stripe** o **Redsys** configurado en Configuración → Pasarelas de Pago
- El pago debe estar en estado **PENDIENTE**

**Proceso:**
1. Selecciona **"Pago vía Link"** en el desglose
2. El sistema genera automáticamente:
   - Un **token único** de 64 caracteres
   - Una **URL pública** del tipo: https://storagefy.app/pay/abc123...
   - El link expira después de **30 días**

**Características del Link:**
- **Público**: El cliente no necesita crear cuenta
- **Seguro**: Procesado por Stripe/Redsys
- **Informativo**: Muestra desglose completo (subtotal + IVA 21%)
- **Único**: Solo se puede usar una vez

**Enviar el Link:**
- **Copiar link**: Botón para copiar la URL al portapapeles
- **Enviar por Email**: Envía el link directamente al email del cliente
- **Enviar por WhatsApp**: Abre WhatsApp con el link pre-formateado

## 6. Notas y Recordatorios

**Notas Adicionales:**
- Campo de texto libre para anotaciones sobre el pago
- Ejemplo: "Cliente pagó en efectivo en recepción", "Referencia transferencia: TRF-12345"

**Recordatorio Automático:**
- **Enviar recordatorio**: Activa/desactiva el envío automático de recordatorio por email
- **Días antes del vencimiento**: Configura cuántos días antes enviar el recordatorio (1, 3, 5, 7, 10 días)
- **Requisito**: El cliente debe tener email configurado

**Cómo Funciona:**
- El sistema ejecuta un cron job diario a las 9:00 AM
- Busca pagos pendientes con recordatorio activado
- Si faltan exactamente los días configurados, envía el email automáticamente
- El recordatorio solo se envía una vez por pago

## 7. Guardar el Pago

1. Revisa que todos los campos estén correctos
2. Verifica que el total del desglose coincida con el monto esperado
3. Haz clic en **"Guardar Pago"** o **"Actualizar Pago"** (si estás editando)
4. El sistema valida:
   - Que el contrato esté seleccionado
   - Que haya al menos un concepto en el desglose
   - Que el total sea mayor a 0

## 8. Estados del Pago

Después de guardar, el pago puede tener estos estados:

- **PENDIENTE**: Pago creado, esperando recibir el pago
- **PENDING_LINK**: Pago con link generado, esperando que el cliente pague
- **PAID**: Pago completado exitosamente
- **PARTIAL**: Pago parcial recibido
- **FAILED**: Pago fallido (ej. tarjeta rechazada)
- **CANCELLED**: Pago cancelado
- **REFUNDED**: Pago reembolsado

## 9. Editar y Eliminar Pagos

**Para editar:**
- Abre la lista de pagos
- Haz clic en el botón de editar (icono de lápiz)
- Modifica los campos necesarios
- Guarda los cambios

**Para eliminar:**
- Haz clic en el botón de eliminar (icono de papelera)
- Confirma la eliminación
- **Advertencia**: Los pagos pagados no deberían eliminarse para mantener el historial

## 10. Visualización de Pagos

**Vista de Tabla (Desktop):**
- Muestra: número de pago, cliente, período, fecha, monto, método, estado
- Permite expandir cada fila para ver detalles completos
- Botones de acción: ver detalles, editar, crear link, enviar link, crear factura

**Vista de Tarjetas (Móvil):**
- Diseño optimizado para pantallas pequeñas
- Muestra información esencial de forma clara

## Próximos Pasos

- Configura **pasarelas de pago** (Stripe/Redsys) para habilitar links de pago
- Crea **pagos recurrentes** para automatizar cobros periódicos
- Configura **SEPA Direct Debit** para domiciliaciones bancarias automáticas
- Revisa los **recordatorios automáticos** para reducir morosidad

> **Tip**: Usa el desglose de pagos cuando un cliente paga con múltiples métodos. Por ejemplo, si paga parte en efectivo y parte con tarjeta, crea dos conceptos en el mismo pago.`,
      en: `# Create and Manage Payments

## 1. Access the Payment Form

![Payment Form](/images/help/form_pago.webp)
*Complete payment form with breakdown of items, payment methods, and automatic reminder options*

1. In the Dashboard, go to the **Payments** section
2. Click the **New Payment** button
   A complete form organized in cards will open

## 2. Select Contract

**Payment Information:**
- Select the customer's **contract** from the dropdown
- The system automatically loads:
  - Customer information
  - Units associated with the contract
  - Price per cycle of the contract
  - Currency (EUR by default)

**Validation:**
- Contract is required
- Only active contracts from your organization are shown

## 3. Define Period and Dates

**Payment Period:**
- **Start Date**: First day of the period being paid
- **End Date**: Last day of the period
- **Payment Date**: Date when payment was or will be made (defaults to today)

**Example:**
- Period: January 1 - January 31
- Payment date: February 5 (payment received after the period)

## 4. Payment Breakdown

The system allows creating a **breakdown** with multiple items in a single payment:

**Add Items:**
1. Click **"Add"** in the "Payment Breakdown" card
2. For each item, define:
   - **Payment Method**: Select how this item was paid
   - **Amount**: Specific amount for this item
   - **Description** (optional): Detail of the item

**Available Payment Methods:**

**Manual Methods:**
- **Cash (CASH)**: Cash payment received physically
- **Bank Transfer (BANK_TRANSFER)**: Transfer received in bank account
- **TPV Card (TPV)**: Card payment on physical terminal
- **Bizum**: Payment via Bizum
- **Check (CHECK)**: Check received
- **Revolut**: Payment via Revolut
- **Other (OTHER)**: Other method not listed

**Online Methods (require configuration):**
- **Payment via Link (PAYMENT_LINK)**: Public payment link with Stripe/Redsys
- **Stripe SEPA**: SEPA direct debit processed by Stripe

**Breakdown Features:**
- You can add multiple items
- Total is calculated automatically by summing all items
- Each item can have a different payment method
- If you use **PAYMENT_LINK**, there can only be one item (system generates it automatically)

## 5. Create Payment Link (Optional)

If you select **"Payment via Link"** as method:

**Requirements:**
- You must have **Stripe** or **Redsys** configured in Settings → Payment Gateways
- Payment must be in **PENDING** status

**Process:**
1. Select **"Payment via Link"** in the breakdown
2. The system automatically generates:
   - A **unique token** of 64 characters
   - A **public URL** like: https://storagefy.app/pay/abc123...
   - The link expires after **30 days**

**Link Features:**
- **Public**: Customer doesn't need to create an account
- **Secure**: Processed by Stripe/Redsys
- **Informative**: Shows complete breakdown (subtotal + 21% VAT)
- **Unique**: Can only be used once

**Send the Link:**
- **Copy link**: Button to copy URL to clipboard
- **Send by Email**: Sends the link directly to customer's email
- **Send by WhatsApp**: Opens WhatsApp with pre-formatted link

## 6. Notes and Reminders

**Additional Notes:**
- Free text field for notes about the payment
- Example: "Customer paid cash at reception", "Transfer reference: TRF-12345"

**Automatic Reminder:**
- **Send reminder**: Enable/disable automatic email reminder
- **Days before due date**: Configure how many days before to send reminder (1, 3, 5, 7, 10 days)
- **Requirement**: Customer must have email configured

**How It Works:**
- System runs a daily cron job at 9:00 AM
- Searches for pending payments with reminder enabled
- If exactly the configured days remain, sends email automatically
- Reminder is only sent once per payment

## 7. Save the Payment

1. Review that all fields are correct
2. Verify that breakdown total matches expected amount
3. Click **"Save Payment"** or **"Update Payment"** (if editing)
4. System validates:
   - That contract is selected
   - That there is at least one item in breakdown
   - That total is greater than 0

## 8. Payment Statuses

After saving, payment can have these statuses:

- **PENDING**: Payment created, waiting to receive payment
- **PENDING_LINK**: Payment with link generated, waiting for customer to pay
- **PAID**: Payment completed successfully
- **PARTIAL**: Partial payment received
- **FAILED**: Payment failed (e.g., card declined)
- **CANCELLED**: Payment cancelled
- **REFUNDED**: Payment refunded

## 9. Edit and Delete Payments

**To edit:**
- Open the payment list
- Click the edit button (pencil icon)
- Modify necessary fields
- Save changes

**To delete:**
- Click the delete button (trash icon)
- Confirm deletion
- **Warning**: Paid payments should not be deleted to maintain history

## 10. Payment Display

**Table View (Desktop):**
- Shows: payment number, customer, period, date, amount, method, status
- Allows expanding each row to see complete details
- Action buttons: view details, edit, create link, send link, create invoice

**Card View (Mobile):**
- Optimized design for small screens
- Shows essential information clearly

## Next Steps

- Configure **payment gateways** (Stripe/Redsys) to enable payment links
- Create **recurring payments** to automate periodic charges
- Configure **SEPA Direct Debit** for automatic bank debits
- Review **automatic reminders** to reduce delinquency

> **Tip**: Use payment breakdown when a customer pays with multiple methods. For example, if they pay part in cash and part with card, create two items in the same payment.`
    },
    tags: ['pagos', 'crear', 'gestionar', 'desglose', 'links'],
    order: 1,
    featured: true
  },
  {
    id: 'configurar-pasarelas-pago',
    categoryId: 'pagos',
    title: { es: 'Configurar Pasarelas de Pago (Stripe y Redsys)', en: 'Configure Payment Gateways (Stripe and Redsys)' },
    description: { es: 'Configura Stripe y Redsys para aceptar pagos online', en: 'Configure Stripe and Redsys to accept online payments' },
    content: {
      es: `# Configurar Pasarelas de Pago (Stripe y Redsys)

![Configuración de Pasarelas](/images/help/investments.webp)
*Panel de configuración de Stripe y Redsys con opciones para habilitar y validar credenciales*

## 1. Acceder a la Configuración

1. Ve a **Configuración** en el menú principal
2. Busca la sección **"Pasarelas de Pago"**
3. Verás dos opciones: **Stripe** y **Redsys**

Puedes habilitar una o ambas pasarelas. Si ambas están habilitadas, tus clientes podrán elegir cuál usar.

## 2. Configurar Stripe

### Requisitos Previos

- Cuenta de Stripe creada en [stripe.com](https://stripe.com)
- Claves de API obtenidas desde el Dashboard de Stripe

### Pasos de Configuración

**2.1. Habilitar Stripe:**
- Activa el toggle **"Habilitar pagos con Stripe"**

**2.2. Configurar Claves de API:**
- **Clave Secreta**: Obtén tu clave secreta desde Stripe Dashboard → Developers → API keys
  - Formato: \`sk_test_...\` (modo prueba) o \`sk_live_...\` (producción)
  - **Importante**: Nunca compartas esta clave públicamente
- **Clave Pública**: Obtén tu clave pública desde el mismo lugar
  - Formato: \`pk_test_...\` (modo prueba) o \`pk_live_...\` (producción)
  - Esta clave se usa en el frontend y es segura de exponer

**2.3. Validar Claves:**
- Haz clic en **"Validar Claves"**
- El sistema verifica que las claves sean válidas y correspondan a la misma cuenta
- Verás un indicador verde (✓) si son válidas o rojo (✗) si hay error

**2.4. Configurar Webhook (Requerido para SEPA):**
- **Webhook Secret**: Necesario si vas a usar SEPA Direct Debit
- Obtén el secret desde Stripe Dashboard → Developers → Webhooks
- URL del webhook: \`https://storagefy.app/api/sepa/webhook\`
- Eventos requeridos:
  - \`setup_intent.succeeded\` (OBLIGATORIO)
  - \`mandate.updated\`
  - \`payment_intent.succeeded\`
  - \`payment_intent.payment_failed\`
- Haz clic en **"Verificar Webhook"** para validar la configuración

**2.5. Ver Métodos de Pago Activos:**
- Haz clic en **"Actualizar"** para ver qué métodos de pago están habilitados en tu cuenta Stripe
- Se mostrarán tarjetas, SEPA, y otros métodos disponibles

### Ventajas de Stripe

- **Alcance global**: Funciona en todo el mundo
- **Múltiples métodos**: Tarjetas, SEPA, Apple Pay, Google Pay, etc.
- **API moderna**: Fácil integración y documentación excelente
- **Comisiones**: 1.5% + 0.25€ (tarjetas europeas) / 2.5% + 0.25€ (internacionales)

## 3. Configurar Redsys

### Requisitos Previos

- Contrato con un banco español que ofrezca TPV Virtual de Redsys
- Credenciales proporcionadas por tu banco:
  - Código de Comercio (FUC)
  - Terminal
  - Clave Secreta

### Pasos de Configuración

**3.1. Habilitar Redsys:**
- Activa el toggle **"Habilitar pagos con Redsys"**

**3.2. Seleccionar Entorno:**
- **Pruebas (Test)**: Para probar antes de producción
- **Producción**: Para pagos reales

**3.3. Credenciales de Prueba (Solo para Testing):**
Si estás en modo prueba, puedes usar estas credenciales genéricas:
- **Código de Comercio**: 999008881
- **Terminal**: 001
- **Clave**: sq7HjrUOBfKmC576ILgskD5srU870gJ7

**3.4. Configurar Credenciales de Producción:**
Cuando tengas tus credenciales reales del banco:
- **Código de Comercio (FUC)**: Tu código único de comercio
- **Terminal**: Número de terminal asignado (típicamente "001")
- **Clave Secreta**: Clave SHA-256 proporcionada por tu banco

**3.5. Validar Credenciales:**
- Haz clic en **"Validar Credenciales"**
- El sistema verifica que las credenciales sean correctas
- Verás un mensaje de éxito si todo está bien

### Ventajas de Redsys

- **Comisiones más bajas**: 0.3% - 0.6% (negociadas con el banco)
- **Métodos locales**: Soporte para Bizum y tarjetas españolas
- **Cumplimiento normativo**: PSD2 y normativas europeas
- **Integración bancaria**: Conexión directa con bancos españoles

## 4. Comparación: Stripe vs Redsys

| Característica | Stripe | Redsys |
|---------------|--------|--------|
| **Comisiones** | 1.5% + 0.25€ (EU) / 2.5% + 0.25€ (Intl) | 0.3% - 0.6% (negociado) |
| **Alcance** | Global | Principalmente España |
| **Facilidad** | Muy fácil | Requiere más configuración |
| **Métodos** | Tarjetas, SEPA, Apple Pay, etc. | Tarjetas, Bizum |
| **Soporte** | Directo y amplio | A través del banco |

## 5. Usar Ambas Pasarelas

Si habilitas ambas pasarelas:
- Tus clientes verán ambas opciones al pagar
- Pueden elegir la que prefieran
- Útil para ofrecer flexibilidad y optimizar comisiones

## 6. Solución de Problemas

### Las claves de Stripe no se validan
- Verifica que copiaste las claves completas (incluyendo prefijo sk_/pk_)
- Asegúrate de usar claves del mismo entorno (ambas test o ambas live)
- Revisa que no haya espacios extra al inicio o final

### El webhook de Stripe no funciona
- Verifica que configuraste la URL correcta en Stripe Dashboard
- Asegúrate de agregar todos los eventos requeridos, especialmente \`setup_intent.succeeded\`
- En desarrollo local, usa Stripe CLI: \`stripe listen --forward-to http://localhost:3000/api/sepa/webhook\`

### Las credenciales de Redsys no se validan
- Verifica que estás usando el entorno correcto (test vs producción)
- Confirma que copiaste las credenciales exactamente como las proporcionó el banco
- En modo prueba, usa las credenciales genéricas proporcionadas

### Los pagos no se procesan
- Verifica que la pasarela esté habilitada
- Revisa los logs del servidor para ver errores específicos
- Confirma que las credenciales siguen siendo válidas

## Próximos Pasos

- Una vez configuradas las pasarelas, puedes crear **links de pago** desde el formulario de pagos
- Configura **SEPA Direct Debit** para domiciliaciones automáticas (requiere Stripe)
- Crea **pagos recurrentes** con métodos automáticos

> **Tip**: Empieza con Stripe si necesitas algo rápido y fácil. Considera Redsys si buscas comisiones más bajas y operas principalmente en España.`,
      en: `# Configure Payment Gateways (Stripe and Redsys)

![Payment Gateways Configuration](/images/help/investments.webp)
*Stripe and Redsys configuration panel with options to enable and validate credentials*

## 1. Access Settings

1. Go to **Settings** in the main menu
2. Find the **"Payment Gateways"** section
3. You'll see two options: **Stripe** and **Redsys**

You can enable one or both gateways. If both are enabled, your customers can choose which one to use.

## 2. Configure Stripe

### Prerequisites

- Stripe account created at [stripe.com](https://stripe.com)
- API keys obtained from Stripe Dashboard

### Configuration Steps

**2.1. Enable Stripe:**
- Activate the toggle **"Enable Stripe payments"**

**2.2. Configure API Keys:**
- **Secret Key**: Get your secret key from Stripe Dashboard → Developers → API keys
  - Format: \`sk_test_...\` (test mode) or \`sk_live_...\` (production)
  - **Important**: Never share this key publicly
- **Publishable Key**: Get your publishable key from the same place
  - Format: \`pk_test_...\` (test mode) or \`pk_live_...\` (production)
  - This key is used in the frontend and is safe to expose

**2.3. Validate Keys:**
- Click **"Validate Keys"**
- The system verifies that the keys are valid and correspond to the same account
- You'll see a green indicator (✓) if valid or red (✗) if there's an error

**2.4. Configure Webhook (Required for SEPA):**
- **Webhook Secret**: Required if you're going to use SEPA Direct Debit
- Get the secret from Stripe Dashboard → Developers → Webhooks
- Webhook URL: \`https://storagefy.app/api/sepa/webhook\`
- Required events:
  - \`setup_intent.succeeded\` (MANDATORY)
  - \`mandate.updated\`
  - \`payment_intent.succeeded\`
  - \`payment_intent.payment_failed\`
- Click **"Verify Webhook"** to validate the configuration

**2.5. View Active Payment Methods:**
- Click **"Update"** to see which payment methods are enabled in your Stripe account
- Cards, SEPA, and other available methods will be displayed

### Stripe Advantages

- **Global reach**: Works worldwide
- **Multiple methods**: Cards, SEPA, Apple Pay, Google Pay, etc.
- **Modern API**: Easy integration and excellent documentation
- **Fees**: 1.5% + €0.25 (European cards) / 2.5% + €0.25 (international)

## 3. Configure Redsys

### Prerequisites

- Contract with a Spanish bank that offers Redsys Virtual TPV
- Credentials provided by your bank:
  - Merchant Code (FUC)
  - Terminal
  - Secret Key

### Configuration Steps

**3.1. Enable Redsys:**
- Activate the toggle **"Enable Redsys payments"**

**3.2. Select Environment:**
- **Test**: For testing before production
- **Production**: For real payments

**3.3. Test Credentials (Testing Only):**
If you're in test mode, you can use these generic credentials:
- **Merchant Code**: 999008881
- **Terminal**: 001
- **Key**: sq7HjrUOBfKmC576ILgskD5srU870gJ7

**3.4. Configure Production Credentials:**
When you have your real credentials from the bank:
- **Merchant Code (FUC)**: Your unique merchant code
- **Terminal**: Assigned terminal number (typically "001")
- **Secret Key**: SHA-256 key provided by your bank

**3.5. Validate Credentials:**
- Click **"Validate Credentials"**
- The system verifies that the credentials are correct
- You'll see a success message if everything is OK

### Redsys Advantages

- **Lower fees**: 0.3% - 0.6% (negotiated with bank)
- **Local methods**: Support for Bizum and Spanish cards
- **Regulatory compliance**: PSD2 and European regulations
- **Bank integration**: Direct connection with Spanish banks

## 4. Comparison: Stripe vs Redsys

| Feature | Stripe | Redsys |
|---------|--------|--------|
| **Fees** | 1.5% + €0.25 (EU) / 2.5% + €0.25 (Intl) | 0.3% - 0.6% (negotiated) |
| **Reach** | Global | Mainly Spain |
| **Ease** | Very easy | Requires more configuration |
| **Methods** | Cards, SEPA, Apple Pay, etc. | Cards, Bizum |
| **Support** | Direct and extensive | Through bank |

## 5. Use Both Gateways

If you enable both gateways:
- Your customers will see both options when paying
- They can choose the one they prefer
- Useful for offering flexibility and optimizing fees

## 6. Troubleshooting

### Stripe keys don't validate
- Verify that you copied the complete keys (including sk_/pk_ prefix)
- Make sure you're using keys from the same environment (both test or both live)
- Check that there are no extra spaces at the beginning or end

### Stripe webhook doesn't work
- Verify that you configured the correct URL in Stripe Dashboard
- Make sure you added all required events, especially \`setup_intent.succeeded\`
- In local development, use Stripe CLI: \`stripe listen --forward-to http://localhost:3000/api/sepa/webhook\`

### Redsys credentials don't validate
- Verify that you're using the correct environment (test vs production)
- Confirm that you copied the credentials exactly as provided by the bank
- In test mode, use the generic credentials provided

### Payments don't process
- Verify that the gateway is enabled
- Check server logs for specific errors
- Confirm that credentials are still valid

## Next Steps

- Once gateways are configured, you can create **payment links** from the payment form
- Configure **SEPA Direct Debit** for automatic debits (requires Stripe)
- Create **recurring payments** with automatic methods

> **Tip**: Start with Stripe if you need something quick and easy. Consider Redsys if you're looking for lower fees and operate mainly in Spain.`
    },
    tags: ['pagos', 'stripe', 'redsys', 'configuración', 'pasarelas'],
    order: 2
  },
  {
    id: 'recordatorios-automaticos',
    categoryId: 'pagos',
    title: { es: 'Recordatorios Automáticos de Pago', en: 'Automatic Payment Reminders' },
    description: { es: 'Configura recordatorios para reducir morosidad', en: 'Configure reminders to reduce delinquency' },
    content: {
      es: `# Recordatorios Automáticos de Pago

## 1. Activar Recordatorios al Crear un Pago

Cuando creas un nuevo pago, puedes activar el recordatorio automático:

**Pasos:**
1. En el formulario de pago, busca la tarjeta **"Recordatorio Automático"**
2. Activa el toggle **"Enviar recordatorio"**
3. Selecciona **"Días antes del vencimiento"**:
   - 1 día antes
   - 3 días antes
   - 5 días antes (recomendado)
   - 7 días antes
   - 10 días antes

**Requisitos:**
- El cliente debe tener un **email configurado** en su ficha
- Si el cliente no tiene email, el toggle estará deshabilitado con un mensaje informativo

## 2. Cómo Funciona el Sistema

**Proceso Automático:**
- El sistema ejecuta un **cron job diario** a las **9:00 AM**
- Busca todos los pagos con:
  - Estado **PENDIENTE**
  - Recordatorio activado
  - Recordatorio aún no enviado
- Para cada pago, calcula los días restantes hasta la fecha de vencimiento
- Si faltan **exactamente** los días configurados, envía el email automáticamente
- Marca el recordatorio como enviado para evitar duplicados

**Ejemplo:**
- Pago creado con vencimiento: 15 de febrero
- Recordatorio configurado: 5 días antes
- El sistema enviará el email el **10 de febrero** (5 días antes)
- El recordatorio solo se envía **una vez** por pago

## 3. Contenido del Email de Recordatorio

El email incluye:
- **Información del cliente**: Nombre completo
- **Detalles del pago**: Monto, período, fecha de vencimiento
- **Información del contrato**: Número de contrato, unidades
- **Advertencia de vencimiento**: Días restantes hasta el vencimiento
- **Link de pago** (si está disponible): Para pagar directamente desde el email

## 4. Casos Especiales

**Cliente sin email:**
- El recordatorio se omite automáticamente
- No se genera error, simplemente no se envía

**Recordatorio ya enviado:**
- Si el recordatorio ya fue enviado previamente, se omite
- Evita duplicados

**Faltan menos días:**
- Si configuraste 5 días pero ya solo faltan 2, el recordatorio no se envía
- El sistema solo envía cuando faltan exactamente los días configurados

**Pago ya pagado:**
- Si el estado del pago es **PAID**, el recordatorio se omite
- No tiene sentido recordar un pago ya completado

**Fecha de vencimiento no configurada:**
- Si el pago no tiene fecha de vencimiento configurada, el recordatorio no se puede calcular
- Se omite automáticamente

## 5. Editar Recordatorios

**Para modificar un recordatorio existente:**
1. Abre el pago desde la lista
2. Haz clic en **"Editar"**
3. Modifica la configuración del recordatorio:
   - Activa/desactiva el toggle
   - Cambia los días antes del vencimiento
4. Guarda los cambios

**Nota**: Si el recordatorio ya fue enviado previamente, no se volverá a enviar aunque cambies la configuración.

## 6. Reducción de Morosidad

**Estadísticas:**
- Los recordatorios automáticos pueden reducir la morosidad hasta en un **80%**
- Los clientes aprecian ser recordados antes del vencimiento
- Reduce llamadas y seguimientos manuales

**Mejores Prácticas:**
- Configura recordatorios a **5 días** antes del vencimiento (balance entre anticipación y urgencia)
- Asegúrate de que todos tus clientes tengan email configurado
- Revisa periódicamente los pagos pendientes para verificar que los recordatorios se están enviando

## 7. Monitoreo

**Verificar que los recordatorios se envían:**
- En la lista de pagos, verás un indicador cuando el recordatorio fue enviado
- Los logs del sistema muestran detalles de cada envío

**Solución de Problemas:**
- Si el recordatorio no se envía, verifica:
  1. Que el cliente tenga email configurado
  2. Que la fecha de vencimiento esté correcta
  3. Que falten exactamente los días configurados
  4. Que el cron job esté configurado correctamente en producción

## Próximos Pasos

- Configura recordatorios para todos tus pagos pendientes
- Considera crear **pagos recurrentes** con recordatorios automáticos
- Revisa las estadísticas de morosidad antes y después de activar recordatorios

> **Tip**: Los recordatorios funcionan mejor cuando se combinan con **links de pago**. El cliente recibe el recordatorio y puede pagar directamente desde el email.`,
      en: `# Automatic Payment Reminders

## 1. Enable Reminders When Creating a Payment

When creating a new payment, you can enable automatic reminder:

**Steps:**
1. In the payment form, find the **"Automatic Reminder"** card
2. Activate the toggle **"Send reminder"**
3. Select **"Days before due date"**:
   - 1 day before
   - 3 days before
   - 5 days before (recommended)
   - 7 days before
   - 10 days before

**Requirements:**
- The customer must have an **email configured** in their profile
- If the customer doesn't have email, the toggle will be disabled with an informative message

## 2. How the System Works

**Automatic Process:**
- The system runs a **daily cron job** at **9:00 AM**
- Searches for all payments with:
  - **PENDING** status
  - Reminder enabled
  - Reminder not yet sent
- For each payment, calculates days remaining until due date
- If exactly the configured days remain, sends email automatically
- Marks reminder as sent to avoid duplicates

**Example:**
- Payment created with due date: February 15
- Reminder configured: 5 days before
- System will send email on **February 10** (5 days before)
- Reminder is only sent **once** per payment

## 3. Reminder Email Content

The email includes:
- **Customer information**: Full name
- **Payment details**: Amount, period, due date
- **Contract information**: Contract number, units
- **Due date warning**: Days remaining until due date
- **Payment link** (if available): To pay directly from email

## 4. Special Cases

**Customer without email:**
- Reminder is automatically skipped
- No error is generated, it simply doesn't send

**Reminder already sent:**
- If reminder was already sent previously, it is skipped
- Prevents duplicates

**Fewer days remaining:**
- If you configured 5 days but only 2 remain, reminder is not sent
- System only sends when exactly the configured days remain

**Payment already paid:**
- If payment status is **PAID**, reminder is skipped
- No point in reminding about an already completed payment

**Due date not configured:**
- If payment doesn't have due date configured, reminder cannot be calculated
- Automatically skipped

## 5. Edit Reminders

**To modify an existing reminder:**
1. Open the payment from the list
2. Click **"Edit"**
3. Modify reminder configuration:
   - Activate/deactivate toggle
   - Change days before due date
4. Save changes

**Note**: If reminder was already sent previously, it won't be sent again even if you change configuration.

## 6. Delinquency Reduction

**Statistics:**
- Automatic reminders can reduce delinquency by up to **80%**
- Customers appreciate being reminded before due date
- Reduces manual calls and follow-ups

**Best Practices:**
- Configure reminders **5 days** before due date (balance between anticipation and urgency)
- Ensure all your customers have email configured
- Periodically review pending payments to verify reminders are being sent

## 7. Monitoring

**Verify reminders are being sent:**
- In the payment list, you'll see an indicator when reminder was sent
- System logs show details of each send

**Troubleshooting:**
- If reminder doesn't send, verify:
  1. Customer has email configured
  2. Due date is correct
  3. Exactly the configured days remain
  4. Cron job is configured correctly in production

## Next Steps

- Configure reminders for all your pending payments
- Consider creating **recurring payments** with automatic reminders
- Review delinquency statistics before and after enabling reminders

> **Tip**: Reminders work best when combined with **payment links**. Customer receives reminder and can pay directly from email.`
    },
    tags: ['recordatorios', 'pagos', 'automatización'],
    order: 3
  },
  {
    id: 'pagos-recurrentes',
    categoryId: 'pagos',
    title: { es: 'Pagos Recurrentes Automáticos', en: 'Automatic Recurring Payments' },
    description: { es: 'Configura pagos que se generan automáticamente según una frecuencia', en: 'Configure payments that are automatically generated according to a frequency' },
    content: {
      es: `# Pagos Recurrentes Automáticos

## 1. ¿Qué son los Pagos Recurrentes?

Los pagos recurrentes permiten **automatizar** la generación de pagos periódicos para contratos activos. En lugar de crear cada pago manualmente, defines un "schedule" (programación) y el sistema genera los pagos automáticamente según la frecuencia configurada.

**Ventajas:**
- **Ahorro de tiempo**: No necesitas crear cada pago manualmente
- **Reducción de errores**: El sistema calcula fechas y montos automáticamente
- **Automatización completa**: Puede enviar links de pago y procesar cargos SEPA automáticamente

## 2. Crear un Schedule de Pago Recurrente

**Acceso:**
1. Ve a **Pagos** → **Pagos Recurrentes**
2. Haz clic en **"Crear Pago Recurrente"**

**Configuración Básica:**

**2.1. Seleccionar Contrato:**
- Elige el contrato para el cual crear el schedule
- Solo se muestran contratos activos

**2.2. Frecuencia de Pago:**
- **Diario (DAILY)**: Genera un pago cada día
- **Semanal (WEEKLY)**: Genera un pago cada semana
- **Quincenal (BIWEEKLY)**: Genera un pago cada 15 días
- **Mensual (MONTHLY)**: Genera un pago cada mes (más común)
- **Trimestral (QUARTERLY)**: Genera un pago cada 3 meses
- **Anual (YEARLY)**: Genera un pago cada año

**2.3. Día de Facturación:**
- Selecciona el día del mes en que se generará el pago
- Ejemplo: Si seleccionas día 5, el pago se generará el día 5 de cada mes

**2.4. Fecha de Inicio:**
- Define cuándo comenzará a generar pagos
- El primer pago se generará en esta fecha

**2.5. Fecha de Fin (Opcional):**
- Si defines una fecha de fin, el schedule dejará de generar pagos después de esa fecha
- Si no defines fecha de fin, el schedule continuará indefinidamente hasta que lo desactives

**2.6. Número de Pagos (Opcional):**
- Alternativa a fecha de fin
- Define cuántos pagos generar en total
- Ejemplo: Si configuras 12 pagos mensuales, generará 12 pagos y luego se detendrá

## 3. Método de Pago Recurrente

Debes seleccionar cómo se procesará cada pago generado:

**3.1. Pendiente de Asignar (PENDING):**
- El pago se crea pero **no se procesa automáticamente**
- Requiere consolidación bancaria manual
- Útil cuando recibes pagos por transferencia o efectivo

**3.2. SEPA Direct Debit:**
- **Cobro automático** mediante domiciliación bancaria
- Requiere que el cliente tenga un **mandato SEPA activo**
- El sistema carga automáticamente desde la cuenta bancaria del cliente
- **Requisitos**: IBAN del cliente y mandato SEPA configurado

**3.3. Payment Link:**
- Genera un **link de pago** automáticamente
- Envía el link por email al cliente (si está activado)
- El cliente paga con tarjeta cuando recibe el link
- **Requisitos**: Email del cliente y Stripe/Redsys configurado

**3.4. Bank API (Próximamente):**
- Integración directa con APIs bancarias
- No disponible todavía

## 4. Configuración Avanzada

**4.1. Envío Automático de Links:**
- Si seleccionaste **Payment Link** como método
- Activa **"Enviar link automáticamente"** para que el sistema envíe el link por email al cliente cuando se genere el pago
- **Requisito**: El cliente debe tener email configurado

**4.2. Recordatorios:**
- Activa **"Enviar recordatorio"** para recordar al cliente antes del vencimiento
- Configura **"Días antes"** para definir cuándo enviar el recordatorio
- Funciona igual que los recordatorios de pagos manuales

**4.3. Crear Pagos Antes:**
- Por defecto: 0 días (el pago se crea el mismo día del vencimiento)
- Puedes configurar días antes para crear el pago con anticipación
- Ejemplo: Si configuras 3 días antes, el pago se creará 3 días antes de la fecha de facturación

**4.4. Monto del Pago:**
- Por defecto, usa el precio mensual del contrato
- Puedes personalizar el monto si es diferente

**4.5. Notas:**
- Campo de texto libre para anotaciones sobre el schedule
- Útil para recordar detalles específicos de este schedule

## 5. Generación Automática de Pagos

**Proceso:**
- El sistema ejecuta un **cron job diario** a las **8:00 AM UTC**
- Busca schedules activos cuya fecha de próximo pago sea hoy o anterior
- Para cada schedule encontrado:
  1. Genera un nuevo pago con los datos configurados
  2. Calcula la siguiente fecha de pago según la frecuencia
  3. Actualiza la fecha del próximo pago del schedule
  4. Si el envío automático de links está activo, envía el link por email
  5. Si el método es SEPA, programa el cargo para la fecha correspondiente

**Ejemplo:**
- Schedule mensual con día de facturación: 5
- Fecha de inicio: 5 de enero
- El sistema generará pagos el: 5 de enero, 5 de febrero, 5 de marzo, etc.

## 6. Procesar Cargos SEPA Automáticamente

Si configuraste **SEPA Direct Debit** como método:

**Proceso:**
- El sistema ejecuta un **cron job diario** a las **10:00 AM UTC**
- Busca pagos recurrentes con método SEPA cuya fecha de cargo sea hoy o anterior
- Para cada pago encontrado:
  1. Ejecuta el cargo usando Stripe Payment Intent
  2. Actualiza el estado del pago según el resultado:
     - **PAID**: Si el cargo fue exitoso
     - **FAILED**: Si el cargo fue rechazado
  3. Envía notificación al cliente

**Estados del Mandato SEPA:**
- **PENDING**: Mandato creado pero no confirmado por el cliente
- **ACTIVE**: Mandato activo, se pueden procesar cargos
- **INACTIVE**: Mandato cancelado o expirado

## 7. Gestionar Schedules

**Activar/Desactivar:**
- Puedes activar o desactivar un schedule sin eliminarlo
- Un schedule desactivado no generará más pagos hasta que lo reactives

**Editar:**
- Abre el schedule desde la lista
- Haz clic en **"Editar"**
- Modifica la configuración necesaria
- Guarda los cambios

**Eliminar:**
- Haz clic en **"Eliminar"**
- Confirma la eliminación
- **Advertencia**: Esto no elimina los pagos ya generados, solo el schedule

**Generar Pago de Prueba:**
- Puedes generar un pago de prueba manualmente para verificar que todo funciona
- Útil para probar antes de activar el schedule

## 8. Estadísticas de Pagos Recurrentes

En la página de Pagos Recurrentes verás:
- **Total de schedules**: Cantidad total de schedules creados
- **Schedules activos**: Cantidad de schedules que están generando pagos
- **Pagos generados**: Total de pagos generados por schedules
- **Pagos pagados**: Cantidad de pagos generados que ya fueron pagados

## 9. Casos de Uso Comunes

**Caso 1: Alquiler Mensual con Link de Pago**
- Frecuencia: Mensual
- Día: 1 de cada mes
- Método: Payment Link
- Envío automático: Activado
- El cliente recibe el link cada mes y paga con tarjeta

**Caso 2: Alquiler Mensual con Domiciliación SEPA**
- Frecuencia: Mensual
- Día: 5 de cada mes
- Método: SEPA Direct Debit
- El sistema carga automáticamente desde la cuenta del cliente

**Caso 3: Pago Trimestral con Consolidación Manual**
- Frecuencia: Trimestral
- Método: Pendiente de asignar
- El sistema genera el pago pero tú lo marcas como pagado cuando recibes la transferencia

## Próximos Pasos

- Configura **SEPA Direct Debit** para habilitar cargos automáticos
- Revisa los **pagos generados** periódicamente para verificar que todo funciona correctamente
- Combina con **recordatorios automáticos** para maximizar la tasa de cobro

> **Tip**: Los pagos recurrentes son ideales para contratos de largo plazo. Configura el método de pago según las preferencias de tus clientes: SEPA para automatización completa, Payment Link para flexibilidad.`,
      en: `# Automatic Recurring Payments

## 1. What are Recurring Payments?

Recurring payments allow you to **automate** the generation of periodic payments for active contracts. Instead of creating each payment manually, you define a "schedule" and the system generates payments automatically according to the configured frequency.

**Advantages:**
- **Time savings**: You don't need to create each payment manually
- **Error reduction**: System calculates dates and amounts automatically
- **Complete automation**: Can send payment links and process SEPA charges automatically

## 2. Create a Recurring Payment Schedule

**Access:**
1. Go to **Payments** → **Recurring Payments**
2. Click **"Create Recurring Payment"**

**Basic Configuration:**

**2.1. Select Contract:**
- Choose the contract for which to create the schedule
- Only active contracts are shown

**2.2. Payment Frequency:**
- **Daily (DAILY)**: Generates a payment every day
- **Weekly (WEEKLY)**: Generates a payment every week
- **Biweekly (BIWEEKLY)**: Generates a payment every 15 days
- **Monthly (MONTHLY)**: Generates a payment every month (most common)
- **Quarterly (QUARTERLY)**: Generates a payment every 3 months
- **Yearly (YEARLY)**: Generates a payment every year

**2.3. Billing Day:**
- Select the day of the month when payment will be generated
- Example: If you select day 5, payment will be generated on the 5th of each month

**2.4. Start Date:**
- Define when payment generation will begin
- First payment will be generated on this date

**2.5. End Date (Optional):**
- If you define an end date, schedule will stop generating payments after that date
- If you don't define an end date, schedule will continue indefinitely until you deactivate it

**2.6. Number of Payments (Optional):**
- Alternative to end date
- Define how many payments to generate in total
- Example: If you configure 12 monthly payments, it will generate 12 payments and then stop

## 3. Recurring Payment Method

You must select how each generated payment will be processed:

**3.1. Pending Assignment (PENDING):**
- Payment is created but **not processed automatically**
- Requires manual bank reconciliation
- Useful when you receive payments by transfer or cash

**3.2. SEPA Direct Debit:**
- **Automatic charge** via bank direct debit
- Requires customer to have an **active SEPA mandate**
- System automatically charges from customer's bank account
- **Requirements**: Customer IBAN and SEPA mandate configured

**3.3. Payment Link:**
- Automatically generates a **payment link**
- Sends link by email to customer (if enabled)
- Customer pays with card when receiving the link
- **Requirements**: Customer email and Stripe/Redsys configured

**3.4. Bank API (Coming Soon):**
- Direct integration with bank APIs
- Not available yet

## 4. Advanced Configuration

**4.1. Automatic Link Sending:**
- If you selected **Payment Link** as method
- Activate **"Send link automatically"** for system to send link by email to customer when payment is generated
- **Requirement**: Customer must have email configured

**4.2. Reminders:**
- Activate **"Send reminder"** to remind customer before due date
- Configure **"Days before"** to define when to send reminder
- Works the same as manual payment reminders

**4.3. Create Payments Before:**
- Default: 0 days (payment created on same day as due date)
- You can configure days before to create payment in advance
- Example: If you configure 3 days before, payment will be created 3 days before billing date

**4.4. Payment Amount:**
- By default, uses monthly contract price
- You can customize amount if different

**4.5. Notes:**
- Free text field for notes about the schedule
- Useful for remembering specific details of this schedule

## 5. Automatic Payment Generation

**Process:**
- System runs a **daily cron job** at **8:00 AM UTC**
- Searches for active schedules whose next payment date is today or earlier
- For each schedule found:
  1. Generates a new payment with configured data
  2. Calculates next payment date according to frequency
  3. Updates schedule's next payment date
  4. If automatic link sending is active, sends link by email
  5. If method is SEPA, schedules charge for corresponding date

**Example:**
- Monthly schedule with billing day: 5
- Start date: January 5
- System will generate payments on: January 5, February 5, March 5, etc.

## 6. Process SEPA Charges Automatically

If you configured **SEPA Direct Debit** as method:

**Process:**
- System runs a **daily cron job** at **10:00 AM UTC**
- Searches for recurring payments with SEPA method whose charge date is today or earlier
- For each payment found:
  1. Executes charge using Stripe Payment Intent
  2. Updates payment status according to result:
     - **PAID**: If charge was successful
     - **FAILED**: If charge was rejected
  3. Sends notification to customer

**SEPA Mandate Statuses:**
- **PENDING**: Mandate created but not confirmed by customer
- **ACTIVE**: Active mandate, charges can be processed
- **INACTIVE**: Mandate cancelled or expired

## 7. Manage Schedules

**Activate/Deactivate:**
- You can activate or deactivate a schedule without deleting it
- A deactivated schedule won't generate more payments until you reactivate it

**Edit:**
- Open schedule from list
- Click **"Edit"**
- Modify necessary configuration
- Save changes

**Delete:**
- Click **"Delete"**
- Confirm deletion
- **Warning**: This doesn't delete already generated payments, only the schedule

**Generate Test Payment:**
- You can manually generate a test payment to verify everything works
- Useful for testing before activating schedule

## 8. Recurring Payment Statistics

In the Recurring Payments page you'll see:
- **Total schedules**: Total number of schedules created
- **Active schedules**: Number of schedules generating payments
- **Generated payments**: Total payments generated by schedules
- **Paid payments**: Number of generated payments that were already paid

## 9. Common Use Cases

**Case 1: Monthly Rental with Payment Link**
- Frequency: Monthly
- Day: 1st of each month
- Method: Payment Link
- Automatic sending: Enabled
- Customer receives link each month and pays with card

**Case 2: Monthly Rental with SEPA Direct Debit**
- Frequency: Monthly
- Day: 5th of each month
- Method: SEPA Direct Debit
- System automatically charges from customer's account

**Case 3: Quarterly Payment with Manual Reconciliation**
- Frequency: Quarterly
- Method: Pending assignment
- System generates payment but you mark it as paid when you receive transfer

## Next Steps

- Configure **SEPA Direct Debit** to enable automatic charges
- Periodically review **generated payments** to verify everything works correctly
- Combine with **automatic reminders** to maximize collection rate

> **Tip**: Recurring payments are ideal for long-term contracts. Configure payment method according to your customers' preferences: SEPA for complete automation, Payment Link for flexibility.`
    },
    tags: ['pagos', 'recurrentes', 'automatización', 'schedule'],
    order: 4
  },
  {
    id: 'sepa-direct-debit',
    categoryId: 'pagos',
    title: { es: 'SEPA Direct Debit - Domiciliación Bancaria', en: 'SEPA Direct Debit - Bank Direct Debit' },
    description: { es: 'Configura domiciliaciones bancarias automáticas con SEPA', en: 'Configure automatic bank direct debits with SEPA' },
    content: {
      es: `# SEPA Direct Debit - Domiciliación Bancaria

## 1. ¿Qué es SEPA Direct Debit?

SEPA (Single Euro Payments Area) Direct Debit es un sistema que permite **cargar automáticamente** pagos desde la cuenta bancaria del cliente mediante domiciliación bancaria. Es muy común en Europa y especialmente útil para pagos recurrentes.

**Ventajas:**
- **Automatización completa**: No requiere acción del cliente después de la configuración inicial
- **Bajo costo**: Comisiones más bajas que tarjetas de crédito
- **Confiabilidad**: Sistema bancario europeo regulado
- **Ideal para pagos recurrentes**: Perfecto para alquileres mensuales

**Requisitos:**
- Cliente debe tener una cuenta bancaria en la zona SEPA (Europa)
- Cliente debe proporcionar su **IBAN**
- Cliente debe **aceptar el mandato SEPA** (autorización legal)

## 2. Configurar SEPA para un Cliente

### 2.1. Acceder a la Configuración SEPA

**Desde Pagos Recurrentes:**
1. Ve a **Pagos** → **Pagos Recurrentes**
2. Crea o edita un schedule de pago recurrente
3. Selecciona **"SEPA Direct Debit"** como método de pago
4. Haz clic en **"Configurar SEPA"**

**Desde el Contrato:**
- También puedes configurar SEPA directamente desde la ficha del cliente o contrato

### 2.2. Ingresar IBAN del Cliente

**Formato del IBAN:**
- El IBAN debe tener el formato estándar europeo
- Ejemplo español: ES91 2100 0418 4502 0005 1332
- El sistema valida automáticamente el formato

**Seguridad:**
- El IBAN se **encripta** antes de guardarse en la base de datos
- Solo usuarios autorizados pueden ver el IBAN completo
- Se usa encriptación AES-256-GCM

**Ingresar IBAN:**
1. En el campo **"IBAN"**, ingresa el número de cuenta del cliente
2. El sistema valida el formato automáticamente
3. Puedes usar el IBAN para generar el documento legal del mandato

### 2.3. Crear el Mandato SEPA

**Proceso:**
1. El sistema crea un **Setup Intent** en Stripe
2. Se genera un **link de confirmación** único para el cliente
3. El cliente debe hacer clic en el link y confirmar el mandato
4. Una vez confirmado, el mandato queda **ACTIVE** y se pueden procesar cargos

**Link de Confirmación:**
- El sistema genera un link único y seguro
- El link expira después de un tiempo determinado
- Puedes enviarlo por email al cliente o compartirlo manualmente

**Enviar Link por Email:**
- Activa **"Enviar email al cliente"** para enviar el link automáticamente
- El cliente recibirá un email con instrucciones y el link de confirmación
- El email incluye información legal sobre el mandato SEPA

### 2.4. Documento Legal del Mandato

El sistema puede generar un **documento PDF** con el mandato SEPA que incluye:
- Información del cliente (nombre, IBAN parcial)
- Información de la empresa (nombre, Creditor Identifier)
- Términos y condiciones del mandato
- Firma del cliente (digital)

**Generar Documento:**
- Haz clic en **"Generar Documento PDF"**
- El documento se descarga automáticamente
- Puedes guardarlo para tus registros legales

## 3. Confirmar el Mandato

### 3.1. Proceso del Cliente

**Cuando el cliente recibe el link:**
1. Hace clic en el link de confirmación
2. Ve una página con:
   - Información del mandato
   - Términos y condiciones
   - Formulario de confirmación
3. Ingresa su información y confirma el mandato
4. El sistema actualiza el estado a **ACTIVE**

### 3.2. Estados del Mandato

- **PENDING**: Mandato creado pero no confirmado por el cliente
- **ACTIVE**: Mandato activo, se pueden procesar cargos automáticamente
- **INACTIVE**: Mandato cancelado o expirado

**Verificar Estado:**
- El estado se muestra en la ficha del cliente
- También aparece en los schedules de pagos recurrentes
- Un indicador visual muestra si el mandato está activo

## 4. Procesar Cargos SEPA

### 4.1. Cargos Automáticos

Si configuraste un **pago recurrente** con método SEPA:

**Proceso:**
- El sistema ejecuta un cron job diario a las **10:00 AM UTC**
- Busca pagos con:
  - Método SEPA configurado
  - Mandato **ACTIVE**
  - Fecha de cargo sea hoy o anterior
- Ejecuta el cargo usando Stripe Payment Intent
- Actualiza el estado del pago según el resultado

**Estados del Cargo:**
- **PAID**: Cargo exitoso, dinero recibido
- **FAILED**: Cargo rechazado (fondos insuficientes, cuenta cerrada, etc.)

### 4.2. Cargos Manuales

También puedes procesar cargos SEPA manualmente:
1. Crea un pago con método **Stripe SEPA**
2. El sistema intentará cargar inmediatamente
3. Verás el resultado en tiempo real

### 4.3. Notificaciones

**Cuando un cargo es exitoso:**
- El cliente recibe una notificación por email
- El pago se marca como **PAID**
- Se actualiza el estado del contrato

**Cuando un cargo falla:**
- El cliente recibe una notificación
- El pago se marca como **FAILED**
- Puedes intentar cargar nuevamente más tarde

## 5. Gestionar Mandatos SEPA

### 5.1. Ver Mandatos Activos

**Desde la Lista de Clientes:**
- Cada cliente con mandato SEPA activo muestra un indicador visual
- Puedes ver el estado del mandato en la ficha del cliente

**Desde Pagos Recurrentes:**
- Los schedules con SEPA muestran el estado del mandato
- Si el mandato está inactivo, el schedule no procesará cargos

### 5.2. Cancelar un Mandato

**Proceso:**
1. Abre la configuración SEPA del cliente
2. Haz clic en **"Cancelar Mandato"**
3. Confirma la cancelación
4. El mandato pasa a estado **INACTIVE**
5. No se podrán procesar más cargos automáticos

**Nota**: Los pagos ya generados pero no procesados seguirán pendientes. Deberás procesarlos manualmente o cancelarlos.

### 5.3. Renovar un Mandato

Si un mandato expira o se cancela:
1. Crea un nuevo mandato SEPA para el cliente
2. Envía el nuevo link de confirmación
3. Una vez confirmado, el nuevo mandato estará activo

## 6. Configuración Técnica Requerida

### 6.1. Stripe Configurado

**Requisitos:**
- Debes tener **Stripe configurado** en Configuración → Pasarelas de Pago
- Las claves de API deben ser válidas
- El webhook debe estar configurado correctamente

### 6.2. Webhook de Stripe

**Eventos Requeridos:**
- \`setup_intent.succeeded\` (OBLIGATORIO para confirmar mandatos)
- \`mandate.updated\` (para actualizar estados de mandatos)
- \`payment_intent.succeeded\` (para confirmar cargos exitosos)
- \`payment_intent.payment_failed\` (para manejar cargos fallidos)

**URL del Webhook:**
- \`https://storagefy.app/api/sepa/webhook\`
- Configúralo en Stripe Dashboard → Developers → Webhooks

### 6.3. Creditor Identifier

El sistema obtiene automáticamente tu **Creditor Identifier** de Stripe. Este es un identificador único que Stripe asigna a tu cuenta y que se usa en todos los mandatos SEPA.

## 7. Aspectos Legales

### 7.1. Información al Cliente

El cliente debe recibir:
- Información clara sobre el mandato SEPA
- Términos y condiciones
- Derecho a cancelar el mandato en cualquier momento
- Información sobre cómo cancelar

### 7.2. Documentación

**Guarda:**
- El documento PDF del mandato
- La fecha de aceptación del mandato
- El IBAN del cliente (encriptado en el sistema)
- Historial de cargos procesados

### 7.3. Cumplimiento Normativo

SEPA cumple con:
- **PSD2** (Payment Services Directive 2)
- Normativas europeas de pagos
- Regulaciones bancarias españolas

## 8. Solución de Problemas

### El mandato no se confirma
- Verifica que el link de confirmación no haya expirado
- Asegúrate de que el webhook esté configurado correctamente
- Revisa los logs del servidor para ver errores específicos

### Los cargos SEPA fallan
- Verifica que el mandato esté en estado **ACTIVE**
- Confirma que el cliente tenga fondos suficientes
- Revisa que el IBAN sea correcto
- Algunos bancos pueden rechazar cargos por políticas internas

### El webhook no funciona
- Verifica que configuraste todos los eventos requeridos
- Asegúrate de que la URL del webhook sea correcta
- En desarrollo local, usa Stripe CLI para probar

## Próximos Pasos

- Configura SEPA para tus clientes de pagos recurrentes
- Crea schedules de pagos recurrentes con método SEPA
- Monitorea los cargos automáticos periódicamente

> **Tip**: SEPA es ideal para clientes que prefieren pagos automáticos sin intervención. Combínalo con recordatorios para mantener a los clientes informados antes de cada cargo.`,
      en: `# SEPA Direct Debit - Bank Direct Debit

## 1. What is SEPA Direct Debit?

SEPA (Single Euro Payments Area) Direct Debit is a system that allows **automatic charging** of payments from the customer's bank account via direct debit. It's very common in Europe and especially useful for recurring payments.

**Advantages:**
- **Complete automation**: Doesn't require customer action after initial setup
- **Low cost**: Lower fees than credit cards
- **Reliability**: Regulated European banking system
- **Ideal for recurring payments**: Perfect for monthly rentals

**Requirements:**
- Customer must have a bank account in SEPA area (Europe)
- Customer must provide their **IBAN**
- Customer must **accept the SEPA mandate** (legal authorization)

## 2. Configure SEPA for a Customer

### 2.1. Access SEPA Configuration

**From Recurring Payments:**
1. Go to **Payments** → **Recurring Payments**
2. Create or edit a recurring payment schedule
3. Select **"SEPA Direct Debit"** as payment method
4. Click **"Configure SEPA"**

**From Contract:**
- You can also configure SEPA directly from customer or contract profile

### 2.2. Enter Customer IBAN

**IBAN Format:**
- IBAN must have standard European format
- Spanish example: ES91 2100 0418 4502 0005 1332
- System automatically validates format

**Security:**
- IBAN is **encrypted** before being saved in database
- Only authorized users can see complete IBAN
- Uses AES-256-GCM encryption

**Enter IBAN:**
1. In **"IBAN"** field, enter customer's account number
2. System automatically validates format
3. You can use IBAN to generate legal mandate document

### 2.3. Create SEPA Mandate

**Process:**
1. System creates a **Setup Intent** in Stripe
2. A unique **confirmation link** is generated for customer
3. Customer must click link and confirm mandate
4. Once confirmed, mandate becomes **ACTIVE** and charges can be processed

**Confirmation Link:**
- System generates a unique and secure link
- Link expires after a certain time
- You can send it by email to customer or share manually

**Send Link by Email:**
- Activate **"Send email to customer"** to send link automatically
- Customer receives email with instructions and confirmation link
- Email includes legal information about SEPA mandate

### 2.4. Legal Mandate Document

System can generate a **PDF document** with SEPA mandate that includes:
- Customer information (name, partial IBAN)
- Company information (name, Creditor Identifier)
- Mandate terms and conditions
- Customer signature (digital)

**Generate Document:**
- Click **"Generate PDF Document"**
- Document downloads automatically
- You can save it for your legal records

## 3. Confirm Mandate

### 3.1. Customer Process

**When customer receives link:**
1. Clicks confirmation link
2. Sees a page with:
   - Mandate information
   - Terms and conditions
   - Confirmation form
3. Enters information and confirms mandate
4. System updates status to **ACTIVE**

### 3.2. Mandate Statuses

- **PENDING**: Mandate created but not confirmed by customer
- **ACTIVE**: Active mandate, automatic charges can be processed
- **INACTIVE**: Mandate cancelled or expired

**Verify Status:**
- Status is shown in customer profile
- Also appears in recurring payment schedules
- Visual indicator shows if mandate is active

## 4. Process SEPA Charges

### 4.1. Automatic Charges

If you configured a **recurring payment** with SEPA method:

**Process:**
- System runs daily cron job at **10:00 AM UTC**
- Searches for payments with:
  - SEPA method configured
  - **ACTIVE** mandate
  - Charge date is today or earlier
- Executes charge using Stripe Payment Intent
- Updates payment status according to result

**Charge Statuses:**
- **PAID**: Successful charge, money received
- **FAILED**: Charge rejected (insufficient funds, closed account, etc.)

### 4.2. Manual Charges

You can also process SEPA charges manually:
1. Create a payment with **Stripe SEPA** method
2. System will attempt to charge immediately
3. You'll see result in real time

### 4.3. Notifications

**When charge is successful:**
- Customer receives email notification
- Payment is marked as **PAID**
- Contract status is updated

**When charge fails:**
- Customer receives notification
- Payment is marked as **FAILED**
- You can try charging again later

## 5. Manage SEPA Mandates

### 5.1. View Active Mandates

**From Customer List:**
- Each customer with active SEPA mandate shows visual indicator
- You can see mandate status in customer profile

**From Recurring Payments:**
- Schedules with SEPA show mandate status
- If mandate is inactive, schedule won't process charges

### 5.2. Cancel a Mandate

**Process:**
1. Open customer's SEPA configuration
2. Click **"Cancel Mandate"**
3. Confirm cancellation
4. Mandate changes to **INACTIVE** status
5. No more automatic charges can be processed

**Note**: Already generated but unprocessed payments will remain pending. You'll need to process them manually or cancel them.

### 5.3. Renew a Mandate

If a mandate expires or is cancelled:
1. Create a new SEPA mandate for customer
2. Send new confirmation link
3. Once confirmed, new mandate will be active

## 6. Required Technical Configuration

### 6.1. Stripe Configured

**Requirements:**
- You must have **Stripe configured** in Settings → Payment Gateways
- API keys must be valid
- Webhook must be configured correctly

### 6.2. Stripe Webhook

**Required Events:**
- \`setup_intent.succeeded\` (MANDATORY to confirm mandates)
- \`mandate.updated\` (to update mandate statuses)
- \`payment_intent.succeeded\` (to confirm successful charges)
- \`payment_intent.payment_failed\` (to handle failed charges)

**Webhook URL:**
- \`https://storagefy.app/api/sepa/webhook\`
- Configure it in Stripe Dashboard → Developers → Webhooks

### 6.3. Creditor Identifier

System automatically obtains your **Creditor Identifier** from Stripe. This is a unique identifier that Stripe assigns to your account and is used in all SEPA mandates.

## 7. Legal Aspects

### 7.1. Customer Information

Customer must receive:
- Clear information about SEPA mandate
- Terms and conditions
- Right to cancel mandate at any time
- Information on how to cancel

### 7.2. Documentation

**Save:**
- PDF document of mandate
- Mandate acceptance date
- Customer IBAN (encrypted in system)
- History of processed charges

### 7.3. Regulatory Compliance

SEPA complies with:
- **PSD2** (Payment Services Directive 2)
- European payment regulations
- Spanish banking regulations

## 8. Troubleshooting

### Mandate doesn't confirm
- Verify confirmation link hasn't expired
- Ensure webhook is configured correctly
- Check server logs for specific errors

### SEPA charges fail
- Verify mandate is in **ACTIVE** status
- Confirm customer has sufficient funds
- Check that IBAN is correct
- Some banks may reject charges due to internal policies

### Webhook doesn't work
- Verify you configured all required events
- Ensure webhook URL is correct
- In local development, use Stripe CLI to test

## Next Steps

- Configure SEPA for your recurring payment customers
- Create recurring payment schedules with SEPA method
- Monitor automatic charges periodically

> **Tip**: SEPA is ideal for customers who prefer automatic payments without intervention. Combine it with reminders to keep customers informed before each charge.`
    },
    tags: ['pagos', 'sepa', 'domiciliación', 'bancaria', 'automático'],
    order: 5
  },
]
