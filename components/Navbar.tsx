'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, MapPin, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';
import { navigation } from '@/constants/navigation';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-[#fbfcfa]/90 backdrop-blur-xl">
      <div className="hidden bg-maxan-700 text-white lg:block">
        <div className="container-maxan flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {siteConfig.address}
          </span>
          <a href={`tel:${siteConfig.primaryPhone.replace(/-/g, '')}`} className="font-semibold">
            {siteConfig.primaryPhone}
          </a>
        </div>
      </div>
      <nav
        className="container-maxan flex h-20 items-center justify-between"
        aria-label="Principal"
      >
        <Link href="/" aria-label="MAXAN Certificación, inicio" className="shrink-0">
          <Image
            src="/logos/logo_maxan.62fdb1d.png"
            width={190}
            height={70}
            alt="MAXAN Certificación"
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors ${active ? 'bg-maxan-100 text-maxan-800' : 'text-slate-700 hover:bg-white hover:text-ink'}`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-20 min-w-64 translate-y-2 pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-2xl border border-ink/10 bg-white p-2 shadow-card">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-maxan-50 hover:text-maxan-800"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Link
          href="/solicitud-servicio"
          className="hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-maxan-700 xl:block"
        >
          Solicitar servicio
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-ink/10 bg-white p-3 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-ink/10 bg-white xl:hidden"
          >
            <div className="container-maxan space-y-1 py-5">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-4 py-3 font-semibold hover:bg-maxan-50"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-8 py-2 text-sm text-slate-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/solicitud-servicio"
                className="mt-4 block rounded-xl bg-ink px-4 py-3 text-center font-semibold text-white"
              >
                Solicitar servicio
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
