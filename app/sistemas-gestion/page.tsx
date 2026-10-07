import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { CTA } from '@/components/CTA';
import { MotionReveal } from '@/components/MotionReveal';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { managementSystemStandards } from '@/data/service-portfolio';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Sistemas de gestión',
  'Servicios de certificación para sistemas de gestión basados en normas ISO.',
  '/sistemas-gestion',
);

export default function ManagementSystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Sistemas de gestión para organizaciones que quieren avanzar con método."
        description="Conoce las normas ISO que integran la oferta de certificación de sistemas de gestión de MAXAN."
        breadcrumbs={[{ label: 'Sistemas de gestión' }]}
      />
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[.64fr_1.36fr]">
          <MotionReveal className="lg:sticky lg:top-32 lg:h-fit">
            <p className="eyebrow">Nuestro alcance</p>
            <p className="font-serif text-[clamp(7rem,16vw,14rem)] leading-[.72] tracking-[-.1em] text-maxan-500">
              ISO
            </p>
            <p className="mt-10 max-w-sm text-lg leading-8 text-secondary">
              Cada proceso se define con base en las necesidades de la organización, el alcance
              solicitado y los requisitos aplicables de la norma.
            </p>
          </MotionReveal>
          <div className="border-t border-ink/15">
            {managementSystemStandards.map((standard, index) => (
              <MotionReveal key={standard.code} delay={index * 0.05}>
                <article className="grid gap-4 border-b border-ink/15 py-8 sm:grid-cols-[130px_1fr_auto] sm:items-start sm:py-10">
                  <p className="font-mono text-xl tracking-tight text-maxan-700">{standard.code}</p>
                  <div>
                    <h2 className="font-serif text-2xl font-normal tracking-[-0.015em]">
                      {standard.title}
                    </h2>
                    <p className="mt-3 max-w-xl leading-7 text-secondary">{standard.description}</p>
                  </div>
                  <ArrowUpRight
                    className="hidden h-5 w-5 text-maxan-700 sm:block"
                    aria-hidden="true"
                  />
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <div className="bg-surface">
        <SectionWrapper>
          <div className="grid gap-10 border-y border-ink/15 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Antes de iniciar</p>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.015em]">
                Confirmemos el alcance adecuado.
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-secondary">
                El equipo de MAXAN te orientará sobre la norma, el alcance de servicio y los
                requisitos aplicables a tu organización.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-maxan-800">
              <CheckCircle2 className="h-5 w-5 shrink-0" /> Atención personalizada
            </div>
          </div>
          <div className="mt-8">
            <ButtonLink href="/solicitud-servicio">Solicitar información</ButtonLink>
          </div>
        </SectionWrapper>
      </div>
      <CTA title="¿Buscas certificar un sistema de gestión?" />
    </>
  );
}
