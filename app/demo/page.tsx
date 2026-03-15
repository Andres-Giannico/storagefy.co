'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2,
  ArrowRight, 
  ArrowRightLeft,
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Mail,
  Phone,
  Building2,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Target
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import LinkWithLang from '@/components/common/LinkWithLang'

export default function DemoPage() {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [showVideoPoster, setShowVideoPoster] = useState(true)

  const CAROUSEL_INTERVAL = 4500
  const [carouselPaused, setCarouselPaused] = useState(false)
  const [slideProgress, setSlideProgress] = useState(0)

  const slides = [
    { image: '/images/demo/dashboard.webp', titleEs: 'Panel de Control', titleEn: 'Control Panel', descEs: 'Ocupación, ingresos mensuales, clientes y actividad reciente en un vistazo', descEn: 'Occupancy, monthly income, clients and recent activity at a glance' },
    { image: '/images/demo/ubicaciones.webp', titleEs: 'Ubicaciones', titleEn: 'Locations', descEs: 'Gestiona tus almacenes: superficie, unidades, clientes, servicios y seguridad', descEn: 'Manage your warehouses: area, units, clients, services and security' },
    { image: '/images/demo/unidades.webp', titleEs: 'Unidades', titleEn: 'Units', descEs: 'Dimensiones, precios, estado de pago y control de morosidad por unidad', descEn: 'Dimensions, prices, payment status and delinquency control per unit' },
    { image: '/images/demo/clientes.webp', titleEs: 'Clientes', titleEn: 'Clients', descEs: 'Base de datos de clientes con unidades asignadas, contacto y estado', descEn: 'Client database with assigned units, contact info and status' },
    { image: '/images/demo/contratos.webp', titleEs: 'Contratos', titleEn: 'Contracts', descEs: 'Contratos de alquiler con período, precio, estado de pago y depósito', descEn: 'Rental contracts with period, price, payment status and deposit' },
    { image: '/images/demo/pagos.webp', titleEs: 'Gestión de Pagos', titleEn: 'Payment Management', descEs: 'Administra pagos, crea facturas y asocia cobros a contratos', descEn: 'Manage payments, create invoices and link collections to contracts' },
    { image: '/images/demo/widget.webp', titleEs: 'Widget de Reservas 24/7', titleEn: '24/7 Booking Widget', descEs: 'Tus clientes reservan unidades desde tu web: dimensiones, precios y disponibilidad', descEn: 'Your customers reserve units from your website: dimensions, prices and availability' },
    { image: '/images/demo/facturacion.webp', titleEs: 'Facturación', titleEn: 'Invoicing', descEs: 'Facturas de alquiler, estados de pago e integración con Verifacti', descEn: 'Rental invoices, payment status and Verifacti integration' },
    { image: '/images/demo/reportes.webp', titleEs: 'Reportes y Análisis', titleEn: 'Reports and Analysis', descEs: 'Ingresos, ocupación, morosidad y estado de pagos del periodo', descEn: 'Income, occupancy, delinquency and payment status for the period' },
    { image: '/images/demo/reportes-metricas.webp', titleEs: 'Métricas Avanzadas', titleEn: 'Advanced Metrics', descEs: 'Valor por contrato, ingresos por m², retención y proyecciones', descEn: 'Value per contract, revenue per m², retention and projections' },
  ]

  useEffect(() => {
    if (carouselPaused) return
    const step = 50
    const progressStep = (100 / CAROUSEL_INTERVAL) * step
    const timer = setInterval(() => {
      setSlideProgress((p) => {
        if (p + progressStep >= 100) {
          setCurrentStep((prev) => (prev + 1) % slides.length)
          return 0
        }
        return p + progressStep
      })
    }, step)
    return () => clearInterval(timer)
  }, [carouselPaused, currentStep, slides.length])

  useEffect(() => setSlideProgress(0), [currentStep])

  const useCases = [
    {
      icon: Building2,
      title: language === 'es' ? 'Trasteros Urbanos' : 'Urban Storage',
      description: language === 'es' 
        ? 'Gestiona múltiples ubicaciones en la ciudad con control centralizado.'
        : 'Manage multiple city locations with centralized control.',
      results: language === 'es' ? '+45% ocupación' : '+45% occupancy',
      client: language === 'es' ? 'Trasteros Madrid' : 'Madrid Storage'
    },
    {
      icon: Target,
      title: language === 'es' ? 'Almacenes Industriales' : 'Industrial Warehouses',
      description: language === 'es'
        ? 'Control de grandes espacios industriales con dimensiones precisas.'
        : 'Control of large industrial spaces with precise dimensions.',
      results: language === 'es' ? '+60% eficiencia' : '+60% efficiency',
      client: language === 'es' ? 'Logística Ibiza' : 'Ibiza Logistics'
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Self Storage Premium' : 'Premium Self Storage',
      description: language === 'es'
        ? 'Servicio de lujo con automatización completa y atención 24/7.'
        : 'Luxury service with complete automation and 24/7 attention.',
      results: language === 'es' ? '+80% satisfacción' : '+80% satisfaction',
      client: language === 'es' ? 'Premium Storage BCN' : 'Premium Storage BCN'
    },
    {
      icon: Clock,
      title: language === 'es' ? 'Setup Simplificado' : 'Simplified Setup',
      description: language === 'es'
        ? 'Configuración rápida y guiada para nuevos negocios de trasteros.'
        : 'Quick and guided setup for new storage businesses.',
      results: language === 'es' ? '5 min vs 2 horas' : '5 min vs 2 hours',
      client: language === 'es' ? 'Nuevos Emprendedores' : 'New Entrepreneurs'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Gestión de Equipos' : 'Team Management',
      description: language === 'es'
        ? 'Multi-usuario con roles diferenciados para equipos grandes.'
        : 'Multi-user with differentiated roles for large teams.',
      results: language === 'es' ? '4 usuarios activos' : '4 active users',
      client: language === 'es' ? 'Empresas en Crecimiento' : 'Growing Companies'
    }
  ]

  const testimonials = [
    {
      name: 'Steffano',
      role: language === 'es' ? 'Propietario, Trasteros Ibiza (2 locaciones)' : 'Owner, Ibiza Storage (2 locations)',
      content: language === 'es'
        ? 'Pasamos de gestionar todo manualmente a StorageFy y aumentamos la ocupación del 52% al 82% en solo 5 meses. El widget de reservas 24/7 fue un cambio radical para nuestro negocio en Ibiza.'
        : 'We moved from managing everything manually to StorageFy and increased occupancy from 52% to 82% in just 5 months. The 24/7 booking widget was a game changer for our business in Ibiza.',
      rating: 5,
      avatar: '/images/steffnao.png',
      metrics: [
        { value: '+30%', label: language === 'es' ? 'Ocupación' : 'Occupancy', icon: TrendingUp },
        { value: '15h', label: language === 'es' ? 'Ahorro/semana' : 'Saved/week', icon: Clock }
      ]
    },
    {
      name: language === 'es' ? 'Carlos López' : 'Carlos López',
      role: language === 'es' ? 'CEO, Logística Ibiza' : 'CEO, Ibiza Logistics',
      content: language === 'es'
        ? 'La reducción de morosidad fue impresionante. En 3 meses bajamos del 15% al 3%. Los clientes pagan más rápido que nunca.'
        : 'The delinquency reduction was impressive. In 3 months we went from 15% to 3%. Clients pay faster than ever.',
      rating: 5,
      avatar: '/images/clientes.webp',
      metrics: [
        { value: '-12%', label: language === 'es' ? 'Morosidad' : 'Delinquency', icon: TrendingDown },
        { value: '€18k', label: language === 'es' ? 'Recuperado' : 'Recovered', icon: TrendingUp }
      ]
    },
    {
      name: language === 'es' ? 'Ana Fernández' : 'Ana Fernández',
      role: language === 'es' ? 'Gerente, Premium Storage BCN' : 'Manager, Premium Storage BCN',
      content: language === 'es'
        ? 'El widget de captación online es increíble. Recibimos 5x más leads y la conversión es automática. Nuestro negocio creció 200%.'
        : 'The online capture widget is incredible. We receive 5x more leads and conversion is automatic. Our business grew 200%.',
      rating: 5,
      avatar: '/images/clientes.webp',
      metrics: [
        { value: '5x', label: language === 'es' ? 'Más leads' : 'More leads', icon: TrendingUp },
        { value: '200%', label: language === 'es' ? 'Crecimiento' : 'Growth', icon: TrendingUp }
      ]
    }
  ]

  const toggleVideoPlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
      setShowVideoPoster(false)
      // Fullscreen automático al dar play (debe ser en el mismo gesto del usuario)
      enterFullscreen()
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleVideoMute = () => setIsMuted((m) => !m)

  const enterFullscreen = async () => {
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullScreen?: () => void; webkitExitFullScreen?: () => void }) | null
    const container = videoContainerRef.current
    if (!video && !container) return

    const doc = document as Document & { webkitFullscreenElement?: Element; mozFullScreenElement?: Element; msFullscreenElement?: Element }
    const isFullscreen = !!(
      document.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement
    )
    if (isFullscreen) return

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

  const toggleVideoFullscreen = async () => {
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullScreen?: () => void; webkitExitFullScreen?: () => void }) | null
    const container = videoContainerRef.current
    if (!video && !container) return

    try {
      if (video?.webkitEnterFullScreen) {
        if (document.fullscreenElement || (document as { webkitFullscreenElement?: Element }).webkitFullscreenElement) {
          video.webkitExitFullScreen?.()
        } else {
          video.webkitEnterFullScreen()
        }
        return
      }
      const elem = container || video
      if (!elem) return
      const doc = document as Document & { webkitFullscreenElement?: Element; mozFullScreenElement?: Element; msFullscreenElement?: Element }
      const isFullscreen = !!(document.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement)
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      
      {/* Hero Section with Video */}
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
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <FadeInUp>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-6 shadow-lg"
                >
                  <Play className="w-4 h-4 text-accent-300" />
                  <span className="text-sm font-medium text-white">
                    {language === 'es' ? 'Demo en Vivo' : 'Live Demo'}
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-accent-300 to-accent-400 bg-clip-text text-transparent drop-shadow-lg">
                    {language === 'es' ? 'Ve StorageFy en acción' : 'See StorageFy in Action'}
                  </span>
                </h1>
                
                <p className="text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
                  {language === 'es'
                    ? 'Descubre cómo StorageFy puede transformar tu negocio de trasteros. Ve las características principales en funcionamiento.'
                    : 'Discover how StorageFy can transform your storage business. See the main features in action.'
                  }
                </p>

                {/* Banner de registro rápido */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-sm font-semibold text-green-700">
                      {language === 'es'
                        ? 'Prueba la demo en 30 segundos'
                        : 'Try the demo in 30 seconds'}
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-accent-50 to-green-50 border-2 border-accent-200 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-primary-700 mb-1">
                    {language === 'es'
                      ? '¿Vienes de otro sistema? Migración gratis hasta 1 mayo 2026.'
                      : 'Coming from another system? Free migration until May 1, 2026.'}
                  </p>
                  <p className="text-base font-bold text-accent-700">
                    {language === 'es'
                      ? '¿Tu sistema es más barato? Igualamos tu precio.'
                      : 'Is your system cheaper? We match your price.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <LinkWithLang href="/demo-trial">
                    <span className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium rounded-lg shadow-md hover:from-accent-600 hover:to-accent-700 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer">
                      {language === 'es' ? 'Probar demo gratis' : 'Try free demo'}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </LinkWithLang>
                  <LinkWithLang href="/signup">
                    <span className="px-5 py-2.5 bg-white/10 border border-white/20 text-white font-medium rounded-lg shadow-sm hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer">
                      {language === 'es' ? 'Crear cuenta' : 'Create account'}
                    </span>
                  </LinkWithLang>
                  <button
                    onClick={toggleVideoPlay}
                    className="px-5 py-2.5 bg-white/10 border border-white/20 text-white font-medium rounded-lg shadow-sm hover:bg-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2 text-sm"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying 
                      ? (language === 'es' ? 'Pausar' : 'Pause')
                      : (language === 'es' ? 'Iniciar Demo' : 'Start Demo')
                    }
                  </button>
                  <button
                    onClick={toggleVideoMute}
                    className="px-5 py-2.5 bg-white/10 border border-white/20 text-white font-medium rounded-lg shadow-sm hover:bg-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2 text-sm"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    {isMuted 
                      ? (language === 'es' ? 'Activar Audio' : 'Enable Audio')
                      : (language === 'es' ? 'Silenciar' : 'Mute')
                    }
                  </button>
                </div>
              </motion.div>
            </FadeInUp>

            {/* Video Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                ref={videoContainerRef}
                className="relative rounded-2xl shadow-2xl border border-white/20 overflow-hidden bg-black/40 cursor-pointer group"
                onClick={() => toggleVideoPlay()}
              >
                <video
                  ref={videoRef}
                  src="/Storagefy.mp4"
                  poster="/images/video-cover.webp"
                  className="w-full aspect-video object-contain"
                  playsInline
                  muted={isMuted}
                  onPlay={() => {
                    setIsPlaying(true)
                    setShowVideoPoster(false)
                  }}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    setIsPlaying(false)
                    setShowVideoPoster(true)
                  }}
                />
                {/* Play overlay */}
                {showVideoPoster && (
                  <div
                    data-play-overlay
                    className="absolute inset-0 bg-black/30 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-xl">
                      <Play className="w-8 h-8 text-primary-800 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                {/* Controles flotantes - visibles al hover (desktop) o siempre en móvil */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleVideoPlay() }}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors text-white"
                    aria-label={isPlaying ? (language === 'es' ? 'Pausar' : 'Pause') : (language === 'es' ? 'Reproducir' : 'Play')}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleVideoMute() }}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors text-white"
                    aria-label={isMuted ? (language === 'es' ? 'Activar sonido' : 'Unmute') : (language === 'es' ? 'Silenciar' : 'Mute')}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleVideoFullscreen() }}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors text-white ml-auto"
                    aria-label={language === 'es' ? 'Pantalla completa' : 'Fullscreen'}
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-20 pointer-events-none" 
                     style={{ boxShadow: '0 0 60px rgba(124, 179, 66, 0.3)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social proof stats */}
      <section className="py-12 bg-gradient-to-b from-primary-800 via-primary-700 to-primary-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">50+</p>
              <p className="text-sm text-white/80 mt-1">{language === 'es' ? 'Negocios activos' : 'Active businesses'}</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">43</p>
              <p className="text-sm text-white/80 mt-1">{language === 'es' ? 'Funciones incluidas' : 'Features included'}</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">24/7</p>
              <p className="text-sm text-white/80 mt-1">{language === 'es' ? 'Widget reservas' : 'Booking widget'}</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">0</p>
              <p className="text-sm text-white/80 mt-1">{language === 'es' ? 'Tarjeta requerida' : 'Card required'}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshot Carousel Section */}
      <section ref={containerRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-800 mb-6">
              {language === 'es' ? 'El software más completo del sector' : 'The most complete software in the industry'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Explora las capturas y descubre todo lo que StorageFy puede hacer por ti.'
                : 'Explore the screenshots and discover everything StorageFy can do for you.'
              }
            </p>
          </FadeInUp>

          <div
            className="relative"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-primary-100 bg-primary-50 ring-2 ring-accent-500/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="aspect-video relative w-full bg-primary-50 overflow-hidden">
                    <Image
                      src={slides[currentStep].image}
                      alt={language === 'es' ? slides[currentStep].titleEs : slides[currentStep].titleEn}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 100vw, 1024px"
                      priority
                    />
                  </div>
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pb-4 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1">
                      {language === 'es' ? slides[currentStep].titleEs : slides[currentStep].titleEn}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base">
                      {language === 'es' ? slides[currentStep].descEs : slides[currentStep].descEn}
                    </p>
                    <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent-500 rounded-full"
                        animate={{ width: `${slideProgress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="md:hidden p-4 bg-white border-t border-primary-100">
                    <h3 className="text-lg font-bold text-primary-800 mb-1">
                      {language === 'es' ? slides[currentStep].titleEs : slides[currentStep].titleEn}
                    </h3>
                    <p className="text-primary-600 text-sm">
                      {language === 'es' ? slides[currentStep].descEs : slides[currentStep].descEn}
                    </p>
                    <div className="mt-3 h-1 bg-primary-100 rounded-full overflow-hidden">
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

            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
              <button
                onClick={() => setCurrentStep((prev) => (prev - 1 + slides.length) % slides.length)}
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
                {carouselPaused ? <Play className="w-6 h-6 ml-0.5" /> : <Pause className="w-6 h-6" />}
              </button>
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStep(i)}
                    className={cn(
                      'h-1.5 rounded-full transition-all',
                      i === currentStep ? 'bg-accent-500 w-8' : 'bg-primary-200 hover:bg-primary-300 w-1.5'
                    )}
                    aria-label={`${language === 'es' ? 'Ir a slide' : 'Go to slide'} ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentStep((prev) => (prev + 1) % slides.length)}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-50 transition-colors"
                aria-label={language === 'es' ? 'Siguiente' : 'Next'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <span className="text-sm text-primary-500 font-medium min-w-[3rem] text-center">
                {currentStep + 1} / {slides.length}
              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <LinkWithLang href="/demo-trial">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg hover:shadow-accent-500/30">
                {language === 'es' ? 'Probar demo en 30 segundos' : 'Try demo in 30 seconds'}
                <ArrowRight className="w-5 h-5" />
              </span>
            </LinkWithLang>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-800 mb-6">
              {language === 'es' ? 'Casos de Uso Reales' : 'Real Use Cases'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Empresas que ya transformaron su negocio con StorageFy'
                : 'Companies that already transformed their business with StorageFy'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <div
                  key={useCase.title}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-primary-100 hover:shadow-2xl transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-800 mb-3">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-primary-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-accent-600 mb-1">
                        {useCase.results}
                      </div>
                      <div className="text-sm text-primary-500">
                        {useCase.client}
                      </div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-accent-500" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-800 mb-6">
              {language === 'es' ? 'Lo que dicen nuestros clientes' : 'What Our Clients Say'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Testimonios reales de empresas que ya digitalizaron su gestión'
                : 'Real testimonials from companies that already digitalized their management'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const hasMetrics = 'metrics' in testimonial && testimonial.metrics
              return (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.6
                    }
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-primary-100 hover:shadow-2xl transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-primary-700 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  {hasMetrics && (
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-primary-100 mb-6">
                      {testimonial.metrics!.map((m) => {
                        const Icon = m.icon
                        return (
                          <div key={m.label} className="flex items-center gap-2">
                            <Icon className="w-5 h-5 text-accent-600 flex-shrink-0" />
                            <div>
                              <span className="text-xl font-bold text-primary-800 block">{m.value}</span>
                              <span className="text-sm text-primary-600">{m.label}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-primary-800">{testimonial.name}</div>
                      <div className="text-sm text-primary-600">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {language === 'es' ? '¿Listo para probar StorageFy?' : 'Ready to try StorageFy?'}
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              {language === 'es'
                ? 'Accede a la demo en 30 segundos. Sin tarjeta de crédito. Credenciales al instante.'
                : 'Access the demo in 30 seconds. No credit card required. Instant credentials.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkWithLang href="/demo-trial">
                <span className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg hover:shadow-accent-500/30 text-lg">
                  {language === 'es' ? 'Probar demo gratis' : 'Try free demo'}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </LinkWithLang>
              <LinkWithLang href="/signup">
                <span className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-lg">
                  {language === 'es' ? 'Crear cuenta' : 'Create account'}
                </span>
              </LinkWithLang>
            </div>
          </FadeInUp>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-300 flex-shrink-0" />
                <span className="text-white">hola@storagefy.co</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-300 flex-shrink-0" />
                  <span className="text-white">{language === 'es' ? 'Theo:' : 'Theo:'} +34 871 242 642</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-300 flex-shrink-0" />
                  <span className="text-white">Juan David: +34 871 242 616</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-white/80 text-sm">
              {language === 'es' ? 'Te responderemos en menos de 24 horas' : 'We will respond within 24 hours'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}