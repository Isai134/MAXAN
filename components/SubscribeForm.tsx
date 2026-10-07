'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function SubscribeForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label className="meta mb-2 block !text-white/50" htmlFor="newsletter-email">
            Correo electrónico
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="tu@correo.com"
            className="min-h-12 w-full border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/35 transition-colors duration-200 focus:border-white/50"
          />
        </div>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 self-end bg-white px-6 text-sm font-medium text-ink transition-colors duration-200 hover:bg-maxan-100"
        >
          {sent ? 'Registrado' : 'Suscribirme'}{' '}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p className="min-h-4 text-xs text-maxan-300" aria-live="polite">
        {sent ? 'Gracias por suscribirte a las notificaciones de MAXAN.' : ''}
      </p>
    </form>
  );
}
