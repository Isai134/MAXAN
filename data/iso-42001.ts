// Contenido de referencia sobre ISO/IEC 42001:2023.
// Informativo: el sitio no documenta una acreditación de MAXAN para este esquema.
// Confirmar con MAXAN los esquemas y alcances de acreditación vigentes antes de
// presentar este contenido como oferta de servicio.

export type Pillar = {
  number: string;
  title: string;
  /** One sentence, used on the home section. */
  summary: string;
  /** Two to three sentences, used on the ISO/IEC 42001 page. */
  detail: string;
};

export const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Gobernanza',
    summary: 'Política de IA, roles y responsabilidades definidos por la alta dirección.',
    detail:
      'La alta dirección establece una política de IA alineada con el contexto y los objetivos de la organización. Se asignan roles, autoridades y responsabilidades claras para el uso y desarrollo de sistemas de IA.',
  },
  {
    number: '02',
    title: 'Gestión de riesgos',
    summary:
      'Evaluación y tratamiento de riesgos, e impacto de los sistemas de IA en personas y sociedad.',
    detail:
      'La organización identifica, analiza y trata los riesgos asociados a sus sistemas de IA. Incluye una evaluación de impacto que considera los efectos posibles sobre personas, grupos y la sociedad.',
  },
  {
    number: '03',
    title: 'Transparencia y trazabilidad',
    summary:
      'Documentación y registros que permiten explicar y auditar cómo se diseñan y operan los sistemas.',
    detail:
      'Se mantiene documentación y registros que permiten explicar decisiones de diseño y operación. Esta trazabilidad facilita la auditoría interna y la rendición de cuentas ante partes interesadas.',
  },
  {
    number: '04',
    title: 'Gobernanza de datos',
    summary:
      'Criterios de origen, calidad y tratamiento de los datos durante todo el ciclo de vida.',
    detail:
      'Se definen criterios sobre el origen, la calidad y el tratamiento de los datos usados para desarrollar, entrenar u operar sistemas de IA. Estos criterios se mantienen a lo largo de todo el ciclo de vida del sistema.',
  },
  {
    number: '05',
    title: 'Supervisión humana',
    summary: 'Intervención humana definida y proporcional al riesgo de cada uso de IA.',
    detail:
      'La organización define cómo y cuándo intervienen las personas en el uso de sus sistemas de IA. El nivel de supervisión se dimensiona según el riesgo, la criticidad y el contexto de uso de cada sistema.',
  },
  {
    number: '06',
    title: 'Mejora continua',
    summary: 'Medición, auditoría interna y revisión por la dirección para corregir y mejorar.',
    detail:
      'La organización mide el desempeño de su sistema de gestión, realiza auditorías internas y lo somete a revisión por la dirección. Estas actividades retroalimentan acciones correctivas y de mejora.',
  },
];

export type RelatedStandard = {
  code: string;
  scope: string;
  relation: string;
};

export const relatedStandards: RelatedStandard[] = [
  {
    code: 'ISO 9001',
    scope: 'Gestión de la calidad',
    relation:
      'Comparte la estructura armonizada ISO, lo que facilita integrar política, objetivos, auditoría interna y revisión por la dirección en un mismo sistema.',
  },
  {
    code: 'ISO/IEC 27001',
    scope: 'Seguridad de la información',
    relation:
      'Ambas normas tratan riesgos y controles; los sistemas de IA suelen depender de activos de información ya cubiertos por un SGSI existente.',
  },
  {
    code: 'ISO/IEC 27701',
    scope: 'Gestión de la información de privacidad',
    relation:
      'La gobernanza de datos de ISO/IEC 42001 se relaciona con los requisitos de privacidad y tratamiento de datos personales que establece esta norma.',
  },
];

export type Clause = {
  number: string;
  title: string;
  description: string;
};

export const clauses: Clause[] = [
  {
    number: '4',
    title: 'Contexto de la organización',
    description: 'Partes interesadas, alcance del sistema de gestión de IA.',
  },
  {
    number: '5',
    title: 'Liderazgo',
    description: 'Compromiso de la alta dirección, política de IA, roles.',
  },
  {
    number: '6',
    title: 'Planificación',
    description: 'Riesgos, oportunidades y objetivos del sistema de gestión.',
  },
  {
    number: '7',
    title: 'Apoyo',
    description: 'Recursos, competencia, comunicación y documentación.',
  },
  {
    number: '8',
    title: 'Operación',
    description: 'Controles operativos, evaluación e impacto de los sistemas de IA.',
  },
  {
    number: '9',
    title: 'Evaluación del desempeño',
    description: 'Seguimiento, medición, auditoría interna, revisión por la dirección.',
  },
  {
    number: '10',
    title: 'Mejora',
    description: 'No conformidades, acciones correctivas, mejora continua.',
  },
];

export const annexNote =
  'El Anexo A reúne objetivos de control y controles de referencia; el Anexo B ofrece guía de implementación de esos controles. Los conceptos y la terminología se apoyan en ISO/IEC 22989, y la gestión de riesgos de IA se orienta con ISO/IEC 23894.';

export type Benefit = { text: string };

export const benefits: Benefit[] = [
  { text: 'Identificación y tratamiento sistemático de riesgos de IA.' },
  { text: 'Mayor trazabilidad de decisiones de diseño y operación.' },
  { text: 'Responsabilidades más claras dentro de la organización.' },
  { text: 'Transparencia ante clientes y partes interesadas.' },
  { text: 'Gobernanza de datos a lo largo del ciclo de vida del sistema.' },
  { text: 'Supervisión humana proporcional al riesgo de cada uso.' },
  { text: 'Mejora continua a partir de auditoría y revisión por la dirección.' },
  { text: 'Preparación ante expectativas regulatorias crecientes.' },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: '¿Aplica si mi organización solo usa IA de terceros?',
    answer:
      'Sí. ISO/IEC 42001 aplica a organizaciones que desarrollan, proveen o utilizan sistemas de IA, sin importar si los construyen internamente o los adquieren de un tercero.',
  },
  {
    question: '¿Certifica un modelo de IA?',
    answer:
      'No. La norma certifica el sistema de gestión de la organización, es decir, cómo gobierna, evalúa y controla el uso o desarrollo de IA. No certifica un modelo o producto de IA en sí mismo.',
  },
  {
    question: '¿Cómo se relaciona con ISO/IEC 27001?',
    answer:
      'Ambas comparten la estructura armonizada ISO y tratan la gestión de riesgos, lo que facilita su integración. Sin embargo, sus requisitos no son equivalentes y una certificación no sustituye a la otra.',
  },
  {
    question: '¿Qué contiene el Anexo A?',
    answer:
      'El Anexo A reúne objetivos de control y controles de referencia relacionados con la gestión de la IA; el Anexo B complementa con guía para su implementación.',
  },
  {
    question: '¿Garantiza cumplir el Reglamento europeo de IA?',
    answer:
      'No de forma automática. Un sistema de gestión de IA puede ayudar a estructurar procesos de gobernanza relevantes, pero no sustituye las obligaciones legales del Reglamento (UE) 2024/1689 ni garantiza por sí mismo el cumplimiento regulatorio.',
  },
];

export type Fact = { label: string; value: string };

export const facts: Fact[] = [
  { label: 'Publicación', value: 'Diciembre 2023' },
  { label: 'Tipo', value: 'Norma de requisitos, certificable' },
  { label: 'Aplica a', value: 'Organizaciones que desarrollan, proveen o usan IA' },
  { label: 'Estructura', value: 'Estructura armonizada ISO (cláusulas 4–10)' },
];

export const whatItIs: string[] = [
  'Un sistema de gestión: define cómo una organización decide, controla y mejora su uso de IA.',
  'Un marco para gobernar el ciclo de vida de los sistemas de IA, del diseño a la operación.',
  'Certificable por organismos acreditados para ese esquema específico.',
  'Integrable con otros sistemas de gestión mediante la estructura armonizada ISO.',
];

export const whatItIsNot: string[] = [
  'Una guía técnica para desarrollar o programar modelos de IA.',
  'Una certificación de un modelo o producto de IA en particular.',
  'Un sustituto de las obligaciones legales aplicables a la organización.',
  'Una garantía automática de cumplimiento regulatorio.',
];
