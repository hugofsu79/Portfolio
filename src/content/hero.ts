export const heroContent = {
    fr: {
        intro: "Product & UI Designer",
        title: "Je conçois des interfaces\nclaires et durables",
        subtitle:
            "Designer UI/UX avec une approche systémique,\norientée usage et implémentation.",
        location: "Paris",
    },

    en: {
        intro: "Product & UI Designer",
        title: "I design clear and durable interfaces",
        subtitle:
            "UI/UX Designer with a systemic approach,\nfocused on usage and implementation.",
        location: "Paris",
    },
} as const;

export type HeroLang = keyof typeof heroContent;