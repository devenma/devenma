export type SkillWeight = 'core' | 'working' | 'additional';

export interface SkillGroup {
  id: string;
  label: string;
  weight: SkillWeight;
  technologies: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'core',
    label: 'Core',
    weight: 'core',
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'cms-backend',
    label: 'CMS & Backend',
    weight: 'core',
    technologies: [
      'Drupal 7',
      'Drupal 10',
      'Drupal 11',
      'Drupal Commerce',
      'Supabase',
      'REST APIs',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    weight: 'working',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vue', 'Vite'],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    weight: 'working',
    technologies: ['Git', 'DDEV', 'Docker', 'Linux', 'Google Cloud'],
  },
  {
    id: 'additional',
    label: 'Additional',
    weight: 'additional',
    technologies: [
      'Tauri',
      'Rust',
      'Firebase',
      'Apache Solr',
      'Search API',
      'Leaflet',
      'OpenStreetMap',
    ],
  },
];
