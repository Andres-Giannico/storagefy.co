'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp, Clock, DollarSign, Quote } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

const Testimonials = () => {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: language === 'es' ? 'Steffano' : 'Steffano',
      role: language === 'es' ? 'Propietario' : 'Owner',
      company: language === 'es' ? 'Trasteros Ibiza' : 'Ibiza Storage',
      quote: language === 'es' 
        ? 'Pasamos de gestionar todo manualmente a StorageFy y aumentamos la ocupación del 52% al 82% en solo 5 meses. El widget de reservas 24/7 fue un cambio radical para nuestro negocio en Ibiza.'
        : 'We moved from managing everything manually to StorageFy and increased occupancy from 52% to 82% in just 5 months. The 24/7 booking widget was a game changer for our business in Ibiza.',
      avatar: '/images/steffnao.png',
      logo: '/images/logotrasteros.png',
      logoUrl: 'https://www.trasteros-ibiza.com/',
      companyUrl: 'https://www.trasteros-ibiza.com/',
      locations: 2,
      metrics: [
        { 
          icon: TrendingUp, 
          value: '+30%', 
          label: language === 'es' ? 'Ocupación' : 'Occupancy' 
        },
        { 
          icon: Clock, 
          value: '15h', 
          label: language === 'es' ? 'Ahorro/semana' : 'Saved/week' 
        }
      ],
      size: 'small',
      color: 'blue'
    },
    {
      name: language === 'es' ? 'Laura Fernández' : 'Laura Fernández',
      role: language === 'es' ? 'Gerente de Operaciones' : 'Operations Manager',
      company: language === 'es' ? 'StorageMax Barcelona' : 'StorageMax Barcelona',
      quote: language === 'es'
        ? 'La morosidad se redujo del 35% al 8% gracias a los recordatorios automáticos y los links de pago. Ahora todo fluye solo.'
        : 'Delinquency dropped from 35% to 8% thanks to automatic reminders and payment links. Now everything flows automatically.',
      avatar: 'LF',
      metrics: [
        { 
          icon: DollarSign, 
          value: '-27%', 
          label: language === 'es' ? 'Morosidad' : 'Delinquency' 
        },
        { 
          icon: TrendingUp, 
          value: '€18k', 
          label: language === 'es' ? 'Recuperado' : 'Recovered' 
        }
      ],
      size: 'medium',
      color: 'green'
    },
    {
      name: language === 'es' ? 'Miguel Ángel Ruiz' : 'Miguel Ángel Ruiz',
      role: language === 'es' ? 'Director General' : 'CEO',
      company: language === 'es' ? 'Grupo TrasteroSur (5 locaciones)' : 'TrasteroSur Group (5 locations)',
      quote: language === 'es'
        ? 'Gestionar 5 locaciones desde un solo panel nos ahorró contratar 2 personas. Los reportes en tiempo real nos permiten tomar decisiones rápidas.'
        : 'Managing 5 locations from one panel saved us from hiring 2 people. Real-time reports allow us to make quick decisions.',
      avatar: 'MR',
      metrics: [
        { 
          icon: DollarSign, 
          value: '€50k', 
          label: language === 'es' ? 'Ahorro anual' : 'Annual savings' 
        },
        { 
          icon: Clock, 
          value: '20h', 
          label: language === 'es' ? 'Ahorro/semana' : 'Saved/week' 
        }
      ],
      size: 'large',
      color: 'purple'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50/30 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6">
            <Quote className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium text-accent-700">
              {language === 'es' ? 'Testimonios Reales' : 'Real Testimonials'}
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">
              {language === 'es' ? 'Lo que dicen' : 'What our'}
            </span>
            <br />
            <span className="text-primary-800">
              {language === 'es' ? 'nuestros clientes' : 'clients say'}
            </span>
          </h2>

          <p className="text-lg text-primary-600 max-w-2xl mx-auto mb-2 font-medium">
            {language === 'es' 
              ? 'Basado en datos reales de clientes en España'
              : 'Based on real data from clients in Spain'
            }
          </p>

          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Empresas de todos los tamaños confían en StorageFy para transformar su gestión'
              : 'Companies of all sizes trust StorageFy to transform their management'
            }
          </p>
        </FadeInUp>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              green: 'from-green-500 to-green-600',
              purple: 'from-purple-500 to-purple-600'
            }

            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Company Logo */}
                {testimonial.logo && (
                  <div className="flex justify-center mb-6">
                    {testimonial.logoUrl ? (
                      <a 
                        href={testimonial.logoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <div className="relative h-12 w-auto">
                          <Image
                            src={testimonial.logo}
                            alt={testimonial.company}
                            width={120}
                            height={48}
                            className="object-contain"
                            style={{ height: 'auto', width: 'auto', maxHeight: '48px' }}
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="relative h-12 w-auto">
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.company}
                          width={120}
                          height={48}
                          className="object-contain"
                          style={{ height: 'auto', width: 'auto', maxHeight: '48px' }}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-10 h-10 text-accent-500/20 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-100">
                  {testimonial.metrics.map((metric, idx) => {
                    const Icon = metric.icon
                    return (
                      <div key={idx} className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Icon className="w-4 h-4 text-accent-600" />
                          <span className="text-2xl font-bold text-primary-800">
                            {metric.value}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">{metric.label}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {testimonial.avatar.startsWith('/') ? (
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg relative">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                  ) : (
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${colorClasses[testimonial.color as keyof typeof colorClasses]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-accent-600 font-medium">
                      {testimonial.companyUrl ? (
                        <a 
                          href={testimonial.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-1"
                        >
                          {testimonial.company}
                          {testimonial.locations && (
                            <span className="text-gray-500 font-normal">
                              ({testimonial.locations} {language === 'es' ? 'locaciones' : 'locations'})
                            </span>
                          )}
                        </a>
                      ) : (
                        <>
                          {testimonial.company}
                          {testimonial.locations && (
                            <span className="text-gray-500 font-normal ml-1">
                              ({testimonial.locations} {language === 'es' ? 'locaciones' : 'locations'})
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Size badge */}
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.size === 'small' ? 'bg-blue-100 text-blue-700' :
                    testimonial.size === 'medium' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {testimonial.size === 'small' 
                      ? (language === 'es' ? 'Emprendedor' : 'Entrepreneur')
                      : testimonial.size === 'medium'
                      ? (language === 'es' ? 'Negocio en Crecimiento' : 'Growing Business')
                      : (language === 'es' ? 'Gran Operador' : 'Large Operator')
                    }
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <FadeInUp className="text-center mt-16">
          <p className="text-lg text-primary-600 mb-6">
            {language === 'es' 
              ? '¿Quieres resultados como estos?'
              : 'Want results like these?'
            }
          </p>
          <motion.a
            href="/demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {language === 'es' ? 'Comenzar prueba gratuita de 14 días' : 'Start 14-day free trial'}
          </motion.a>
          <p className="text-sm text-gray-500 mt-3">
            {language === 'es' ? 'Sin tarjeta • Cancela cuando quieras' : 'No card required • Cancel anytime'}
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}

export default Testimonials

