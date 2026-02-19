export type Lang = "fr" | "en";

// Type utilitaire pour les objets traduisibles
export type I18nContent<T> = Record<Lang, T>;

export interface ProjectDetail {
    label: string;
    value: string | string[];
    href?: string;
    marquee?: boolean;
}

export interface ProjectSectionContent {
    title?: string;
    description: string;
}

export interface Project {
    slug: string;
    // Données techniques/statiques
    entreprise: string;
    year: number;
    cover: string;
    logo: string;
    tags: string[];

    // TOUT le contenu traduisible est ici
    content: I18nContent<{
        title: string;
        skills: string[];
        context: {
            description: string;
            details: ProjectDetail[];
        };
        // On rend les sections optionnelles avec "?" pour éviter les erreurs
        objectifs?: ProjectSectionContent;
        role?: ProjectSectionContent;
        demarche?: ProjectSectionContent;
        resultat?: ProjectSectionContent;
    }>;

    // TOUS les médias sont ici
    media: {
        objectifs?: string | null;
        role?: string | null;
        demarche?: string | null;
        resultat?: string | null;
        carousel: {
            src: string;
            alt: Record<Lang, string>;
        }[];
    };
}

export type HomeProject = {
    slug: string;
    entreprise: string;
    year: number;
    cover: string;
    title: string;
    skills: string[];
};