import type { I18n } from "../types/projects";

export const navLabels: I18n<{
    home: string;
    projects: string;
    labo: string;
    about: string;
    contact: string;
}> = {
    fr: {
        home: "Accueil",
        projects: "Projets",
        labo:"Labo",
        about: "À propos",
        contact: "Contact",
    },
    en: {
        home: "Home",
        projects: "Projects",
        labo: "Labo",
        about: "About",
        contact: "Contact",
    }
};

// La structure technique (href) qui ne change pas selon la langue
export const navigation = [
    { key: "home", href: "/" },
    { key: "projects", href: "/#projects" },
    { key: "labo", href: "/#labo" },
    { key: "about", href: "/#about" },
    { key: "contact", href: "/#contact" },
] as const;