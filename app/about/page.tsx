'use client'

import { motion } from 'framer-motion'
import { Construction, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function FeaturesPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50/30 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl mb-8 shadow-xl"
          >
            <Construction className="w-12 h-12 text-white" />
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            {language === 'es' ? '🚧 En Construcción' : '🚧 Under Construction'}
          </h1>

          {/* Description */}
          <p className="text-xl text-primary-600 mb-8">
            {language === 'es' 
              ? 'Estamos trabajando en esta página para ofrecerte la mejor experiencia.'
              : 'We are working on this page to offer you the best experience.'
            }
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-primary-200 text-primary-700 font-semibold rounded-full hover:bg-white/50 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                {language === 'es' ? 'Volver Atrás' : 'Go Back'}
              </button>
            </motion.div>
          </div>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium"
          >
            ⏳ {language === 'es' ? 'Próximamente' : 'Coming Soon'}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
