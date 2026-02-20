import type { I18nContent } from "../types/projects";

export const navLabels: I18nContent<{
    home: string;
    projects: string;
    labo: string;
    about: string;
    contact: string;
}> = {
    fr: {
        home: "Accueil",
        projects: "Mes projets",
        labo:"Labo",
        about: "Ma pomme",
        contact: "Contact",
    },
    en: {
        home: "Home",
        projects: "Projects",
        labo: "Labo",
        about: "About me",
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