import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from 'next/font/google';
import type { ReactNode } from 'react';
import { siteConfig } from '@/config/site';
import { SiteLayout } from '@/layouts/SiteLayout';
import { AppProviders } from '@/providers/AppProviders';
import '@/styles/globals.css';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Newsreader({
  subsets: ['latin'],
  axes: ['opsz'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Certificación y sistemas de gestión`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f7f6f1' };

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logos/logo_maxan.62fdb1d.png`,
    email: siteConfig.email,
    telephone: siteConfig.primaryPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ex Hacienda Barbabosa 100-A',
      addressLocality: 'San Miguel Zinacantepec',
      postalCode: '51357',
      addressCountry: 'MX',
    },
    sameAs: Object.values(siteConfig.social),
  };
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only z-[100] bg-ink px-4 py-3 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <AppProviders>
          <SiteLayout>{children}</SiteLayout>
        </AppProviders>
      </body>
    </html>
  );
}
