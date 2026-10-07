import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { navigation } from '@/constants/navigation';
import { SubscribeForm } from '@/components/SubscribeForm';

const socialLinks = [
  { href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { href: siteConfig.social.facebook, label: 'Facebook' },
  { href: siteConfig.social.youtube, label: 'YouTube' },
  { href: siteConfig.social.instagram, label: 'Instagram' },
];

export function Footer() {
  const columns = navigation.filter((item) => item.children && item.children.length > 0);

  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/15">
        <div className="container-maxan grid gap-10 py-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="font-serif text-3xl font-normal">{siteConfig.name}</p>
            <p className="mt-4 max-w-lg leading-7 text-white/65">{siteConfig.description}</p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.08em] text-maxan-300">
              Acreditación EMA 155/19
            </p>
          </div>
          <div>
            <h2 className="meta mb-4 !text-white/50">Boletín y avisos</h2>
            <SubscribeForm />
          </div>
        </div>
      </div>

      <nav aria-label="Pie de página" className="border-b border-white/15">
        <div className="container-maxan grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((item) => (
            <div key={item.label}>
              <p className="meta !text-white/50">{item.label}</p>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                {item.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="transition-colors duration-200 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="meta !text-white/50">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>{siteConfig.address}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.commercialEmail}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.commercialEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.primaryPhone.replace(/-/g, '')}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.primaryPhone}
                </a>
              </li>
            </ul>
            <p className="meta mt-6 !text-white/50">Síguenos</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/75">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-maxan flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <Link
            href="/documents/transparency/AvisoPrivacidad.pdf"
            target="_blank"
            className="transition-colors duration-200 hover:text-white"
          >
            Aviso de privacidad
          </Link>
          <Link href="/transparencia" className="transition-colors duration-200 hover:text-white">
            Transparencia
          </Link>
        </div>
      </div>
    </footer>
  );
}
