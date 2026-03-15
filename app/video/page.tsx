'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  User,
  Mail,
  Lock,
  ShieldCheck,
  Copy,
  Check,
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import LinkWithLang from '@/components/common/LinkWithLang'

const DEMO_EMAIL = 'demo@storagefy.app'
const DEMO_PASSWORD = 'demo123'
const LOGIN_URL = 'https://www.storagefy.app/auth/signin?email=demo@storagefy.app&password=demo123'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function VideoPage() {
  const { language } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showPoster, setShowPoster] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copiedField, setCopiedField] = useState<'email' | 'password' | 'all' | null>(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
      setShowPoster(false)
      // Fullscreen automático al dar play (debe ser en el mismo gesto del usuario)
      enterFullscreen()
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const enterFullscreen = async () => {
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullScreen?: () => void; webkitExitFullScreen?: () => void }) | null
    const container = videoContainerRef.current
    if (!video && !container) return

    const doc = document as Document & { webkitFullscreenElement?: Element; mozFullScreenElement?: Element; msFullscreenElement?: Element }
    const isFullscreen = !!(document.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement)
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

  const toggleFullscreen = async () => {
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

  const handleVideoClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'VIDEO') {
      togglePlay()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!EMAIL_REGEX.test(formData.email)) {
      setError(language === 'es' ? 'Introduce un email válido.' : 'Please enter a valid email address.')
      return
    }
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-demo-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language }),
      })
      const result = await response.json()
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
      } else {
        setError(result.error || (language === 'es' ? 'Hubo un error. Por favor, inténtalo de nuevo.' : 'An error occurred. Please try again.'))
        if (response.status === 429) {
          setError(result.error || (language === 'es' ? 'Demasiados intentos. Espera un momento.' : 'Too many attempts. Please wait.'))
        }
      }
    } catch {
      setError(language === 'es' ? 'Error de conexión. Comprueba tu internet.' : 'Connection error. Check your internet.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyToClipboard = async (text: string, field: 'email' | 'password' | 'all') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch { /* ignore */ }
  }

  const copyAllCredentials = () => {
    copyToClipboard(`${language === 'es' ? 'Email' : 'Email'}: ${DEMO_EMAIL}\n${language === 'es' ? 'Contraseña' : 'Password'}: ${DEMO_PASSWORD}`, 'all')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-x-hidden">
      {/* Header minimal */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-primary-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="https://storagefy.co"
              className="flex items-center gap-2 group"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/logo-demo-navbar.png"
                  alt="StorageFy"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-accent-300 transition-colors">
                StorageFy
              </span>
            </a>
            <div className="flex items-center gap-2">
              <LinkWithLang href="/signup">
                <span className="px-4 py-2 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm">
                  {language === 'es' ? 'Registrarse' : 'Sign up'}
                </span>
              </LinkWithLang>
              <LinkWithLang href="/demo-trial">
                <span className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 text-sm">
                  {language === 'es' ? 'Probar demo' : 'Try demo'}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </LinkWithLang>
            </div>
          </div>
        </div>
      </header>

      {/* Hero + Video */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-accent-200 to-accent-400 bg-clip-text text-transparent">
                {language === 'es'
                  ? 'StorageFy en acción'
                  : 'StorageFy in action'}
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Descubre cómo el software más completo para trasteros puede transformar tu negocio.'
                : 'Discover how the most complete storage software can transform your business.'}
            </p>
          </motion.div>

          {/* Video container */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-sm"
          >
            <div
              ref={videoContainerRef}
              className="relative aspect-video w-full cursor-pointer group"
              onClick={handleVideoClick}
            >
              <video
                ref={videoRef}
                src="/Storagefy.mp4"
                poster="/images/video-cover.webp"
                className="w-full h-full object-contain"
                playsInline
                onPlay={() => {
                  setIsPlaying(true)
                  setShowPoster(false)
                }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setIsPlaying(false)
                  setShowPoster(true)
                }}
              />

              {/* Poster overlay con play button */}
              {showPoster && (
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  onClick={togglePlay}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 flex items-center justify-center shadow-xl hover:bg-white transition-colors"
                    aria-label={language === 'es' ? 'Reproducir' : 'Play'}
                  >
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 text-primary-800 ml-1" fill="currentColor" />
                  </motion.button>
                </div>
              )}

              {/* Controles flotantes - visibles en móvil, hover en desktop */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePlay()
                    }}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label={isPlaying ? (language === 'es' ? 'Pausar' : 'Pause') : (language === 'es' ? 'Reproducir' : 'Play')}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleMute()
                    }}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label={isMuted ? (language === 'es' ? 'Activar sonido' : 'Unmute') : (language === 'es' ? 'Silenciar' : 'Mute')}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFullscreen()
                    }}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors ml-auto"
                    aria-label={language === 'es' ? 'Pantalla completa' : 'Fullscreen'}
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-300"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-400" />
              {language === 'es' ? '50+ negocios activos' : '50+ active businesses'}
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent-400" />
              {language === 'es' ? 'Configura en 5 min' : 'Set up in 5 min'}
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent-400" />
              {language === 'es' ? 'Hecho en España' : 'Made in Spain'}
            </span>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Formulario de acceso a demo */}
      <section ref={formRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-950/50">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              {language === 'es'
                ? '¿Listo para probarlo tú mismo?'
                : 'Ready to try it yourself?'}
            </h2>
            <p className="text-gray-300 mb-6 text-center">
              {language === 'es'
                ? 'Accede a la demo en 30 segundos. Sin tarjeta de crédito.'
                : 'Access the demo in 30 seconds. No credit card required.'}
            </p>

            {!submitted ? (
              <>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-1">
                      {language === 'es' ? 'Nombre' : 'Name'}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-1">
                      {language === 'es' ? 'Email' : 'Email'}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={language === 'es' ? 'tu@email.com' : 'you@email.com'}
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (language === 'es' ? 'Enviando...' : 'Sending...') : (language === 'es' ? 'Enviar credenciales' : 'Send credentials')}
                  </button>
                </form>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                  <Lock className="w-3.5 h-3.5 shrink-0" />
                  <span>{language === 'es' ? 'Sin tarjeta de crédito' : 'No credit card required'}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-white/60">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{language === 'es' ? 'Datos protegidos' : 'Data protected'}</span>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-400">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">{language === 'es' ? 'Credenciales enviadas' : 'Credentials sent'}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 rounded-lg bg-white/10 px-3 py-2">
                    <span className="text-sm text-white/80">{language === 'es' ? 'Email' : 'Email'}</span>
                    <div className="flex items-center gap-2">
                      <code className="text-sm text-white font-mono truncate max-w-[140px] sm:max-w-none">{DEMO_EMAIL}</code>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(DEMO_EMAIL, 'email')}
                        className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white shrink-0"
                        title={language === 'es' ? 'Copiar' : 'Copy'}
                      >
                        {copiedField === 'email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 rounded-lg bg-white/10 px-3 py-2">
                    <span className="text-sm text-white/80">{language === 'es' ? 'Contraseña' : 'Password'}</span>
                    <div className="flex items-center gap-2">
                      <code className="text-sm text-white font-mono">{DEMO_PASSWORD}</code>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(DEMO_PASSWORD, 'password')}
                        className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white shrink-0"
                        title={language === 'es' ? 'Copiar' : 'Copy'}
                      >
                        {copiedField === 'password' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors"
                >
                  {language === 'es' ? 'Ir a login' : 'Go to login'}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={copyAllCredentials}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-white/30 text-white/90 text-sm hover:bg-white/10 transition-colors"
                >
                  {copiedField === 'all' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {language === 'es' ? 'Copiar credenciales' : 'Copy credentials'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
