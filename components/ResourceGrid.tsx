import { ArrowUpRight, Download, FileText } from 'lucide-react';
import Image from 'next/image';
import { localAsset } from '@/lib/assets';

export function ResourceGrid({
  resources,
}: {
  resources: { name: string; href: string; cover?: string | null; description?: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <article
          key={`${resource.name}-${resource.href}`}
          className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
        >
          {resource.cover ? (
            <div className="relative aspect-[4/3] overflow-hidden bg-maxan-50">
              <Image
                src={localAsset(resource.cover)}
                alt={`Portada de ${resource.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="grid aspect-[4/2.1] place-items-center bg-maxan-50">
              <FileText className="h-12 w-12 text-maxan-600" />
            </div>
          )}
          <div className="p-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">{resource.name}</h2>
            {resource.description && (
              <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description}</p>
            )}
            <a
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-maxan-700 hover:text-maxan-900"
            >
              Descargar <Download className="h-4 w-4" />
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
