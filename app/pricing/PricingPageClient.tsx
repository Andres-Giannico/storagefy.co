'use client'

import { motion } from 'framer-motion'
import { 
  Check, 
  CheckCircle, 
  Star, 
  Crown, 
  ChevronDown,
  TrendingUp,
  Users,
  Building2,
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { useState } from 'react'

export default function PricingPageClient() {
  const { language } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [units, setUnits] = useState(50)
  
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
        ? 'Hasta 200 unidades. Precio simple y transparente'
        : 'Up to 200 units. Simple and transparent pricing',
      icon: Star,
      features: [
        language === 'es' ? 'Locaciones ilimitadas' : 'Unlimited locations',
        language === 'es' ? 'Hasta 200 unidades' : 'Up to 200 units',
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
      ],
      cta: language === 'es' ? 'Probar Gratis' : 'Start Free Trial',
      popular: true,
    },
    {
      id: 'enterprise',
      name: language === 'es' ? 'Enterprise' : 'Enterprise',
      price: language === 'es' ? 'Personalizado' : 'Custom',
      priceUnit: '',
      period: '',
      description: language === 'es' 
        ? 'Más de 200 unidades. Nos adaptamos a tu negocio con descuentos por volumen'
        : 'More than 200 units. We adapt to your business with volume discounts',
      icon: Crown,
      features: [
        language === 'es' ? 'Locaciones ilimitadas' : 'Unlimited locations',
        language === 'es' ? 'Unidades ilimitadas' : 'Unlimited units',
        language === 'es' ? 'Usuarios ilimitados' : 'Unlimited users',
        language === 'es' ? 'Precio personalizado con descuento por volumen' : 'Custom pricing with volume discounts',
        language === 'es' ? 'API personalizada' : 'Custom API',
        language === 'es' ? 'Soporte 24/7' : '24/7 support',
        language === 'es' ? 'Onboarding dedicado' : 'Dedicated onboarding',
        language === 'es' ? 'Account manager' : 'Account manager',
        language === 'es' ? 'SLA garantizado' : 'Guaranteed SLA',
        language === 'es' ? 'Planos ilimitados' : 'Unlimited floor plans',
        language === 'es' ? 'Analytics avanzados' : 'Advanced analytics',
        language === 'es' ? 'Integraciones personalizadas' : 'Custom integrations',
        language === 'es' ? 'Capacitación del equipo' : 'Team training',
      ],
      cta: language === 'es' ? 'Contactar' : 'Contact',
      popular: false,
    },
  ]

  const benefits = [
    language === 'es' ? '14 días gratis sin tarjeta' : '14 days free without card',
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
        ? 'gestiona 2 locaciones con 150 unidades. Paga 150 EUR/mes + IVA. Todas las funcionalidades incluidas sin límites.'
        : 'manages 2 locations with 150 units. Pays 150 EUR/month + VAT. All features included without limits.',
      units: 150,
      price: 150,
      occupancy: 92
    },
    {
      plan: language === 'es' ? 'Enterprise' : 'Enterprise',
      title: language === 'es' ? 'Gran Operador' : 'Large Operator',
      name: language === 'es' ? 'StorageMax' : 'StorageMax',
      description: language === 'es'
        ? 'gestiona 10 locaciones con más de 800 unidades. Precio personalizado con descuentos por volumen. API personalizada incluida.'
        : 'manages 10 locations with more than 800 units. Custom pricing with volume discounts. Custom API included.',
      units: 800,
      price: language === 'es' ? 'Personalizado' : 'Custom',
      occupancy: 95
    }
  ]

  const testimonials = [
    {
      name: language === 'es' ? 'Carlos Rodríguez' : 'Carlos Rodríguez',
      role: language === 'es' ? 'CEO, TrasterosMadrid' : 'CEO, TrasterosMadrid',
      plan: language === 'es' ? 'Estándar' : 'Standard',
      text: language === 'es'
        ? 'Gestionamos 120 unidades. Pagamos 120 EUR/mes + IVA. La ocupación aumentó del 75% al 92% en solo 6 meses. La inversión se pagó sola en el primer mes.'
        : 'We manage 120 units. We pay 120 EUR/month + VAT. Occupancy increased from 75% to 92% in just 6 months. The investment paid for itself in the first month.',
      savings: language === 'es' ? '€2,400/mes ahorrados' : '€2,400/month saved',
      emoji: '👨‍💼'
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
    },
    {
      name: language === 'es' ? 'Miguel Fernández' : 'Miguel Fernández',
      role: language === 'es' ? 'Director de Operaciones, StorageChain' : 'Operations Director, StorageChain',
      plan: language === 'es' ? 'Enterprise' : 'Enterprise',
      text: language === 'es'
        ? 'Gestionamos 12 locaciones y +1000 unidades. La API personalizada y el soporte 24/7 nos permiten operar sin fricciones. ROI del 400% en el primer año.'
        : 'We manage 12 locations and +1000 units. The custom API and 24/7 support allow us to operate without friction. 400% ROI in the first year.',
      savings: language === 'es' ? '€8,000/mes ahorrados' : '€8,000/month saved',
      emoji: '👔'
    }
  ]

  const faqs = language === 'es' ? [
    {
      question: '¿Cómo funciona el precio por unidad?',
      answer: 'El precio es simple: 1 EUR por unidad al mes + IVA (21%). Si tienes 50 unidades, pagas 50 EUR/mes + IVA = 60.50 EUR/mes. Si tienes 150 unidades, pagas 150 EUR/mes + IVA = 181.50 EUR/mes. Hasta 200 unidades.',
    },
    {
      question: '¿Qué pasa si tengo más de 200 unidades?',
      answer: 'Si tienes más de 200 unidades, contacta con nosotros para un plan Enterprise personalizado. Ofrecemos descuentos por volumen, por lo que el precio por unidad será menor que 1 EUR. Además, incluye funcionalidades adicionales como API personalizada y soporte 24/7.',
    },
    {
      question: '¿Qué incluye el soporte técnico?',
      answer: 'El plan Estándar incluye soporte prioritario (respuesta en 4h). El plan Enterprise incluye soporte 24/7 con account manager dedicado y SLA garantizado.',
    },
    {
      question: '¿Hay descuentos por pago anual?',
      answer: 'Sí, ofrecemos un 20% de descuento si optas por facturación anual. Por ejemplo, si tienes 100 unidades, pagarías 1,200 EUR/año en lugar de 1,452 EUR/año (con IVA). Ahorras 252 EUR al año.',
    },
    {
      question: '¿Puedo probar antes de pagar?',
      answer: '¡Por supuesto! Todos los planes incluyen 14 días de prueba gratis sin necesidad de tarjeta de crédito. Puedes probar todas las funcionalidades sin compromiso.',
    },
    {
      question: '¿Hay costos de configuración?',
      answer: 'No hay costos de configuración. El plan Estándar incluye onboarding guiado sin costo adicional. El plan Enterprise incluye onboarding dedicado y configuración personalizada.',
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
      answer: 'No, en el plan Estándar no hay límites de usuarios ni de locaciones. Solo el límite es de 200 unidades. En Enterprise, todo es ilimitado.',
    },
  ] : [
    {
      question: 'How does per-unit pricing work?',
      answer: 'The price is simple: 1 EUR per unit per month + VAT (21%). If you have 50 units, you pay 50 EUR/month + VAT = 60.50 EUR/month. If you have 150 units, you pay 150 EUR/month + VAT = 181.50 EUR/month. Up to 200 units.',
    },
    {
      question: 'What happens if I have more than 200 units?',
      answer: 'If you have more than 200 units, contact us for a custom Enterprise plan. We offer volume discounts, so the price per unit will be less than 1 EUR. Plus, it includes additional features like custom API and 24/7 support.',
    },
    {
      question: 'What does technical support include?',
      answer: 'The Standard plan includes priority support (4h response). The Enterprise plan includes 24/7 support with dedicated account manager and guaranteed SLA.',
    },
    {
      question: 'Are there annual payment discounts?',
      answer: 'Yes, we offer a 20% discount if you choose annual billing. For example, if you have 100 units, you would pay 1,200 EUR/year instead of 1,452 EUR/year (with VAT). You save 252 EUR per year.',
    },
    {
      question: 'Can I try before paying?',
      answer: 'Of course! All plans include 14 days free trial without credit card required. You can try all features without commitment.',
    },
    {
      question: 'Are there setup costs?',
      answer: 'There are no setup costs. The Standard plan includes guided onboarding at no additional cost. The Enterprise plan includes dedicated onboarding and custom configuration.',
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
      answer: 'No, in the Standard plan there are no limits on users or locations. Only the limit is 200 units. In Enterprise, everything is unlimited.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <FadeInUp className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-800 mb-4">
            {language === 'es' ? 'Precio simple:' : 'Simple pricing:'}
            <br />
            <span className="text-accent-600">1 EUR por unidad</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Creamos contigo. Hasta 200 unidades a 1 EUR/unidad + IVA. ¿Más de 200? Hablamos y ajustamos el precio a tu medida con descuentos por volumen.'
              : 'We grow with you. Up to 200 units at 1 EUR/unit + VAT. More than 200? Let\'s talk and adjust the price to your needs with volume discounts.'}
          </p>
        </FadeInUp>

        {/* Price Calculator */}
        <FadeInUp className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">
              {language === 'es' ? 'Calcula tu precio mensual' : 'Calculate your monthly price'}
            </h2>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary-700 mb-3">
                {language === 'es' ? 'Número de unidades:' : 'Number of units:'} {units}
              </label>
              <input
                type="range"
                min="1"
                max="200"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>200</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  {language === 'es' ? 'Precio mensual' : 'Monthly price'}
                </h3>
                <div className="text-3xl font-bold text-primary-800 mb-1">
                  €{monthlyPrice.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">
                  + IVA: €{monthlyPriceWithVAT.toFixed(2)}
                </div>
              </div>
              <div className="bg-accent-50 rounded-xl p-6 border-2 border-accent-200">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-gray-600">
                    {language === 'es' ? 'Precio anual' : 'Annual price'}
                  </h3>
                  <span className="text-xs bg-accent-500 text-white px-2 py-0.5 rounded">
                    -20%
                  </span>
                </div>
                <div className="text-3xl font-bold text-primary-800 mb-1">
                  <span className="text-lg text-gray-400 line-through mr-2">
                    €{annualPrice.toFixed(2)}
                  </span>
                  €{annualPriceWithDiscount.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  + IVA: €{annualPriceWithVAT.toFixed(2)}
                </div>
                <div className="text-sm font-semibold text-accent-600">
                  {language === 'es' 
                    ? `Ahorras €${annualSavings.toFixed(2)}/año`
                    : `Save €${annualSavings.toFixed(2)}/year`}
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-accent-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {language === 'es' ? 'Más Popular' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${
                    plan.popular 
                      ? 'bg-accent-100' 
                      : 'bg-primary-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      plan.popular 
                        ? 'text-accent-600' 
                        : 'text-primary-600'
                    }`} />
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

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.id === 'enterprise' ? '/contact' : '/demo'}
                  className={`block w-full py-3 px-6 rounded-xl font-semibold transition-all text-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700'
                      : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* All Plans Include */}
        <FadeInUp className="mb-16">
          <div className="bg-gradient-to-br from-primary-800 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">
              {language === 'es' ? 'Todos los planes incluyen' : 'All plans include'}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
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
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-accent-100 text-accent-700 rounded">
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
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="text-4xl mb-4">{testimonial.emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-accent-100 text-accent-700 rounded">
                    {testimonial.plan}
                  </span>
                </div>
                <h3 className="font-bold text-primary-800 mb-1">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                <p className="text-sm text-primary-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="text-sm font-semibold text-accent-600">
                  💰 {testimonial.savings}
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
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
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

