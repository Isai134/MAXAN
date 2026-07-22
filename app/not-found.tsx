import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-maxan py-28 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">Esta página no existe.</h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
        El contenido pudo haberse movido durante la reorganización del sitio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white"
      >
        <ArrowLeft className="h-4 w-4" /> Volver al inicio
      </Link>
    </div>
  );
}
