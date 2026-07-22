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
    <section id={id} className={`container-maxan py-16 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
