'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Zap,
  Shield,
  Layout,
  ArrowRight,
  Check,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/lib/context/LanguageContext'
import LinkWithLang from '@/components/common/LinkWithLang'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function WebsitePageClient() {
  const { language } = useLanguage()

  const includes = [
    {
      icon: Layout,
      title: language === 'es' ? 'Página profesional' : 'Professional page',
      desc: language === 'es'
        ? 'Diseño limpio, SEO optimizado, responsive. Hero, beneficios, FAQ, contacto.'
        : 'Clean design, SEO optimized, responsive. Hero, benefits, FAQ, contact.',
    },
    {
      icon: Zap,
      title: language === 'es' ? 'Widget reservas 24/7' : '24/7 booking widget',
      desc: language === 'es'
        ? 'Disponibilidad en tiempo real. Tus clientes reservan y pagan sin llamar.'
        : 'Real-time availability. Your clients book and pay without calling.',
    },
    {
      icon: Globe,
      title: language === 'es' ? 'Dominio incluido' : 'Domain included',
      desc: language === 'es'
        ? 'Tu propio dominio (.es, .com). Nosotros lo gestionamos.'
        : 'Your own domain (.es, .com). We manage it for you.',
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Hosting en Vercel' : 'Vercel hosting',
      desc: language === 'es'
        ? 'Rápido, seguro, SSL. Sin caídas ni mantenimiento.'
        : 'Fast, secure, SSL. No downtime, no maintenance.',
    },
  ]

  const examples = [
    {
      name: 'Trasteros Ibiza',
      url: 'https://www.trasteros-ibiza.com',
      tag: language === 'es' ? 'Almacenamiento seguro desde 55€/mes' : 'Secure storage from 55€/month',
      screenshot: language === 'es'
        ? '/images/Captura de pantalla 2026-03-15 a las 20.31.54.png'
        : '/images/Captura de pantalla 2026-03-15 a las 20.27.23.png',
    },
    {
      name: 'MoreSpace Ibiza',
      url: 'https://morespace.vercel.app',
      tag: language === 'es' ? 'Trasteros en contenedores desde 205€/mes' : 'Container storage from 205€/month',
      screenshot: '/images/Captura de pantalla 2026-03-15 a las 20.27.36.png',
    },
  ]

  const whatsappMsg = language === 'es'
    ? 'Hola%2C%20me%20interesa%20el%20servicio%20de%20p%C3%A1gina%20web%20para%20trasteros.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s.'
    : 'Hello%2C%20I%27m%20interested%20in%20the%20website%20service%20for%20storage%20businesses.%20I%27d%20like%20to%20know%20more.'
  const whatsappMsgStart = language === 'es'
    ? 'Hola%2C%20quiero%20contratar%20el%20servicio%20de%20p%C3%A1gina%20web%20por%2019%E2%82%AC%2Fmes.'
    : 'Hello%2C%20I%20want%20to%20sign%20up%20for%20the%20website%20service%20at%2019%E2%82%AC%2Fmonth.'

  return (
    <main className="min-h-screen bg-[#050506] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(124,179,66,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_80%,rgba(124,179,66,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_60%,rgba(124,179,66,0.04),transparent_50%)]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-zinc-300">
              {language === 'es' ? 'Servicio nuevo' : 'New service'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tighter"
          >
            <span className="block text-white">
              {language === 'es' ? 'Tu negocio' : 'Your business'}
            </span>
            <span className="block bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 bg-clip-text text-transparent">
              {language === 'es' ? 'sin web?' : 'no website?'}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-xl sm:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            {language === 'es'
              ? 'Te creamos una web profesional en días. Widget de reservas 24/7, dominio incluido, hosting en Vercel. Sin complicaciones.'
              : 'We create a professional website in days. 24/7 booking widget, domain included, Vercel hosting. No hassle.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`https://wa.me/34871242642?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-black font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(124,179,66,0.4)]"
            >
              {language === 'es' ? 'Hablar por WhatsApp' : 'Chat on WhatsApp'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <LinkWithLang
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/5"
            >
              {language === 'es' ? 'Contactar' : 'Contact'}
            </LinkWithLang>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
          >
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-500" />
              {language === 'es' ? 'Desde 19€/mes' : 'From 19€/month'}
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-500" />
              {language === 'es' ? 'Dominio incluido' : 'Domain included'}
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-500" />
              {language === 'es' ? 'Widget 24/7' : '24/7 widget'}
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Problem → Solution */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <p className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-4">
                {language === 'es' ? 'El problema' : 'The problem'}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-zinc-200">
                {language === 'es'
                  ? 'Tienes trasteros. Tienes clientes. Pero no presencia online.'
                  : 'You have storage. You have clients. But no online presence.'}
              </h2>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                {language === 'es'
                  ? 'Mientras tus competidores capturan reservas 24/7, tú dependes del teléfono. Pierdes clientes que buscan en Google.'
                  : 'While your competitors capture bookings 24/7, you depend on the phone. You lose clients who search on Google.'}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-4">
                  {language === 'es' ? 'La solución' : 'The solution'}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {language === 'es'
                    ? 'Web profesional en días, no meses.'
                    : 'Professional website in days, not months.'}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Plantilla probada, widget de StorageFy integrado, dominio y hosting incluidos. Tu negocio online en una semana.'
                    : 'Proven template, StorageFy widget integrated, domain and hosting included. Your business online in a week.'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[language === 'es' ? 'Sin código' : 'No code', language === 'es' ? 'Sin mantenimiento' : 'No maintenance', language === 'es' ? 'SEO básico' : 'Basic SEO'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* What's included */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-4">
              {language === 'es' ? 'Qué incluye' : "What's included"}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              {language === 'es' ? 'Todo lo que necesitas' : 'Everything you need'}
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {includes.map((inc, i) => {
              const Icon = inc.icon
              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="group p-6 rounded-2xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-accent-500/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{inc.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{inc.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Examples */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-4">
              {language === 'es' ? 'Ejemplos reales' : 'Real examples'}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {language === 'es' ? 'Así quedan las webs' : 'This is how they look'}
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Webs que hemos creado para operadores de trasteros. Haz clic para verlas en vivo.'
                : 'Webs we\'ve built for storage operators. Click to see them live.'}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {examples.map((ex, i) => (
              <motion.a
                key={i}
                variants={item}
                href={ex.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-zinc-900/50 overflow-hidden hover:border-accent-500/40 hover:shadow-[0_0_60px_rgba(124,179,66,0.1)] transition-all duration-500"
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/80 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-zinc-600" />
                    <span className="w-3 h-3 rounded-full bg-zinc-600" />
                    <span className="w-3 h-3 rounded-full bg-zinc-600" />
                  </div>
                  <div className="flex-1 mx-4 py-1.5 px-3 rounded-lg bg-zinc-900/80 text-xs text-zinc-500 truncate">
                    {ex.url.replace('https://', '')}
                  </div>
                </div>
                <div className="aspect-video bg-zinc-900 relative overflow-hidden">
                  <Image
                    src={ex.screenshot}
                    alt={ex.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-accent-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{language === 'es' ? 'Visitar sitio' : 'Visit site'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 border-t border-white/5">
                  <h3 className="text-xl font-bold text-white">{ex.name}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{ex.tag}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Pricing */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-accent-500/15 via-accent-500/5 to-transparent p-8 sm:p-12 text-center overflow-hidden shadow-[0_0_80px_rgba(124,179,66,0.08)]"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-wider mb-6">
                {language === 'es' ? 'Todo incluido' : 'All included'}
              </span>
              <p className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-2">
                {language === 'es' ? 'Precio mensual' : 'Monthly price'}
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">19€</span>
                <span className="text-xl text-zinc-400">/mes</span>
              </div>
              <p className="mt-4 text-zinc-400">
                {language === 'es' ? 'IVA no incluido' : 'VAT not included'}
              </p>
              <ul className="mt-8 space-y-3 text-left max-w-xs mx-auto">
                {[
                  language === 'es' ? 'Página web profesional' : 'Professional website',
                  language === 'es' ? 'Widget reservas 24/7' : '24/7 booking widget',
                  language === 'es' ? 'Dominio incluido' : 'Domain included',
                  language === 'es' ? 'Hosting en Vercel' : 'Vercel hosting',
                  language === 'es' ? 'Sin permanencia' : 'No commitment',
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/34871242642?text=${whatsappMsgStart}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-black font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                {language === 'es' ? 'Empezar ahora' : 'Get started'}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Final CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(124,179,66,0.06),transparent)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'es'
                ? '¿Listo para tener presencia online?'
                : 'Ready to go online?'}
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Escríbenos por WhatsApp o email. Te respondemos en menos de 24h.'
                : 'Write to us on WhatsApp or email. We reply in under 24h.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/34871242642?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                WhatsApp
              </a>
              <LinkWithLang
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 rounded-2xl font-semibold transition-all"
              >
                {language === 'es' ? 'Formulario de contacto' : 'Contact form'}
              </LinkWithLang>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
