import type { I18nContent } from "../types/projects";

interface contenuSection {
    underTitle?: string,
    sectionTitle?: string,
    underSection?: string
}

export type laboBlock = { id: string } & I18nContent<contenuSection>;

export const laboData: laboBlock[] = [
    {
        id: "underTitle",
        fr: { underTitle: "Explorations autour de l’interaction, du système et de la matière." },
        en: { underTitle: "Explorations of interaction, systems, and materiality." }
    },
    {
        id: "interaction",
        fr: { sectionTitle: "Interaction", underSection: "Geste, feedback, continuité." },
        en: { sectionTitle: "Interaction", underSection: "Gesture, feedback, continuity." }
    },
    {
        id: "rythme", // Match avec data-preview="rythme"
        fr: { sectionTitle: "Rythme", underSection: "Le temps fait partie du design." },
        en: { sectionTitle: "Rhythm", underSection: "Time is a design material." }
    },
    {
        id: "matiere", // Match avec data-preview="matiere"
        fr: { sectionTitle: "Matière", underSection: "L'interface peut être ressentie." },
        en: { sectionTitle: "Material", underSection: "The interface can be felt." }
    },
    {
        id: "systeme", // Match avec data-preview="systeme"
        fr: { sectionTitle: "Système", underSection: "Chaque détail existe dans un ensemble." },
        en: { sectionTitle: "System", underSection: "Every detail exists within a whole." }
    }
];