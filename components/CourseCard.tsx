import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { localAsset } from '@/lib/assets';
import type { Training } from '@/types';

export function CourseCard({ course }: { course: Training }) {
  return (
    <article className="group grid gap-6 border-t border-ink/15 py-7 md:grid-cols-[150px_1fr_auto] md:items-start">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={localAsset(course.cover?.url)}
          alt={`Portada del curso ${course.Title}`}
          fill
          sizes="(max-width: 768px) 100vw, 150px"
          className="object-cover"
        />
      </div>
      <div>
        <p className="meta">Curso {String(course.order).padStart(2, '0')}</p>
        <h2 className="mt-2 max-w-2xl font-serif text-2xl font-normal text-ink">{course.Title}</h2>
      </div>
      <Link
        href={`/servicios/cursos/${course.slug}`}
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-maxan-700 underline underline-offset-4 hover:text-maxan-800 md:mt-1"
      >
        Ver programa <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
