import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SelfAssessment } from '@/components/SelfAssessment';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Autoevaluación',
  'Herramienta orientativa de autoevaluación para la NMX-R-025-SCFI-2015.',
  '/evaluacion',
);
export default function EvaluationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Herramienta"
        title="Autoevaluación inicial"
        description="Marca las prácticas que tu centro de trabajo ya tiene implementadas. El resultado es orientativo y no sustituye la auditoría de certificación."
        breadcrumbs={[{ label: 'Evaluación' }]}
      />
      <SectionWrapper>
        <SelfAssessment />
      </SectionWrapper>
    </>
  );
}
