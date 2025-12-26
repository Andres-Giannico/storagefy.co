import { HelpArticle } from '../help-categories'

export const facturacionArticles: HelpArticle[] = [
  {
    id: 'generar-facturas',
    categoryId: 'facturacion',
    title: { es: 'Generación Automática de Facturas', en: 'Automatic Invoice Generation' },
    description: { es: 'Las facturas se generan automáticamente', en: 'Invoices are generated automatically' },
    content: {
      es: `# Generación Automática de Facturas

![Lista de Facturas](/images/help/invoices.webp)
*Vista de todas las facturas generadas automáticamente con opciones para ver, descargar y gestionar*

Las facturas se generan automáticamente cada mes según la fecha de inicio del contrato. Puedes verlas y descargarlas en formato PDF.

![Detalle de Factura](/images/help/form_factura.webp)
*Detalle de una factura generada automáticamente mostrando desglose completo y opciones de descarga en PDF*

## Generación Automática

El sistema genera facturas automáticamente cuando:
- Se crea un nuevo contrato
- Se completa un período de pago
- Se procesa un pago exitoso

## Acceder a las Facturas

1. Ve a la sección **Facturación** en el menú principal
2. Verás todas las facturas generadas
3. Puedes filtrar por fecha, estado o cliente
4. Cada factura muestra:
   - Número de factura
   - Cliente
   - Período facturado
   - Monto total
   - Estado (Pendiente, Pagada, Vencida)

## Ver Detalle de Factura

![Vista Completa de Factura](/images/help/invoice_view.webp)
*Vista detallada de una factura mostrando todos los datos: información del emisor, cliente, líneas de factura, resumen de importes y opciones de acción*

Haz clic en cualquier factura para ver:
- Desglose completo de líneas
- IVA aplicado
- Información del cliente
- Período facturado
- Método de pago

## Descargar Facturas

- Haz clic en **"Descargar PDF"** para obtener la factura en formato PDF
- Las facturas incluyen tu logo y branding
- Formato profesional listo para enviar a clientes

## Estados de Facturas

- **Pendiente**: Factura generada, esperando pago
- **Pagada**: Factura pagada completamente
- **Vencida**: Factura con fecha de vencimiento pasada
- **Cancelada**: Factura cancelada o anulada`,
      en: `# Automatic Invoice Generation

![Invoice List](/images/help/invoices.webp)
*View of all automatically generated invoices with options to view, download, and manage*

Invoices are automatically generated each month according to the contract start date. You can view and download them in PDF format.

![Invoice Detail](/images/help/form_factura.webp)
*Detail of an automatically generated invoice showing complete breakdown and PDF download options*

## Automatic Generation

The system generates invoices automatically when:
- A new contract is created
- A payment period is completed
- A payment is successfully processed

## Access Invoices

1. Go to the **Invoicing** section in the main menu
2. You'll see all generated invoices
3. You can filter by date, status, or customer
4. Each invoice shows:
   - Invoice number
   - Customer
   - Billed period
   - Total amount
   - Status (Pending, Paid, Overdue)

## View Invoice Detail

![Complete Invoice View](/images/help/invoice_view.webp)
*Detailed invoice view showing all data: sender information, customer, invoice lines, amount summary and action options*

Click on any invoice to see:
- Complete line breakdown
- Applied VAT
- Customer information
- Billed period
- Payment method

## Download Invoices

- Click **"Download PDF"** to get the invoice in PDF format
- Invoices include your logo and branding
- Professional format ready to send to customers

## Invoice Statuses

- **Pending**: Invoice generated, waiting for payment
- **Paid**: Invoice fully paid
- **Overdue**: Invoice with past due date
- **Cancelled**: Invoice cancelled or voided`
    },
    tags: ['facturas', 'generar'],
    order: 1,
    featured: true
  },
  {
    id: 'facturacion-verifacti',
    categoryId: 'facturacion',
    title: { es: 'Facturación Electrónica con Verifacti', en: 'Electronic Invoicing with Verifacti' },
    description: { es: 'Cumple con la normativa española de facturación electrónica', en: 'Comply with Spanish electronic invoicing regulations' },
    content: {
      es: `# Facturación Electrónica con Verifacti

## ¿Qué es Verifacti?

Verifacti es una plataforma que permite **enviar facturas electrónicas directamente a la AEAT** (Agencia Estatal de Administración Tributaria) de forma automática, cumpliendo con toda la normativa española de facturación.

**Ventajas:**
- ✅ **Cumplimiento legal**: Cumple automáticamente con la normativa española
- ✅ **Envío directo a AEAT**: Las facturas se registran directamente en Hacienda
- ✅ **Códigos QR**: Cada factura incluye un código QR para verificación
- ✅ **Validación automática**: Valida NIFs y datos del cliente automáticamente
- ✅ **Trazabilidad completa**: Historial completo de todas las facturas enviadas

## Requisitos para Usar Verifacti

Para usar Verifacti necesitas:
- **NIF/CIF** de tu empresa
- **API Key de Verifacti** (proporcionada por Verifacti)
- **Configuración activa** en StorageFy

## Tipos de Factura Disponibles

StorageFy soporta estos tipos de factura según la normativa:

- **F1 - Factura completa**: Factura normal con todos los datos del cliente
- **F2 - Factura simplificada**: Para operaciones menores (sin NIF del cliente)
- **F3 - Factura rectificativa**: Para corregir facturas anteriores
- **R1-R5**: Diferentes tipos de facturas rectificativas según el caso

## Proceso de Facturación

1. **Creación de la Factura**: Se crea normalmente en StorageFy
2. **Validación de Datos**: El sistema valida todos los datos requeridos
3. **Envío a Verifacti**: Se envía automáticamente a Verifacti
4. **Registro en AEAT**: Verifacti registra la factura en la AEAT
5. **Confirmación**: Recibes confirmación con código QR y UUID

## Estados de Factura en Verifacti

- **Pendiente**: Factura enviada, esperando confirmación de AEAT
- **Correcto**: Factura registrada exitosamente en AEAT
- **Aceptada con errores**: Registrada pero con advertencias menores
- **Incorrecto**: Error en el registro (requiere corrección)
- **Duplicado**: Ya existe una factura con esos datos
- **Anulado**: Factura anulada correctamente`,
      en: `# Electronic Invoicing with Verifacti

## What is Verifacti?

Verifacti is a platform that allows you to **send electronic invoices directly to AEAT** (Spanish Tax Agency) automatically, complying with all Spanish invoicing regulations.

**Advantages:**
- ✅ **Legal compliance**: Automatically complies with Spanish regulations
- ✅ **Direct AEAT submission**: Invoices are registered directly with the tax office
- ✅ **QR codes**: Each invoice includes a QR code for verification
- ✅ **Automatic validation**: Automatically validates NIFs and customer data
- ✅ **Complete traceability**: Complete history of all submitted invoices

## Requirements to Use Verifacti

To use Verifacti you need:
- **NIF/CIF** of your company
- **Verifacti API Key** (provided by Verifacti)
- **Active configuration** in StorageFy

## Available Invoice Types

StorageFy supports these invoice types according to regulations:

- **F1 - Complete invoice**: Normal invoice with all customer data
- **F2 - Simplified invoice**: For smaller operations (without customer NIF)
- **F3 - Rectifying invoice**: To correct previous invoices
- **R1-R5**: Different types of rectifying invoices according to the case

## Invoicing Process

1. **Invoice Creation**: Created normally in StorageFy
2. **Data Validation**: System validates all required data
3. **Send to Verifacti**: Automatically sent to Verifacti
4. **AEAT Registration**: Verifacti registers the invoice with AEAT
5. **Confirmation**: You receive confirmation with QR code and UUID

## Invoice Status in Verifacti

- **Pending**: Invoice sent, awaiting AEAT confirmation
- **Correct**: Invoice successfully registered with AEAT
- **Accepted with errors**: Registered but with minor warnings
- **Incorrect**: Error in registration (requires correction)
- **Duplicate**: An invoice with those data already exists
- **Voided**: Invoice correctly voided`
    },
    tags: ['facturas', 'verifacti', 'electrónica', 'aeat'],
    order: 2,
    featured: true
  },
  {
    id: 'configurar-verifacti',
    categoryId: 'facturacion',
    title: { es: 'Configurar Verifacti', en: 'Configure Verifacti' },
    description: { es: 'Activa y configura la facturación electrónica', en: 'Activate and configure electronic invoicing' },
    content: {
      es: `# Configurar Verifacti

## 1. Obtener API Key de Verifacti

**Pasos:**
1. Contacta con Verifacti para obtener tu cuenta
2. Recibirás una **API Key** única para tu empresa
3. La API Key tiene formato: \`vf_live_...\` (producción) o \`vf_test_...\` (pruebas)

**Importante:**
- **Modo Test**: Usa el modo de pruebas para familiarizarte con el sistema
- **Modo Producción**: Solo activa cuando estés listo para enviar facturas reales

## 2. Configurar en StorageFy

**Acceso:**
1. Ve a **Configuración** → **Facturación** → **Verifacti**
2. Verás el panel de configuración de Verifacti

**Configuración Básica:**

### 2.1. Activar Verifacti
- Activa el toggle **"Habilitar Verifacti"**
- Esto activa la integración en tu organización

### 2.2. Ingresar API Key
- Pega tu **API Key de Verifacti** en el campo correspondiente
- El sistema valida automáticamente que la clave sea válida
- Haz clic en **"Validar API Key"** para verificar

### 2.3. Configurar NIF de la Empresa
- Ingresa el **NIF/CIF** de tu empresa
- Este debe coincidir con el NIF registrado en Verifacti
- El sistema valida el formato automáticamente

### 2.4. Seleccionar Entorno
- **Test**: Para pruebas (no se registra en AEAT real)
- **Producción**: Para facturas reales (se registra en AEAT)

### 2.5. Configurar Serie de Facturas
- Define la **serie** para tus facturas (ej. "A", "FAC", "2025")
- Todas las facturas usarán esta serie
- La serie debe ser consistente y seguir un patrón

### 2.6. Configurar Modo de Facturación
- **Con Verifacti**: Todas las facturas se envían automáticamente a Verifacti
- **Sin Verifacti**: Facturas locales sin registro en AEAT
- **Deshabilitado**: No se generan facturas automáticas

## 3. Validar Configuración

**Verificación:**
1. Haz clic en **"Validar Configuración"**
2. El sistema verifica:
   - Que la API Key sea válida
   - Que el NIF coincida
   - Que la conexión con Verifacti funcione
3. Verás un mensaje de éxito si todo está correcto

## 4. Modo Test vs Producción

### Modo Test (Pruebas)
- **Ventajas**: Puedes probar sin afectar registros reales
- **Limitaciones**: No se registran en AEAT
- **Uso**: Ideal para aprender y probar antes de producción

### Modo Producción
- **Ventajas**: Facturas reales registradas en AEAT
- **Requisitos**: API Key de producción válida
- **Recomendación**: Prueba primero en modo test

## 5. Verificar Estado

Una vez configurado, puedes verificar:
- **Estado de la conexión**: Si Verifacti está activo
- **Última factura enviada**: Fecha y hora
- **Facturas en proceso**: Cuántas están pendientes
- **Errores recientes**: Si hay problemas de conexión

## Próximos Pasos

- Una vez configurado, todas las facturas nuevas se enviarán automáticamente a Verifacti
- Revisa el estado de las facturas en la sección de Facturación
- Si hay errores, el sistema te notificará para que puedas corregirlos`,
      en: `# Configure Verifacti

## 1. Get Verifacti API Key

**Steps:**
1. Contact Verifacti to get your account
2. You'll receive a unique **API Key** for your company
3. The API Key has format: \`vf_live_...\` (production) or \`vf_test_...\` (testing)

**Important:**
- **Test Mode**: Use test mode to familiarize yourself with the system
- **Production Mode**: Only activate when ready to send real invoices

## 2. Configure in StorageFy

**Access:**
1. Go to **Settings** → **Invoicing** → **Verifacti**
2. You'll see the Verifacti configuration panel

**Basic Configuration:**

### 2.1. Enable Verifacti
- Activate the toggle **"Enable Verifacti"**
- This activates the integration in your organization

### 2.2. Enter API Key
- Paste your **Verifacti API Key** in the corresponding field
- System automatically validates that the key is valid
- Click **"Validate API Key"** to verify

### 2.3. Configure Company NIF
- Enter your company's **NIF/CIF**
- This must match the NIF registered in Verifacti
- System automatically validates the format

### 2.4. Select Environment
- **Test**: For testing (not registered with real AEAT)
- **Production**: For real invoices (registered with AEAT)

### 2.5. Configure Invoice Series
- Define the **series** for your invoices (e.g., "A", "FAC", "2025")
- All invoices will use this series
- Series must be consistent and follow a pattern

### 2.6. Configure Invoicing Mode
- **With Verifacti**: All invoices automatically sent to Verifacti
- **Without Verifacti**: Local invoices without AEAT registration
- **Disabled**: No automatic invoice generation

## 3. Validate Configuration

**Verification:**
1. Click **"Validate Configuration"**
2. System verifies:
   - API Key is valid
   - NIF matches
   - Connection with Verifacti works
3. You'll see a success message if everything is correct

## 4. Test Mode vs Production

### Test Mode (Testing)
- **Advantages**: You can test without affecting real records
- **Limitations**: Not registered with AEAT
- **Use**: Ideal for learning and testing before production

### Production Mode
- **Advantages**: Real invoices registered with AEAT
- **Requirements**: Valid production API Key
- **Recommendation**: Test first in test mode

## 5. Check Status

Once configured, you can verify:
- **Connection status**: If Verifacti is active
- **Last invoice sent**: Date and time
- **Invoices in process**: How many are pending
- **Recent errors**: If there are connection problems

## Next Steps

- Once configured, all new invoices will be automatically sent to Verifacti
- Review invoice status in the Invoicing section
- If there are errors, the system will notify you so you can correct them`
    },
    tags: ['verifacti', 'configuración', 'facturas'],
    order: 3
  },
  {
    id: 'crear-facturas-verifacti',
    categoryId: 'facturacion',
    title: { es: 'Crear Facturas con Verifacti', en: 'Create Invoices with Verifacti' },
    description: { es: 'Guía completa para crear facturas que se registran en AEAT', en: 'Complete guide to create invoices registered with AEAT' },
    content: {
      es: `# Crear Facturas con Verifacti

## 1. Acceder al Formulario de Factura

1. Ve a **Facturación** → **Nueva Factura**
2. El sistema detecta si Verifacti está activo
3. Verás opciones adicionales para facturación electrónica

## 2. Paso 1: Datos Básicos

### Número de Factura
- El sistema sugiere automáticamente el siguiente número
- Formato: **Serie-Año-Número** (ej. A-2025-0001)
- Puedes cambiarlo manualmente si es necesario

### Tipo de Factura
- **F1 - Factura completa**: Para clientes con NIF/CIF
- **F2 - Factura simplificada**: Para operaciones menores sin NIF
- **F3 - Factura rectificativa**: Para corregir facturas anteriores

### Fecha de Expedición
- Por defecto: fecha actual
- Debe ser la fecha en que se emite la factura
- Si la operación fue antes, usa **Fecha de Operación**

## 3. Paso 2: Datos del Cliente

### Cliente con NIF/CIF (F1)
- Selecciona el cliente desde el desplegable
- El sistema carga automáticamente:
  - Nombre completo
  - NIF/CIF
  - Dirección
  - Código postal y ciudad

### Validación de NIF
- El sistema valida el NIF automáticamente con Verifacti
- Si el NIF no es válido, verás un error
- Puedes desactivar la validación si es necesario (campo "Validar destinatario")

### Cliente sin NIF (F2)
- Para facturas simplificadas
- Solo necesitas nombre y dirección
- Ideal para operaciones menores

### Cliente Extranjero
- Si el cliente no tiene NIF español
- Selecciona **"ID Otro"**
- Elige el tipo de identificación:
  - **02**: Pasaporte
  - **03**: Documento de identidad extranjero
  - **04**: Número de identificación fiscal extranjero
- Ingresa el código del país (ISO 2 letras)
- Ingresa el número de identificación

## 4. Paso 3: Líneas de Factura

### Agregar Líneas
1. Haz clic en **"Agregar Línea"**
2. Para cada línea define:
   - **Descripción**: Concepto de la factura
   - **Base Imponible**: Monto sin IVA
   - **Tipo de Impuesto**: IVA (01), IGIC (02), IPSI (03)
   - **Tipo Impositivo**: 21%, 10%, 7.5%, 4%, etc.
   - **Cuota Repercutida**: IVA calculado automáticamente

### Cálculos Automáticos
- El sistema calcula automáticamente:
  - **IVA**: Según el tipo impositivo
  - **Total de línea**: Base + IVA
  - **Total de factura**: Suma de todas las líneas

### Líneas Exentas
- Si una línea está exenta de IVA:
  - Marca **"Operación Exenta"**
  - Selecciona el motivo (E1-E6):
    - **E1**: Exenta según art. 20
    - **E2**: Exenta según art. 21
    - **E3**: Exenta según art. 22
    - etc.

### Recargo de Equivalencia
- Si aplica recargo de equivalencia:
  - **Tipo de recargo**: 0.5%, 1.4%, 5.2%
  - **Cuota de recargo**: Se calcula automáticamente

### Retención IRPF
- Si aplica retención IRPF:
  - **Tipo de retención**: Porcentaje (ej. 15%)
  - **Importe de retención**: Se calcula automáticamente

## 5. Paso 4: Validación y Envío

### Validar Antes de Enviar
El sistema valida automáticamente:
- ✅ Todos los campos requeridos están completos
- ✅ El NIF del cliente es válido (si aplica)
- ✅ Los totales son correctos (base + IVA = total)
- ✅ La serie y número no están duplicados

### Enviar a Verifacti
1. Revisa todos los datos
2. Haz clic en **"Crear y Enviar a Verifacti"**
3. El sistema:
   - Crea la factura en StorageFy
   - La envía a Verifacti
   - Verifacti la registra en AEAT
   - Recibes confirmación con UUID y código QR

### Respuesta de Verifacti
- **UUID**: Identificador único de la factura en Verifacti
- **Estado**: Pendiente (esperando confirmación de AEAT)
- **QR Code**: Código QR para verificación
- **URL**: Link para verificar el estado en Verifacti

## 6. Errores Comunes y Soluciones

### Error: "NIF no válido"
- **Causa**: El NIF del cliente no existe en AEAT
- **Solución**: Verifica que el NIF sea correcto o desactiva validación

### Error: "Factura duplicada"
- **Causa**: Ya existe una factura con esa serie, número y fecha
- **Solución**: Usa un número de factura diferente

### Error: "Totales no coinciden"
- **Causa**: La suma de líneas no coincide con el total
- **Solución**: Revisa los cálculos de IVA y totales

### Error: "Fecha inválida"
- **Causa**: La fecha de expedición no puede ser futura
- **Solución**: Usa la fecha actual o pasada`,
      en: `# Create Invoices with Verifacti

## 1. Access Invoice Form

1. Go to **Invoicing** → **New Invoice**
2. System detects if Verifacti is active
3. You'll see additional options for electronic invoicing

## 2. Step 1: Basic Data

### Invoice Number
- System automatically suggests the next number
- Format: **Series-Year-Number** (e.g., A-2025-0001)
- You can change it manually if needed

### Invoice Type
- **F1 - Complete invoice**: For customers with NIF/CIF
- **F2 - Simplified invoice**: For smaller operations without NIF
- **F3 - Rectifying invoice**: To correct previous invoices

### Issue Date
- Default: current date
- Must be the date the invoice is issued
- If operation was earlier, use **Operation Date**

## 3. Step 2: Customer Data

### Customer with NIF/CIF (F1)
- Select customer from dropdown
- System automatically loads:
  - Full name
  - NIF/CIF
  - Address
  - Postal code and city

### NIF Validation
- System automatically validates NIF with Verifacti
- If NIF is invalid, you'll see an error
- You can disable validation if needed ("Validate recipient" field)

### Customer without NIF (F2)
- For simplified invoices
- Only need name and address
- Ideal for smaller operations

### Foreign Customer
- If customer doesn't have Spanish NIF
- Select **"Other ID"**
- Choose identification type:
  - **02**: Passport
  - **03**: Foreign ID document
  - **04**: Foreign tax identification number
- Enter country code (ISO 2 letters)
- Enter identification number

## 4. Step 3: Invoice Lines

### Add Lines
1. Click **"Add Line"**
2. For each line define:
   - **Description**: Invoice concept
   - **Taxable Base**: Amount without VAT
   - **Tax Type**: VAT (01), IGIC (02), IPSI (03)
   - **Tax Rate**: 21%, 10%, 7.5%, 4%, etc.
   - **Tax Amount**: VAT calculated automatically

### Automatic Calculations
- System automatically calculates:
  - **VAT**: According to tax rate
  - **Line total**: Base + VAT
  - **Invoice total**: Sum of all lines

### Exempt Lines
- If a line is VAT exempt:
  - Check **"Exempt Operation"**
  - Select reason (E1-E6):
    - **E1**: Exempt under art. 20
    - **E2**: Exempt under art. 21
    - **E3**: Exempt under art. 22
    - etc.

### Equivalent Surcharge
- If equivalent surcharge applies:
  - **Surcharge type**: 0.5%, 1.4%, 5.2%
  - **Surcharge amount**: Calculated automatically

### IRPF Retention
- If IRPF retention applies:
  - **Retention rate**: Percentage (e.g., 15%)
  - **Retention amount**: Calculated automatically

## 5. Step 4: Validation and Submission

### Validate Before Sending
System automatically validates:
- ✅ All required fields are complete
- ✅ Customer NIF is valid (if applicable)
- ✅ Totals are correct (base + VAT = total)
- ✅ Series and number are not duplicated

### Send to Verifacti
1. Review all data
2. Click **"Create and Send to Verifacti"**
3. System:
   - Creates invoice in StorageFy
   - Sends it to Verifacti
   - Verifacti registers it with AEAT
   - You receive confirmation with UUID and QR code

### Verifacti Response
- **UUID**: Unique identifier of invoice in Verifacti
- **Status**: Pending (awaiting AEAT confirmation)
- **QR Code**: QR code for verification
- **URL**: Link to verify status in Verifacti

## 6. Common Errors and Solutions

### Error: "Invalid NIF"
- **Cause**: Customer NIF doesn't exist in AEAT
- **Solution**: Verify NIF is correct or disable validation

### Error: "Duplicate invoice"
- **Cause**: Invoice with that series, number and date already exists
- **Solution**: Use a different invoice number

### Error: "Totals don't match"
- **Cause**: Sum of lines doesn't match total
- **Solution**: Review VAT and total calculations

### Error: "Invalid date"
- **Cause**: Issue date cannot be in the future
- **Solution**: Use current or past date`
    },
    tags: ['verifacti', 'crear', 'facturas'],
    order: 4
  },
  {
    id: 'estados-verifacti',
    categoryId: 'facturacion',
    title: { es: 'Estados y Verificación de Facturas Verifacti', en: 'Verifacti Invoice Status and Verification' },
    description: { es: 'Comprende los estados y cómo verificar tus facturas', en: 'Understand statuses and how to verify your invoices' },
    content: {
      es: `# Estados y Verificación de Facturas Verifacti

## Estados de Factura en Verifacti

Después de enviar una factura a Verifacti, puede pasar por varios estados:

### Pendiente
- **Qué significa**: Factura enviada a Verifacti, esperando procesamiento por AEAT
- **Cuándo ocurre**: Inmediatamente después del envío
- **Qué hacer**: Solo esperar, normalmente se procesa en minutos

### Correcto
- **Qué significa**: Factura registrada exitosamente en AEAT
- **Cuándo ocurre**: Cuando AEAT acepta la factura
- **Qué hacer**: Nada, la factura está correctamente registrada
- **Código QR**: Ya disponible para verificación

### Aceptada con Errores
- **Qué significa**: Factura registrada pero con advertencias menores
- **Cuándo ocurre**: Cuando hay discrepancias menores que no impiden el registro
- **Qué hacer**: Revisa las advertencias, generalmente no requiere acción

### Incorrecto
- **Qué significa**: Error en el registro, factura rechazada por AEAT
- **Cuándo ocurre**: Cuando hay errores en los datos que impiden el registro
- **Qué hacer**: 
  1. Revisa el mensaje de error
  2. Corrige los datos
  3. Crea una nueva factura corregida

### Duplicado
- **Qué significa**: Ya existe una factura con esos datos en Verifacti
- **Cuándo ocurre**: Si intentas crear una factura con serie/número/fecha duplicados
- **Qué hacer**: Usa un número de factura diferente

### Anulado
- **Qué significa**: Factura anulada correctamente
- **Cuándo ocurre**: Cuando anulas una factura previamente registrada
- **Qué hacer**: La factura queda anulada en el registro

## Código QR de Verificación

Cada factura registrada en Verifacti incluye un **código QR único**.

### Usos del Código QR:
- **Verificación rápida**: Escanea con tu móvil para verificar
- **Compartir con cliente**: El cliente puede verificar la factura
- **Comprobación en AEAT**: Link directo a la verificación oficial

### Cómo Verificar:
1. Descarga la factura en PDF
2. Encuentra el código QR en la factura
3. Escanea con cualquier lector de QR
4. Verás el estado de la factura en Verifacti

## URL de Verificación

Cada factura tiene una **URL única** para verificar su estado:
- Formato: \`https://verifacti.es/verify/[UUID]\`
- Puedes compartir esta URL con clientes
- Muestra el estado actual de la factura
- Incluye todos los datos de la factura

## Verificar Estado Manualmente

### Desde StorageFy:
1. Ve a **Facturación** → Lista de facturas
2. Haz clic en la factura que quieres verificar
3. Verás el estado actual de Verifacti
4. Si hay un botón **"Actualizar Estado"**, haz clic para verificar

### Desde Verifacti:
1. Ve a tu cuenta de Verifacti
2. Busca la factura por UUID o número
3. Verás el estado completo y detalles

## Subsanación de Errores

Si una factura tiene estado **Incorrecto**:

### Paso 1: Revisar el Error
- Lee el mensaje de error detallado
- Identifica qué campo causó el problema
- Verifica los datos del cliente

### Paso 2: Corregir los Datos
- Edita la factura si aún no está cerrada
- O crea una nueva factura corregida
- Asegúrate de que todos los datos sean correctos

### Paso 3: Reenviar
- Si la factura fue corregida, se reenvía automáticamente
- O crea una nueva factura con los datos correctos
- El sistema intentará registrar de nuevo

## Exportar XML

StorageFy permite exportar las facturas en formato **XML** compatible con AEAT:

1. Ve a la factura
2. Haz clic en **"Exportar XML"**
3. Descarga el archivo XML
4. Úsalo para:
   - Backup de facturas
   - Auditorías
   - Importar en otros sistemas

## Anular Facturas

Si necesitas anular una factura registrada:

1. Ve a la factura que quieres anular
2. Haz clic en **"Anular Factura"**
3. El sistema crea una **factura rectificativa**
4. Se envía a Verifacti para anular el registro
5. El estado cambia a **Anulado**

**Importante**: Solo puedes anular facturas registradas. Las facturas pendientes se pueden cancelar sin anulación.`,
      en: `# Verifacti Invoice Status and Verification

## Invoice Status in Verifacti

After sending an invoice to Verifacti, it can go through several states:

### Pending
- **What it means**: Invoice sent to Verifacti, awaiting AEAT processing
- **When it happens**: Immediately after sending
- **What to do**: Just wait, usually processed in minutes

### Correct
- **What it means**: Invoice successfully registered with AEAT
- **When it happens**: When AEAT accepts the invoice
- **What to do**: Nothing, invoice is correctly registered
- **QR Code**: Already available for verification

### Accepted with Errors
- **What it means**: Invoice registered but with minor warnings
- **When it happens**: When there are minor discrepancies that don't prevent registration
- **What to do**: Review warnings, generally no action required

### Incorrect
- **What it means**: Registration error, invoice rejected by AEAT
- **When it happens**: When there are data errors preventing registration
- **What to do**: 
  1. Review error message
  2. Correct data
  3. Create a new corrected invoice

### Duplicate
- **What it means**: An invoice with those data already exists in Verifacti
- **When it happens**: If you try to create an invoice with duplicate series/number/date
- **What to do**: Use a different invoice number

### Voided
- **What it means**: Invoice correctly voided
- **When it happens**: When you void a previously registered invoice
- **What to do**: Invoice remains voided in the registry

## QR Code Verification

Each invoice registered with Verifacti includes a **unique QR code**.

### QR Code Uses:
- **Quick verification**: Scan with your phone to verify
- **Share with customer**: Customer can verify the invoice
- **AEAT verification**: Direct link to official verification

### How to Verify:
1. Download invoice in PDF
2. Find QR code on invoice
3. Scan with any QR reader
4. You'll see invoice status in Verifacti

## Verification URL

Each invoice has a **unique URL** to verify its status:
- Format: \`https://verifacti.es/verify/[UUID]\`
- You can share this URL with customers
- Shows current invoice status
- Includes all invoice data

## Verify Status Manually

### From StorageFy:
1. Go to **Invoicing** → Invoice list
2. Click on invoice you want to verify
3. You'll see current Verifacti status
4. If there's an **"Update Status"** button, click to verify

### From Verifacti:
1. Go to your Verifacti account
2. Search invoice by UUID or number
3. You'll see complete status and details

## Error Correction

If an invoice has **Incorrect** status:

### Step 1: Review Error
- Read detailed error message
- Identify which field caused the problem
- Verify customer data

### Step 2: Correct Data
- Edit invoice if not yet closed
- Or create a new corrected invoice
- Ensure all data is correct

### Step 3: Resend
- If invoice was corrected, it resends automatically
- Or create a new invoice with correct data
- System will attempt to register again

## Export XML

StorageFy allows exporting invoices in **XML** format compatible with AEAT:

1. Go to invoice
2. Click **"Export XML"**
3. Download XML file
4. Use for:
   - Invoice backup
   - Audits
   - Import into other systems

## Void Invoices

If you need to void a registered invoice:

1. Go to invoice you want to void
2. Click **"Void Invoice"**
3. System creates a **rectifying invoice**
4. Sent to Verifacti to void the registry
5. Status changes to **Voided**

**Important**: You can only void registered invoices. Pending invoices can be cancelled without voiding.`
    },
    tags: ['verifacti', 'estados', 'verificación'],
    order: 5
  },
  {
    id: 'anular-rectificar-facturas',
    categoryId: 'facturacion',
    title: { es: 'Anular y Rectificar Facturas', en: 'Void and Rectify Invoices' },
    description: { es: 'Cómo corregir o anular facturas registradas', en: 'How to correct or void registered invoices' },
    content: {
      es: `# Anular y Rectificar Facturas

## Anular Facturas

### ¿Cuándo Anular?
- Error en los datos de la factura
- Factura emitida por error
- Cliente cancela el servicio antes de empezar
- Duplicado no detectado

### Proceso de Anulación:
1. Ve a la factura que quieres anular
2. Verifica que esté en estado **Correcto** o **Pendiente**
3. Haz clic en **"Anular Factura"**
4. El sistema crea una **factura rectificativa tipo R1**
5. Se envía automáticamente a Verifacti
6. El estado original cambia a **Anulado**

### Tipos de Anulación:
- **R1**: Anulación total de factura completa (F1)
- **R2**: Anulación total de factura simplificada (F2)

## Rectificar Facturas

### ¿Cuándo Rectificar?
- Error en el importe
- Error en datos del cliente
- Cambio de tipo de factura necesario
- Error en IVA aplicado

### Proceso de Rectificación:
1. Ve a la factura original
2. Haz clic en **"Rectificar"**
3. Selecciona el tipo de rectificación:
   - **R3**: Rectificación por diferencias
   - **R4**: Rectificación por descuento
   - **R5**: Rectificación con sustitución
4. Crea la nueva factura con los datos correctos
5. La factura rectificativa referencia la original
6. Se envía a Verifacti automáticamente

### Tipos de Rectificación:
- **R3**: Por diferencias de importe (aumenta o disminuye)
- **R4**: Por descuentos o bonificaciones
- **R5**: Sustituye completamente la factura original

## Importante
- No puedes anular una factura ya pagada sin seguir el proceso legal
- Las facturas rectificativas deben referenciar la original
- El sistema mantiene el historial completo de anulaciones y rectificaciones`,
      en: `# Void and Rectify Invoices

## Void Invoices

### When to Void?
- Error in invoice data
- Invoice issued by mistake
- Customer cancels service before starting
- Undetected duplicate

### Voiding Process:
1. Go to invoice you want to void
2. Verify it's in **Correct** or **Pending** status
3. Click **"Void Invoice"**
4. System creates a **rectifying invoice type R1**
5. Automatically sent to Verifacti
6. Original status changes to **Voided**

### Void Types:
- **R1**: Total void of complete invoice (F1)
- **R2**: Total void of simplified invoice (F2)

## Rectify Invoices

### When to Rectify?
- Error in amount
- Error in customer data
- Need to change invoice type
- Error in applied VAT

### Rectification Process:
1. Go to original invoice
2. Click **"Rectify"**
3. Select rectification type:
   - **R3**: Rectification by differences
   - **R4**: Rectification by discount
   - **R5**: Rectification with substitution
4. Create new invoice with correct data
5. Rectifying invoice references the original
6. Automatically sent to Verifacti

### Rectification Types:
- **R3**: For amount differences (increases or decreases)
- **R4**: For discounts or bonuses
- **R5**: Completely substitutes original invoice

## Important
- You cannot void an already paid invoice without following legal process
- Rectifying invoices must reference the original
- System maintains complete history of voiding and rectifications`
    },
    tags: ['verifacti', 'anular', 'rectificar'],
    order: 6
  }
]
