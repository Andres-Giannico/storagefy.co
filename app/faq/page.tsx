'use client'

import { motion } from 'framer-motion'
import { 
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Sparkles,
  DollarSign,
  Settings,
  Users,
  Truck,
  Shield,
  Zap,
  Mail
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'
import { useState } from 'react'

export default function FAQPage() {
  const { language } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', name: language === 'es' ? 'Todas' : 'All', icon: HelpCircle },
    { id: 'pricing', name: language === 'es' ? 'Precios' : 'Pricing', icon: DollarSign },
    { id: 'features', name: language === 'es' ? 'Funcionalidades' : 'Features', icon: Settings },
    { id: 'migration', name: language === 'es' ? 'Migración' : 'Migration', icon: Truck },
    { id: 'support', name: language === 'es' ? 'Soporte' : 'Support', icon: Users },
    { id: 'security', name: language === 'es' ? 'Seguridad' : 'Security', icon: Shield },
  ]

  const faqs = [
    // PRICING
    {
      category: 'pricing',
      question: language === 'es' ? '¿Cuáles son los planes y precios de StorageFy?' : 'What are StorageFy\'s plans and pricing?',
      answer: language === 'es'
        ? 'Tenemos 3 planes: Starter (€49/mes) para 1 locación y hasta 50 unidades, Professional (€99/mes) para 3 locaciones y hasta 200 unidades, y Enterprise (precio personalizado) con locaciones y unidades ilimitadas. Todos los planes incluyen 14 días de prueba gratis sin tarjeta de crédito.'
        : 'We have 3 plans: Starter (€49/month) for 1 location and up to 50 units, Professional (€99/month) for 3 locations and up to 200 units, and Enterprise (custom pricing) with unlimited locations and units. All plans include a 14-day free trial without a credit card.'
    },
    {
      category: 'pricing',
      question: language === 'es' ? '¿Hay descuentos por pago anual?' : 'Are there discounts for annual payment?',
      answer: language === 'es'
        ? 'Sí, ofrecemos un 20% de descuento en todos los planes si optas por facturación anual. Por ejemplo, el plan Professional saldría en €950/año en lugar de €1,188. Contacta con nuestro equipo para activar este descuento.'
        : 'Yes, we offer a 20% discount on all plans if you opt for annual billing. For example, the Professional plan would be €950/year instead of €1,188. Contact our team to activate this discount.'
    },
    {
      category: 'pricing',
      question: language === 'es' ? '¿Puedo cambiar de plan en cualquier momento?' : 'Can I change plans at any time?',
      answer: language === 'es'
        ? 'Sí, puedes cambiar de plan en cualquier momento desde tu panel de control. Si haces upgrade, solo pagas la diferencia prorrateada del mes actual. Si haces downgrade, el cambio se aplicará en tu próximo ciclo de facturación y no perderás lo que ya pagaste.'
        : 'Yes, you can change plans at any time from your control panel. If you upgrade, you only pay the prorated difference for the current month. If you downgrade, the change will apply on your next billing cycle and you won\'t lose what you\'ve already paid.'
    },
    {
      category: 'pricing',
      question: language === 'es' ? '¿Hay costos de configuración o implementación?' : 'Are there setup or implementation costs?',
      answer: language === 'es'
        ? 'No hay ningún costo de configuración en los planes Starter y Professional. El plan Enterprise incluye onboarding dedicado con un especialista de nuestro equipo, también sin costo adicional. La migración de datos también está incluida gratis en todos los planes.'
        : 'There are no setup costs for Starter and Professional plans. The Enterprise plan includes dedicated onboarding with a specialist from our team, also at no additional cost. Data migration is also included free in all plans.'
    },
    {
      category: 'pricing',
      question: language === 'es' ? '¿Qué métodos de pago aceptan?' : 'What payment methods do you accept?',
      answer: language === 'es'
        ? 'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express) a través de Stripe. Para planes Enterprise y facturación anual, también ofrecemos transferencia bancaria SEPA y domiciliación bancaria.'
        : 'We accept credit and debit cards (Visa, Mastercard, American Express) through Stripe. For Enterprise plans and annual billing, we also offer SEPA bank transfer and direct debit.'
    },

    // FEATURES
    {
      category: 'features',
      question: language === 'es' ? '¿Qué funcionalidades incluye StorageFy?' : 'What features does StorageFy include?',
      answer: language === 'es'
        ? 'StorageFy incluye gestión completa de unidades, contratos digitales con firma electrónica, cobros automáticos con Stripe, reportes y analytics en tiempo real, widget de reservas para tu web, almacenamiento seguro de fotos DNI, recordatorios automáticos de pago, CRM integrado, control visual de ocupación, gestión multi-locación, y mucho más.'
        : 'StorageFy includes complete unit management, digital contracts with electronic signature, automatic payments with Stripe, real-time reports and analytics, booking widget for your website, secure ID photo storage, automatic payment reminders, integrated CRM, visual occupancy control, multi-location management, and much more.'
    },
    {
      category: 'features',
      question: language === 'es' ? '¿Puedo gestionar múltiples locaciones?' : 'Can I manage multiple locations?',
      answer: language === 'es'
        ? 'Sí, el plan Starter incluye 1 locación, Professional hasta 3 locaciones, y Enterprise locaciones ilimitadas. Todas las locaciones se gestionan desde un único panel centralizado, con la posibilidad de ver reportes consolidados o individuales por cada sede.'
        : 'Yes, the Starter plan includes 1 location, Professional up to 3 locations, and Enterprise unlimited locations. All locations are managed from a single centralized panel, with the ability to view consolidated or individual reports for each location.'
    },
    {
      category: 'features',
      question: language === 'es' ? '¿Cómo funcionan los contratos digitales?' : 'How do digital contracts work?',
      answer: language === 'es'
        ? 'Puedes crear plantillas de contratos personalizadas con tu logo y términos. Los clientes pueden firmar electrónicamente desde cualquier dispositivo. Todos los contratos se almacenan de forma segura en la nube con validez legal, y puedes descargarlos en PDF en cualquier momento.'
        : 'You can create custom contract templates with your logo and terms. Clients can sign electronically from any device. All contracts are stored securely in the cloud with legal validity, and you can download them as PDF at any time.'
    },
    {
      category: 'features',
      question: language === 'es' ? '¿Puedo integrar el widget de reservas en mi web?' : 'Can I integrate the booking widget on my website?',
      answer: language === 'es'
        ? 'Sí, incluimos un widget de reservas personalizable que puedes integrar en tu sitio web con solo copiar y pegar un código. Los clientes pueden ver disponibilidad, precios y reservar online 24/7. El widget está disponible en los planes Professional y Enterprise.'
        : 'Yes, we include a customizable booking widget that you can integrate into your website by just copying and pasting a code. Clients can see availability, prices and book online 24/7. The widget is available on Professional and Enterprise plans.'
    },
    {
      category: 'features',
      question: language === 'es' ? '¿Tienen app móvil?' : 'Do you have a mobile app?',
      answer: language === 'es'
        ? 'Actualmente StorageFy es una web app completamente responsive que funciona perfectamente en móviles y tablets. Estamos desarrollando apps nativas para iOS y Android que estarán disponibles próximamente. Te notificaremos cuando estén listas.'
        : 'Currently StorageFy is a fully responsive web app that works perfectly on mobile and tablets. We are developing native apps for iOS and Android that will be available soon. We will notify you when they are ready.'
    },

    // MIGRATION
    {
      category: 'migration',
      question: language === 'es' ? '¿Cómo migro mis datos desde Excel?' : 'How do I migrate my data from Excel?',
      answer: language === 'es'
        ? 'La migración desde Excel es muy simple. Nuestro equipo te guía en todo el proceso: nos envías tu archivo Excel actual, lo revisamos y formateamos, y lo importamos a StorageFy. Todo el proceso toma 1-2 días y está incluido gratis en todos los planes. No pierdes ningún dato.'
        : 'Migration from Excel is very simple. Our team guides you through the entire process: you send us your current Excel file, we review and format it, and we import it to StorageFy. The entire process takes 1-2 days and is included free in all plans. You don\'t lose any data.'
    },
    {
      category: 'migration',
      question: language === 'es' ? '¿Puedo migrar desde otro software de gestión?' : 'Can I migrate from another management software?',
      answer: language === 'es'
        ? 'Sí, podemos migrar datos desde cualquier software de gestión. Solo necesitamos que puedas exportar tus datos (generalmente en Excel o CSV). Nuestro equipo se encarga de mapear y migrar toda tu información: clientes, contratos, pagos, unidades, etc.'
        : 'Yes, we can migrate data from any management software. We just need you to be able to export your data (usually in Excel or CSV). Our team handles mapping and migrating all your information: clients, contracts, payments, units, etc.'
    },
    {
      category: 'migration',
      question: language === 'es' ? '¿Cuánto tiempo toma la implementación completa?' : 'How long does complete implementation take?',
      answer: language === 'es'
        ? 'La configuración inicial de StorageFy toma 1-2 días. Esto incluye: crear tu cuenta, migrar tus datos, configurar tus locaciones y unidades, personalizar contratos y emails, y capacitar a tu equipo. Puedes empezar a usar el sistema inmediatamente después.'
        : 'Initial StorageFy setup takes 1-2 days. This includes: creating your account, migrating your data, configuring your locations and units, customizing contracts and emails, and training your team. You can start using the system immediately after.'
    },
    {
      category: 'migration',
      question: language === 'es' ? '¿Qué pasa con mis datos si cancelo?' : 'What happens to my data if I cancel?',
      answer: language === 'es'
        ? 'Tus datos son tuyos siempre. Si decides cancelar, puedes exportar toda tu información en formato Excel antes de cerrar tu cuenta. Te damos 30 días después de la cancelación para descargar tus datos. Después de ese periodo, eliminamos permanentemente tu información por seguridad.'
        : 'Your data is always yours. If you decide to cancel, you can export all your information in Excel format before closing your account. We give you 30 days after cancellation to download your data. After that period, we permanently delete your information for security.'
    },

    // SUPPORT
    {
      category: 'support',
      question: language === 'es' ? '¿Qué tipo de soporte técnico ofrecen?' : 'What type of technical support do you offer?',
      answer: language === 'es'
        ? 'El soporte varía según el plan: Starter incluye soporte por email con respuesta en 24 horas laborables. Professional incluye soporte prioritario con respuesta en 4 horas. Enterprise incluye soporte 24/7 con account manager dedicado, llamadas programadas, y SLA garantizado.'
        : 'Support varies by plan: Starter includes email support with response within 24 business hours. Professional includes priority support with 4-hour response. Enterprise includes 24/7 support with dedicated account manager, scheduled calls, and guaranteed SLA.'
    },
    {
      category: 'support',
      question: language === 'es' ? '¿Ofrecen capacitación para mi equipo?' : 'Do you offer training for my team?',
      answer: language === 'es'
        ? 'Sí, todos los planes incluyen capacitación inicial. Para Starter y Professional, ofrecemos videotutoriales completos y documentación. El plan Enterprise incluye sesiones de capacitación en vivo personalizadas para tu equipo, con la duración que necesites.'
        : 'Yes, all plans include initial training. For Starter and Professional, we offer complete video tutorials and documentation. The Enterprise plan includes personalized live training sessions for your team, for as long as you need.'
    },
    {
      category: 'support',
      question: language === 'es' ? '¿Puedo solicitar nuevas funcionalidades?' : 'Can I request new features?',
      answer: language === 'es'
        ? 'Absolutamente. Escuchamos activamente a nuestros clientes. Puedes sugerir funcionalidades desde tu panel o contactando a soporte. Las más solicitadas y viables las priorizamos en nuestro roadmap. Clientes Enterprise pueden solicitar desarrollos personalizados.'
        : 'Absolutely. We actively listen to our customers. You can suggest features from your panel or by contacting support. We prioritize the most requested and viable ones in our roadmap. Enterprise customers can request custom developments.'
    },

    // SECURITY
    {
      category: 'security',
      question: language === 'es' ? '¿Qué tan seguro es StorageFy?' : 'How secure is StorageFy?',
      answer: language === 'es'
        ? 'La seguridad es nuestra prioridad #1. Usamos encriptación SSL/TLS para todas las conexiones, encriptación AES-256 para datos en reposo, backups diarios automáticos, autenticación de dos factores opcional, y cumplimos con GDPR. Nuestros servidores están en Europa con certificación ISO 27001.'
        : 'Security is our #1 priority. We use SSL/TLS encryption for all connections, AES-256 encryption for data at rest, automatic daily backups, optional two-factor authentication, and we comply with GDPR. Our servers are in Europe with ISO 27001 certification.'
    },
    {
      category: 'security',
      question: language === 'es' ? '¿Cómo se almacenan las fotos de DNI?' : 'How are ID photos stored?',
      answer: language === 'es'
        ? 'Las fotos de DNI se almacenan encriptadas en servidores seguros con acceso restringido. Solo usuarios autorizados de tu empresa pueden verlas. Cumplimos con todas las regulaciones de protección de datos personales (GDPR). Las fotos se eliminan automáticamente cuando el contrato termina, si así lo configuras.'
        : 'ID photos are stored encrypted on secure servers with restricted access. Only authorized users from your company can view them. We comply with all personal data protection regulations (GDPR). Photos are automatically deleted when the contract ends, if you configure it that way.'
    },
    {
      category: 'security',
      question: language === 'es' ? '¿Hacen backups de mis datos?' : 'Do you backup my data?',
      answer: language === 'es'
        ? 'Sí, realizamos backups automáticos diarios de todos tus datos. Los backups se almacenan en múltiples ubicaciones geográficas para máxima redundancia. Puedes restaurar datos de hasta 30 días atrás. Planes Enterprise pueden solicitar backups personalizados más frecuentes.'
        : 'Yes, we perform automatic daily backups of all your data. Backups are stored in multiple geographic locations for maximum redundancy. You can restore data from up to 30 days ago. Enterprise plans can request more frequent custom backups.'
    },
    {
      category: 'pricing',
      question: language === 'es' ? '¿Puedo cancelar mi suscripción en cualquier momento?' : 'Can I cancel my subscription at any time?',
      answer: language === 'es'
        ? 'Sí, no hay permanencia ni penalizaciones. Puedes cancelar tu suscripción en cualquier momento desde tu panel de control con solo un clic. Tu acceso continuará hasta el final del periodo que ya pagaste. No hacemos retenciones ni cobros sorpresa.'
        : 'Yes, there is no commitment or penalties. You can cancel your subscription at any time from your control panel with just one click. Your access will continue until the end of the period you already paid for. We don\'t do retention or surprise charges.'
    }
  ]

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

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
              <HelpCircle className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Centro de Ayuda' : 'Help Center'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Preguntas' : 'Frequently'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'frecuentes' : 'asked questions'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Encuentra respuestas rápidas a las preguntas más comunes sobre StorageFy. Si no encuentras lo que buscas, nuestro asistente IA está aquí para ayudarte.'
                : 'Find quick answers to the most common questions about StorageFy. If you don\'t find what you\'re looking for, our AI assistant is here to help.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* AI Chatbot CTA */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
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

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex-shrink-0">
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
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {language === 'es' 
                    ? '¿No encuentras tu respuesta?' 
                    : 'Can\'t find your answer?'
                  }
                </h3>
                <p className="text-white/90 text-lg">
                  {language === 'es'
                    ? 'Pregúntale a nuestro asistente IA. Responde al instante cualquier duda sobre StorageFy.'
                    : 'Ask our AI assistant. It instantly answers any questions about StorageFy.'
                  }
                </p>
              </div>

              <motion.button
                onClick={() => {
                  // Trigger chatbot (it will open automatically)
                  const chatbotButton = document.querySelector('button[class*="fixed bottom-6 right-6"]') as HTMLButtonElement
                  if (chatbotButton) chatbotButton.click()
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 px-8 py-4 bg-white text-accent-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {language === 'es' ? 'Abrir Chat IA' : 'Open AI Chat'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = selectedCategory === category.id
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg'
                      : 'bg-white text-primary-700 border border-gray-200 hover:border-accent-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.05
                  }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-accent-200 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary-800 pr-8 flex-1">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-primary-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary-600">
                {language === 'es' 
                  ? 'No hay preguntas en esta categoría' 
                  : 'No questions in this category'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <Zap className="w-12 h-12 text-accent-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              {language === 'es' ? '¿Aún tienes preguntas?' : 'Still have questions?'}
            </h2>
            <p className="text-xl text-primary-600 mb-8">
              {language === 'es'
                ? 'Nuestro equipo está listo para ayudarte'
                : 'Our team is ready to help you'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                {language === 'es' ? 'Contactar Equipo' : 'Contact Team'}
              </motion.a>

              <motion.a
                href="https://wa.me/34654082728"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}

