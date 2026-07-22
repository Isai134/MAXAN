import { Scale } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ResourceGrid } from '@/components/ResourceGrid';
import { SectionWrapper } from '@/components/SectionWrapper';
import { transparencyDocuments } from '@/data/transparency';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Transparencia',
  'Procedimientos, reglamentos, contratos, formatos y reportes de centros de trabajo certificados por MAXAN.',
  '/transparencia',
);

export default function TransparencyPage() {
  const categories = ['Procedimientos', 'Marca', 'Clientes', 'Reportes'] as const;
  return (
    <>
      <PageHeader
        eyebrow="Transparencia"
        title="Documentos públicos y rendición de cuentas"
        description="Procedimientos, derechos, reglamentos, formatos y reportes de centros de trabajo certificados, disponibles en un solo lugar."
        breadcrumbs={[{ label: 'Transparencia' }]}
        aside={
          <div className="rounded-3xl border border-maxan-200 bg-white/80 p-6 shadow-soft">
            <Scale className="h-8 w-8 text-maxan-700" />
            <p className="mt-4 font-semibold">Objetividad e imparcialidad</p>
          </div>
        }
      />
      <SectionWrapper>
        <section className="rounded-3xl border border-maxan-200 bg-maxan-50 p-7">
          <h2 className="text-2xl font-semibold">Apoyo financiero</h2>
          <p className="mt-4 max-w-5xl leading-8 text-slate-600">
            El apoyo financiero de MAXAN es solventado por sus socios y ha decidido reservar un
            porcentaje para conservar una estabilidad financiera. Adicionalmente, se cuenta con una
            fianza contratada para asegurar el cumplimiento de cada servicio, derechos y deberes de
            solicitantes y clientes.
          </p>
          <h3 className="mt-7 font-semibold">Derechos de los solicitantes</h3>
          <p className="mt-2 text-slate-600">
            No ser discriminado. Recibir un servicio de calidad y calidez. Ser tratado con igualdad.
          </p>
        </section>
        <div className="mt-16 space-y-16">
          {categories.map((category) => (
            <section key={category}>
              <p className="eyebrow">{category}</p>
              <ResourceGrid
                resources={transparencyDocuments
                  .filter((document) => document.category === category)
                  .map((document) => ({
                    name: document.title,
                    href: document.href,
                    description: document.description,
                  }))}
              />
            </section>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
