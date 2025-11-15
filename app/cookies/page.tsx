'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, FileText, RefreshCcw } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import {
  cookieCategories,
  cookieCategoryOrder,
  cookieInventory,
  CONSENT_VERSION,
} from '@/lib/privacy/cookies-config'
import { consentManager } from '@/lib/privacy/consent-manager'

const translations = {
  es: {
    heroTitle: 'Política de Cookies',
    heroSubtitle:
      'Te explicamos qué datos medimos, cómo configurarlos y cómo cumplimos con el RGPD y la Directiva ePrivacy.',
    updated: 'Última revisión',
    categoriesTitle: 'Categorías de cookies',
    inventoryTitle: 'Inventario detallado',
    manageTitle: 'Gestiona tu consentimiento',
    manageText:
      'Puedes actualizar tu decisión en cualquier momento usando el botón flotante “Preferencias de cookies” o reiniciando el banner desde aquí.',
    resetButton: 'Restablecer banner',
    legalTitle: 'Compromiso de cumplimiento',
    legalBullets: [
      'Consentimiento granular y documentado con sello de tiempo.',
      'Anonimización de IP y minimización de datos en herramientas analíticas.',
      'Revisión anual o ante cambios regulatorios relevantes.',
    ],
  },
  en: {
    heroTitle: 'Cookie Policy',
    heroSubtitle:
      'Learn what we measure, how you can configure it, and how we comply with GDPR and the ePrivacy Directive.',
    updated: 'Last review',
    categoriesTitle: 'Cookie categories',
    inventoryTitle: 'Detailed inventory',
    manageTitle: 'Manage your consent',
    manageText:
      'Update your decision anytime using the “Cookie preferences” floating button or reset the banner here.',
    resetButton: 'Reset banner',
    legalTitle: 'Compliance commitments',
    legalBullets: [
      'Granular consent logged with timestamp.',
      'IP anonymization and data minimisation across analytics tools.',
      'Annual review or whenever regulations change materially.',
    ],
  },
}

export default function CookiesPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/60 via-white to-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16 text-primary-900 lg:flex-row">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-500">{t.updated}</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            {t.heroTitle}
          </h1>
          <p className="mt-4 text-lg text-primary-600">{t.heroSubtitle}</p>
        </div>
        <div className="rounded-3xl border border-primary-100 bg-white/80 p-6 shadow-lg backdrop-blur">
          <div className="flex items-center gap-3 text-primary-700">
            <ShieldCheck className="h-6 w-6 text-accent-500" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">
                RGPD / ePrivacy
              </p>
              <p className="text-xl font-bold">v{CONSENT_VERSION}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-primary-600">
            {t.legalBullets.map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-accent-100 p-3 text-accent-600">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">
              {t.categoriesTitle}
            </p>
            <p className="text-2xl font-semibold text-primary-900">
              {language === 'es' ? 'Cómo clasificamos las cookies' : 'How we classify cookies'}
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {cookieCategoryOrder.map(categoryId => {
            const category = cookieCategories.find(cat => cat.id === categoryId)!
            return (
              <motion.div
                key={category.id}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-semibold text-primary-900">
                      {category.title[language]}
                    </p>
                    <p className="text-sm text-primary-500">
                      {category.description[language]}
                    </p>
                  </div>
                  {category.required && (
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-600">
                      {language === 'es' ? 'Siempre activo' : 'Always on'}
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">
              {t.inventoryTitle}
            </p>
            <p className="text-2xl font-semibold text-primary-900">
              {language === 'es' ? 'Listado completo y finalidad' : 'Complete list and purpose'}
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
          <div className="hidden grid-cols-6 bg-primary-900/90 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white md:grid">
            <p>{language === 'es' ? 'Cookie' : 'Cookie'}</p>
            <p>{language === 'es' ? 'Proveedor' : 'Provider'}</p>
            <p>{language === 'es' ? 'Categoría' : 'Category'}</p>
            <p>{language === 'es' ? 'Duración' : 'Duration'}</p>
            <p>{language === 'es' ? 'Finalidad' : 'Purpose'}</p>
            <p>{language === 'es' ? 'Estado' : 'Status'}</p>
          </div>
          {cookieInventory.map(cookie => (
            <div
              key={cookie.id}
              className="grid gap-3 border-t border-gray-100 bg-white px-6 py-4 text-sm text-primary-700 md:grid-cols-6"
            >
              <p className="font-semibold text-primary-900">{cookie.name}</p>
              <p>{cookie.provider}</p>
              <p className="capitalize">{cookie.category}</p>
              <p>{cookie.duration}</p>
              <p className="text-primary-500">{cookie.purpose[language]}</p>
              <p
                className={`font-semibold ${
                  cookie.status === 'active' ? 'text-emerald-600' : 'text-amber-600'
                }`}
              >
                {cookie.status === 'active'
                  ? language === 'es'
                    ? 'Activa'
                    : 'Active'
                  : language === 'es'
                    ? 'Planificada'
                    : 'Planned'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-3xl border border-primary-100 bg-white/90 p-8 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary-500">{t.manageTitle}</p>
              <p className="mt-2 text-lg text-primary-700">{t.manageText}</p>
            </div>
            <button
              onClick={() => consentManager.reset()}
              className="inline-flex items-center gap-2 rounded-full border border-primary-200 px-5 py-3 text-sm font-semibold text-primary-800 transition hover:bg-primary-50"
            >
              <RefreshCcw className="h-4 w-4" />
              {t.resetButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
