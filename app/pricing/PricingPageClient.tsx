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

export default function PricingPageClient() {
  const { language } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [units, setUnits] = useState(50)

  const plans = [
    {
      id: 'starter',
      name: language === 'es' ? 'Starter' : 'Starter',
      price: 29,
      period: language === 'es' ? 'mes' : 'month',
      description: language === 'es' 
        ? 'Perfecto para empezar'
        : 'Perfect to get started',
      icon: Zap,
      features: [
        language === 'es' ? 'Hasta 50 unidades' : 'Up to 50 units',
        language === 'es' ? 'Gestión de clientes' : 'Customer management',
        language === 'es' ? 'Contratos digitales' : 'Digital contracts',
        language === 'es' ? 'Sistema de pagos' : 'Payment system',
        language === 'es' ? 'Reportes básicos' : 'Basic reports',
        language === 'es' ? 'Soporte por email' : 'Email support',
      ],
      cta: language === 'es' ? 'Comenzar prueba gratis' : 'Start free trial',
      popular: false,
    },
    {
      id: 'professional',
      name: language === 'es' ? 'Professional' : 'Professional',
      price: 79,
      period: language === 'es' ? 'mes' : 'month',
      description: language === 'es' 
        ? 'Para negocios en crecimiento'
        : 'For growing businesses',
      icon: TrendingUp,
      features: [
        language === 'es' ? 'Hasta 200 unidades' : 'Up to 200 units',
        language === 'es' ? 'Todo en Starter' : 'Everything in Starter',
        language === 'es' ? 'Planos interactivos' : 'Interactive floor plans',
        language === 'es' ? 'Widget de reservas' : 'Reservation widget',
        language === 'es' ? 'Reportes avanzados' : 'Advanced reports',
        language === 'es' ? 'Soporte prioritario' : 'Priority support',
        language === 'es' ? 'API access' : 'API access',
      ],
      cta: language === 'es' ? 'Comenzar prueba gratis' : 'Start free trial',
      popular: true,
    },
    {
      id: 'enterprise',
      name: language === 'es' ? 'Enterprise' : 'Enterprise',
      price: 149,
      period: language === 'es' ? 'mes' : 'month',
      description: language === 'es' 
        ? 'Para grandes operaciones'
        : 'For large operations',
      icon: Crown,
      features: [
        language === 'es' ? 'Unidades ilimitadas' : 'Unlimited units',
        language === 'es' ? 'Todo en Professional' : 'Everything in Professional',
        language === 'es' ? 'Múltiples ubicaciones' : 'Multiple locations',
        language === 'es' ? 'Gestión de usuarios avanzada' : 'Advanced user management',
        language === 'es' ? 'Integraciones personalizadas' : 'Custom integrations',
        language === 'es' ? 'Soporte 24/7' : '24/7 support',
        language === 'es' ? 'Onboarding dedicado' : 'Dedicated onboarding',
      ],
      cta: language === 'es' ? 'Contactar ventas' : 'Contact sales',
      popular: false,
    },
  ]

  const faqs = language === 'es' ? [
    {
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer: 'Sí, puedes actualizar o degradar tu plan en cualquier momento desde la configuración de tu cuenta.',
    },
    {
      question: '¿Hay límite en el número de usuarios?',
      answer: 'Los planes Starter y Professional incluyen hasta 5 usuarios. El plan Enterprise incluye usuarios ilimitados.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos todas las tarjetas de crédito principales y transferencias bancarias.',
    },
    {
      question: '¿Ofrecen descuentos anuales?',
      answer: 'Sí, ofrecemos un descuento del 20% si pagas anualmente.',
    },
  ] : [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings.',
    },
    {
      question: 'Is there a limit on the number of users?',
      answer: 'Starter and Professional plans include up to 5 users. Enterprise plan includes unlimited users.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards and bank transfers.',
    },
    {
      question: 'Do you offer annual discounts?',
      answer: 'Yes, we offer a 20% discount if you pay annually.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <FadeInUp className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-800 mb-4">
            {language === 'es' ? 'Precios Transparentes' : 'Transparent Pricing'}
          </h1>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Elige el plan perfecto para tu negocio. Todos los planes incluyen prueba gratis de 14 días.'
              : 'Choose the perfect plan for your business. All plans include a 14-day free trial.'}
          </p>
        </FadeInUp>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary-800">
                      €{plan.price}
                    </span>
                    <span className="text-primary-600">
                      /{plan.period}
                    </span>
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

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700'
                    : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <FadeInUp className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-8">
            {language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
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

