import { Download, FileText } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Solicitud de servicio',
  'Formulario y formatos para solicitar servicios de certificación o capacitación a MAXAN.',
  '/solicitud-servicio',
);
export default function ServiceRequestPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solicitud"
        title="Cuéntanos qué necesita tu organización"
        description="Completa el formulario para solicitar una cotización o descarga el formato oficial de solicitud de certificación."
        breadcrumbs={[{ label: 'Solicitud de servicio' }]}
      />
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[.36fr_1fr]">
          <aside className="h-fit rounded-3xl bg-maxan-50 p-7 lg:sticky lg:top-32">
            <FileText className="h-8 w-8 text-maxan-700" />
            <h2 className="mt-6 text-2xl font-semibold">Formatos oficiales</h2>
            <p className="mt-3 leading-7 text-slate-600">
              También puedes requisitar el documento y enviarlo firmado a
              direccioncomercial@maxan.com.mx.
            </p>
            <div className="mt-7 space-y-3">
              <a
                href="/documents/forms/SolicitudCertificacionProducto.pdf"
                target="_blank"
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold"
              >
                <Download className="h-4 w-4" /> Solicitud PDF
              </a>
              <a
                href="/documents/forms/SolicitudCertificacionProducto.docx"
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold"
              >
                <Download className="h-4 w-4" /> Solicitud Word
              </a>
            </div>
          </aside>
          <ContactForm serviceRequest />
        </div>
      </SectionWrapper>
    </>
  );
}
