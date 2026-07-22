import { CertificateLookup } from '@/components/CertificateLookup';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Consulta de certificado',
  'Consulta un certificado emitido por MAXAN.',
  '/certificado',
);
export default function CertificateIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consulta pública"
        title="Verifica un certificado"
        description="Ingresa el número indicado en el documento emitido por MAXAN."
        breadcrumbs={[{ label: 'Certificado' }]}
      />
      <SectionWrapper className="max-w-3xl">
        <CertificateLookup />
      </SectionWrapper>
    </>
  );
}
