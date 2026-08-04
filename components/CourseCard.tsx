import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { localAsset } from '@/lib/assets';
import type { Training } from '@/types';

export function CourseCard({ course }: { course: Training }) {
  return (
    <article className="group grid gap-6 border-t border-ink/15 py-7 md:grid-cols-[150px_1fr_auto] md:items-start md:py-9">
      <div className="relative aspect-[4/3] overflow-hidden bg-maxan-100">
        <Image
          src={localAsset(course.cover?.url)}
          alt={`Portada del curso ${course.Title}`}
          fill
          sizes="(max-width: 768px) 100vw, 150px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[.18em] text-maxan-700">
          Curso 0{course.order}
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-8 tracking-tight">
          {course.Title}
        </h2>
      </div>
      <Link
        href={`/servicios/cursos/${course.slug}`}
        className="inline-flex w-fit items-center gap-2 border-b-2 border-maxan-600 pb-2 text-sm font-semibold text-maxan-800 transition hover:border-ink hover:text-ink md:mt-1"
      >
        Ver programa <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
