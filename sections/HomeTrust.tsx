import Image from 'next/image';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { MotionReveal } from '@/components/MotionReveal';
import { SectionWrapper } from '@/components/SectionWrapper';

export function HomeTrust() {
  return (
    <div className="bg-mist">
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <MotionReveal>
            <p className="eyebrow">Confianza verificable</p>
            <h2 className="section-title">Un organismo acreditado, con reglas claras.</h2>
            <p className="body-copy mt-6">
              MAXAN está acreditado ante la Entidad Mexicana de Acreditación como Organismo de
              Certificación de Producto, con el número 155/19.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10 bg-white p-3 shadow-card">
              <Image
                src="/images/archive/web_registro_EMA_e85a60a59c.jpg"
                width={1600}
                height={500}
                alt="Registro de acreditación EMA de MAXAN"
                className="w-full rounded-2xl"
              />
            </div>
          </MotionReveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <AnimatedCounter
              value={4}
              suffix=" años"
              label="Vigencia de la certificación, con vigilancia a los dos años."
            />
            <AnimatedCounter
              value={70}
              suffix=" pts"
              label="Puntaje mínimo de los 100 puntos posibles para certificar."
            />
            <AnimatedCounter
              value={60}
              suffix=" días"
              label="Periodo para atender no conformidades mayores detectadas."
            />
            <AnimatedCounter value={14} label="Fechas de capacitación publicadas para 2026." />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
