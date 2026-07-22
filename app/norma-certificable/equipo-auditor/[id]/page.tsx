import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { auditors } from '@/data/auditors';

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
export function generateStaticParams() {
  return auditors.map((auditor) => ({ id: slugify(auditor.name) }));
}
export default async function AuditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const auditor = auditors.find((item) => slugify(item.name) === id);
  if (!auditor) notFound();
  return (
    <>
      <PageHeader
        eyebrow="Equipo auditor"
        title={auditor.name}
        description={`${auditor.role} bajo la Norma Mexicana NMX-R-025-SCFI-2015.`}
        breadcrumbs={[
          { label: 'Norma certificable' },
          { label: 'Equipo auditor', href: '/norma-certificable/equipo-auditor' },
          { label: auditor.name },
        ]}
      />
      <SectionWrapper className="max-w-3xl">
        <div className="relative mx-auto aspect-[4/4.4] max-w-md overflow-hidden rounded-[2rem] bg-maxan-50 shadow-card">
          <Image
            src={auditor.image}
            alt={`Retrato de ${auditor.name}`}
            fill
            sizes="448px"
            className="object-cover object-top"
          />
        </div>
      </SectionWrapper>
    </>
  );
}
