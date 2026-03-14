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
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import LinkWithLang from '@/components/common/LinkWithLang'

export default function VideoPage() {
  const { language } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showPoster, setShowPoster] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
      setShowPoster(false)
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

  const toggleFullscreen = () => {
    if (!videoRef.current) return
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }

  const handleVideoClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'VIDEO') {
      togglePlay()
    }
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
            <LinkWithLang href="/demo-trial">
              <span className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 text-sm">
                {language === 'es' ? 'Probar demo' : 'Try demo'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </LinkWithLang>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Play className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-white/90">
                {language === 'es' ? 'Vídeo demo' : 'Demo video'}
              </span>
            </div>
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
              className="relative aspect-video w-full cursor-pointer group"
              onClick={handleVideoClick}
            >
              <video
                ref={videoRef}
                src="/Storagefy.mp4"
                poster="/images/help/storagefy_hero_mockup.webp"
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

              {/* Controles flotantes */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-950/50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {language === 'es'
                ? '¿Listo para probarlo tú mismo?'
                : 'Ready to try it yourself?'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'es'
                ? 'Accede a la demo en 2 minutos. Sin tarjeta de crédito.'
                : 'Access the demo in 2 minutes. No credit card required.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkWithLang href="/demo-trial">
                <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg hover:shadow-accent-500/30">
                  {language === 'es' ? 'Probar demo gratis' : 'Try free demo'}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </LinkWithLang>
              <LinkWithLang href="/signup">
                <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
                  {language === 'es' ? 'Crear cuenta' : 'Create account'}
                </span>
              </LinkWithLang>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
