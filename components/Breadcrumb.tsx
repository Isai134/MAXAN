import { Home } from 'lucide-react';
import Link from 'next/link';

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav
      aria-label="Migas de pan"
      className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-muted"
    >
      <Link href="/" aria-label="Inicio" className="hover:text-maxan-700">
        <Home className="h-3.5 w-3.5" />
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-maxan-700">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-ink">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
