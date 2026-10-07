import { Accordion } from '@/components/Accordion';
import { CTA } from '@/components/CTA';
import { MotionReveal } from '@/components/MotionReveal';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import {
  annexNote,
  benefits,
  clauses,
  facts,
  faqs,
  pillars,
  relatedStandards,
  whatItIs,
  whatItIsNot,
} from '@/data/iso-42001';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'ISO/IEC 42001 e Inteligencia Artificial',
  'Guía de referencia sobre ISO/IEC 42001:2023, la norma internacional para sistemas de gestión de Inteligencia Artificial.',
  '/iso-42001',
);

function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <MotionReveal>
      <p className="meta border-t border-ink/15 pt-4">
        {index} · {label}
      </p>
    </MotionReveal>
  );
}

export default function Iso42001Page() {
  return (
    <>
      <PageHeader
        eyebrow="Recursos · ISO/IEC 42001"
        title="Gobernanza responsable de Inteligencia Artificial"
        description="Una guía de referencia sobre ISO/IEC 42001:2023, la norma internacional que establece requisitos para un sistema de gestión de Inteligencia Artificial."
        breadcrumbs={[
          { label: 'Recursos', href: '/boletines/comunicados' },
          { label: 'ISO/IEC 42001' },
        ]}
        aside={
          <dl className="border border-ink/15 bg-elevated p-6 sm:p-8">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="border-t border-ink/15 py-3 first:border-t-0 first:pt-0"
              >
                <dt className="meta">{fact.label}</dt>
                <dd className="mt-1 text-sm text-secondary">{fact.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <SectionWrapper>
        <SectionMarker index="01" label="Qué es" />
        <h2 className="section-title mt-4">Un sistema de gestión, no una guía técnica</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="meta">Es</p>
            <ul className="mt-4 divide-y divide-ink/10 border-t border-ink/15">
              {whatItIs.map((item) => (
                <li key={item} className="body-copy py-4 text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta">No es</p>
            <ul className="mt-4 divide-y divide-ink/10 border-t border-ink/15">
              {whatItIsNot.map((item) => (
                <li key={item} className="body-copy py-4 text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionMarker index="02" label="Pilares" />
        <h2 className="section-title mt-4">Seis pilares del sistema de gestión de IA</h2>
        <div className="mt-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="grid gap-4 border-b border-ink/15 py-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <p className="meta text-maxan-700">{pillar.number}</p>
                <h3 className="mt-2 font-serif text-2xl font-normal text-ink">{pillar.title}</h3>
              </div>
              <p className="body-copy lg:col-span-7 lg:col-start-6">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionMarker index="03" label="Estructura de la norma" />
        <h2 className="section-title mt-4">Cláusulas 4 a 10, estructura armonizada ISO</h2>
        <ol className="mt-10 divide-y divide-ink/10 border-t border-ink/15">
          {clauses.map((clause) => (
            <li key={clause.number} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
              <p className="meta text-maxan-700 sm:w-24 sm:shrink-0">{clause.number}</p>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <h3 className="font-serif text-lg font-normal text-ink sm:w-64 sm:shrink-0">
                  {clause.title}
                </h3>
                <p className="text-sm leading-6 text-secondary">{clause.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-prose text-sm leading-6 text-muted">{annexNote}</p>
      </SectionWrapper>

      <div className="bg-surface">
        <SectionWrapper>
          <SectionMarker index="04" label="Integración con otros sistemas" />
          <h2 className="section-title mt-4">Una estructura pensada para integrarse</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Normas relacionadas con ISO/IEC 42001, su ámbito y su relación con la gestión de IA
              </caption>
              <thead>
                <tr className="border-b border-ink/15">
                  <th scope="col" className="meta py-3 pr-4">
                    Norma
                  </th>
                  <th scope="col" className="meta py-3 pr-4">
                    Ámbito
                  </th>
                  <th scope="col" className="meta py-3">
                    Relación con ISO/IEC 42001
                  </th>
                </tr>
              </thead>
              <tbody>
                {relatedStandards.map((standard) => (
                  <tr key={standard.code} className="border-b border-ink/10 align-top">
                    <td className="py-4 pr-4 font-mono text-sm text-ink">{standard.code}</td>
                    <td className="py-4 pr-4 text-sm text-secondary">{standard.scope}</td>
                    <td className="py-4 text-sm leading-6 text-secondary">{standard.relation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 max-w-prose text-sm leading-6 text-muted">
            La estructura compartida facilita integrar política, auditoría interna y revisión por la
            dirección en un solo sistema de gestión. Sin embargo, los requisitos de cada norma no
            son equivalentes: una certificación no sustituye a otra.
          </p>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <SectionMarker index="05" label="IA y regulación" />
        <h2 className="section-title mt-4">Un marco de gestión ante la regulación emergente</h2>
        <p className="body-copy mt-6">
          Regulaciones como el Reglamento (UE) 2024/1689 (el Reglamento europeo de IA) establecen
          obligaciones legales específicas según el nivel de riesgo de cada sistema de IA. Un
          sistema de gestión de IA basado en ISO/IEC 42001 puede ayudar a estructurar procesos de
          gobernanza, evaluación de riesgos y supervisión que resultan relevantes frente a este tipo
          de regulación.
        </p>
        <p className="mt-8 max-w-prose border-l-2 border-warning pl-5 text-sm leading-6 text-secondary">
          ISO/IEC 42001 no sustituye las obligaciones legales aplicables a una organización ni
          garantiza por sí misma el cumplimiento regulatorio.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <SectionMarker index="06" label="Beneficios" />
        <h2 className="section-title mt-4">Qué aporta adoptar este marco de gestión</h2>
        <ul className="mt-10 grid gap-x-10 gap-y-0 divide-y divide-ink/10 border-t border-ink/15 md:grid-cols-2 md:divide-y-0">
          {benefits.map((benefit, index) => (
            <li key={benefit.text} className="flex gap-4 border-ink/15 py-4 md:border-t">
              <span className="meta text-maxan-700">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-sm leading-6 text-secondary">{benefit.text}</span>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <SectionMarker index="07" label="Imparcialidad" />
        <h2 className="section-title mt-4">Evaluar no es implementar</h2>
        <p className="body-copy mt-6">
          Bajo ISO/IEC 17021-1, un organismo de certificación de sistemas de gestión debe mantener
          su imparcialidad y no puede ofrecer consultoría para implementar el sistema que certifica.
          Esta separación entre evaluar e implementar protege la objetividad del proceso de
          certificación.
        </p>
        <p className="body-copy mt-4">
          Para ISO/IEC 42001, la organización interesada debe verificar el alcance de acreditación
          vigente del organismo de certificación que elija. Consulta con MAXAN para conocer sus
          esquemas y alcances de acreditación actuales.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <SectionMarker index="08" label="Preguntas frecuentes" />
        <h2 className="section-title mt-4">Preguntas frecuentes</h2>
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
      </SectionWrapper>

      <CTA title="¿Quieres entender cómo se relaciona ISO/IEC 42001 con tus sistemas de gestión?" />
    </>
  );
}
