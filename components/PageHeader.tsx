import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/Breadcrumb';

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href?: string }[];
  aside?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-ink/10 bg-gradient-to-br from-maxan-50 via-white to-[#edf4ef]">
      <div
        className="absolute inset-0 bg-hero-grid bg-[size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />
      <div className="container-maxan relative py-14 sm:py-20">
        <Breadcrumb items={breadcrumbs} />
        <div className="grid gap-10 lg:grid-cols-[1fr_.48fr] lg:items-end">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600">
              {description}
            </p>
          </div>
          {aside}
        </div>
      </div>
    </div>
  );
}
