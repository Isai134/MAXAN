import { BadgeCheck, CalendarDays, CircleAlert, FileCheck2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { certificates, findCertificate } from '@/lib/certificates';
import { pageMetadata } from '@/lib/seo';
import { formatDate } from '@/utils/format';

export function generateStaticParams() {
  return certificates.map((certificate) => ({ id: certificate.certificateNumber }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const certificate = findCertificate(decodeURIComponent(id));
  return certificate
    ? pageMetadata(
        `Certificado ${certificate.certificateNumber}`,
        `Consulta pública del certificado de ${certificate.organization}.`,
        `/certificado/${certificate.certificateNumber}`,
      )
    : {};
}

export default async function CertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const certificate = findCertificate(decodeURIComponent(id));
  if (!certificate) notFound();

  const isCurrent = certificate.status === 'vigente';
  const statusLabel = isCurrent ? 'Certificado vigente' : 'Certificado vencido';

  return (
    <>
      <PageHeader
        eyebrow="Consulta pública"
        title={certificate.certificateNumber}
        description={`Registro emitido a nombre de ${certificate.organization}.`}
        breadcrumbs={[
          { label: 'Certificado', href: '/certificado' },
          { label: certificate.certificateNumber },
        ]}
      />
      <SectionWrapper className="max-w-5xl">
        <div className="grid gap-10 border-y border-ink/15 py-10 lg:grid-cols-[.7fr_1.3fr] lg:py-14">
          <div className="border-l-2 border-maxan-600 pl-5">
            {isCurrent ? (
              <BadgeCheck className="h-10 w-10 text-maxan-700" aria-hidden="true" />
            ) : (
              <CircleAlert className="h-10 w-10 text-muted" aria-hidden="true" />
            )}
            <p
              className={`mt-6 text-2xl font-semibold ${isCurrent ? 'text-maxan-800' : 'text-secondary'}`}
            >
              {statusLabel}
            </p>
            <p className="mt-3 text-sm leading-6 text-secondary">
              Vigencia hasta el {formatDate(certificate.validUntil)}.
            </p>
          </div>
          <div>
            <p className="eyebrow">Datos del certificado</p>
            <h2 className="font-serif text-3xl font-normal tracking-[-0.015em]">
              {certificate.organization}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-secondary">{certificate.standard}</p>
            <dl className="mt-8 border-t border-ink/15">
              {[
                ['Alcance', certificate.scope, FileCheck2],
                ['Fecha de emisión', formatDate(certificate.issueDate), CalendarDays],
                ['Inicio de vigencia', formatDate(certificate.validFrom), CalendarDays],
                ['Última vigilancia', formatDate(certificate.lastReviewDate), CalendarDays],
              ].map(([label, value, Icon]) => {
                const DetailIcon = Icon as typeof CalendarDays;
                return (
                  <div
                    key={label as string}
                    className="grid gap-3 border-b border-ink/15 py-5 sm:grid-cols-[180px_1fr]"
                  >
                    <dt className="flex items-center gap-2 text-sm font-semibold text-ink">
                      <DetailIcon className="h-4 w-4 text-maxan-700" aria-hidden="true" />
                      {label as string}
                    </dt>
                    <dd className="leading-7 text-secondary">{value as string}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
