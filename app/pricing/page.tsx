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

  const plans = [
    {
      name: language === 'es' ? 'Starter' : 'Starter',
      price: '49',
      period: language === 'es' ? '/mes' : '/month',
      description: language === 'es' ? 'Perfecto para emprendedores' : 'Perfect for entrepreneurs',
      icon: Zap,
      color: 'blue',
      popular: false,
      features: [
        language === 'es' ? '1 Locación' : '1 Location',
        language === 'es' ? 'Hasta 50 unidades' : 'Up to 50 units',
        language === 'es' ? '2 usuarios' : '2 users',
        language === 'es' ? 'Widget básico' : 'Basic widget',
        language === 'es' ? 'Soporte por email' : 'Email support',
        language === 'es' ? 'Gestión básica de pagos' : 'Basic payment management',
        language === 'es' ? 'Reportes mensuales' : 'Monthly reports',
        language === 'es' ? 'Recordatorios automáticos' : 'Automatic reminders'
      ]
    },
    {
      name: language === 'es' ? 'Professional' : 'Professional',
      price: '99',
      period: language === 'es' ? '/mes' : '/month',
      description: language === 'es' ? 'Ideal para negocios en crecimiento' : 'Ideal for growing businesses',
      icon: Star,
      color: 'green',
      popular: true,
      features: [
        language === 'es' ? '3 Locaciones' : '3 Locations',
        language === 'es' ? 'Hasta 200 unidades' : 'Up to 200 units',
        language === 'es' ? '5 usuarios' : '5 users',
        language === 'es' ? 'Widget + Stripe completo' : 'Widget + Full Stripe',
        language === 'es' ? 'Reportes avanzados' : 'Advanced reports',
        language === 'es' ? 'Soporte prioritario' : 'Priority support',
        language === 'es' ? 'Fotos DNI seguras' : 'Secure ID photos',
        language === 'es' ? 'Recordatorios automáticos' : 'Automatic reminders',
        language === 'es' ? 'Contratos digitales' : 'Digital contracts',
        language === 'es' ? 'Analytics en tiempo real' : 'Real-time analytics'
      ]
    },
    {
      name: language === 'es' ? 'Enterprise' : 'Enterprise',
      price: language === 'es' ? 'Personalizado' : 'Custom',
      period: '',
      description: language === 'es' ? 'Para grandes operadores' : 'For large operators',
      icon: Crown,
      color: 'purple',
      popular: false,
      features: [
        language === 'es' ? 'Locaciones ilimitadas' : 'Unlimited locations',
        language === 'es' ? 'Unidades ilimitadas' : 'Unlimited units',
        language === 'es' ? 'Usuarios ilimitados' : 'Unlimited users',
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

  const useCases = [
    {
      icon: Building2,
      plan: 'Starter',
      title: language === 'es' ? 'Emprendedor Individual' : 'Solo Entrepreneur',
      description: language === 'es' 
        ? 'Juan acaba de abrir su primer negocio de trasteros con 30 unidades. Necesita una solución simple para gestionar contratos y cobros.'
        : 'Juan just opened his first storage business with 30 units. He needs a simple solution to manage contracts and payments.',
      metrics: [
        { value: '30', label: language === 'es' ? 'unidades' : 'units' },
        { value: '1', label: language === 'es' ? 'locación' : 'location' },
        { value: '85%', label: language === 'es' ? 'ocupación' : 'occupancy' }
      ]
    },
    {
      icon: Warehouse,
      plan: 'Professional',
      title: language === 'es' ? 'Negocio en Crecimiento' : 'Growing Business',
      description: language === 'es'
        ? 'María gestiona 2 locaciones con 150 unidades. Necesita reportes avanzados y automatización completa para escalar su operación.'
        : 'María manages 2 locations with 150 units. She needs advanced reports and full automation to scale her operation.',
      metrics: [
        { value: '150', label: language === 'es' ? 'unidades' : 'units' },
        { value: '2', label: language === 'es' ? 'locaciones' : 'locations' },
        { value: '92%', label: language === 'es' ? 'ocupación' : 'occupancy' }
      ]
    },
    {
      icon: Building,
      plan: 'Enterprise',
      title: language === 'es' ? 'Gran Operador' : 'Large Operator',
      description: language === 'es'
        ? 'StorageMax gestiona 10 locaciones con más de 800 unidades. Requiere API personalizada e integraciones con sus sistemas existentes.'
        : 'StorageMax manages 10 locations with over 800 units. They require custom API and integrations with their existing systems.',
      metrics: [
        { value: '800+', label: language === 'es' ? 'unidades' : 'units' },
        { value: '10', label: language === 'es' ? 'locaciones' : 'locations' },
        { value: '95%', label: language === 'es' ? 'ocupación' : 'occupancy' }
      ]
    }
  ]

  const faqs = [
    {
      question: language === 'es' ? '¿Puedo cambiar de plan en cualquier momento?' : 'Can I change plans at any time?',
      answer: language === 'es'
        ? 'Sí, puedes cambiar de plan en cualquier momento. Si haces upgrade, solo pagas la diferencia prorrateada. Si haces downgrade, el cambio se aplica en tu próximo ciclo de facturación.'
        : 'Yes, you can change plans at any time. If you upgrade, you only pay the prorated difference. If you downgrade, the change applies on your next billing cycle.'
    },
    {
      question: language === 'es' ? '¿Hay descuentos por pago anual?' : 'Are there discounts for annual payment?',
      answer: language === 'es'
        ? 'Sí, ofrecemos un 20% de descuento en todos los planes si optas por facturación anual. Contacta con nuestro equipo de ventas para más detalles.'
        : 'Yes, we offer a 20% discount on all plans if you opt for annual billing. Contact our sales team for more details.'
    },
    {
      question: language === 'es' ? '¿Qué incluye el soporte técnico?' : 'What does technical support include?',
      answer: language === 'es'
        ? 'El soporte varía según el plan: Starter incluye soporte por email (respuesta en 24h), Professional incluye soporte prioritario (respuesta en 4h), y Enterprise incluye soporte 24/7 con account manager dedicado y SLA garantizado.'
        : 'Support varies by plan: Starter includes email support (24h response), Professional includes priority support (4h response), and Enterprise includes 24/7 support with dedicated account manager and guaranteed SLA.'
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
        ? 'No hay costos de configuración en los planes Starter y Professional. El plan Enterprise incluye onboarding dedicado y configuración personalizada sin costo adicional.'
        : 'There are no setup costs for Starter and Professional plans. The Enterprise plan includes dedicated onboarding and custom setup at no additional cost.'
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
      question: language === 'es' ? '¿Hay límites de usuarios por plan?' : 'Are there user limits per plan?',
      answer: language === 'es'
        ? 'Sí, cada plan tiene límites de usuarios: Starter (2 usuarios), Professional (5 usuarios), Enterprise (usuarios ilimitados). Puedes agregar usuarios adicionales por €10/mes en planes Starter y Professional.'
        : 'Yes, each plan has user limits: Starter (2 users), Professional (5 users), Enterprise (unlimited users). You can add additional users for €10/month on Starter and Professional plans.'
    }
  ]

  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      role: language === 'es' ? 'CEO, TrasterosMadrid' : 'CEO, TrasterosMadrid',
      plan: 'Professional',
      quote: language === 'es'
        ? 'Desde que implementamos StorageFy Professional, nuestra ocupación aumentó del 75% al 92% en solo 6 meses. La inversión se pagó sola en el primer mes.'
        : 'Since implementing StorageFy Professional, our occupancy increased from 75% to 92% in just 6 months. The investment paid for itself in the first month.',
      avatar: '👨‍💼',
      savings: language === 'es' ? '€2,400/mes ahorrados' : '€2,400/month saved'
    },
    {
      name: 'Ana Martínez',
      role: language === 'es' ? 'Propietaria, BoxStorage' : 'Owner, BoxStorage',
      plan: 'Starter',
      quote: language === 'es'
        ? 'Como emprendedora, necesitaba algo simple pero profesional. Con €49/mes tengo todo lo que necesito para gestionar mis 40 trasteros. Increíble valor.'
        : 'As an entrepreneur, I needed something simple but professional. For €49/month I have everything I need to manage my 40 storage units. Incredible value.',
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
                {language === 'es' ? 'Precios transparentes' : 'Transparent pricing'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'que crecen contigo' : 'that grow with you'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'Elige el plan perfecto para tu negocio. Desde emprendedores hasta grandes operadores. Sin sorpresas, sin costos ocultos.'
                : 'Choose the perfect plan for your business. From entrepreneurs to large operators. No surprises, no hidden costs.'
              }
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
              {[
                { icon: Users, value: '500+', label: language === 'es' ? 'Clientes' : 'Clients' },
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

      {/* Pricing Cards */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                      <div className="flex items-baseline justify-center">
                        {plan.price === 'Personalizado' || plan.price === 'Custom' ? (
                          <span className="text-3xl lg:text-4xl font-bold text-primary-800">{plan.price}</span>
                        ) : (
                          <>
                            <span className="text-5xl font-bold text-primary-800">€{plan.price}</span>
                            <span className="text-primary-600 ml-2">{plan.period}</span>
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
                      {plan.name === 'Enterprise' 
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
                ? 'Únete a más de 500 negocios que ya transformaron su gestión de trasteros con StorageFy.'
                : 'Join over 500 businesses that have already transformed their storage management with StorageFy.'
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
