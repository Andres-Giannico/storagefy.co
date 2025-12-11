'use client'

import { motion } from 'framer-motion'
import { Building2, TrendingUp, Crown, CheckCircle, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

const ClientProfiles = () => {
  const { language } = useLanguage()

  const profiles = [
    {
      icon: Building2,
      title: language === 'es' ? 'Nuevo centro de trasteros o parkings' : 'New storage or parking center',
      size: language === 'es' ? '1 locación, 30–150 unidades' : '1 location, 30–150 units',
      description: language === 'es' 
        ? 'Perfecto para emprendedores que están empezando o quieren profesionalizar su negocio.'
        : 'Perfect for entrepreneurs who are starting out or want to professionalize their business.',
      benefits: [
        language === 'es' ? 'Setup rápido en 24 horas' : 'Quick setup in 24 hours',
        language === 'es' ? 'Widget de reservas aumenta captación 300%' : 'Booking widget increases capture by 300%'
      ],
      result: language === 'es'
        ? 'De Excel caótico a gestión profesional en un día.'
        : 'From chaotic Excel to professional management in one day.',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: language === 'es' ? 'Operador en crecimiento' : 'Growing operator',
      size: language === 'es' ? '2–5 locaciones' : '2–5 locations',
      description: language === 'es'
        ? 'Para negocios que están expandiéndose y necesitan centralizar la gestión.'
        : 'For businesses that are expanding and need to centralize management.',
      benefits: [
        language === 'es' ? 'Gestiona todas las locaciones desde un solo panel' : 'Manage all locations from a single panel',
        language === 'es' ? 'Ahorra tiempo equivalente a 1-2 empleados' : 'Saves time equivalent to 1-2 employees'
      ],
      result: language === 'es'
        ? 'Reduce costes operativos y escala sin contratar más personal.'
        : 'Reduces operating costs and scales without hiring more staff.',
      color: 'green'
    },
    {
      icon: Crown,
      title: language === 'es' ? 'Gran operador' : 'Large operator',
      size: language === 'es' ? 'Más de 5 locaciones' : 'More than 5 locations',
      description: language === 'es'
        ? 'Para empresas establecidas que buscan eficiencia operativa y reporting avanzado.'
        : 'For established companies looking for operational efficiency and advanced reporting.',
      benefits: [
        language === 'es' ? 'Reportes consolidados en tiempo real' : 'Consolidated real-time reports',
        language === 'es' ? 'Account manager dedicado y soporte prioritario' : 'Dedicated account manager and priority support'
      ],
      result: language === 'es'
        ? 'Toma decisiones estratégicas con datos en tiempo real.'
        : 'Make strategic decisions with real-time data.',
      color: 'purple'
    }
  ]

  const colorClasses = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      light: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      light: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-700'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      light: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700'
    }
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/10 to-primary-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6">
            <Building2 className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium text-accent-700">
              {language === 'es' ? 'Segmentación' : 'Segmentation'}
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">
              {language === 'es' ? '¿Es StorageFy' : 'Is StorageFy'}
            </span>
            <br />
            <span className="text-primary-800">
              {language === 'es' ? 'para ti?' : 'for you?'}
            </span>
          </h2>

          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            {language === 'es'
              ? 'StorageFy se adapta a negocios de todos los tamaños. Encuentra tu perfil:'
              : 'StorageFy adapts to businesses of all sizes. Find your profile:'}
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            const Icon = profile.icon
            const colors = colorClasses[profile.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-accent-200 overflow-hidden transition-all duration-300"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${colors.bg} p-6 text-white`}>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{profile.title}</h3>
                  <div className="text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block">
                    {profile.size}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-primary-600 mb-6">{profile.description}</p>

                  {/* Benefits */}
                  <div className={`${colors.light} rounded-xl p-4 mb-6 border ${colors.border}`}>
                    <div className="space-y-3">
                      {profile.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm font-medium text-primary-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowRight className={`w-4 h-4 ${colors.text}`} />
                      <span className="text-xs font-semibold text-primary-500 uppercase">
                        {language === 'es' ? 'Resultado' : 'Result'}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-primary-800 italic">
                      &ldquo;{profile.result}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ClientProfiles
