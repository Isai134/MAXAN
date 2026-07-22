import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CTA } from '@/components/CTA';
import { PageHeader } from '@/components/PageHeader';
import { RichText } from '@/components/RichText';
import { SectionWrapper } from '@/components/SectionWrapper';
import { localAsset } from '@/lib/assets';
import { findTraining, trainings } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return trainings.map((course) => ({ courseId: course.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseId: string }>;
}): Promise<Metadata> {
  const { courseId } = await params;
  const course = findTraining(courseId);
  return course
    ? pageMetadata(
        course.Title,
        course.additionalText1 ?? course.AdditionalText1 ?? 'Curso MAXAN.',
        `/servicios/cursos/${courseId}`,
      )
    : {};
}

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = findTraining(courseId);
  if (!course) notFound();
  const sections = [
    ['Objetivo', course.additionalText1 ?? course.AdditionalText1],
    ['Descripción', course.additionalText2 ?? course.AdditionalText2],
    ['Información para participantes', course.additionalText3 ?? course.AdditionalText3],
    ['Temario', course.additionalText4 ?? course.AdditionalText4],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));
  return (
    <>
      <PageHeader
        eyebrow="Cursos"
        title={course.Title}
        description={
          course.additionalText1 ?? course.AdditionalText1 ?? 'Programa de capacitación MAXAN.'
        }
        breadcrumbs={[
          { label: 'Servicios' },
          { label: 'Cursos', href: '/servicios/cursos' },
          { label: course.Title },
        ]}
      />
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-maxan-50 shadow-card lg:sticky lg:top-32">
              <Image
                src={localAsset(course.cover?.url)}
                alt={`Portada del curso ${course.Title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            {sections.map(([title, content]) => (
              <section
                key={title}
                className="rounded-3xl border border-ink/10 bg-white p-7 shadow-soft"
              >
                <h2 className="text-2xl font-semibold">{title}</h2>
                <div className="mt-5">
                  <RichText content={content} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <CTA title="¿Te interesa este curso? Solicita fechas, cupo y modalidad." />
    </>
  );
}
