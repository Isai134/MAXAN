import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { localAsset } from '@/lib/assets';
import type { Article } from '@/types';
import { formatDate } from '@/utils/format';

export function ArticleCard({
  article,
  headingLevel: Heading = 'h2',
}: {
  article: Article;
  headingLevel?: 'h2' | 'h3';
}) {
  return (
    <article className="group border-t border-ink/15 py-6">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={localAsset(article.Cover?.url)}
          alt={`Imagen de ${article.Title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <p className="mt-5 meta">{formatDate(article.PublishDate)}</p>
      <Heading className="mt-3 font-serif text-xl font-normal text-ink">{article.Title}</Heading>
      <p className="mt-2 text-sm text-muted">Por {article.Author}</p>
      <Link
        href={`/boletines/comunicados/${article.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-maxan-700 underline underline-offset-4 group-hover:text-maxan-800"
      >
        Leer comunicado <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
