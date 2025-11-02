'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Building2, 
  FileText,
  CreditCard,
  Clock,
  Shield,
  Globe,
  Star,
  Zap
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function DetailedMetrics() {
  const { language } = useLanguage()

  const clientMetrics = [
    {
      icon: Users,
      value: '50+',
      label: language === 'es' ? 'Negocios activos' : 'Active businesses',
      description: language === 'es' ? 'Creciendo cada día' : 'Growing every day'
    },
    {
      icon: Building2,
      value: '100+',
      label: language === 'es' ? 'Locaciones gestionadas' : 'Locations managed',
      description: language === 'es' ? 'En toda España' : 'Throughout Spain'
    },
    {
      icon: FileText,
      value: '1,000+',
      label: language === 'es' ? 'Unidades administradas' : 'Units managed',
      description: language === 'es' ? 'En tiempo real' : 'In real-time'
    },
    {
      icon: FileText,
      value: '2,000+',
      label: language === 'es' ? 'Contratos creados' : 'Contracts created',
      description: language === 'es' ? 'Y creciendo' : 'And growing'
    },
    {
      icon: CreditCard,
      value: '5,000+',
      label: language === 'es' ? 'Facturas generadas' : 'Invoices generated',
      description: language === 'es' ? 'Automáticamente' : 'Automatically'
    }
  ]

  const performanceMetrics = [
    {
      icon: Shield,
      value: '99.9%',
      label: language === 'es' ? 'Uptime garantizado' : 'Guaranteed uptime',
      description: language === 'es' ? 'Disponibilidad' : 'Availability'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: language === 'es' ? 'Rating promedio' : 'Average rating',
      description: language === 'es' ? 'De clientes' : 'From clients'
    },
    {
      icon: Zap,
      value: '<2s',
      label: language === 'es' ? 'Tiempo de carga' : 'Load time',
      description: language === 'es' ? 'Promedio' : 'Average'
    },
    {
      icon: Clock,
      value: '24-48h',
      label: language === 'es' ? 'Onboarding promedio' : 'Average onboarding',
      description: language === 'es' ? 'Tiempo de configuración' : 'Setup time'
    },
    {
      icon: Globe,
      value: '100%',
      label: language === 'es' ? 'Soporte en español' : 'Spanish support',
      description: language === 'es' ? 'Nativo' : 'Native'
    }
  ]

  const clientResults = [
    {
      icon: TrendingUp,
      value: '80%',
      label: language === 'es' ? 'Reducción promedio en morosidad' : 'Average delinquency reduction',
      description: language === 'es' ? 'Con automatización' : 'With automation'
    },
    {
      icon: TrendingUp,
      value: '30%',
      label: language === 'es' ? 'Aumento promedio en ocupación' : 'Average occupancy increase',
      description: language === 'es' ? 'En 6 meses' : 'In 6 months'
    },
    {
      icon: Clock,
      value: '15h',
      label: language === 'es' ? 'Horas semanales ahorradas' : 'Hours saved per week',
      description: language === 'es' ? 'En promedio' : 'On average'
    },
    {
      icon: Zap,
      value: '300-500%',
      label: language === 'es' ? 'Más leads con el widget' : 'More leads with widget',
      description: language === 'es' ? 'Comparado con formulario' : 'Compared to form'
    },
    {
      icon: CreditCard,
      value: '€18,000',
      label: language === 'es' ? 'Promedio recuperado por cliente/año' : 'Average recovered per client/year',
      description: language === 'es' ? 'En morosidad y tiempo' : 'In delinquency and time'
    }
  ]

  const growthMetrics = [
    {
      icon: Users,
      value: '2024',
      label: language === 'es' ? 'Año de Fundación' : 'Year Founded',
      description: language === 'es' ? 'Inicio' : 'Start'
    },
    {
      icon: TrendingUp,
      value: '24/7',
      label: language === 'es' ? 'Soporte disponible' : 'Support available',
      description: language === 'es' ? 'Siempre para ti' : 'Always for you'
    },
    {
      icon: Globe,
      value: '100%',
      label: language === 'es' ? 'Enfoque en España' : 'Focus on Spain',
      description: language === 'es' ? 'Especializados' : 'Specialized'
    },
    {
      icon: Zap,
      value: 'Rápido',
      label: language === 'es' ? 'Onboarding express' : 'Express onboarding',
      description: language === 'es' ? '24-48 horas' : '24-48 hours'
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            {language === 'es' ? 'StorageFy en Números' : 'StorageFy in Numbers'}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {language === 'es'
              ? 'Métricas reales de nuestro impacto en el sector de trasteros en España.'
              : 'Real metrics of our impact on the storage sector in Spain.'}
          </p>
        </FadeInUp>

        {/* Client Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'es' ? 'Clientes' : 'Clients'}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {clientMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-accent-400/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-600 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-white/90 font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-white/70">{metric.description}</div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'es' ? 'Rendimiento Técnico' : 'Technical Performance'}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {performanceMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-accent-400/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-600 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-white/90 font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-white/70">{metric.description}</div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Client Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'es' ? 'Resultados de Clientes (Promedio)' : 'Client Results (Average)'}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {clientResults.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-accent-400/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-600 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-white/90 font-semibold mb-1 text-sm">{metric.label}</div>
                  <div className="text-sm text-white/70">{metric.description}</div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Growth */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'es' ? 'Crecimiento' : 'Growth'}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-accent-400/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-600 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-white/90 font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-white/70">{metric.description}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

