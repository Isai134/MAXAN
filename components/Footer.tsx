import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlaySquare,
} from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { SubscribeForm } from '@/components/SubscribeForm';

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="border-b border-white/10">
        <div className="container-maxan grid gap-8 py-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow !text-maxan-300">Mantente al día</p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight">
              Suscríbete a nuestras notificaciones
            </h2>
          </div>
          <SubscribeForm />
        </div>
      </div>
      <div className="container-maxan grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-2xl font-semibold">MAXAN Certificación</p>
          <p className="mt-4 max-w-xl leading-7 text-white/65">{siteConfig.description}</p>
        </div>
        <div>
          <p className="font-semibold">Contacto</p>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {siteConfig.address}
            </p>
            <a className="flex gap-3 hover:text-white" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a
              className="flex gap-3 hover:text-white"
              href={`tel:${siteConfig.primaryPhone.replace(/-/g, '')}`}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.primaryPhone}
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold">Síguenos</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              [siteConfig.social.linkedin, BriefcaseBusiness, 'LinkedIn'],
              [siteConfig.social.facebook, MessageCircle, 'Facebook'],
              [siteConfig.social.youtube, PlaySquare, 'YouTube'],
              [siteConfig.social.instagram, Camera, 'Instagram'],
            ].map(([href, Icon, label]) => (
              <a
                key={label as string}
                href={href as string}
                target="_blank"
                rel="noreferrer"
                aria-label={label as string}
                className="rounded-full border border-white/15 p-2.5 text-white/70 transition hover:border-maxan-300 hover:text-maxan-300"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-maxan flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MAXAN Certificación. Todos los derechos reservados.</p>
          <Link
            href="/documents/transparency/AvisoPrivacidad.pdf"
            target="_blank"
            className="hover:text-white"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
