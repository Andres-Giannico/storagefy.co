'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

const FinalCTA = () => {
  const { language } = useLanguage()

  const benefits = [
    language === 'es' ? 'Digitaliza tu negocio en 24 horas' : 'Digitize your business in 24 hours',
    language === 'es' ? 'Aumenta ingresos hasta 30%' : 'Increase revenue up to 30%',
    language === 'es' ? 'Reduce morosidad en 80%' : 'Reduce delinquency by 80%',
    language === 'es' ? 'Gestión 24/7 desde cualquier lugar' : '24/7 management from anywhere'
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-500/20 to-accent-700/20 rounded-full blur-3xl"
        />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content */}
        <FadeInUp className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-6 shadow-lg"
          >
            <CheckCircle className="w-4 h-4 text-accent-300" />
            <span className="text-sm font-semibold text-white">
              {language === 'es' ? 'Únete a la revolución digital' : 'Join the digital revolution'}
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            <span className="text-gradient-accent">
              {language === 'es' ? '¿Listo para transformar' : 'Ready to transform'}
            </span>
            <br />
            <span className="text-white">
              {language === 'es' ? 'tu negocio?' : 'your business?'}
            </span>
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'es'
              ? 'Más de 50 negocios de trasteros y parkings ya digitalizaron su gestión con StorageFy. Comienza tu transformación digital hoy mismo.'
              : 'Over 50 storage and parking businesses have already digitalized their management with StorageFy. Start your digital transformation today.'
            }
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-4 h-4 text-accent-300 flex-shrink-0" />
                <span className="text-sm text-gray-100">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(124, 179, 66, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {language === 'es' ? 'Comenzar prueba gratuita de 14 días' : 'Start 14-day free trial'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                {language === 'es' ? 'Hablar con un especialista' : 'Talk to a specialist'}
              </motion.a>
            </div>
            <p className="text-sm text-gray-300 text-center">
              {language === 'es' ? '✓ Sin tarjeta • Sin permanencia • Migración de datos incluida' : '✓ No card • No commitment • Data migration included'}
            </p>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default FinalCTA
