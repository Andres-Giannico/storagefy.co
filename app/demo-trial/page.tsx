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
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { cn } from '@/lib/utils'

const DEMO_EMAIL = 'demo@storagefy.app'
const DEMO_PASSWORD = 'demo123'
const LOGIN_URL = 'https://www.storagefy.app/auth/signin'

const CAROUSEL_INTERVAL = 4500

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const slides = [
  {
    image: '/images/reportes.webp',
    titleEs: 'Dashboard y reportes',
    titleEn: 'Dashboard and reports',
    descEs: 'Métricas en tiempo real y KPIs de tu negocio',
    descEn: 'Real-time metrics and business KPIs',
  },
  {
    image: '/images/unidades.webp',
    titleEs: 'Gestión de unidades',
    titleEn: 'Unit management',
    descEs: 'Control de unidades con dimensiones y estados',
    descEn: 'Unit control with dimensions and status',
  },
  {
    image: '/images/clientes.webp',
    titleEs: 'Clientes',
    titleEn: 'Clients',
    descEs: 'Ficha completa de cada cliente',
    descEn: 'Complete profile for each client',
  },
  {
    image: '/images/contratos.webp',
    titleEs: 'Contratos digitales',
    titleEn: 'Digital contracts',
    descEs: 'Generación automática y seguimiento',
    descEn: 'Automatic generation and tracking',
  },
  {
    image: '/images/pagos.webp',
    titleEs: 'Cobros y pagos',
    titleEn: 'Payments',
    descEs: 'Cobros recurrentes, recordatorios y links de pago',
    descEn: 'Recurring payments, reminders and payment links',
  },
  {
    image: '/images/help/form_factura.webp',
    titleEs: 'Facturación',
    titleEn: 'Invoicing',
    descEs: 'Facturas automáticas a partir de los cobros',
    descEn: 'Automatic invoices from payment data',
  },
  {
    image: '/images/help/dashboard.webp',
    titleEs: 'Panel de control',
    titleEn: 'Control panel',
    descEs: 'Vista general de tu negocio',
    descEn: 'Overview of your business',
  },
  {
    image: '/images/help/clients.webp',
    titleEs: 'Área de clientes',
    titleEn: 'Client area',
    descEs: 'Los clientes ven facturas, pagos y contratos',
    descEn: 'Clients view invoices, payments and contracts',
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
  const [languageOpen, setLanguageOpen] = useState(false)
  const [copiedField, setCopiedField] = useState<'email' | 'password' | 'all' | null>(null)
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)
  const touchUnpauseRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (carouselPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, CAROUSEL_INTERVAL)
    return () => clearInterval(timer)
  }, [carouselPaused])

  useEffect(() => {
    return () => {
      if (touchUnpauseRef.current) clearTimeout(touchUnpauseRef.current)
    }
  }, [])

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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-white border-b border-primary-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="https://storagefy.co"
              className="flex items-center space-x-3 group"
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 rounded-lg bg-white p-1.5 shadow-sm">
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

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-accent-300 to-accent-400 bg-clip-text text-transparent drop-shadow-lg">
              {language === 'es'
                ? 'Deja de perder tiempo con Excel'
                : 'Stop wasting time with spreadsheets'}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'es'
              ? 'StorageFy es el software que usan los negocios de trasteros para gestionar unidades, clientes, contratos y cobros en una sola plataforma. Pruébalo ahora sin compromiso.'
              : 'StorageFy is the software storage businesses use to manage units, clients, contracts and payments in one platform. Try it now with no commitment.'}
          </p>
          <p className="text-accent-300 font-medium mb-8">
            {language === 'es'
              ? 'Acceso inmediato · Sin tarjeta · Sin permanencia'
              : 'Instant access · No card · No commitment'}
          </p>
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:from-accent-600 hover:to-accent-700 transition-all flex items-center gap-2 mx-auto"
          >
            {language === 'es' ? 'Obtener acceso a la demo' : 'Get demo access'}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-10 bg-white border-b border-primary-100">
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
                  {language === 'es' ? 'Todo automatizado' : 'Everything automated'}
                </h3>
                <p className="text-sm text-primary-600">
                  {language === 'es'
                    ? 'Facturas, cobros recurrentes y área de clientes incluida.'
                    : 'Invoices, recurring charges and client area included.'}
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
            {language === 'es' ? 'Así funciona StorageFy' : 'How StorageFy works'}
          </h2>
          <p className="text-primary-600 mb-4 text-center max-w-3xl mx-auto text-lg leading-relaxed">
            {language === 'es'
              ? 'Miles de empresas de trasteros ya gestionan su negocio con StorageFy. El flujo es simple: crea tus ubicaciones, define las unidades, añade clientes y genera contratos. El sistema se encarga de los cobros recurrentes, las facturas y el área de clientes.'
              : 'Thousands of storage businesses already manage their operations with StorageFy. The flow is simple: create your locations, define units, add clients and generate contracts. The system handles recurring charges, invoices and the client area.'}
          </p>
          <p className="text-primary-500 mb-12 text-center max-w-2xl mx-auto">
            {language === 'es'
              ? 'Explora las capturas del sistema y descubre todo lo que puedes hacer.'
              : 'Explore the system screenshots and discover everything you can do.'}
          </p>

          <div
            className="relative"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
            onTouchStart={() => {
              if (touchUnpauseRef.current) clearTimeout(touchUnpauseRef.current)
              setCarouselPaused(true)
            }}
            onTouchEnd={() => {
              touchUnpauseRef.current = setTimeout(() => setCarouselPaused(false), 2500)
            }}
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-primary-100 bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="aspect-video relative w-full bg-primary-50">
                    <Image
                      src={slides[currentSlide].image}
                      alt={language === 'es' ? slides[currentSlide].titleEs : slides[currentSlide].titleEn}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 100vw, 1024px"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1">
                      {language === 'es' ? slides[currentSlide].titleEs : slides[currentSlide].titleEn}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base">
                      {language === 'es' ? slides[currentSlide].descEs : slides[currentSlide].descEn}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-white transition-colors z-10"
              aria-label={language === 'es' ? 'Anterior' : 'Previous'}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-white transition-colors z-10"
              aria-label={language === 'es' ? 'Siguiente' : 'Next'}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentSlide
                      ? 'bg-accent-500 w-8'
                      : 'bg-primary-200 hover:bg-primary-300'
                  }`}
                  aria-label={`${language === 'es' ? 'Ir a slide' : 'Go to slide'} ${i + 1}`}
                />
              ))}
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
              ? 'Más de 50 negocios de trasteros ya gestionan su operación con StorageFy.'
              : 'Over 50 storage businesses already manage their operations with StorageFy.'}
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
                  ? 'Introduce tu nombre y email y te daremos acceso inmediato. Podrás explorar el sistema completo con datos de ejemplo: unidades, clientes, contratos, cobros y facturas. Sin compromiso.'
                  : 'Enter your name and email and we\'ll give you immediate access. You can explore the full system with sample data: units, clients, contracts, payments and invoices. No commitment.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">
                    {language === 'es' ? 'Nombre' : 'Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 text-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary-200 text-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
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
                      ? 'Explora el sistema completo. Estas credenciales te dan acceso a la demo con datos de ejemplo.'
                      : 'Explore the full system. These credentials give you access to the demo with sample data.'}
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
