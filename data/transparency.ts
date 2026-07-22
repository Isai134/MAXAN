export type TransparencyDocument = {
  title: string;
  description: string;
  href: string;
  category: 'Procedimientos' | 'Marca' | 'Clientes' | 'Reportes';
};

export const transparencyDocuments: TransparencyDocument[] = [
  {
    title: 'Procedimiento de quejas',
    description: 'Versión vigente del procedimiento para presentar y atender quejas.',
    href: '/documents/transparency/ProcedimientoQuejas_VV06.pdf',
    category: 'Procedimientos',
  },
  {
    title: 'Procedimiento de apelaciones',
    description: 'Procedimiento vigente para la atención de apelaciones.',
    href: '/documents/transparency/ProcedimientoApelaciones_VV05_15112024.pdf',
    category: 'Procedimientos',
  },
  {
    title: 'Reglamento de uso de marca y logotipo',
    description: 'Condiciones para el uso de la marca de conformidad MAXAN.',
    href: '/documents/transparency/ReglamentoUso_Marca_Logotipo_VV07_15112024.pdf',
    category: 'Marca',
  },
  {
    title: 'Manual de uso de marca',
    description: 'Especificaciones visuales para centros de trabajo certificados.',
    href: '/documents/transparency/ManualUsoMarca.pdf',
    category: 'Marca',
  },
  {
    title: 'Contrato de prestación de servicios',
    description: 'Derechos y deberes aplicables a los servicios de certificación.',
    href: '/documents/transparency/ContratoPrestacionServicios_DCA_VV04_15112024.pdf',
    category: 'Clientes',
  },
  {
    title: 'Formato de quejas',
    description: 'Formato descargable para presentar una queja.',
    href: '/documents/transparency/FormatoQuejas_VV03.pdf',
    category: 'Clientes',
  },
  {
    title: 'Segundo semestre 2020',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_2_Sem_2020.pdf',
    category: 'Reportes',
  },
  {
    title: 'Primer semestre 2021',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_1_Sem_2021.pdf',
    category: 'Reportes',
  },
  {
    title: 'Segundo semestre 2021',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_2_Sem_2021.pdf',
    category: 'Reportes',
  },
  {
    title: 'Primer y segundo semestre 2022',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_1_2_Sem_2022.pdf',
    category: 'Reportes',
  },
  {
    title: 'Primer semestre 2023',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_1_Sem_2023.pdf',
    category: 'Reportes',
  },
  {
    title: 'Segundo semestre 2023',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_2_Sem_2023.pdf',
    category: 'Reportes',
  },
  {
    title: 'Primer semestre 2024',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_1_Sem_2024.pdf',
    category: 'Reportes',
  },
  {
    title: 'Segundo semestre 2024',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_2_Sem_2024.pdf',
    category: 'Reportes',
  },
  {
    title: 'Primer semestre 2025',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_1_Sem_2025.pdf',
    category: 'Reportes',
  },
  {
    title: 'Segundo semestre 2025',
    description: 'Reporte de centros de trabajo certificados.',
    href: '/documents/transparency/CentrosCertificados_2_Sem_2025.pdf',
    category: 'Reportes',
  },
];
