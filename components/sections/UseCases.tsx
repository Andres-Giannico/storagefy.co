'use client'

import { motion } from 'framer-motion'
import { FileSpreadsheet, Smartphone, Bell, ArrowRight, CheckCircle, XCircle, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

const UseCases = () => {
  const { language } = useLanguage()

  const cases = [
    {
      icon: FileSpreadsheet,
      titleBefore: language === 'es' ? 'Excel Caótico' : 'Chaotic Excel',
      titleAfter: language === 'es' ? 'Dashboard en Tiempo Real' : 'Real-time Dashboard',
      before: [
        language === 'es' ? 'Hojas desordenadas' : 'Messy spreadsheets',
        language === 'es' ? 'Datos desactualizados' : 'Outdated data',
        language === 'es' ? 'Sin visibilidad' : 'No visibility',
        language === 'es' ? 'Errores manuales' : 'Manual errors'
      ],
      after: [
        language === 'es' ? 'Todo centralizado' : 'Everything centralized',
        language === 'es' ? 'Actualizaciones automáticas' : 'Automatic updates',
        language === 'es' ? 'Métricas en vivo' : 'Live metrics',
        language === 'es' ? 'Sin errores humanos' : 'No human errors'
      ],
      metrics: [
        { value: '15h', label: language === 'es' ? 'Ahorro/semana' : 'Saved/week' },
        { value: '95%', label: language === 'es' ? 'Menos errores' : 'Fewer errors' }
      ],
      color: 'blue'
    },
    {
      icon: Smartphone,
      titleBefore: language === 'es' ? 'Llamadas Manuales 24/7' : 'Manual Calls 24/7',
      titleAfter: language === 'es' ? 'Widget Automático' : 'Automatic Widget',
      before: [
        language === 'es' ? 'Atender llamadas' : 'Answer calls',
        language === 'es' ? 'Horario limitado' : 'Limited hours',
        language === 'es' ? 'Perder clientes' : 'Lose customers',
        language === 'es' ? 'Procesos lentos' : 'Slow processes'
      ],
      after: [
        language === 'es' ? 'Reservas automáticas' : 'Automatic bookings',
        language === 'es' ? 'Disponible 24/7' : 'Available 24/7',
        language === 'es' ? 'Captura todos los leads' : 'Capture all leads',
        language === 'es' ? 'Instantáneo' : 'Instant'
      ],
      metrics: [
        { value: '+45%', label: language === 'es' ? 'Más reservas' : 'More bookings' },
        { value: '24/7', label: language === 'es' ? 'Disponibilidad' : 'Availability' }
      ],
      color: 'green'
    },
    {
      icon: Bell,
      titleBefore: language === 'es' ? 'Morosidad del 40%' : '40% Delinquency',
      titleAfter: language === 'es' ? 'Morosidad del 8%' : '8% Delinquency',
      before: [
        language === 'es' ? 'Recordatorios manuales' : 'Manual reminders',
        language === 'es' ? 'Cobros atrasados' : 'Late payments',
        language === 'es' ? 'Pérdida de ingresos' : 'Revenue loss',
        language === 'es' ? 'Mucho tiempo perdido' : 'Wasted time'
      ],
      after: [
        language === 'es' ? 'Recordatorios automáticos' : 'Automatic reminders',
        language === 'es' ? 'Links de pago 24/7' : 'Payment links 24/7',
        language === 'es' ? 'Cobro puntual' : 'On-time collection',
        language === 'es' ? 'Tiempo libre' : 'Free time'
      ],
      metrics: [
        { value: '-32%', label: language === 'es' ? 'Morosidad' : 'Delinquency' },
        { value: '€25k', label: language === 'es' ? 'Recuperado/año' : 'Recovered/year', note: language === 'es' ? '(centro de 150 unidades)' : '(150-unit center)' }
      ],
      color: 'purple'
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6">
            <TrendingUp className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium text-accent-700">
              {language === 'es' ? 'Transformación Real' : 'Real Transformation'}
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">
              {language === 'es' ? 'De caos manual' : 'From manual chaos'}
            </span>
            <br />
            <span className="text-primary-800">
              {language === 'es' ? 'a automatización total' : 'to total automation'}
            </span>
          </h2>

          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Casos reales de transformación digital en negocios de trasteros y parkings'
              : 'Real cases of digital transformation in storage and parking businesses'
            }
          </p>
        </FadeInUp>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon
            const colorClasses = {
              blue: {
                bg: 'from-blue-500 to-blue-600',
                light: 'bg-blue-50',
                text: 'text-blue-600'
              },
              green: {
                bg: 'from-green-500 to-green-600',
                light: 'bg-green-50',
                text: 'text-green-600'
              },
              purple: {
                bg: 'from-purple-500 to-purple-600',
                light: 'bg-purple-50',
                text: 'text-purple-600'
              }
            }

            const colors = colorClasses[useCase.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${colors.bg} p-6 text-white`}>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{useCase.titleBefore}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-sm font-medium">{useCase.titleAfter}</span>
                  </div>
                </div>

                {/* Before / After Comparison */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Before */}
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-3 flex items-center gap-1">
                        <XCircle className="w-3 h-3 text-red-500" />
                        {language === 'es' ? 'Antes' : 'Before'}
                      </div>
                      <ul className="space-y-2">
                        {useCase.before.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* After */}
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-3 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {language === 'es' ? 'Ahora' : 'Now'}
                      </div>
                      <ul className="space-y-2">
                        {useCase.after.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className={`${colors.light} rounded-xl p-4`}>
                    <div className="grid grid-cols-2 gap-4">
                      {useCase.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-2xl font-bold ${colors.text}`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {metric.label}
                          </div>
                          {metric.note && (
                            <div className="text-xs text-gray-500 mt-0.5 italic">
                              {metric.note}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom message */}
        <FadeInUp className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-50 to-primary-50 rounded-full border border-accent-200">
            <CheckCircle className="w-5 h-5 text-accent-600" />
            <span className="text-primary-700 font-medium">
              {language === 'es' 
                ? 'Resultados reales en menos de 6 meses'
                : 'Real results in less than 6 months'
              }
            </span>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default UseCases

