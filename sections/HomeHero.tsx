import { ButtonLink } from '@/components/ButtonLink';
import { CertificateLookup } from '@/components/CertificateLookup';
import { MotionReveal } from '@/components/MotionReveal';

const registryRows = [
  { term: 'Acreditación', value: 'EMA 155/19', code: true },
  { term: 'Norma principal', value: 'NMX-R-025-SCFI-2015', code: true },
  { term: 'Vigencia', value: '4 años, con vigilancia a los 2', code: false },
  { term: 'Sede', value: 'Zinacantepec, Estado de México', code: false },
];

export function HomeHero() {
  return (
    <section className="border-b border-ink/15">
      <div className="container-maxan grid gap-12 pb-16 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        <MotionReveal className="lg:col-span-7">
          <p className="eyebrow">Organismo de certificación · Acreditación EMA 155/19</p>
          <h1 className="display">
            Certificación en igualdad laboral, sistemas de gestión e inspección.
          </h1>
          <p className="body-copy mt-7">
            MAXAN Certificación es un organismo mexicano acreditado ante la Entidad Mexicana de
            Acreditación. Evaluamos con imparcialidad el cumplimiento de la NMX-R-025-SCFI-2015 en
            Igualdad Laboral y No Discriminación, de sistemas de gestión basados en normas ISO y de
            servicios de inspección.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/solicitud-servicio" variant="primary">
              Solicitar un servicio
            </ButtonLink>
            <ButtonLink href="#servicios" variant="secondary">
              Ver servicios
            </ButtonLink>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08} className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <div className="border border-ink/15 bg-elevated">
            <div className="flex items-center justify-between border-b border-ink/15 px-6 py-3">
              <p className="meta">Registro público</p>
              <p className="meta">Consulta</p>
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl font-normal text-ink">
                Verifica un certificado MAXAN
              </h2>
              <p className="mt-2 text-sm text-secondary">
                Consulta estatus, vigencia y datos del registro con el número de certificado.
              </p>
              <div className="mt-6">
                <CertificateLookup />
              </div>
              <dl className="mt-6">
                {registryRows.map((row) => (
                  <div
                    key={row.term}
                    className="grid grid-cols-[7.5rem_1fr] border-t border-ink/15 py-3"
                  >
                    <dt className="meta">{row.term}</dt>
                    <dd className={`text-sm text-ink ${row.code ? 'font-mono' : ''}`}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
