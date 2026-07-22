import { BadgeCheck, Mail } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return pageMetadata(
    `Certificado ${id}`,
    `Consulta pública del certificado MAXAN ${id}.`,
    `/certificado/${id}`,
  );
}
export default async function CertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <PageHeader
        eyebrow="Consulta pública"
        title={`Certificado ${decodeURIComponent(id)}`}
        description="La ruta de consulta conserva la compatibilidad con el sitio anterior y está preparada para conectarse a la base de certificados vigente."
        breadcrumbs={[{ label: 'Certificado' }, { label: decodeURIComponent(id) }]}
      />
      <SectionWrapper className="max-w-4xl">
        <div className="rounded-[2rem] border border-maxan-200 bg-white p-8 text-center shadow-card sm:p-12">
          <BadgeCheck className="mx-auto h-14 w-14 text-maxan-700" />
          <h2 className="mt-7 text-3xl font-semibold">Verificación pendiente de conexión</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            Este proyecto no incluye credenciales ni acceso a la base privada de certificados. Para
            confirmar vigencia, alcance y datos del centro de trabajo, contacta directamente a
            MAXAN.
          </p>
          <a
            href="mailto:informes@maxan.com.mx"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white"
          >
            <Mail className="h-4 w-4" /> informes@maxan.com.mx
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
