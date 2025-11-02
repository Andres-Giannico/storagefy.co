'use client'

import { motion } from 'framer-motion'
import { 
  Heart,
  Target,
  Users,
  TrendingUp,
  Globe,
  Zap,
  Code,
  Rocket,
  CheckCircle,
  ArrowRight,
  FileSpreadsheet,
  Phone,
  Smartphone,
  BarChart3,
  Shield,
  Sparkles,
  Award,
  Building2
} from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import FadeInUp from '@/components/animations/FadeInUp'

export default function AboutPage() {
  const { language } = useLanguage()

  const portfolio = [
    {
      name: 'TurboOking',
      icon: Rocket,
      description: language === 'es' 
        ? 'Plataforma de reservas de alto rendimiento'
        : 'High-performance booking platform'
    },
    {
      name: 'Turvok',
      icon: Globe,
      description: language === 'es'
        ? 'Sistema de gestión turística avanzada'
        : 'Advanced tourism management system'
    },
    {
      name: 'Emove',
      icon: Zap,
      description: language === 'es'
        ? 'Solución de movilidad inteligente'
        : 'Smart mobility solution'
    },
    {
      name: 'Hangloose Ibiza',
      icon: Sparkles,
      description: language === 'es'
        ? 'Gestión premium de experiencias'
        : 'Premium experience management'
    },
    {
      name: 'Salvador Ibiza',
      icon: Building2,
      description: language === 'es'
        ? 'Plataforma de servicios integrados'
        : 'Integrated services platform'
    }
  ]

  const timeline = [
    {
      year: language === 'es' ? 'El Problema' : 'The Problem',
      title: language === 'es' ? 'Excel y llamadas sin parar' : 'Excel and non-stop calls',
      description: language === 'es'
        ? 'Gestionábamos nuestro propio negocio de trasteros con hojas de cálculo. Cada llamada era un caos: "¿Tienen unidades libres?", "¿Cuánto cuesta?". Perdíamos clientes y tiempo.'
        : 'We managed our own storage business with spreadsheets. Every call was chaos: "Do you have units available?", "How much does it cost?". We were losing customers and time.',
      icon: FileSpreadsheet,
      color: 'red'
    },
    {
      year: language === 'es' ? 'La Revelación' : 'The Revelation',
      title: language === 'es' ? 'Tiene que haber una mejor forma' : 'There has to be a better way',
      description: language === 'es'
        ? 'Después de meses de frustración, decidimos construir la solución que necesitábamos. Si nosotros sufrimos esto, miles de negocios también.'
        : 'After months of frustration, we decided to build the solution we needed. If we suffered this, thousands of businesses do too.',
      icon: Sparkles,
      color: 'yellow'
    },
    {
      year: language === 'es' ? 'La Solución' : 'The Solution',
      title: language === 'es' ? 'StorageFy nace' : 'StorageFy is born',
      description: language === 'es'
        ? 'Combinamos nuestra experiencia como propietarios con nuestro expertise técnico. El resultado: un software que realmente entiende el negocio.'
        : 'We combined our experience as owners with our technical expertise. The result: software that truly understands the business.',
      icon: Rocket,
      color: 'green'
    },
    {
      year: language === 'es' ? 'Hoy' : 'Today',
      title: language === 'es' ? 'Simplificando vidas' : 'Simplifying lives',
      description: language === 'es'
        ? 'Somos una startup innovadora que está transformando la gestión de trasteros en España con tecnología moderna y enfoque en el cliente.'
        : 'We are an innovative startup that is transforming storage management in Spain with modern technology and customer focus.',
      icon: Award,
      color: 'blue'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: language === 'es' ? 'Empatía Real' : 'Real Empathy',
      description: language === 'es'
        ? 'No somos solo desarrolladores. Somos propietarios que vivieron el problema. Entendemos cada frustración.'
        : 'We\'re not just developers. We\'re owners who lived the problem. We understand every frustration.'
    },
    {
      icon: Code,
      title: language === 'es' ? 'Excelencia Técnica' : 'Technical Excellence',
      description: language === 'es'
        ? 'Nuestro equipo ha trabajado en empresas como Public.com. Llevamos tecnología de Silicon Valley a los trasteros.'
        : 'Our team has worked at companies like Public.com. We bring Silicon Valley tech to storage.'
    },
    {
      icon: TrendingUp,
      title: language === 'es' ? 'Crecimiento Conjunto' : 'Mutual Growth',
      description: language === 'es'
        ? 'Tu éxito es nuestro éxito. Cada feature que construimos está diseñada para aumentar tu ocupación y reducir tu carga operativa.'
        : 'Your success is our success. Every feature we build is designed to increase your occupancy and reduce operational burden.'
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Confianza Total' : 'Complete Trust',
      description: language === 'es'
        ? 'Gestionamos datos sensibles. La seguridad y privacidad no son opcionales, son nuestra prioridad número uno.'
        : 'We handle sensitive data. Security and privacy aren\'t optional, they\'re our number one priority.'
    }
  ]

  const stats = [
    { value: '50+', label: language === 'es' ? 'Negocios Confían en Nosotros' : 'Businesses Trust Us' },
    { value: '5+', label: language === 'es' ? 'Productos Exitosos Creados' : 'Successful Products Created' },
    { value: '99.9%', label: language === 'es' ? 'Uptime Garantizado' : 'Guaranteed Uptime' },
    { value: '24/7', label: language === 'es' ? 'Soporte Dedicado' : 'Dedicated Support' }
  ]

  const roadmap = [
    {
      icon: Globe,
      title: language === 'es' ? 'España' : 'Spain',
      status: language === 'es' ? 'Activo' : 'Active',
      description: language === 'es' ? 'Base sólida en el mercado español' : 'Strong base in Spanish market',
      color: 'green'
    },
    {
      icon: Globe,
      title: language === 'es' ? 'Hispanoamérica' : 'Latin America',
      status: language === 'es' ? 'En progreso' : 'In progress',
      description: language === 'es' ? 'Expansión a mercados de habla hispana' : 'Expansion to Spanish-speaking markets',
      color: 'blue'
    },
    {
      icon: Globe,
      title: language === 'es' ? 'Portugal y Brasil' : 'Portugal and Brazil',
      status: language === 'es' ? 'Próximamente' : 'Coming soon',
      description: language === 'es' ? 'Mercados de habla portuguesa' : 'Portuguese-speaking markets',
      color: 'purple'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
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
              <Heart className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Nuestra Historia' : 'Our Story'}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'De propietarios frustrados' : 'From frustrated owners'}
              </span>
              <br />
              <span className="text-primary-800">
                {language === 'es' ? 'a solución profesional' : 'to professional solution'}
              </span>
            </h1>

            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'StorageFy nació de la frustración real de gestionar un negocio de trasteros con Excel y llamadas telefónicas. Hoy simplificamos la vida de cientos de negocios en España y nos expandimos al mundo.'
                : 'StorageFy was born from the real frustration of managing a storage business with Excel and phone calls. Today we simplify the lives of hundreds of businesses in Spain and expand worldwide.'
              }
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* The Problem - Visual Story */}
      <section className="py-24 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-primary-800">
                {language === 'es' ? 'El problema que vivimos' : 'The problem we lived'}
              </span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Antes de StorageFy, esta era nuestra realidad diaria...'
                : 'Before StorageFy, this was our daily reality...'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-red-100 rounded-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <FileSpreadsheet className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold text-primary-800">
                    {language === 'es' ? 'Antes' : 'Before'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: FileSpreadsheet, text: language === 'es' ? 'Excel interminable' : 'Endless Excel sheets' },
                    { icon: Phone, text: language === 'es' ? 'Llamadas constantes' : 'Constant phone calls' },
                    { icon: Users, text: language === 'es' ? 'Clientes perdidos' : 'Lost customers' },
                    { icon: TrendingUp, text: language === 'es' ? 'Errores manuales' : 'Manual errors' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-primary-700"
                    >
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent-100 rounded-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-accent-200">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-8 h-8 text-accent-600" />
                  <h3 className="text-2xl font-bold text-primary-800">
                    {language === 'es' ? 'Ahora' : 'Now'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Smartphone, text: language === 'es' ? 'Todo digitalizado' : 'Everything digitized' },
                    { icon: Zap, text: language === 'es' ? 'Automatización total' : 'Total automation' },
                    { icon: BarChart3, text: language === 'es' ? 'Analytics en tiempo real' : 'Real-time analytics' },
                    { icon: CheckCircle, text: language === 'es' ? 'Cero errores' : 'Zero errors' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-primary-700"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-accent-600" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Nuestro viaje' : 'Our journey'}
              </span>
            </h2>
          </FadeInUp>

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon
              const colorClasses = {
                red: 'from-red-500 to-red-600 bg-red-100',
                yellow: 'from-yellow-500 to-yellow-600 bg-yellow-100',
                green: 'from-green-500 to-green-600 bg-green-100',
                blue: 'from-blue-500 to-blue-600 bg-blue-100'
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-sm font-semibold text-accent-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-primary-800 mb-2">{item.title}</h3>
                      <p className="text-primary-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {index < timeline.length - 1 && (
                    <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-accent-200 to-transparent"></div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              {language === 'es' ? 'El impacto que generamos' : 'The impact we generate'}
            </h2>
          </FadeInUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass-dark p-8 rounded-2xl border border-white/10"
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Nuestros valores' : 'Our values'}
              </span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Lo que nos define y guía cada decisión que tomamos.'
                : 'What defines us and guides every decision we make.'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-3">{value.title}</h3>
                  <p className="text-primary-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-200 mb-6"
            >
              <Award className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">
                {language === 'es' ? 'Nuestro Portfolio' : 'Our Portfolio'}
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-primary-800">
                {language === 'es' ? 'Experiencia probada' : 'Proven experience'}
              </span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Antes de StorageFy, creamos productos exitosos que transformaron industrias. Nuestro equipo tiene el expertise técnico de empresas como Public.com.'
                : 'Before StorageFy, we created successful products that transformed industries. Our team has technical expertise from companies like Public.com.'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolio.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-accent-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{project.name}</h3>
                  <p className="text-sm text-primary-600">{project.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8 text-center"
          >
            <Code className="w-12 h-12 text-accent-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              {language === 'es' ? 'Equipo de Silicon Valley' : 'Silicon Valley Team'}
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Nuestros desarrolladores han trabajado en empresas como Public.com, trayendo tecnología de clase mundial a cada producto que construimos.'
                : 'Our developers have worked at companies like Public.com, bringing world-class technology to every product we build.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">
                {language === 'es' ? 'Hacia dónde vamos' : 'Where we\'re going'}
              </span>
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Nuestra misión: simplificar la gestión de trasteros en todo el mundo hispanohablante y lusófono.'
                : 'Our mission: simplify storage management across the Spanish and Portuguese-speaking world.'
              }
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {roadmap.map((phase, index) => {
              const Icon = phase.icon
              const colorClasses = {
                green: 'from-green-500 to-green-600 bg-green-100 text-green-700',
                blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-700',
                purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-700'
              }

              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-accent-200 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${colorClasses[phase.color as keyof typeof colorClasses]} rounded-xl mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${colorClasses[phase.color as keyof typeof colorClasses].split(' ')[2]} ${colorClasses[phase.color as keyof typeof colorClasses].split(' ')[3]}`}>
                    {phase.status}
                  </div>

                  <h3 className="text-xl font-bold text-primary-800 mb-2">{phase.title}</h3>
                  <p className="text-primary-600 text-sm">{phase.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp>
            <Heart className="w-16 h-16 text-accent-400 mx-auto mb-6" />
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              {language === 'es' ? 'Construyamos juntos el futuro' : 'Let\'s build the future together'}
            </h2>

            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {language === 'es'
                ? 'Si nosotros pudimos transformar nuestro negocio de trasteros, tú también puedes. Únete a la revolución y simplifica tu gestión hoy.'
                : 'If we could transform our storage business, you can too. Join the revolution and simplify your management today.'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {language === 'es' ? 'Probar StorageFy Gratis' : 'Try StorageFy Free'}
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                {language === 'es' ? 'Conoce al Equipo' : 'Meet the Team'}
              </motion.a>
            </div>

            <p className="mt-8 text-sm text-white/60">
              {language === 'es' 
                ? 'Hecho con ❤️ en España por propietarios, para propietarios' 
                : 'Made with ❤️ in Spain by owners, for owners'
              }
            </p>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
