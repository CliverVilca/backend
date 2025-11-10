# Despliegue del Backend en Render

Este backend (Node/Express) está listo para desplegarse en Render conectado a tu repositorio de GitHub.

## Requisitos
- Repositorio de GitHub con el backend (público o privado).
- Cuenta en Render (https://render.com) con acceso a GitHub.
- Tu `NEWS_API_KEY` de NewsAPI (opcional para noticias reales).

## Pasos en Render
1. Conecta tu cuenta de Render a GitHub.
2. Crea un nuevo servicio Web:
   - "New +" → "Web Service" → selecciona tu repo del backend.
   - Branch: `main`.
   - Root Directory: la raíz del repo (donde está `package.json`).
   - Build Command: `npm install`.
   - Start Command: `node index.js` (o `npm start`).
   - Environment: `Node`.
   - Región: la más cercana a tus usuarios.
3. Variables de entorno (Environment):
   - `NEWS_API_KEY`: tu clave de NewsAPI (sin comillas).
   - `CORS_ORIGINS`: dominios del frontend separados por coma.
     - Ejemplo: `https://tu-frontend.vercel.app, https://www.tudominio.com`.
   - Opcionales si usas DB:
     - `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`.
4. Deploy. Render asignará una URL, por ejemplo: `https://infouna-backend.onrender.com`.

## Salud del servicio
- Health check: `/api/news` (configurado en `render.yaml`).
- Si no configuraste `NEWS_API_KEY`, el endpoint devuelve noticias de respaldo (fallback) para no romper el UI.

## CORS
- El backend permite orígenes de desarrollo (`localhost:5173/5181/5182`).
- En producción, configura `CORS_ORIGINS` para permitir únicamente tus dominios.

## Frontend (Vercel)
- En tu proyecto de Vercel, añade la variable:
  - `VITE_API_BASE_URL`: `https://infouna-backend.onrender.com/api`.
- Vuelve a desplegar el frontend.

## Verificación rápida
- Backend: visita `https://<tu-render-domain>/api/news?limit=6`.
- Frontend: abre tu sitio y verifica que la sección de noticias cargue.

## Blueprint opcional
- Se incluye `backend/render.yaml` para despliegues por Blueprint. Render puede leerlo desde el repo.

## Notas
- Render usa `PORT` automáticamente; el backend ya lo soporta.
- La conexión MySQL es opcional. Si no tienes DB en producción, los endpoints que dependan de ella no funcionarán, pero `/api/news` y los estáticos sí.

