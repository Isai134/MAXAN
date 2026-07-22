import type { ReactNode } from 'react';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { ScrollProgress } from '@/components/ScrollProgress';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <main id="main-content">{children}</main>
      </PageTransition>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
