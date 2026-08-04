import { Building2, Check, HeartHandshake, Users } from 'lucide-react';
import { CTA } from '@/components/CTA';
import { MotionReveal } from '@/components/MotionReveal';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import {
  certificationLevels,
  companyBenefits,
  implementationSteps,
  normPractices,
  staffBenefits,
} from '@/data/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Norma Certificable NMX-R-025-SCFI-2015',
  'Qué es la NMX-R-025-SCFI-2015, sus beneficios, requisitos, proceso de implantación y niveles de certificación.',
  '/norma-certificable/que-es',
);

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7 text-slate-600">
          <Check className="mt-1 h-5 w-5 shrink-0 text-maxan-700" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function NormPage() {
  return (
    <>
      <PageHeader
        eyebrow="Norma certificable"
        title="¿Qué es la NMX-R-025-SCFI-2015?"
        description="Es una certificación voluntaria que reconoce a los centros de trabajo que cuentan con prácticas de igualdad laboral y no discriminación, que favorecen el desarrollo integral de sus colaboradoras y colaboradores."
        breadcrumbs={[{ label: 'Norma certificable' }, { label: '¿Qué es?' }]}
      />
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <MotionReveal>
            <p className="eyebrow">Prácticas esenciales</p>
            <h2 className="section-title">Lo que debe demostrar un centro de trabajo.</h2>
            <p className="body-copy mt-6">
              Los centros de trabajo deben ser auditados por un organismo de certificación
              acreditado por la Entidad Mexicana de Acreditación A.C.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1} className="border-y border-ink/15 py-2">
            <List items={normPractices} />
          </MotionReveal>
        </div>
      </SectionWrapper>
      <div className="bg-mist">
        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-2">
            <MotionReveal className="border-t-2 border-maxan-500 py-8">
              <Users className="h-9 w-9 text-maxan-700" />
              <h2 className="mt-6 text-3xl font-semibold">Beneficios para el personal</h2>
              <List items={staffBenefits} />
            </MotionReveal>
            <MotionReveal delay={0.1} className="border-t-2 border-ink bg-ink px-8 py-8 text-white">
              <Building2 className="h-9 w-9 text-maxan-300" />
              <h2 className="mt-6 text-3xl font-semibold">Beneficios para la organización</h2>
              <div className="[&_li]:!text-white/70 [&_svg]:!text-maxan-300">
                <List items={companyBenefits} />
              </div>
            </MotionReveal>
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <MotionReveal className="max-w-3xl">
          <p className="eyebrow">Programa de implantación</p>
          <h2 className="section-title">Seis etapas, de la autoevaluación a la vigilancia.</h2>
        </MotionReveal>
        <div className="mt-12 grid gap-x-10 border-t border-ink/15 md:grid-cols-2 lg:grid-cols-3">
          {implementationSteps.map((step, index) => (
            <MotionReveal key={step.title} delay={index * 0.05}>
              <article className="h-full border-b border-ink/15 py-7">
                <span className="font-serif text-5xl leading-none text-maxan-600">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>
      <div className="bg-maxan-50">
        <SectionWrapper>
          <MotionReveal className="max-w-3xl">
            <p className="eyebrow">Niveles de certificación</p>
            <h2 className="section-title">
              El reconocimiento crece con las medidas implementadas.
            </h2>
          </MotionReveal>
          <div className="mt-10 grid gap-x-8 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {certificationLevels.map((level, index) => (
              <article key={level.name} className="border-b border-ink/15 py-7">
                <HeartHandshake className="h-7 w-7" />
                <p className="mt-6 font-serif text-4xl leading-none text-maxan-600">0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold">{level.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{level.detail}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>
      </div>
      <CTA title="Conoce el proceso y prepara tu centro de trabajo para certificar." />
    </>
  );
}
