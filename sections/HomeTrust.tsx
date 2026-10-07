import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionReveal } from '@/components/MotionReveal';
import { SectionWrapper } from '@/components/SectionWrapper';

const steps = [
  {
    title: 'Solicitud y viabilidad',
    description: 'Se revisa la solicitud firmada y se analiza la viabilidad técnica del servicio.',
    figure: null,
  },
  {
    title: 'Auditoría',
    description:
      'Revisión documental y auditoría en sitio o remota por un equipo auditor independiente.',
    figure: '70 / 100 pts mínimos',
  },
  {
    title: 'No conformidades',
    description:
      'Las no conformidades mayores detectadas se atienden dentro del plazo establecido.',
    figure: '60 días',
  },
  {
    title: 'Certificado',
    description: 'Se emite el certificado y se incorpora al registro público de consulta.',
    figure: '4 años de vigencia',
  },
  {
    title: 'Vigilancia',
    description: 'Auditoría de vigilancia para confirmar que se mantiene el cumplimiento.',
    figure: 'A los 2 años',
  },
];

export function HomeTrust() {
  return (
    <div className="bg-surface">
      <SectionWrapper>
        <MotionReveal>
          <p className="meta border-t border-ink/15 pt-4">02 · Cómo se certifica</p>
        </MotionReveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <MotionReveal className="lg:col-span-7">
            <h2 className="section-title">Reglas publicadas antes de empezar.</h2>
          </MotionReveal>
          <MotionReveal className="lg:col-span-5" delay={0.06}>
            <p className="body-copy">
              Así funciona el ciclo de certificación del Distintivo NMX-R-025-SCFI-2015. Los plazos
              y criterios son los que establece el propio esquema.
            </p>
          </MotionReveal>
        </div>

        <ol className="mt-14 grid gap-8 border-l border-ink/15 pl-6 lg:mt-16 lg:grid-cols-5 lg:gap-6 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span
                className="absolute -left-[1.78rem] top-1 h-2 w-2 bg-ink lg:-top-[2.28rem] lg:left-0"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-maxan-700">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-serif text-xl font-normal text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{step.description}</p>
              {step.figure && (
                <p className="mt-3 font-mono text-sm text-maxan-700">{step.figure}</p>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 border-t border-ink/15 pt-10 lg:grid-cols-12">
          <MotionReveal className="lg:col-span-5">
            <h3 className="font-serif text-2xl font-normal text-ink">
              Acreditación y transparencia
            </h3>
            <p className="mt-4 text-secondary">
              MAXAN está acreditado ante la Entidad Mexicana de Acreditación (EMA). Sus auditores
              son evaluados anualmente y sus procedimientos protegen la objetividad e imparcialidad
              de cada auditoría.
            </p>
            <Link
              href="/transparencia"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-maxan-700 underline underline-offset-4"
            >
              Consultar transparencia
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </MotionReveal>
          <MotionReveal className="lg:col-span-7" delay={0.06}>
            <div className="border border-ink/15 bg-elevated p-4">
              <Image
                src="/images/archive/web_registro_EMA_e85a60a59c.jpg"
                width={1600}
                height={500}
                alt="Registro de acreditación EMA de MAXAN"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="w-full"
              />
            </div>
          </MotionReveal>
        </div>
      </SectionWrapper>
    </div>
  );
}
