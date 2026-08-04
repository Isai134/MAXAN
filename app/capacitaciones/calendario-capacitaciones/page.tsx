import { CalendarDays, Clock3, Download, Laptop } from 'lucide-react';
import { CTA } from '@/components/CTA';
import { MotionReveal } from '@/components/MotionReveal';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { trainingSchedule } from '@/data/schedule';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Calendario de Capacitaciones',
  'Fechas, duración, horario y modalidad de las capacitaciones MAXAN 2026.',
  '/capacitaciones/calendario-capacitaciones',
);

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capacitaciones"
        title="Calendario 2026"
        description="Consulta fechas, duración, horario y modalidad de las actividades de capacitación de MAXAN Certificación."
        breadcrumbs={[{ label: 'Servicios' }, { label: 'Calendario de capacitaciones' }]}
        aside={
          <a
            href="/documents/archive/CURSOS_MAXAN_2026_2b1d3030e2.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 border-b-2 border-maxan-600 pb-2 text-sm font-semibold text-maxan-800 transition hover:border-ink hover:text-ink"
          >
            <Download className="h-4 w-4" /> Catálogo 2026 · PDF
          </a>
        }
      />
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[.32fr_1fr]">
          <aside className="h-fit border-l-2 border-maxan-500 pl-6 lg:sticky lg:top-32">
            <p className="eyebrow">Antes de registrarte</p>
            <h2 className="text-2xl font-semibold">Aspectos a considerar</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
              <li>Formas de pago: transferencia o depósito en cuenta.</li>
              <li>Las fechas están sujetas a cambios.</li>
              <li>Las actividades se realizan con un mínimo de 10 personas inscritas.</li>
              <li>
                Las inscripciones deben realizarse con 7 días de anticipación. Solicita el formato
                en direccioncomercial@maxan.com.mx.
              </li>
            </ul>
          </aside>
          <div className="border-t border-ink/15">
            {trainingSchedule.map(([date, title, duration, time], index) => (
              <MotionReveal key={`${date}-${title}`} delay={index * 0.02}>
                <article className="grid gap-5 border-b border-ink/15 py-7 sm:grid-cols-[150px_1fr] sm:py-9">
                  <div>
                    <p className="font-serif text-4xl leading-none text-maxan-600">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-4 flex items-start gap-2 text-xs font-bold uppercase leading-5 tracking-[.14em] text-maxan-700">
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0" />
                      {date}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold leading-8">{title}</h2>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t border-ink/10 pt-4 text-sm text-slate-600">
                      <span className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-maxan-700" /> {duration}
                      </span>
                      <span>{time}</span>
                      <span className="flex items-center gap-2">
                        <Laptop className="h-4 w-4 text-maxan-700" /> Remota
                      </span>
                    </div>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <CTA title="Reserva tu lugar o solicita una capacitación para tu organización." />
    </>
  );
}
