import { MotionReveal } from '@/components/MotionReveal';
import { ResourceGrid } from '@/components/ResourceGrid';
import { SectionWrapper } from '@/components/SectionWrapper';
import { homeDownloads } from '@/lib/content';
import { localAsset } from '@/lib/assets';

export function HomeDownloads() {
  const resources = homeDownloads.map((item) => ({
    name: item.Document.name,
    href: localAsset(item.Document.url),
    cover: item.Cover.url,
    description: 'Documento vigente publicado por MAXAN Certificación.',
  }));
  return (
    <SectionWrapper>
      <MotionReveal className="max-w-3xl">
        <p className="eyebrow">Documentos destacados</p>
        <h2 className="section-title">Información útil, descargable y bien organizada.</h2>
        <p className="body-copy mt-6">
          Guías, materiales de apoyo, información de cursos y documentos de acreditación disponibles
          desde la portada actual.
        </p>
      </MotionReveal>
      <MotionReveal className="mt-12">
        <ResourceGrid resources={resources} />
      </MotionReveal>
    </SectionWrapper>
  );
}
