'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'

const Footer = () => {
  const { language } = useLanguage()

  const quickLinks = [
    { label: language === 'es' ? 'Inicio' : 'Home', href: '/' },
    { label: language === 'es' ? 'Características' : 'Features', href: '/features' },
    { label: language === 'es' ? 'Precios' : 'Pricing', href: '/pricing' },
    { label: language === 'es' ? 'Centro de Ayuda' : 'Help Center', href: '/help' },
    { label: language === 'es' ? 'Comparativa' : 'Comparison', href: '/comparativa' },
    { label: language === 'es' ? 'Onboarding' : 'Onboarding', href: '/onboarding' },
    { label: language === 'es' ? 'Integraciones' : 'Integrations', href: '/integraciones' },
    { label: language === 'es' ? 'Recursos' : 'Resources', href: '/recursos' },
    { label: language === 'es' ? 'Nosotros' : 'About', href: '/about' },
    { label: language === 'es' ? 'Preguntas Frecuentes' : 'FAQs', href: '/faq' },
    { label: language === 'es' ? 'Contacto' : 'Contact', href: '/contact' },
  ]

  const legalLinks = [
    { label: language === 'es' ? 'Términos de Servicio' : 'Terms of Service', href: '/terms' },
    { label: language === 'es' ? 'Política de Privacidad' : 'Privacy Policy', href: '/privacy' },
    { label: language === 'es' ? 'Política de Cookies' : 'Cookie Policy', href: '/cookies' },
  ]

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/storagefy', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/storagefy', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/storagefy', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/company/storagefy', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="py-8 border-b border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 border border-gray-200"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                {language === 'es' ? '🟢 Sistema Operativo' : '🟢 System Online'}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 border border-gray-200"
            >
              <span className="text-sm font-medium text-gray-700">
                {language === 'es' ? '🔒 SSL Seguro' : '🔒 SSL Secure'}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 border border-gray-200"
            >
              <span className="text-sm font-medium text-gray-700">
                {language === 'es' ? '✓ RGPD Compliant' : '✓ GDPR Compliant'}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 border border-gray-200"
            >
              <span className="text-sm font-medium text-gray-700">
                {language === 'es' ? '🇪🇸 Datos en España' : '🇪🇸 Data in Spain'}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 border border-gray-200"
            >
              <span className="text-sm font-medium text-gray-700">
                {language === 'es' ? '⚡ Más de 50 negocios' : '⚡ 50+ businesses'}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section - Column 1 */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="StorageFy Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
                  StorageFy
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {language === 'es' 
                  ? 'El software más avanzado de gestión de trasteros. Digitaliza, automatiza y escala tu negocio.'
                  : 'The most advanced storage management software. Digitalize, automate and scale your business.'
                }
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0" />
                  <span>Ibiza, España 🇪🇸</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-accent-600 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" />
                  <a href="mailto:hola@storagefy.co">hola@storagefy.co</a>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <a href="tel:+34871242618" className="text-gray-600 hover:text-accent-600 transition-colors duration-200">
                    +34 871 242 618
                  </a>
                  <a href="tel:+34871242616" className="text-gray-600 hover:text-accent-600 transition-colors duration-200">
                    +34 871 242 616
                  </a>
                  <a href="tel:+34871242628" className="text-gray-600 hover:text-accent-600 transition-colors duration-200">
                    +34 871 242 628
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links - Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">
              {language === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-accent-600 transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal - Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-accent-600 transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social - Column 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">
              {language === 'es' ? 'Conéctate con Nosotros' : 'Connect with Us'}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:border-accent-500 hover:bg-accent-50 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-gray-600 group-hover:text-accent-600 transition-colors duration-200" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <p className="text-gray-600">
                © 2025{' '}
                <a href="/" className="text-accent-600 hover:text-accent-700 font-semibold transition-colors duration-200">
                  StorageFy
                </a>
                . {language === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'}
              </p>
            </motion.div>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <p className="text-gray-500 text-sm flex items-center gap-1">
                {language === 'es' ? 'Hecho con' : 'Made with'}{' '}
                <span className="text-red-500 animate-pulse">❤️</span>{' '}
                {language === 'es' ? 'en España' : 'in Spain'} 🇪🇸
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer