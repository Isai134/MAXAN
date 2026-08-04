import { BadgeCheck, FileCheck2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { ButtonLink } from '@/components/ButtonLink';
import { MotionReveal } from '@/components/MotionReveal';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-gradient-to-b from-maxan-50/80 to-[#fbfcfa]">
      <div
        className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-80 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
        aria-hidden="true"
      />
      <div className="container-maxan relative grid min-h-[720px] gap-14 py-16 lg:grid-cols-[1fr_.92fr] lg:items-center lg:py-24">
        <MotionReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-maxan-300 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-maxan-800 shadow-soft">
            <BadgeCheck className="h-4 w-4" /> Rigor técnico e imparcialidad
          </div>
          <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
            Confianza que se puede demostrar.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
            Certificación de productos, sistemas de gestión y servicios de inspección para impulsar
            organizaciones más confiables, competitivas y responsables.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/solicitud-servicio">Solicitar un servicio</ButtonLink>
            <ButtonLink href="/sistemas-gestion" secondary>
              Conocer los sistemas
            </ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-maxan-700" /> Imparcialidad
            </span>
            <span className="flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-maxan-700" /> Rigor documental
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-maxan-700" /> Reconocimiento nacional
            </span>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.14} className="relative">
          <div
            className="absolute -inset-8 rounded-full bg-maxan-300/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="glass-card relative overflow-hidden p-3">
            <Image
              src="/images/archive/web_maxan_2dfe286e33.png"
              width={1201}
              height={375}
              alt="MAXAN Certificación: Igualdad Laboral y No Discriminación"
              className="w-full object-cover"
              priority
            />
            <div className="grid gap-3 p-3 sm:grid-cols-2">
              <div className="border-l-2 border-maxan-500 bg-mist p-5">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-maxan-700">Norma</p>
                <p className="mt-2 font-semibold">NMX-R-025-SCFI-2015</p>
              </div>
              <div className="border-l-2 border-maxan-300 bg-ink p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-maxan-300">
                  Cobertura
                </p>
                <p className="mt-2 font-semibold">Productos, ISO e inspección</p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
