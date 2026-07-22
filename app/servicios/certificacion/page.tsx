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
  'Servicio de Certificación',
  'Ventajas, beneficios y proceso comercial para certificar un centro de trabajo con MAXAN.',
  '/servicios/certificacion',
);

function CheckedList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7 text-slate-600">
          <Check className="mt-1 h-5 w-5 shrink-0 text-maxan-700" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CertificationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Certificación NMX-R-025-SCFI-2015"
        description="Auditorías objetivas, atención directa y un proceso documentado para reconocer prácticas de igualdad laboral y no discriminación."
        breadcrumbs={[{ label: 'Servicios' }, { label: 'Certificación' }]}
        aside={<ButtonLink href="/solicitud-servicio">Solicitar cotización</ButtonLink>}
      />
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <Image
              src="/images/pages/comercial.1f53601.jpg"
              width={1200}
              height={800}
              alt="Proceso comercial de certificación MAXAN"
              className="rounded-[2rem] shadow-card"
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="eyebrow">Ventajas de certificarte con nosotros</p>
            <h2 className="section-title">Rigor técnico con atención cercana.</h2>
            <div className="mt-8">
              <CheckedList items={certificationAdvantages} />
            </div>
          </MotionReveal>
        </div>
      </SectionWrapper>
      <div className="bg-mist">
        <SectionWrapper>
          <MotionReveal className="max-w-3xl">
            <p className="eyebrow">Por qué es importante</p>
            <h2 className="section-title">
              La certificación convierte las políticas en prácticas verificables.
            </h2>
          </MotionReveal>
          <div className="mt-10 columns-1 gap-10 rounded-3xl border border-ink/10 bg-white p-8 shadow-soft md:columns-2">
            <CheckedList items={certificationImportance} />
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <MotionReveal className="max-w-3xl">
          <p className="eyebrow">Procedimiento comercial</p>
          <h2 className="section-title">Del primer formato al contrato de certificación.</h2>
        </MotionReveal>
        <div className="mt-12 space-y-4">
          {commercialProcess.map(([title, description], index) => (
            <MotionReveal key={title} delay={index * 0.04}>
              <article className="grid gap-4 rounded-3xl border border-ink/10 bg-white p-6 sm:grid-cols-[72px_1fr] sm:items-start">
                <span className="text-4xl font-semibold text-maxan-300">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{description}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/documents/forms/SolicitudCertificacionProducto.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white"
          >
            <Download className="h-4 w-4" /> Descargar solicitud PDF
          </a>
          <a
            href="mailto:direccioncomercial@maxan.com.mx"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold"
          >
            <Mail className="h-4 w-4" /> direccioncomercial@maxan.com.mx
          </a>
        </div>
      </SectionWrapper>
      <CTA />
    </>
  );
}
