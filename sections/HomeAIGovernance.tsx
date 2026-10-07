import { ButtonLink } from '@/components/ButtonLink';
import { MotionReveal } from '@/components/MotionReveal';
import { pillars } from '@/data/iso-42001';

export function HomeAIGovernance() {
  return (
    <section aria-labelledby="ai-governance-heading" className="bg-ink text-white">
      <div className="container-maxan py-20 sm:py-24 lg:py-28">
        <p className="mb-12 border-t border-white/15 pt-4 font-mono text-xs uppercase tracking-[0.08em] text-white/50">
          03 · Referencia
        </p>
        <div className="grid gap-12 lg:grid-cols-12">
          <MotionReveal className="lg:col-span-5">
            <p className="mb-5 inline-flex items-center gap-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-maxan-300">
              <span className="inline-block h-px w-6 bg-current" aria-hidden="true" />
              ISO/IEC 42001
            </p>
            <h2 id="ai-governance-heading" className="section-title text-white">
              Gobernanza responsable de Inteligencia Artificial
            </h2>
            <p className="mt-6 max-w-prose text-pretty leading-8 text-white/70">
              ISO/IEC 42001:2023 es la primera norma internacional que establece requisitos para un
              Sistema de Gestión de Inteligencia Artificial. Ofrece a las organizaciones que
              desarrollan, proveen o utilizan IA un marco para gestionar riesgos, transparencia,
              datos, supervisión humana y mejora continua a lo largo del ciclo de vida de sus
              sistemas.
            </p>
            <p className="mt-4 max-w-prose text-pretty leading-7 text-white/70">
              No es una guía para programar modelos: es un sistema de gestión para decidir y
              controlar cómo una organización usa o desarrolla IA.
            </p>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-white/50">
                Estructura compatible con
              </p>
              <p className="mt-2 font-mono text-sm text-white/80">
                ISO 9001 · ISO/IEC 27001 · ISO/IEC 27701
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/iso-42001" variant="onDark">
                Leer la guía ISO/IEC 42001
              </ButtonLink>
              <ButtonLink href="/contacto" variant="onDarkSecondary">
                Solicitar información
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs text-white/50">
              Contenido de referencia. Consulta con MAXAN los esquemas y alcances de acreditación
              vigentes.
            </p>
          </MotionReveal>
          <MotionReveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <ol className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
              {pillars.map((pillar) => (
                <li key={pillar.number} className="border-t border-white/15 pb-8 pt-5">
                  <p className="font-mono text-xs text-maxan-300">{pillar.number}</p>
                  <h3 className="mt-3 font-serif text-2xl font-normal text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{pillar.summary}</p>
                </li>
              ))}
            </ol>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
