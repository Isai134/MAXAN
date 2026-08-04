import type { NavigationItem } from '@/types';

export const navigation: NavigationItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  {
    label: 'Norma certificable',
    href: '/norma-certificable/que-es',
    children: [
      { label: '¿Qué es la NMX-R-025?', href: '/norma-certificable/que-es' },
      { label: 'Guías de aplicación', href: '/norma-certificable/guias-aplicacion' },
      { label: 'Equipo auditor', href: '/norma-certificable/equipo-auditor' },
    ],
  },
  {
    label: 'Servicios',
    href: '/productos',
    children: [
      { label: 'Productos', href: '/productos' },
      { label: 'Distintivo NMX-R-025', href: '/productos/distintivo-nmx-r-025' },
      { label: 'Sistemas de gestión', href: '/sistemas-gestion' },
      { label: 'Unidades de inspección', href: '/unidades-inspeccion' },
      { label: 'Capacitaciones', href: '/capacitaciones/calendario-capacitaciones' },
      { label: 'Cursos', href: '/servicios/cursos' },
      { label: 'Webinars', href: '/servicios/webinars' },
    ],
  },
  {
    label: 'Recursos',
    href: '/boletines/comunicados',
    children: [
      { label: 'Comunicados', href: '/boletines/comunicados' },
      { label: 'Boletines bimensuales', href: '/boletines/bimensual' },
      { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
    ],
  },
  { label: 'Transparencia', href: '/transparencia' },
  { label: 'Contacto', href: '/contacto' },
];
