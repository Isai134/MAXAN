# MAXAN Certificación — sitio web

Reconstrucción completa y original del sitio de **MAXAN Certificación**. El proyecto conserva y reorganiza el contenido público, navegación, identidad, formularios, imágenes y documentos del sitio anterior, sin reutilizar su HTML ni su implementación.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- Framer Motion
- Lucide Icons
- ESLint y Prettier

## Requisitos

- Node.js 20.9 o superior
- npm 10 o superior

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

No se requiere ninguna variable de entorno para ejecutar el sitio localmente. El archivo `.env.example` documenta los puntos de integración opcionales.

## Comandos

```bash
npm run dev          # servidor de desarrollo
npm run typecheck    # validación de TypeScript
npm run lint         # ESLint
npm run format:check # revisión de formato
npm run build        # build de producción
npm start            # ejecutar el build
```

## Estructura

```text
app/             rutas, metadata, SEO, API local, sitemap y robots
components/      componentes reutilizables e interactivos
sections/        secciones completas de la página de inicio
layouts/         composición global del sitio
hooks/           hooks reutilizables
lib/             adaptadores de contenido, assets y SEO
utils/           funciones de formato
styles/          estilos globales y utilidades Tailwind
public/          imágenes, logos, documentos, iconos, videos y fuentes
constants/       navegación y constantes compartidas
types/           tipos TypeScript
data/            contenido editorial y fuentes JSON archivadas
animations/      variantes de Framer Motion
providers/       proveedores globales de React
config/          configuración del sitio
middleware/      utilidades de middleware
```

## Contenido incluido

- Inicio, nosotros, misión, visión, política de calidad y valores
- Explicación, beneficios, implantación y niveles de la NMX-R-025-SCFI-2015
- Equipo auditor
- Certificación, proceso comercial, solicitud PDF y Word
- Cursos, fichas completas y calendario 2026
- Guías de aplicación y webinars
- Preguntas frecuentes
- Comunicados y boletines bimensuales
- Transparencia: procedimientos, reglamentos, contrato, formato de quejas y reportes 2020–2025
- Contacto, solicitud de servicio, autoevaluación y consulta de certificado
- Todos los recursos públicos identificados: imágenes originales y documentos descargables

Los archivos de `data/source/` son una instantánea del contenido público del CMS consultado durante la migración. Permiten auditar la procedencia del contenido y actualizar los adaptadores sin depender del CMS para ejecutar el sitio.

## Formularios e integraciones

`app/api/contact/route.ts` valida las solicitudes y funciona localmente sin credenciales. Es el punto preparado para integrar posteriormente:

- proveedor de email;
- API propia;
- CRM;
- webhook o flujo de WhatsApp.

La consulta de certificados conserva las rutas públicas, pero no intenta inventar información: la base privada debe conectarse en una etapa posterior.

## SEO y accesibilidad

- Metadata por página, canonical, Open Graph y Twitter Cards
- `robots.txt`, `sitemap.xml` y JSON-LD de Organization
- Imágenes con `next/image`, dimensiones, lazy loading y alt text
- Navegación por teclado, foco visible, ARIA y enlace para saltar al contenido
- Soporte para `prefers-reduced-motion`

## Producción

### Vercel

Importa el repositorio y despliega con la configuración automática de Next.js.

### Node.js

```bash
npm install
npm run build
npm start
```

### Docker o plataforma propia

Usa Node.js 20+, ejecuta `npm run build` durante la imagen y `npm start` como comando de arranque.

## Actualización de contenido

El sitio no depende del portal anterior en tiempo de ejecución. Para actualizar cursos, recursos o artículos, modifica los archivos de `data/` y coloca el asset correspondiente en `public/`. Los componentes consumen contenido tipado desde `lib/content.ts`.
