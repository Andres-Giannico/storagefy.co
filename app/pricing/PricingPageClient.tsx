'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  CheckCircle, 
  Star, 
  ChevronDown,
  ChevronUp,
  Building2,
  ArrowRightLeft,
} from 'lucide-react'
import LinkWithLang from '@/components/common/LinkWithLang'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { useState } from 'react'

export default function PricingPageClient() {
  const { language } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [units, setUnits] = useState(50)
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  
  const VAT_RATE = 0.21
  const ANNUAL_DISCOUNT = 0.20
  
  const monthlyPrice = units * 1
  const monthlyPriceWithVAT = monthlyPrice * (1 + VAT_RATE)
  const annualPrice = monthlyPrice * 12
  const annualPriceWithDiscount = annualPrice * (1 - ANNUAL_DISCOUNT)
  const annualPriceWithVAT = annualPriceWithDiscount * (1 + VAT_RATE)
  const annualSavings = annualPrice - annualPriceWithDiscount

  const plans = [
    {
      id: 'standard',
      name: language === 'es' ? 'Estándar' : 'Standard',
      price: '1',
      priceUnit: language === 'es' ? 'EUR/unidad' : 'EUR/unit',
      period: language === 'es' ? '/mes + IVA' : '/month + VAT',
      description: language === 'es' 
        ? 'Hasta 140 unidades. Precio simple y transparente'
        : 'Up to 140 units. Simple and transparent pricing',
      icon: Star,
      features: [
        // Lo que ya tenéis
        language === 'es' ? 'Hasta 140 unidades' : 'Up to 140 units',
        language === 'es' ? 'Precio simple: €1/unidad/mes + IVA' : 'Simple price: €1/unit/month + VAT',
        language === 'es' ? 'Locaciones ilimitadas' : 'Unlimited locations',
        language === 'es' ? 'Usuarios ilimitados' : 'Unlimited users',
        language === 'es' ? 'Widget reservas 24/7' : '24/7 booking widget',
        language === 'es' ? 'Contratos digitales' : 'Digital contracts',
        language === 'es' ? 'Fotos DNI seguras' : 'Secure ID photos',
        language === 'es' ? 'Contratos multi-unidad' : 'Multi-unit contracts',
        language === 'es' ? 'Planos interactivos' : 'Interactive floor plans',
        language === 'es' ? 'Tablón de anuncios' : 'Announcement board',
        language === 'es' ? 'Reportes avanzados' : 'Advanced reports',
        language === 'es' ? 'Soporte prioritario' : 'Priority support',
        language === 'es' ? 'Recordatorios automáticos' : 'Automatic reminders',
        // Facturación y pagos
        language === 'es' ? 'Facturación automática mensual' : 'Automatic monthly invoicing',
        language === 'es' ? 'Cobro con tarjeta (Stripe)' : 'Card payments (Stripe)',
        language === 'es' ? 'Domiciliación bancaria SEPA' : 'SEPA direct debit',
        language === 'es' ? 'Envío de facturas a la AEAT (Verifactu)' : 'Invoice submission to AEAT (Verifactu)',
        language === 'es' ? 'Gestión de depósitos y cauciones' : 'Deposit and security management',
        language === 'es' ? 'Links de pago automáticos' : 'Automatic payment links',
        // Área de cliente
        language === 'es' ? 'Portal del cliente 24/7' : '24/7 client portal',
        language === 'es' ? 'Descarga de facturas desde el portal' : 'Invoice download from portal',
        language === 'es' ? 'Historial de pagos y contratos' : 'Payment and contract history',
        language === 'es' ? 'Autoservicio de reservas' : 'Self-service reservations',
        // Operaciones
        language === 'es' ? 'Dimensiones exactas (m² y m³)' : 'Exact dimensions (m² and m³)',
        language === 'es' ? 'Precios por m², m³ o fijo' : 'Pricing by m², m³ or fixed',
        language === 'es' ? 'Gestión de impagos y morosidad' : 'Delinquency management',
        language === 'es' ? 'Dashboard en tiempo real' : 'Real-time dashboard',
        language === 'es' ? 'Exportación de datos (Excel, CSV)' : 'Data export (Excel, CSV)',
        language === 'es' ? 'Búsqueda avanzada de clientes' : 'Advanced client search',
        // Seguridad y cumplimiento
        language === 'es' ? 'Cumplimiento GDPR' : 'GDPR compliance',
        language === 'es' ? 'Datos encriptados' : 'Encrypted data',
        language === 'es' ? 'Backup automático' : 'Automatic backup',
        // Integraciones
        language === 'es' ? 'Integración con Stripe' : 'Stripe integration',
        language === 'es' ? 'Integración con Verifactu' : 'Verifactu integration',
        // Soporte y onboarding
        language === 'es' ? 'Centro de ayuda y documentación' : 'Help center and documentation',
        language === 'es' ? 'Sesión de onboarding incluida' : 'Onboarding session included',
        language === 'es' ? 'Migración de datos sin coste' : 'Free data migration',
        language === 'es' ? 'Soporte en español' : 'Spanish support',
        // Extras
        language === 'es' ? 'Time Travel en planos (ocupación pasada/futura)' : 'Time Travel on floor plans (past/future occupancy)',
        language === 'es' ? 'Control de acceso (integración Sonoff)' : 'Access control (Sonoff integration)',
        language === 'es' ? '30 días de prueba gratis' : '30-day free trial',
        language === 'es' ? 'Sin permanencia ni costes ocultos' : 'No commitment or hidden costs',
      ],
      cta: language === 'es' ? 'Probar demo ahora' : 'Try demo now',
      popular: true,
    },
  ]

  const benefits = [
    language === 'es' ? 'Demo en 2 min, sin tarjeta' : 'Demo in 2 min, no card',
    language === 'es' ? 'Sin permanencia' : 'No commitment',
    language === 'es' ? 'Migración de datos incluida' : 'Data migration included',
    language === 'es' ? 'Soporte en español' : 'Spanish support',
    language === 'es' ? 'Actualizaciones continuas' : 'Continuous updates'
  ]

  const useCases = [
    {
      plan: language === 'es' ? 'Estándar' : 'Standard',
      title: language === 'es' ? 'Emprendedor Individual' : 'Individual Entrepreneur',
      name: language === 'es' ? 'Juan' : 'Juan',
      description: language === 'es' 
        ? 'acaba de abrir su primer negocio de trasteros con 30 unidades. Paga solo 30 EUR/mes + IVA. Solución simple y transparente.'
        : 'just opened his first storage business with 30 units. Pays only 30 EUR/month + VAT. Simple and transparent solution.',
      units: 30,
      price: 30,
      occupancy: 85
    },
    {
      plan: language === 'es' ? 'Estándar' : 'Standard',
      title: language === 'es' ? 'Negocio en Crecimiento' : 'Growing Business',
      name: language === 'es' ? 'María' : 'María',
      description: language === 'es'
        ? 'gestiona 2 locaciones con 120 unidades. Paga 120 EUR/mes + IVA. Todas las funcionalidades incluidas sin límites.'
        : 'manages 2 locations with 120 units. Pays 120 EUR/month + VAT. All features included without limits.',
      units: 120,
      price: 120,
      occupancy: 92
    },
  ]

  const testimonials = [
    {
      name: 'Steffano',
      role: language === 'es' ? 'Propietario' : 'Owner',
      plan: language === 'es' ? 'Estándar' : 'Standard',
      company: 'Trasteros Ibiza',
      companyUrl: 'https://www.trasteros-ibiza.com/',
      logo: '/images/logotrasteros.png',
      text: language === 'es'
        ? 'Pasamos de gestionar todo manualmente a StorageFy y aumentamos la ocupación del 52% al 82% en solo 5 meses. El widget de reservas 24/7 fue un cambio radical para nuestro negocio en Ibiza.'
        : 'We moved from managing everything manually to StorageFy and increased occupancy from 52% to 82% in just 5 months. The 24/7 booking widget was a game changer for our business in Ibiza.',
      savings: language === 'es' ? '+30% ocupación • 15h ahorro/semana' : '+30% occupancy • 15h saved/week',
      emoji: '🏝️',
      avatar: '/images/steffnao.png'
    },
    {
      name: language === 'es' ? 'Ana Martínez' : 'Ana Martínez',
      role: language === 'es' ? 'Propietaria, BoxStorage' : 'Owner, BoxStorage',
      plan: language === 'es' ? 'Estándar' : 'Standard',
      text: language === 'es'
        ? 'Como emprendedora, necesitaba algo simple pero profesional. Con 40 unidades pago solo 40 EUR/mes + IVA. Tengo todo lo que necesito. Increíble valor.'
        : 'As an entrepreneur, I needed something simple but professional. With 40 units I pay only 40 EUR/month + VAT. I have everything I need. Incredible value.',
      savings: language === 'es' ? '15h/semana ahorradas' : '15h/week saved',
      emoji: '👩‍💼'
    }
  ]

  const faqs = language === 'es' ? [
    {
      question: '¿Cómo funciona el precio por unidad?',
      answer: 'El precio es simple: 1 EUR por unidad al mes + IVA (21%). Si tienes 50 unidades, pagas 50 EUR/mes + IVA = 60.50 EUR/mes. Si tienes 100 unidades, pagas 100 EUR/mes + IVA = 121 EUR/mes. Hasta 140 unidades.',
    },
    {
      question: '¿Qué pasa si tengo más de 140 unidades?',
      answer: 'Si tienes más de 140 unidades, contacta con nosotros. Ofrecemos descuentos por volumen, por lo que el precio por unidad será menor que 1 EUR.',
    },
    {
      question: '¿Qué incluye el soporte técnico?',
      answer: 'Incluimos soporte prioritario con respuesta en 4 horas.',
    },
    {
      question: '¿Hay descuentos por pago anual?',
      answer: 'Sí, ofrecemos un 20% de descuento si optas por facturación anual. Por ejemplo, si tienes 100 unidades, pagarías 1,200 EUR/año en lugar de 1,452 EUR/año (con IVA). Ahorras 252 EUR al año.',
    },
    {
      question: '¿Puedo probar antes de pagar?',
      answer: '¡Por supuesto! Puedes probar la demo en 2 minutos sin tarjeta de crédito. Accede con nombre y email, explora todas las funcionalidades y, si te convence, crea tu cuenta.',
    },
    {
      question: '¿Hay costos de configuración?',
      answer: 'No hay costos de configuración. Incluimos onboarding guiado sin costo adicional.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express), transferencia bancaria SEPA para clientes europeos, y domiciliación bancaria para planes anuales.',
    },
    {
      question: '¿Puedo cancelar cuando quiera?',
      answer: 'Sí, no hay permanencia. Puedes cancelar tu suscripción en cualquier momento desde tu panel de control. Tu acceso continuará hasta el final del periodo facturado.',
    },
    {
      question: '¿Hay límites de usuarios o locaciones?',
      answer: 'No hay límites de usuarios ni de locaciones. Solo el límite es de 140 unidades. ¿Más unidades? Contacta con nosotros para precio especial.',
    },
  ] : [
    {
      question: 'How does per-unit pricing work?',
      answer: 'The price is simple: 1 EUR per unit per month + VAT (21%). If you have 50 units, you pay 50 EUR/month + VAT = 60.50 EUR/month. If you have 100 units, you pay 100 EUR/month + VAT = 121 EUR/month. Up to 140 units.',
    },
    {
      question: 'What happens if I have more than 140 units?',
      answer: 'If you have more than 140 units, contact us. We offer volume discounts, so the price per unit will be less than 1 EUR.',
    },
    {
      question: 'What does technical support include?',
      answer: 'We include priority support with 4-hour response time.',
    },
    {
      question: 'Are there annual payment discounts?',
      answer: 'Yes, we offer a 20% discount if you choose annual billing. For example, if you have 100 units, you would pay 1,200 EUR/year instead of 1,452 EUR/year (with VAT). You save 252 EUR per year.',
    },
    {
      question: 'Can I try before paying?',
      answer: 'Of course! You can try the demo in 2 minutes, no credit card required. Enter your name and email, explore all features and, if you like it, create your account.',
    },
    {
      question: 'Are there setup costs?',
      answer: 'There are no setup costs. We include guided onboarding at no additional cost.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), SEPA bank transfer for European customers, and bank direct debit for annual plans.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, there is no commitment. You can cancel your subscription at any time from your control panel. Your access will continue until the end of the billed period.',
    },
    {
      question: 'Are there limits on users or locations?',
      answer: 'There are no limits on users or locations. Only the limit is 140 units. More units? Contact us for special pricing.',
    },
    {
      question: 'Do intra-community companies pay VAT?',
      answer: 'No. Intra-community companies (B2B within the EU with a valid VAT number) are exempt from Spanish VAT under the reverse charge mechanism. You pay the net price without VAT.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30 relative overflow-hidden font-demo">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-accent-300/30 to-accent-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-primary-300/20 to-accent-400/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-2/3 left-1/2 w-[300px] h-[300px] bg-accent-400/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <FadeInUp className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-accent-200/60 mb-6 shadow-sm"
          >
            <span className="text-sm font-medium text-accent-700">
              {language === 'es' ? 'Sin tarjeta • Demo en 2 min' : 'No card • Demo in 2 min'}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="block text-primary-500 font-medium text-sm md:text-base mb-3 tracking-widest uppercase">
              {language === 'es' ? 'Precio simple' : 'Simple pricing'}
            </span>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex items-baseline gap-3 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-primary-100 shadow-lg shadow-primary-900/5"
            >
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 bg-clip-text text-transparent">
                1 EUR
              </span>
              <span className="text-primary-600 font-semibold text-xl md:text-2xl">
                {language === 'es' ? 'por unidad' : 'per unit'}
              </span>
            </motion.div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-600 max-w-3xl mx-auto mb-4"
          >
            {language === 'es' 
              ? 'Creamos contigo. Hasta 140 unidades a 1 EUR/unidad + IVA. ¿Más de 140? Hablamos y ajustamos el precio a tu medida con descuentos por volumen.'
              : 'We grow with you. Up to 140 units at 1 EUR/unit + VAT. More than 140? Let\'s talk and adjust the price to your needs with volume discounts.'}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg font-semibold text-accent-600 max-w-2xl mx-auto"
          >
            {language === 'es' 
              ? 'El sistema más completo del sector. Por lo mismo que pagas ahora.'
              : 'The most complete system in the industry. For the same price you pay now.'}
          </motion.p>
        </FadeInUp>

        {/* CAP Banner - Grandes operadores */}
        <FadeInUp className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md border border-primary-200/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-200 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 mb-1">
                    {language === 'es' ? '¿Tienes muchas unidades?' : 'Have many units?'}
                  </h3>
                  <p className="text-primary-600 text-sm mb-3">
                    {language === 'es' 
                      ? 'Con 1.000 unidades no pagas 1.000€/mes. Los grandes operadores tienen precio especial por volumen. Contacta con nosotros y te hacemos una oferta a medida.'
                      : 'With 1,000 units you don\'t pay 1,000€/month. Large operators get special volume pricing. Contact us for a custom quote.'}
                  </p>
                  <LinkWithLang
                    href="/contact"
                    className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm hover:text-accent-700"
                  >
                    {language === 'es' ? 'Solicitar precio especial' : 'Request special pricing'}
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </LinkWithLang>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Price Calculator */}
        <FadeInUp className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/60 max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">
              {language === 'es' ? 'Calcula tu precio mensual' : 'Calculate your monthly price'}
            </h2>
            <div className="mb-6">
              <label htmlFor="units-slider" className="block text-sm font-semibold text-primary-700 mb-3">
                {language === 'es' ? 'Número de unidades:' : 'Number of units:'}{' '}
                <motion.span key={units} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="inline-block text-accent-600">
                  {units}
                </motion.span>
              </label>
              <input
                id="units-slider"
                type="range"
                min="1"
                max="140"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full h-3 bg-primary-100 rounded-full appearance-none cursor-pointer accent-accent-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1</span>
                <span>140</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50/80 rounded-xl p-6 border border-primary-100">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  {language === 'es' ? 'Precio mensual' : 'Monthly price'}
                </h3>
                <motion.div key={monthlyPrice} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-primary-800 mb-1">
                  €{monthlyPrice.toFixed(2)}
                </motion.div>
                <div className="text-sm text-gray-600">
                  + IVA: €{monthlyPriceWithVAT.toFixed(2)}
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100/80 rounded-xl p-6 border-2 border-accent-200 shadow-lg shadow-accent-500/10">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    {language === 'es' ? 'Precio anual' : 'Annual price'}
                  </h3>
                  <span className="text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full font-semibold">
                    -20%
                  </span>
                </div>
                <motion.div key={annualPriceWithDiscount} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-primary-800 mb-1">
                  <span className="text-lg text-gray-400 line-through mr-2">
                    €{annualPrice.toFixed(2)}
                  </span>
                  €{annualPriceWithDiscount.toFixed(2)}
                </motion.div>
                <div className="text-sm text-gray-600 mb-2">
                  + IVA: €{annualPriceWithVAT.toFixed(2)}
                </div>
                <div className="text-sm font-semibold text-accent-700">
                  {language === 'es' 
                    ? `Ahorras €${annualSavings.toFixed(2)}/año`
                    : `Save €${annualSavings.toFixed(2)}/year`}
                </div>
              </div>
            </div>
            {language === 'en' && (
              <p className="mt-4 text-sm text-primary-600 text-center">
                Intra-community companies (EU B2B with valid VAT number) are exempt from VAT.
              </p>
            )}
          </motion.div>
        </FadeInUp>

        {/* Pricing Card */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-4xl">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative rounded-2xl p-8 shadow-xl border-2 border-accent-400 bg-white/90 backdrop-blur-xl shadow-accent-500/20 hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300"
              >
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-100 to-accent-200">
                    <Icon className="w-6 h-6 text-accent-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-800">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-primary-600">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-col items-center justify-center">
                    {plan.price === 'Personalizado' || plan.price === 'Custom' ? (
                      <>
                        <span className="text-3xl lg:text-4xl font-bold text-primary-800">{plan.price}</span>
                        <span className="text-sm text-primary-600 mt-2 text-center">
                          {language === 'es' ? 'Descuentos por volumen' : 'Volume discounts'}
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline justify-center">
                          <span className="text-5xl font-bold text-primary-800">€{plan.price}</span>
                          <span className="text-lg text-primary-600 ml-2">{plan.priceUnit}</span>
                        </div>
                        <span className="text-sm text-primary-600 mt-1">{plan.period}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* 43 funciones - expandible tipo tip */}
                <div className="mb-8 rounded-lg border border-accent-200/50 bg-accent-50/40 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowAllFeatures(!showAllFeatures)}
                    className="w-full px-4 py-3 flex items-center justify-between gap-3 hover:bg-accent-50/60 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <CheckCircle className="w-4 h-4 text-accent-600 flex-shrink-0" />
                      <span className="font-semibold text-primary-800 text-sm">
                        {language === 'es' ? '43 funciones incluidas' : '43 features included'}
                      </span>
                      <span className="text-primary-500 text-sm hidden sm:inline">
                        — {language === 'es' ? 'todo incluido' : 'all included'}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-500 text-white font-semibold text-sm shrink-0 hover:bg-accent-600 transition-colors">
                      {showAllFeatures
                        ? (language === 'es' ? 'Ocultar' : 'Hide')
                        : (language === 'es' ? 'Ver todo' : 'View all')}
                      {showAllFeatures ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {showAllFeatures && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-0 border-t border-accent-200/40">
                          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-6">
                            {plan.features.map((feature, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.02, duration: 0.2 }}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                                <span className="text-sm text-primary-700">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <LinkWithLang
                  href="/demo-trial"
                  className="block w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 text-center bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:scale-[1.02]"
                >
                  {plan.cta}
                </LinkWithLang>
              </motion.div>
            )
          })}
          </div>
        </div>

        {/* Migration Offer Banner */}
        <FadeInUp className="mb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-accent-50 via-green-50/80 to-accent-50 border-2 border-accent-200/80 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex items-start gap-4">
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400/30 to-accent-600/20 flex items-center justify-center flex-shrink-0 border border-accent-200/50"
                >
                  <ArrowRightLeft className="w-6 h-6 text-accent-600" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary-800 mb-2 text-lg">
                    {language === 'es' ? '¿Usas otro sistema?' : 'Using another system?'}
                  </h3>
                  <p className="text-primary-600 text-sm mb-3">
                    {language === 'es' 
                      ? <>Hasta el <span className="font-bold text-accent-700 bg-accent-100 px-1.5 py-0.5 rounded">1 de mayo de 2026</span>: migramos todos tus clientes gratis.</>
                      : <>Until <span className="font-bold text-accent-700 bg-accent-100 px-1.5 py-0.5 rounded">May 1, 2026</span>: we migrate all your clients for free.</>}
                  </p>
                  <p className="text-base font-bold text-accent-700 mb-2">
                    {language === 'es' 
                      ? '¿Tu sistema actual es más barato? Igualamos tu precio.'
                      : 'Is your current system cheaper? We match your price.'}
                  </p>
                  <p className="text-accent-700 font-semibold text-sm">
                    {language === 'es' 
                      ? 'El sistema más completo. Por lo mismo que pagas ahora.'
                      : 'The most complete system. For the same price you pay now.'}
                  </p>
                  <LinkWithLang
                    href="/demo-trial"
                    className="inline-flex items-center gap-2 mt-4 text-accent-600 font-semibold text-sm hover:text-accent-700"
                  >
                    {language === 'es' ? 'Probar demo ahora' : 'Try demo now'}
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </LinkWithLang>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeInUp>

        {/* All Plans Include */}
        <FadeInUp className="mb-16">
          <div className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-800 rounded-2xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <h3 className="relative text-2xl font-bold text-center mb-8">
              {language === 'es' ? 'Todo incluido' : 'Everything included'}
            </h3>
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Use Cases */}
        <FadeInUp className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-4">
            {language === 'es' ? 'El plan perfecto' : 'The perfect plan'}
            <br />
            <span className="text-accent-600">
              {language === 'es' ? 'para cada etapa' : 'for each stage'}
            </span>
          </h2>
          <p className="text-center text-primary-600 mb-8">
            {language === 'es'
              ? 'Descubre cómo diferentes negocios utilizan StorageFy para crecer y automatizar sus operaciones.'
              : 'Discover how different businesses use StorageFy to grow and automate their operations.'}
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary-100 hover:shadow-xl hover:border-accent-200/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-accent-100 text-accent-700 rounded-lg">
                    {useCase.plan}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-primary-600 mb-4">
                  <strong>{useCase.name}</strong> {useCase.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-primary-800">
                      {typeof useCase.price === 'number' ? useCase.price : useCase.price}
                    </div>
                    <div className="text-xs text-gray-500">
                      {typeof useCase.price === 'number' 
                        ? language === 'es' ? 'unidades' : 'units'
                        : ''}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary-800">
                      {typeof useCase.price === 'number' 
                        ? `€${useCase.price}/mes + IVA`
                        : useCase.price}
                    </div>
                    <div className="text-xs text-gray-500">
                      {useCase.occupancy}% {language === 'es' ? 'ocupación' : 'occupancy'}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInUp>

        {/* Testimonials */}
        <FadeInUp className="mb-16">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-4">
            {language === 'es' ? 'Lo que dicen nuestros clientes' : 'What our clients say'}
          </h2>
          <p className="text-center text-primary-600 mb-8">
            {language === 'es'
              ? 'Empresas de todos los tamaños confían en StorageFy para gestionar sus trasteros.'
              : 'Businesses of all sizes trust StorageFy to manage their storage units.'}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary-100 hover:shadow-xl hover:border-accent-200/50 transition-all duration-300"
              >
                {'logo' in testimonial && testimonial.logo ? (
                  <div className="flex justify-center mb-4">
                    <a
                      href={'companyUrl' in testimonial ? testimonial.companyUrl : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={testimonial.logo}
                        alt={'company' in testimonial ? testimonial.company : 'Logo'}
                        width={120}
                        height={48}
                        className="object-contain"
                        style={{ height: 'auto', width: 'auto', maxHeight: '48px' }}
                      />
                    </a>
                  </div>
                ) : (
                  <div className="mb-4">
                    {'avatar' in testimonial && testimonial.avatar ? (
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary-100">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                    ) : (
                      <div className="text-4xl">{testimonial.emoji}</div>
                    )}
                  </div>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-accent-100 text-accent-700 rounded">
                    {testimonial.plan}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  {'avatar' in testimonial && testimonial.avatar ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary-100 flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  ) : (
                    <div className="text-2xl flex-shrink-0">{testimonial.emoji}</div>
                  )}
                  <div>
                    <h3 className="font-bold text-primary-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                      {'companyUrl' in testimonial && testimonial.companyUrl && 'company' in testimonial && (
                        <>
                          {' · '}
                          <a
                            href={testimonial.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-600 font-medium hover:underline"
                          >
                            {testimonial.company} (2 {language === 'es' ? 'locaciones' : 'locations'})
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-primary-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="text-sm font-semibold text-accent-600 flex items-center gap-2">
                  <span className="text-lg">💰</span> {testimonial.savings}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInUp>

        {/* FAQ Section */}
        <FadeInUp className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-4">
            {language === 'es' ? '¿Tienes dudas?' : 'Have questions?'}
            <br />
            <span className="text-accent-600">
              {language === 'es' ? 'Aquí las respuestas' : 'Here are the answers'}
            </span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary-100 hover:border-accent-200/50 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                >
                  <span className="text-lg font-semibold text-primary-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-600 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-primary-600"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </div>
  )
}

