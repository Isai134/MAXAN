import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-maxan py-28 text-center">
      <p className="eyebrow justify-center">Error 404</p>
      <h1 className="font-serif text-5xl font-normal tracking-[-0.015em] sm:text-7xl">
        Esta página no existe.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary">
        El contenido pudo haberse movido durante la reorganización del sitio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center gap-2 bg-ink px-6 font-medium text-white hover:bg-maxan-800"
      >
        <ArrowLeft className="h-4 w-4" /> Volver al inicio
      </Link>
    </div>
  );
}
