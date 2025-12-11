'use client'

import { motion } from 'framer-motion'
import { 
  Mail,
  MessageSquare,
  Clock,
  Send,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { useState } from 'react'

export default function ContactPageClient() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'es' ? 'Email' : 'Email',
      value: 'hello@storagefy.co',
      link: 'mailto:hello@storagefy.co',
      description: language === 'es' ? 'Respuesta en menos de 24h' : 'Response in less than 24h',
      whatsapp: null
    },
    {
      icon: Phone,
      title: language === 'es' ? 'Especialista Theo Gennove' : 'Specialist Theo Gennove',
      value: '+34 871 242 642',
      link: 'tel:+34871242642',
      whatsapp: language === 'es' 
        ? 'https://wa.me/34871242642?text=Hola%20Theo%2C%20estoy%20interesado%20en%20StorageFy%20para%20gestionar%20mi%20negocio%20de%20trasteros%2Fparkings.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20informaci%C3%B3n.'
        : 'https://wa.me/34871242642?text=Hello%20Theo%2C%20I%27m%20interested%20in%20StorageFy%20to%20manage%20my%20storage%2Fparking%20business.%20I%27d%20like%20to%20know%20more%20information.',
      whatsappName: 'Theo',
      description: language === 'es' 
        ? '¿Necesitas información, asesoría personalizada o ayuda para configurar tu cuenta de prueba gratis? Contáctame y te ayudo a empezar.'
        : 'Need information, personalized advice or help setting up your free trial account? Contact me and I\'ll help you get started.'
    },
    {
      icon: Phone,
      title: language === 'es' ? 'Especialista Juan David Wilde' : 'Specialist Juan David Wilde',
      value: '+34 871 242 616',
      link: 'tel:+34871242616',
      whatsapp: language === 'es'
        ? 'https://wa.me/34871242616?text=Hola%20Juan%20David%2C%20estoy%20interesado%20en%20StorageFy%20para%20gestionar%20mi%20negocio%20de%20trasteros%2Fparkings.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20informaci%C3%B3n.'
        : 'https://wa.me/34871242616?text=Hello%20Juan%20David%2C%20I%27m%20interested%20in%20StorageFy%20to%20manage%20my%20storage%2Fparking%20business.%20I%27d%20like%20to%20know%20more%20information.',
      whatsappName: 'Juan David',
      description: language === 'es'
        ? '¿Necesitas información, asesoría personalizada o ayuda para configurar tu cuenta de prueba? Contacta conmigo.'
        : 'Need information, personalized advice or help setting up your free trial account? Contact me.'
    },
    {
      icon: Phone,
      title: language === 'es' ? 'Desarrollo y Software' : 'Development & Software',
      value: '+34 871 242 628',
      link: 'tel:+34871242628',
      description: language === 'es' ? 'Soporte técnico y desarrollo' : 'Technical support and development',
      whatsapp: null
    }
  ]

  const faqs = [
    {
      question: language === 'es' ? '¿Cuánto tarda la implementación?' : 'How long does implementation take?',
      answer: language === 'es' 
        ? 'La configuración inicial toma 1-2 días. Nuestro equipo te guía en todo el proceso.'
        : 'Initial setup takes 1-2 days. Our team guides you through the entire process.'
    },
    {
      question: language === 'es' ? '¿Ofrecen migración de datos?' : 'Do you offer data migration?',
      answer: language === 'es'
        ? 'Sí, incluido en todos los planes. Migramos tus datos desde Excel, otros sistemas, etc.'
        : 'Yes, included in all plans. We migrate your data from Excel, other systems, etc.'
    },
    {
      question: language === 'es' ? '¿Hay soporte técnico?' : 'Is there technical support?',
      answer: language === 'es'
        ? 'Sí, todos los planes incluyen soporte. Professional y Enterprise tienen soporte prioritario.'
        : 'Yes, all plans include support. Professional and Enterprise have priority support.'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Error desconocido')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
              <MessageSquare className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Estamos aquí para ayudarte' : 'We\'re here to help'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Hablemos de tu' : 'Let\'s talk about your'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'próximo gran paso' : 'next big step'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'es'
                ? '¿Tienes preguntas? ¿Necesitas una demo personalizada? ¿Quieres hablar sobre tus necesidades específicas? Estamos a un mensaje de distancia.'
                : 'Have questions? Need a personalized demo? Want to discuss your specific needs? We\'re just a message away.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Email Card - Featured */}
          <FadeInUp className="mb-8">
            <motion.a
              href="mailto:hello@storagefy.co"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="block bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 shadow-xl text-white hover:shadow-2xl transition-all duration-300 max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">hello@storagefy.co</h3>
                  <p className="text-white/90">{language === 'es' ? 'Respuesta en menos de 24h' : 'Response in less than 24h'}</p>
                </div>
                <div className="text-4xl">→</div>
              </div>
            </motion.a>
          </FadeInUp>

          {/* Phone Cards - Especialistas Destacados */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {contactInfo.filter(info => info.icon === Phone && info.whatsapp).map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 shadow-xl border-2 border-accent-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                      <a href={info.link} className="text-2xl font-bold text-white mb-2 hover:text-accent-100 transition-colors block">
                        {info.value}
                      </a>
                      <p className="text-white/90 text-sm">{info.description}</p>
                    </div>
                  </div>
                  
                  {/* WhatsApp Button */}
                  {info.whatsapp && (
                    <motion.a
                      href={info.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-white text-accent-600 rounded-lg font-bold text-base hover:bg-accent-50 hover:shadow-xl transition-all duration-300 group"
                    >
                      <svg 
                        className="w-5 h-5 group-hover:scale-110 transition-transform" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {language === 'es' ? 'Chatear por WhatsApp' : 'Chat on WhatsApp'}
                      </span>
                    </motion.a>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Desarrollo y Software - Menos Importante */}
          {contactInfo.filter(info => info.icon === Phone && !info.whatsapp).map((info) => {
            const Icon = info.icon
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-semibold text-gray-600 mb-0.5">{info.title}</h3>
                    <a href={info.link} className="text-sm font-medium text-gray-700 hover:text-accent-600 transition-colors">
                      {info.value}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}

        </div>
      </section>

      {/* AI Chatbot CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-800 to-primary-900 p-6 md:p-8"
          >
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex items-center gap-6 flex-wrap">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === 'es' 
                    ? '¿Prefieres respuestas instantáneas?' 
                    : 'Prefer instant answers?'
                  }
                </h3>
                <p className="text-white/80 text-sm">
                  {language === 'es'
                    ? 'Nuestro asistente IA responde 24/7. Haz clic en el botón verde flotante.'
                    : 'Our AI assistant answers 24/7. Click the floating green button.'
                  }
                </p>
              </div>
              <motion.button
                onClick={() => {
                  const chatbotButton = document.querySelector('button[class*="fixed bottom-6 right-6"]') as HTMLButtonElement
                  if (chatbotButton) chatbotButton.click()
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-primary-800 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 flex-shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                {language === 'es' ? 'Abrir Chat' : 'Open Chat'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & FAQs */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-4">
                    <Send className="w-4 h-4 text-accent-600" />
                    <span className="text-sm font-medium text-accent-700">
                      {language === 'es' ? 'Formulario de contacto' : 'Contact form'}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary-800 mb-2">
                    {language === 'es' ? 'Envíanos un mensaje' : 'Send us a message'}
                  </h2>
                  <p className="text-primary-600">
                    {language === 'es' 
                      ? 'Completa el formulario y te responderemos lo antes posible.'
                      : 'Fill out the form and we\'ll get back to you as soon as possible.'
                    }
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-700 mb-2">
                      {language === 'es' ? 'Nombre completo' : 'Full name'} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all outline-none"
                      placeholder={language === 'es' ? 'Juan Pérez' : 'John Doe'}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all outline-none"
                        placeholder="juan@empresa.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary-700 mb-2">
                        {language === 'es' ? 'Teléfono' : 'Phone'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all outline-none"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-primary-700 mb-2">
                      {language === 'es' ? 'Asunto' : 'Subject'} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all outline-none"
                    >
                      <option value="">
                        {language === 'es' ? 'Selecciona un asunto' : 'Select a subject'}
                      </option>
                      <option value="demo">
                        {language === 'es' ? 'Solicitar demo' : 'Request demo'}
                      </option>
                      <option value="pricing">
                        {language === 'es' ? 'Consulta sobre precios' : 'Pricing inquiry'}
                      </option>
                      <option value="technical">
                        {language === 'es' ? 'Soporte técnico' : 'Technical support'}
                      </option>
                      <option value="enterprise">
                        {language === 'es' ? 'Plan Enterprise' : 'Enterprise plan'}
                      </option>
                      <option value="other">
                        {language === 'es' ? 'Otro' : 'Other'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary-700 mb-2">
                      {language === 'es' ? 'Mensaje' : 'Message'} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all outline-none resize-none"
                      placeholder={language === 'es' 
                        ? 'Cuéntanos cómo podemos ayudarte...'
                        : 'Tell us how we can help you...'
                      }
                    />
                  </div>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-700">
                        {errorMessage || (language === 'es' 
                          ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
                          : 'Error sending message. Please try again.'
                        )}
                      </p>
                    </motion.div>
                  )}

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-sm text-green-700">
                        {language === 'es' 
                          ? '¡Mensaje enviado! Te responderemos pronto.'
                          : 'Message sent! We\'ll respond soon.'
                        }
                      </p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        {language === 'es' ? 'Enviando...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {language === 'es' ? 'Enviar mensaje' : 'Send message'}
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* FAQs & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              
              {/* Response Time */}
              <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent-400" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {language === 'es' ? 'Tiempo de respuesta' : 'Response time'}
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {language === 'es'
                      ? 'Respondemos todos los mensajes en menos de 24 horas laborables.'
                      : 'We respond to all messages within 24 business hours.'
                    }
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-accent-400 mb-1">{'<24h'}</div>
                      <div className="text-xs text-white/70">Email</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-accent-400 mb-1">{'<1h'}</div>
                      <div className="text-xs text-white/70">{language === 'es' ? 'Teléfono' : 'Phone'}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-accent-400 mb-1">{'<4h'}</div>
                      <div className="text-xs text-white/70">{language === 'es' ? 'Soporte' : 'Support'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800">
                    {language === 'es' ? 'Preguntas frecuentes' : 'Quick questions'}
                  </h3>
                </div>
                <div className="space-y-5">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-accent-400 pl-4 pb-4 last:pb-0"
                    >
                      <h4 className="font-semibold text-primary-800 mb-2 text-sm">{faq.question}</h4>
                      <p className="text-sm text-primary-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Phone CTA */}
              <motion.a
                href="tel:+34871242616"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-base mb-1">
                      {language === 'es' ? '¿Necesitas ayuda ahora?' : 'Need help now?'}
                    </div>
                    <div className="text-white/90 text-xs">
                      {language === 'es' ? 'Llama a nuestro equipo comercial' : 'Call our sales team'}
                    </div>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
