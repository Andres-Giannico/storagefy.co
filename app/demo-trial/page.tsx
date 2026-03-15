'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowRightLeft,
  CheckCircle,
  Zap,
  Clock,
  TrendingDown,
  Shield,
  Star,
  TrendingUp,
  Globe,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Lock,
  ShieldCheck,
  User,
  Mail,
  Play,
  Pause,
  Maximize2,
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { cn } from '@/lib/utils'

const DEMO_EMAIL = 'demo@storagefy.app'
const DEMO_PASSWORD = 'demo123'
const LOGIN_URL = 'https://www.storagefy.app/auth/signin?email=demo@storagefy.app&password=demo123'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const languages = [
  { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
  { code: 'en' as const, name: 'English', flag: '🇺🇸' },
]

const ALL_FEATURES_ES = [
  'Hasta 140 unidades', 'Precio simple: €1/unidad/mes + IVA', 'Locaciones ilimitadas', 'Usuarios ilimitados',
  'Widget reservas 24/7', 'Contratos digitales', 'Fotos DNI seguras', 'Contratos multi-unidad',
  'Planos interactivos', 'Tablón de anuncios', 'Reportes avanzados', 'Soporte prioritario',
  'Recordatorios automáticos', 'Facturación automática mensual', 'Cobro con tarjeta (Stripe)',
  'Domiciliación bancaria SEPA', 'Envío de facturas a la AEAT (Verifactu)', 'Gestión de depósitos y cauciones',
  'Links de pago automáticos', 'Portal del cliente 24/7', 'Descarga de facturas desde el portal',
  'Historial de pagos y contratos', 'Autoservicio de reservas', 'Dimensiones exactas (m² y m³)',
  'Precios por m², m³ o fijo', 'Gestión de impagos y morosidad', 'Dashboard en tiempo real',
  'Exportación de datos (Excel, CSV)', 'Búsqueda avanzada de clientes', 'Cumplimiento GDPR',
  'Datos encriptados', 'Backup automático', 'Integración con Stripe', 'Integración con Verifactu',
  'Centro de ayuda y documentación', 'Sesión de onboarding incluida', 'Migración de datos sin coste',
  'Soporte en español', 'Time Travel en planos (ocupación pasada/futura)', 'Control de acceso (integración Sonoff)',
  '30 días de prueba gratis', 'Sin permanencia ni costes ocultos',
]

const ALL_FEATURES_EN = [
  'Up to 140 units', 'Simple price: €1/unit/month + VAT', 'Unlimited locations', 'Unlimited users',
  '24/7 booking widget', 'Digital contracts', 'Secure ID photos', 'Multi-unit contracts',
  'Interactive floor plans', 'Announcement board', 'Advanced reports', 'Priority support',
  'Automatic reminders', 'Automatic monthly invoicing', 'Card payments (Stripe)',
  'SEPA direct debit', 'Invoice submission to AEAT (Verifactu)', 'Deposit and security management',
  'Automatic payment links', '24/7 client portal', 'Invoice download from portal',
  'Payment and contract history', 'Self-service reservations', 'Exact dimensions (m² and m³)',
  'Pricing by m², m³ or fixed', 'Delinquency management', 'Real-time dashboard',
  'Data export (Excel, CSV)', 'Advanced client search', 'GDPR compliance',
  'Encrypted data', 'Automatic backup', 'Stripe integration', 'Verifactu integration',
  'Help center and documentation', 'Onboarding session included', 'Free data migration',
  'Spanish support', 'Time Travel on floor plans (past/future occupancy)', 'Access control (Sonoff integration)',
  '30-day free trial', 'No commitment or hidden costs',
]

export default function DemoTrialPage() {
  const { language, setLanguage } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [copiedField, setCopiedField] = useState<'email' | 'password' | 'all' | null>(null)
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [videoPosterVisible, setVideoPosterVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const formTop = formRef.current?.getBoundingClientRect().top ?? Infinity
      setShowStickyCTA(window.scrollY > 400 && formTop > 120 && !submitted)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [submitted])

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const enterFullscreen = async () => {
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullScreen?: () => void }) | null
    const container = videoContainerRef.current
    if (!video && !container) return

    const doc = document as Document & { webkitFullscreenElement?: Element; mozFullScreenElement?: Element; msFullscreenElement?: Element }
    if (document.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement) return

    try {
      if (video?.webkitEnterFullScreen) {
        video.webkitEnterFullScreen()
        return
      }
      const elem = container || video
      if (!elem) return
      const reqFs = elem.requestFullscreen || (elem as { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen || (elem as { mozRequestFullScreen?: () => Promise<void> }).mozRequestFullScreen || (elem as { msRequestFullscreen?: () => Promise<void> }).msRequestFullscreen
      await reqFs?.call(elem)
    } catch (err) {
      console.warn('Fullscreen error:', err)
    }
  }

  const toggleFullscreen = async () => {
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullScreen?: () => void; webkitExitFullScreen?: () => void }) | null
    const container = videoContainerRef.current
    if (!video && !container) return

    const doc = document as Document & { webkitFullscreenElement?: Element; mozFullScreenElement?: Element; msFullscreenElement?: Element }
    const isFullscreen = !!(document.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement)

    try {
      if (video?.webkitEnterFullScreen) {
        if (isFullscreen) {
          video.webkitExitFullScreen?.()
        } else {
          video.webkitEnterFullScreen()
        }
        return
      }
      const elem = container || video
      if (!elem) return
      if (isFullscreen) {
        const exitFs = document.exitFullscreen || (document as { webkitExitFullscreen?: () => Promise<void> }).webkitExitFullscreen || (document as { mozCancelFullScreen?: () => Promise<void> }).mozCancelFullScreen || (document as { msExitFullscreen?: () => Promise<void> }).msExitFullscreen
        exitFs?.call(document)
      } else {
        const reqFs = elem.requestFullscreen || (elem as { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen || (elem as { mozRequestFullScreen?: () => Promise<void> }).mozRequestFullScreen || (elem as { msRequestFullscreen?: () => Promise<void> }).msRequestFullscreen
        await reqFs?.call(elem)
      }
    } catch (err) {
      console.warn('Fullscreen error:', err)
    }
  }

  const toggleVideoPlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setVideoPlaying(true)
      setVideoPosterVisible(false)
      enterFullscreen()
    } else {
      videoRef.current.pause()
      setVideoPlaying(false)
      setVideoPosterVisible(true)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (languageOpen && !target.closest('.language-selector')) {
        setLanguageOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [languageOpen])

  const copyToClipboard = async (text: string, field: 'email' | 'password' | 'all') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setShowCopiedTooltip(true)
      setTimeout(() => {
        setCopiedField(null)
        setShowCopiedTooltip(false)
      }, 2000)
    } catch {
      // Fallback para navegadores antiguos
    }
  }

  const copyAllCredentials = () => {
    const text = `${language === 'es' ? 'Email' : 'Email'}: ${DEMO_EMAIL}\n${language === 'es' ? 'Contraseña' : 'Password'}: ${DEMO_PASSWORD}`
    copyToClipboard(text, 'all')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!EMAIL_REGEX.test(formData.email)) {
      setError(
        language === 'es'
          ? 'Introduce un email válido.'
          : 'Please enter a valid email address.'
      )
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-demo-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
      } else {
        if (response.status === 429) {
          setError(result.error || (language === 'es'
            ? 'Demasiados intentos. Espera un momento antes de volver a intentar.'
            : 'Too many attempts. Please wait before trying again.'))
        } else {
          setError(result.error || (language === 'es'
            ? 'Hubo un error. Por favor, inténtalo de nuevo.'
            : 'An error occurred. Please try again.'))
        }
      }
    } catch {
      setError(
        language === 'es'
          ? 'Error de conexión. Comprueba tu internet e inténtalo de nuevo.'
          : 'Connection error. Check your internet and try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50/80 via-white to-accent-50/40 font-demo pb-28 overflow-x-hidden antialiased">
      {/* Sticky CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-100 shadow-lg"
          >
            <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 flex items-center justify-between gap-2">
              <span className="font-semibold text-primary-800 hidden sm:block">
                {language === 'es' ? 'Prueba la demo en 30 segundos' : 'Try the demo in 30 seconds'}
              </span>
              <button
                onClick={scrollToForm}
                className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                {language === 'es' ? 'Obtener acceso' : 'Get access'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-white border-b border-primary-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-2 min-w-0">
            <a
              href="https://storagefy.co"
              className="flex items-center space-x-2 sm:space-x-3 group min-w-0 flex-shrink"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 flex-shrink-0 rounded-lg p-1 sm:p-1.5">
                <Image
                  src="/logo-demo-navbar.png"
                  alt="StorageFy Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gradient truncate tracking-tight">
                StorageFy
              </span>
            </a>

            {/* Selector de idioma */}
            <div className="relative language-selector flex-shrink-0">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
              >
                <Globe className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-700">
                  {languages.find((l) => l.code === language)?.flag}
                </span>
                <ChevronDown className="w-3 h-3 text-primary-500" />
              </button>
              <AnimatePresence>
                {languageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 bottom-full mb-2 sm:bottom-auto sm:mb-0 sm:mt-2 w-40 bg-white rounded-xl shadow-lg border border-primary-100 overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setLanguageOpen(false)
                        }}
                        className={cn(
                          'w-full px-4 py-3 text-left hover:bg-primary-50 flex items-center gap-3',
                          language === lang.code && 'bg-accent-50 text-accent-700'
                        )}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Hero - Split layout con mockup y form - nivel premium */}
      <section className="pt-20 sm:pt-24 pb-40 sm:pb-32 md:pt-28 md:pb-36 lg:pb-40 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-accent-400/25 to-accent-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent-500/15 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-500/5 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-accent-300 font-semibold">50+</span>
                <span className="text-white/90 text-sm">
                  {language === 'es' ? 'negocios activos' : 'active businesses'}
                </span>
              </div>
              <h1 className="font-demo-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tighter">
                <span className="bg-gradient-to-r from-white via-accent-200 to-accent-400 bg-clip-text text-transparent drop-shadow-lg">
                  {language === 'es'
                    ? 'Deja de perder tiempo con Excel'
                    : 'Stop wasting time with spreadsheets'}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 font-medium">
                {language === 'es'
                  ? 'El software más completo para trasteros. Unidades, clientes, contratos, cobros, facturas, widget 24/7… Todo en una plataforma.'
                  : 'The most complete software for storage. Units, clients, contracts, payments, invoices, 24/7 widget… Everything in one platform.'}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6">
                <span className="flex items-center gap-2 text-accent-300 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  {language === 'es' ? 'Acceso inmediato' : 'Instant access'}
                </span>
                <span className="flex items-center gap-2 text-accent-300 text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  {language === 'es' ? 'Sin tarjeta' : 'No card'}
                </span>
                <span className="flex items-center gap-2 text-accent-300 text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  {language === 'es' ? '15+ módulos' : '15+ modules'}
                </span>
              </div>
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 px-3 sm:px-4 py-3 rounded-lg bg-accent-500/20 border border-accent-400/40 mb-6 sm:mb-8 max-w-full">
                <span className="flex items-center gap-2 text-sm font-medium text-accent-200">
                  <ArrowRightLeft className="w-4 h-4" />
                  {language === 'es' ? 'Migración gratis hasta 1 mayo 2026' : 'Free migration until May 1, 2026'}
                </span>
                <span className="text-base font-bold text-accent-100">
                  {language === 'es' ? '¿Más barato? Igualamos tu precio.' : 'Cheaper? We match your price.'}
                </span>
              </div>
              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px -15px rgba(34, 197, 94, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl shadow-lg shadow-accent-500/30 hover:from-accent-600 hover:to-accent-700 transition-all flex items-center gap-2 mx-auto lg:mx-0 text-base"
              >
                {language === 'es' ? 'Obtener acceso a la demo' : 'Get demo access'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Right: Mockup + Form card */}
            <div className="order-1 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/help/storagefy_hero_mockup.webp"
                      alt="StorageFy Dashboard"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
                {/* Form card - flotante premium */}
                <div className="absolute -bottom-6 left-3 right-3 sm:left-4 sm:right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 bg-white rounded-2xl shadow-2xl border border-primary-100 p-4 sm:p-6 md:p-8 ring-4 ring-white/20 backdrop-blur-sm">
                  {!submitted ? (
                    <>
                      <h3 className="font-demo-display text-2xl sm:text-3xl font-extrabold text-primary-900 mb-2 tracking-tight">
                        {language === 'es' ? 'Accede ahora' : 'Access now'}
                      </h3>
                      <p className="text-sm text-primary-600 mb-4 font-medium">
                        {language === 'es'
                          ? 'Nombre y email. Credenciales al instante.'
                          : 'Name and email. Instant credentials.'}
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-primary-200 text-primary-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="tu@email.com"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-primary-200 text-primary-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                          />
                        </div>
                        {error && <p className="text-red-600 text-xs">{error}</p>}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all text-base flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-accent-500/25"
                        >
                          {isSubmitting
                            ? (language === 'es' ? 'Enviando...' : 'Sending...')
                            : (language === 'es' ? 'Quiero probar StorageFy' : 'I want to try StorageFy')}
                        </button>
                      </form>
                      <div className="flex items-center justify-center gap-4 mt-3 text-xs text-primary-500">
                        <span className="flex items-center gap-1">
                          <Lock className="w-3 h-3" /> {language === 'es' ? 'Protegido' : 'Protected'}
                        </span>
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> {language === 'es' ? 'Sin spam' : 'No spam'}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-accent-500 mx-auto mb-3" />
                      <h3 className="font-bold text-primary-800 mb-1">
                        {language === 'es' ? '¡Listo!' : 'Ready!'}
                      </h3>
                      <p className="text-sm text-primary-600 mb-4">
                        {language === 'es' ? 'Credenciales abajo' : 'Credentials below'}
                      </p>
                      <a
                        href={LOGIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 text-white font-semibold rounded-lg text-sm hover:bg-accent-600"
                      >
                        {language === 'es' ? 'Ir a login' : 'Go to login'}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Edad de piedra - ilustración */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-primary-100 bg-white">
              <Image
                src="/images/demo/edad-piedra.webp"
                alt={language === 'es' ? 'Gestión prehistórica vs futuro con StorageFy' : 'Prehistoric management vs future with StorageFy'}
                width={1200}
                height={675}
                className="w-full h-auto object-contain"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Video - StorageFy en acción */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-8 sm:mb-10">
            <p className="text-accent-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
              {language === 'es' ? 'Vídeo demo' : 'Video demo'}
            </p>
            <h2 className="font-demo-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary-800 tracking-tight leading-[1.1] mb-3 sm:mb-4">
              {language === 'es'
                ? 'StorageFy en acción'
                : 'StorageFy in action'}
            </h2>
            <p className="text-base sm:text-lg text-primary-600 max-w-2xl mx-auto px-2 sm:px-0">
              {language === 'es'
                ? 'Descubre en 2 minutos cómo el software más completo para trasteros puede transformar tu negocio.'
                : 'Discover in 2 minutes how the most complete storage software can transform your business.'}
            </p>
          </FadeInUp>
          <FadeInUp>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-primary-100 ring-2 sm:ring-4 ring-accent-500/10 w-full max-w-4xl mx-auto">
              <div
                ref={videoContainerRef}
                className="relative aspect-video w-full cursor-pointer group bg-primary-900"
                onClick={toggleVideoPlay}
              >
                <video
                  ref={videoRef}
                  src="/Storagefy.mp4"
                  poster="/images/video-cover.webp"
                  className="w-full h-full object-contain"
                  playsInline
                  preload="metadata"
                  onPlay={() => {
                    setVideoPlaying(true)
                    setVideoPosterVisible(false)
                  }}
                  onPause={() => {
                    setVideoPlaying(false)
                    setVideoPosterVisible(true)
                  }}
                  onEnded={() => {
                    setVideoPlaying(false)
                    setVideoPosterVisible(true)
                  }}
                />
                {videoPosterVisible && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl hover:shadow-accent-500/30 transition-shadow"
                      aria-label={language === 'es' ? 'Reproducir' : 'Play'}
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent-600 ml-1" fill="currentColor" />
                    </motion.button>
                  </div>
                )}
                {!videoPosterVisible && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleVideoPlay()
                      }}
                      className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                      aria-label={videoPlaying ? (language === 'es' ? 'Pausar' : 'Pause') : (language === 'es' ? 'Reproducir' : 'Play')}
                    >
                      {videoPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFullscreen()
                      }}
                      className="p-2 rounded-lg hover:bg-white/20 transition-colors ml-auto"
                      aria-label={language === 'es' ? 'Pantalla completa' : 'Fullscreen'}
                    >
                      <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Social proof stats - nivel premium */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary-800 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-400/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent-400/30 transition-all"
            >
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">50+</p>
              <p className="text-sm text-white/80 mt-1">
                {language === 'es' ? 'Negocios activos' : 'Active businesses'}
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent-400/30 transition-all"
            >
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">43</p>
              <p className="text-sm text-white/80 mt-1">
                {language === 'es' ? 'Funciones incluidas' : 'Features included'}
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent-400/30 transition-all"
            >
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">24/7</p>
              <p className="text-sm text-white/80 mt-1">
                {language === 'es' ? 'Widget reservas' : 'Booking widget'}
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent-400/30 transition-all"
            >
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">0</p>
              <p className="text-sm text-white/80 mt-1">
                {language === 'es' ? 'Tarjeta requerida' : 'Card required'}
              </p>
            </motion.div>
          </FadeInUp>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 via-white to-accent-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,179,66,0.08)_0%,_transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-12">
            <h2 className="font-demo-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-800 tracking-tight mb-2">
              {language === 'es' ? 'Por qué StorageFy' : 'Why StorageFy'}
            </h2>
            <p className="text-primary-600 text-base sm:text-lg max-w-2xl mx-auto">
              {language === 'es' ? 'Todo lo que necesitas para gestionar tu negocio de trasteros.' : 'Everything you need to manage your storage business.'}
            </p>
          </FadeInUp>
          <FadeInUp className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-5 p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-l-accent-500 shadow-lg shadow-primary-900/5 hover:shadow-xl hover:shadow-accent-500/15 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/30 group-hover:scale-110 transition-transform">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-demo-display font-extrabold text-primary-800 mb-2 text-lg sm:text-xl">
                  {language === 'es' ? 'Reduce la morosidad hasta 80%' : 'Reduce delinquency up to 80%'}
                </h3>
                <p className="text-base text-primary-700 leading-relaxed">
                  {language === 'es'
                    ? 'Cobros automáticos, recordatorios y links de pago 24/7.'
                    : 'Automatic charges, reminders and 24/7 payment links.'}
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-5 p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-l-accent-500 shadow-lg shadow-primary-900/5 hover:shadow-xl hover:shadow-accent-500/15 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/30 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-demo-display font-extrabold text-primary-800 mb-2 text-lg sm:text-xl">
                  {language === 'es' ? 'Configura en 5 minutos' : 'Set up in 5 minutes'}
                </h3>
                <p className="text-base text-primary-700 leading-relaxed">
                  {language === 'es'
                    ? 'Onboarding guiado. Ubicaciones, unidades, clientes y contratos.'
                    : 'Guided onboarding. Locations, units, clients and contracts.'}
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-5 p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-l-accent-500 shadow-lg shadow-primary-900/5 hover:shadow-xl hover:shadow-accent-500/15 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/30 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-demo-display font-extrabold text-primary-800 mb-2 text-lg sm:text-xl">
                  {language === 'es' ? 'Adiós a Excel — Todo integrado' : 'Goodbye Excel — Everything integrated'}
                </h3>
                <p className="text-base text-primary-700 leading-relaxed">
                  {language === 'es'
                    ? 'Widget web 24/7, facturas, cobros, área de clientes, roles, exportaciones, control de puertas desde el móvil…'
                    : '24/7 web widget, invoices, payments, client area, roles, exports, remote door control from your phone…'}
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-5 p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-l-accent-500 shadow-lg shadow-primary-900/5 hover:shadow-xl hover:shadow-accent-500/15 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/30 group-hover:scale-110 transition-transform">
                <ArrowRightLeft className="w-7 h-7 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-demo-display font-extrabold text-primary-800 mb-2 text-lg sm:text-xl">
                  {language === 'es' ? 'Migración + igualamos tu precio' : 'Migration + we match your price'}
                </h3>
                <p className="text-base text-primary-700 leading-relaxed">
                  {language === 'es'
                    ? '¿Usas otro sistema? Hasta 1 mayo 2026: migramos tus clientes gratis. ¿El tuyo es más barato? Igualamos tu precio.'
                    : 'Using another system? Until May 1, 2026: we migrate your clients for free. Is yours cheaper? We match your price.'}
                </p>
              </div>
            </motion.div>
          </FadeInUp>
        </div>
      </section>

      {/* Todo lo que incluye - expandible */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="rounded-lg border border-accent-200/50 bg-accent-50/40 overflow-hidden">
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="w-full px-4 py-3 flex items-center justify-between gap-3 hover:bg-accent-50/60 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <CheckCircle className="w-4 h-4 text-accent-600 flex-shrink-0" />
                  <span className="font-demo-display font-bold text-primary-800 text-base">
                    {language === 'es' ? '43 funciones incluidas' : '43 features included'}
                  </span>
                  <span className="text-primary-500 text-sm hidden sm:inline">
                    — {language === 'es' ? 'todo incluido' : 'all included'}
                  </span>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-500 text-white font-semibold text-sm shrink-0 hover:bg-accent-600 transition-colors">
                  {showAllFeatures
                    ? (language === 'es' ? 'Ocultar' : 'Hide')
                    : (language === 'es' ? 'Ver todo' : 'View all')}
                  {showAllFeatures ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {showAllFeatures && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0 border-t border-accent-200/40">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5 pt-6">
                        {(language === 'es' ? ALL_FEATURES_ES : ALL_FEATURES_EN).map((feature, i) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.02, duration: 0.2 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                            <span className="text-sm text-primary-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="grid md:grid-cols-2 gap-8">
            {/* Steffano */}
            <div className="bg-white rounded-2xl shadow-xl border border-primary-100 p-8">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/logotrasteros.png"
                  alt="Trasteros Ibiza"
                  width={120}
                  height={48}
                  className="object-contain"
                  style={{ height: 'auto', width: 'auto', maxHeight: '48px' }}
                />
              </div>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-lg text-primary-800 font-medium leading-relaxed mb-4 italic">
                &ldquo;
                {language === 'es'
                  ? 'Pasamos de gestionar todo manualmente a StorageFy y aumentamos la ocupación del 52% al 82% en solo 5 meses. El widget de reservas 24/7 fue un cambio radical para nuestro negocio en Ibiza.'
                  : 'We moved from managing everything manually to StorageFy and increased occupancy from 52% to 82% in just 5 months. The 24/7 booking widget was a game changer for our business in Ibiza.'}
                &rdquo;
              </blockquote>
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-primary-100">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent-600" />
                  <div>
                    <span className="text-xl font-bold text-primary-800 block">+30%</span>
                    <span className="text-sm text-primary-600">
                      {language === 'es' ? 'Ocupación' : 'Occupancy'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent-600" />
                  <div>
                    <span className="text-xl font-bold text-primary-800 block">15h</span>
                    <span className="text-sm text-primary-600">
                      {language === 'es' ? 'Ahorro/semana' : 'Saved/week'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-100 relative flex-shrink-0">
                  <Image
                    src="/images/steffnao.png"
                    alt="Steffano"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary-800">Steffano</p>
                  <p className="text-primary-600 text-sm">
                    {language === 'es' ? 'Propietario' : 'Owner'}
                  </p>
                  <a
                    href="https://www.trasteros-ibiza.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 font-medium text-sm hover:underline"
                  >
                    Trasteros Ibiza (2 {language === 'es' ? 'locaciones' : 'locations'})
                  </a>
                </div>
                <span className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  {language === 'es' ? 'Emprendedor' : 'Entrepreneur'}
                </span>
              </div>
            </div>

            {/* Laura Fernández */}
            <div className="bg-white rounded-2xl shadow-xl border border-primary-100 p-8">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-lg text-primary-800 font-medium leading-relaxed mb-4 italic">
                &ldquo;
                {language === 'es'
                  ? 'La morosidad se redujo del 35% al 8% gracias a los recordatorios automáticos y los links de pago. Ahora todo fluye solo.'
                  : 'Delinquency dropped from 35% to 8% thanks to automatic reminders and payment links. Now everything flows automatically.'}
                &rdquo;
              </blockquote>
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-primary-100">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-accent-600" />
                  <div>
                    <span className="text-xl font-bold text-primary-800 block">-27%</span>
                    <span className="text-sm text-primary-600">
                      {language === 'es' ? 'Morosidad' : 'Delinquency'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent-600" />
                  <div>
                    <span className="text-xl font-bold text-primary-800 block">€18k</span>
                    <span className="text-sm text-primary-600">
                      {language === 'es' ? 'Recuperado' : 'Recovered'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center text-white font-bold text-sm">
                  LF
                </div>
                <div>
                  <p className="font-semibold text-primary-800">Laura Fernández</p>
                  <p className="text-primary-600 text-sm">
                    {language === 'es' ? 'Gerente de Operaciones' : 'Operations Manager'}
                  </p>
                  <p className="text-accent-600 font-medium text-sm">
                    StorageMax Barcelona
                  </p>
                </div>
                <span className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  {language === 'es' ? 'Negocio en Crecimiento' : 'Growing Business'}
                </span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Form / Success - CTA final */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50/40 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-400/10 rounded-full blur-3xl -translate-y-1/2" />
        <div ref={formRef} className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp>
          <div className="bg-gradient-to-r from-accent-50 to-green-50 border-2 border-accent-200 rounded-xl p-6 mb-6 text-center">
            <p className="text-primary-700 font-semibold mb-2 text-base">
              {language === 'es'
                ? '¿Usas otro sistema? Migramos todos tus clientes gratis hasta el 1 de mayo de 2026.'
                : 'Using another system? We migrate all your clients for free until May 1, 2026.'}
            </p>
            <p className="text-xl font-extrabold text-accent-700 font-demo-display">
              {language === 'es'
                ? '¿Tu sistema es más barato? Igualamos tu precio.'
                : 'Is your system cheaper? We match your price.'}
            </p>
          </div>
          <p className="text-center text-primary-600 mb-8">
            {language === 'es'
              ? 'El sistema más completo para trasteros. Más de 50 negocios ya gestionan todo con StorageFy.'
              : 'The most complete system for storage. Over 50 businesses already manage everything with StorageFy.'}
          </p>
          </FadeInUp>
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-primary-900/10 ring-1 ring-primary-100 p-8 md:p-10 lg:p-12 hover:shadow-accent-500/20 transition-all duration-300 border-l-4 border-l-accent-500"
            >
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-100/40 to-transparent rounded-bl-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-500/5 rounded-full blur-2xl" />

              {/* Badge */}
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200/60 mb-6">
                <Zap className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-semibold text-accent-700">
                  {language === 'es' ? 'Acceso en 30 segundos' : 'Access in 30 seconds'}
                </span>
              </div>

              <h2 className="relative font-demo-display text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-primary-800 mb-4 tracking-tight">
                {language === 'es'
                  ? 'Accede a la demo ahora'
                  : 'Access the demo now'}
              </h2>
              <p className="relative text-primary-600 mb-8 leading-relaxed text-base md:text-lg max-w-lg">
                {language === 'es'
                  ? 'Introduce tu nombre y email y accede al software más completo del sector. Explora todo lo que StorageFy hace —desde el widget de reservas hasta el control de puertas desde el móvil— con datos de ejemplo. Sin compromiso.'
                  : 'Enter your name and email and access the most complete software in the industry. Explore everything StorageFy does —from the booking widget to remote door control from your phone— with sample data. No commitment.'}
              </p>

              <form onSubmit={handleSubmit} className="relative space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    {language === 'es' ? 'Nombre' : 'Name'}
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400 group-focus-within:text-accent-500 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-primary-200 text-primary-800 placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                      placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    Email
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400 group-focus-within:text-accent-500 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-primary-200 text-primary-800 placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
                >
                  {isSubmitting
                    ? language === 'es'
                      ? 'Enviando...'
                      : 'Sending...'
                    : language === 'es'
                      ? 'Quiero probar StorageFy'
                      : 'I want to try StorageFy'}
                </button>
                <p className="text-center text-sm text-primary-500">
                  {language === 'es'
                    ? 'Recibirás las credenciales al instante en esta misma página.'
                    : 'You\'ll receive the credentials instantly on this page.'}
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-primary-100 mt-6">
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <Lock className="w-4 h-4 text-accent-500" />
                    <span>
                      {language === 'es' ? 'Datos protegidos' : 'Data protected'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <ShieldCheck className="w-4 h-4 text-accent-500" />
                    <span>
                      {language === 'es' ? 'Sin spam' : 'No spam'}
                    </span>
                  </div>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-primary-100 p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-10 h-10 text-accent-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary-800 tracking-tight">
                    {language === 'es'
                      ? '¡Listo! Ya puedes entrar'
                      : 'Ready! You can log in now'}
                  </h2>
                  <p className="text-primary-600">
                    {language === 'es'
                      ? 'Explora el sistema más completo del sector: widget, roles, exportaciones, control de puertas… Todo integrado.'
                      : 'Explore the most complete system in the industry: widget, roles, exports, door control… Everything integrated.'}
                  </p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 mb-6 border border-primary-100">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-primary-600">
                    {language === 'es' ? 'Credenciales de acceso' : 'Access credentials'}
                  </p>
                  <button
                    onClick={copyAllCredentials}
                    className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-primary-200 hover:bg-primary-50 transition-colors text-sm font-medium text-primary-700"
                    title={language === 'es' ? 'Copiar todo' : 'Copy all'}
                  >
                    <Copy className="w-4 h-4" />
                    {language === 'es' ? 'Copiar todo' : 'Copy all'}
                    {(showCopiedTooltip && copiedField === 'all') && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary-800 text-white text-xs rounded shadow-lg whitespace-nowrap">
                        {language === 'es' ? '¡Copiado!' : 'Copied!'}
                      </span>
                    )}
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 bg-white rounded-lg px-4 py-3 border border-primary-100">
                    <div>
                      <span className="text-xs text-primary-500 block">
                        {language === 'es' ? 'Email' : 'Email'}
                      </span>
                      <span className="font-mono text-primary-800">{DEMO_EMAIL}</span>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => copyToClipboard(DEMO_EMAIL, 'email')}
                        className="p-2 rounded-lg hover:bg-primary-100 transition-colors"
                        title={language === 'es' ? 'Copiar' : 'Copy'}
                      >
                        {copiedField === 'email' ? (
                          <Check className="w-4 h-4 text-accent-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-primary-500" />
                        )}
                      </button>
                      {copiedField === 'email' && showCopiedTooltip && (
                        <span className="absolute -top-8 right-0 px-2 py-1 bg-primary-800 text-white text-xs rounded shadow-lg whitespace-nowrap">
                          {language === 'es' ? '¡Copiado!' : 'Copied!'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 bg-white rounded-lg px-4 py-3 border border-primary-100">
                    <div>
                      <span className="text-xs text-primary-500 block">
                        {language === 'es' ? 'Contraseña' : 'Password'}
                      </span>
                      <span className="font-mono text-primary-800">{DEMO_PASSWORD}</span>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => copyToClipboard(DEMO_PASSWORD, 'password')}
                        className="p-2 rounded-lg hover:bg-primary-100 transition-colors"
                        title={language === 'es' ? 'Copiar' : 'Copy'}
                      >
                        {copiedField === 'password' ? (
                          <Check className="w-4 h-4 text-accent-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-primary-500" />
                        )}
                      </button>
                      {copiedField === 'password' && showCopiedTooltip && (
                        <span className="absolute -top-8 right-0 px-2 py-1 bg-primary-800 text-white text-xs rounded shadow-lg whitespace-nowrap">
                          {language === 'es' ? '¡Copiado!' : 'Copied!'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {language === 'es' ? 'Haz login' : 'Log in'}
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
