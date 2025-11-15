'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, SlidersHorizontal } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import {
  cookieCategories,
  cookieCategoryOrder,
  cookieInventory,
  CookieCategory,
} from '@/lib/privacy/cookies-config'
import { ConsentPreferences, consentManager } from '@/lib/privacy/consent-manager'

// Componente de toggle que evita problemas de hidratación
function ToggleSwitch({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean
  disabled?: boolean
  onChange: () => void
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      onClick={onChange}
      disabled={disabled}
      className={`group relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-all duration-300 ease-out ${
        checked
          ? 'bg-gradient-to-r from-accent-500 to-accent-600 shadow-md shadow-accent-500/25'
          : 'bg-gray-200'
      } ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:scale-105 active:scale-95'}`}
      role="switch"
      aria-checked={checked}
    >
      {mounted ? (
        <motion.span
          className="absolute inline-block h-4 w-4 rounded-full bg-white shadow-md"
          initial={false}
          animate={{
            x: checked ? 24 : 2,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 35,
          }}
        />
      ) : (
        <span
          className="absolute inline-block h-4 w-4 rounded-full bg-white shadow-md"
          style={{ left: checked ? '24px' : '2px' }}
        />
      )}
    </button>
  )
}

interface CookiePreferencesModalProps {
  open: boolean
  onClose: () => void
  initialPreferences: ConsentPreferences
}

const translations = {
  es: {
    title: 'Preferencias de cookies',
    description:
      'Personaliza el uso de cookies por categoría. Puedes cambiarlas en cualquier momento.',
    save: 'Guardar preferencias',
    acceptAll: 'Aceptar todas',
    rejectAll: 'Rechazar no esenciales',
    info: 'Información detallada',
    cookiesUsed: 'Cookies utilizadas',
    statusActive: 'Activa',
    statusPlanned: 'Planificada',
  },
  en: {
    title: 'Cookie preferences',
    description: 'Customize cookie usage per category. You can update this anytime.',
    save: 'Save preferences',
    acceptAll: 'Accept all',
    rejectAll: 'Reject non-essential',
    info: 'Detailed information',
    cookiesUsed: 'Cookies used',
    statusActive: 'Active',
    statusPlanned: 'Planned',
  },
}

export default function CookiePreferencesModal({
  open,
  onClose,
  initialPreferences,
}: CookiePreferencesModalProps) {
  const { language } = useLanguage()
  const [preferences, setPreferences] = useState<ConsentPreferences>(initialPreferences)

  useEffect(() => {
    if (open) {
      setPreferences(initialPreferences)
    }
  }, [open, initialPreferences])

  const groupedCookies = useMemo(() => {
    return cookieCategoryOrder.reduce<Record<CookieCategory, typeof cookieInventory>>(
      (acc, category) => {
        acc[category] = cookieInventory.filter(cookie => cookie.category === category)
        return acc
      },
      {} as Record<CookieCategory, typeof cookieInventory>,
    )
  }, [])

  const toggleCategory = (category: CookieCategory) => {
    if (category === 'necessary') return
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const handleSave = () => {
    consentManager.savePreferences(preferences, 'modal')
    onClose()
  }

  const handleAcceptAll = () => {
    consentManager.acceptAll('modal')
    onClose()
  }

  const handleRejectAll = () => {
    consentManager.rejectNonEssential('modal')
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-full max-w-3xl max-h-[90vh] rounded-2xl bg-white shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-accent-100 p-2 text-accent-600">
                  <SlidersHorizontal className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-primary-900">
                    {translations[language].title}
                  </h2>
                  <p className="text-xs text-primary-500">
                    {translations[language].description}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-primary-500 transition hover:bg-primary-50 shrink-0"
                aria-label="Close cookie preferences"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1">
              <div className="grid gap-4 px-6 py-4 lg:grid-cols-[1fr_280px]">
                <div className="space-y-3">
                  {cookieCategories.map(category => (
                    <div
                      key={category.id}
                      className="rounded-xl border border-gray-100 bg-gray-50/60 p-4 transition hover:border-accent-200"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="text-base font-semibold text-primary-900">
                              {category.title[language]}
                            </p>
                            {category.required && (
                              <span className="rounded-full bg-primary-100 px-2 py-0.5 text-[10px] font-medium text-primary-600 shrink-0">
                                {language === 'es' ? 'Siempre activo' : 'Always on'}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-primary-500 mt-1">
                            {category.description[language]}
                          </p>
                        </div>
                        <ToggleSwitch
                          checked={preferences[category.id]}
                          disabled={category.required}
                          onChange={() => toggleCategory(category.id)}
                        />
                      </div>

                      {groupedCookies[category.id].length > 0 && (
                        <div className="mt-3 rounded-lg bg-white p-3 text-xs text-primary-600 shadow-inner">
                          <p className="mb-2 font-medium text-primary-800 text-xs">
                            {translations[language].cookiesUsed}
                          </p>
                          <div className="space-y-2">
                            {groupedCookies[category.id].map(cookie => (
                              <div
                                key={cookie.id}
                                className="flex flex-col gap-1 rounded-lg border border-gray-100 p-2"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <p className="font-semibold text-primary-900 text-[11px]">{cookie.name}</p>
                                  <span
                                    className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold shrink-0 ${
                                      cookie.status === 'active'
                                        ? 'bg-emerald-50 text-emerald-700'
                                        : 'bg-amber-50 text-amber-600'
                                    }`}
                                  >
                                    {cookie.status === 'active'
                                      ? translations[language].statusActive
                                      : translations[language].statusPlanned}
                                  </span>
                                </div>
                                <p className="text-primary-500 text-[10px] leading-tight">
                                  {cookie.purpose[language]}
                                </p>
                                <div className="flex flex-wrap gap-1.5 text-[9px] font-medium text-primary-500">
                                  <span className="rounded-full bg-gray-100 px-1.5 py-0.5">
                                    {cookie.provider}
                                  </span>
                                  <span className="rounded-full bg-gray-100 px-1.5 py-0.5">
                                    {cookie.duration}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 lg:sticky lg:top-4">
                  <div className="rounded-xl border border-primary-100 bg-primary-50/70 p-4 text-primary-700">
                    <div className="mb-2 flex items-center gap-2 text-primary-900">
                      <ShieldCheck className="h-4 w-4 shrink-0" />
                      <p className="font-semibold text-sm">
                        {language === 'es' ? 'Cumplimiento RGPD' : 'GDPR compliance'}
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed">
                      {language === 'es'
                        ? 'Guardamos tu elección con sello de tiempo y puedes cambiarla en cualquier momento desde este panel.'
                        : 'We store your dated decision and you can change it anytime from this panel.'}
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="mb-3 text-xs text-primary-500">
                      {translations[language].info}
                    </p>
                    <div className="space-y-2">
                      <button
                        onClick={handleAcceptAll}
                        className="w-full rounded-full bg-accent-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-accent-600"
                      >
                        {translations[language].acceptAll}
                      </button>
                      <button
                        onClick={handleRejectAll}
                        className="w-full rounded-full border border-primary-200 px-4 py-2 text-xs font-semibold text-primary-700 transition hover:bg-primary-50"
                      >
                        {translations[language].rejectAll}
                      </button>
                      <button
                        onClick={handleSave}
                        className="w-full rounded-full bg-primary-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-800"
                      >
                        {translations[language].save}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


