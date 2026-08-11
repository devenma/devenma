export interface SocialLink {
  label: string;
  href: string;
  icon: "hn-github" | "hn-linkedin" | "hn-envelope";
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/devenma",
    icon: "hn-github",
    ariaLabel: "GitHub profile de Enmanuel Rosales Leon",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devenma/",
    icon: "hn-linkedin",
    ariaLabel: "LinkedIn profile de Enmanuel Rosales Leon",
  },
  {
    label: "Email",
    href: "mailto:enmanuelrosales70@gmail.com?subject=Contacto%20desde%20portfolio",
    icon: "hn-envelope",
    ariaLabel: "Enviar email a Enmanuel Rosales Leon",
  },
];
