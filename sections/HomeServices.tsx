import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { MotionReveal } from '@/components/MotionReveal';
import { SectionWrapper } from '@/components/SectionWrapper';

const services = [
  {
    title: 'Productos',
    description:
      'Conoce el Distintivo NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación.',
    href: '/productos',
  },
  {
    title: 'Sistemas de gestión',
    description: 'Certificación para sistemas de gestión basados en seis normas ISO.',
    href: '/sistemas-gestion',
  },
  {
    title: 'Unidades de inspección',
    description: 'Inspección y verificación de cumplimiento de acuerdo con la norma aplicable.',
    href: '/unidades-inspeccion',
  },
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

export function HomeServices() {
  return (
    <SectionWrapper>
      <MotionReveal className="max-w-3xl">
        <p className="eyebrow">Nuestros servicios</p>
        <h2 className="section-title">
          Una ruta clara para evaluar, certificar y mejorar tu organización.
        </h2>
      </MotionReveal>
      <div className="mt-12 border-t border-ink/15">
        {services.map((service, index) => (
          <MotionReveal key={service.title} delay={index * 0.08}>
            <Link
              href={service.href}
              className="group grid grid-cols-[46px_minmax(0,1fr)] gap-x-5 gap-y-3 border-b border-ink/15 py-7 transition-colors hover:text-maxan-800 sm:py-9 lg:grid-cols-[70px_minmax(0,1fr)_minmax(220px,.8fr)_24px] lg:gap-x-6"
            >
              <span className="col-start-1 row-start-1 font-serif text-4xl leading-none text-maxan-500">
                0{index + 1}
              </span>
              <h3 className="col-start-2 row-start-1 pr-8 text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="col-start-2 row-start-2 leading-7 text-slate-600 lg:col-start-3 lg:row-start-1">
                {service.description}
              </p>
              <span className="col-start-2 row-start-1 justify-self-end text-maxan-700 lg:col-start-4">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
