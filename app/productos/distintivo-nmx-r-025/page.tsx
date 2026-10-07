import { Check, Download, Mail } from 'lucide-react';
import Image from 'next/image';
import { ButtonLink } from '@/components/ButtonLink';
import { CTA } from '@/components/CTA';
import { MotionReveal } from '@/components/MotionReveal';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import {
  certificationAdvantages,
  certificationImportance,
  commercialProcess,
} from '@/data/certification';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Distintivo NMX-R-025-SCFI-2015',
  'Información, beneficios y proceso para obtener el distintivo NMX-R-025-SCFI-2015 con MAXAN.',
  '/productos/distintivo-nmx-r-025',
);

function CheckedList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7 text-secondary">
          <Check className="mt-1 h-5 w-5 shrink-0 text-maxan-700" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Nmx025DistinctionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Productos · Distintivo"
        title="Distintivo NMX-R-025-SCFI-2015"
        description="Un reconocimiento para los centros de trabajo que demuestran prácticas de igualdad laboral y no discriminación."
        breadcrumbs={[
          { label: 'Productos', href: '/productos' },
          { label: 'Distintivo NMX-R-025-SCFI-2015' },
        ]}
        aside={<ButtonLink href="/solicitud-servicio">Solicitar cotización</ButtonLink>}
      />
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <Image
              src="/images/pages/comercial.1f53601.jpg"
              width={1200}
              height={800}
              alt="Proceso comercial del distintivo NMX-R-025 de MAXAN"
              className="w-full"
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="eyebrow">Ventajas de obtener el distintivo</p>
            <h2 className="section-title">Rigor técnico con atención cercana.</h2>
            <div className="mt-8">
              <CheckedList items={certificationAdvantages} />
            </div>
          </MotionReveal>
        </div>
      </SectionWrapper>
      <div className="bg-surface">
        <SectionWrapper>
          <MotionReveal className="max-w-3xl">
            <p className="eyebrow">Por qué es importante</p>
            <h2 className="section-title">
              El distintivo convierte las políticas en prácticas verificables.
            </h2>
          </MotionReveal>
          <div className="mt-10 grid gap-x-12 gap-y-4 border-y border-ink/15 py-8 md:grid-cols-2">
            {certificationImportance.map((item) => (
              <div key={item} className="border-b border-ink/10 pb-4 last:border-b-0">
                <CheckedList items={[item]} />
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <MotionReveal className="max-w-3xl">
          <p className="eyebrow">Procedimiento comercial</p>
          <h2 className="section-title">Del primer formato al contrato de certificación.</h2>
        </MotionReveal>
        <div className="mt-12 border-t border-ink/15">
          {commercialProcess.map(([title, description], index) => (
            <MotionReveal key={title} delay={index * 0.04}>
              <article className="grid gap-4 border-b border-ink/15 py-7 sm:grid-cols-[96px_1fr] sm:items-start sm:py-9">
                <span className="font-mono text-xs text-maxan-700">0{index + 1}</span>
                <div>
                  <h3 className="font-serif text-xl font-normal">{title}</h3>
                  <p className="mt-2 leading-7 text-secondary">{description}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          <a
            href="/documents/forms/SolicitudCertificacionProducto.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 border-b-2 border-ink pb-2 text-sm font-semibold text-ink transition hover:border-maxan-600 hover:text-maxan-700"
          >
            <Download className="h-4 w-4" /> Descargar solicitud PDF
          </a>
          <a
            href="mailto:direccioncomercial@maxan.com.mx"
            className="inline-flex items-center gap-2 border-b-2 border-maxan-500 pb-2 text-sm font-semibold text-ink transition hover:border-ink"
          >
            <Mail className="h-4 w-4" /> direccioncomercial@maxan.com.mx
          </a>
        </div>
      </SectionWrapper>
      <CTA title="¿Listo para obtener el Distintivo NMX-R-025?" />
    </>
  );
}
