export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'envelope';
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/devenma',
    icon: 'github',
    ariaLabel: 'GitHub profile de Enmanuel Rosales Leon',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/devenma/',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn profile de Enmanuel Rosales Leon',
  },
  {
    label: 'Email',
    href: 'mailto:enmanuelrosales70@gmail.com?subject=Contacto%20desde%20portfolio',
    icon: 'envelope',
    ariaLabel: 'Enviar email a Enmanuel Rosales Leon',
  },
];
