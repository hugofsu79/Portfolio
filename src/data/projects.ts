import type { Project, Lang, HomeProject } from "../types/projects";

export const projects: Project[] = [
    // Siko
    {
        slug: "siko-mobility",
        hero: {
            entreprise: "Siko Mobility",
            cover: "/images/siko-mobility/cover.webp",
            image: "/icons/projets/sikoMobility_logo.svg",
            tags: ["Développeur web", "Tailwind CSS"],
            content: {
                fr: {
                    title: "Fintech qui simplifie le financement de véhicules en proposant une expérience digitale fluide"
                },
                en: {
                    title: "A fintech company that simplifies vehicle financing by delivering a seamless digital experience."
                }
            },
            year: 2025,
        },
        leftCorridor: {
            skills: {
                fr: {
                    values: ["Fintech", "B2C-B2B", "Méthodologie"]
                },
                en: {
                    values: ["Fintech", "B2C-B2B", "Methodology"]
                },
            }
        },
        sections: {
            context: {
                content: {
                    fr: {
                        description: "Siko Mobility est une startup fintech spécialisée dans le financement de véhicules. J’y ai travaillé un an en alternance, dans un contexte startup à forte autonomie, nécessitant une compréhension rapide des mécanismes de financement et des enjeux contractuels.",
                    },
                    en: {
                        description: "Siko Mobility is a fintech startup specializing in vehicle financing. I worked there for a year as an apprentice in a high-autonomy startup environment, requiring a quick understanding of financing mechanisms and contractual issues.",
                    }
                },
                details: [
                    {
                        content: {
                            fr: { label: "Temps de travail" },
                            en: { label: "Working time" }
                        },
                        value: ["02.10.2024 | 27.10.2025"],
                    },
                    {
                        content: {
                            fr: { label: "Collaborateurs" },
                            en: { label: "Collaborators" }
                        },
                        value: [
                            { content: { fr: { label: "Kader Bakayoko" }, en: { label: "Kader Bakayoko" } }, href: "..." },
                            { content: { fr: { label: "Jugurta Mahious" }, en: { label: "Jugurta Mahious" } }, href: "..." },
                            { content: { fr: { label: "Thibault Andriamasionro" }, en: { label: "Thibault Andriamasionro" } }, href: "..." },
                            { content: { fr: { label: "Louis Leveneur" }, en: { label: "Louis Leveneur" } }, href: "..." }
                        ],
                        marquee: true,
                    },
                    {
                        content: {
                            fr: { label: "Rôle" },
                            en: { label: "Role" }
                        },
                        value: [
                            { content: { fr: { label: "Designer UI" }, en: { label: "UI Designer" } } },
                            { content: { fr: { label: "Concepteur d’application" }, en: { label: "App Designer" } } }
                        ],
                        marquee: true,
                    },
                    {
                        content: { fr: { label: "Lien" }, en: { label: "Link" } },
                        value: [
                            { content: { fr: { label: "www.sikomobility.com" }, en: { label: "www.sikomobility.com" } }, href: "https://www.sikomobility.com/" }
                        ]
                    },
                    {
                        content: { fr: { label: "Catégorie" }, en: { label: "Category" } },
                        value: ["Fintech"],
                    },
                ],
            },
            objectifs: {
                content: {
                    fr: {
                        title: "Objectifs",
                        description: "Les objectifs se sont construits progressivement au fil de l’alternance. À mon arrivée, la place du design au sein de l’équipe technique n’était pas clairement définie..."
                    },
                    en: {
                        title: "Objectives",
                        description: "Objectives were built progressively. Upon arrival, the design's place within the tech team wasn't clearly defined..."
                    }
                },
                images: [{
                    src: "/images/projects/siko-mobility/Objectifs_image_siko.png",
                    alt: { fr: { text: "Interface de Siko Mobility" }, en: { text: "Siko Mobility Interface" } },
                }]
            },
            role: {
                content: {
                    fr: {
                        title: "Mon Rôle",
                        description: "Chez Siko Mobility, mon rôle consistait à structurer et faire évoluer les parcours clés du produit..."
                    },
                    en: {
                        title: "My Role",
                        description: "At Siko Mobility, my role was to structure and evolve key product journeys..."
                    }
                },
                images: [{
                    src: "/icons/projets/Siko/role_svg.svg",
                    alt: { fr: { text: "Schéma du rôle" }, en: { text: "Role diagram" } },
                }]
            },
            demarche: {
                content: {
                    fr: {
                        title: "Démarche",
                        description: "En tant que designer UI et concepteur d’application, j’ai travaillé sur la conception UX, les wireframes..."
                    },
                    en: {
                        title: "Approach",
                        description: "As a UI Designer and App Designer, I worked on UX design, wireframes..."
                    }
                },
                images: []
            },
            resultat: {
                content: {
                    fr: {
                        title: "Résultat",
                        description: "Mon année chez Siko Mobility a marqué un vrai tournant. Les débuts ont été déroutants..."
                    },
                    en: {
                        title: "Results",
                        description: "My year at Siko Mobility was a real turning point. The beginnings were confusing..."
                    }
                },
                images: []
            },
        },
        carousel: {
            images: [
                {
                    src: "/images/projects/siko-mobility/carousel/paysage.png",
                    alt: { fr: { text: "Dashboard Siko Mobility" }, en: { text: "Siko Mobility Dashboard" } },
                }
            ],
        },
    },
    // Rhizome
    {
        slug: "rhizome",
        hero: {
            entreprise: "Rhizome",
            cover: "/images/rhizome/cover.webp",
            image: "/icons/projets/rhizome_logo.svg",
            tags: ["UI/UX Designer"],
            content: {
                fr: {
                    title: "Rhizome, le Vinted des plantes pour les passionnés de botanique"
                },
                en: {
                    title: "Rhizome, the Vinted-style marketplace dedicated to plant lovers"
                }
            },
            year: 2025,
        },
        leftCorridor: {
            skills: {
                fr: {
                    values: ["Product Design", "UX Research", "Design System"]
                },
                en: {
                    values: ["Product Design", "UX Research", "Design System"]
                },
            }
        },
        sections: {
            context: {
                content: {
                    fr: {
                        description: "Ce projet fictif a été développé dans le cadre de mon année de licence. Le travail portait sur l’analyse d’un besoin utilisateur, la définition des parcours clés et la conception d’une interface cohérente et exploitable.",
                    },
                    en: {
                        description: "This fictional project was developed during my Bachelor's year. The work focused on user needs analysis, defining key user journeys, and designing a consistent, usable interface.",
                    }
                },
                details: [
                    {
                        content: { fr: { label: "Temps de travail" }, en: { label: "Timeline" } },
                        value: ["14.12.2024 | 27.08.2025"],
                    },
                    {
                        content: { fr: { label: "Collaborateurs" }, en: { label: "Collaborators" } },
                        value: [
                            { content: { fr: { label: "Ma pomme" }, en: { label: "Myself" } } }
                        ],
                    },
                    {
                        content: { fr: { label: "Rôle" }, en: { label: "Role" } },
                        value: [
                            { content: { fr: { label: "Designer UI" }, en: { label: "UI Designer" } } },
                            { content: { fr: { label: "Product Designer" }, en: { label: "Product Designer" } } }
                        ],
                        marquee: true,
                    },
                    {
                        content: { fr: { label: "Lien" }, en: { label: "Link" } },
                        value: [
                            { content: { fr: { label: "Fichier Figma" }, en: { label: "Figma File" } }, href: "#" }
                        ],
                    },
                    {
                        content: { fr: { label: "Catégorie" }, en: { label: "Category" } },
                        value: ["Marketplace"],
                    },
                ],
            },
            objectifs: {
                content: {
                    fr: {
                        title: "Concevoir une marketplace de A à Z",
                        description: "L'objectif était de structurer des parcours simples et engageants, tout en posant les bases d’un design system léger pour garantir la scalabilité du projet."
                    },
                    en: {
                        title: "Designing a marketplace from scratch",
                        description: "The goal was to structure simple and engaging user journeys, while laying the foundations for a lightweight design system to ensure project scalability."
                    }
                },
                images: [{
                    src: "/images/projects/rhizome/objectifs.png",
                    alt: { fr: { text: "Aperçu des objectifs" }, en: { text: "Objectives overview" } },
                }]
            },
            role: {
                content: {
                    fr: {
                        title: "Mon Rôle",
                        description: "En tant que porteur du projet, j’ai assuré l’ensemble de la conception : définition du concept, recherche UX, conception des parcours et création des maquettes UI."
                    },
                    en: {
                        title: "My Role",
                        description: "As the project lead, I handled the entire design process: concept definition, UX research, journey mapping, and UI mockups."
                    }
                },
                images: []
            },
            demarche: {
                content: {
                    fr: {
                        title: "Un constat simple",
                        description: "Les plateformes généralistes ignorent la saisonnalité et la fragilité des plantes. Rhizome répond à ce manque en proposant une plateforme pensée spécifiquement pour l’échange végétal."
                    },
                    en: {
                        title: "A simple observation",
                        description: "General platforms ignore the seasonality and fragility of plants. Rhizome addresses this by offering a platform specifically designed for plant exchanges."
                    }
                },
                images: []
            },
            resultat: {
                content: {
                    fr: {
                        title: "Une vision communautaire",
                        description: "Cette V2 dépasse la simple marketplace pour construire un écosystème dédié aux passionnés : partage de conseils, transmission de savoir-faire et suivi de collection."
                    },
                    en: {
                        title: "A community vision",
                        description: "This V2 goes beyond a simple marketplace to build a dedicated ecosystem for enthusiasts: advice sharing, skills transmission, and collection tracking."
                    }
                },
                images: []
            }
        },
        carousel: {
            images: [
                {
                    src: "/images/projects/rhizome/Rhiziome_slide3.webp",
                    alt: { fr: { text: "Logo Rhizome" }, en: { text: "Rhizome Logo" } },
                },
                {
                    src: "/images/projects/rhizome/Rhiziome_slide2.webp",
                    alt: { fr: { text: "Ecran interface" }, en: { text: "Interface screen" } },
                }
            ],
        },
    },
    // Kiro
    {
        slug: "kiro",
        hero: {
            entreprise: "Kiro",
            cover: "/images/kiro/cover.webp",
            image: "/icons/projets/kiro_logo.svg",
            tags: ["UI/UX Designer"],
            content: {
                fr: {
                    title: "Kiro, optimiser l'expérience de suivi de rééducation pour les kinésithérapeutes"
                },
                en: {
                    title: "Kiro, optimizing the rehabilitation tracking experience for physiotherapists"
                }
            },
            year: 2025,
        },
        leftCorridor: {
            skills: {
                fr: {
                    values: ["UX Strategy", "Interface B2B", "Prototypage avancé"]
                },
                en: {
                    values: ["UX Strategy", "B2B Interface", "Advanced Prototyping"]
                },
            }
        },
        sections: {
            context: {
                content: {
                    fr: {
                        description: "Kiro est une application dédiée au suivi de la rééducation fonctionnelle. Ce projet, réalisé lors d'un test technique, visait à proposer une expérience claire adaptée aux usages terrain des praticiens.",
                    },
                    en: {
                        description: "Kiro is an application dedicated to functional rehabilitation tracking. This project, created during a technical test, aimed to provide a clear experience adapted to the daily needs of practitioners.",
                    }
                },
                details: [
                    {
                        content: { fr: { label: "Temps de travail" }, en: { label: "Timeline" } },
                        value: ["Exercice technique | 2025"],
                    },
                    {
                        content: { fr: { label: "Collaborateurs" }, en: { label: "Collaborators" } },
                        value: [
                            { content: { fr: { label: "Ma pomme" }, en: { label: "Myself" } } }
                        ],
                    },
                    {
                        content: { fr: { label: "Rôle" }, en: { label: "Role" } },
                        value: [
                            { content: { fr: { label: "Product Designer" }, en: { label: "Product Designer" } } }
                        ],
                    },
                    {
                        content: { fr: { label: "Lien" }, en: { label: "Link" } },
                        value: [
                            { content: { fr: { label: "Prototype Figma" }, en: { label: "Figma Prototype" } }, href: "https://www.figma.com/design/XujzwV1i7ogDs52f51IDTG/Kiro?node-id=30-192" }
                        ],
                    },
                    {
                        content: { fr: { label: "Catégorie" }, en: { label: "Category" } },
                        value: ["SaaS B2B / Santé"],
                    },
                ],
            },
            objectifs: {
                content: {
                    fr: {
                        title: "Objectifs",
                        description: "Faciliter le suivi de la rééducation en proposant des parcours clairs permettant de visualiser les exercices, la progression des patients et les informations essentielles."
                    },
                    en: {
                        title: "Objectives",
                        description: "Facilitate rehabilitation tracking by providing clear user journeys to visualize exercises, patient progress, and essential medical data."
                    }
                },
                images: []
            },
            role: {
                content: {
                    fr: {
                        title: "Mon Rôle",
                        description: "Conception des parcours utilisateurs (dashboard patientèle), réalisation des wireframes et interfaces UI, avec un accent sur la fiabilité des informations métier."
                    },
                    en: {
                        title: "My Role",
                        description: "Design of user journeys (patient dashboard), creation of wireframes and UI interfaces, focusing on the reliability of professional medical data."
                    }
                },
                images: []
            },
            demarche: {
                content: {
                    fr: {
                        title: "Démarche",
                        description: "Analyse des besoins métier des kinésithérapeutes pour transformer des données complexes en une interface lisible et actionnable en plein soin."
                    },
                    en: {
                        title: "Approach",
                        description: "Analysis of physiotherapists' business needs to transform complex data into a readable and actionable interface during patient care."
                    }
                },
                images: []
            },
            resultat: {
                content: {
                    fr: {
                        title: "Résultat",
                        description: "Une interface épurée qui réduit la charge cognitive du praticien, lui permettant de se concentrer sur l'humain tout en assurant une saisie de données rigoureuse."
                    },
                    en: {
                        title: "Result",
                        description: "A streamlined interface that reduces the practitioner's cognitive load, allowing them to focus on the patient while ensuring rigorous data entry."
                    }
                },
                images: []
            }
        },
        carousel: {
            images: [
                {
                    src: "/images/projects/kiro/screen-1.jpg",
                    alt: { fr: { text: "Vue Dashboard" }, en: { text: "Dashboard View" } },
                },
                {
                    src: "/images/projects/kiro/screen-2.jpg",
                    alt: { fr: { text: "Détail Patient" }, en: { text: "Patient Details" } },
                }
            ],
        },
    },
    // Oneiro
    {
        slug: "oneiro",
        hero: {
            entreprise: "Oneiro",
            cover: "/images/oneiro/cover.webp",
            image: "/icons/projets/Oneiro_logo.svg",
            tags: ["UI/UX Designer", "Full Stack"],
            content: {
                fr: {
                    title: "Oneiro, application de génération d’histoires pour enfants assistée par l’IA"
                },
                en: {
                    title: "Oneiro, AI-powered story generation app designed for children"
                }
            },
            year: 2023,
        },
        leftCorridor: {
            skills: {
                fr: {
                    values: ["UX Narratif", "Interface éducative", "IA Générative"]
                },
                en: {
                    values: ["Narrative UX", "Educational Interface", "Generative AI"]
                },
            }
        },
        sections: {
            context: {
                content: {
                    fr: {
                        description: "Oneiro explore les usages de l’IA générative dans un contexte éducatif. L’ambition était de proposer une expérience ludique permettant à l’enfant de participer activement à la création d’une histoire personnalisée.",
                    },
                    en: {
                        description: "Oneiro explores the use of generative AI in an educational context. The goal was to offer a playful experience where children actively participate in creating their own personalized stories.",
                    }
                },
                details: [
                    {
                        content: { fr: { label: "Temps de travail" }, en: { label: "Timeline" } },
                        value: ["23.06.2023 | 12.08.2023"],
                    },
                    {
                        content: { fr: { label: "Collaborateurs" }, en: { label: "Collaborators" } },
                        value: [
                            { content: { fr: { label: "Thibaut Colin" }, en: { label: "Thibaut Colin" } } }
                        ],
                    },
                    {
                        content: { fr: { label: "Rôle" }, en: { label: "Role" } },
                        value: [
                            { content: { fr: { label: "Concepteur d’application" }, en: { label: "Product Designer" } } },
                            { content: { fr: { label: "Développeur Full Stack" }, en: { label: "Full Stack Developer" } } }
                        ],
                        marquee: true,
                    },
                    {
                        content: { fr: { label: "Lien" }, en: { label: "Link" } },
                        value: [
                            { content: { fr: { label: "Maquette Figma" }, en: { label: "Figma Prototype" } }, href: "https://www.figma.com/design/vketK7TBIhF9WOnvcLrN7z/oneiro?node-id=2003-919" }
                        ],
                    },
                    {
                        content: { fr: { label: "Catégorie" }, en: { label: "Category" } },
                        value: ["EdTech / IA"],
                    },
                ],
            },
            objectifs: {
                content: {
                    fr: {
                        title: "Objectifs",
                        description: "Concevoir une expérience créative accessible, favorisant l’imaginaire et l’autonomie, tout en transformant le numérique en un support tangible via l'export PDF."
                    },
                    en: {
                        title: "Objectives",
                        description: "Design an accessible creative experience that fosters imagination and autonomy, turning digital interaction into tangible outcomes via PDF exports."
                    }
                },
                images: []
            },
            role: {
                content: {
                    fr: {
                        title: "Mon Rôle",
                        description: "Conception de bout en bout : réflexion sur les parcours enfants, UX/UI, structuration des prompts IA pour les récits et design des supports audio/visuels."
                    },
                    en: {
                        title: "My Role",
                        description: "End-to-end design: children's user flows, UX/UI, structuring AI prompts for narratives, and designing audio/visual outputs."
                    }
                },
                images: []
            },
            demarche: {
                content: {
                    fr: {
                        title: "Démarche",
                        description: "Une approche centrée sur l'enfant, simplifiant les interactions avec l'IA pour les rendre magiques plutôt que techniques, avec un focus sur l'accessibilité cognitive."
                    },
                    en: {
                        title: "Approach",
                        description: "A child-centered approach, simplifying AI interactions to make them feel magical rather than technical, focusing on cognitive accessibility."
                    }
                },
                images: []
            },
            resultat: {
                content: {
                    fr: {
                        title: "Résultat",
                        description: "Un prototype fonctionnel démontrant comment l'IA peut stimuler la créativité hors-écran, récompensé par un intérêt marqué pour son approche éthique et pédagogique."
                    },
                    en: {
                        title: "Result",
                        description: "A functional prototype demonstrating how AI can stimulate off-screen creativity, recognized for its ethical and pedagogical approach."
                    }
                },
                images: []
            }
        },
        carousel: {
            images: [
                {
                    src: "/images/projects/oneiro/screen-1.jpg",
                    alt: { fr: { text: "Interface de création" }, en: { text: "Creation interface" } },
                },
                {
                    src: "/images/projects/oneiro/screen-2.jpg",
                    alt: { fr: { text: "Lecture de l'histoire" }, en: { text: "Story reading view" } },
                }
            ],
        },
    },
];
/**
 * Retourne la liste simplifiée pour la page d'accueil
 */
export const getProjectsList = (lang: Lang): HomeProject[] =>
    projects.map((project) => ({
        slug: project.slug,
        entreprise: project.hero.entreprise,
        year: project.hero.year,
        cover: project.hero.cover,
        title: project.hero.content[lang].title,
        skills: project.leftCorridor.skills[lang].values,
    }));