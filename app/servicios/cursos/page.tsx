import { CourseCard } from '@/components/CourseCard';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { trainings } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Cursos',
  'Cursos especializados de MAXAN para la implantación, interpretación y auditoría de la NMX-R-025.',
  '/servicios/cursos',
);

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Cursos"
        description="Programas especializados para fortalecer conocimientos y herramientas en igualdad laboral, no discriminación, auditoría y sistemas de gestión."
        breadcrumbs={[{ label: 'Servicios' }, { label: 'Cursos' }]}
      />
      <SectionWrapper>
        <div className="mx-auto max-w-5xl">
          {trainings.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
