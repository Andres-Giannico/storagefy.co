'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/context/LanguageContext'
import LinkWithLang from '@/components/common/LinkWithLang'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: '/features', key: 'nav.features' },
    { href: '/pricing', key: 'nav.pricing' },
    { href: '/help', key: 'nav.help' },
    { href: '/about', key: 'nav.about' },
    { href: '/contact', key: 'nav.contact' },
  ]

  const languages: Array<{ code: 'es' | 'en'; name: string; flag: string }> = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen)

  const changeLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang)
    setIsLanguageOpen(false)
  }

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass backdrop-blur-lg border-b border-white/20 shadow-lg'
            : 'bg-transparent',
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <LinkWithLang href="/" className="flex items-center space-x-3">
                <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                  <Image
                    src="/logo.png"
                    alt="StorageFy Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-xl lg:text-2xl font-bold text-gradient">
                  StorageFy
                </span>
              </LinkWithLang>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                >
                  <LinkWithLang
                    href={item.href}
                    className="text-primary-700 hover:text-accent-600 font-medium transition-colors duration-200 relative group block"
                  >
                    {t(item.key)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
                  </LinkWithLang>
                </motion.div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg glass hover:bg-white/10 transition-colors duration-200 hover:scale-105 active:scale-95"
                >
                  <Globe className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-primary-700">
                    {languages.find(lang => lang.code === language)?.flag}
                  </span>
                  <ChevronDown className="w-3 h-3 text-primary-500" />
                </button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 glass rounded-xl shadow-xl border border-white/20 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={cn(
                            'w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 flex items-center space-x-3',
                            language === lang.code && 'bg-accent-50 text-accent-700'
                          )}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sign Up Link */}
              <LinkWithLang href="/signup">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 text-primary-700 hover:text-accent-600 font-semibold transition-colors duration-200 block"
                >
                  {language === 'es' ? 'Registrarse' : 'Sign Up'}
                </motion.span>
              </LinkWithLang>

              {/* CTA Button */}
              <motion.a
                href="https://www.storagefy.app/auth/signin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(124, 179, 66, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('nav.signIn')}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors duration-200"
              aria-label={isOpen ? (language === 'es' ? 'Cerrar menú' : 'Close menu') : (language === 'es' ? 'Abrir menú' : 'Open menu')}
              suppressHydrationWarning
            >
              {!isMounted ? (
                <Menu className="w-6 h-6 text-primary-700" />
              ) : isOpen ? (
                <X className="w-6 h-6 text-primary-700" />
              ) : (
                <Menu className="w-6 h-6 text-primary-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass border-t border-white/20"
            >
              <div className="px-4 py-6 space-y-4">
                
                {/* Mobile Navigation */}
                {navItems.map((item, index) => (
                  <LinkWithLang
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-lg font-medium text-primary-700 hover:text-accent-600 transition-colors duration-200"
                    >
                      {t(item.key)}
                    </motion.span>
                  </LinkWithLang>
                ))}

                <div className="border-t border-white/20 pt-4">
                  
                  {/* Mobile Language Selector */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary-600">
                      {t('nav.language')}
                    </span>
                    <div className="flex space-x-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code as 'es' | 'en')}
                          className={cn(
                            'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200',
                            language === lang.code
                              ? 'bg-accent-100 text-accent-700'
                              : 'glass hover:bg-white/10 text-primary-600'
                          )}
                        >
                          {lang.flag} {lang.code.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Sign Up Link */}
                  <LinkWithLang href="/signup" onClick={() => setIsOpen(false)}>
                    <motion.span
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-6 py-3 border-2 border-accent-500 text-accent-600 font-semibold rounded-full text-center hover:bg-accent-50 transition-all duration-300 mb-3"
                    >
                      {language === 'es' ? 'Registrarse' : 'Sign Up'}
                    </motion.span>
                  </LinkWithLang>

                  {/* Mobile CTA Button */}
                  <motion.a
                    href="https://www.storagefy.app/auth/signin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full text-center hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
                  >
                    {t('nav.signIn')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  )
}

export default Navbar
