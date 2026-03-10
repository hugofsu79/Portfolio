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
        job: "Designer interactif",
        "context.label": "n.m",
        "context.description": "(Du latin designare (projeter) et inter-agere (agir entre).",
        definition_1:
            "Concepteur d’interfaces (UI/UX) pensées pour être comprises et utilisées.",
        definition_2:
            "Médiateur entre usage, design et technique.",
        definition_3:
            "Architecte de systèmes visuels, d’applications et de produits cohérents",
    },
    en: {
        job: "Interactive Designer",
        "context.label": "n.",
        "context.description": "(From the Latin designare (to plan) and inter-agere (to act between).",
        definition_1: "Designer of interfaces (UI/UX) built to be understood and used.",
        definition_2: "Mediator between usage, design, and technology.",
        definition_3: "Architect of consistent visual and behavioral systems.",
    }
};