import type { Project, Lang, HomeProject } from "../types/projects";

export const projects: Project[] = [
    // Siko
    {
        slug: "siko-mobility",
        // Données Statiques (ne changent jamais)
        entreprise: "Siko Mobility",
        year: 2025,
        cover: "/images/siko-mobility/cover.webp",
        logo: "/public/svg/projets/siko-mobility/logo.svg",
        tags: ["Développeur web", "Tailwind CSS"],

        // Données Traduisibles
        content: {
            fr: {
                title: "Fintech qui simplifie le financement de véhicules en proposant une expérience digitale fluide",
                skills: ["Fintech", "B2C-B2B", "Méthodologie"],
                context: {
                    description: "Siko Mobility est une startup fintech spécialisée dans le financement de véhicules. J’y ai travaillé un an en alternance...",
                    // Ton fichier de données (ex: projects.ts)
                    details: [
                        { label: "Temps de travail", value: "02.10.2024 | 27.10.2025" },
                        {
                            label: "Collaborateurs",
                            value: ["Thibaut Andriamasinoro", "Louis Leveneur", "Jugurta Mahious", "Kader Bakayoko", "Simon Priet"]
                        },
                        { label: "Rôle", value: "Designer UI / Concepteur" },
                        { label: "Lien", value: "www.sikomobility.com", href: "https://www.sikomobility.com/" }
                    ]
                },
                objectifs: {
                    title: "Objectifs",
                    description: "Les objectifs se sont construits progressivement au fil de l’alternance. À mon arrivée, la place du design au sein de l’équipe technique n’était pas clairement définie : les fondateurs n’étaient pas encore convaincus de la valeur d’un designer UI/UX, en partie par méconnaissance du rôle. Les interfaces existantes reposaient principalement sur des composants Tailwind, avec des éléments graphiques peu structurés et difficilement exploitables par les développeurs.\n\nMon objectif principal a donc été de poser des bases solides pour le design produit, en collaboration étroite avec le CTO. Cela a impliqué un important travail de clarification et de structuration : reprendre l’ensemble des écrans, trier et organiser les fichiers Figma, et transformer un environnement de travail proche d’un véritable « syndrome de Diogène » graphique en un espace cohérent, lisible et réutilisable.\n\nJ’ai également cherché à donner un rôle fonctionnel au design, en construisant des composants et des règles UI capables de servir de véritable béquille pour l’équipe de développement, plutôt que de simples maquettes esthétiques. Enfin, un enjeu clé a été de dépasser les limites d’un design purement utilitaire lié à Tailwind, afin d’apporter plus de personnalité, de cohérence visuelle et de lisibilité aux interfaces, tout en restant compatible avec les contraintes techniques de la startup.",
                },
                role: {
                    title: "Mon Rôle",
                    description: "Chez Siko Mobility, mon rôle consistait à structurer et faire évoluer les parcours clés du produit dans un contexte fintech en forte croissance. J’ai travaillé sur la conception d’un nouveau parcours assurance, ainsi que sur la création et l’amélioration des dashboards marchands, en tenant compte des enjeux B2B et des besoins opérationnels des partenaires.\n\nJ’ai également mené une refonte des parcours de financement, en les adaptant aux différents types d’offres proposées (paiement fractionné, crédit, LLD, LOA). Chaque parcours impliquait des contraintes spécifiques, notamment en matière d’informations utilisateurs, de documents requis et de règles contractuelles, nécessitant une conception précise et rigoureuse.\n\nEn parallèle, j’ai initié et construit un Design System, avec pour objectif d’apporter une interface plus cohérente, lisible et moderne, tout en servant de véritable support pour l’équipe de développement. Ce travail visait à dépasser un design purement utilitaire pour renforcer la clarté des interfaces, la cohérence visuelle et la maintenabilité du produit."
                },
                resultat: {
                    title: "Résultat",
                    description: "Mon année chez Siko Mobility a marqué un vrai tournant.Les débuts ont été déroutants: nouvelle ville, nouvelle startup, et un cadre où l’initiative est indispensable.Sans supervision directe, j’ai dû apprendre à prendre ma place, proposer et structurer. Progressivement, la confiance accordée par les fondateurs m’a permis d’évoluer d’un rôle exécutant à un rôle moteur: animation de points réguliers, ateliers pédagogiques avec les équipes, conception d’un dashboard marchand, refonte du parcours assurance et création d’un nouveau parcours crédit.Cette expérience m’a donné une vraie assurance dans le travail en équipe et dans une approche produit agile.",
                }
            },
            en: {
                title: "A fintech company that simplifies vehicle financing by delivering a seamless digital experience.",
                skills: ["Fintech", "B2C-B2B", "Methodology"],
                context: {
                    description: "Siko Mobility is a fintech startup specializing in vehicle financing. I worked there for a year...",
                    details: [
                        { label: "Working time", value: "02.10.2024 | 27.10.2025" },
                        { label: "Role", value: "UI Designer / App Designer" },
                        { label: "Link", value: "www.sikomobility.com", href: "https://www.sikomobility.com/" }
                    ]
                },
                objectifs: {
                    title: "Objectives",
                    description: "Objectives were built progressively. Upon arrival..."
                },
                role: {
                    title: "My Role",
                    description: "At Siko Mobility, my role was to structure and evolve key product journeys..."
                },
                resultat: {
                    title: "Results",
                    description: "My year at Siko Mobility was a real turning point..."
                }
            }
        },
        // Images (Indépendantes de la langue mais avec ALT traduisible)
        media: {
            objectifs: "/images/projects/siko-mobility/Objectifs_image_siko.png",
            role: "/icons/projets/Siko/role_svg.svg",
            carousel: [
                { src: "/images/projects/siko-mobility/carousel/paysage.png", alt: { fr: "Dashboard", en: "Dashboard" } }
            ]
        }
    },
    // Rhizome
    {
        slug: "rhizome",
        // --- DONNÉES STATIQUES ---
        entreprise: "Rhizome",
        year: 2025,
        cover: "/images/rhizome/cover.webp",
        logo: "/public/svg/projets/rhizome/logo.svg",
        tags: ["UI/UX Designer"],

        // --- DONNÉES TRADUISIBLES ---
        content: {
            fr: {
                title: "Rhizome, le Vinted des plantes pour les passionnés de botanique",
                skills: ["Product Design", "UX Research", "Design System"],
                context: {
                    description: "Ce projet fictif a été développé dans le cadre de mon année de licence. Le travail portait sur l’analyse d’un besoin utilisateur, la définition des parcours clés et la conception d’une interface cohérente et exploitable.",
                    details: [
                        { label: "Temps de travail", value: "14.12.2024 | 27.08.2025" },
                        { label: "Collaborateurs", value: "Ma pomme" },
                        { label: "Rôle", value: "Designer UI / Product Designer" },
                        { label: "Lien", value: "Fichier Figma", href: "#" },
                        { label: "Catégorie", value: "Marketplace" }
                    ]
                },
                objectifs: {
                    title: "Concevoir une marketplace de A à Z",
                    description: "L'objectif était de structurer des parcours simples et engageants, tout en posant les bases d’un design system léger pour garantir la scalabilité du projet."
                },
                role: {
                    title: "Mon Rôle",
                    description: "En tant que porteur du projet, j’ai assuré l’ensemble de la conception : définition du concept, recherche UX, conception des parcours et création des maquettes UI."
                },
                demarche: {
                    title: "Un constat simple",
                    description: "Les plateformes généralistes ignorent la saisonnalité et la fragilité des plantes. Rhizome répond à ce manque en proposant une plateforme pensée spécifiquement pour l’échange végétal."
                },
                resultat: {
                    title: "Une vision communautaire",
                    description: "Cette V2 dépasse la simple marketplace pour construire un écosystème dédié aux passionnés : partage de conseils, transmission de savoir-faire et suivi de collection."
                }
            },
            en: {
                title: "Rhizome, the Vinted-style marketplace dedicated to plant lovers",
                skills: ["Product Design", "UX Research", "Design System"],
                context: {
                    description: "This fictional project was developed during my Bachelor's year. The work focused on user needs analysis, defining key user journeys, and designing a consistent, usable interface.",
                    details: [
                        { label: "Timeline", value: "14.12.2024 | 27.08.2025" },
                        { label: "Collaborators", value: "Myself" },
                        { label: "Role", value: "UI Designer / Product Designer" },
                        { label: "Link", value: "Figma File", href: "#" },
                        { label: "Category", value: "Marketplace" }
                    ]
                },
                objectifs: {
                    title: "Designing a marketplace from scratch",
                    description: "The goal was to structure simple and engaging user journeys, while laying the foundations for a lightweight design system to ensure project scalability."
                },
                role: {
                    title: "My Role",
                    description: "As the project lead, I handled the entire design process: concept definition, UX research, journey mapping, and UI mockups."
                },
                demarche: {
                    title: "A simple observation",
                    description: "General platforms ignore the seasonality and fragility of plants. Rhizome addresses this by offering a platform specifically designed for plant exchanges."
                },
                resultat: {
                    title: "A community vision",
                    description: "This V2 goes beyond a simple marketplace to build a dedicated ecosystem for enthusiasts: advice sharing, skills transmission, and collection tracking."
                }
            }
        },
        // --- MÉDIAS ---
        media: {
            objectifs: "/images/projects/rhizome/objectifs.png",
            carousel: [
                {
                    src: "/images/projects/rhizome/Rhiziome_slide3.webp",
                    alt: { fr: "Logo Rhizome", en: "Rhizome Logo" }
                },
                {
                    src: "/images/projects/rhizome/Rhiziome_slide2.webp",
                    alt: { fr: "Ecran interface", en: "Interface screen" }
                }
            ],
        },
    },
    // Kiro
    {
        slug: "kiro",
        // --- DONNÉES STATIQUES ---
        entreprise: "Kiro",
        year: 2025,
        cover: "/images/kiro/cover.webp",
        logo: "/public/svg/projets/kiro/logo.svg",
        tags: ["UI/UX Designer"],

        // --- DONNÉES TRADUISIBLES ---
        content: {
            fr: {
                title: "Kiro, optimiser l'expérience de suivi de rééducation pour les kinésithérapeutes",
                skills: ["UX Strategy", "Interface B2B", "Prototypage avancé"],
                context: {
                    description: "Kiro est une application dédiée au suivi de la rééducation fonctionnelle. Ce projet, réalisé lors d'un test technique, visait à proposer une expérience claire adaptée aux usages terrain des praticiens.",
                    details: [
                        { label: "Temps de travail", value: "Exercice technique | 2025" },
                        { label: "Collaborateurs", value: "Ma pomme" },
                        { label: "Rôle", value: "Product Designer" },
                        { label: "Lien", value: "Prototype Figma", href: "https://www.figma.com/design/XujzwV1i7ogDs52f51IDTG/Kiro?node-id=30-192" },
                        { label: "Catégorie", value: "SaaS B2B / Santé" }
                    ]
                },
                objectifs: {
                    title: "Objectifs",
                    description: "Faciliter le suivi de la rééducation en proposant des parcours clairs permettant de visualiser les exercices, la progression des patients et les informations essentielles."
                },
                role: {
                    title: "Mon Rôle",
                    description: "Conception des parcours utilisateurs (dashboard patientèle), réalisation des wireframes et interfaces UI, avec un accent sur la fiabilité des informations métier."
                },
                demarche: {
                    title: "Démarche",
                    description: "Analyse des besoins métier des kinésithérapeutes pour transformer des données complexes en une interface lisible et actionnable en plein soin."
                },
                resultat: {
                    title: "Résultat",
                    description: "Une interface épurée qui réduit la charge cognitive du praticien, lui permettant de se concentrer sur l'humain tout en assurant une saisie de données rigoureuse."
                }
            },
            en: {
                title: "Kiro, optimizing the rehabilitation tracking experience for physiotherapists",
                skills: ["UX Strategy", "B2B Interface", "Advanced Prototyping"],
                context: {
                    description: "Kiro is an application dedicated to functional rehabilitation tracking. This project, created during a technical test, aimed to provide a clear experience adapted to the daily needs of practitioners.",
                    details: [
                        { label: "Timeline", value: "Technical Exercise | 2025" },
                        { label: "Collaborators", value: "Myself" },
                        { label: "Role", value: "Product Designer" },
                        { label: "Link", value: "Figma Prototype", href: "https://www.figma.com/design/XujzwV1i7ogDs52f51IDTG/Kiro?node-id=30-192" },
                        { label: "Category", value: "B2B SaaS / Health" }
                    ]
                },
                objectifs: {
                    title: "Objectives",
                    description: "Facilitate rehabilitation tracking by providing clear user journeys to visualize exercises, patient progress, and essential medical data."
                },
                role: {
                    title: "My Role",
                    description: "Design of user journeys (patient dashboard), creation of wireframes and UI interfaces, focusing on the reliability of professional medical data."
                },
                demarche: {
                    title: "Approach",
                    description: "Analysis of physiotherapists' business needs to transform complex data into a readable and actionable interface during patient care."
                },
                resultat: {
                    title: "Result",
                    description: "A streamlined interface that reduces the practitioner's cognitive load, allowing them to focus on the patient while ensuring rigorous data entry."
                }
            }
        },
        // --- MÉDIAS ---
        media: {
            objectifs: null, // Pas d'image spécifique ici
            carousel: [
                {
                    src: "/public/images/kiro/gallery/objectifIllustration.webp",
                    alt: { fr: "Vue Dashboard", en: "Dashboard View" }
                },
                {
                    src: "/public/images/kiro/gallery/wireframe.png",
                    alt: { fr: "Détail Patient", en: "Patient Details" }
                }
            ],
        },
    },
    // Oneiro
    {
        slug: "oneiro",
        // --- DONNÉES STATIQUES ---
        entreprise: "Oneiro",
        year: 2023,
        cover: "/images/oneiro/cover.webp",
        logo: "/public/svg/projets/oneiro/logo.svg",
        tags: ["UI/UX Designer", "Full Stack"],

        // --- DONNÉES TRADUISIBLES ---
        content: {
            fr: {
                title: "Oneiro, application de génération d’histoires pour enfants assistée par l’IA",
                skills: ["UX Narratif", "Interface éducative", "IA Générative"],
                context: {
                    description: "Oneiro explore les usages de l’IA générative dans un contexte éducatif. L’ambition était de proposer une expérience ludique permettant à l’enfant de participer activement à la création d’une histoire personnalisée.",
                    details: [
                        { label: "Temps de travail", value: "23.06.2023 | 12.08.2023" },
                        { label: "Collaborateurs", value: "Thibaut Colin" },
                        { label: "Rôle", value: "Product Designer / Développeur Full Stack" },
                        { label: "Lien", value: "Maquette Figma", href: "https://www.figma.com/design/vketK7TBIhF9WOnvcLrN7z/oneiro?node-id=2003-919" },
                        { label: "Catégorie", value: "EdTech / IA" }
                    ]
                },
                objectifs: {
                    title: "Objectifs",
                    description: "Le projet est né d’un constat partagé avec Thibaut : il n’existait pas d’application permettant à un enfant d’imaginer entièrement son propre univers narratif. Les outils existants proposaient des histoires générées, mais rarement un monde réellement façonné par l’enfant. Nous avons donc conçu une expérience où l’IA accompagne la créativité sans la diriger, laissant l’enfant inventer son héros, son environnement et ses péripéties. L’export en PDF illustré prolonge ensuite l’expérience en transformant la création numérique en objet tangible."
                },
                role: {
                    title: "Mon Rôle",
                    description: "Conception de bout en bout : réflexion sur les parcours enfants, UX/UI, structuration des prompts IA pour les récits et design des supports audio/visuels."
                },
                demarche: {
                    title: "Démarche",
                    description: "Une approche centrée sur l'enfant, simplifiant les interactions avec l'IA pour les rendre magiques plutôt que techniques, avec un focus sur l'accessibilité cognitive."
                },
                resultat: {
                    title: "Résultat",
                    description: "Un prototype fonctionnel démontrant comment l'IA peut stimuler la créativité hors-écran, récompensé par un intérêt marqué pour son approche éthique et pédagogique."
                }
            },
            en: {
                title: "Oneiro, AI-powered story generation app designed for children",
                skills: ["Narrative UX", "Educational Interface", "Generative AI"],
                context: {
                    description: "Oneiro explores the use of generative AI in an educational context. The goal was to offer a playful experience where children actively participate in creating their own personalized stories.",
                    details: [
                        { label: "Timeline", value: "23.06.2023 | 12.08.2023" },
                        { label: "Collaborators", value: "Thibaut Colin" },
                        { label: "Role", value: "Product Designer / Full Stack Developer" },
                        { label: "Link", value: "Figma Prototype", href: "https://www.figma.com/design/vketK7TBIhF9WOnvcLrN7z/oneiro?node-id=2003-919" },
                        { label: "Category", value: "EdTech / AI" }
                    ]
                },
                objectifs: {
                    title: "Objectives",
                    description: "The project originated from a shared observation with Thibaut: there was no application that truly allowed children to imagine and build their own narrative universe. Existing tools could generate stories, but rarely offered a world genuinely shaped by the child. We therefore designed an experience where AI supports creativity without directing it, allowing children to invent their hero, environment, and plot twists. The illustrated PDF export extends the experience beyond the screen, transforming a digital creation into a tangible object."
                },
                role: {
                    title: "My Role",
                    description: "End-to-end design: children's user flows, UX/UI, structuring AI prompts for narratives, and designing audio/visual outputs."
                },
                demarche: {
                    title: "Approach",
                    description: "A child-centered approach, simplifying AI interactions to make them feel magical rather than technical, focusing on cognitive accessibility."
                },
                resultat: {
                    title: "Result",
                    description: "A functional prototype demonstrating how AI can stimulate off-screen creativity, recognized for its ethical and pedagogical approach."
                }
            }
        },
        // --- MÉDIAS ---
        media: {
            objectifs: "",
            carousel: [
                {
                    src: "/images/oneiro/screen-1.jpg",
                    alt: { fr: "Interface de création", en: "Creation interface" }
                },
                {
                    src: "/images/oneiro/screen-2.jpg",
                    alt: { fr: "Lecture de l'histoire", en: "Story reading view" }
                }
            ],
        },
    }
];
/**
 * 
 */
export const getProjectsList = (lang: Lang): HomeProject[] =>
    projects.map((p) => ({
        slug: p.slug,
        entreprise: p.entreprise,
        year: p.year,
        cover: p.cover,
        title: p.content[lang].title,
        skills: p.content[lang].skills,
    }));