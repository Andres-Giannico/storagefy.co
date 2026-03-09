'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Clock,
  TrendingDown,
  Shield,
  Star,
  TrendingUp,
  Globe,
  ChevronDown,
  Copy,
  Check,
  Lock,
  ShieldCheck,
  User,
  Mail,
  Play,
  Pause,
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { cn } from '@/lib/utils'

const DEMO_EMAIL = 'demo@storagefy.app'
const DEMO_PASSWORD = 'demo123'
const LOGIN_URL = 'https://www.storagefy.app/auth/signin?email=demo@storagefy.app&password=demo123'

const CAROUSEL_INTERVAL = 4500

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const slides = [
  {
    image: '/images/demo/dashboard.webp',
    titleEs: 'Panel de Control',
    titleEn: 'Control Panel',
    descEs: 'Ocupación, ingresos mensuales, clientes y actividad reciente en un vistazo',
    descEn: 'Occupancy, monthly income, clients and recent activity at a glance',
  },
  {
    image: '/images/demo/ubicaciones.webp',
    titleEs: 'Ubicaciones',
    titleEn: 'Locations',
    descEs: 'Gestiona tus almacenes: superficie, unidades, clientes, servicios y seguridad',
    descEn: 'Manage your warehouses: area, units, clients, services and security',
  },
  {
    image: '/images/demo/unidades.webp',
    titleEs: 'Unidades',
    titleEn: 'Units',
    descEs: 'Dimensiones, precios, estado de pago y control de morosidad por unidad',
    descEn: 'Dimensions, prices, payment status and delinquency control per unit',
  },
  {
    image: '/images/demo/clientes.webp',
    titleEs: 'Clientes',
    titleEn: 'Clients',
    descEs: 'Base de datos de clientes con unidades asignadas, contacto y estado',
    descEn: 'Client database with assigned units, contact info and status',
  },
  {
    image: '/images/demo/contratos.webp',
    titleEs: 'Contratos',
    titleEn: 'Contracts',
    descEs: 'Contratos de alquiler con período, precio, estado de pago y depósito',
    descEn: 'Rental contracts with period, price, payment status and deposit',
  },
  {
    image: '/images/demo/pagos.webp',
    titleEs: 'Gestión de Pagos',
    titleEn: 'Payment Management',
    descEs: 'Administra pagos, crea facturas y asocia cobros a contratos',
    descEn: 'Manage payments, create invoices and link collections to contracts',
  },
  {
    image: '/images/demo/widget.webp',
    titleEs: 'Widget de Reservas 24/7',
    titleEn: '24/7 Booking Widget',
    descEs: 'Tus clientes reservan unidades desde tu web: dimensiones, precios y disponibilidad',
    descEn: 'Your customers reserve units from your website: dimensions, prices and availability',
  },
  {
    image: '/images/demo/facturacion.webp',
    titleEs: 'Facturación',
    titleEn: 'Invoicing',
    descEs: 'Facturas de alquiler, estados de pago e integración con Verifacti',
    descEn: 'Rental invoices, payment status and Verifacti integration',
  },
  {
    image: '/images/demo/reportes.webp',
    titleEs: 'Reportes y Análisis',
    titleEn: 'Reports and Analysis',
    descEs: 'Ingresos, ocupación, morosidad y estado de pagos del periodo',
    descEn: 'Income, occupancy, delinquency and payment status for the period',
  },
  {
    image: '/images/demo/reportes-metricas.webp',
    titleEs: 'Métricas Avanzadas',
    titleEn: 'Advanced Metrics',
    descEs: 'Valor por contrato, ingresos por m², retención y proyecciones',
    descEn: 'Value per contract, revenue per m², retention and projections',
  },
]

const languages = [
  { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
  { code: 'en' as const, name: 'English', flag: '🇺🇸' },
]

export default function DemoTrialPage() {
  const { language, setLanguage } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [carouselPaused, setCarouselPaused] = useState(false)
  const [slideProgress, setSlideProgress] = useState(0)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [copiedField, setCopiedField] = useState<'email' | 'password' | 'all' | null>(null)
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)
  const touchUnpauseRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartX = useRef<number>(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const formTop = formRef.current?.getBoundingClientRect().top ?? Infinity
      setShowStickyCTA(window.scrollY > 400 && formTop > 120 && !submitted)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [submitted])

  useEffect(() => {
    if (carouselPaused) return
    const step = 50
    const progressStep = (100 / CAROUSEL_INTERVAL) * step
    const timer = setInterval(() => {
      setSlideProgress((p) => {
        if (p + progressStep >= 100) {
          setCurrentSlide((prev) => (prev + 1) % slides.length)
          return 0
        }
        return p + progressStep
      })
    }, step)
    return () => clearInterval(timer)
  }, [carouselPaused])

  useEffect(() => {
    setSlideProgress(0)
  }, [currentSlide])

  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = slides[nextIndex].image
    document.head.appendChild(link)
    return () => { try { document.head.removeChild(link) } catch { /* ignore */ } }
  }, [currentSlide])

  useEffect(() => {
    return () => {
      if (touchUnpauseRef.current) clearTimeout(touchUnpauseRef.current)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('input') || target.closest('textarea') || target.closest('select')) return
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setSlideProgress(0)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setSlideProgress(0)
      } else if (e.key === ' ') {
        e.preventDefault()
        setCarouselPaused((p) => !p)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setSlideProgress(0)
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30 font-demo">
      {/* Sticky CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-100 shadow-lg"
          >
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
              <span className="font-semibold text-primary-800 hidden sm:block">
                {language === 'es' ? 'Prueba StorageFy gratis' : 'Try StorageFy free'}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="https://storagefy.co"
              className="flex items-center space-x-3 group"
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 rounded-lg bg-white p-1.5 shadow-sm border border-primary-100">
                <Image
                  src="/logo.png"
                  alt="StorageFy Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gradient">
                StorageFy
              </span>
            </a>

            {/* Selector de idioma */}
            <div className="relative language-selector">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
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

      {/* Hero - Split layout con mockup y form */}
      <section className="pt-24 pb-32 md:pt-28 md:pb-36 lg:pb-40 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
          />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-accent-300 font-semibold">50+</span>
                <span className="text-white/90 text-sm">
                  {language === 'es' ? 'negocios activos' : 'active businesses'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-white via-accent-200 to-accent-400 bg-clip-text text-transparent drop-shadow-lg">
                  {language === 'es'
                    ? 'Deja de perder tiempo con Excel'
                    : 'Stop wasting time with spreadsheets'}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6">
                {language === 'es'
                  ? 'El software más completo para trasteros. Unidades, clientes, contratos, cobros, facturas, widget 24/7… Todo en una plataforma.'
                  : 'The most complete software for storage. Units, clients, contracts, payments, invoices, 24/7 widget… Everything in one platform.'}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
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
              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:from-accent-600 hover:to-accent-700 transition-all flex items-center gap-2 mx-auto lg:mx-0"
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
                {/* Form card - floating */}
                <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 bg-white rounded-2xl shadow-2xl border border-primary-100 p-6 md:p-8">
                  {!submitted ? (
                    <>
                      <h3 className="text-xl font-bold text-primary-800 mb-2">
                        {language === 'es' ? 'Accede ahora' : 'Access now'}
                      </h3>
                      <p className="text-sm text-primary-600 mb-4">
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
                          className="w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-70"
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

      {/* Social proof stats */}
      <section className="py-8 bg-white border-b border-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-accent-600">50+</p>
              <p className="text-sm text-primary-600">
                {language === 'es' ? 'Negocios activos' : 'Active businesses'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-accent-600">15+</p>
              <p className="text-sm text-primary-600">
                {language === 'es' ? 'Módulos integrados' : 'Integrated modules'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-accent-600">24/7</p>
              <p className="text-sm text-primary-600">
                {language === 'es' ? 'Widget reservas' : 'Booking widget'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-accent-600">0</p>
              <p className="text-sm text-primary-600">
                {language === 'es' ? 'Tarjeta requerida' : 'Card required'}
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-10 bg-gradient-to-b from-white to-primary-50/20 border-b border-primary-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">
                  {language === 'es' ? 'Reduce la morosidad hasta 80%' : 'Reduce delinquency up to 80%'}
                </h3>
                <p className="text-sm text-primary-600">
                  {language === 'es'
                    ? 'Cobros automáticos, recordatorios y links de pago 24/7.'
                    : 'Automatic charges, reminders and 24/7 payment links.'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">
                  {language === 'es' ? 'Configura en 5 minutos' : 'Set up in 5 minutes'}
                </h3>
                <p className="text-sm text-primary-600">
                  {language === 'es'
                    ? 'Onboarding guiado. Ubicaciones, unidades, clientes y contratos.'
                    : 'Guided onboarding. Locations, units, clients and contracts.'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">
                  {language === 'es' ? 'Adiós a Excel — Todo integrado' : 'Goodbye Excel — Everything integrated'}
                </h3>
                <p className="text-sm text-primary-600">
                  {language === 'es'
                    ? 'Widget web 24/7, facturas, cobros, área de clientes, roles, exportaciones, control de puertas desde el móvil…'
                    : '24/7 web widget, invoices, payments, client area, roles, exports, remote door control from your phone…'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">
                  {language === 'es' ? 'Hecho en España' : 'Made in Spain'}
                </h3>
                <p className="text-sm text-primary-600">
                  {language === 'es'
                    ? 'Soporte en español, SEPA, facturación española.'
                    : 'Spanish support, SEPA, Spanish invoicing.'}
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Screenshot carousel */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 text-center">
            {language === 'es' ? 'El software más completo del sector' : 'The most complete software in the industry'}
          </h2>
          <p className="text-primary-600 mb-4 text-center max-w-3xl mx-auto text-lg leading-relaxed">
            {language === 'es'
              ? 'No hay otra herramienta que integre unidades, clientes, contratos, cobros, facturación, widget de reservas 24/7, roles de usuario, exportaciones a Excel/PDF, control de puertas desde el móvil, planos interactivos y tablón de anuncios. Miles de negocios ya dejaron Excel atrás.'
              : 'No other tool integrates units, clients, contracts, payments, invoicing, 24/7 booking widget, user roles, Excel/PDF exports, remote door control from your phone, interactive floor plans and announcement board. Thousands of businesses have left spreadsheets behind.'}
          </p>
          <p className="text-primary-500 mb-12 text-center max-w-2xl mx-auto">
            {language === 'es'
              ? 'Explora las capturas y descubre todo lo que el sistema puede hacer por ti.'
              : 'Explore the screenshots and discover everything the system can do for you.'}
          </p>

          <div
            className="relative"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
            onTouchStart={(e) => {
              if (touchUnpauseRef.current) clearTimeout(touchUnpauseRef.current)
              setCarouselPaused(true)
              touchStartX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 60) {
                if (diff > 0) {
                  setCurrentSlide((prev) => (prev + 1) % slides.length)
                  setSlideProgress(0)
                } else {
                  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
                  setSlideProgress(0)
                }
              }
              touchUnpauseRef.current = setTimeout(() => setCarouselPaused(false), 2500)
            }}
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-primary-100 bg-primary-50 ring-2 ring-accent-500/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.15 : 0.5, ease: 'easeInOut' }}
                  className="relative"
                >
                  <motion.div
                    className="aspect-video relative w-full bg-primary-50 overflow-hidden"
                    animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.02] }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { duration: CAROUSEL_INTERVAL / 1000, ease: 'easeOut' }
                    }
                  >
                    <Image
                      src={slides[currentSlide].image}
                      alt={language === 'es' ? slides[currentSlide].titleEs : slides[currentSlide].titleEn}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 100vw, 1024px"
                      priority
                    />
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pb-4 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1">
                      {language === 'es' ? slides[currentSlide].titleEs : slides[currentSlide].titleEn}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base mb-3">
                      {language === 'es' ? slides[currentSlide].descEs : slides[currentSlide].descEn}
                    </p>
                    {/* Progress bar - estilo video */}
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent-500 rounded-full"
                        animate={{ width: `${slideProgress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles tipo video */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
              <button
                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-50 transition-colors"
                aria-label={language === 'es' ? 'Anterior' : 'Previous'}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCarouselPaused((p) => !p)}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-50 transition-colors"
                aria-label={carouselPaused ? (language === 'es' ? 'Reproducir' : 'Play') : (language === 'es' ? 'Pausar' : 'Pause')}
              >
                {carouselPaused ? (
                  <Play className="w-6 h-6 ml-0.5" />
                ) : (
                  <Pause className="w-6 h-6" />
                )}
              </button>
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={cn(
                      'h-1.5 rounded-full transition-all',
                      i === currentSlide ? 'bg-accent-500 w-8' : 'bg-primary-200 hover:bg-primary-300 w-1.5'
                    )}
                    aria-label={`${language === 'es' ? 'Ir a slide' : 'Go to slide'} ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-50 transition-colors"
                aria-label={language === 'es' ? 'Siguiente' : 'Next'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <span className="text-sm text-primary-500 font-medium min-w-[3rem] text-center">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
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

      {/* Form / Success */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div ref={formRef} className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
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
              className="bg-white rounded-2xl shadow-2xl border border-primary-100 p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-3">
                {language === 'es'
                  ? 'Accede a la demo ahora'
                  : 'Access the demo now'}
              </h2>
              <p className="text-primary-600 mb-6 leading-relaxed">
                {language === 'es'
                  ? 'Introduce tu nombre y email y accede al software más completo del sector. Explora todo lo que StorageFy hace —desde el widget de reservas hasta el control de puertas desde el móvil— con datos de ejemplo. Sin compromiso.'
                  : 'Enter your name and email and access the most complete software in the industry. Explore everything StorageFy does —from the booking widget to remote door control from your phone— with sample data. No commitment.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">
                    {language === 'es' ? 'Nombre' : 'Name'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary-200 text-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary-200 text-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg hover:shadow-xl"
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
                  <h2 className="text-2xl font-bold text-primary-800">
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
