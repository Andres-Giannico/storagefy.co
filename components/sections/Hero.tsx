'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Users, DollarSign, CheckCircle, CreditCard, Clock, MapPin, BarChart2, FileText, Calendar, Package, Euro, Wallet, Lock, Zap, Plug2, Shield } from 'lucide-react'
import Image from 'next/image'
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

  // Datos estilo app móvil real
  const dashboardCards = [
    { label: language === 'es' ? 'OCUPACIÓN' : 'OCCUPANCY', value: '91.3%', detail: '94 de 103 espacios', color: 'blue', icon: Package, progress: 91.3 },
    { label: language === 'es' ? 'INGRESOS MENSUALES' : 'MONTHLY INCOME', value: '7998 €', detail: language === 'es' ? 'De 86 contratos • Cobrado: 7340 €' : 'From 86 contracts • Collected: 7340 €', color: 'green', icon: Euro },
    { label: language === 'es' ? 'POTENCIAL DISPONIBLE' : 'AVAILABLE POTENTIAL', value: '620 €', detail: language === 'es' ? 'Ingresos si se alquilaran todas las unidades libres' : 'Income if all free units were rented', color: 'cyan', icon: Wallet },
    { label: language === 'es' ? 'CLIENTES' : 'CLIENTS', value: '114', detail: language === 'es' ? 'Clientes registrados' : 'Registered clients', color: 'purple', icon: Users },
    { label: language === 'es' ? 'FACTURAS PENDIENTES' : 'PENDING INVOICES', value: '5', detail: language === 'es' ? '0 vencidas' : '0 overdue', color: 'orange', icon: FileText },
  ]
  const paymentSummary = [
    { label: language === 'es' ? 'Total Pagos' : 'Total Payments', value: '211', detail: '€35017.33 total', color: 'blue', icon: DollarSign },
    { label: language === 'es' ? 'Pagados' : 'Paid', value: '202', detail: '€34062.33 cobrado', color: 'green', icon: CheckCircle },
    { label: language === 'es' ? 'Pendientes' : 'Pending', value: '9', detail: '€955.00 pendiente', color: 'orange', icon: Clock },
  ]
  const paymentDetail = {
    id: 'PAY-2026-0108',
    status: language === 'es' ? 'Pagado' : 'Paid',
    method: 'Bizum',
    contract: 'CTR-2025-0058',
    client: 'MARÍA GARCÍA',
    unit: 'A-104',
    period: '14/02/2026 - 13/03/2026',
    amount: '€120.00',
  }

  const features = [
    { icon: MapPin, label: language === 'es' ? 'multi-sede' : 'multi-location' },
    { icon: Lock, label: language === 'es' ? 'accesos' : 'access control' },
    { icon: Zap, label: language === 'es' ? 'automatización' : 'automation' },
    { icon: CreditCard, label: language === 'es' ? 'SEPA y cobros' : 'SEPA & payments' },
    { icon: BarChart2, label: language === 'es' ? 'reporting' : 'reporting' },
    { icon: FileText, label: language === 'es' ? 'contratos + facturas' : 'contracts + invoices' },
    { icon: Plug2, label: language === 'es' ? 'integraciones' : 'integrations' },
    { icon: Calendar, label: language === 'es' ? 'reservas online' : 'online booking' },
    { icon: Shield, label: language === 'es' ? 'prueba social' : 'social proof' },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight bg-gradient-to-r from-white via-zinc-300 to-accent-400 bg-clip-text text-transparent">
              {language === 'es' 
                ? 'Software potente y automatizado para operadores de self storage y parkings'
                : 'Powerful, automated software for self-storage and parking operators'}
            </h1>

            <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-xl">
              {language === 'es' 
                ? 'Fácil de implantar, potente para escalar. Accesos, automatización, multi-sede, SEPA, reporting e integraciones en una sola plataforma.'
                : 'Easy to implement, powerful to scale. Access control, automation, multi-location, SEPA, reporting and integrations in one platform.'}
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
            className="flex flex-row flex-wrap gap-3"
          >
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
          </motion.div>

<p className="hidden sm:flex text-sm text-zinc-500 items-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0" />
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
          className="relative -mt-8 lg:-mt-40"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/20 to-accent-600/10 rounded-[2rem] blur-2xl" />
          {/* Mobile Frame - estilo app real */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-[320px] mx-auto bg-zinc-900 rounded-[2rem] shadow-2xl shadow-black/50 border border-zinc-700 overflow-hidden"
          >
            {/* Notch / Status bar */}
            <div className="h-8 bg-zinc-900 flex items-center justify-center">
              <div className="w-20 h-5 bg-zinc-800 rounded-full" />
            </div>

            {/* App Header */}
            <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <Image
                      src="/logo-navbar.png"
                      alt="StorageFy"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-bold bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">StorageFy</span>
                </div>
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Scrollable content - Dashboard + Pagos */}
            <div className="h-[560px] overflow-y-auto bg-zinc-950/50">
              {/* Panel de Control */}
              <div className="px-3 pt-4 pb-2">
                <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  {language === 'es' ? 'Panel de Control' : 'Control Panel'}
                </h3>
                <div className="space-y-2">
                  {dashboardCards.map((card, index) => {
                    const Icon = card.icon
                    const borderColor = card.color === 'blue' ? 'border-l-blue-500' : card.color === 'green' ? 'border-l-green-500' : card.color === 'cyan' ? 'border-l-cyan-500' : card.color === 'purple' ? 'border-l-purple-500' : 'border-l-orange-500'
                    return (
                      <motion.div
                        key={card.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }}
                        className={`bg-zinc-800/80 rounded-lg border-l-4 ${borderColor} p-3 relative`}
                      >
                        <div className="absolute top-2 right-2">
                          <Icon className="w-4 h-4 text-zinc-500" />
                        </div>
                        <div className="text-[10px] font-medium text-zinc-400 uppercase tracking-wide">{card.label}</div>
                        <div className="text-lg font-bold text-white mt-0.5">{card.value}</div>
                        {card.detail && (
                          <div className="text-[11px] text-zinc-500 mt-1">
                            {card.label === (language === 'es' ? 'INGRESOS MENSUALES' : 'MONTHLY INCOME') ? (
                              <>
                                {language === 'es' ? 'De 86 contratos • Cobrado: ' : 'From 86 contracts • Collected: '}
                                <span className="text-green-400 font-medium">7340 €</span>
                              </>
                            ) : (
                              card.detail
                            )}
                          </div>
                        )}
                        {'progress' in card && card.progress !== undefined && (
                          <div className="mt-2 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${card.progress}%` }}
                              transition={{ delay: 1, duration: 0.8 }}
                              className="h-full bg-blue-500 rounded-full"
                            />
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Pagos - Resumen */}
              <div className="px-3 pt-4 pb-2">
                <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  {language === 'es' ? 'Pagos' : 'Payments'}
                </h3>
                <p className="text-[10px] text-zinc-500 mb-2">{language === 'es' ? 'Toca una tarjeta para filtrar' : 'Tap a card to filter'}</p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {paymentSummary.map((s, i) => {
                    const Icon = s.icon
                    const borderColor = s.color === 'blue' ? 'border-l-blue-500' : s.color === 'green' ? 'border-l-green-500' : 'border-l-orange-500'
                    return (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.05, duration: 0.4 }}
                        className={`bg-zinc-800/80 rounded-lg border-l-4 ${borderColor} p-2`}
                      >
                        <Icon className="w-3.5 h-3.5 text-zinc-500 mb-1" />
                        <div className="text-[10px] text-zinc-400 truncate">{s.label}</div>
                        <div className="text-sm font-bold text-white">{s.value}</div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Detalle de pago - card con borde verde */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="bg-zinc-800/80 rounded-lg border-l-4 border-l-green-500 p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-white">{paymentDetail.id}</span>
                    <div className="flex gap-1">
                      <span className="px-1.5 py-0.5 text-[9px] font-medium bg-green-500/20 text-green-400 rounded">{paymentDetail.status}</span>
                      <span className="px-1.5 py-0.5 text-[9px] font-medium bg-zinc-600 text-zinc-300 rounded">{paymentDetail.method}</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <FileText className="w-3 h-3" /> {paymentDetail.contract}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Users className="w-3 h-3" /> {paymentDetail.client}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Package className="w-3 h-3" /> {paymentDetail.unit}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Calendar className="w-3 h-3" /> {paymentDetail.period}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300 font-semibold mt-2">
                      <DollarSign className="w-3 h-3 text-green-400" /> {paymentDetail.amount}
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-3">
                    <span className="text-[9px] px-2 py-1 bg-zinc-700 text-zinc-300 rounded">{language === 'es' ? 'Ver Detalles' : 'View Details'}</span>
                    <span className="text-[9px] px-2 py-1 bg-zinc-700 text-zinc-300 rounded">{language === 'es' ? 'Editar' : 'Edit'}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
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
