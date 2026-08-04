import certificateData from '@/data/certificates.json';

export type CertificateStatus = 'vigente' | 'vencido';

export type Certificate = {
  certificateNumber: string;
  organization: string;
  standard: string;
  scope: string;
  issueDate: string;
  validFrom: string;
  validUntil: string;
  lastReviewDate: string;
  status: CertificateStatus;
};

export const certificates = certificateData as Certificate[];

function normalizeCertificateNumber(value: string) {
  return value.trim().toUpperCase().replace(/\s+/g, '');
}

export function findCertificate(certificateNumber: string) {
  const normalizedValue = normalizeCertificateNumber(certificateNumber);
  return certificates.find(
    (certificate) => normalizeCertificateNumber(certificate.certificateNumber) === normalizedValue,
  );
}
