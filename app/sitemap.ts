import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { certificates } from '@/lib/certificates';
import { articles, trainings } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/nosotros',
    '/norma-certificable/que-es',
    '/norma-certificable/guias-aplicacion',
    '/norma-certificable/equipo-auditor',
    '/preguntas-frecuentes',
    '/servicios/certificacion',
    '/productos',
    '/productos/distintivo-nmx-r-025',
    '/sistemas-gestion',
    '/iso-42001',
    '/unidades-inspeccion',
    '/servicios/cursos',
    '/servicios/webinars',
    '/capacitaciones/calendario-capacitaciones',
    '/transparencia',
    '/boletines/comunicados',
    '/boletines/bimensual',
    '/contacto',
    '/solicitud-servicio',
    '/evaluacion',
  ];
  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '' ? 1 : 0.7,
    })),
    ...trainings.map((course) => ({
      url: `${siteConfig.url}/servicios/cursos/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/boletines/comunicados/${article.slug}`,
      lastModified: new Date(article.PublishDate),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    ...certificates.map((certificate) => ({
      url: `${siteConfig.url}/certificado/${certificate.certificateNumber}`,
      lastModified: new Date(certificate.lastReviewDate),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}
