'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import HelpSearchBar from './HelpSearchBar'
import HelpCategoryChip from './HelpCategoryChip'
import { helpCategories } from '@/lib/help/help-categories'

export default function HelpCenterHero() {
  const { language } = useLanguage()
  
  // Obtener categorías populares (las primeras 6)
  const popularCategories = helpCategories
    .sort((a, b) => a.order - b.order)
    .slice(0, 6)

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <FadeInUp>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6"
          >
            <BookOpen className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium text-accent-700">
              {language === 'es' ? 'Centro de Ayuda' : 'Help Center'}
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">
              {language === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help you?'}
            </span>
          </h1>

          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'es'
              ? 'Encuentra respuestas rápidas a tus preguntas y aprende a usar todas las funcionalidades de StorageFy.'
              : 'Find quick answers to your questions and learn how to use all StorageFy features.'}
          </p>

          {/* Barra de búsqueda funcional */}
          <div className="max-w-3xl mx-auto mb-8">
            <HelpSearchBar variant="hero" />
          </div>

          {/* Chips de categorías populares */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            <span className="text-sm text-gray-500 mr-2">
              {language === 'es' ? 'Explorar por:' : 'Browse by:'}
            </span>
            {popularCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <HelpCategoryChip category={category} variant="large" />
              </motion.div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

