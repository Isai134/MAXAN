import { ArticleCard } from '@/components/ArticleCard';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { articles } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Comunicados',
  'Artículos de MAXAN sobre igualdad laboral, lenguaje incluyente, clima laboral, movilidad y contratación.',
  '/boletines/comunicados',
);
export default function ArticlesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recursos"
        title="Comunicados"
        description="Análisis y contenidos de MAXAN sobre igualdad laboral, no discriminación y buenas prácticas en los centros de trabajo."
        breadcrumbs={[{ label: 'Recursos' }, { label: 'Comunicados' }]}
      />
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
