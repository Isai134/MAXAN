import { ArrowUpRight, Download, FileText } from 'lucide-react';
import Image from 'next/image';
import { localAsset } from '@/lib/assets';

type Resource = {
  name: string;
  href: string;
  cover?: string | null;
  description?: string;
};

function fileType(href: string) {
  const extension = href.split('?')[0].split('.').pop()?.toUpperCase();
  return extension && ['PDF', 'DOC', 'DOCX', 'XLS', 'XLSX'].includes(extension)
    ? extension
    : 'ARCHIVO';
}

export function ResourceGrid({ resources }: { resources: Resource[] }) {
  return (
    <div className="border-t border-ink/15">
      {resources.map((resource, index) => (
        <article
          key={`${resource.name}-${resource.href}`}
          className="group grid gap-x-5 gap-y-4 border-b border-ink/15 py-7 sm:grid-cols-[80px_1fr_auto] sm:items-start sm:py-9"
        >
          {resource.cover ? (
            <div className="relative aspect-[3/4] overflow-hidden bg-maxan-100">
              <Image
                src={localAsset(resource.cover)}
                alt={`Portada de ${resource.name}`}
                fill
                sizes="80px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex min-h-20 flex-col justify-between border-l-2 border-maxan-500 pl-3 text-maxan-800">
              <FileText className="h-5 w-5" aria-hidden="true" />
              <span className="text-[10px] font-bold tracking-[.16em]">
                {fileType(resource.href)}
              </span>
            </div>
          )}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-maxan-700">
              Archivo {String(index + 1).padStart(2, '0')} · {fileType(resource.href)}
            </p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-ink">
              {resource.name}
            </h2>
            {resource.description && (
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                {resource.description}
              </p>
            )}
          </div>
          <a
            href={resource.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 border-b-2 border-maxan-600 pb-2 text-sm font-semibold text-maxan-800 transition hover:border-ink hover:text-ink"
          >
            Descargar <Download className="h-4 w-4" aria-hidden="true" />
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  );
}
