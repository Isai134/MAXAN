import { CalendarCheck } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';

export default async function EventRegistrationPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  return (
    <>
      <PageHeader
        eyebrow="Capacitaciones"
        title="Registro de actividad"
        description={`Registro para la actividad ${decodeURIComponent(eventId)}. La ruta se conserva para compatibilidad con invitaciones anteriores.`}
        breadcrumbs={[{ label: 'Registro' }]}
      />
      <SectionWrapper className="max-w-3xl">
        <div className="border-y border-ink/15 py-10 text-center">
          <CalendarCheck className="mx-auto h-12 w-12 text-maxan-700" />
          <h2 className="mt-6 text-2xl font-semibold">Solicita el formato de inscripción</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Las inscripciones deben realizarse con al menos siete días de anticipación. Confirma
            fecha y cupo con la Dirección Comercial.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contacto">Contactar a MAXAN</ButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
