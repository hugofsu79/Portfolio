export type ContextLink = {
    label: string;
    href: string;
};
export type ContextDetail = {
    label: string;
    value: (string | ContextLink)[];
    marquee?: boolean;
};

export type Project = {
    slug: string;

    hero: {
        entreprise: string;
        title: string;
        cover: string;
        image: string;
        tags: string[];
        year: number;
        date?: string;
    };

    leftCorridor: {
        skills: {
            value: string[];
        };
    };

    sections: {
        context: {
            title?: string;
            description: string;
            details: ContextDetail[];
        };
        objectifs: {
            title?: string;
            description: string;
            image: {
                src: string;
                alt: string;
            }[];
        };
        role: {
            title?: string;
            description: string;
            image: {
                src: string;
                alt: string;
            }[];
        };
        demarche: {
            title?: string;
            description: string;
            image: {
                src: string;
                alt: string;
            }[];
        };
        resultat: {
            title?: string;
            description: string;
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