'use client'

import { motion } from 'framer-motion'
import { 
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { useState } from 'react'

export default function ContactPage() {
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
      description: language === 'es' ? 'Respuesta en menos de 24h' : 'Response in less than 24h'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+34 654 082 728',
      link: 'https://wa.me/34654082728',
      description: language === 'es' ? 'Respuesta inmediata' : 'Immediate response'
    },
    {
      icon: MapPin,
      title: language === 'es' ? 'Ubicación' : 'Location',
      value: language === 'es' ? 'España' : 'Spain',
      description: language === 'es' ? 'Soporte en español' : 'Spanish support'
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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{info.title}</h3>
                  <p className="text-lg text-accent-600 font-semibold mb-2">{info.value}</p>
                  <p className="text-sm text-primary-600">{info.description}</p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Chatbot CTA */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-500 to-accent-600 p-8 md:p-12"
          >
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <MessageSquare className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {language === 'es' 
                  ? '¿Prefieres respuestas instantáneas?' 
                  : 'Prefer instant answers?'
                }
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                {language === 'es'
                  ? 'Nuestro asistente IA puede responder tus preguntas al instante, 24/7. Haz clic en el botón verde flotante o aquí abajo.'
                  : 'Our AI assistant can answer your questions instantly, 24/7. Click the floating green button or here below.'
                }
              </p>

              <motion.button
                onClick={() => {
                  const chatbotButton = document.querySelector('button[class*="fixed bottom-6 right-6"]') as HTMLButtonElement
                  if (chatbotButton) chatbotButton.click()
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-accent-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                {language === 'es' ? 'Abrir Chat IA' : 'Open AI Chat'}
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-primary-800 mb-6">
                  {language === 'es' ? 'Envíanos un mensaje' : 'Send us a message'}
                </h2>

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
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <Clock className="w-12 h-12 text-accent-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">
                  {language === 'es' ? 'Tiempo de respuesta' : 'Response time'}
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  {language === 'es'
                    ? 'Respondemos todos los mensajes en menos de 24 horas laborables. Para consultas urgentes, contáctanos por WhatsApp.'
                    : 'We respond to all messages within 24 business hours. For urgent inquiries, contact us via WhatsApp.'
                  }
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-bold text-accent-400">{'<24h'}</div>
                    <div className="text-sm text-white/60">Email</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-400">{'<1h'}</div>
                    <div className="text-sm text-white/60">WhatsApp</div>
                  </div>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-primary-800 mb-6">
                  {language === 'es' ? 'Preguntas frecuentes' : 'Quick questions'}
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-primary-800 mb-2">{faq.question}</h4>
                      <p className="text-sm text-primary-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/34654082728"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-green-500 hover:bg-green-600 rounded-2xl p-6 text-white shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">
                      {language === 'es' ? '¿Necesitas ayuda ahora?' : 'Need help now?'}
                    </div>
                    <div className="text-white/90 text-sm">
                      {language === 'es' ? 'Chatea con nosotros en WhatsApp' : 'Chat with us on WhatsApp'}
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
