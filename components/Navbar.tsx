'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { navigation } from '@/constants/navigation';
import type { NavigationItem } from '@/types';

function dropdownId(label: string) {
  return `submenu-${label
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`;
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActiveDropdown(null);
    }
    function onClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  function isItemActive(item: NavigationItem) {
    if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
    return (
      item.children?.some(
        (child) => pathname === child.href || pathname.startsWith(`${child.href}/`),
      ) ?? false
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/95">
      <nav
        ref={navRef}
        className="container-maxan flex h-16 items-center justify-between lg:h-[4.5rem]"
        aria-label="Principal"
      >
        <Link href="/" aria-label="MAXAN Certificación, inicio" className="shrink-0">
          <Image
            src="/logos/logo_maxan.62fdb1d.png"
            width={190}
            height={70}
            alt="MAXAN Certificación"
            className="h-9 w-auto object-contain lg:h-10"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => {
            const active = isItemActive(item);
            const isOpen = activeDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative flex items-center"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() =>
                  item.children &&
                  setActiveDropdown((current) => (current === item.label ? null : current))
                }
              >
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-ink' : 'text-secondary hover:text-ink'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute inset-x-3 -bottom-px h-px bg-maxan-700"
                      aria-hidden="true"
                    />
                  )}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={dropdownId(item.label)}
                    aria-label={`Mostrar submenú de ${item.label}`}
                    onClick={() =>
                      setActiveDropdown((current) => (current === item.label ? null : item.label))
                    }
                    className="p-1.5 text-secondary transition-colors duration-200 hover:text-ink"
                  >
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                )}
                {item.children && isOpen && (
                  <div
                    id={dropdownId(item.label)}
                    className="absolute left-0 top-full z-20 min-w-64 border border-ink/15 bg-elevated"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-secondary transition-colors duration-200 hover:bg-surface hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Link
          href="/solicitud-servicio"
          className="hidden min-h-10 items-center justify-center gap-3 bg-ink px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-maxan-800 xl:inline-flex"
        >
          Solicitar servicio
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-ink/15 text-ink xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-ink/15 bg-paper xl:hidden"
          >
            <div className="container-maxan max-h-[calc(100dvh-4rem)] space-y-6 overflow-y-auto overscroll-contain py-6">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <p className="meta">{item.label}</p>
                    <ul className="mt-3 space-y-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block py-1 text-lg text-ink">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block py-1 text-lg font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <Link
                href="/solicitud-servicio"
                className="flex min-h-12 w-full items-center justify-center bg-ink px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-maxan-800"
              >
                Solicitar servicio
              </Link>

              <div className="space-y-2 border-t border-ink/15 pt-5 font-mono text-sm text-secondary">
                <a
                  href={`tel:${siteConfig.primaryPhone.replace(/-/g, '')}`}
                  className="flex items-center gap-2 hover:text-ink"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.primaryPhone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-ink"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
