import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { RichText } from '@/components/RichText';
import { SectionWrapper } from '@/components/SectionWrapper';
import { localAsset } from '@/lib/assets';
import { articles, findArticle } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { formatDate } from '@/utils/format';

export function generateStaticParams() {
  return articles.map((article) => ({ articleId: article.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleId: string }>;
}): Promise<Metadata> {
  const { articleId } = await params;
  const article = findArticle(articleId);
  return article
    ? pageMetadata(
        article.Title,
        article.Content.slice(0, 150),
        `/boletines/comunicados/${articleId}`,
      )
    : {};
}
export default async function ArticlePage({ params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params;
  const article = findArticle(articleId);
  if (!article) notFound();
  return (
    <>
      <PageHeader
        eyebrow="Comunicados"
        title={article.Title}
        description={`${formatDate(article.PublishDate)} · ${article.Author}`}
        breadcrumbs={[
          { label: 'Recursos' },
          { label: 'Comunicados', href: '/boletines/comunicados' },
          { label: article.Title },
        ]}
      />
      <SectionWrapper className="max-w-5xl">
        <div className="relative mb-12 aspect-[16/8] overflow-hidden bg-maxan-100">
          <Image
            src={localAsset(article.Cover?.url)}
            alt={`Imagen de ${article.Title}`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <article className="border-y border-ink/15 py-7 sm:py-10">
          <RichText content={article.Content} />
        </article>
      </SectionWrapper>
    </>
  );
}
