import { ArrowRight, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { MotionReveal } from '@/components/MotionReveal';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Productos',
  'Conoce el distintivo de igualdad laboral y no discriminación de MAXAN.',
  '/productos',
);

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Productos"
        title="Distintivos que hacen visible el compromiso de tu organización."
        description="Acompañamos a los centros de trabajo en procesos de evaluación y certificación que reconocen prácticas verificables."
        breadcrumbs={[{ label: 'Productos' }]}
      />
      <SectionWrapper>
        <MotionReveal className="mx-auto max-w-5xl">
          <article className="grid gap-10 border-y border-ink/15 py-10 lg:grid-cols-[.7fr_1.3fr] lg:py-16">
            <div className="flex items-start gap-4 lg:block">
              <p className="font-serif text-7xl leading-none tracking-[-.08em] text-maxan-600 sm:text-9xl">
                025
              </p>
              <BadgeCheck
                className="mt-2 h-7 w-7 shrink-0 text-maxan-700 lg:mt-8"
                aria-hidden="true"
              />
            </div>
            <div className="border-t border-ink/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-1">
              <p className="eyebrow">Distintivo</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                NMX-R-025-SCFI-2015
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Igualdad Laboral y No Discriminación. Reconoce a los centros de trabajo que integran
                prácticas de igualdad, inclusión y respeto a los derechos laborales.
              </p>
              <Link
                href="/productos/distintivo-nmx-r-025"
                className="mt-8 inline-flex items-center gap-2 border-b-2 border-maxan-600 pb-2 text-sm font-semibold text-maxan-800 transition hover:border-ink hover:text-ink"
              >
                Conocer el distintivo <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </MotionReveal>
        <MotionReveal delay={0.08} className="mx-auto mt-10 max-w-5xl">
          <p className="border-l-2 border-maxan-500 pl-6 text-sm leading-7 text-slate-600">
            El uso del distintivo y de la marca está sujeto a la evaluación correspondiente y al
            reglamento vigente de MAXAN.
          </p>
        </MotionReveal>
      </SectionWrapper>
      <CTA title="¿Quieres obtener el Distintivo NMX-R-025?" />
    </>
  );
}
