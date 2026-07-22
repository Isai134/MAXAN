import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [{ url: '/images/archive/web_maxan_2dfe286e33.png', alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/archive/web_maxan_2dfe286e33.png'],
    },
  };
}
