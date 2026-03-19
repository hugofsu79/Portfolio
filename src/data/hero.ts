import type { I18nContent } from "../types/projects";

export const heroContent: I18nContent<{
    job: string;
    "context.label": string;
    "context.description": string;
    definition_1: string;
    definition_2: string;
    definition_3: string;
}> = {
    fr: {
        job: "Product Designer",
        "context.label": "n.m",
        "context.description": "(Du latin designare (projeter) et producere (faire émerger).",
        definition_1:
            "Concepteur de produits numériques, structurant les parcours et les interfaces pour répondre à des usages réels.",
        definition_2:
            "Médiateur entre design, technique et enjeux produit.",
        definition_3:
            "Architecte de systèmes d’interface cohérents, scalables et ancrés dans la réalité de production",
    },
    en: {
        job: "Product Designer",
        "context.label": "n.",
        "context.description": "(From Latin designare (to plan) and producere (to bring forth).",
        definition_1:
            "Designer of digital products, shaping user flows and interfaces around real use cases.",
        definition_2:
            "Bridge between design, technology, and product constraints.",
        definition_3:
            "Architect of scalable interface systems grounded in real-world implementation.",
    }
};