'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Database, 
  Globe, 
  FileCheck, 
  CheckCircle, 
  AlertCircle,
  Star,
  Clock,
  ArrowRight,
  Server,
  Eye,
  Key,
  Cloud
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function SecurityPage() {
  const { language } = useLanguage()

  const certifications = [
    {
      icon: Shield,
      title: language === 'es' ? 'RGPD Compliant' : 'GDPR Compliant',
      description: language === 'es'
        ? 'Cumplimiento total con el Reglamento General de Protección de Datos europeo. Tus datos y los de tus clientes están protegidos según la normativa más estricta del mundo.'
        : 'Full compliance with the European General Data Protection Regulation. Your data and your clients\' data are protected according to the world\'s strictest regulations.'
    },
    {
      icon: Lock,
      title: language === 'es' ? 'SSL/TLS Encriptación' : 'SSL/TLS Encryption',
      description: language === 'es'
        ? 'Todos los datos se transmiten mediante conexiones encriptadas SSL/TLS. La información sensible nunca viaja sin protección.'
        : 'All data is transmitted through SSL/TLS encrypted connections. Sensitive information never travels unprotected.'
    },
    {
      icon: Database,
      title: language === 'es' ? 'Backups Automáticos' : 'Automatic Backups',
      description: language === 'es'
        ? 'Respaldos diarios automáticos de toda tu información. En caso de cualquier problema, podemos restaurar tus datos al estado de las últimas 24 horas.'
        : 'Daily automatic backups of all your information. In case of any problem, we can restore your data to the state of the last 24 hours.'
    },
    {
      icon: Globe,
      title: language === 'es' ? 'Almacenamiento en Europa' : 'Storage in Europe',
      description: language === 'es'
        ? 'Tus datos se almacenan en servidores ubicados en Europa, cumpliendo con las normativas de protección de datos europeas.'
        : 'Your data is stored on servers located in Europe, complying with European data protection regulations.'
    },
    {
      icon: Key,
      title: language === 'es' ? 'Autenticación Segura' : 'Secure Authentication',
      description: language === 'es'
        ? 'Sistema de autenticación con NextAuth y tokens encriptados. Tu cuenta está protegida con contraseñas seguras y verificación de email.'
        : 'Authentication system with NextAuth and encrypted tokens. Your account is protected with secure passwords and email verification.'
    },
    {
      icon: Eye,
      title: language === 'es' ? 'Auditoría Completa' : 'Complete Audit',
      description: language === 'es'
        ? 'Registramos todas las acciones importantes en el sistema. Cada cambio tiene un registro de quién lo hizo y cuándo, para total transparencia.'
        : 'We record all important actions in the system. Every change has a record of who did it and when, for complete transparency.'
    }
  ]

  const protectionFeatures = [
    {
      icon: Lock,
      title: language === 'es' ? 'Encriptación en Reposo y Tránsito' : 'Encryption at Rest and in Transit',
      items: [
        language === 'es' ? 'Datos encriptados tanto cuando están almacenados como cuando se transmiten' : 'Data encrypted both when stored and when transmitted',
        language === 'es' ? 'Cifrado AES-256 para datos sensibles' : 'AES-256 encryption for sensitive data',
        language === 'es' ? 'Certificados SSL válidos y actualizados' : 'Valid and updated SSL certificates'
      ]
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Control de Acceso' : 'Access Control',
      items: [
        language === 'es' ? 'Acceso solo con autenticación válida' : 'Access only with valid authentication',
        language === 'es' ? 'Permisos granulares por usuario y rol' : 'Granular permissions per user and role',
        language === 'es' ? 'Control de acceso por organización (multi-tenant seguro)' : 'Access control per organization (secure multi-tenant)'
      ]
    },
    {
      icon: FileCheck,
      title: language === 'es' ? 'Cumplimiento RGPD' : 'GDPR Compliance',
      items: [
        language === 'es' ? 'Diseñado desde el inicio para cumplir RGPD' : 'Designed from the start to comply with GDPR',
        language === 'es' ? 'Derecho al olvido implementado' : 'Right to be forgotten implemented',
        language === 'es' ? 'Exportación de datos disponible' : 'Data export available',
        language === 'es' ? 'Consentimiento explícito donde es requerido' : 'Explicit consent where required',
        language === 'es' ? 'Política de privacidad clara y accesible' : 'Clear and accessible privacy policy'
      ]
    },
    {
      icon: Database,
      title: language === 'es' ? 'Protección de Documentos' : 'Document Protection',
      items: [
        language === 'es' ? 'Fotos de DNI encriptadas y almacenadas de forma segura' : 'ID photos encrypted and stored securely',
        language === 'es' ? 'Documentos de contratos protegidos' : 'Contract documents protected',
        language === 'es' ? 'Acceso solo para usuarios autorizados' : 'Access only for authorized users'
      ]
    }
  ]

  const availabilityFeatures = [
    {
      icon: Server,
      title: language === 'es' ? '99.9% Uptime Garantizado' : '99.9% Guaranteed Uptime',
      description: language === 'es'
        ? 'Infraestructura en la nube escalable con redundancia automática y monitoreo 24/7. Respuesta rápida a incidentes con SLA garantizado en plan Enterprise.'
        : 'Scalable cloud infrastructure with automatic redundancy and 24/7 monitoring. Fast incident response with guaranteed SLA on Enterprise plan.'
    },
    {
      icon: Cloud,
      title: language === 'es' ? 'Respaldo y Recuperación' : 'Backup and Recovery',
      description: language === 'es'
        ? 'Backups diarios automáticos con retención de 30 días. Restauración rápida en caso de necesidad y plan de recuperación ante desastres.'
        : 'Daily automatic backups with 30-day retention. Fast restoration when needed and disaster recovery plan.'
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
              <Shield className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Seguridad' : 'Security'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Tus datos están' : 'Your data is'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? '100% seguros y protegidos' : '100% safe and protected'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'es'
                ? 'En StorageFy, la seguridad es nuestra prioridad. Cumplimos con los más altos estándares de protección de datos y garantizamos la privacidad de tu información y la de tus clientes.'
                : 'At StorageFy, security is our priority. We comply with the highest data protection standards and guarantee the privacy of your information and that of your clients.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Certificaciones y Compliance' : 'Certifications and Compliance'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Estamos comprometidos con los más altos estándares de seguridad y cumplimiento normativo.'
                : 'We are committed to the highest standards of security and regulatory compliance.'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.title}
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
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3">{cert.title}</h3>
                  <p className="text-primary-600 leading-relaxed">{cert.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Protection Features */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Protección de Datos' : 'Data Protection'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Múltiples capas de seguridad para proteger tu información en todo momento.'
                : 'Multiple layers of security to protect your information at all times.'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            {protectionFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
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
                  className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-accent-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-800">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-primary-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Disponibilidad e Infraestructura' : 'Availability and Infrastructure'}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Garantizamos que tu sistema esté disponible cuando lo necesites.'
                : 'We guarantee that your system will be available when you need it.'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            {availabilityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
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
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-4">{feature.title}</h3>
                  <p className="text-primary-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800">
              {language === 'es' ? 'Privacidad y Transparencia' : 'Privacy and Transparency'}
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {language === 'es' ? 'No Compartimos Datos' : 'We Don\'t Share Data'}
              </h3>
              <p className="text-primary-600">
                {language === 'es'
                  ? 'No vendemos ni compartimos datos con terceros. Solo usamos datos para proporcionar el servicio con transparencia total.'
                  : 'We do not sell or share data with third parties. We only use data to provide the service with complete transparency.'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {language === 'es' ? 'Política de Privacidad Clara' : 'Clear Privacy Policy'}
              </h3>
              <p className="text-primary-600">
                {language === 'es'
                  ? 'Política de privacidad completa y accesible, términos de servicio claros y contratos de procesamiento de datos cuando aplica.'
                  : 'Complete and accessible privacy policy, clear terms of service and data processing contracts when applicable.'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">
                {language === 'es' ? 'Certificaciones' : 'Certifications'}
              </h3>
              <p className="text-primary-600">
                {language === 'es'
                  ? 'Cumplimiento RGPD verificado, certificaciones de seguridad en proceso y auditorías de seguridad regulares.'
                  : 'Verified GDPR compliance, security certifications in process and regular security audits.'
                }
              </p>
            </motion.div>
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
              {language === 'es' ? '¿Tienes preguntas sobre seguridad?' : 'Have questions about security?'}
            </h2>

            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Nuestro equipo está disponible para responder cualquier duda sobre cómo protegemos tus datos.'
                : 'Our team is available to answer any questions about how we protect your data.'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {language === 'es' ? 'Contactar Seguridad' : 'Contact Security'}
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/faq"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                {language === 'es' ? 'Ver FAQs' : 'View FAQs'}
              </motion.a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}

