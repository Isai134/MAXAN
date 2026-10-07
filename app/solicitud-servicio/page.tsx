import { Download, FileText } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Solicitud de servicio',
  'Formulario y formatos para solicitar productos, sistemas de gestión, inspección o capacitación a MAXAN.',
  '/solicitud-servicio',
);
export default function ServiceRequestPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solicitud"
        title="Cuéntanos qué necesita tu organización"
        description="Completa el formulario para solicitar una cotización de productos, sistemas de gestión, inspección o capacitación."
        breadcrumbs={[{ label: 'Solicitud de servicio' }]}
      />
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[.36fr_1fr]">
          <aside className="h-fit border-l-2 border-maxan-600 pl-6 lg:sticky lg:top-32">
            <FileText className="h-8 w-8 text-maxan-700" />
            <h2 className="mt-6 font-serif text-2xl font-normal">Formato del distintivo</h2>
            <p className="mt-3 leading-7 text-secondary">
              También puedes requisitar el documento y enviarlo firmado a
              direccioncomercial@maxan.com.mx.
            </p>
            <div className="mt-7 space-y-4">
              <a
                href="/documents/forms/SolicitudCertificacionProducto.pdf"
                target="_blank"
                className="flex items-center gap-2 border-b border-ink/15 pb-3 text-sm font-semibold text-maxan-800 transition hover:border-maxan-600"
              >
                <span className="border-l-2 border-maxan-600 pl-2 font-mono text-[10px] tracking-[.14em]">
                  PDF
                </span>
                <Download className="h-4 w-4" /> Solicitud NMX-R-025
              </a>
              <a
                href="/documents/forms/SolicitudCertificacionProducto.docx"
                className="flex items-center gap-2 border-b border-ink/15 pb-3 text-sm font-semibold text-maxan-800 transition hover:border-maxan-600"
              >
                <span className="border-l-2 border-maxan-600 pl-2 font-mono text-[10px] tracking-[.14em]">
                  DOCX
                </span>
                <Download className="h-4 w-4" /> Solicitud NMX-R-025
              </a>
            </div>
          </aside>
          <ContactForm serviceRequest />
        </div>
      </SectionWrapper>
    </>
  );
}
