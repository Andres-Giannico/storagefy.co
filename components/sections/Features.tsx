'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Building2, 
  Package, 
  Users, 
  FileText, 
  CreditCard, 
  FileBarChart,
  Globe,
  UserCheck,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Layout,
  MessageSquare
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import StaggerContainer from '@/components/animations/StaggerContainer'

const Features = () => {
  const { language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  // Features data with translations
  const getFeatures = (lang: string) => [
    {
      icon: Building2,
      title: lang === 'es' ? 'Gestión Completa de Locaciones' : 'Complete Location Management',
      description: lang === 'es' 
        ? 'Administra múltiples trasteros desde un solo panel con métricas independientes y configuración específica por centro.'
        : 'Manage multiple storage facilities from a single dashboard with independent metrics and location-specific configuration.',
      benefits: lang === 'es' 
        ? ['Múltiples centros', 'Configuración independiente', 'Métricas por locación', 'Vista geográfica']
        : ['Multiple facilities', 'Independent configuration', 'Location metrics', 'Geographic view'],
      color: 'blue'
    },
    {
      icon: Package,
      title: lang === 'es' ? 'Control Total de Unidades' : 'Complete Unit Control',
      description: lang === 'es'
        ? 'Dimensiones exactas en milímetros, cálculos automáticos de superficie y volumen, con estados en tiempo real.'
        : 'Exact dimensions in millimeters, automatic surface and volume calculations, with real-time status updates.',
      benefits: lang === 'es'
        ? ['Dimensiones precisas', 'Estados en tiempo real', 'Tipos especializados', 'Pricing inteligente']
        : ['Precise dimensions', 'Real-time status', 'Specialized types', 'Smart pricing'],
      color: 'green'
    },
    {
      icon: Users,
      title: lang === 'es' ? 'CRM Integrado para Clientes' : 'Integrated Customer CRM',
      description: lang === 'es'
        ? 'Ficha completa con documentación segura, fotos de DNI cifradas y cumplimiento RGPD automático.'
        : 'Complete profile with secure documentation, encrypted ID photos and automatic GDPR compliance.',
      benefits: lang === 'es'
        ? ['Ficha completa', 'Documentación segura', 'Historial completo', 'Cumplimiento RGPD']
        : ['Complete profile', 'Secure documentation', 'Full history', 'GDPR compliance'],
      color: 'purple'
    },
    {
      icon: FileText,
      title: lang === 'es' ? 'Contratos Digitales Inteligentes' : 'Smart Digital Contracts',
      description: lang === 'es'
        ? 'Crea contratos en segundos con generación automática, asistente visual y control de depósitos.'
        : 'Create contracts in seconds with automatic generation, visual assistant and deposit management.',
      benefits: lang === 'es'
        ? ['Generación automática', 'Asistente visual', 'Control de depósitos', 'Renovación automática']
        : ['Automatic generation', 'Visual assistant', 'Deposit control', 'Automatic renewal'],
      color: 'orange'
    },
    {
      icon: CreditCard,
      title: lang === 'es' ? 'Cobros automáticos y menos morosidad' : 'Automatic payments and less delinquency',
      description: lang === 'es'
        ? 'Cobra más rápido con links de pago 24/7, recordatorios automáticos y reducción de morosidad del 80%.'
        : 'Get paid faster with 24/7 payment links, automatic reminders and 80% reduction in delinquency.',
      benefits: lang === 'es'
        ? ['Links de pago 24/7', 'Recordatorios automáticos', 'Integración Stripe', 'Reducción morosidad 80%']
        : ['24/7 payment links', 'Automatic reminders', 'Stripe integration', '80% delinquency reduction'],
      color: 'emerald'
    },
    {
      icon: FileBarChart,
      title: lang === 'es' ? 'Reportes y Analytics Avanzados' : 'Advanced Reports & Analytics',
      description: lang === 'es'
        ? 'Dashboard completo con métricas en tiempo real, KPIs visuales, exportación PDF y análisis predictivo.'
        : 'Complete dashboard with real-time metrics, visual KPIs, PDF export and predictive analytics.',
      benefits: lang === 'es'
        ? ['Métricas en tiempo real', 'KPIs visuales', 'Exportación PDF', 'Análisis predictivo']
        : ['Real-time metrics', 'Visual KPIs', 'PDF export', 'Predictive analytics'],
      color: 'indigo'
    },
    {
      icon: Layout,
      title: lang === 'es' ? 'Plano visual de tus espacios en tiempo real' : 'Real-time visual floor plan of your spaces',
      description: lang === 'es'
        ? 'Visualiza y gestiona tus espacios con planos interactivos en tiempo real, arrastra y suelta unidades fácilmente.'
        : 'Visualize and manage your spaces with real-time interactive floor plans, drag and drop units easily.',
      benefits: lang === 'es'
        ? ['Visualización en tiempo real', 'Arrastra y suelta', 'Vista 2D/3D', 'Actualización automática']
        : ['Real-time visualization', 'Drag and drop', '2D/3D view', 'Auto-update'],
      color: 'pink'
    },
    {
      icon: MessageSquare,
      title: lang === 'es' ? 'Tablón de Anuncios Digital' : 'Digital Announcement Board',
      description: lang === 'es'
        ? 'Comunícate con tus clientes mediante anuncios personalizados, notificaciones automáticas y mensajería integrada.'
        : 'Communicate with your customers through personalized announcements, automatic notifications and integrated messaging.',
      benefits: lang === 'es'
        ? ['Anuncios personalizados', 'Notificaciones automáticas', 'Mensajería integrada', 'Historial completo']
        : ['Personalized announcements', 'Automatic notifications', 'Integrated messaging', 'Full history'],
      color: 'teal'
    },
    {
      icon: UserCheck,
      title: lang === 'es' ? 'Gestión de Usuarios y Permisos' : 'User & Permission Management',
      description: lang === 'es'
        ? 'Administra roles y permisos de tu equipo con control granular, multi-usuario y estados en tiempo real.'
        : 'Manage team roles and permissions with granular control, multi-user support and real-time status.',
      benefits: lang === 'es'
        ? ['Roles diferenciados', 'Permisos personalizados', 'Multi-usuario', 'Estados en tiempo real']
        : ['Differentiated roles', 'Custom permissions', 'Multi-user', 'Real-time status'],
      color: 'rose'
    },
    {
      icon: Globe,
      title: lang === 'es' ? 'Widget de Captación Online' : 'Online Capture Widget',
      description: lang === 'es'
        ? 'Recibe reservas 24/7 desde tu website con catálogo en tiempo real y conversión automática a contratos.'
        : 'Receive reservations 24/7 from your website with real-time catalog and automatic contract conversion.',
      benefits: lang === 'es'
        ? ['Captación 24/7', 'Catálogo en tiempo real', 'Conversión automática', 'Aumento leads 300-500%']
        : ['24/7 capture', 'Real-time catalog', 'Automatic conversion', '300-500% lead increase'],
      color: 'cyan'
    }
  ]

  const getStats = (lang: string) => [
    {
      icon: TrendingUp,
      value: '30%',
      label: lang === 'es' ? 'Aumento Ocupación' : 'Occupancy Increase',
      description: lang === 'es' ? '(media de clientes en 6 meses)' : '(average of clients in 6 months)'
    },
    {
      icon: Clock,
      value: '15h',
      label: lang === 'es' ? 'Horas Ahorradas' : 'Hours Saved',
      description: lang === 'es' ? '(por semana por centro)' : '(per week per center)'
    },
    {
      icon: Shield,
      value: '80%',
      label: lang === 'es' ? 'Reducción Morosidad' : 'Delinquency Reduction',
      description: lang === 'es' ? '(con cobros automatizados)' : '(with automated payments)'
    },
    {
      icon: Zap,
      value: '500%',
      label: lang === 'es' ? 'Más Leads' : 'More Leads',
      description: lang === 'es' ? '(con widget de reservas online)' : '(with online booking widget)'
    }
  ]

  const features = getFeatures(language)
  const stats = getStats(language)

  return (
    <section ref={containerRef} className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50/30 relative overflow-hidden">
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/10 to-primary-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <FadeInUp className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6"
          >
            <BarChart3 className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium text-accent-700">
              {language === 'es' ? 'Características Principales' : 'Key Features'}
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">
              {language === 'es' ? 'Todo lo que necesitas' : 'Everything you need'}
            </span>
            <br />
            <span className="text-primary-800">
              {language === 'es' ? 'para gestionar trasteros y parkings' : 'to manage storage and parking'}
            </span>
          </h2>

          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'es'
              ? 'Una plataforma completa que digitaliza y automatiza cada aspecto de tu negocio, desde la captación hasta el cobro.'
              : 'A complete platform that digitalizes and automates every aspect of your business, from lead capture to payment collection.'
            }
          </p>
        </FadeInUp>

        {/* Bloque "¿Qué hace StorageFy?" - 3 Pilares */}
        <FadeInUp className="mb-16">
          <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50/50 rounded-3xl p-8 lg:p-12 border border-primary-100 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-primary-800 mb-8">
              {language === 'es' ? '¿Qué hace StorageFy?' : 'What does StorageFy do?'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Layout,
                  title: language === 'es' 
                    ? 'Gestión de centros y unidades' 
                    : 'Center and unit management',
                  description: language === 'es'
                    ? 'Planos, ocupación y precios.'
                    : 'Floor plans, occupancy and pricing.'
                },
                {
                  icon: Users,
                  title: language === 'es'
                    ? 'Clientes, contratos y pagos automáticos'
                    : 'Clients, contracts and automatic payments',
                  description: language === 'es'
                    ? 'Todo integrado con Stripe.'
                    : 'All integrated with Stripe.'
                },
                {
                  icon: Globe,
                  title: language === 'es'
                    ? 'Reservas online y widget para tu web'
                    : 'Online reservations and widget for your website',
                  description: language === 'es'
                    ? 'Disponible 24/7 sin intermediarios.'
                    : 'Available 24/7 without intermediaries.'
                }
              ].map((pilar, index) => {
                const Icon = pilar.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-primary-800 mb-2">{pilar.title}</h4>
                    <p className="text-primary-600">{pilar.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </FadeInUp>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.1
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="text-center p-6 glass rounded-2xl border border-white/20 hover:border-accent-200 transition-all duration-300 group"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ 
                    rotate: 10,
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
                <div className="text-3xl font-bold text-primary-800 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-primary-700 mb-1">{stat.label}</div>
                <div className="text-xs text-primary-500">{stat.description}</div>
              </motion.div>
            )
          })}
        </StaggerContainer>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
              green: 'from-green-500 to-green-600 bg-green-100 text-green-600',
              purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600',
              orange: 'from-orange-500 to-orange-600 bg-orange-100 text-orange-600',
              emerald: 'from-emerald-500 to-emerald-600 bg-emerald-100 text-emerald-600',
              cyan: 'from-cyan-500 to-cyan-600 bg-cyan-100 text-cyan-600',
              indigo: 'from-indigo-500 to-indigo-600 bg-indigo-100 text-indigo-600',
              pink: 'from-pink-500 to-pink-600 bg-pink-100 text-pink-600',
              teal: 'from-teal-500 to-teal-600 bg-teal-100 text-teal-600',
              rose: 'from-rose-500 to-rose-600 bg-rose-100 text-rose-600'
            }

            return (
              <motion.div
                key={feature.title}
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
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                  
                  {/* Gradient Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`relative z-10 inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ 
                      rotate: 5,
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2
                      }}
                    >
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-bold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm lg:text-base text-primary-600 mb-5 leading-relaxed flex-1">
                      {feature.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2.5">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ 
                            opacity: 1, 
                            x: 0,
                            transition: {
                              delay: benefitIndex * 0.05,
                              duration: 0.3
                            }
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                          className="flex items-center gap-2.5"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                          >
                            <CheckCircle className="w-4 h-4 text-accent-500" />
                          </motion.div>
                          <span className="text-xs lg:text-sm text-primary-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1, 
                      x: 0,
                      transition: { duration: 0.3 }
                    }}
                    className="absolute bottom-5 right-5 z-10"
                  >
                    <motion.div 
                      className="w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 10,
                        boxShadow: '0 10px 25px rgba(124, 179, 66, 0.3)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        animate={{
                          x: [0, 2, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
