export type ProjectStatus = 'in-development' | 'functional' | 'completed';

export interface ProjectLink {
  label: string;
  href: string;
  todo?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  monogram: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: 'spinlists',
    name: 'Spinlists',
    status: 'in-development',
    description:
      'Plataforma independiente orientada al descubrimiento y promoción musical. Actualmente desarrollada con Astro y Vue, utilizando Tailwind CSS para la interfaz y Supabase como backend.',
    technologies: ['Astro', 'Vue', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    monogram: 'SP',
    links: [],
  },
  {
    slug: 'astro-bottomsheet',
    name: 'Astro BottomSheet',
    status: 'functional',
    description:
      'Componente reutilizable de navegación responsive que funciona como bottom sheet en dispositivos móviles y como sidebar en escritorio. Publicado en npm con automatización de versiones.',
    technologies: ['Astro', 'TypeScript', 'CSS'],
    monogram: 'AB',
    links: [],
  },
  {
    slug: 'chocolatebutter',
    name: 'ChocolateButter',
    status: 'completed',
    description:
      'Alternativa self-hosted a servicios como Linktree, desarrollada para centralizar enlaces y contenido asociado a un perfil de artista.',
    technologies: [],
    monogram: 'CB',
    links: [],
  },
  {
    slug: 'news-app',
    name: 'News App',
    status: 'in-development',
    description:
      'Aplicación de noticias desarrollada para una empresa brasileña. Utiliza Tauri y tecnologías web y se conecta a un CMS desarrollado sobre Drupal 11. Lanzamiento previsto para octubre de 2026.',
    technologies: ['Tauri', 'Rust', 'Astro', 'Vue', 'TypeScript', 'Drupal 11'],
    monogram: 'NA',
    links: [],
  },
];
