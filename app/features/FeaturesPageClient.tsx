'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Building2, 
  Package, 
  Users, 
  FileText, 
  CreditCard, 
  Globe, 
  TrendingUp, 
  Clock, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  MessageSquare,
  Layers,
  Map
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import LinkWithLang from '@/components/common/LinkWithLang'
import TabletMock from '@/components/sections/TabletMock'

export default function FeaturesPageClient() {
  const { language } = useLanguage()

  const features = [
    {
      id: 'units',
      icon: Package,
      title: language === 'es' ? 'Control Total de Unidades' : 'Complete Unit Control',
      subtitle: language === 'es' ? 'Dimensiones exactas en milímetros' : 'Exact dimensions in millimeters',
      description: language === 'es' 
        ? 'Gestiona las unidades de almacenamiento con dimensiones exactas, cálculos automáticos de superficie y volumen, y estados en tiempo real.'
        : 'Manage storage units with exact dimensions, automatic surface and volume calculations, and real-time status updates.',
      benefits: language === 'es' 
        ? ['Dimensiones precisas en mm', 'Estados en tiempo real', 'Tipos especializados', 'Pricing inteligente']
        : ['Precise dimensions in mm', 'Real-time status', 'Specialized types', 'Smart pricing'],
      screenshot: '/images/unidades.webp',
      animation: 'units'
    },
    {
      id: 'contracts',
      icon: FileText,
      title: language === 'es' ? 'Contratos Digitales Inteligentes' : 'Smart Digital Contracts',
      subtitle: language === 'es' ? 'Crea contratos en segundos' : 'Create contracts in seconds',
      description: language === 'es'
        ? 'Gestiona los contratos de alquiler con generación automática, seguimiento de estados y control de depósitos integrado.'
        : 'Manage rental contracts with automatic generation, status tracking and integrated deposit control.',
      benefits: language === 'es'
        ? ['Generación automática', 'Estados visuales', 'Control de depósitos', 'Renovación automática']
        : ['Automatic generation', 'Visual status', 'Deposit control', 'Automatic renewal'],
      screenshot: '/images/contratos.webp',
      animation: 'contracts'
    },
    {
      id: 'payments',
      icon: CreditCard,
      title: language === 'es' ? 'Sistema de Pagos Revolucionario' : 'Revolutionary Payment System',
      subtitle: language === 'es' ? 'Cobra más rápido 24/7' : 'Get paid faster 24/7',
      description: language === 'es'
        ? 'Administra todos los pagos con links automáticos, recordatorios inteligentes y reducción de morosidad del 80%.'
        : 'Manage all payments with automatic links, smart reminders and 80% delinquency reduction.',
      benefits: language === 'es'
        ? ['Links de pago 24/7', 'Recordatorios automáticos', 'Integración Stripe', 'Reducción morosidad 80%']
        : ['24/7 payment links', 'Automatic reminders', 'Stripe integration', '80% delinquency reduction'],
      screenshot: '/images/pagos.webp',
      animation: 'payments'
    },
    {
      id: 'clients',
      icon: Users,
      title: language === 'es' ? 'CRM Integrado para Clientes' : 'Integrated Customer CRM',
      subtitle: language === 'es' ? 'Ficha completa y segura' : 'Complete and secure profile',
      description: language === 'es'
        ? 'Gestiona clientes con fichas completas, documentación segura y cumplimiento RGPD automático.'
        : 'Manage clients with complete profiles, secure documentation and automatic GDPR compliance.',
      benefits: language === 'es'
        ? ['Ficha completa', 'Documentación segura', 'Historial completo', 'Cumplimiento RGPD']
        : ['Complete profile', 'Secure documentation', 'Full history', 'GDPR compliance'],
      screenshot: '/images/clientes.webp',
      animation: 'clients'
    },
    {
      id: 'widget',
      icon: Globe,
      title: language === 'es' ? 'Widget de Captación Online' : 'Online Capture Widget',
      subtitle: language === 'es' ? 'Recibe reservas 24/7' : 'Receive reservations 24/7',
      description: language === 'es'
        ? 'Recibe reservas automáticamente desde tu website con catálogo en tiempo real y conversión a contratos.'
        : 'Receive reservations automatically from your website with real-time catalog and contract conversion.',
      benefits: language === 'es'
        ? ['Captación 24/7', 'Catálogo en tiempo real', 'Conversión automática', 'Aumento leads 300-500%']
        : ['24/7 capture', 'Real-time catalog', 'Automatic conversion', '300-500% lead increase'],
      screenshot: '/images/widget-preview.webp',
      animation: 'widget'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: language === 'es' ? 'Reportes y Analytics' : 'Reports and Analytics',
      subtitle: language === 'es' ? 'Insights en tiempo real' : 'Real-time insights',
      description: language === 'es'
        ? 'Obtén insights profundos sobre tu negocio con reportes automatizados y métricas en tiempo real.'
        : 'Get deep insights about your business with automated reports and real-time metrics.',
      benefits: language === 'es'
        ? ['Métricas en tiempo real', 'Reportes automáticos', 'Dashboards personalizados', 'KPIs clave']
        : ['Real-time metrics', 'Automated reports', 'Custom dashboards', 'Key KPIs'],
      screenshot: '/images/reportes.webp',
      personImage: '/images/persona-gestionando-dashboard.webp',
      animation: 'analytics'
    },
    {
      id: 'announcement-board',
      icon: MessageSquare,
      title: language === 'es' ? 'Tablón de Anuncios Interno' : 'Internal Announcement Board',
      subtitle: language === 'es' ? 'Comunicación efectiva con tu equipo' : 'Effective team communication',
      description: language === 'es'
        ? 'Mantén a tu equipo informado con un sistema de anuncios categorizado que incluye tracking de lecturas y analytics avanzados.'
        : 'Keep your team informed with a categorized announcement system that includes read tracking and advanced analytics.',
      benefits: language === 'es'
        ? ['Categorización avanzada', '80% tasa resolución', 'Analytics de lectura', 'Usuarios más activos']
        : ['Advanced categorization', '80% resolution rate', 'Read analytics', 'Most active users'],
      screenshot: '/images/announcement-board.webp',
      animation: 'announcement'
    },
    {
      id: 'multi-unit-contracts',
      icon: Layers,
      title: language === 'es' ? 'Contratos Multi-Unidad' : 'Multi-Unit Contracts',
      subtitle: language === 'es' ? 'Gestiona múltiples unidades en un contrato' : 'Manage multiple units in one contract',
      description: language === 'es'
        ? 'Agrupa varias unidades en un solo contrato con cálculo automático de precios y gestión simplificada para clientes con múltiples espacios.'
        : 'Group multiple units in a single contract with automatic price calculation and simplified management for clients with multiple spaces.',
      benefits: language === 'es'
        ? ['Cálculo automático', 'Misma ubicación', 'Precio ajustable', 'Gestión simplificada']
        : ['Automatic calculation', 'Same location', 'Adjustable pricing', 'Simplified management'],
      screenshot: '/images/multi-unit-contracts.webp',
      animation: 'multi-unit'
    },
    {
      id: 'floor-plans',
      icon: Map,
      title: language === 'es' ? 'Planos Interactivos' : 'Interactive Floor Plans',
      subtitle: language === 'es' ? 'Visualiza tu espacio en tiempo real' : 'Visualize your space in real-time',
      description: language === 'es'
        ? 'Crea y gestiona planos visuales de tus instalaciones con estados de ocupación en tiempo real y edición interactiva.'
        : 'Create and manage visual floor plans of your facilities with real-time occupancy status and interactive editing.',
      benefits: language === 'es'
        ? ['140m² visualizados', '47 unidades mapeadas', 'Estados por colores', 'Edición en tiempo real']
        : ['140m² visualized', '47 units mapped', 'Color-coded status', 'Real-time editing'],
      screenshot: '/images/self-storage-map.webp',
      personImage: '/images/persona-gestionando-planificacion.webp',
      animation: 'floor-plans'
    }
  ]

  const stats = [
    {
      icon: TrendingUp,
      value: '30%',
      label: language === 'es' ? 'Aumento Ocupación' : 'Occupancy Increase',
      description: language === 'es' ? 'Promedio en 6 meses' : 'Average in 6 months'
    },
    {
      icon: Clock,
      value: '15h',
      label: language === 'es' ? 'Horas Ahorradas' : 'Hours Saved',
      description: language === 'es' ? 'Por semana' : 'Per week'
    },
    {
      icon: Shield,
      value: '80%',
      label: language === 'es' ? 'Reducción Morosidad' : 'Delinquency Reduction',
      description: language === 'es' ? 'Con automatización' : 'With automation'
    },
    {
      icon: Zap,
      value: '500%',
      label: language === 'es' ? 'Más Leads' : 'More Leads',
      description: language === 'es' ? 'Con widget online' : 'With online widget'
    },
    {
      icon: Target,
      value: '5 min',
      label: language === 'es' ? 'Setup Guiado' : 'Guided Setup',
      description: language === 'es' ? 'Configuración completa' : 'Complete configuration'
    },
    {
      icon: Layers,
      value: '∞',
      label: language === 'es' ? 'Multi-Unidad' : 'Multi-Unit',
      description: language === 'es' ? 'Unidades por contrato' : 'Units per contract'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      
      {/* Hero Section - homogeneo con home */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0b] py-20 lg:py-28">
        {/* Premium background - igual que home */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(34,197,94,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full">
          {/* Texto arriba - tipografia premium como home */}
          <FadeInUp className="text-center w-full max-w-3xl mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight bg-gradient-to-r from-white via-zinc-300 to-accent-400 bg-clip-text text-transparent mb-6">
              {language === 'es' ? 'Todas las herramientas que necesitas' : 'All the tools you need'}
            </h1>
            
            <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-8">
              {language === 'es'
                ? 'Una plataforma completa que digitaliza y automatiza cada aspecto de tu negocio de trasteros.'
                : 'A complete platform that digitalizes and automates every aspect of your storage business.'}
            </p>

            {/* Feature pills - refinados como home */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[Package, FileText, CreditCard, BarChart3, Globe].map((Icon, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-accent-400" />
                  {language === 'es' 
                    ? ['Unidades', 'Contratos', 'Pagos', 'Reportes', 'Widget'][i]
                    : ['Units', 'Contracts', 'Payments', 'Reports', 'Widget'][i]}
                </motion.span>
              ))}
            </div>

            {/* CTAs - estilo premium como home */}
            <div className="flex flex-row flex-wrap gap-3 justify-center">
              <LinkWithLang href="/demo-trial">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-100 transition-all duration-200 shadow-xl shadow-black/20 cursor-pointer text-sm sm:text-base"
                >
                  {language === 'es' ? 'Ver demo' : 'View demo'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </motion.span>
              </LinkWithLang>
              <LinkWithLang href="/signup">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer text-sm sm:text-base"
                >
                  {language === 'es' ? 'Registrarse' : 'Sign up'}
                </motion.span>
              </LinkWithLang>
            </div>
          </FadeInUp>

          {/* Tablet centrada */}
          <FadeInUp className="w-full flex justify-center">
            <TabletMock />
          </FadeInUp>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="text-center p-6 glass rounded-2xl border border-white/20 hover:border-accent-200 transition-all duration-300 group hover:scale-[1.02] hover:-translate-y-1 will-change-transform"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-800 mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-primary-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-primary-500">{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => {
        const Icon = feature.icon
        const isEven = index % 2 === 0
        
        return (
          <section key={feature.id} className={`py-24 ${isEven ? 'bg-white' : 'bg-gradient-to-br from-primary-50 via-white to-accent-50/30'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Content */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">
                        {feature.title}
                      </h2>
                      <p className="text-lg text-accent-600 font-medium">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {feature.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        <span className="text-primary-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all duration-200 hover:scale-105 active:scale-95">
                    {language === 'es' ? 'Ver en Acción' : 'See in Action'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Screenshot or Animation */}
                <div className={!isEven ? 'lg:col-start-1' : ''}>
                  {feature.screenshot ? (
                    <div className="space-y-4">
                      {/* Screenshot principal */}
                      <div className="relative group cursor-zoom-in">
                        <div className="relative rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden bg-white transition-all duration-300 group-hover:border-accent-300 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                          <div className="relative overflow-hidden">
                            <Image
                              src={feature.screenshot}
                              alt={feature.title}
                              width={900}
                              height={675}
                              className="w-full h-auto transition-transform duration-500 group-hover:scale-110 will-change-transform"
                              loading={index < 2 ? "eager" : "lazy"}
                              quality={85}
                            />
                          </div>
                          {/* Zoom indicator */}
                          <div className="absolute top-4 right-4 bg-accent-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center gap-1.5">
                            🔍 {language === 'es' ? 'Acercar' : 'Zoom'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Imagen de persona usando StorageFy */}
                      {feature.personImage && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="relative rounded-xl overflow-hidden border-2 border-accent-200 shadow-lg"
                        >
                          <Image
                            src={feature.personImage}
                            alt={language === 'es' ? `Persona usando ${feature.title}` : `Person using ${feature.title}`}
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            quality={85}
                            loading={index < 2 ? "eager" : "lazy"}
                          />
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    // Analytics Animation Placeholder
                    <div className="relative h-96 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <BarChart3 className="w-16 h-16 mx-auto mb-4 text-accent-400" />
                          <h3 className="text-2xl font-bold mb-2">Analytics Dashboard</h3>
                          <p className="text-primary-200">Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/15 to-accent-600/15 rounded-full blur-2xl animate-pulse-slow" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {language === 'es' ? '¿Listo para transformar tu negocio?' : 'Ready to transform your business?'}
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Únete a las empresas que ya digitalizaron su gestión con StorageFy. Comienza tu transformación digital hoy mismo.'
                : 'Join the companies that have already digitalized their management with StorageFy. Start your digital transformation today.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkWithLang href="/demo-trial">
                <span className="inline-block px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer text-center">
                  {language === 'es' ? 'Probar demo ahora' : 'Try demo now'}
                </span>
              </LinkWithLang>
              <a
                href="/contact"
                className="px-8 py-3 glass border border-white/20 text-white font-semibold rounded-full shadow-md hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95 text-center"
              >
                {language === 'es' ? 'Hablar con Experto' : 'Talk to Expert'}
              </a>
            </div>
            <p className="text-center text-sm text-gray-300 mt-4">
              {language === 'es'
                ? 'Regístrate gratis en 2 minutos • Sin tarjeta de crédito'
                : 'Sign up free in 2 minutes • No credit card required'}
            </p>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}