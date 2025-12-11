'use client'

import { motion } from 'framer-motion'
import { Clock, FileSpreadsheet, MessageCircle, Settings, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

const Implementation = () => {
  const { language } = useLanguage()

  const steps = [
    {
      icon: FileSpreadsheet,
      title: language === 'es' 
        ? 'Migración de datos sin coste adicional' 
        : 'Data migration at no additional cost',
      description: language === 'es'
        ? 'Migramos tus datos desde Excel y otros sistemas sin coste adicional. Tu información estará lista en 24 horas.'
        : 'We migrate your data from Excel and other systems at no additional cost. Your information will be ready in 24 hours.'
    },
    {
      icon: MessageCircle,
      title: language === 'es' 
        ? 'Soporte 24/7 en español' 
        : '24/7 support in Spanish',
      description: language === 'es'
        ? 'Soporte por email y WhatsApp. Estamos disponibles cuando lo necesites, en tu idioma.'
        : 'Support by email and WhatsApp. We are available when you need us, in your language.'
    },
    {
      icon: Settings,
      title: language === 'es' 
        ? 'Configuración de planos y precios contigo' 
        : 'Floor plan and pricing setup with you',
      description: language === 'es'
        ? 'Configuramos tus planos y precios contigo. Tu negocio funcionando en menos de un día.'
        : 'We set up your floor plans and prices with you. Your business running in less than a day.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/15 to-primary-400/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6">
            <Clock className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium text-accent-700">
              {language === 'es' ? 'Implementación sin dolores de cabeza' : 'Headache-free implementation'}
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary-800">
            {language === 'es'
              ? 'Digitaliza tu negocio en 24 horas'
              : 'Digitize your business in 24 hours'}
          </h2>

          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            {language === 'es'
              ? 'No necesitas ser técnico. Nosotros nos encargamos de todo para que puedas empezar a gestionar tu negocio de forma profesional desde el primer día.'
              : 'You don\'t need to be technical. We take care of everything so you can start managing your business professionally from day one.'}
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mb-5 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{step.title}</h3>
                <p className="text-primary-600 leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <FadeInUp className="mt-12">
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-6 border border-accent-200">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0" />
              <p className="text-primary-700 font-medium">
                {language === 'es'
                  ? 'Sin costes ocultos. Sin permanencia. Sin sorpresas. Solo resultados.'
                  : 'No hidden costs. No commitment. No surprises. Just results.'}
              </p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default Implementation
