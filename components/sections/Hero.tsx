'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, TrendingUp, Users, DollarSign, Building2, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'

const Hero = () => {
  const { t, language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.95])

  // Datos genéricos para el mockup
  const dashboardData = {
    stats: [
      { label: language === 'es' ? 'Ocupación' : 'Occupation', value: '70.0%', color: 'blue', icon: Building2 },
      { label: language === 'es' ? 'Ingresos Mensuales' : 'Monthly Revenue', value: '€495', color: 'green', icon: DollarSign },
      { label: language === 'es' ? 'Clientes' : 'Clients', value: '6', color: 'purple', icon: Users },
      { label: language === 'es' ? 'Facturas Pendientes' : 'Pending Invoices', value: '0', color: 'orange', icon: CheckCircle },
    ],
    recentPayments: [
      { id: 'PAY-2025-0007', client: 'Omar Andres Giannico', amount: '€65.00', status: 'paid', unit: 'B-203' },
      { id: 'PAY-2025-0006', client: 'María García López', amount: '€145.00', status: 'paid', unit: 'A-104' },
      { id: 'PAY-2025-0005', client: 'Carlos López Ruiz', amount: '€85.00', status: 'pending', unit: 'A-102' },
    ]
  }

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200">
              <TrendingUp className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Software líder en gestión de trasteros' : 'Leading storage management software'}
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">
                {language === 'es' ? 'Gestiona tus' : 'Manage your'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'trasteros con' : 'storage with'}
              </span>
              <br />
              <span className="text-gradient-accent">
                {language === 'es' ? 'precisión total' : 'total precision'}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-primary-600 leading-relaxed max-w-2xl">
              {language === 'es' 
                ? 'StorageFy convierte la gestión de tu negocio en una experiencia fluida e inteligente. Sin hojas de cálculo, sin estrés.'
                : 'StorageFy transforms your business management into a smooth and intelligent experience. No spreadsheets, no stress.'
              }
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="/demo"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(124, 179, 66, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              {language === 'es' ? 'Probar Gratis' : 'Try Free'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border border-primary-200 text-primary-700 font-semibold rounded-full hover:bg-white/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {language === 'es' ? 'Ver Demo' : 'View Demo'}
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-800">500+</div>
              <div className="text-sm text-primary-600">{language === 'es' ? 'Empresas' : 'Companies'}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-800">10k+</div>
              <div className="text-sm text-primary-600">{language === 'es' ? 'Unidades' : 'Units'}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-800">99.9%</div>
              <div className="text-sm text-primary-600">{language === 'es' ? 'Uptime' : 'Uptime'}</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup Right */}
        <motion.div
          style={{ y, opacity, scale }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          {/* Dashboard Container */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-primary-800 to-primary-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      {language === 'es' ? 'Panel de Control' : 'Control Panel'}
                    </h3>
                    <p className="text-primary-200 text-sm">
                      {language === 'es' ? 'Dashboard en tiempo real' : 'Real-time dashboard'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-primary-200 text-sm">Live</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {dashboardData.stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="bg-white p-4 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          stat.color === 'blue' ? 'bg-blue-100' :
                          stat.color === 'green' ? 'bg-green-100' :
                          stat.color === 'purple' ? 'bg-purple-100' :
                          'bg-orange-100'
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            stat.color === 'blue' ? 'text-blue-600' :
                            stat.color === 'green' ? 'text-green-600' :
                            stat.color === 'purple' ? 'text-purple-600' :
                            'text-orange-600'
                          }`} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Recent Payments */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="bg-white rounded-xl border border-gray-100 p-4 shadow-md"
              >
                <h4 className="font-semibold text-gray-900 mb-4">
                  {language === 'es' ? 'Pagos Recientes' : 'Recent Payments'}
                </h4>
                <div className="space-y-3">
                  {dashboardData.recentPayments.map((payment, index) => (
                    <motion.div
                      key={payment.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${payment.status === 'paid' ? 'bg-green-400' : 'bg-orange-400'}`}></div>
                        <div>
                          <div className="font-medium text-gray-900">{payment.id}</div>
                          <div className="text-sm text-gray-600">{payment.client}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">{payment.amount}</div>
                        <div className="text-xs text-gray-500">{payment.unit}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent-400 to-accent-600 rounded-2xl shadow-lg flex items-center justify-center"
          >
            <TrendingUp className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
            className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl shadow-lg flex items-center justify-center"
          >
            <Users className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center hover:border-accent-400 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent-500 rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-sm text-primary-600 mt-2 text-center"
        >
          {language === 'es' ? 'Desplázate' : 'Scroll'}
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
