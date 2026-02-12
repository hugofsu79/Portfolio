export type Lang = "fr" | "en";
export type I18n<T> = { fr: T; en: T };

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
    value: Array<
        | string
        | {
            content: I18n<{
                label: string;
            }>;
            href?: string;
        }
    >;
    marquee?: boolean;
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
            value: string[];
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
        objectifs: {
            content: I18n<{
                title?: string;
                description: string;
            }>;
            image: {
                src: string;
                alt: string;
            }[];
        };
        role: {
            content: I18n<{
                title?: string;
                description: string;
            }>;
            image: {
                src: string;
                alt: string;
            }[];
        };
        demarche: {
            content: I18n<{
                title?: string;
                description: string;
            }>;
            image: {
                src: string;
                alt: string;
            }[];
        };
        resultat: {
            content: I18n<{
                title?: string;
                description: string;
            }>;
            image: {
                src: string;
                alt: string;
            }[];
        };
    };

    carousel: {
        images: {
            src: string;
            alt: string;
        }[];
    };
};