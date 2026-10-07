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

export function ResourceGrid({
  resources,
  headingLevel = 'h2',
}: {
  resources: Resource[];
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  return (
    <div className="border-t border-ink/15">
      {resources.map((resource, index) => (
        <article
          key={`${resource.name}-${resource.href}`}
          className="group grid gap-x-5 gap-y-4 border-b border-ink/15 py-7 sm:grid-cols-[5rem_1fr_auto] sm:items-start"
        >
          {resource.cover ? (
            <div className="relative aspect-[4/3] w-20 overflow-hidden bg-surface">
              <Image
                src={localAsset(resource.cover)}
                alt={`Portada de ${resource.name}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] w-20 flex-col justify-between border border-ink/15 p-3 text-maxan-700">
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.08em]">
                {fileType(resource.href)}
              </span>
            </div>
          )}
          <div className="min-w-0">
            <p className="meta">
              Documento {String(index + 1).padStart(2, '0')} · {fileType(resource.href)}
            </p>
            <Heading className="mt-2 font-serif text-xl font-normal text-ink [overflow-wrap:anywhere]">
              {resource.name}
            </Heading>
            {resource.description && (
              <p className="mt-2 max-w-2xl text-sm leading-6 text-secondary">
                {resource.description}
              </p>
            )}
          </div>
          <a
            href={resource.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-maxan-700 underline underline-offset-4 hover:text-maxan-800"
          >
            Descargar <Download className="h-4 w-4" aria-hidden="true" />
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  );
}
