import type { I18nContent } from "../types/projects";

interface TextBlock {
    titre: string;
    texte: string;
}

export type AboutBlock = { id: string } & I18nContent<TextBlock>;

export const aboutData: AboutBlock[] = [
    {
        id: "approach",
        fr: {
            titre: "Approche",
            texte: "Je conçois des interfaces pour des produits exigeants, où le design n’est pas un simple habillage mais un levier de compréhension, d’usage et de cohérence. Mon approche repose sur une conception rigoureuse des systèmes d’interface, en portant une attention particulière à l’interaction, au mouvement et à la continuité de l’expérience. Mon profil hybride de designer UI/UX et de développeur front-end est un choix assumé.",
        },
        en: {
            titre: "Approach",
            texte: "I design interfaces for demanding products, where design is not just a coat of paint but a lever for understanding, usability, and consistency. My approach is based on a rigorous design of interface systems, paying particular attention to interaction, movement, and experience continuity. My hybrid profile as a UI/UX designer and front-end developer is a deliberate choice.",
        }
    },
    {
        id: "practice",
        fr: {
            titre: "Ce qui nourrit ma pratique",
            texte: "En parallèle de mon travail de conception, j’explore des domaines variés comme la musique, le code ou d’autres formes de systèmes créatifs. Ces explorations nourrissent ma manière de penser l’interface, le rythme et la logique des décisions.",
        },
        en: {
            titre: "What feeds my practice",
            texte: "Alongside my design work, I explore various fields such as music, code, or other forms of creative systems. These explorations feed into my way of thinking about interface, rhythm, and decision logic.",
        }
    },
    {
        id: "balance",
        fr: {
            titre: "Équilibre",
            texte: "En dehors des temps de conception, je consacre volontairement de l’espace à d’autres pratiques. La musique, le sport et la cuisine font partie de ces moments de respiration, qui me permettent de déplacer mon attention.",
        },
        en: {
            titre: "Balance",
            texte: "Outside of design time, I deliberately dedicate space to other practices. Music, sports, and cooking are part of these moments of respite, allowing me to shift my focus.",
        }
    },
    {
        id: "allies",
        fr: {
            titre: "Mes alliés",
            texte: "Les outils et méthodologies qui m'accompagnent au quotidien pour garantir une fluidité entre la pensée créative et l'exécution technique.",
        },
        en: {
            titre: "My allies",
            texte: "The tools and methodologies that support me daily to ensure fluidity between creative thinking and technical execution.",
        }
    }
];