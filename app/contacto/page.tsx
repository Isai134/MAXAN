import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHeader } from '@/components/PageHeader';
import { SectionWrapper } from '@/components/SectionWrapper';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Contacto',
  'Solicita un presupuesto o información sobre los servicios de MAXAN Certificación.',
  '/contacto',
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="¿Necesitas más información?"
        description="¿Solicitar un presupuesto o conocer más sobre nuestros servicios? Déjanos tu mensaje y datos de contacto; nos comunicaremos contigo a la brevedad."
        breadcrumbs={[{ label: 'Contacto' }]}
      />
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[.42fr_1fr]">
          <aside className="space-y-5">
            <ContactCard icon={MapPin} title="Dirección" content={siteConfig.address} />
            <ContactCard
              icon={Phone}
              title="Teléfonos"
              content={['722-917-7633', '712-267-6862', '722-267-6413'].join('\n')}
            />
            <ContactCard icon={Mail} title="Correo" content={siteConfig.email} />
          </aside>
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  content,
}: {
  icon: typeof Mail;
  title: string;
  content: string;
}) {
  return (
    <div className="border-t border-ink/15 pt-6">
      <Icon className="h-7 w-7 text-maxan-700" />
      <h2 className="mt-5 font-semibold">{title}</h2>
      <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600">{content}</p>
    </div>
  );
}
