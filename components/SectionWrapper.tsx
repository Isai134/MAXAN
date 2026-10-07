import type { ReactNode } from 'react';

export function SectionWrapper({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`container-maxan py-20 sm:py-24 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}
