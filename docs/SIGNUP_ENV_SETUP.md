# Configuración de Variables de Entorno para Signup

Este documento describe las variables de entorno necesarias para el sistema de signup.

## Variables Requeridas

### En desarrollo local (.env.local)

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# API de storagefy.app
STORAGEFY_API_URL=https://storagefy.app/api/public/signup
NEXT_PUBLIC_STORAGEFY_API_URL=https://storagefy.app/api/public/signup
STORAGEFY_API_KEY=sk_live_tu_api_key_aqui

# Email (Resend) - Ya debería existir
RESEND_API_KEY=re_tu_api_key_aqui
```

### En Vercel (Production/Preview)

Ve a **Settings** → **Environment Variables** y agrega:

1. **STORAGEFY_API_URL**
   - Value: `https://storagefy.app/api/public/signup`
   - Environment: Production, Preview, Development

2. **NEXT_PUBLIC_STORAGEFY_API_URL**
   - Value: `https://storagefy.app/api/public/signup`
   - Environment: Production, Preview, Development

3. **STORAGEFY_API_KEY**
   - Value: `sk_live_...` (la API key que te proporcione el equipo de storagefy.app)
   - Environment: Production, Preview, Development
   - **IMPORTANTE**: Esta variable NO debe tener el prefijo `NEXT_PUBLIC_` para mantenerla segura en el servidor

4. **RESEND_API_KEY**
   - Value: `re_...` (ya debería estar configurada)
   - Environment: Production, Preview, Development

## Notas Importantes

- `STORAGEFY_API_KEY` NO debe tener el prefijo `NEXT_PUBLIC_` porque solo se usa en el servidor (en `app/api/signup/route.ts`)
- `NEXT_PUBLIC_STORAGEFY_API_URL` se puede usar en el cliente si es necesario, pero actualmente solo se usa en el servidor
- En desarrollo, si la API Key no está configurada, el sistema seguirá funcionando pero mostrará errores cuando intente llamar a la API de storagefy.app

## Verificación

Para verificar que las variables están configuradas correctamente:

1. En desarrollo: Verifica que `console.log` no muestre valores vacíos o 'dummy-key'
2. En producción: Verifica los logs de Vercel para asegurarte de que las requests a storagefy.app se están haciendo correctamente

## Obtener la API Key

Contacta al equipo de storagefy.app para obtener la API Key que debes usar. Debe ser la misma que está configurada en storagefy.app como `SIGNUP_API_KEY`.

