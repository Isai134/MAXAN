import { ClipboardCheck, FileSearch, ShieldCheck } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { CTA } from '@/components/CTA';
import { MotionReveal } from '@/components/MotionReveal';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Unidades de inspección',
  'Servicios de inspección y verificación de cumplimiento normativo de MAXAN.',
  '/unidades-inspeccion',
);

const stages = [
  [
    'Revisión del alcance',
    'Analizamos la norma, el centro de trabajo y las condiciones del servicio solicitado.',
  ],
  [
    'Inspección y evidencia',
    'Realizamos la revisión conforme a los criterios aplicables y documentamos los hallazgos.',
  ],
  [
    'Informe de resultados',
    'Entregamos el resultado del proceso y orientamos sobre los siguientes pasos.',
  ],
] as const;

export default function InspectionUnitsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Unidades de inspección para verificar el cumplimiento normativo."
        description="Acompañamos a las organizaciones con servicios de inspección y verificación definidos de acuerdo con la norma y el alcance aplicable."
        breadcrumbs={[{ label: 'Unidades de inspección' }]}
        aside={<ButtonLink href="/solicitud-servicio">Consultar alcance</ButtonLink>}
      />
      <SectionWrapper>
        <div className="border-t border-ink/15">
          {[
            [
              ClipboardCheck,
              'Evaluación objetiva',
              'Procesos documentados para revisar requisitos y evidencias.',
            ],
            [
              FileSearch,
              'Alcance definido',
              'La inspección se delimita de acuerdo con la norma aplicable.',
            ],
            [ShieldCheck, 'Imparcialidad', 'Atención técnica y objetiva durante todo el proceso.'],
          ].map(([Icon, title, description], index) => {
            const CardIcon = Icon as typeof ClipboardCheck;
            return (
              <MotionReveal key={title as string} delay={index * 0.06}>
                <article className="grid gap-4 border-b border-ink/15 py-8 sm:grid-cols-[80px_1fr_1.4fr] sm:items-start sm:py-10">
                  <CardIcon className="h-7 w-7 text-maxan-700" />
                  <h2 className="text-2xl font-semibold">{title as string}</h2>
                  <p className="leading-7 text-slate-600">{description as string}</p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </SectionWrapper>
      <div className="bg-mist">
        <SectionWrapper>
          <MotionReveal className="max-w-3xl">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 className="section-title">Un proceso claro desde la solicitud hasta el informe.</h2>
          </MotionReveal>
          <div className="mt-10 border-l border-maxan-500 pl-6 sm:pl-10">
            {stages.map(([title, description], index) => (
              <MotionReveal key={title} delay={index * 0.06}>
                <article className="grid gap-4 py-6 sm:grid-cols-[96px_1fr] sm:items-start sm:py-8">
                  <span className="font-serif text-5xl leading-none text-maxan-600">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="mt-2 leading-7 text-slate-600">{description}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </SectionWrapper>
      </div>
      <CTA title="¿Necesitas una inspección o verificación?" />
    </>
  );
}
