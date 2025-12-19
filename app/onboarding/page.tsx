'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Upload, 
  Video, 
  Rocket,
  ArrowRight,
  FileText,
  Settings,
  Calendar,
  Star,
  Zap
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { useState } from 'react'
import Image from 'next/image'

export default function OnboardingPage() {
  const { language } = useLanguage()
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const steps = [
    {
      number: 1,
      icon: Rocket,
      title: language === 'es' ? 'Registro (5 minutos)' : 'Registration (5 minutes)',
      items: [
        language === 'es' ? 'Crea tu cuenta gratuita desde el botón "Comenzar prueba gratis"' : 'Create your free account from the "Start free trial" button',
        language === 'es' ? 'Confirma tu email (recibirás un enlace de confirmación)' : 'Confirm your email (you will receive a confirmation link)',
        language === 'es' ? 'Selecciona tu plan (puedes cambiar después)' : 'Select your plan (you can change later)',
        language === 'es' ? 'Sin tarjeta de crédito requerida para la prueba' : 'No credit card required for trial'
      ],
      time: '5 min'
    },
    {
      number: 2,
      icon: Settings,
      title: language === 'es' ? 'Configuración Inicial (30 minutos)' : 'Initial Setup (30 minutes)',
      items: [
        language === 'es' ? 'Completa los datos de tu empresa (nombre, CIF, dirección, logo)' : 'Complete your company data (name, tax ID, address, logo)',
        language === 'es' ? 'Agrega tu primera locación (nombre, dirección, servicios disponibles)' : 'Add your first location (name, address, available services)',
        language === 'es' ? 'Configura servicios y políticas básicas' : 'Configure services and basic policies',
        language === 'es' ? 'Sube tu logo y datos fiscales para facturación' : 'Upload your logo and tax data for invoicing'
      ],
      time: '30 min'
    },
    {
      number: 3,
      icon: Upload,
      title: language === 'es' ? 'Migración de Datos (1-2 horas)' : 'Data Migration (1-2 hours)',
      items: [
        language === 'es' ? 'Opción A: Importación CSV Asistida - Descarga nuestra plantilla Excel' : 'Option A: Assisted CSV Import - Download our Excel template',
        language === 'es' ? 'Completa con tus datos (unidades, clientes, contratos)' : 'Complete with your data (units, clients, contracts)',
        language === 'es' ? 'Sube el archivo y nosotros lo procesamos' : 'Upload the file and we process it',
        language === 'es' ? 'Opción B: Migración Manual Asistida - Te ayudamos a ingresar tus datos' : 'Option B: Assisted Manual Migration - We help you enter your data'
      ],
      time: '1-2h'
    },
    {
      number: 4,
      icon: Video,
      title: language === 'es' ? 'Entrenamiento (1 hora)' : 'Training (1 hour)',
      items: [
        language === 'es' ? 'Demo personalizada de la plataforma (vía videollamada)' : 'Personalized platform demo (via video call)',
        language === 'es' ? 'Te mostramos todas las funcionalidades principales' : 'We show you all main features',
        language === 'es' ? 'Respondemos todas tus preguntas' : 'We answer all your questions',
        language === 'es' ? 'Te damos tips y mejores prácticas específicas para tu negocio' : 'We give you tips and best practices specific to your business'
      ],
      time: '1h'
    },
    {
      number: 5,
      icon: Rocket,
      title: language === 'es' ? 'Go Live (Inmediato)' : 'Go Live (Immediate)',
      items: [
        language === 'es' ? 'Ya puedes empezar a usar StorageFy' : 'You can now start using StorageFy',
        language === 'es' ? 'Soporte prioritario durante las primeras 2 semanas' : 'Priority support during the first 2 weeks',
        language === 'es' ? 'Revisión de seguimiento a los 7 días' : 'Follow-up review at 7 days',
        language === 'es' ? 'Optimización continua según tus necesidades' : 'Continuous optimization according to your needs'
      ],
      time: '0 min'
    }
  ]

  const onboardingIncludes = [
    {
      icon: Upload,
      title: language === 'es' ? 'Migración de datos sin costo adicional' : 'Data migration at no additional cost',
      description: language === 'es' ? 'En todos los planes' : 'In all plans'
    },
    {
      icon: Video,
      title: language === 'es' ? 'Sesión de entrenamiento personalizada' : 'Personalized training session',
      description: language === 'es' ? '1 hora' : '1 hour'
    },
    {
      icon: Settings,
      title: language === 'es' ? 'Configuración inicial asistida' : 'Assisted initial setup',
      description: language === 'es' ? 'Te ayudamos a configurar todo' : 'We help you set everything up'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Soporte prioritario durante 30 días' : 'Priority support for 30 days',
      description: language === 'es' ? 'Respuestas rápidas' : 'Fast responses'
    },
    {
      icon: FileText,
      title: language === 'es' ? 'Acceso a documentación completa' : 'Access to complete documentation',
      description: language === 'es' ? 'Guías paso a paso' : 'Step-by-step guides'
    },
    {
      icon: Video,
      title: language === 'es' ? 'Videos tutoriales' : 'Video tutorials',
      description: language === 'es' ? 'Acceso a biblioteca de videos' : 'Access to video library'
    }
  ]

  const supportPlans = [
    {
      plan: language === 'es' ? 'Starter' : 'Starter',
      features: [
        language === 'es' ? 'Soporte por email (respuesta en 24-48 horas)' : 'Email support (24-48 hour response)',
        language === 'es' ? 'Base de conocimiento completa' : 'Complete knowledge base',
        language === 'es' ? 'Videos tutoriales' : 'Video tutorials'
      ]
    },
    {
      plan: language === 'es' ? 'Professional' : 'Professional',
      features: [
        language === 'es' ? 'Soporte prioritario por email (respuesta en 4-8 horas)' : 'Priority email support (4-8 hour response)',
        language === 'es' ? 'Base de conocimiento completa' : 'Complete knowledge base',
        language === 'es' ? 'Videos tutoriales' : 'Video tutorials',
        language === 'es' ? 'Acceso a webinars mensuales' : 'Access to monthly webinars'
      ]
    },
    {
      plan: language === 'es' ? 'Enterprise' : 'Enterprise',
      features: [
        language === 'es' ? 'Soporte 24/7 (respuesta en 1-2 horas)' : '24/7 support (1-2 hour response)',
        language === 'es' ? 'Account manager dedicado' : 'Dedicated account manager',
        language === 'es' ? 'Entrenamiento continuo' : 'Continuous training',
        language === 'es' ? 'Acceso prioritario a nuevas funcionalidades' : 'Priority access to new features'
      ]
    }
  ]

  const checklistItems = [
    language === 'es' ? 'Cuenta creada y email confirmado' : 'Account created and email confirmed',
    language === 'es' ? 'Datos de empresa completados' : 'Company data completed',
    language === 'es' ? 'Primera locación agregada' : 'First location added',
    language === 'es' ? 'Unidades importadas o creadas' : 'Units imported or created',
    language === 'es' ? 'Clientes migrados (si aplica)' : 'Clients migrated (if applicable)',
    language === 'es' ? 'Widget configurado (si aplica)' : 'Widget configured (if applicable)',
    language === 'es' ? 'Stripe conectado (para pagos online)' : 'Stripe connected (for online payments)',
    language === 'es' ? 'Entrenamiento completado' : 'Training completed',
    language === 'es' ? 'Primer contrato creado' : 'First contract created',
    language === 'es' ? 'Primera factura generada' : 'First invoice generated'
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
              <Rocket className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Onboarding' : 'Onboarding'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Empieza en 24-48 horas,' : 'Start in 24-48 hours,'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'no en semanas' : 'not in weeks'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'Nuestro proceso de onboarding está diseñado para que puedas empezar a usar StorageFy en menos de 48 horas. Te acompañamos en cada paso.'
                : 'Our onboarding process is designed so you can start using StorageFy in less than 48 hours. We accompany you every step of the way.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Visual Setup Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Setup Guiado en 5 Pasos' : 'Guided Setup in 5 Steps'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Proceso visual e intuitivo similar a Google. Navega entre pasos y completa tu configuración en minutos.'
                : 'Visual and intuitive process similar to Google. Navigate between steps and complete your setup in minutes.'}
            </p>
          </FadeInUp>

          {/* Setup Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-800 mb-4 text-center">
                {language === 'es' ? 'Inicia el Setup desde tu Dashboard' : 'Start Setup from your Dashboard'}
              </h3>
              <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="/images/onboarding-setup-card.webp"
                  alt={language === 'es' ? 'Card de Setup Inicial' : 'Initial Setup Card'}
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                  quality={85}
                />
              </div>
            </div>
          </motion.div>

          {/* Step 1 & 2 Visual */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-primary-800">
                  {language === 'es' ? 'Información de Negocio' : 'Business Information'}
                </h3>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/images/onboarding-step1-business.webp"
                  alt={language === 'es' ? 'Paso 1 - Información de Negocio' : 'Step 1 - Business Information'}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  quality={85}
                />
              </div>
              <p className="text-sm text-primary-600 mt-4 text-center">
                {language === 'es' 
                  ? 'Completa los datos básicos de tu empresa. Progreso visible en tiempo real.'
                  : 'Complete your company\'s basic data. Real-time progress visible.'}
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-primary-800">
                  {language === 'es' ? 'Locaciones' : 'Locations'}
                </h3>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/images/onboarding-step2-locations.webp"
                  alt={language === 'es' ? 'Paso 2 - Locaciones' : 'Step 2 - Locations'}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  quality={85}
                />
              </div>
              <p className="text-sm text-primary-600 mt-4 text-center">
                {language === 'es' 
                  ? 'Agrega tus ubicaciones físicas. Navega entre pasos fácilmente.'
                  : 'Add your physical locations. Navigate between steps easily.'}
              </p>
            </motion.div>
          </div>

          {/* Location Form Detail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-800 mb-4 text-center">
                {language === 'es' ? 'Formulario Completo de Locación' : 'Complete Location Form'}
              </h3>
              <p className="text-primary-600 mb-6 text-center max-w-2xl mx-auto">
                {language === 'es'
                  ? 'Agrega toda la información de tus locaciones: dirección, servicios, características y más. Todos los campos están claramente marcados.'
                  : 'Add all your location information: address, services, features and more. All fields are clearly marked.'}
              </p>
              <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                <Image
                  src="/images/onboarding-location-form.webp"
                  alt={language === 'es' ? 'Formulario de Nueva Locación' : 'New Location Form'}
                  width={1000}
                  height={800}
                  className="w-full h-auto"
                  quality={85}
                />
              </div>
            </div>
          </motion.div>

          {/* Setup Progress Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 border border-accent-200"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-600 mb-2">5</div>
                <div className="text-primary-700 font-semibold">
                  {language === 'es' ? 'Pasos Totales' : 'Total Steps'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600 mb-2">2</div>
                <div className="text-primary-700 font-semibold">
                  {language === 'es' ? 'Pasos Obligatorios' : 'Mandatory Steps'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600 mb-2">20%</div>
                <div className="text-primary-700 font-semibold">
                  {language === 'es' ? 'Por Paso' : 'Per Step'}
                </div>
              </div>
            </div>
            <p className="text-center text-primary-600 mt-6">
              {language === 'es'
                ? 'Puedes navegar entre pasos haciendo clic en cualquier número. Los pasos opcionales (Clientes y Contratos) pueden completarse después.'
                : 'You can navigate between steps by clicking any number. Optional steps (Clients and Contracts) can be completed later.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'El Proceso Paso a Paso' : 'The Step-by-Step Process'}
            </h2>
          </FadeInUp>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1
                    }
                  }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-8 items-start ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-100 rounded-full">
                        <Clock className="w-4 h-4 text-accent-600" />
                        <span className="text-sm font-semibold text-accent-700">{step.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-primary-800 mb-4">{step.title}</h3>
                    <ul className="space-y-3">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="text-primary-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? '¿Qué Incluye el Onboarding?' : 'What Does Onboarding Include?'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onboardingIncludes.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
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
                  className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-accent-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Soporte Post-Onboarding' : 'Post-Onboarding Support'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <motion.div
                key={plan.plan}
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800">{plan.plan}</h3>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Checklist de Onboarding' : 'Onboarding Checklist'}
            </h2>
            <p className="text-xl text-primary-600">
              {language === 'es'
                ? 'Marca cada paso conforme lo completes'
                : 'Check each step as you complete it'
              }
            </p>
          </FadeInUp>

          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-gray-100">
            <ul className="space-y-4">
              {checklistItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.05
                    }
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-accent-200 transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    if (completedSteps.includes(index)) {
                      setCompletedSteps(completedSteps.filter(i => i !== index))
                    } else {
                      setCompletedSteps([...completedSteps, index])
                    }
                  }}
                >
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                    completedSteps.includes(index)
                      ? 'bg-accent-500 border-accent-500'
                      : 'border-gray-300'
                  }`}>
                    {completedSteps.includes(index) && (
                      <CheckCircle className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <span className={`flex-1 ${completedSteps.includes(index) ? 'line-through text-primary-500' : 'text-primary-800'}`}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              {language === 'es' ? '¿Listo para empezar?' : 'Ready to get started?'}
            </h2>

            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Comienza tu prueba gratuita de 14 días y nuestro equipo te ayudará en cada paso del proceso.'
                : 'Start your 14-day free trial and our team will help you at every step of the process.'
              }
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
                {language === 'es' ? 'Hablar con un Experto' : 'Talk to an Expert'}
              </motion.a>
            </div>
            <p className="text-center text-sm text-white/80 mt-4">
              {language === 'es'
                ? 'Regístrate gratis en 2 minutos • Sin tarjeta de crédito'
                : 'Sign up free in 2 minutes • No credit card required'}
            </p>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}

