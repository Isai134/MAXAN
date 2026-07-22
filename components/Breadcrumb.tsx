import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav
      aria-label="Migas de pan"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
    >
      <Link href="/" aria-label="Inicio" className="hover:text-maxan-700">
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          {item.href ? (
            <Link href={item.href} className="hover:text-maxan-700">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
