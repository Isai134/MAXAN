import { CTA } from '@/components/CTA';
import { ArticleCard } from '@/components/ArticleCard';
import { MotionReveal } from '@/components/MotionReveal';
import { SectionWrapper } from '@/components/SectionWrapper';
import { articles } from '@/lib/content';
import { HomeCertificate } from '@/sections/HomeCertificate';
import { HomeDownloads } from '@/sections/HomeDownloads';
import { HomeHero } from '@/sections/HomeHero';
import { HomeServices } from '@/sections/HomeServices';
import { HomeTrust } from '@/sections/HomeTrust';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeTrust />
      <HomeCertificate />
      <HomeDownloads />
      <div className="bg-mist">
        <SectionWrapper>
          <MotionReveal className="max-w-3xl">
            <p className="eyebrow">Comunicados</p>
            <h2 className="section-title">
              Ideas y recursos para centros de trabajo más igualitarios.
            </h2>
          </MotionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </SectionWrapper>
      </div>
      <CTA />
    </>
  );
}
