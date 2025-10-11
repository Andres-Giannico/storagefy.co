'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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
  Star
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function FeaturesPage() {
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
      animation: 'analytics'
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
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-500/20 to-accent-700/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-6 shadow-lg"
            >
              <Star className="w-4 h-4 text-accent-300" />
              <span className="text-sm font-medium text-white">
                {language === 'es' ? 'Características' : 'Features'}
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {language === 'es' ? 'Todas las herramientas que necesitas' : 'All the tools you need'}
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {language === 'es'
                ? 'Una plataforma completa que digitaliza y automatiza cada aspecto de tu negocio de trasteros, desde la captación de leads hasta el cobro de pagos.'
                : 'A complete platform that digitalizes and automates every aspect of your storage business, from lead capture to payment collection.'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(124, 179, 66, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
              >
                {language === 'es' ? 'Probar Gratis 14 Días' : 'Try Free 14 Days'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 border-2 border-white/30 text-white font-semibold rounded-full shadow-lg hover:border-white/50 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {language === 'es' ? 'Ver Demo' : 'View Demo'}
              </motion.button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.1
                    }
                  }}
                  viewport={{ once: true, margin: '-100px' }}
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
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-primary-800 mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-primary-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-primary-500">{stat.description}</div>
                </motion.div>
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
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={!isEven ? 'lg:col-start-2' : ''}
                >
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
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            delay: benefitIndex * 0.1,
                            duration: 0.4
                          }
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        <span className="text-primary-700 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
                  >
                    {language === 'es' ? 'Ver en Acción' : 'See in Action'}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>

                {/* Screenshot or Animation */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  className={!isEven ? 'lg:col-start-1' : ''}
                >
                  {feature.screenshot ? (
                    <motion.div
                      whileHover={{ scale: 1.02, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="relative rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
                        <Image
                          src={feature.screenshot}
                          alt={feature.title}
                          width={800}
                          height={600}
                          className="w-full h-auto"
                          priority={index < 2}
                        />
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-20 pointer-events-none" 
                             style={{ boxShadow: '0 0 60px rgba(124, 179, 66, 0.3)' }} />
                      </div>
                    </motion.div>
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
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-full blur-2xl"
                      />
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {language === 'es' ? '¿Listo para transformar tu negocio?' : 'Ready to transform your business?'}
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Únete a más de 500 empresas que ya digitalizaron su gestión con StorageFy. Comienza tu transformación digital hoy mismo.'
                : 'Join over 500 companies that have already digitalized their management with StorageFy. Start your digital transformation today.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(124, 179, 66, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
              >
                {language === 'es' ? 'Probar Gratis 14 Días' : 'Try Free 14 Days'}
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass border border-white/20 text-white font-semibold rounded-full shadow-md hover:bg-white/10 transition-all duration-300"
              >
                {language === 'es' ? 'Hablar con Experto' : 'Talk to Expert'}
              </motion.a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}