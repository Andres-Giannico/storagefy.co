# 🏢 StorageFy.co - Landing Page

Landing page oficial de StorageFy, el software más avanzado de gestión de trasteros.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## ✨ Features

- 🌍 Multi-language support (ES/EN)
- 📱 Fully responsive design
- 🎨 Premium animations and transitions
- ⚡ Optimized performance
- 🎯 SEO ready

## 📦 Installation

```bash
npm install
```

## 🔧 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🏗️ Build

```bash
npm run build
```

## 🔐 Privacidad y analítica

- El banner y panel de cookies viven en `components/privacy/`. Puedes forzar su reinicio ejecutando `window.StoragefyPrivacy.resetConsent()` en consola.
- Define `NEXT_PUBLIC_GA_MEASUREMENT_ID` en tu `.env.local` para habilitar Google Analytics 4. El script solo se carga cuando el usuario acepta la categoría **analytics**.
- La versión y el inventario de cookies se gestionan en `lib/privacy/cookies-config.ts`. Actualiza `CONSENT_VERSION` ante cualquier cambio legal para solicitar un nuevo consentimiento.
- Consulta `docs/privacy/cmp.md` para revisar el flujo completo del CMP y las pautas de pruebas locales.

## 📝 License

© 2025 StorageFy. All rights reserved.

---

Made with ❤️ in Spain 🇪🇸
