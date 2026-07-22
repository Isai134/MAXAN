import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { localAsset } from '@/lib/assets';
import type { Training } from '@/types';

export function CourseCard({ course }: { course: Training }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-maxan-50">
        <Image
          src={localAsset(course.cover?.url)}
          alt={`Portada del curso ${course.Title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-maxan-700">
          Curso {course.order}
        </p>
        <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight">{course.Title}</h2>
        <Link
          href={`/servicios/cursos/${course.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-maxan-700"
        >
          Ver programa <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
