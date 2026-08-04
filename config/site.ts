export const siteConfig = {
  name: 'MAXAN Certificación',
  legalName: 'MAXAN Certificación S.A. de C.V.',
  description:
    'Organismo de certificación de sistemas de gestión, productos y servicios de inspección.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.maxan.com.mx',
  locale: 'es_MX',
  address: 'Ex Hacienda Barbabosa 100-A, Col. San Miguel Zinacantepec, C.P. 51357',
  email: 'informes@maxan.com.mx',
  commercialEmail: 'direccioncomercial@maxan.com.mx',
  primaryPhone: '722-917-7633',
  phones: ['722-342-3644', '722-267-6413', '722-381-3075'],
  social: {
    linkedin: 'https://www.linkedin.com/company/maxancertificaci%C3%B3n/',
    facebook: 'https://www.facebook.com/maxancertificacion',
    x: 'https://twitter.com/maxan_certifica',
    youtube: 'https://www.youtube.com/channel/UCsPeus8MPPsGmjX6O1Yuvcw',
    instagram: 'https://www.instagram.com/maxancertificacion/',
  },
} as const;
