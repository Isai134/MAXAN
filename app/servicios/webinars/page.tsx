import { PageHeader } from '@/components/PageHeader';
import { ResourceGrid } from '@/components/ResourceGrid';
import { SectionWrapper } from '@/components/SectionWrapper';
import { localAsset } from '@/lib/assets';
import { webinars } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Webinars',
  'Presentaciones y webinars sobre igualdad laboral, accesibilidad, violencia laboral y aplicación de la NMX-R-025.',
  '/servicios/webinars',
);
export default function WebinarsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Webinars"
        description="Presentaciones descargables sobre accesibilidad, maternidad, paternidad, planes de acción, violencia laboral, reclutamiento y otros temas vinculados con la Norma."
        breadcrumbs={[{ label: 'Servicios' }, { label: 'Webinars' }]}
      />
      <SectionWrapper>
        <ResourceGrid
          resources={webinars.map((item) => ({
            name: item.name,
            href: localAsset(item.locationPath.url),
            cover: item.cover?.url,
          }))}
        />
      </SectionWrapper>
    </>
  );
}
