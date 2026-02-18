import type { I18n } from "../types/projects";

export const heroContent: I18n<{
    job: string;
    context: {
        label: string;
        description: string;
    };
    definition_1: string;
    definition_2: string;
    definition_3: string;
}> = {
    fr: {
        job: "Designer interactif",
        context: {
            label: "n.m",
            description: "(Du latin designare (projeter) et inter-agere (agir entre)."
        },
        definition_1:
            "Concepteur d’interfaces pensées pour être comprises et utilisées.",
        definition_2:
            "Médiateur entre usage, design et technique.",
        definition_3:
            "Architecte de systèmes visuels et comportementaux cohérents.",
    },
    en: {
        job: "Interactive Designer",
        context: {
            label: "n.m",
            description: "I design clear and sustainable interfaces"
        },
        definition_1:
            "Designer of interfaces built to be understood and used.",
        definition_2:
            "Mediator between usage, design, and technology.",
        definition_3:
            "Architect of consistent visual and behavioral systems.",
    }
};