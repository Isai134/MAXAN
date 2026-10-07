'use client';

import { CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';

const requirements = [
  'Política de igualdad laboral y no discriminación',
  'Comité o grupo encargado de vigilar el desarrollo e implementación de prácticas',
  'Proceso de reclutamiento y selección sin discriminación',
  'Auditoría interna',
  'Medición del clima laboral y no discriminación',
  'Código de ética o equivalente',
  'Garantía de igualdad salarial y prestaciones',
  'Procesos de ascenso y permanencia con igualdad de oportunidades',
  'Plan de capacitación con perspectiva de género',
  'Lenguaje incluyente, no sexista y accesible',
  'Acciones de corresponsabilidad entre la vida laboral, familiar y personal',
  'Accesibilidad física y comunicación accesible',
  'Mecanismos para prevenir y atender la violencia laboral',
];

export function SelfAssessment() {
  const [checked, setChecked] = useState<number[]>([]);
  const percent = useMemo(
    () => Math.round((checked.length / requirements.length) * 100),
    [checked],
  );
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_.4fr]">
      <div className="space-y-3">
        {requirements.map((requirement, index) => (
          <label
            key={requirement}
            className="flex cursor-pointer items-start gap-4 border-b border-ink/15 py-5 transition hover:border-maxan-400"
          >
            <input
              type="checkbox"
              checked={checked.includes(index)}
              onChange={() =>
                setChecked((current) =>
                  current.includes(index)
                    ? current.filter((item) => item !== index)
                    : [...current, index],
                )
              }
              className="mt-1 h-5 w-5 accent-maxan-600"
            />
            <span className="leading-7 text-secondary">{requirement}</span>
          </label>
        ))}
      </div>
      <aside className="h-fit border border-ink bg-ink py-8 pl-6 pr-2 text-white lg:sticky lg:top-32">
        <CheckCircle2 className="h-9 w-9 text-maxan-300" />
        <p className="mt-8 font-serif text-6xl font-normal tracking-tight">{percent}%</p>
        <p className="mt-3 leading-7 text-white/65">
          Avance orientativo con base en los temas principales. No sustituye la evaluación ni la
          auditoría formal.
        </p>
        <div className="mt-8 h-2 overflow-hidden bg-white/10">
          <div className="h-full bg-maxan-400 transition-all" style={{ width: `${percent}%` }} />
        </div>
      </aside>
    </div>
  );
}
