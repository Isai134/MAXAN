import { CertificateLookup } from '@/components/CertificateLookup';
import { MotionReveal } from '@/components/MotionReveal';
import { SectionWrapper } from '@/components/SectionWrapper';

export function HomeCertificate() {
  return (
    <div className="bg-maxan-50">
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <MotionReveal>
            <p className="eyebrow">Consulta pública</p>
            <h2 className="section-title">Verifica un certificado MAXAN.</h2>
            <p className="body-copy mt-5">
              Ingresa el número de certificado para consultar su estatus, vigencia y datos del
              registro público de MAXAN.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <CertificateLookup />
          </MotionReveal>
        </div>
      </SectionWrapper>
    </div>
  );
}
