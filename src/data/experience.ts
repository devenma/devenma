export interface InternalProject {
  name: string;
  stack: string[];
  description: string;
  note: 'no-llego-a-produccion';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  internalProjects?: InternalProject[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Distrito Moda',
    role: 'Web Developer',
    period: 'Agosto 2023 – Actualidad',
    summary:
      'Desarrollo y mantenimiento de la plataforma web principal de la empresa, construida sobre Drupal 7 y alojada en Google Cloud, participando en backend, frontend, integraciones externas y evolución de la experiencia de usuario.',
    highlights: [
      'Desarrollo y mantenimiento de módulos personalizados con PHP y Drupal.',
      'Desarrollo frontend con JavaScript, HTML y CSS.',
      'Integración con Google APIs y Google Analytics para métricas de productos y catálogos.',
      'Integración de servicios de geolocalización con Leaflet y OpenStreetMap para ubicaciones de tiendas.',
      'Desarrollo de funcionalidades dinámicas con JavaScript y Drupal Behaviors.',
      'Mejora de UI con Vite y Tailwind CSS, PWA y Firebase Cloud Messaging.',
      'Mantenimiento y evolución de una aplicación Drupal 7 legacy en producción.',
      'Resolución de problemas de dependencias, Composer, caché, permisos, módulos y código existente.',
    ],
    internalProjects: [
      {
        name: 'Distrito Telas',
        stack: [
          'Drupal 10',
          'Drupal Commerce',
          'Search API',
          'Apache Solr',
          'Vite',
          'Tailwind CSS',
          'Leaflet',
          'OpenStreetMap',
        ],
        description:
          'Plataforma de catálogo/e-commerce desarrollada dentro de Distrito Moda.',
        note: 'no-llego-a-produccion',
      },
      {
        name: 'SM Logística',
        stack: ['Drupal 10', 'JavaScript', 'PWA', 'Firebase'],
        description:
          'Plataforma orientada a procesos logísticos desarrollada dentro de Distrito Moda.',
        note: 'no-llego-a-produccion',
      },
    ],
  },
];
