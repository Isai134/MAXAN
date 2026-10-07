'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function CertificateLookup() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const trimmed = value.trim();
        if (!trimmed) {
          setError(true);
          return;
        }
        setError(false);
        router.push(`/certificado/${encodeURIComponent(trimmed)}`);
      }}
      noValidate
    >
      <label className="meta mb-2 block" htmlFor="certificate">
        Número de certificado
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="certificate"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (error) setError(false);
          }}
          type="text"
          autoComplete="off"
          spellCheck={false}
          inputMode="text"
          placeholder="Ej. MAXAN-025-180"
          aria-invalid={error}
          aria-describedby={error ? 'certificate-error' : undefined}
          className="min-h-12 flex-1 border border-ink/25 bg-paper px-3 font-mono text-sm text-ink focus:border-ink"
        />
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-5 text-sm font-medium text-white hover:bg-maxan-800"
        >
          <Search className="h-4 w-4" aria-hidden="true" /> Consultar
        </button>
      </div>
      {error && (
        <p id="certificate-error" className="mt-2 text-sm text-danger" aria-live="polite">
          Ingresa un número de certificado.
        </p>
      )}
    </form>
  );
}
