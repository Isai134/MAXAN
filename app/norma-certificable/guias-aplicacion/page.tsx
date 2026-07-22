import { PageHeader } from '@/components/PageHeader';
import { ResourceGrid } from '@/components/ResourceGrid';
import { SectionWrapper } from '@/components/SectionWrapper';
import { guides } from '@/lib/content';
import { localAsset } from '@/lib/assets';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Guías de aplicación',
  'Guías de aplicación de la NMX-R-025-SCFI-2015 publicadas por MAXAN.',
  '/norma-certificable/guias-aplicacion',
);

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Norma certificable"
        title="Guías de aplicación"
        description="Materiales descargables para distintos tipos de centros de trabajo y para la aplicación de la NMX-R-025-SCFI-2015."
        breadcrumbs={[{ label: 'Norma certificable' }, { label: 'Guías de aplicación' }]}
      />
      <SectionWrapper>
        <ResourceGrid
          resources={guides.map((guide) => ({
            name: guide.name,
            href: localAsset(guide.locationPath.url),
            cover: guide.cover?.url,
          }))}
        />
      </SectionWrapper>
    </>
  );
}
