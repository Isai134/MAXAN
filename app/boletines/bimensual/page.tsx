import { PageHeader } from '@/components/PageHeader';
import { ResourceGrid } from '@/components/ResourceGrid';
import { SectionWrapper } from '@/components/SectionWrapper';
import { localAsset } from '@/lib/assets';
import { newsletters } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { formatDate } from '@/utils/format';

export const metadata = pageMetadata(
  'Boletines bimensuales',
  'Archivo de Miradas a la Igualdad Laboral, boletín bimensual de MAXAN.',
  '/boletines/bimensual',
);
export default function NewslettersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recursos"
        title="Miradas a la Igualdad Laboral"
        description="Archivo de boletines bimensuales publicados por MAXAN durante 2020 y 2021."
        breadcrumbs={[{ label: 'Recursos' }, { label: 'Boletines bimensuales' }]}
      />
      <SectionWrapper>
        <ResourceGrid
          resources={newsletters.map((item) => ({
            name: `${formatDate(item.DateStart)} — ${formatDate(item.DateEnd)}`,
            href: localAsset(item.Document.url),
            cover: item.Cover.url,
            description: 'Boletín bimensual Miradas a la Igualdad Laboral.',
          }))}
        />
      </SectionWrapper>
    </>
  );
}
