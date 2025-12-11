'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ShieldCheck, Settings2, Cookie } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { consentManager, ConsentState } from '@/lib/privacy/consent-manager'
import CookiePreferencesModal from '@/components/privacy/CookiePreferencesModal'

const translations = {
  es: {
    title: 'Controla tus cookies',
    description:
      'Usamos cookies para mejorar tu experiencia, medir el rendimiento y, con tu permiso, activar herramientas de Google Ads y Analytics.',
    acceptAll: 'Aceptar todas',
    rejectAll: 'Solo necesarias',
    preferences: 'Personalizar',
    manageLabel: 'Preferencias de cookies',
  },
  en: {
    title: 'Control your cookies',
    description:
      'We use cookies to improve your experience, measure performance and, with your consent, enable Google Ads and Analytics tools.',
    acceptAll: 'Accept all',
    rejectAll: 'Necessary only',
    preferences: 'Customize',
    manageLabel: 'Cookie preferences',
  },
}

const defaultConsentState: ConsentState = {
  decision: 'unknown',
  version: '',
  updatedAt: null,
  preferences: {
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
  },
  metadata: null,
}

export default function CookieBanner() {
  const { language } = useLanguage()
  const [consentState, setConsentState] = useState<ConsentState>(defaultConsentState)
  const [showModal, setShowModal] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Solo obtener el estado del cliente después del mount
    setConsentState(consentManager.getState())
  }, [])

  useEffect(() => {
    if (!isMounted) return
    const unsubscribe = consentManager.subscribe(setConsentState)
    return () => {
      unsubscribe()
    }
  }, [isMounted])

  const shouldDisplayBanner = consentState.decision === 'unknown'
  const bannerMessage = useMemo(() => translations[language], [language])

  // No renderizar nada en el servidor para evitar problemas de hidratación
  if (!isMounted) {
    return null
  }

  return (
    <>
      <AnimatePresence>
        {shouldDisplayBanner && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="pointer-events-auto fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-6"
            suppressHydrationWarning
          >
            <div className="w-full max-w-4xl rounded-3xl bg-white/90 p-6 shadow-2xl backdrop-blur-lg ring-1 ring-primary-100">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 items-start gap-4">
                  <div className="rounded-2xl bg-accent-100 p-3 text-accent-600">
                    <Cookie className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-primary-900">{bannerMessage.title}</p>
                    <p className="text-sm text-primary-600">{bannerMessage.description}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:w-auto md:flex-row">
                  <button
                    onClick={() => consentManager.acceptAll('banner')}
                    className="rounded-full bg-accent-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-600"
                  >
                    {bannerMessage.acceptAll}
                  </button>
                  <button
                    onClick={() => consentManager.rejectNonEssential('banner')}
                    className="rounded-full border border-primary-200 px-5 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
                  >
                    {bannerMessage.rejectAll}
                  </button>
                  <button
                    onClick={() => setShowModal(true)}
                    className="rounded-full bg-primary-900/90 px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-900"
                  >
                    {bannerMessage.preferences}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {consentState.decision !== 'unknown' && (
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            onClick={() => setShowModal(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary-900 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-primary-800"
            aria-label={bannerMessage.manageLabel}
            suppressHydrationWarning
          >
            <Settings2 className="h-4 w-4" aria-hidden="true" />
            <span>{bannerMessage.manageLabel}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <CookiePreferencesModal
        open={showModal}
        onClose={() => setShowModal(false)}
        initialPreferences={consentState.preferences}
      />

      {process.env.NODE_ENV === 'development' && isMounted && (
        <button
          onClick={() => consentManager.reset()}
          className="fixed bottom-6 left-6 z-40 rounded-full border border-dashed border-gray-300 px-3 py-1 text-xs text-gray-500 hover:bg-gray-100"
        >
          Reset cookies (dev)
        </button>
      )}

      {consentState.decision !== 'unknown' && (
        <div className="sr-only" aria-live="polite">
          {language === 'es'
            ? 'Preferencias de cookies guardadas. Puedes modificarlas con el botón de gestión.'
            : 'Cookie preferences saved. You can edit them anytime using the manage button.'}
        </div>
      )}
    </>
  )
}


