'use client'

import { motion } from 'framer-motion'
import { 
  Rocket, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Zap,
  ArrowRight,
  Star,
  Phone,
  BarChart3,
  Bot,
  Calendar as CalendarIcon,
  CreditCard,
  Globe,
  FileText,
  Palette,
  TrendingUp,
  Eye,
  FileCheck,
  Share2,
  Code,
  RefreshCw
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function RoadmapPage() {
  const { language } = useLanguage()

  const development = [
    {
      icon: Phone,
      title: language === 'es' ? 'App móvil nativa' : 'Native mobile app',
      description: language === 'es'
        ? 'Gestión completa desde el móvil con notificaciones push y escaneo de códigos QR para acceso.'
        : 'Complete management from mobile with push notifications and QR code scanning for access.',
      timeframe: language === 'es' ? 'iOS y Android' : 'iOS and Android'
    },
    {
      icon: Zap,
      title: language === 'es' ? 'Notificaciones push en tiempo real' : 'Real-time push notifications',
      description: language === 'es'
        ? 'Alertas de pagos pendientes, nuevas reservas del widget y recordatorios automáticos.'
        : 'Alerts for pending payments, new widget reservations and automatic reminders.',
      timeframe: language === 'es' ? 'Próximos 3 meses' : 'Next 3 months'
    },
    {
      icon: BarChart3,
      title: language === 'es' ? 'Reportes personalizables' : 'Customizable reports',
      description: language === 'es'
        ? 'Crea tus propios reportes, guarda reportes favoritos y comparte con tu equipo.'
        : 'Create your own reports, save favorite reports and share with your team.',
      timeframe: language === 'es' ? 'Por usuario' : 'Per user'
    },
    {
      icon: Bot,
      title: language === 'es' ? 'Chatbot de atención con IA' : 'AI support chatbot',
      description: language === 'es'
        ? 'Responde preguntas comunes, guía a nuevos usuarios y disponible 24/7.'
        : 'Answers common questions, guides new users and available 24/7.',
      timeframe: language === 'es' ? 'Con IA' : 'With AI'
    },
    {
      icon: CalendarIcon,
      title: language === 'es' ? 'Integración con calendarios' : 'Calendar integration',
      description: language === 'es'
        ? 'Sincroniza eventos automáticamente con Google Calendar y Outlook. Ver contratos y pagos en tu calendario.'
        : 'Automatically sync events with Google Calendar and Outlook. View contracts and payments in your calendar.',
      timeframe: language === 'es' ? 'Google Calendar, Outlook' : 'Google Calendar, Outlook'
    },
    {
      icon: CreditCard,
      title: language === 'es' ? 'Múltiples métodos de pago' : 'Multiple payment methods',
      description: language === 'es'
        ? 'Bizum integrado, PayPal como opción y transferencia bancaria automatizada.'
        : 'Integrated Bizum, PayPal as option and automated bank transfer.',
      timeframe: language === 'es' ? 'Bizum, PayPal' : 'Bizum, PayPal'
    }
  ]

  const upcoming = [
    {
      icon: Phone,
      title: language === 'es' ? 'App para clientes' : 'Client app',
      description: language === 'es'
        ? 'Los clientes pueden ver sus contratos, historial de pagos y pagar directamente desde la app.'
        : 'Clients can view their contracts, payment history and pay directly from the app.',
      timeframe: language === 'es' ? '6 meses' : '6 months'
    },
    {
      icon: Globe,
      title: language === 'es' ? 'Multi-idioma completo' : 'Complete multi-language',
      description: language === 'es'
        ? 'Catalán, Euskera, Gallego, Inglés completo, Francés y Alemán.'
        : 'Catalan, Basque, Galician, Complete English, French and German.',
      timeframe: language === 'es' ? 'Más idiomas' : 'More languages'
    },
    {
      icon: FileText,
      title: language === 'es' ? 'Integraciones contables' : 'Accounting integrations',
      description: language === 'es'
        ? 'Exportación automática a sistemas contables como A3 y ContaPlus con sincronización bidireccional.'
        : 'Automatic export to accounting systems like A3 and ContaPlus with bidirectional synchronization.',
      timeframe: language === 'es' ? 'A3, ContaPlus' : 'A3, ContaPlus'
    },
    {
      icon: FileText,
      title: language === 'es' ? 'Templates de email personalizables' : 'Customizable email templates',
      description: language === 'es'
        ? 'Personaliza todos los emails, añade tu branding y múltiples idiomas.'
        : 'Customize all emails, add your branding and multiple languages.',
      timeframe: language === 'es' ? 'Personalización completa' : 'Complete customization'
    },
    {
      icon: Palette,
      title: language === 'es' ? 'Temas personalizables' : 'Customizable themes',
      description: language === 'es'
        ? 'Colores de tu marca, logo en todas partes y experiencia completamente personalizada.'
        : 'Your brand colors, logo everywhere and completely personalized experience.',
      timeframe: language === 'es' ? 'Por organización' : 'Per organization'
    },
    {
      icon: TrendingUp,
      title: language === 'es' ? 'Analytics avanzados con predicciones' : 'Advanced analytics with predictions',
      description: language === 'es'
        ? 'Predicción de ocupación, análisis de tendencias y recomendaciones de precios.'
        : 'Occupancy prediction, trend analysis and price recommendations.',
      timeframe: language === 'es' ? 'Con IA' : 'With AI'
    }
  ]

  const future = [
    {
      icon: TrendingUp,
      title: language === 'es' ? 'IA para optimización de precios' : 'AI for price optimization',
      description: language === 'es'
        ? 'Sugerencias de precios basadas en datos, análisis de mercado y optimización automática.'
        : 'Data-based price suggestions, market analysis and automatic optimization.',
      timeframe: language === 'es' ? '12 meses' : '12 months'
    },
    {
      icon: BarChart3,
      title: language === 'es' ? 'Dashboards personalizables por rol' : 'Customizable dashboards by role',
      description: language === 'es'
        ? 'Cada usuario ve lo que necesita, widgets configurables y vistas personalizadas.'
        : 'Each user sees what they need, configurable widgets and custom views.',
      timeframe: language === 'es' ? 'Por rol' : 'Per role'
    },
    {
      icon: FileCheck,
      title: language === 'es' ? 'Firma digital de contratos' : 'Digital contract signing',
      description: language === 'es'
        ? 'Firma electrónica válida legalmente, sin necesidad de imprimir y contratos completamente digitales.'
        : 'Legally valid electronic signature, no need to print and completely digital contracts.',
      timeframe: language === 'es' ? 'Firma electrónica' : 'Electronic signature'
    },
    {
      icon: Share2,
      title: language === 'es' ? 'Widget para redes sociales' : 'Widget for social networks',
      description: language === 'es'
        ? 'Integración con Facebook e Instagram, reservas desde redes sociales y catálogo en redes.'
        : 'Integration with Facebook and Instagram, reservations from social networks and catalog on networks.',
      timeframe: language === 'es' ? 'Facebook, Instagram' : 'Facebook, Instagram'
    },
    {
      icon: Code,
      title: language === 'es' ? 'API pública para desarrolladores' : 'Public API for developers',
      description: language === 'es'
        ? 'Integra StorageFy con otros sistemas, crea integraciones custom y extiende funcionalidades.'
        : 'Integrate StorageFy with other systems, create custom integrations and extend functionality.',
      timeframe: language === 'es' ? 'Para desarrolladores' : 'For developers'
    },
    {
      icon: RefreshCw,
      title: language === 'es' ? 'Sincronización con otros sistemas' : 'Synchronization with other systems',
      description: language === 'es'
        ? 'CRM externos, sistemas de contabilidad y herramientas de marketing.'
        : 'External CRMs, accounting systems and marketing tools.',
      timeframe: language === 'es' ? 'Múltiples sistemas' : 'Multiple systems'
    }
  ]

  const decisionFactors = [
    language === 'es' ? 'Feedback de usuarios - Escuchamos tu opinión en cada paso' : 'User feedback - We listen to your opinion at every step',
    language === 'es' ? 'Necesidades del mercado - Investigamos constantemente el sector' : 'Market needs - We constantly research the sector',
    language === 'es' ? 'Tecnología emergente - Adoptamos lo mejor para mejorar tu experiencia' : 'Emerging technology - We adopt the best to improve your experience',
    language === 'es' ? 'Competencia - Nos mantenemos líderes en innovación' : 'Competition - We stay leaders in innovation'
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
              <Rocket className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Roadmap' : 'Roadmap'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Estamos construyendo' : 'We are building'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'el futuro del sector' : 'the future of the sector'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'Descubre qué funcionalidades estamos desarrollando y qué viene próximamente en StorageFy.'
                : 'Discover what features we are developing and what\'s coming next in StorageFy.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* In Development */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 border border-accent-200 mb-4">
              <Clock className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'En Desarrollo' : 'In Development'}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Próximos 3 meses' : 'Next 3 months'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {development.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
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
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-accent-200 hover:border-accent-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-accent-600 mb-2">{item.timeframe}</div>
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-primary-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-4">
              <Calendar className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">
                {language === 'es' ? 'Próximamente' : 'Coming Soon'}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? '6 meses' : '6 months'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
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
                  className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-primary-600 mb-2">{item.timeframe}</div>
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-primary-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-4">
              <Star className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {language === 'es' ? 'Futuro' : 'Future'}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? '12 meses' : '12 months'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {future.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
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
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 opacity-75"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-gray-500 mb-2">{item.timeframe}</div>
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-primary-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Decision Factors */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? '¿Cómo Decidimos Qué Construir?' : 'How Do We Decide What to Build?'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-6">
            {decisionFactors.map((factor, index) => (
              <motion.div
                key={factor}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-gray-100"
              >
                <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-primary-700">{factor}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 bg-gradient-to-br from-accent-50 to-white rounded-2xl border border-accent-200"
          >
            <p className="text-lg text-primary-700 mb-4">
              {language === 'es'
                ? '¿Tienes una idea? Contáctanos y la evaluamos. Muchas de nuestras mejores funcionalidades vienen de sugerencias de usuarios.'
                : 'Have an idea? Contact us and we\'ll evaluate it. Many of our best features come from user suggestions.'
              }
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'es' ? 'Enviar Sugerencia' : 'Send Suggestion'}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

