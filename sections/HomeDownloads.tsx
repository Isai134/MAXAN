import Link from 'next/link';
import { MotionReveal } from '@/components/MotionReveal';
import { ResourceGrid } from '@/components/ResourceGrid';
import { SectionWrapper } from '@/components/SectionWrapper';
import { articles, homeDownloads } from '@/lib/content';
import { localAsset } from '@/lib/assets';
import { formatDate } from '@/utils/format';

// CMS file names ("GUIA_DE_APLICACION_025_MAXAN.pdf") → readable titles.
function documentTitle(fileName: string) {
  return fileName
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/\s*\(\d+\)$/, '')
    .replace(/_+/g, ' ')
    .trim();
}

export function HomeDownloads() {
  const resources = homeDownloads.map((item) => ({
    name: documentTitle(item.Document.name),
    href: localAsset(item.Document.url),
    cover: item.Cover.url,
  }));
  const recentArticles = articles.slice(0, 3);

  return (
    <SectionWrapper>
      <MotionReveal>
        <p className="meta border-t border-ink/15 pt-4">04 · Documentos y comunicados</p>
      </MotionReveal>
      <MotionReveal className="mt-8 max-w-3xl" delay={0.04}>
        <h2 className="section-title">Documentos vigentes y comunicados.</h2>
      </MotionReveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="meta">Documentos destacados</p>
          <div className="mt-4">
            <ResourceGrid resources={resources} headingLevel="h3" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <p className="meta">Comunicados recientes</p>
          <div className="mt-4 border-t border-ink/15">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/boletines/comunicados/${article.slug}`}
                className="group block border-b border-ink/15 py-6"
              >
                <p className="meta">{formatDate(article.PublishDate)}</p>
                <h3 className="mt-2 font-serif text-xl font-normal text-ink transition-colors group-hover:text-maxan-800">
                  {article.Title}
                </h3>
              </Link>
            ))}
          </div>
          <Link
            href="/boletines/comunicados"
            className="mt-6 inline-block text-sm font-medium text-maxan-700 underline underline-offset-4"
          >
            Ver todos los comunicados
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
