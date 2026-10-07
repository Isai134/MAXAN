import type { ReactNode } from 'react';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main id="main-content">{children}</main>
      </PageTransition>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
