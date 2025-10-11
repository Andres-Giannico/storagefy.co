# StorageFy 🚀

El software más avanzado de gestión de trasteros. Controla tus espacios con precisión, elegancia y control total.

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS (modo JIT)
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Optimización**: next/image

## Estructura del Proyecto

```
storagefy.co/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout raíz
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── layout/            # Componentes de layout
│   ├── sections/          # Secciones de página
│   ├── ui/                # Componentes UI reutilizables
│   └── animations/        # Wrappers de animación
├── lib/
│   └── utils.ts           # Utilidades
├── public/
│   └── images/            # Imágenes y assets
└── tailwind.config.ts     # Configuración de Tailwind
```

## Comenzar

Primero, instala las dependencias:

```bash
npm install
```

Luego, ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Deployment

La aplicación está optimizada para desplegarse en [Vercel](https://vercel.com).

---

Hecho en España 🇪🇸 · © 2025 StorageFy.co

