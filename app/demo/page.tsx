'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Clock,
  Mail,
  Phone,
  Building2,
  Calendar,
  MessageCircle,
  Zap,
  Shield,
  Target
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function DemoPage() {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const containerRef = useRef<HTMLDivElement>(null)

  const tourSteps = [
    {
      id: 'dashboard',
      title: language === 'es' ? 'Dashboard Principal' : 'Main Dashboard',
      description: language === 'es' 
        ? 'Vista general de tu negocio con métricas clave y KPIs en tiempo real.'
        : 'Overview of your business with key metrics and real-time KPIs.',
      image: '/images/reportes.webp',
      features: language === 'es' 
        ? ['Métricas en tiempo real', 'KPIs visuales', 'Exportación PDF', 'Actualización automática']
        : ['Real-time metrics', 'Visual KPIs', 'PDF export', 'Auto-update']
    },
    {
      id: 'units',
      title: language === 'es' ? 'Gestión de Unidades' : 'Unit Management',
      description: language === 'es'
        ? 'Control total de unidades con dimensiones exactas y estados en tiempo real.'
        : 'Complete unit control with exact dimensions and real-time status.',
      image: '/images/unidades.webp',
      features: language === 'es'
        ? ['Dimensiones precisas', 'Estados visuales', 'Tipos especializados', 'Pricing inteligente']
        : ['Precise dimensions', 'Visual status', 'Specialized types', 'Smart pricing']
    },
    {
      id: 'contracts',
      title: language === 'es' ? 'Contratos Digitales' : 'Digital Contracts',
      description: language === 'es'
        ? 'Gestiona contratos con generación automática y seguimiento completo.'
        : 'Manage contracts with automatic generation and complete tracking.',
      image: '/images/contratos.webp',
      features: language === 'es'
        ? ['Generación automática', 'Estados visuales', 'Control depósitos', 'Renovación automática']
        : ['Automatic generation', 'Visual status', 'Deposit control', 'Auto-renewal']
    },
    {
      id: 'payments',
      title: language === 'es' ? 'Sistema de Pagos' : 'Payment System',
      description: language === 'es'
        ? 'Cobra más rápido con links automáticos y recordatorios inteligentes.'
        : 'Get paid faster with automatic links and smart reminders.',
      image: '/images/pagos.webp',
      features: language === 'es'
        ? ['Links 24/7', 'Recordatorios automáticos', 'Integración Stripe', 'Reducción morosidad 80%']
        : ['24/7 links', 'Automatic reminders', 'Stripe integration', '80% delinquency reduction']
    }
  ]

  const useCases = [
    {
      icon: Building2,
      title: language === 'es' ? 'Trasteros Urbanos' : 'Urban Storage',
      description: language === 'es' 
        ? 'Gestiona múltiples ubicaciones en la ciudad con control centralizado.'
        : 'Manage multiple city locations with centralized control.',
      results: language === 'es' ? '+45% ocupación' : '+45% occupancy',
      client: language === 'es' ? 'Trasteros Madrid' : 'Madrid Storage'
    },
    {
      icon: Target,
      title: language === 'es' ? 'Almacenes Industriales' : 'Industrial Warehouses',
      description: language === 'es'
        ? 'Control de grandes espacios industriales con dimensiones precisas.'
        : 'Control of large industrial spaces with precise dimensions.',
      results: language === 'es' ? '+60% eficiencia' : '+60% efficiency',
      client: language === 'es' ? 'Logística Ibiza' : 'Ibiza Logistics'
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Self Storage Premium' : 'Premium Self Storage',
      description: language === 'es'
        ? 'Servicio de lujo con automatización completa y atención 24/7.'
        : 'Luxury service with complete automation and 24/7 attention.',
      results: language === 'es' ? '+80% satisfacción' : '+80% satisfaction',
      client: language === 'es' ? 'Premium Storage BCN' : 'Premium Storage BCN'
    }
  ]

  const testimonials = [
    {
      name: language === 'es' ? 'María González' : 'María González',
      role: language === 'es' ? 'Directora, Trasteros Madrid' : 'Director, Madrid Storage',
      content: language === 'es' 
        ? 'StorageFy transformó completamente nuestro negocio. Pasamos de gestionar todo manualmente a tener un sistema completamente automatizado.'
        : 'StorageFy completely transformed our business. We went from managing everything manually to having a fully automated system.',
      rating: 5,
      avatar: '/images/clientes.webp'
    },
    {
      name: language === 'es' ? 'Carlos López' : 'Carlos López',
      role: language === 'es' ? 'CEO, Logística Ibiza' : 'CEO, Ibiza Logistics',
      content: language === 'es'
        ? 'La reducción de morosidad fue impresionante. En 3 meses bajamos del 15% al 3%. Los clientes pagan más rápido que nunca.'
        : 'The delinquency reduction was impressive. In 3 months we went from 15% to 3%. Clients pay faster than ever.',
      rating: 5,
      avatar: '/images/clientes.webp'
    },
    {
      name: language === 'es' ? 'Ana Fernández' : 'Ana Fernández',
      role: language === 'es' ? 'Gerente, Premium Storage BCN' : 'Manager, Premium Storage BCN',
      content: language === 'es'
        ? 'El widget de captación online es increíble. Recibimos 5x más leads y la conversión es automática. Nuestro negocio creció 200%.'
        : 'The online capture widget is incredible. We receive 5x more leads and conversion is automatic. Our business grew 200%.',
      rating: 5,
      avatar: '/images/clientes.webp'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language
        }),
      })

      const result = await response.json()

      if (response.ok) {
        // Mostrar mensaje de éxito
        alert(language === 'es' 
          ? '¡Demo solicitado exitosamente! Te hemos enviado un email de confirmación y te contactaremos en 24 horas.'
          : 'Demo requested successfully! We have sent you a confirmation email and will contact you within 24 hours.'
        )
        
        // Resetear el formulario
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        })
      } else {
        // Mostrar error
        alert(language === 'es' 
          ? 'Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.'
          : 'There was an error sending the request. Please try again.'
        )
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(language === 'es' 
        ? 'Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.'
        : 'There was an error sending the request. Please try again.'
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      
      {/* Hero Section with Video */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <FadeInUp>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-6 shadow-lg"
                >
                  <Play className="w-4 h-4 text-accent-300" />
                  <span className="text-sm font-medium text-white">
                    {language === 'es' ? 'Demo en Vivo' : 'Live Demo'}
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  {language === 'es' ? 'Ve StorageFy en acción' : 'See StorageFy in Action'}
                </h1>
                
                <p className="text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
                  {language === 'es'
                    ? 'Descubre cómo StorageFy puede transformar tu negocio de trasteros. Ve las características principales en funcionamiento.'
                    : 'Discover how StorageFy can transform your storage business. See the main features in action.'
                  }
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    {isPlaying 
                      ? (language === 'es' ? 'Pausar Demo' : 'Pause Demo')
                      : (language === 'es' ? 'Iniciar Demo' : 'Start Demo')
                    }
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="px-8 py-3 bg-white/10 border-2 border-white/30 text-white font-semibold rounded-full shadow-lg hover:border-white/50 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    {isMuted 
                      ? (language === 'es' ? 'Activar Audio' : 'Enable Audio')
                      : (language === 'es' ? 'Silenciar' : 'Mute')
                    }
                  </button>
                </div>
              </motion.div>
            </FadeInUp>

            {/* Video/Mockup Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
                <Image
                  src="/images/reportes.webp"
                  alt="StorageFy Dashboard Demo"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={75}
                />
                {/* Play overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                      <Play className="w-8 h-8 text-primary-800 ml-1" />
                    </div>
                  </div>
                )}
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-20 pointer-events-none" 
                     style={{ boxShadow: '0 0 60px rgba(124, 179, 66, 0.3)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tour Section */}
      <section ref={containerRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-800 mb-6">
              {language === 'es' ? 'Tour Interactivo' : 'Interactive Tour'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Explora las características principales de StorageFy paso a paso'
                : 'Explore StorageFy\'s main features step by step'
              }
            </p>
          </FadeInUp>

          {/* Tour Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tourSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                  currentStep === index
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg'
                    : 'bg-gray-100 text-primary-700 hover:bg-gray-200'
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Tour Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-primary-800 mb-4">
                {tourSteps[currentStep].title}
              </h3>
              <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                {tourSteps[currentStep].description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {tourSteps[currentStep].features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-primary-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
                <Image
                  src={tourSteps[currentStep].image}
                  alt={tourSteps[currentStep].title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={75}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-800 mb-6">
              {language === 'es' ? 'Casos de Uso Reales' : 'Real Use Cases'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Empresas que ya transformaron su negocio con StorageFy'
                : 'Companies that already transformed their business with StorageFy'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <div
                  key={useCase.title}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-800 mb-3">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-primary-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-accent-600 mb-1">
                        {useCase.results}
                      </div>
                      <div className="text-sm text-primary-500">
                        {useCase.client}
                      </div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-accent-500" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-800 mb-6">
              {language === 'es' ? 'Lo que dicen nuestros clientes' : 'What Our Clients Say'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Testimonios reales de empresas que ya digitalizaron su gestión'
                : 'Real testimonials from companies that already digitalized their management'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.6
                  }
                }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg border border-primary-100"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-primary-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form Section */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
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
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {language === 'es' ? '¿Listo para tu demo personalizado?' : 'Ready for your personalized demo?'}
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Agenda una demostración personalizada y descubre cómo StorageFy puede transformar tu negocio específico.'
                : 'Schedule a personalized demonstration and discover how StorageFy can transform your specific business.'
              }
            </p>
          </FadeInUp>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    {language === 'es' ? 'Nombre completo' : 'Full name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    {language === 'es' ? 'Empresa' : 'Company'}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder={language === 'es' ? 'Nombre de tu empresa' : 'Company name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    {language === 'es' ? 'Teléfono' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder={language === 'es' ? '+34 123 456 789' : '+1 234 567 890'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  {language === 'es' ? 'Cuéntanos sobre tu negocio' : 'Tell us about your business'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                  placeholder={language === 'es' 
                    ? '¿Cuántas unidades gestionas? ¿Qué desafíos enfrentas? ¿Cuándo te gustaría la demo?'
                    : 'How many units do you manage? What challenges do you face? When would you like the demo?'
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                {language === 'es' ? 'Solicitar Demo Personalizado' : 'Request Personalized Demo'}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-300" />
                  <span className="text-white">hola@storagefy.co</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-300" />
                  <span className="text-white">+34 971 123 456</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-white/80 text-sm">
                  {language === 'es' 
                    ? 'Te responderemos en menos de 24 horas'
                    : 'We will respond within 24 hours'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}