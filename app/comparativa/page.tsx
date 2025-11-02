'use client'

import { motion } from 'framer-motion'
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Zap,
  ArrowRight,
  Globe,
  Shield,
  Clock,
  Euro,
  Target
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function ComparativaPage() {
  const { language } = useLanguage()

  const localComparison = [
    {
      feature: language === 'es' ? 'Precio inicial' : 'Starting price',
      storagefy: language === 'es' ? '€49/mes' : '€49/month',
      competitor: language === 'es' ? '€150-300/mes' : '€150-300/month',
      storagefyHas: true,
      competitorHas: true
    },
    {
      feature: language === 'es' ? 'Widget de captación' : 'Capture widget',
      storagefy: language === 'es' ? 'Incluido en todos los planes' : 'Included in all plans',
      competitor: language === 'es' ? 'No disponible' : 'Not available',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Onboarding' : 'Onboarding',
      storagefy: language === 'es' ? '24-48 horas' : '24-48 hours',
      competitor: language === 'es' ? '2-4 semanas' : '2-4 weeks',
      storagefyHas: true,
      competitorHas: true
    },
    {
      feature: language === 'es' ? 'Soporte en español' : 'Spanish support',
      storagefy: language === 'es' ? 'Nativo, equipo en España' : 'Native, team in Spain',
      competitor: language === 'es' ? 'Variable' : 'Variable',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Facturación automática' : 'Automatic invoicing',
      storagefy: language === 'es' ? 'Completa con IVA' : 'Complete with VAT',
      competitor: language === 'es' ? 'Parcial' : 'Partial',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Links de pago online' : 'Online payment links',
      storagefy: language === 'es' ? 'Incluido (Stripe)' : 'Included (Stripe)',
      competitor: language === 'es' ? 'No disponible' : 'Not available',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Planos interactivos' : 'Interactive floor plans',
      storagefy: language === 'es' ? 'Sí, con time travel' : 'Yes, with time travel',
      competitor: language === 'es' ? 'No' : 'No',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Multi-locación' : 'Multi-location',
      storagefy: language === 'es' ? 'Ilimitado' : 'Unlimited',
      competitor: language === 'es' ? 'Limitado' : 'Limited',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Migración de datos' : 'Data migration',
      storagefy: language === 'es' ? 'Incluida gratis' : 'Included free',
      competitor: language === 'es' ? 'Costo extra' : 'Extra cost',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Recordatorios automáticos' : 'Automatic reminders',
      storagefy: language === 'es' ? 'Sí' : 'Yes',
      competitor: language === 'es' ? 'Parcial' : 'Partial',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Contratos múltiples unidades' : 'Multi-unit contracts',
      storagefy: language === 'es' ? 'Sí' : 'Yes',
      competitor: language === 'es' ? 'No' : 'No',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Tablón de anuncios' : 'Announcement board',
      storagefy: language === 'es' ? 'Sí' : 'Yes',
      competitor: language === 'es' ? 'No' : 'No',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Actualizaciones' : 'Updates',
      storagefy: language === 'es' ? 'Continuas sin costo' : 'Continuous at no cost',
      competitor: language === 'es' ? 'Versionadas' : 'Versioned',
      storagefyHas: true,
      competitorHas: true
    }
  ]

  const internationalComparison = [
    {
      feature: language === 'es' ? 'Idioma' : 'Language',
      storagefy: language === 'es' ? 'Español nativo' : 'Native Spanish',
      competitor: language === 'es' ? 'Inglés (traducción)' : 'English (translation)',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Adaptado a España' : 'Adapted to Spain',
      storagefy: language === 'es' ? 'RGPD, IVA 21%, terminología española' : 'GDPR, 21% VAT, Spanish terminology',
      competitor: language === 'es' ? 'Genérico' : 'Generic',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Terminología' : 'Terminology',
      storagefy: language === 'es' ? 'Trasteros, locaciones, unidades' : 'Storage units, locations, units',
      competitor: language === 'es' ? 'Storage, facilities' : 'Storage, facilities',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Soporte' : 'Support',
      storagefy: language === 'es' ? 'Zona horaria España (CET)' : 'Spain timezone (CET)',
      competitor: language === 'es' ? 'Zona horaria diferente' : 'Different timezone',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Precio' : 'Price',
      storagefy: language === 'es' ? 'Desde €49/mes' : 'From €49/month',
      competitor: language === 'es' ? '$99-200/mes' : '$99-200/month',
      storagefyHas: true,
      competitorHas: true
    },
    {
      feature: language === 'es' ? 'Conocimiento del mercado' : 'Market knowledge',
      storagefy: language === 'es' ? 'Especializado en España' : 'Specialized in Spain',
      competitor: language === 'es' ? 'Genérico' : 'Generic',
      storagefyHas: true,
      competitorHas: false
    },
    {
      feature: language === 'es' ? 'Formas de pago' : 'Payment methods',
      storagefy: language === 'es' ? 'Stripe (tarjetas españolas)' : 'Stripe (Spanish cards)',
      competitor: language === 'es' ? 'PayPal, Stripe genérico' : 'PayPal, generic Stripe',
      storagefyHas: true,
      competitorHas: true
    },
    {
      feature: language === 'es' ? 'Facturación' : 'Invoicing',
      storagefy: language === 'es' ? 'IVA 21% español' : '21% Spanish VAT',
      competitor: language === 'es' ? 'IVA variable' : 'Variable VAT',
      storagefyHas: true,
      competitorHas: false
    }
  ]

  const advantages = [
    {
      icon: Target,
      title: language === 'es' ? 'Especialización Vertical' : 'Vertical Specialization',
      description: language === 'es'
        ? 'No somos un CRM genérico adaptado. Somos específicos para trasteros con features únicos del sector, terminología correcta y flujos de trabajo optimizados para el negocio.'
        : 'We are not a generic CRM adapted. We are specific for storage with unique sector features, correct terminology and workflows optimized for the business.'
    },
    {
      icon: Globe,
      title: language === 'es' ? 'Plataforma Todo-en-Uno' : 'All-in-One Platform',
      description: language === 'es'
        ? 'No necesitas múltiples herramientas. Todo está integrado: CRM, facturación, pagos, reservas y widget. Todo habla entre sí.'
        : 'You don\'t need multiple tools. Everything is integrated: CRM, invoicing, payments, reservations and widget. Everything talks to each other.'
    },
    {
      icon: Zap,
      title: language === 'es' ? 'Widget de Captación Único' : 'Unique Capture Widget',
      description: language === 'es'
        ? 'Ninguna competencia en España lo ofrece. Lo incluimos en todos los planes con generación de leads automática 24/7 y ROI demostrable desde el primer día.'
        : 'No competition in Spain offers it. We include it in all plans with automatic 24/7 lead generation and demonstrable ROI from day one.'
    },
    {
      icon: Clock,
      title: language === 'es' ? 'Onboarding Rápido' : 'Fast Onboarding',
      description: language === 'es'
        ? 'Competencia: 2-4 semanas. StorageFy: 24-48 horas. Interfaz intuitiva que no requiere capacitación, migración de datos incluida y soporte en español desde el día 1.'
        : 'Competition: 2-4 weeks. StorageFy: 24-48 hours. Intuitive interface that requires no training, included data migration and Spanish support from day 1.'
    },
    {
      icon: Euro,
      title: language === 'es' ? 'Pricing Disruptivo' : 'Disruptive Pricing',
      description: language === 'es'
        ? 'Competencia española: €150-300/mes mínimo. StorageFy: Desde €49/mes. Sin costos de setup, sin permanencia, sin sorpresas.'
        : 'Spanish competition: €150-300/month minimum. StorageFy: From €49/month. No setup costs, no commitment, no surprises.'
    },
    {
      icon: TrendingUp,
      title: language === 'es' ? 'Tecnología Moderna' : 'Modern Technology',
      description: language === 'es'
        ? 'Más rápido que la competencia, mobile-first design, UX moderna y actualizada, updates continuos sin downtime y stack tecnológico moderno.'
        : 'Faster than competition, mobile-first design, modern and updated UX, continuous updates without downtime and modern tech stack.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
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
              <TrendingUp className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Comparativa' : 'Comparison'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'StorageFy vs.' : 'StorageFy vs.'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'Competencia' : 'Competition'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'Descubre por qué StorageFy es la mejor opción para gestionar tu negocio de trasteros en España.'
                : 'Discover why StorageFy is the best option to manage your storage business in Spain.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Local Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'StorageFy vs. Competencia Española' : 'StorageFy vs. Spanish Competition'}
            </h2>
          </FadeInUp>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">
                      {language === 'es' ? 'Característica' : 'Feature'}
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="w-5 h-5 text-accent-400" />
                        StorageFy
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      {language === 'es' ? 'Competencia Local' : 'Local Competition'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {localComparison.map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`border-b border-gray-100 hover:bg-primary-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="px-6 py-4 font-medium text-primary-800">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.storagefyHas ? (
                            <>
                              <Check className="w-5 h-5 text-accent-500" />
                              <span className="text-primary-700">{row.storagefy}</span>
                            </>
                          ) : (
                            <>
                              <X className="w-5 h-5 text-red-400" />
                              <span className="text-gray-400">{row.storagefy}</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.competitorHas ? (
                            <>
                              <Check className="w-5 h-5 text-gray-400" />
                              <span className="text-primary-700">{row.competitor}</span>
                            </>
                          ) : (
                            <>
                              <X className="w-5 h-5 text-red-400" />
                              <span className="text-gray-400">{row.competitor}</span>
                            </>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* International Comparison */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'StorageFy vs. Competencia Internacional' : 'StorageFy vs. International Competition'}
            </h2>
          </FadeInUp>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">
                      {language === 'es' ? 'Característica' : 'Feature'}
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="w-5 h-5 text-accent-400" />
                        StorageFy
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      {language === 'es' ? 'Competencia Intl' : 'International Competition'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {internationalComparison.map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`border-b border-gray-100 hover:bg-primary-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="px-6 py-4 font-medium text-primary-800">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.storagefyHas ? (
                            <>
                              <Check className="w-5 h-5 text-accent-500" />
                              <span className="text-primary-700">{row.storagefy}</span>
                            </>
                          ) : (
                            <>
                              <X className="w-5 h-5 text-red-400" />
                              <span className="text-gray-400">{row.storagefy}</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.competitorHas ? (
                            <>
                              <Check className="w-5 h-5 text-gray-400" />
                              <span className="text-primary-700">{row.competitor}</span>
                            </>
                          ) : (
                            <>
                              <X className="w-5 h-5 text-red-400" />
                              <span className="text-gray-400">{row.competitor}</span>
                            </>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Ventajas Competitivas Clave' : 'Key Competitive Advantages'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <motion.div
                  key={advantage.title}
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
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3">{advantage.title}</h3>
                  <p className="text-primary-600 leading-relaxed">{advantage.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              {language === 'es' ? '¿Convencido?' : 'Convinced?'}
            </h2>

            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Únete a más de 500 negocios que ya eligieron StorageFy como su plataforma de gestión.'
                : 'Join over 500 businesses that have already chosen StorageFy as their management platform.'
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
                href="/pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                {language === 'es' ? 'Ver Precios' : 'View Pricing'}
              </motion.a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}

