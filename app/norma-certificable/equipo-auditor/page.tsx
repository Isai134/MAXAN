import Image from 'next/image';
import { MotionReveal } from '@/components/MotionReveal';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { auditors } from '@/data/auditors';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Equipo Auditor',
  'Conoce al equipo auditor de MAXAN bajo la NMX-R-025-SCFI-2015.',
  '/norma-certificable/equipo-auditor',
);

export default function AuditorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Norma certificable"
        title="Equipo auditor"
        description="Cada persona integrante de nuestro equipo auditor comparte la convicción de construir espacios laborales más igualitarios, cumpliendo su labor con objetividad, profesionalismo y respeto."
        breadcrumbs={[{ label: 'Norma certificable' }, { label: 'Equipo auditor' }]}
      />
      <SectionWrapper>
        <div className="grid gap-x-8 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {auditors.map((auditor, index) => (
            <MotionReveal key={auditor.name} delay={index * 0.04}>
              <article className="group border-b border-ink/15 py-6">
                <div className="relative aspect-[4/4.4] bg-surface">
                  <Image
                    src={auditor.image}
                    alt={`Retrato de ${auditor.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pt-5">
                  <h2 className="font-serif text-xl font-normal leading-7">{auditor.name}</h2>
                  <p className="mt-2 text-sm font-semibold text-maxan-700">{auditor.role}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
