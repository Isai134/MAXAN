import { ArrowRight, BookOpenCheck, CalendarDays, FileBadge2 } from 'lucide-react';
import Link from 'next/link';
import { MotionReveal } from '@/components/MotionReveal';
import { SectionWrapper } from '@/components/SectionWrapper';

const services = [
  {
    title: 'Certificación',
    description:
      'Auditoría, revisión documental y emisión de certificados para centros de trabajo que cumplen la NMX-R-025.',
    href: '/servicios/certificacion',
    icon: FileBadge2,
  },
  {
    title: 'Capacitación',
    description:
      'Calendario de actividades remotas para conocer, interpretar e implantar la Norma.',
    href: '/capacitaciones/calendario-capacitaciones',
    icon: CalendarDays,
  },
  {
    title: 'Cursos y recursos',
    description:
      'Programas especializados, webinars y guías de aplicación disponibles para consulta.',
    href: '/servicios/cursos',
    icon: BookOpenCheck,
  },
];

export function HomeServices() {
  return (
    <SectionWrapper>
      <MotionReveal className="max-w-3xl">
        <p className="eyebrow">Nuestros servicios</p>
        <h2 className="section-title">
          Una ruta clara para certificar, fortalecer y mantener tus prácticas.
        </h2>
      </MotionReveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <MotionReveal key={service.title} delay={index * 0.08}>
            <Link
              href={service.href}
              className="group block h-full rounded-3xl border border-ink/10 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-maxan-300 hover:shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-maxan-100 text-maxan-700">
                <service.icon />
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-maxan-700">
                Ver información{' '}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
