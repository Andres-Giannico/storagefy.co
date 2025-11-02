'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  FileText, 
  Globe, 
  BookOpen,
  ArrowRight,
  Copy,
  CheckCircle,
  ExternalLink,
  Star
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { useState } from 'react'

export default function DocsPage() {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)

  const widgetCode = `<div id="storage-widget" data-token="TU_TOKEN_AQUI"></div>
<script src="https://storagefy.app/widget/widget.js"></script>
<link rel="stylesheet" href="https://storagefy.app/widget/widget.css">`

  const guides = [
    {
      icon: Globe,
      title: language === 'es' ? 'Instalación del Widget' : 'Widget Installation',
      description: language === 'es'
        ? 'Instala el widget en tu web en 2 minutos'
        : 'Install the widget on your website in 2 minutes',
      steps: [
        {
          title: language === 'es' ? 'Paso 1: Genera tu Widget' : 'Step 1: Generate your Widget',
          content: language === 'es'
            ? 'Ve a Configuración > Widgets, haz clic en "Crear nuevo widget", configura nombre, idioma, colores y copia el código HTML que se genera.'
            : 'Go to Settings > Widgets, click "Create new widget", configure name, language, colors and copy the generated HTML code.'
        },
        {
          title: language === 'es' ? 'Paso 2: Instala en tu Web' : 'Step 2: Install on your Website',
          content: language === 'es'
            ? 'Pega el código donde quieras que aparezca el widget. Funciona en cualquier página HTML.'
            : 'Paste the code where you want the widget to appear. Works on any HTML page.'
        },
        {
          title: language === 'es' ? 'Paso 3: Personaliza (Opcional)' : 'Step 3: Customize (Optional)',
          content: language === 'es'
            ? 'Puedes personalizar colores, tema y más desde tu panel de StorageFy.'
            : 'You can customize colors, theme and more from your StorageFy panel.'
        }
      ]
    },
    {
      icon: FileText,
      title: language === 'es' ? 'Integración con WordPress' : 'WordPress Integration',
      description: language === 'es'
        ? 'Integra StorageFy en WordPress fácilmente'
        : 'Integrate StorageFy in WordPress easily',
      steps: [
        {
          title: language === 'es' ? 'Método 1: Widget HTML' : 'Method 1: HTML Widget',
          content: language === 'es'
            ? 'Usa el widget HTML personalizado de WordPress y pega el código del widget de StorageFy.'
            : 'Use WordPress custom HTML widget and paste StorageFy widget code.'
        },
        {
          title: language === 'es' ? 'Método 2: Shortcode' : 'Method 2: Shortcode',
          content: language === 'es'
            ? 'Si tienes un plugin de shortcodes, puedes crear un shortcode personalizado con el código del widget.'
            : 'If you have a shortcode plugin, you can create a custom shortcode with the widget code.'
        },
        {
          title: language === 'es' ? 'Método 3: Template' : 'Method 3: Template',
          content: language === 'es'
            ? 'Edita tu template de WordPress y agrega el código directamente en el archivo PHP.'
            : 'Edit your WordPress template and add the code directly in the PHP file.'
        }
      ]
    },
    {
      icon: Code,
      title: language === 'es' ? 'API para Desarrolladores' : 'API for Developers',
      description: language === 'es'
        ? 'Documentación completa de API (Solo Enterprise)'
        : 'Complete API documentation (Enterprise only)',
      steps: [
        {
          title: language === 'es' ? 'Autenticación' : 'Authentication',
          content: language === 'es'
            ? 'Usa tokens API que puedes generar desde tu panel. Incluye el token en el header Authorization.'
            : 'Use API tokens that you can generate from your panel. Include the token in the Authorization header.'
        },
        {
          title: language === 'es' ? 'Endpoints Disponibles' : 'Available Endpoints',
          content: language === 'es'
            ? 'Consulta la documentación completa de endpoints en tu panel Enterprise. Incluye CRUD completo para unidades, contratos, clientes y pagos.'
            : 'Check the complete endpoint documentation in your Enterprise panel. Includes full CRUD for units, contracts, clients and payments.'
        },
        {
          title: language === 'es' ? 'Sandbox para Testing' : 'Sandbox for Testing',
          content: language === 'es'
            ? 'Accede al entorno de pruebas para desarrollar y probar tus integraciones antes de producción.'
            : 'Access the testing environment to develop and test your integrations before production.'
        }
      ]
    }
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(widgetCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
              <BookOpen className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Documentación' : 'Documentation'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Guías de Integración' : 'Integration Guides'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'Técnica' : 'Technical'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'Todo lo que necesitas para integrar StorageFy en tu website o sistema existente.'
                : 'Everything you need to integrate StorageFy into your website or existing system.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Widget Installation Guide */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInUp className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary-800">
                  {language === 'es' ? 'Instala el widget en tu web en 2 minutos' : 'Install the widget on your website in 2 minutes'}
                </h2>
                <p className="text-primary-600 mt-1">
                  {language === 'es' ? 'Guía paso a paso' : 'Step-by-step guide'}
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 shadow-xl mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-accent-400" />
                <span className="text-white font-semibold">HTML</span>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    {language === 'es' ? 'Copiado' : 'Copied'}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {language === 'es' ? 'Copiar' : 'Copy'}
                  </>
                )}
              </button>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{widgetCode}</code>
            </pre>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6">
            {guides[0].steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-800 mb-2">{step.title}</h3>
                    <p className="text-primary-600 leading-relaxed">{step.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-accent-50 rounded-xl border border-accent-200"
          >
            <p className="text-primary-700 font-semibold">
              {language === 'es' 
                ? '¡Listo! Tu widget está funcionando y recibirás reservas automáticamente.'
                : 'Done! Your widget is working and you will receive reservations automatically.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Other Guides */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Más Guías' : 'More Guides'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.slice(1).map((guide, index) => {
              const Icon = guide.icon
              return (
                <motion.div
                  key={guide.title}
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
                  className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-800">{guide.title}</h3>
                      <p className="text-primary-600 text-sm mt-1">{guide.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {guide.steps.map((step, stepIndex) => (
                      <div key={step.title} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary-800 mb-1">{step.title}</h4>
                          <p className="text-sm text-primary-600">{step.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* API Notice */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-8 text-white text-center shadow-xl"
          >
            <Code className="w-12 h-12 mx-auto mb-4 text-accent-400" />
            <h3 className="text-2xl font-bold mb-4">
              {language === 'es' ? 'API para Desarrolladores' : 'API for Developers'}
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              {language === 'es'
                ? 'La documentación completa de API está disponible solo para clientes del plan Enterprise. Si necesitas acceso, contacta con nuestro equipo.'
                : 'Complete API documentation is available only for Enterprise plan clients. If you need access, contact our team.'}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'es' ? 'Contactar para API' : 'Contact for API'}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-800">
              {language === 'es' ? '¿Necesitas ayuda?' : 'Need help?'}
            </h2>
            <p className="text-xl text-primary-600 mb-8">
              {language === 'es'
                ? 'Nuestro equipo de soporte técnico está disponible para ayudarte con cualquier integración.'
                : 'Our technical support team is available to help you with any integration.'}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'es' ? 'Contactar Soporte' : 'Contact Support'}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}

