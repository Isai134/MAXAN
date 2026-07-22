'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function SubscribeForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Correo electrónico
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="tu@correo.com"
        className="min-h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-white placeholder:text-white/40 focus:border-maxan-300 focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-maxan-400 px-6 font-semibold text-ink transition hover:bg-maxan-300"
      >
        {sent ? 'Registrado' : 'Suscribirme'} <ArrowRight className="h-4 w-4" />
      </button>
      <span className="sr-only" aria-live="polite">
        {sent ? 'Correo registrado para futura integración.' : ''}
      </span>
    </form>
  );
}
