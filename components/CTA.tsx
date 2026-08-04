import { ButtonLink } from '@/components/ButtonLink';
import { MotionReveal } from '@/components/MotionReveal';

export function CTA({ title = '¿Listo para iniciar tu proceso?' }: { title?: string }) {
  return (
    <MotionReveal className="container-maxan py-8 sm:py-12">
      <section className="relative overflow-hidden border-y border-ink bg-ink px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-maxan-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow !text-maxan-300">Hablemos</p>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          </div>
          <ButtonLink href="/contacto" secondary>
            Contactar a MAXAN
          </ButtonLink>
        </div>
      </section>
    </MotionReveal>
  );
}
