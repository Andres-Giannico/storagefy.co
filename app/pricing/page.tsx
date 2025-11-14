'use client'

import { motion } from 'framer-motion'
import { 
  Check, 
  CheckCircle, 
  Star, 
  Zap, 
  Crown, 
  ArrowRight,
  TrendingUp,
  Users,
  Shield,
  Clock,
  ChevronDown,
  Building2,
  Warehouse,
  Building
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { useState } from 'react'

export default function PricingPage() {
  const { language } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [units, setUnits] = useState(50)

  const plans = [
    {
      name: language === 'es' ? 'Estándar' : 'Standard',
      price: '1',
      priceUnit: language === 'es' ? 'EUR/unidad' : 'EUR/unit',
      period: language === 'es' ? '/mes + IVA' : '/month + VAT',
      description: language === 'es' ? 'Hasta 200 unidades. Precio simple y transparente' : 'Up to 200 units. Simple and transparent pricing',
      icon: Star,
      color: 'green',
      popular: true,
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
        language === 'es' ? 'Recordatorios automáticos' : 'Automatic reminders'
      ]
    },
    {
      name: language === 'es' ? 'Enterprise' : 'Enterprise',
      price: language === 'es' ? 'Personalizado' : 'Custom',
      priceUnit: '',
      period: '',
      description: language === 'es' ? 'Más de 200 unidades. Nos adaptamos a tu negocio con descuentos por volumen' : 'More than 200 units. We adapt to your business with volume discounts',
      icon: Crown,
      color: 'purple',
      popular: false,
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
        language === 'es' ? 'Integraciones personalizadas' : 'Custom integrations',
        language === 'es' ? 'Capacitación del equipo' : 'Team training'
      ]
    }
  ]

  // Calculate price
  const pricePerUnit = 1
  const vatRate = 0.21
  const annualDiscount = 0.20 // 20% discount for annual payment
  const monthlyPrice = units * pricePerUnit
  const monthlyPriceWithVat = monthlyPrice * (1 + vatRate)
  const annualPrice = monthlyPrice * 12
  const annualPriceWithDiscount = annualPrice * (1 - annualDiscount)
  const annualPriceWithVat = annualPriceWithDiscount * (1 + vatRate)

  const useCases = [
    {
      icon: Building2,
      plan: language === 'es' ? 'Estándar' : 'Standard',
      title: language === 'es' ? 'Emprendedor Individual' : 'Solo Entrepreneur',
      description: language === 'es' 
        ? 'Juan acaba de abrir su primer negocio de trasteros con 30 unidades. Paga solo 30 EUR/mes + IVA. Solución simple y transparente.'
        : 'Juan just opened his first storage business with 30 units. Pays only 30 EUR/month + VAT. Simple and transparent solution.',
      metrics: [
        { value: '30', label: language === 'es' ? 'unidades' : 'units' },
        { value: '€30', label: language === 'es' ? '/mes + IVA' : '/month + VAT' },
        { value: '85%', label: language === 'es' ? 'ocupación' : 'occupancy' }
      ]
    },
    {
      icon: Warehouse,
      plan: language === 'es' ? 'Estándar' : 'Standard',
      title: language === 'es' ? 'Negocio en Crecimiento' : 'Growing Business',
      description: language === 'es'
        ? 'María gestiona 2 locaciones con 150 unidades. Paga 150 EUR/mes + IVA. Todas las funcionalidades incluidas sin límites.'
        : 'María manages 2 locations with 150 units. Pays 150 EUR/month + VAT. All features included without limits.',
      metrics: [
        { value: '150', label: language === 'es' ? 'unidades' : 'units' },
        { value: '€150', label: language === 'es' ? '/mes + IVA' : '/month + VAT' },
        { value: '92%', label: language === 'es' ? 'ocupación' : 'occupancy' }
      ]
    },
    {
      icon: Building,
      plan: 'Enterprise',
      title: language === 'es' ? 'Gran Operador' : 'Large Operator',
      description: language === 'es'
        ? 'StorageMax gestiona 10 locaciones con más de 800 unidades. Precio personalizado con descuentos por volumen. API personalizada incluida.'
        : 'StorageMax manages 10 locations with over 800 units. Custom pricing with volume discounts. Custom API included.',
      metrics: [
        { value: '800+', label: language === 'es' ? 'unidades' : 'units' },
        { value: language === 'es' ? 'Personalizado' : 'Custom', label: language === 'es' ? 'precio' : 'price' },
        { value: '95%', label: language === 'es' ? 'ocupación' : 'occupancy' }
      ]
    }
  ]

  const faqs = [
    {
      question: language === 'es' ? '¿Cómo funciona el precio por unidad?' : 'How does the per-unit pricing work?',
      answer: language === 'es'
        ? 'El precio es simple: 1 EUR por unidad al mes + IVA (21%). Si tienes 50 unidades, pagas 50 EUR/mes + IVA = 60.50 EUR/mes. Si tienes 150 unidades, pagas 150 EUR/mes + IVA = 181.50 EUR/mes. Hasta 200 unidades.'
        : 'The price is simple: 1 EUR per unit per month + VAT (21%). If you have 50 units, you pay 50 EUR/month + VAT = 60.50 EUR/month. If you have 150 units, you pay 150 EUR/month + VAT = 181.50 EUR/month. Up to 200 units.'
    },
    {
      question: language === 'es' ? '¿Qué pasa si tengo más de 200 unidades?' : 'What happens if I have more than 200 units?',
      answer: language === 'es'
        ? 'Si tienes más de 200 unidades, contacta con nosotros para un plan Enterprise personalizado. Ofrecemos descuentos por volumen, por lo que el precio por unidad será menor que 1 EUR. Además, incluye funcionalidades adicionales como API personalizada y soporte 24/7.'
        : 'If you have more than 200 units, contact us for a custom Enterprise plan. We offer volume discounts, so the price per unit will be less than 1 EUR. It also includes additional features like custom API and 24/7 support.'
    },
    {
      question: language === 'es' ? '¿Qué incluye el soporte técnico?' : 'What does technical support include?',
      answer: language === 'es'
        ? 'El plan Estándar incluye soporte prioritario (respuesta en 4h). El plan Enterprise incluye soporte 24/7 con account manager dedicado y SLA garantizado.'
        : 'The Standard plan includes priority support (4h response). The Enterprise plan includes 24/7 support with dedicated account manager and guaranteed SLA.'
    },
    {
      question: language === 'es' ? '¿Hay descuentos por pago anual?' : 'Are there discounts for annual payment?',
      answer: language === 'es'
        ? 'Sí, ofrecemos un 20% de descuento si optas por facturación anual. Por ejemplo, si tienes 100 unidades, pagarías 1,200 EUR/año en lugar de 1,452 EUR/año (con IVA). Ahorras 252 EUR al año.'
        : 'Yes, we offer a 20% discount if you choose annual billing. For example, if you have 100 units, you would pay 1,200 EUR/year instead of 1,452 EUR/year (with VAT). You save 252 EUR per year.'
    },
    {
      question: language === 'es' ? '¿Puedo probar antes de pagar?' : 'Can I try before paying?',
      answer: language === 'es'
        ? '¡Por supuesto! Todos los planes incluyen 14 días de prueba gratis sin necesidad de tarjeta de crédito. Puedes probar todas las funcionalidades sin compromiso.'
        : 'Of course! All plans include a 14-day free trial without requiring a credit card. You can try all features without commitment.'
    },
    {
      question: language === 'es' ? '¿Hay costos de configuración?' : 'Are there setup costs?',
      answer: language === 'es'
        ? 'No hay costos de configuración. El plan Estándar incluye onboarding guiado sin costo adicional. El plan Enterprise incluye onboarding dedicado y configuración personalizada.'
        : 'There are no setup costs. The Standard plan includes guided onboarding at no additional cost. The Enterprise plan includes dedicated onboarding and custom setup.'
    },
    {
      question: language === 'es' ? '¿Qué métodos de pago aceptan?' : 'What payment methods do you accept?',
      answer: language === 'es'
        ? 'Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express), transferencia bancaria SEPA para clientes europeos, y domiciliación bancaria para planes anuales.'
        : 'We accept all major credit and debit cards (Visa, Mastercard, American Express), SEPA bank transfers for European customers, and direct debit for annual plans.'
    },
    {
      question: language === 'es' ? '¿Puedo cancelar cuando quiera?' : 'Can I cancel anytime?',
      answer: language === 'es'
        ? 'Sí, no hay permanencia. Puedes cancelar tu suscripción en cualquier momento desde tu panel de control. Tu acceso continuará hasta el final del periodo facturado.'
        : 'Yes, there is no commitment. You can cancel your subscription at any time from your control panel. Your access will continue until the end of the paid period.'
    },
    {
      question: language === 'es' ? '¿Hay límites de usuarios o locaciones?' : 'Are there limits on users or locations?',
      answer: language === 'es'
        ? 'No, en el plan Estándar no hay límites de usuarios ni de locaciones. Solo el límite es de 200 unidades. En Enterprise, todo es ilimitado.'
        : 'No, in the Standard plan there are no limits on users or locations. The only limit is 200 units. In Enterprise, everything is unlimited.'
    }
  ]

  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      role: language === 'es' ? 'CEO, TrasterosMadrid' : 'CEO, TrasterosMadrid',
      plan: language === 'es' ? 'Estándar' : 'Standard',
      quote: language === 'es'
        ? 'Gestionamos 120 unidades. Pagamos 120 EUR/mes + IVA. La ocupación aumentó del 75% al 92% en solo 6 meses. La inversión se pagó sola en el primer mes.'
        : 'We manage 120 units. We pay 120 EUR/month + VAT. Occupancy increased from 75% to 92% in just 6 months. The investment paid for itself in the first month.',
      avatar: '👨‍💼',
      savings: language === 'es' ? '€2,400/mes ahorrados' : '€2,400/month saved'
    },
    {
      name: 'Ana Martínez',
      role: language === 'es' ? 'Propietaria, BoxStorage' : 'Owner, BoxStorage',
      plan: language === 'es' ? 'Estándar' : 'Standard',
      quote: language === 'es'
        ? 'Como emprendedora, necesitaba algo simple pero profesional. Con 40 unidades pago solo 40 EUR/mes + IVA. Tengo todo lo que necesito. Increíble valor.'
        : 'As an entrepreneur, I needed something simple but professional. With 40 units I pay only 40 EUR/month + VAT. I have everything I need. Incredible value.',
      avatar: '👩‍💼',
      savings: language === 'es' ? '15h/semana ahorradas' : '15h/week saved'
    },
    {
      name: 'Miguel Fernández',
      role: language === 'es' ? 'Director de Operaciones, StorageChain' : 'Operations Director, StorageChain',
      plan: 'Enterprise',
      quote: language === 'es'
        ? 'Gestionamos 12 locaciones y +1000 unidades. La API personalizada y el soporte 24/7 nos permiten operar sin fricciones. ROI del 400% en el primer año.'
        : 'We manage 12 locations and +1000 units. The custom API and 24/7 support allow us to operate friction-free. 400% ROI in the first year.',
      avatar: '👔',
      savings: language === 'es' ? '€8,000/mes ahorrados' : '€8,000/month saved'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeInUp>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6"
            >
              <Star className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? '14 días gratis · Sin tarjeta · Sin permanencia' : '14 days free · No card · No commitment'}
              </span>
          </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Precio simple:' : 'Simple pricing:'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? '1 EUR por unidad' : '1 EUR per unit'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'Creamos contigo. Hasta 200 unidades a 1 EUR/unidad + IVA. ¿Más de 200? Hablamos y ajustamos el precio a tu medida con descuentos por volumen.'
                : 'We grow with you. Up to 200 units at 1 EUR/unit + VAT. More than 200? Let\'s talk and adjust the price to your needs with volume discounts.'
              }
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
              {[
                { icon: Users, value: '50+', label: language === 'es' ? 'Clientes' : 'Clients' },
                { icon: TrendingUp, value: '30%', label: language === 'es' ? 'Aumento promedio' : 'Average increase' },
                { icon: Shield, value: '99.9%', label: language === 'es' ? 'Uptime' : 'Uptime' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-4 rounded-xl border border-accent-200"
                >
                  <stat.icon className="w-6 h-6 text-accent-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-800">{stat.value}</div>
                  <div className="text-sm text-primary-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <FadeInUp>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-800 mb-6 text-center">
                {language === 'es' ? 'Calcula tu precio mensual' : 'Calculate your monthly price'}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-3">
                    {language === 'es' ? `Número de unidades: ${units}` : `Number of units: ${units}`}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="200"
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>200</span>
                  </div>
                </div>

                {units === 200 && (
                  <div className="bg-accent-50 border border-accent-200 rounded-xl p-4 text-center mb-4">
                    <p className="text-sm text-primary-700">
                      {language === 'es'
                        ? '💡 ¿Más de 200 unidades? Contacta con nosotros para un precio personalizado con descuentos por volumen.'
                        : '💡 More than 200 units? Contact us for custom pricing with volume discounts.'}
                    </p>
                  </div>
                )}
                {units <= 200 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200">
                      <div className="text-sm text-primary-600 mb-2">
                        {language === 'es' ? 'Precio mensual' : 'Monthly price'}
                      </div>
                      <div className="text-3xl font-bold text-primary-800 mb-1">
                        €{monthlyPrice.toFixed(2)}
                      </div>
                      <div className="text-lg text-primary-600">
                        {language === 'es' ? '+ IVA: €' : '+ VAT: €'}
                        {monthlyPriceWithVat.toFixed(2)}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-6 border border-accent-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-sm text-primary-600">
                          {language === 'es' ? 'Precio anual' : 'Annual price'}
                        </div>
                        <span className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded-full font-semibold">
                          {language === 'es' ? '-20%' : '-20%'}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <div className="text-2xl text-gray-400 line-through">
                          €{annualPrice.toFixed(2)}
                        </div>
                        <div className="text-3xl font-bold text-primary-800">
                          €{annualPriceWithDiscount.toFixed(2)}
                        </div>
                      </div>
                      <div className="text-lg text-primary-600">
                        {language === 'es' ? '+ IVA: €' : '+ VAT: €'}
                        {annualPriceWithVat.toFixed(2)}
                      </div>
                      <div className="text-xs text-accent-600 mt-2 font-semibold">
                        {language === 'es' ? 'Ahorras €' : 'Save €'}
                        {(annualPrice - annualPriceWithDiscount).toFixed(2)}
                        {language === 'es' ? '/año' : '/year'}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600'
              }

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'easeOut'
                    }
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {language === 'es' ? 'Más Popular' : 'Most Popular'}
                      </div>
                    </div>
                  )}
                  
                  <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 h-full ${
                    plan.popular 
                      ? 'border-accent-200 shadow-xl' 
                      : 'border-gray-100 hover:border-accent-200'
                  }`}>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${colorClasses[plan.color as keyof typeof colorClasses]} rounded-xl mb-6`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Plan Info */}
                    <h3 className="text-2xl font-bold text-primary-800 mb-2">{plan.name}</h3>
                    <p className="text-primary-600 mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-8">
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

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ 
                            opacity: 1, 
                            x: 0,
                            transition: {
                              delay: featureIndex * 0.05,
                              duration: 0.3
                            }
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                          <span className="text-primary-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={plan.name === 'Enterprise' ? '/contact' : '/demo'}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 shadow-lg hover:shadow-xl'
                          : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                      }`}
                    >
                      {(plan.name === 'Enterprise' || plan.name === 'Enterprise')
                        ? (language === 'es' ? 'Contactar' : 'Contact')
                        : (language === 'es' ? 'Probar Gratis' : 'Try Free')
                      }
                    </motion.a>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* All Plans Include */}
          <FadeInUp>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-3xl opacity-95"></div>
              
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
              </div>

              <div className="relative px-8 py-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-8 text-center text-white"
                >
                  {language === 'es' ? 'Todos los planes incluyen' : 'All plans include'}
                </motion.h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                  {[
                    language === 'es' ? '14 días gratis sin tarjeta' : '14 days free without card',
                    language === 'es' ? 'Sin permanencia' : 'No commitment',
                    language === 'es' ? 'Migración de datos incluida' : 'Data migration included',
                    language === 'es' ? 'Soporte en español' : 'Spanish support',
                    language === 'es' ? 'Actualizaciones continuas' : 'Continuous updates'
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.5
                        }
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-400/50 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white leading-tight">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6"
            >
              <Clock className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Casos de Éxito' : 'Success Stories'}
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'El plan perfecto' : 'The perfect plan'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'para cada etapa' : 'for every stage'}
              </span>
            </h2>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Descubre cómo diferentes negocios utilizan StorageFy para crecer y automatizar sus operaciones.'
                : 'Discover how different businesses use StorageFy to grow and automate their operations.'
              }
            </p>
          </FadeInUp>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accent-600">{useCase.plan}</div>
                      <div className="text-lg font-bold text-primary-800">{useCase.title}</div>
                    </div>
                  </div>

                  <p className="text-primary-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    {useCase.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-2xl font-bold text-primary-800">{metric.value}</div>
                        <div className="text-xs text-primary-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              {language === 'es' ? 'Lo que dicen nuestros clientes' : 'What our clients say'}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Empresas de todos los tamaños confían en StorageFy para gestionar sus trasteros.'
                : 'Companies of all sizes trust StorageFy to manage their storage units.'
              }
            </p>
          </FadeInUp>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-accent-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/70">{testimonial.role}</div>
                    <div className="text-xs text-accent-400 font-semibold mt-1">{testimonial.plan}</div>
                  </div>
                </div>

                <p className="text-white/90 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-accent-400 font-semibold text-sm">
                    💰 {testimonial.savings}
                  </div>
                </div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6"
            >
              <Star className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? '¿Tienes dudas?' : 'Have questions?'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'Aquí las respuestas' : 'Here are the answers'}
              </span>
            </h2>
          </FadeInUp>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.05
                  }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-accent-200 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary-800 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-primary-600 leading-relaxed">
                    {faq.answer}
                  </div>
          </motion.div>
        </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              {language === 'es' ? '¿Listo para empezar?' : 'Ready to get started?'}
            </h2>

            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Únete a los negocios que ya transformaron su gestión de trasteros con StorageFy.'
                : 'Join the businesses that have already transformed their storage management with StorageFy.'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {language === 'es' ? 'Probar Gratis 14 Días' : 'Try Free 14 Days'}
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                {language === 'es' ? 'Hablar con Ventas' : 'Talk to Sales'}
              </motion.a>
            </div>

            <p className="mt-8 text-sm text-white/60">
              {language === 'es' 
                ? '✓ Sin tarjeta de crédito  ✓ Sin permanencia  ✓ Soporte en español' 
                : '✓ No credit card  ✓ No commitment  ✓ Spanish support'
              }
            </p>
          </FadeInUp>
      </div>
      </section>
    </div>
  )
}
