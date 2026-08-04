import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { siteConfig } from '@/config/site';
import { SiteLayout } from '@/layouts/SiteLayout';
import { AppProviders } from '@/providers/AppProviders';
import '@/styles/globals.css';

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

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#7a9c49' };

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
    <html lang="es">
      <body className="min-h-screen bg-[#fbfcfa] font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded bg-white px-4 py-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
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
