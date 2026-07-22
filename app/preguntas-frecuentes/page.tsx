import { Accordion } from '@/components/Accordion';
import { CTA } from '@/components/CTA';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { faq } from '@/data/faq';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Preguntas Frecuentes',
  'Respuestas sobre el proceso, costo, vigencia y requisitos de certificación NMX-R-025.',
  '/preguntas-frecuentes',
);

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ayuda"
        title="Preguntas frecuentes"
        description="Respuestas claras a las dudas más comunes sobre la certificación, la implementación y el proceso de auditoría."
        breadcrumbs={[{ label: 'Preguntas frecuentes' }]}
      />
      <SectionWrapper className="max-w-5xl">
        <Accordion items={faq} />
      </SectionWrapper>
      <CTA title="¿Tu pregunta no aparece aquí? Nuestro equipo puede orientarte." />
    </>
  );
}
