import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-medium transition-colors duration-200';

const variants = {
  primary: 'bg-ink text-white hover:bg-maxan-800',
  secondary: 'border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink/[0.04]',
  onDark: 'bg-white text-ink hover:bg-maxan-100',
  onDarkSecondary: 'border border-white/30 text-white hover:border-white hover:bg-white/[0.06]',
} as const;

export function ButtonLink({
  href,
  children,
  secondary = false,
  variant,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  variant?: keyof typeof variants;
}) {
  const style = variants[variant ?? (secondary ? 'secondary' : 'primary')];
  return (
    <Link href={href} className={`${base} ${style}`}>
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
