'use client'

import { useEffect, useRef } from 'react'
import { consentManager, ConsentPreferences } from '@/lib/privacy/consent-manager'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-VQLJWEECTY'

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>
    gtag: (...args: unknown[]) => void
  }
}

const loadGAScript = () =>
  new Promise<void>((resolve, reject) => {
    if (typeof document === 'undefined' || !GA_ID) {
      resolve()
      return
    }
    if (document.getElementById('ga4-script')) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.id = 'ga4-script'
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load GA script'))
    document.head.appendChild(script)
  })

const updateConsentMode = (prefs: ConsentPreferences) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('consent', 'update', {
    ad_storage: prefs.marketing ? 'granted' : 'denied',
    analytics_storage: prefs.analytics ? 'granted' : 'denied',
    functionality_storage: prefs.preferences ? 'granted' : 'denied',
    security_storage: 'granted',
  })
}

export default function AnalyticsManager() {
  useEffect(() => {
    if (!GA_ID) return undefined
    
    const unsubscribe = consentManager.subscribe(async state => {
      if (state.decision === 'unknown') {
        // Mantener consent mode en 'denied' hasta que el usuario decida
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('consent', 'update', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'denied',
            security_storage: 'granted',
          })
        }
        return
      }

      // Actualizar consent mode según las preferencias del usuario
      updateConsentMode(state.preferences)

      // Si el usuario acepta analytics, actualizar la configuración
      if (state.preferences.analytics && typeof window.gtag === 'function') {
        window.gtag('config', GA_ID, {
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: state.preferences.marketing,
          transport_type: 'beacon',
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return null
}


