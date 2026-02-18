import type { I18n } from "./projects"; // On réutilise ton type global

export type Contexte = {
    icon: string;
    content: I18n<{
        titre: string;
        texte: string;
    }>;
};

export type AboutData = {
    hero: {
        content: I18n<{
            title: string;
            subtitle: string;
        }>;
    };
    presentation: {
        content: I18n<{
            description: string;
        }>;
    };
    contextes: Contexte[];
};