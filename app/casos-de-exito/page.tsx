'use client'

import { motion } from 'framer-motion'
import { 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  DollarSign,
  ArrowRight,
  Star,
  Building2,
  Users,
  Target,
  CheckCircle
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function CasosExitoPage() {
  const { language } = useLanguage()

  const caseStudies = [
    {
      id: 1,
      title: language === 'es' ? 'De 40% a 8% de morosidad en 3 meses' : 'From 40% to 8% delinquency in 3 months',
      client: language === 'es' ? '[Nombre del cliente]' : '[Client name]',
      location: 'Madrid',
      locations: 2,
      units: 150,
      plan: language === 'es' ? 'Estándar' : 'Standard',
      situation: {
        title: language === 'es' ? 'Situación Inicial' : 'Initial Situation',
        items: [
          language === 'es' ? 'Morosidad del 40%' : '40% delinquency',
          language === 'es' ? '15 horas semanales persiguiendo pagos' : '15 hours per week chasing payments',
          language === 'es' ? 'Pérdida de €25,000 anuales por morosidad' : '€25,000 annual loss due to delinquency',
          language === 'es' ? 'Sin automatización de recordatorios' : 'No reminder automation'
        ]
      },
      solution: {
        title: language === 'es' ? 'Solución Implementada' : 'Implemented Solution',
        items: [
          language === 'es' ? 'Recordatorios automáticos 5 días antes del vencimiento' : 'Automatic reminders 5 days before due date',
          language === 'es' ? 'Links de pago enviados automáticamente con cada factura' : 'Payment links sent automatically with each invoice',
          language === 'es' ? 'Facturación automática mensual' : 'Automatic monthly invoicing',
          language === 'es' ? 'Dashboard para seguimiento de pagos pendientes' : 'Dashboard for tracking pending payments'
        ]
      },
      results: {
        title: language === 'es' ? 'Resultados (después de 3 meses)' : 'Results (after 3 months)',
        metrics: [
          {
            icon: TrendingDown,
            value: '8%',
            label: language === 'es' ? 'Morosidad' : 'Delinquency',
            change: language === 'es' ? '-32 puntos' : '-32 points',
            color: 'green'
          },
          {
            icon: DollarSign,
            value: '€25,000',
            label: language === 'es' ? 'Recuperados' : 'Recovered',
            change: language === 'es' ? 'Primer año' : 'First year',
            color: 'green'
          },
          {
            icon: Clock,
            value: '10h',
            label: language === 'es' ? 'Horas semanales' : 'Hours per week',
            change: language === 'es' ? 'Ahorradas' : 'Saved',
            color: 'blue'
          }
        ],
        testimonial: language === 'es'
          ? 'Los recordatorios automáticos cambiaron todo. Ahora los clientes pagan sin que tengamos que llamarles. El sistema funciona solo.'
          : 'Automatic reminders changed everything. Now clients pay without us having to call them. The system works on its own.',
        roi: {
          investment: language === 'es' ? '€150/mes + IVA (150 unidades)' : '€150/month + VAT (150 units)',
          savings: language === 'es' ? '€25,000 + tiempo recuperado' : '€25,000 + recovered time',
          percentage: '1,388%'
        }
      }
    },
    {
      id: 2,
      title: language === 'es' ? 'De 45% a 78% de ocupación en 6 meses' : 'From 45% to 78% occupancy in 6 months',
      client: language === 'es' ? '[Nombre del cliente]' : '[Client name]',
      location: 'Barcelona',
      locations: 1,
      units: 80,
      plan: language === 'es' ? 'Estándar' : 'Standard',
      situation: {
        title: language === 'es' ? 'Situación Inicial' : 'Initial Situation',
        items: [
          language === 'es' ? 'Ocupación del 45%' : '45% occupancy',
          language === 'es' ? 'Solo recibían reservas por teléfono en horario de oficina' : 'Only received reservations by phone during office hours',
          language === 'es' ? 'Perdían clientes fuera del horario' : 'Lost clients outside hours',
          language === 'es' ? 'Sin presencia digital efectiva' : 'No effective digital presence'
        ]
      },
      solution: {
        title: language === 'es' ? 'Solución Implementada' : 'Implemented Solution',
        items: [
          language === 'es' ? 'Widget instalado en su website' : 'Widget installed on their website',
          language === 'es' ? 'Catálogo en tiempo real disponible 24/7' : 'Real-time catalog available 24/7',
          language === 'es' ? 'Conversión automática de reservas a contratos' : 'Automatic conversion of reservations to contracts',
          language === 'es' ? 'Links de pago para depósitos' : 'Payment links for deposits'
        ]
      },
      results: {
        title: language === 'es' ? 'Resultados (después de 6 meses)' : 'Results (after 6 months)',
        metrics: [
          {
            icon: TrendingUp,
            value: '78%',
            label: language === 'es' ? 'Ocupación' : 'Occupancy',
            change: language === 'es' ? '+33 puntos' : '+33 points',
            color: 'green'
          },
          {
            icon: Users,
            value: '47',
            label: language === 'es' ? 'Reservas nuevas/mes' : 'New reservations/month',
            change: language === 'es' ? 'vs. 10 anteriores' : 'vs. previous 10',
            color: 'blue'
          },
          {
            icon: Target,
            value: '470%',
            label: language === 'es' ? 'Más leads' : 'More leads',
            change: language === 'es' ? 'vs. formulario' : 'vs. form',
            color: 'purple'
          }
        ],
        testimonial: language === 'es'
          ? 'El widget fue un cambio radical. Ahora recibimos reservas incluso a las 2 de la madrugada. Los clientes pueden ver disponibilidad y reservar sin esperar.'
          : 'The widget was a radical change. Now we receive reservations even at 2 AM. Clients can see availability and book without waiting.',
        roi: {
          investment: language === 'es' ? '€80/mes + IVA (80 unidades)' : '€80/month + VAT (80 units)',
          savings: language === 'es' ? '€18,000/año (por aumento de ocupación)' : '€18,000/year (from occupancy increase)',
          percentage: '1,816%'
        }
      }
    },
    {
      id: 3,
      title: language === 'es' ? 'Gestionar 5 locaciones desde un solo panel' : 'Manage 5 locations from a single panel',
      client: language === 'es' ? '[Nombre del cliente]' : '[Client name]',
      location: language === 'es' ? 'Múltiples ciudades' : 'Multiple cities',
      locations: 5,
      units: 400,
      plan: 'Enterprise',
      situation: {
        title: language === 'es' ? 'Situación Inicial' : 'Initial Situation',
        items: [
          language === 'es' ? 'Gestión manual con Excel por cada locación' : 'Manual management with Excel per location',
          language === 'es' ? 'Equipos descoordinados' : 'Uncoordinated teams',
          language === 'es' ? 'Sin visión consolidada' : 'No consolidated view',
          language === 'es' ? 'Imposible comparar rendimiento' : 'Impossible to compare performance',
          language === 'es' ? 'Necesitaban contratar 2 personas más' : 'Needed to hire 2 more people'
        ]
      },
      solution: {
        title: language === 'es' ? 'Solución Implementada' : 'Implemented Solution',
        items: [
          language === 'es' ? 'Gestión centralizada de todas las locaciones' : 'Centralized management of all locations',
          language === 'es' ? 'Reportes consolidados y por locación' : 'Consolidated and per-location reports',
          language === 'es' ? 'Equipo sincronizado desde cualquier lugar' : 'Team synchronized from anywhere',
          language === 'es' ? 'Comparativas de rendimiento entre locaciones' : 'Performance comparisons between locations',
          language === 'es' ? 'Dashboard ejecutivo con métricas clave' : 'Executive dashboard with key metrics'
        ]
      },
      results: {
        title: language === 'es' ? 'Resultados' : 'Results',
        metrics: [
          {
            icon: DollarSign,
            value: '€50,000',
            label: language === 'es' ? 'Ahorrados/año' : 'Saved/year',
            change: language === 'es' ? 'No contrataron personal' : 'Didn\'t hire staff',
            color: 'green'
          },
          {
            icon: Clock,
            value: '20h',
            label: language === 'es' ? 'Horas semanales' : 'Hours per week',
            change: language === 'es' ? 'Ahorradas' : 'Saved',
            color: 'blue'
          },
          {
            icon: CheckCircle,
            value: '100%',
            label: language === 'es' ? 'Visibilidad' : 'Visibility',
            change: language === 'es' ? 'Del negocio' : 'Of business',
            color: 'purple'
          }
        ],
        testimonial: language === 'es'
          ? 'Gestionar 5 locaciones desde un solo panel nos ahorró contratar 2 personas. Los reportes en tiempo real nos permiten tomar decisiones rápidas.'
          : 'Managing 5 locations from a single panel saved us from hiring 2 people. Real-time reports allow us to make quick decisions.',
        roi: {
          investment: language === 'es' ? 'Precio personalizado (Enterprise)' : 'Custom pricing (Enterprise)',
          savings: language === 'es' ? '€50,000 + tiempo recuperado' : '€50,000 + recovered time',
          percentage: language === 'es' ? 'ROI personalizado' : 'Custom ROI'
        }
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
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
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeInUp>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6"
            >
              <Star className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Casos de Éxito' : 'Success Stories'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Resultados Reales' : 'Real Results'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'de Nuestros Clientes' : 'from Our Clients'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'Descubre cómo empresas como la tuya han transformado su negocio con StorageFy.'
                : 'Discover how companies like yours have transformed their business with StorageFy.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.2
                }
              }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-800 to-primary-900 p-8 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{caseStudy.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-white/80">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{caseStudy.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>{caseStudy.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{caseStudy.locations} {language === 'es' ? 'locaciones' : 'locations'}, {caseStudy.units} {language === 'es' ? 'unidades' : 'units'}</span>
                      </div>
                      <div className="px-3 py-1 bg-accent-500 rounded-full text-sm font-semibold">
                        {caseStudy.plan}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Situation */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      {caseStudy.situation.title}
                    </h3>
                    <ul className="space-y-2">
                      {caseStudy.situation.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-primary-600">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      {caseStudy.solution.title}
                    </h3>
                    <ul className="space-y-2">
                      {caseStudy.solution.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-primary-600">
                          <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">
                    {caseStudy.results.title}
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {caseStudy.results.metrics.map((metric, metricIndex) => {
                      const Icon = metric.icon
                      return (
                        <div
                          key={metricIndex}
                          className="bg-white rounded-xl p-6 border border-gray-100 text-center"
                        >
                          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${
                            metric.color === 'green' ? 'from-green-500 to-green-600' :
                            metric.color === 'blue' ? 'from-blue-500 to-blue-600' :
                            'from-purple-500 to-purple-600'
                          } rounded-xl mb-4`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-3xl font-bold text-primary-800 mb-1">{metric.value}</div>
                          <div className="text-sm font-semibold text-primary-700 mb-1">{metric.label}</div>
                          <div className="text-xs text-accent-600">{metric.change}</div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-accent-500 mb-6">
                    <p className="text-primary-700 italic leading-relaxed">
                      &ldquo;{caseStudy.results.testimonial}&rdquo;
                    </p>
                  </div>

                  {/* ROI */}
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm opacity-90 mb-1">
                          {language === 'es' ? 'ROI:' : 'ROI:'}
                        </div>
                        <div className="text-3xl font-bold">{caseStudy.results.roi.percentage}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-90 mb-1">
                          {language === 'es' ? 'Inversión:' : 'Investment:'}
                        </div>
                        <div className="font-semibold">{caseStudy.results.roi.investment}</div>
                        <div className="text-sm opacity-90 mt-2">
                          {language === 'es' ? 'Ahorro anual:' : 'Annual savings:'}
                        </div>
                        <div className="font-semibold">{caseStudy.results.roi.savings}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              {language === 'es' ? '¿Listo para ser nuestro próximo caso de éxito?' : 'Ready to be our next success story?'}
            </h2>

            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Únete a los negocios que ya transformaron su gestión con StorageFy.'
                : 'Join the businesses that have already transformed their management with StorageFy.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {language === 'es' ? 'Comenzar Prueba Gratis' : 'Start Free Trial'}
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                {language === 'es' ? 'Hablar con Experto' : 'Talk to Expert'}
              </motion.a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}

