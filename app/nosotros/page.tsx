import { BadgeCheck, Eye, Scale, Target } from 'lucide-react';
import Image from 'next/image';
import { CTA } from '@/components/CTA';
import { MotionReveal } from '@/components/MotionReveal';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { aboutContent, values } from '@/data/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '¿Quiénes somos?',
  'Conoce la misión, visión, política de calidad y valores de MAXAN Certificación.',
  '/nosotros',
);

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Certificar con objetividad. Construir confianza."
        description={aboutContent.accreditation}
        breadcrumbs={[{ label: 'Nosotros' }]}
        aside={
          <div className="rounded-3xl border border-maxan-200 bg-white/80 p-6 shadow-soft">
            <BadgeCheck className="h-8 w-8 text-maxan-700" />
            <p className="mt-4 text-2xl font-semibold">Acreditación 155/19</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Entidad Mexicana de Acreditación
            </p>
          </div>
        }
      />
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <MotionReveal>
            <Image
              src="/images/pages/certificado-lg.d832908.jpg"
              width={1200}
              height={800}
              alt="Certificación MAXAN"
              className="rounded-[2rem] shadow-card"
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="eyebrow">Dirección estratégica</p>
            <h2 className="section-title">
              Un organismo al servicio de la calidad y la competitividad.
            </h2>
            <p className="body-copy mt-6">{aboutContent.strategicDirection}</p>
          </MotionReveal>
        </div>
      </SectionWrapper>
      <div className="bg-mist">
        <SectionWrapper>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ['Misión', aboutContent.mission, Target],
              ['Visión', aboutContent.vision, Eye],
              ['Política de calidad', aboutContent.qualityPolicy, Scale],
            ].map(([title, text, Icon]) => (
              <MotionReveal key={title as string} className="h-full">
                <article className="h-full rounded-3xl border border-ink/10 bg-white p-7 shadow-soft">
                  <Icon className="h-8 w-8 text-maxan-700" />
                  <h2 className="mt-7 text-2xl font-semibold">{title as string}</h2>
                  <p className="mt-5 leading-7 text-slate-600">{text as string}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-maxan-200 bg-maxan-50 p-6 leading-7 text-maxan-950">
            {aboutContent.equalPolicy}
          </p>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <MotionReveal className="max-w-2xl">
          <p className="eyebrow">Nuestros valores</p>
          <h2 className="section-title">La forma en que hacemos nuestro trabajo.</h2>
        </MotionReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => (
            <MotionReveal key={value.title} delay={index * 0.06}>
              <article className="h-full rounded-3xl border border-ink/10 bg-white p-6 text-center shadow-soft">
                <Image
                  src={value.image}
                  alt=""
                  width={110}
                  height={110}
                  className="mx-auto h-20 w-20 object-contain"
                />
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>
      <CTA />
    </>
  );
}
