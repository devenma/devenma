export interface Profile {
  name: string;
  role: string;
  altRole: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  intro: string;
}

export const profile: Profile = {
  name: 'Enmanuel Rosales Leon',
  role: 'Web Developer / Full-Stack Developer',
  altRole: 'Web Developer / Frontend Developer',
  location: 'Buenos Aires, Argentina',
  email: 'enmanuelrosales70@gmail.com',
  github: 'https://github.com/devenma',
  linkedin: 'https://www.linkedin.com/in/devenma/',
  intro:
    'Desarrollador web con aproximadamente 3 años de experiencia profesional, especializado en PHP, JavaScript, HTML, CSS y Drupal. Experiencia trabajando con Drupal 7, 10 y 11, desarrollando funcionalidades y módulos personalizados, integrando APIs y servicios externos y manteniendo aplicaciones web en producción. Experiencia complementaria con Astro, TypeScript, Tailwind CSS y Vue mediante proyectos independientes. Tengo especial interés por el desarrollo frontend, la calidad visual de las interfaces y la creación de experiencias web responsive y fáciles de utilizar.',
};
