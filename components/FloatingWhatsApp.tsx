import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/52${siteConfig.phones[0].replace(/-/g, '')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar a MAXAN por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1 hover:scale-105"
    >
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
