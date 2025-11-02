'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  Zap,
  ArrowRight,
  Star,
  CreditCard,
  Globe,
  FileText,
  Code,
  Link as LinkIcon
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function IntegracionesPage() {
  const { language } = useLanguage()

  const available = [
    {
      icon: CreditCard,
      name: 'Stripe',
      status: language === 'es' ? 'Disponible' : 'Available',
      description: language === 'es'
        ? 'Pagos online con tarjeta, links de pago 24/7 y webhooks automáticos.'
        : 'Online card payments, 24/7 payment links and automatic webhooks.',
      features: [
        language === 'es' ? 'Pagos con tarjeta' : 'Card payments',
        language === 'es' ? 'Links de pago 24/7' : '24/7 payment links',
        language === 'es' ? 'Webhooks automáticos' : 'Automatic webhooks',
        language === 'es' ? 'Gestión de reembolsos' : 'Refund management'
      ],
      color: 'green'
    },
    {
      icon: Globe,
      name: language === 'es' ? 'Widget de Reservas' : 'Reservation Widget',
      status: language === 'es' ? 'Disponible' : 'Available',
      description: language === 'es'
        ? 'Para cualquier website. WordPress, Wix, HTML estático. Totalmente personalizable.'
        : 'For any website. WordPress, Wix, static HTML. Fully customizable.',
      features: [
        language === 'es' ? 'Para cualquier website' : 'For any website',
        language === 'es' ? 'WordPress, Wix, HTML' : 'WordPress, Wix, HTML',
        language === 'es' ? 'Personalizable' : 'Customizable',
        language === 'es' ? 'Catálogo en tiempo real' : 'Real-time catalog'
      ],
      color: 'green'
    }
  ]

  const inDevelopment = [
    {
      icon: FileText,
      name: language === 'es' ? 'Sistemas Contables' : 'Accounting Systems',
      timeframe: 'Q1 2025',
      description: language === 'es'
        ? 'A3 Contabilidad, ContaPlus. Exportación automática a sistemas contables.'
        : 'A3 Accounting, ContaPlus. Automatic export to accounting systems.',
      features: [
        language === 'es' ? 'A3 Contabilidad' : 'A3 Accounting',
        language === 'es' ? 'ContaPlus' : 'ContaPlus',
        language === 'es' ? 'Exportación automática' : 'Automatic export'
      ],
      color: 'blue'
    },
    {
      icon: LinkIcon,
      name: language === 'es' ? 'Calendarios' : 'Calendars',
      timeframe: 'Q1 2025',
      description: language === 'es'
        ? 'Google Calendar, Outlook. Sincronización bidireccional de eventos.'
        : 'Google Calendar, Outlook. Bidirectional event synchronization.',
      features: [
        language === 'es' ? 'Google Calendar' : 'Google Calendar',
        language === 'es' ? 'Outlook' : 'Outlook',
        language === 'es' ? 'Sincronización bidireccional' : 'Bidirectional sync'
      ],
      color: 'blue'
    },
    {
      icon: Zap,
      name: language === 'es' ? 'Email Marketing' : 'Email Marketing',
      timeframe: 'Q2 2025',
      description: language === 'es'
        ? 'Mailchimp, SendGrid. Automatización de campañas de email marketing.'
        : 'Mailchimp, SendGrid. Email marketing campaign automation.',
      features: [
        language === 'es' ? 'Mailchimp' : 'Mailchimp',
        language === 'es' ? 'SendGrid' : 'SendGrid',
        language === 'es' ? 'Automatización de campañas' : 'Campaign automation'
      ],
      color: 'blue'
    }
  ]

  const apiInfo = {
    title: language === 'es' ? 'API para Desarrolladores' : 'API for Developers',
    description: language === 'es'
      ? 'Documentación completa de API disponible para clientes Enterprise. Endpoints disponibles, ejemplos de código y sandbox para testing.'
      : 'Complete API documentation available for Enterprise clients. Available endpoints, code examples and sandbox for testing.',
    features: [
      language === 'es' ? 'Documentación completa de API' : 'Complete API documentation',
      language === 'es' ? 'Endpoints disponibles' : 'Available endpoints',
      language === 'es' ? 'Ejemplos de código' : 'Code examples',
      language === 'es' ? 'Sandbox para testing' : 'Sandbox for testing',
      language === 'es' ? 'Soporte técnico dedicado' : 'Dedicated technical support'
    ],
    plan: 'Enterprise'
  }

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
              <LinkIcon className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Integraciones' : 'Integrations'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Conecta StorageFy' : 'Connect StorageFy'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'con tus herramientas' : 'with your tools'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'Integra StorageFy con las herramientas que ya usas. Más integraciones disponibles y en desarrollo.'
                : 'Integrate StorageFy with the tools you already use. More integrations available and in development.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Available Integrations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                {language === 'es' ? 'Disponibles' : 'Available'}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Integraciones Disponibles' : 'Available Integrations'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            {available.map((integration, index) => {
              const Icon = integration.icon
              return (
                <motion.div
                  key={integration.name}
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
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200 hover:border-green-300 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-800">{integration.name}</h3>
                        <div className="text-sm text-green-600 font-semibold">{integration.status}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-primary-600 mb-6 leading-relaxed">{integration.description}</p>

                  <div className="space-y-2">
                    {integration.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-primary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* In Development */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                {language === 'es' ? 'En Desarrollo' : 'In Development'}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Próximamente' : 'Coming Soon'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {inDevelopment.map((integration, index) => {
              const Icon = integration.icon
              return (
                <motion.div
                  key={integration.name}
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
                  className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-800">{integration.name}</h3>
                      <div className="text-xs text-blue-600 font-semibold">{integration.timeframe}</div>
                    </div>
                  </div>

                  <p className="text-primary-600 text-sm mb-4 leading-relaxed">{integration.description}</p>

                  <div className="space-y-2">
                    {integration.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-primary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-8 text-white shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{apiInfo.title}</h3>
                <div className="px-3 py-1 bg-accent-500 rounded-full text-sm font-semibold inline-block">
                  {apiInfo.plan}
                </div>
              </div>
            </div>

            <p className="text-white/80 mb-6 leading-relaxed">{apiInfo.description}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {apiInfo.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'es' ? 'Solicitar Acceso API' : 'Request API Access'}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-800">
              {language === 'es' ? '¿Necesitas otra integración?' : 'Need another integration?'}
            </h2>
            <p className="text-xl text-primary-600 mb-8">
              {language === 'es'
                ? 'Estamos abiertos a sugerencias. Si necesitas una integración específica, contáctanos y la evaluamos.'
                : 'We are open to suggestions. If you need a specific integration, contact us and we\'ll evaluate it.'}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'es' ? 'Sugerir Integración' : 'Suggest Integration'}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}

