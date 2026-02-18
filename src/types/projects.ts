export type Lang = "fr" | "en";
export type I18n<T> = Record<Lang, T>;

export type ContextLink = {
    content: I18n<{
        label: string;
    }>;
    href: string;
};

export type ContextDetail = {
    content: I18n<{
        label: string;
    }>;
    // La valeur peut être une string simple, ou un objet avec label traduit + lien
    value: Array<
        | string
        | {
            content: I18n<{ label: string }>;
            href?: string;
        }
    >;
    marquee?: boolean;
};

// Type réutilisable pour les sections répétitives (Objectifs, Role, etc.)
export type ProjectSection = {
    content: I18n<{
        title?: string;
        description: string;
    }>;
    images: {
        src: string;
        alt: I18n<{ text: string }>;
    }[];
};

export type Project = {
    slug: string;

    hero: {
        entreprise: string;
        content: I18n<{
            title: string;
        }>;
        cover: string;
        image: string;
        tags: string[];
        year: number;
        date?: string;
    };

    leftCorridor: {
        skills: I18n<{
            values: string[];
        }>;
    };

    sections: {
        context: {
            content: I18n<{
                title?: string;
                description: string;
            }>;
            details: ContextDetail[];
        };
        objectifs: ProjectSection;
        role: ProjectSection;
        demarche: ProjectSection;
        resultat: ProjectSection;
    };

    carousel: {
        images: {
            src: string;
            alt: I18n<{ text: string }>;
        }[];
    };
};
export type HomeProject = {
    slug: string;
    entreprise: string;
    year: number;
    cover: string;
    title: string;
    skills: string[];
};