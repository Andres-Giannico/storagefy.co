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
  Settings,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  TrendingUp
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
      title: lang === 'es' ? 'Sistema de Pagos Revolucionario' : 'Revolutionary Payment System',
      description: lang === 'es'
        ? 'Cobra más rápido con links de pago 24/7, recordatorios automáticos y reducción de morosidad del 80%.'
        : 'Get paid faster with 24/7 payment links, automatic reminders and 80% reduction in delinquency.',
      benefits: lang === 'es'
        ? ['Links de pago 24/7', 'Recordatorios automáticos', 'Integración Stripe', 'Reducción morosidad 80%']
        : ['24/7 payment links', 'Automatic reminders', 'Stripe integration', '80% delinquency reduction'],
      color: 'emerald'
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
      description: lang === 'es' ? 'Promedio en 6 meses' : 'Average in 6 months'
    },
    {
      icon: Clock,
      value: '15h',
      label: lang === 'es' ? 'Horas Ahorradas' : 'Hours Saved',
      description: lang === 'es' ? 'Por semana' : 'Per week'
    },
    {
      icon: Shield,
      value: '80%',
      label: lang === 'es' ? 'Reducción Morosidad' : 'Delinquency Reduction',
      description: lang === 'es' ? 'Con automatización' : 'With automation'
    },
    {
      icon: Zap,
      value: '500%',
      label: lang === 'es' ? 'Más Leads' : 'More Leads',
      description: lang === 'es' ? 'Con widget online' : 'With online widget'
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
              {language === 'es' ? 'para gestionar trasteros' : 'to manage storage'}
            </span>
          </h2>

          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'es'
              ? 'Una plataforma completa que digitaliza y automatiza cada aspecto de tu negocio de trasteros, desde la captación hasta el cobro.'
              : 'A complete platform that digitalizes and automates every aspect of your storage business, from lead capture to payment collection.'
            }
          </p>
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
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
              green: 'from-green-500 to-green-600 bg-green-100 text-green-600',
              purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600',
              orange: 'from-orange-500 to-orange-600 bg-orange-100 text-orange-600',
              emerald: 'from-emerald-500 to-emerald-600 bg-emerald-100 text-emerald-600',
              cyan: 'from-cyan-500 to-cyan-600 bg-cyan-100 text-cyan-600'
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
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 h-full">
                  
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
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
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary-800 mb-4 group-hover:text-accent-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-primary-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
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
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        </motion.div>
                        <span className="text-sm text-primary-700">{benefit}</span>
                      </motion.div>
                    ))}
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
                    className="absolute bottom-6 right-6"
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
