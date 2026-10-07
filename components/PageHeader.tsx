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
    <div className="bg-paper border-b border-ink/15">
      <div className="container-maxan py-12 sm:py-16 lg:py-20">
        <Breadcrumb items={breadcrumbs} />
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="max-w-4xl text-balance font-serif text-[2.4rem] font-normal leading-[1.04] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="body-copy mt-6">{description}</p>
          </div>
          {aside && <aside className="lg:col-span-4 lg:col-start-9">{aside}</aside>}
        </div>
      </div>
    </div>
  );
}
