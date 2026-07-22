import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { localAsset } from '@/lib/assets';
import type { Article } from '@/types';
import { formatDate } from '@/utils/format';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden bg-maxan-50">
        <Image
          src={localAsset(article.Cover?.url)}
          alt={`Imagen de ${article.Title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-maxan-700">
          {formatDate(article.PublishDate)}
        </p>
        <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight">{article.Title}</h2>
        <p className="mt-3 text-sm text-slate-500">Por {article.Author}</p>
        <Link
          href={`/boletines/comunicados/${article.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-maxan-700"
        >
          Leer comunicado <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
