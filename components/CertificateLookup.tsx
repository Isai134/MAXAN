'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function CertificateLookup() {
  const router = useRouter();
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (value.trim()) router.push(`/certificado/${encodeURIComponent(value.trim())}`);
      }}
      className="flex flex-col gap-3 rounded-3xl border border-ink/10 bg-white p-4 shadow-card sm:flex-row"
    >
      <label className="sr-only" htmlFor="certificate">
        Número de certificado
      </label>
      <input
        id="certificate"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ej. MAXAN-025-180"
        className="min-h-12 flex-1 rounded-2xl border-0 bg-mist px-5 focus:outline-none"
      />
      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-ink px-6 font-semibold text-white hover:bg-maxan-700">
        <Search className="h-4 w-4" /> Consultar
      </button>
    </form>
  );
}
