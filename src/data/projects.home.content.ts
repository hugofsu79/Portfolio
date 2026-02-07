import type { ProjectSlug } from "./projects";

export type Lang = "fr" | "en";

export const projectsHomeContent: Record<
    Lang,
    Record<
        ProjectSlug,
        {
            title: string;
            role: string;
        }
    >
> = {
    fr: {
        "siko-mobility": {
            title: "Financement & assurance",
            role: "Product Designer",
        },
        rhizome: {
            title: "Réseau social de plantes",
            role: "UI/UX Designer",
        },
        kiro: {
            title: "Application de suivi kiné",
            role: "Concepteur d’application",
        },
        oneiro: {
            title: "Histoires pour enfants assistées par l’IA",
            role: "Concepteur d’application",
        },
    },
    en: {
        "siko-mobility": {
            title: "Financing & insurance",
            role: "Product Designer",
        },
        rhizome: {
            title: "Plant social network",
            role: "UI/UX Designer",
        },
        kiro: {
            title: "Physiotherapy tracking app",
            role: "Application Designer",
        },
        oneiro: {
            title: "AI-powered storytelling app for kids",
            role: "Application Designer",
        },
    },
};