import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { managementSystemStandards } from '@/data/service-portfolio';
import { MotionReveal } from '@/components/MotionReveal';
import { SectionWrapper } from '@/components/SectionWrapper';

const managementCodes = managementSystemStandards.map((standard) => standard.code).join(' · ');

const certificationRows = [
  {
    title: 'Certificación de producto',
    description: 'Distintivo en Igualdad Laboral y No Discriminación para centros de trabajo.',
    href: '/productos',
    codes: 'NMX-R-025-SCFI-2015',
  },
  {
    title: 'Sistemas de gestión',
    description: 'Certificación de sistemas de gestión basados en seis normas ISO.',
    href: '/sistemas-gestion',
    codes: managementCodes,
  },
  {
    title: 'Unidades de inspección',
    description: 'Inspección y verificación de cumplimiento de acuerdo con la norma aplicable.',
    href: '/unidades-inspeccion',
    codes: null,
  },
];

const trainingRows = [
  {
    title: 'Capacitación',
    description:
      'Calendario de actividades remotas para conocer, interpretar e implantar la Norma.',
    href: '/capacitaciones/calendario-capacitaciones',
  },
  {
    title: 'Cursos y recursos',
    description:
      'Programas especializados, webinars y guías de aplicación disponibles para consulta.',
    href: '/servicios/cursos',
  },
];

function ServiceRow({
  index,
  title,
  description,
  href,
  codes,
}: {
  index: string;
  title: string;
  description: string;
  href: string;
  codes?: string | null;
}) {
  return (
    <Link
      href={href}
      className="group grid grid-cols-[3rem_1fr_auto] items-start gap-x-4 gap-y-2 border-b border-ink/15 py-7 lg:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1fr)_1.25rem] lg:items-center lg:gap-x-6"
    >
      <span className="font-mono text-xs text-maxan-700">{index}</span>
      <h3 className="font-serif text-2xl font-normal text-ink transition-colors group-hover:text-maxan-800 lg:text-3xl">
        {title}
      </h3>
      <div className="col-start-2 lg:col-start-3">
        <p className="text-secondary">{description}</p>
        {codes && <p className="mt-2 font-mono text-xs text-muted">{codes}</p>}
      </div>
      <span className="col-start-3 row-start-1 justify-self-end text-maxan-700 transition-transform group-hover:translate-x-0.5 lg:col-start-4 lg:row-auto">
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function HomeServices() {
  return (
    <SectionWrapper id="servicios">
      <MotionReveal>
        <p className="meta border-t border-ink/15 pt-4">01 · Servicios</p>
      </MotionReveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <MotionReveal className="lg:col-span-4 lg:h-fit lg:sticky lg:top-28">
          <p className="eyebrow">Qué certificamos</p>
          <h2 className="section-title">Tres líneas de evaluación y un programa de formación.</h2>
          <p className="body-copy mt-6">
            Cada servicio parte de una norma publicada, un alcance definido y un equipo auditor
            independiente.
          </p>
        </MotionReveal>
        <div className="lg:col-span-8 lg:col-start-5">
          <p className="meta">Certificación e inspección</p>
          <div className="mt-4 border-t border-ink/15">
            {certificationRows.map((row, index) => (
              <ServiceRow
                key={row.title}
                index={String(index + 1).padStart(2, '0')}
                title={row.title}
                description={row.description}
                href={row.href}
                codes={row.codes}
              />
            ))}
          </div>
          <p className="meta mt-12">Formación</p>
          <div className="mt-4 border-t border-ink/15">
            {trainingRows.map((row, index) => (
              <ServiceRow
                key={row.title}
                index={String(certificationRows.length + index + 1).padStart(2, '0')}
                title={row.title}
                description={row.description}
                href={row.href}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
