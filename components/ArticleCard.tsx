import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { localAsset } from '@/lib/assets';
import type { Article } from '@/types';
import { formatDate } from '@/utils/format';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group border-t border-ink/15 py-6">
      <div className="relative aspect-[16/9] overflow-hidden bg-maxan-100">
        <Image
          src={localAsset(article.Cover?.url)}
          alt={`Imagen de ${article.Title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-maxan-700">
        {formatDate(article.PublishDate)}
      </p>
      <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight">{article.Title}</h2>
      <p className="mt-3 text-sm text-slate-500">Por {article.Author}</p>
      <Link
        href={`/boletines/comunicados/${article.slug}`}
        className="mt-6 inline-flex items-center gap-2 border-b-2 border-maxan-600 pb-2 text-sm font-semibold text-maxan-800 transition hover:border-ink hover:text-ink"
      >
        Leer comunicado <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
