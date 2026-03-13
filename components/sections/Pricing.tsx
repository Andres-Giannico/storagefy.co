'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, CheckCircle, Star } from 'lucide-react'
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
      description: language === 'es' ? 'Hasta 140 unidades. Precio simple y transparente' : 'Up to 140 units. Simple and transparent pricing',
      icon: Star,
      color: 'green',
      popular: true,
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
      ]
    }
  ]

  const benefits = [
    language === 'es' ? 'Demo en 2 min, sin tarjeta' : 'Demo in 2 min, no card',
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
              ? 'Creamos contigo. Hasta 140 unidades a 1 EUR/unidad + IVA. ¿Más de 140? Hablamos y ajustamos el precio a tu medida con descuentos por volumen.'
              : 'We grow with you. Up to 140 units at 1 EUR/unit + VAT. More than 140? Let\'s talk and adjust the price to your needs with volume discounts.'
            }
          </p>
        </FadeInUp>

        {/* Pricing Card */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-4xl">
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
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-accent-200 shadow-xl transition-all duration-300 h-full">
                  
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
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            delay: featureIndex * 0.03,
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
                    href="/demo-trial"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 shadow-lg hover:shadow-xl"
                  >
                    {language === 'es' ? 'Probar demo ahora' : 'Try demo now'}
                  </motion.a>

                  {/* Trust Badge */}
                  <p className="text-xs text-gray-500 text-center mt-3">
                    {language === 'es' ? '✓ Demo en 2 min • Sin tarjeta' : '✓ Demo in 2 min • No card'}
                  </p>
                </div>
              </motion.div>
            )
          })}
          </div>
        </div>

        {/* Note about expansion */}
        <FadeInUp className="mt-12">
          <div className="bg-gray-50 rounded-xl px-8 py-4 text-sm text-gray-600 text-center">
            {language === 'es' 
              ? '💡 ¿Más de 140 unidades? Contacta con nosotros para un precio personalizado con descuentos por volumen.'
              : '💡 More than 140 units? Contact us for custom pricing with volume discounts.'}
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
                {language === 'es' ? 'Todo incluido' : 'Everything included'}
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
