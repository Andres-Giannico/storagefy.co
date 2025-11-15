'use client'

import { CONSENT_VERSION, CookieCategory, cookieCategoryOrder } from '@/lib/privacy/cookies-config'

export type ConsentDecision = 'unknown' | 'accepted_all' | 'rejected_all' | 'custom'

export type ConsentPreferences = Record<CookieCategory, boolean>

type ConsentSource = 'banner' | 'modal' | 'api'
type ConsentMethod = 'accept_all' | 'reject_all' | 'save'

interface ConsentMetadata {
  source: ConsentSource
  method: ConsentMethod
}

export interface ConsentState {
  decision: ConsentDecision
  version: string
  updatedAt: string | null
  preferences: ConsentPreferences
  metadata: ConsentMetadata | null
}

const STORAGE_KEY = 'storagefy-consent-v1'

const defaultPreferences = (): ConsentPreferences =>
  cookieCategoryOrder.reduce((acc, category) => {
    acc[category] = category === 'necessary'
    return acc
  }, {} as ConsentPreferences)

let inMemoryState: ConsentState = {
  decision: 'unknown',
  version: CONSENT_VERSION,
  updatedAt: null,
  preferences: defaultPreferences(),
  metadata: null,
}

type ConsentListener = (state: ConsentState) => void
const listeners = new Set<ConsentListener>()

const notify = () => {
  listeners.forEach(listener => listener({ ...inMemoryState }))
}

const readFromStorage = (): ConsentState | null => {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentState
    if (parsed.version !== CONSENT_VERSION) return null
    return {
      ...parsed,
      preferences: {
        ...defaultPreferences(),
        ...parsed.preferences,
        necessary: true,
      },
    }
  } catch (error) {
    console.warn('ConsentManager: error parsing consent record', error)
    return null
  }
}

const persistState = (state: ConsentState) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  document.cookie = `sfy_consent=${state.decision};path=/;max-age=${60 * 60 * 24 * 180};SameSite=Lax`
}

const loadState = () => {
  const stored = readFromStorage()
  if (stored) {
    inMemoryState = stored
  }
  notify()
}

if (typeof window !== 'undefined') {
  loadState()
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY && event.newValue) {
      const parsed = JSON.parse(event.newValue) as ConsentState
      inMemoryState = parsed
      notify()
    }
  })
}

const updateState = (
  preferences: Partial<ConsentPreferences>,
  metadata: ConsentMetadata,
  decision: ConsentDecision,
) => {
  inMemoryState = {
    decision,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    preferences: {
      ...defaultPreferences(),
      ...inMemoryState.preferences,
      ...preferences,
      necessary: true,
    },
    metadata,
  }
  persistState(inMemoryState)
  notify()
}

export const consentManager = {
  getState: (): ConsentState => ({ ...inMemoryState }),
  acceptAll: (source: ConsentSource = 'banner') =>
    updateState(
      cookieCategoryOrder.reduce((acc, category) => {
        acc[category] = true
        return acc
      }, {} as ConsentPreferences),
      { source, method: 'accept_all' },
      'accepted_all',
    ),
  rejectNonEssential: (source: ConsentSource = 'banner') =>
    updateState(
      cookieCategoryOrder.reduce((acc, category) => {
        acc[category] = category === 'necessary'
        return acc
      }, {} as ConsentPreferences),
      { source, method: 'reject_all' },
      'rejected_all',
    ),
  savePreferences: (
    preferences: ConsentPreferences,
    source: ConsentSource = 'modal',
  ) =>
    updateState(
      preferences,
      { source, method: 'save' },
      Object.values(preferences).every(Boolean) ? 'accepted_all' : 'custom',
    ),
  reset: () => {
    inMemoryState = {
      decision: 'unknown',
      version: CONSENT_VERSION,
      updatedAt: null,
      preferences: defaultPreferences(),
      metadata: null,
    }
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY)
      document.cookie = 'sfy_consent=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
    }
    notify()
  },
  subscribe: (listener: ConsentListener) => {
    listeners.add(listener)
    listener({ ...inMemoryState })
    return () => listeners.delete(listener)
  },
}

declare global {
  interface Window {
    StoragefyPrivacy?: {
      getConsent: () => ConsentState
      acceptAll: () => void
      rejectAll: () => void
      savePreferences: (prefs: ConsentPreferences) => void
      resetConsent: () => void
    }
  }
}

if (typeof window !== 'undefined') {
  window.StoragefyPrivacy = {
    getConsent: () => consentManager.getState(),
    acceptAll: () => consentManager.acceptAll('api'),
    rejectAll: () => consentManager.rejectNonEssential('api'),
    savePreferences: (prefs: ConsentPreferences) => consentManager.savePreferences(prefs, 'api'),
    resetConsent: () => consentManager.reset(),
  }
}


