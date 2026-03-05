export type Lang = "fr" | "en";

export type I18nContent<T> = Record<Lang, T>;

export interface ProjectDetail {
    label: string;
    value: string | string[];
    href?: string;
    marquee?: boolean;
}

export interface ProjectSectionContent {
    title?: string;
    description?: string;
    picture?: string;
}

export interface Project {
    slug: string;
    entreprise: string;
    year: number;
    cover: string;
    logo: string;
    tags: string[];

    content: I18nContent<{
        title: string;
        skills: string[];
        context: {
            title: string;
            description: string;
            details: ProjectDetail[];
        };

        objectifs?: ProjectSectionContent;
        role?: ProjectSectionContent;
        illustration?: ProjectSectionContent;
        demarche?: ProjectSectionContent;
        resultat?: ProjectSectionContent;
    }>;

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