'use client'

import { useLanguage } from '@/lib/context/LanguageContext'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import FadeInUp from '@/components/animations/FadeInUp'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQPageClient() {
  const { language } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = language === 'es' ? [
    {
      question: '¿Cuáles son los planes y precios de StorageFy?',
      answer: 'Tenemos un modelo de precios simple: 1 EUR por unidad al mes + IVA hasta 200 unidades. Para más de 200 unidades ofrecemos precios personalizados con descuentos por volumen. Todos los planes incluyen locaciones ilimitadas, usuarios ilimitados y 14 días de prueba gratis sin tarjeta de crédito.',
    },
    {
      question: '¿Hay descuentos por volumen?',
      answer: 'Sí, para más de 200 unidades ofrecemos precios personalizados con descuentos por volumen. Contacta con nuestro equipo para más información.',
    },
    {
      question: '¿Qué funcionalidades incluye StorageFy?',
      answer: 'StorageFy incluye gestión completa de unidades, contratos digitales con firma electrónica, cobros automáticos con Stripe, reportes y analytics en tiempo real, widget de reservas para tu web, y mucho más.',
    },
    {
      question: '¿Cómo funciona la prueba gratis?',
      answer: 'Ofrecemos 14 días de prueba gratis sin necesidad de tarjeta de crédito. Puedes probar todas las funcionalidades durante este período. Si decides continuar, simplemente selecciona tu plan.',
    },
    {
      question: '¿Puedo migrar mis datos desde otro sistema?',
      answer: 'Sí, ofrecemos migración de datos gratuita desde cualquier sistema anterior. Nuestro equipo te ayudará a importar tus datos de forma segura y sin interrupciones.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos todas las tarjetas de crédito principales y transferencias bancarias. Los pagos se procesan de forma segura a través de Stripe.',
    },
    {
      question: '¿Ofrecen soporte técnico?',
      answer: 'Sí, ofrecemos soporte prioritario por email. Para clientes Enterprise también ofrecemos soporte 24/7 con account manager dedicado.',
    },
    {
      question: '¿Puedo cancelar mi suscripción en cualquier momento?',
      answer: 'Sí, no hay permanencia. Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta.',
    },
  ] : [
    {
      question: 'What are StorageFy plans and pricing?',
      answer: 'We have a simple pricing model: 1 EUR per unit per month + VAT up to 200 units. For more than 200 units we offer custom pricing with volume discounts. All plans include unlimited locations, unlimited users, and 14 days free trial without credit card.',
    },
    {
      question: 'Are there volume discounts?',
      answer: 'Yes, for more than 200 units we offer custom pricing with volume discounts. Contact our team for more information.',
    },
    {
      question: 'What features does StorageFy include?',
      answer: 'StorageFy includes complete unit management, digital contracts with electronic signature, automatic payments with Stripe, real-time reports and analytics, booking widget for your website, and much more.',
    },
    {
      question: 'How does the free trial work?',
      answer: 'We offer 14 days free trial without credit card required. You can try all features during this period. If you decide to continue, simply select your plan.',
    },
    {
      question: 'Can I migrate my data from another system?',
      answer: 'Yes, we offer free data migration from any previous system. Our team will help you import your data safely and without interruptions.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards and bank transfers. Payments are processed securely through Stripe.',
    },
    {
      question: 'Do you offer technical support?',
      answer: 'Yes, we offer priority email support. For Enterprise customers we also offer 24/7 support with dedicated account manager.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, there is no commitment. You can cancel your subscription at any time from your account settings.',
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <FadeInUp className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            {language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl text-primary-600">
            {language === 'es' 
              ? 'Encuentra respuestas a las preguntas más comunes sobre StorageFy'
              : 'Find answers to the most common questions about StorageFy'}
          </p>
        </FadeInUp>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-primary-800 pr-4">
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 text-primary-700 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
