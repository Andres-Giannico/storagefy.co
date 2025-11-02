'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Download, 
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileCheck,
  TrendingUp,
  Calculator
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function RecursosPage() {
  const { language } = useLanguage()

  const resources = [
    {
      icon: FileText,
      title: language === 'es' ? 'Guía PDF: "Cómo Migrar desde Excel"' : 'PDF Guide: "How to Migrate from Excel"',
      description: language === 'es'
        ? 'Paso a paso con capturas de pantalla, plantilla Excel para migración y checklist completo.'
        : 'Step by step with screenshots, Excel template for migration and complete checklist.',
      type: 'PDF',
      size: language === 'es' ? '2.5 MB' : '2.5 MB',
      comingSoon: false
    },
    {
      icon: FileCheck,
      title: language === 'es' ? 'Template de Contrato' : 'Contract Template',
      description: language === 'es'
        ? 'Plantilla base editable, aplicable a España con todas las cláusulas necesarias.'
        : 'Editable base template, applicable to Spain with all necessary clauses.',
      type: 'DOCX',
      size: language === 'es' ? '150 KB' : '150 KB',
      comingSoon: false
    },
    {
      icon: CheckCircle,
      title: language === 'es' ? 'Checklist de Onboarding' : 'Onboarding Checklist',
      description: language === 'es'
        ? 'PDF descargable para imprimir y marcar. Incluye todos los pasos del proceso.'
        : 'Downloadable PDF to print and check. Includes all process steps.',
      type: 'PDF',
      size: language === 'es' ? '500 KB' : '500 KB',
      comingSoon: false
    },
    {
      icon: TrendingUp,
      title: language === 'es' ? 'Guía de Mejores Prácticas' : 'Best Practices Guide',
      description: language === 'es'
        ? 'PDF con tips y estrategias basado en casos de éxito reales. Actualizable periódicamente.'
        : 'PDF with tips and strategies based on real success cases. Periodically updated.',
      type: 'PDF',
      size: language === 'es' ? '3 MB' : '3 MB',
      comingSoon: false
    },
    {
      icon: Calculator,
      title: language === 'es' ? 'Calculadora de ROI en Excel' : 'ROI Calculator in Excel',
      description: language === 'es'
        ? 'Hoja de cálculo descargable. Usuarios pueden calcular su ROI e incluye ejemplos.'
        : 'Downloadable spreadsheet. Users can calculate their ROI and includes examples.',
      type: 'XLSX',
      size: language === 'es' ? '1 MB' : '1 MB',
      comingSoon: false
    },
    {
      icon: BookOpen,
      title: language === 'es' ? 'Manual Completo de Usuario' : 'Complete User Manual',
      description: language === 'es'
        ? 'Documentación completa de todas las funcionalidades con ejemplos prácticos.'
        : 'Complete documentation of all features with practical examples.',
      type: 'PDF',
      size: language === 'es' ? '5 MB' : '5 MB',
      comingSoon: true
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
              <Download className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Recursos' : 'Resources'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Recursos Descargables' : 'Downloadable Resources'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'Guías, templates y herramientas para ayudarte a empezar y crecer con StorageFy.'
                : 'Guides, templates and tools to help you get started and grow with StorageFy.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1
                    }
                  }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300 ${
                    resource.comingSoon ? 'opacity-75' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {resource.comingSoon && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">
                        {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-primary-800 mb-2">{resource.title}</h3>
                  <p className="text-primary-600 text-sm mb-4 leading-relaxed">{resource.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-primary-500">{resource.type}</span>
                      <span className="text-xs text-primary-400">•</span>
                      <span className="text-xs text-primary-400">{resource.size}</span>
                    </div>
                    {!resource.comingSoon ? (
                      <button className="flex items-center gap-2 px-4 py-2 bg-accent-50 hover:bg-accent-100 text-accent-600 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                        <span className="text-sm font-semibold">
                          {language === 'es' ? 'Descargar' : 'Download'}
                        </span>
                      </button>
                    ) : (
                      <div className="text-xs text-gray-400">
                        {language === 'es' ? 'Disponible pronto' : 'Available soon'}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 border border-accent-200 text-center"
          >
            <p className="text-primary-700 mb-4">
              {language === 'es'
                ? 'Nota: Los recursos están disponibles para todos los usuarios de StorageFy. Algunos recursos requieren iniciar sesión.'
                : 'Note: Resources are available to all StorageFy users. Some resources require logging in.'}
            </p>
            <motion.a
              href="/demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'es' ? 'Comenzar Prueba Gratis' : 'Start Free Trial'}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

