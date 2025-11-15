'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, CheckCircle, Star, Zap, Crown } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

const Pricing = () => {
  const { language } = useLanguage()

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
        language === 'es' ? 'Planos ilimitados' : 'Unlimited floor plans',
        language === 'es' ? 'Analytics avanzados' : 'Advanced analytics',
        language === 'es' ? 'Integraciones personalizadas' : 'Custom integrations'
      ]
    }
  ]

  const benefits = [
    language === 'es' ? '14 días gratis sin tarjeta' : '14 days free without card',
    language === 'es' ? 'Sin permanencia' : 'No commitment',
    language === 'es' ? 'Migración de datos incluida' : 'Data migration included',
    language === 'es' ? 'Soporte en español' : 'Spanish support',
    language === 'es' ? 'Actualizaciones continuas' : 'Continuous updates'
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50/30 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6"
          >
            <Star className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium text-accent-700">
              {language === 'es' ? 'Planes de Precios' : 'Pricing Plans'}
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">
              {language === 'es' ? 'Precio simple:' : 'Simple pricing:'}
            </span>
            <br />
            <span className="text-primary-800">
              {language === 'es' ? '1 EUR por unidad' : '1 EUR per unit'}
            </span>
          </h2>

          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'es'
              ? 'Creamos contigo. Hasta 200 unidades a 1 EUR/unidad + IVA. ¿Más de 200? Hablamos y ajustamos el precio a tu medida con descuentos por volumen.'
              : 'We grow with you. Up to 200 units at 1 EUR/unit + VAT. More than 200? Let\'s talk and adjust the price to your needs with volume discounts.'
            }
          </p>
        </FadeInUp>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
              green: 'from-green-500 to-green-600 bg-green-100 text-green-600',
              purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600'
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
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
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
                    href={plan.name === 'Enterprise' || plan.name === 'Enterprise' ? '/contact' : '/demo'}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 shadow-lg hover:shadow-xl'
                        : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                    }`}
                  >
                    {(plan.name === 'Enterprise' || plan.name === 'Enterprise')
                      ? (language === 'es' ? 'Hablar con especialista' : 'Talk to specialist')
                      : (language === 'es' ? 'Comenzar prueba gratis' : 'Start free trial')
                    }
                  </motion.a>

                  {/* Trust Badge */}
                  {plan.name !== 'Enterprise' && plan.name !== 'Enterprise' && (
                    <p className="text-xs text-gray-500 text-center mt-3">
                      {language === 'es' ? '✓ 14 días gratis • Sin tarjeta' : '✓ 14 days free • No card'}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Detailed Comparison Table */}
        <FadeInUp className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-800 to-primary-700 px-8 py-6">
              <h3 className="text-2xl font-bold text-white text-center">
                {language === 'es' ? 'Comparación Detallada de Planes' : 'Detailed Plan Comparison'}
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-800">
                      {language === 'es' ? 'Características' : 'Features'}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-accent-600 bg-accent-50">Estándar</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-800">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { 
                      category: language === 'es' ? 'Capacidad' : 'Capacity',
                      features: [
                        { name: language === 'es' ? 'Locaciones' : 'Locations', standard: language === 'es' ? 'Ilimitadas' : 'Unlimited', enterprise: language === 'es' ? 'Ilimitadas' : 'Unlimited' },
                        { name: language === 'es' ? 'Unidades' : 'Units', standard: language === 'es' ? 'Hasta 200' : 'Up to 200', enterprise: language === 'es' ? 'Ilimitadas' : 'Unlimited' },
                        { name: language === 'es' ? 'Usuarios' : 'Users', standard: language === 'es' ? 'Ilimitados' : 'Unlimited', enterprise: language === 'es' ? 'Ilimitados' : 'Unlimited' }
                      ]
                    },
                    {
                      category: language === 'es' ? 'Funcionalidades' : 'Features',
                      features: [
                        { name: 'Widget reservas 24/7', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Contratos digitales' : 'Digital contracts', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Fotos DNI seguras' : 'Secure ID photos', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Contratos multi-unidad' : 'Multi-unit contracts', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Planos interactivos' : 'Interactive floor plans', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Tablón de anuncios' : 'Announcement board', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Onboarding guiado' : 'Guided onboarding', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Gestión de usuarios' : 'User management', standard: true, enterprise: true },
                        { name: 'API personalizada', standard: false, enterprise: true },
                        { name: language === 'es' ? 'Integraciones custom' : 'Custom integrations', standard: false, enterprise: true }
                      ]
                    },
                    {
                      category: language === 'es' ? 'Reportes' : 'Reports',
                      features: [
                        { name: language === 'es' ? 'Reportes básicos' : 'Basic reports', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Analytics en tiempo real' : 'Real-time analytics', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Exportación de datos' : 'Data export', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Dashboard personalizado' : 'Custom dashboard', standard: false, enterprise: true }
                      ]
                    },
                    {
                      category: language === 'es' ? 'Funcionalidades Avanzadas' : 'Advanced Features',
                      features: [
                        { name: language === 'es' ? 'Planos ilimitados' : 'Unlimited floor plans', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Analytics avanzados' : 'Advanced analytics', standard: false, enterprise: true },
                        { name: language === 'es' ? 'Gestión usuarios ilimitada' : 'Unlimited user management', standard: true, enterprise: true }
                      ]
                    },
                    {
                      category: language === 'es' ? 'Soporte' : 'Support',
                      features: [
                        { name: language === 'es' ? 'Soporte prioritario' : 'Priority support', standard: true, enterprise: true },
                        { name: language === 'es' ? 'Soporte 24/7' : '24/7 support', standard: false, enterprise: true },
                        { name: 'Account manager', standard: false, enterprise: true },
                        { name: 'SLA garantizado', standard: false, enterprise: true }
                      ]
                    }
                  ].map((section, sectionIndex) => (
                    <React.Fragment key={`section-${sectionIndex}`}>
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="px-6 py-3 text-sm font-semibold text-primary-800">
                          {section.category}
                        </td>
                      </tr>
                      {section.features.map((feature, featureIndex) => (
                        <tr key={`${sectionIndex}-${featureIndex}`} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm text-gray-700">{feature.name}</td>
                          <td className="px-6 py-4 text-center bg-accent-50/30">
                            {typeof feature.standard === 'boolean' ? (
                              feature.standard ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>
                            ) : (
                              <span className="text-sm font-medium text-gray-700">{feature.standard}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {typeof feature.enterprise === 'boolean' ? (
                              feature.enterprise ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>
                            ) : (
                              <span className="text-sm font-medium text-gray-700">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note about expansion */}
            <div className="bg-gray-50 px-8 py-4 text-sm text-gray-600 text-center border-t border-gray-100">
              {language === 'es' 
                ? '💡 ¿Más de 200 unidades? Contacta con nosotros para un precio personalizado con descuentos por volumen.'
                : '💡 More than 200 units? Contact us for custom pricing with volume discounts.'
              }
            </div>
          </div>
        </FadeInUp>

        {/* All Plans Include */}
        <FadeInUp className="mt-16">
          <div className="relative">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-3xl opacity-95"></div>
            
            {/* Decorative elements */}
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
                {benefits.map((benefit, index) => (
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
  )
}

export default Pricing
