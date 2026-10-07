import { ButtonLink } from '@/components/ButtonLink';
import { MotionReveal } from '@/components/MotionReveal';
import { siteConfig } from '@/config/site';

export function CTA({ title = '¿Listo para iniciar tu proceso?' }: { title?: string }) {
  return (
    <MotionReveal className="border-t border-ink/15 bg-surface">
      <section aria-labelledby="cta-title" className="container-maxan py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow">Siguiente paso</p>
            <h2 id="cta-title" className="section-title">
              {title}
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <p className="body-copy">
              Escríbenos o llama para confirmar la norma, el alcance y los requisitos aplicables a
              tu organización.
            </p>
            <div className="space-y-1 font-mono text-sm text-secondary">
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-ink">
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.primaryPhone.replace(/-/g, '')}`}
                className="block hover:text-ink"
              >
                {siteConfig.primaryPhone}
              </a>
            </div>
            <ButtonLink href="/contacto" variant="primary">
              Contactar a MAXAN
            </ButtonLink>
          </div>
        </div>
      </section>
    </MotionReveal>
  );
}
