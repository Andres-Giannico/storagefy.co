'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, TrendingUp, Users, DollarSign, Building2, CheckCircle, CreditCard, Globe, Clock, MapPin, BarChart2, FileText, Calendar } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import LinkWithLang from '@/components/common/LinkWithLang'

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
      { id: 'PAY-2025-0007', client: 'Alex Martínez', amount: '€65.00', status: 'paid', unit: 'B-203' },
      { id: 'PAY-2025-0006', client: 'María García López', amount: '€145.00', status: 'paid', unit: 'A-104' },
      { id: 'PAY-2025-0005', client: 'Carlos López Ruiz', amount: '€85.00', status: 'pending', unit: 'A-102' },
    ]
  }

  const features = [
    { icon: MapPin, label: language === 'es' ? 'multi-sede' : 'multi-location' },
    { icon: CreditCard, label: language === 'es' ? 'facturación automática' : 'automated billing' },
    { icon: BarChart2, label: language === 'es' ? 'analytics de ocupación' : 'occupancy analytics' },
    { icon: FileText, label: language === 'es' ? 'contratos + facturas' : 'contracts + invoices' },
    { icon: Calendar, label: language === 'es' ? 'reservas online' : 'online booking' },
  ]

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0b] py-20 lg:py-28">
      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-50 to-transparent pointer-events-none" />
      
      {/* Premium background */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Content Left - Premium typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white">
              {language === 'es' 
                ? 'El software de gestión moderno para operadores de self storage y parkings'
                : 'The modern management software for self-storage and parking operators'}
            </h1>

            <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-xl">
              {language === 'es' 
                ? 'Multi-sede, facturación automática, analytics de ocupación, contratos y facturas, reservas online.'
                : 'Multi-location, automated billing, occupancy analytics, contracts + invoices, online booking.'}
            </p>

            {/* Feature pills - refined */}
            <div className="flex flex-wrap gap-2">
              {features.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-accent-400" />
                    {item.label}
                  </motion.span>
                )
              })}
            </div>
          </div>

          {/* CTAs - Premium style */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <LinkWithLang href="/demo-trial">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-100 transition-all duration-200 shadow-xl shadow-black/20 cursor-pointer"
              >
                {language === 'es' ? 'Ver demo' : 'View demo'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </motion.span>
            </LinkWithLang>

            <LinkWithLang href="/signup">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer"
              >
                {language === 'es' ? 'Registrarse' : 'Sign up'}
              </motion.span>
            </LinkWithLang>
          </motion.div>

          <p className="text-sm text-zinc-500 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {language === 'es' 
              ? 'Regístrate gratis en 2 min • Sin tarjeta'
              : 'Sign up free in 2 min • No card'}
          </p>
        </motion.div>

        {/* Dashboard Mockup Right */}
        <motion.div
          style={{ y, opacity, scale }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/20 to-accent-600/10 rounded-3xl blur-2xl" />
          {/* Dashboard Container */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl shadow-black/40 border border-white/20 overflow-hidden"
          >
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-primary-800 to-primary-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {language === 'es' ? 'Panel de Control' : 'Control Panel'}
                    </div>
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
                        <div className="font-semibold text-green-700">{payment.amount}</div>
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
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 w-14 h-14 bg-accent-500 rounded-xl shadow-lg shadow-accent-500/30 flex items-center justify-center"
          >
            <TrendingUp className="w-7 h-7 text-white" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-4 -left-4 w-12 h-12 bg-zinc-800 rounded-xl shadow-lg flex items-center justify-center border border-white/10"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
        <span className="text-xs text-zinc-500 font-medium tracking-wider uppercase">
          {language === 'es' ? 'Desplázate' : 'Scroll'}
        </span>
      </motion.div>
    </section>
  )
}

export default Hero
