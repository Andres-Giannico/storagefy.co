# CMP de StorageFy

## Flujo funcional

1. **Banner inicial** (`CookieBanner`) bloquea toda carga no esencial hasta que el usuario decida.  
2. **Panel de preferencias** (`CookiePreferencesModal`) ofrece control granular por categoría y detalle del inventario.  
3. **Gestor de estado** (`lib/privacy/consent-manager.ts`) persiste la decisión en `localStorage` (`sfy_consent`) y expone una API global `window.StoragefyPrivacy`.  
4. **Integraciones** se suscriben al gestor (p. ej. `AnalyticsManager`) y solo inician scripts cuando la categoría correspondiente tiene consentimiento.  
5. **Reapertura / revocación**: un botón flotante permite reabrir el panel. El banner puede forzarse ejecutando `window.StoragefyPrivacy.resetConsent()`.

## Contrato de datos

- `lib/privacy/cookies-config.ts` define categorías (`necessary`, `preferences`, `analytics`, `marketing`) y el inventario completo de cookies.  
- Actualiza `CONSENT_VERSION` al modificar textos o categorías; obliga a renovar el consentimiento.

## Reglas clave

- Las cookies necesarias siempre se marcan como activas y nunca dependen de interacción.  
- Las decisiones se guardan con sello ISO (`updatedAt`) y versión aceptada.  
- Ante cambios regulatorios, incrementa la versión y añade una entrada al changelog (`docs/privacy/revisions.md` cuando exista).  
- Google Analytics 4 solo se carga si `NEXT_PUBLIC_GA_MEASUREMENT_ID` está configurado **y** el usuario acepta la categoría `analytics`.

## Pruebas locales

1. Ejecuta `npm run dev` usando HTTPS local (recomendado con `mkcert`) para validar cookies `SameSite`.  
2. Borra / restablece consentimiento con el botón “Reset cookies (dev)” o `localStorage.removeItem('storagefy-consent-v1')`.  
3. Verifica en DevTools > Application > Storage que únicamente existan cookies necesarias cuando se rechaza todo.  
4. Usa Lighthouse > Best Practices / Privacy para auditar el banner.

## Futuras integraciones

- Añade nuevos scripts (Hotjar, Ads, etc.) suscribiéndose al `consentManager`.  
- Extiende `cookieInventory` con las cookies asociadas y marca `status: 'planned'` hasta que se desplieguen.  
- Para Tag Manager Server-Side, reutiliza la misma actualización de `gtag('consent', 'update')`.


