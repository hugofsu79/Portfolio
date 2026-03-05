import type { Project } from "../types/projects";

export const projects: Project[] = [
    // Siko
    {
        slug: "siko-mobility",
        entreprise: "Siko Mobility",
        year: 2025,
        cover: "/images/siko-mobility/cover.webp",
        logo: "/public/svg/projets/siko-mobility/logo.svg",
        tags: ["Développeur web", "Tailwind CSS"],

        // Données Traduisibles
        content: {
            fr: {
                title: "Fintech qui simplifie le financement de véhicules en proposant une expérience digitale simple et fluide",
                skills: ["Fintech", "B2C-B2B", "Méthodologie"],
                context: {
                    title: "Contexte",
                    description: "Siko Mobility est une startup fintech spécialisée dans le financement de véhicules. J’y ai travaillé un an en alternance, dans un contexte startup à forte autonomie, nécessitant une compréhension rapide des mécanismes de financement et des enjeux contractuels, afin de concevoir des interfaces simples et adaptées au type de financement que l’utilisateur souhaite contracter.",

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
                    description: "Les objectifs se sont construits progressivement au fil de l’alternance. À mon arrivée, la place du design au sein de l’équipe technique n’était pas clairement définie. Les interfaces existantes reposaient principalement sur des composants Tailwind, avec des éléments graphiques peu structurés et difficilement exploitables par les développeurs.Mon objectif principal a donc été de poser des bases solides pour le design produit, en collaboration étroite avec le CTO. Cela a impliqué un important travail de clarification et de structuration, reprendre l’ensemble des écrans et transformer l'environnement d'avant en un espace cohérent, lisible et réutilisable. J’ai également cherché à donner un rôle fonctionnel au design, en construisant des composants et des règles UI capables de servir de véritable béquille pour l’équipe de développement, plutôt que de simples maquettes esthétiques. Enfin, un enjeu clé a été de dépasser les limites d’un design purement utilitaire lié à Tailwind, afin d’apporter plus de personnalité, de cohérence visuelle et de lisibilité aux interfaces, tout en restant compatible avec les contraintes techniques de la startup.",
                },
                role: {
                    title: "Mon Rôle",
                    description: "Il consistait à structurer et faire évoluer les parcours clés du produit dans un contexte fintech en forte croissance. J’ai travaillé sur la conception d’un nouveau parcours assurance, ainsi que sur la création et l’amélioration des dashboards marchands, en tenant compte des enjeux B2B, B2C et des besoins opérationnels des partenaires. J’ai également mené une refonte des parcours de financement, en les adaptant aux différents types d’offres proposées (paiement fractionné, crédit, LLD, LOA). Chaque parcours impliquait des contraintes spécifiques, notamment en matière d’informations utilisateurs, de documents requis et de règles contractuelles, nécessitant une conception précise et rigoureuse. En parallèle, j’ai initié et construit un Design System, avec pour objectif d’apporter une interface plus cohérente, lisible et moderne, tout en servant de véritable support pour l’équipe de développement. Ce travail visait à dépasser un design purement utilitaire pour renforcer la clarté des interfaces, la cohérence visuelle et la maintenabilité du produit."
                },

                illustration: {
                    picture: "/public/images/kiro/role_mockup.png",
                    description: "",
                },
                demarche: {
                    title: "Démarche",
                    description: "La démarche s’est construite progressivement dans un contexte startup où les processus étaient encore en évolution. J’ai commencé par analyser les parcours existants afin de comprendre les logiques de financement, les contraintes réglementaires et les besoins des marchands et des utilisateurs finaux. Cette phase m’a permis d’identifier les points de friction et les incohérences dans les interfaces déjà en place.\n\nÀ partir de ces observations, j’ai travaillé à la structuration des flux produits : clarification des étapes de financement, définition des informations nécessaires à chaque moment du parcours et hiérarchisation des contenus pour réduire la charge cognitive. Les interfaces ont ensuite été conçues sous forme de wireframes puis de maquettes, en étroite collaboration avec le CTO afin de rester aligné avec les contraintes techniques.\n\nEn parallèle, j’ai initié la création d’un Design System afin d’unifier les composants utilisés dans l’interface et faciliter leur réutilisation par l’équipe de développement. Cette démarche visait à transformer un ensemble d’écrans disparates en un produit plus cohérent, lisible et maintenable."
                },
                resultat: {
                    title: "Résultat",
                    description: "Mon année chez Siko Mobility a marqué un vrai tournant. Les débuts ont été déroutants car nouvelle ville, nouvelle environnement, et un cadre où l’initiative est indispensable. Sans supervision directe, j’ai dû apprendre à prendre ma place, proposer et structurer. Progressivement, la confiance accordée par les fondateurs m’a permis d’évoluer d’un rôle exécutant à un rôle moteur, animation de points réguliers, ateliers pédagogiques avec les équipes, conception d’un dashboard marchand, refonte du parcours assurance et création d’un nouveau parcours crédit. Cette expérience m’a donné une vraie assurance dans le travail en équipe et dans une approche produit agile.",
                }
            },
            en: {
                title: "A fintech company that simplifies vehicle financing by delivering a seamless digital experience.",
                skills: ["Fintech", "B2C-B2B", "Methodology"],
                context: {
                    title: "Context",
                    description: "Siko Mobility is a fintech startup specialized in vehicle financing. I worked there for one year as a work-study student in a highly autonomous startup environment, which required a rapid understanding of financing mechanisms and contractual constraints, in order to design simple interfaces tailored to the type of financing the user intends to apply for.",
                    details: [
                        { label: "Working time", value: "02.10.2024 | 27.10.2025" },
                        {
                            label: "Collaborators",
                            value: ["Thibaut Andriamasinoro", "Louis Leveneur", "Jugurta Mahious", "Kader Bakayoko", "Simon Priet"]
                        },
                        { label: "Role", value: "UI Designer / App Designer" },
                        { label: "Link", value: "www.sikomobility.com", href: "https://www.sikomobility.com/" }
                    ]
                },
                objectifs: {
                    title: "Objectives",
                    description: "The objectives gradually took shape over the course of my apprenticeship. When I joined, the role of design within the technical team was not clearly defined: the founders were not yet fully convinced of the value a UI/UX designer could bring, partly due to a limited understanding of the role itself. The existing interfaces were primarily built using Tailwind components, with loosely structured visual elements that were difficult for developers to leverage effectively. My main objective was therefore to establish solid foundations for product design, working in close collaboration with the CTO.This required significant clarification and structuring work: revisiting all existing screens, sorting and organizing Figma files, and transforming what was essentially a graphic “Diogenes syndrome” into a coherent, readable, and reusable design environment. I also aimed to give design a truly functional role by building components and UI guidelines that could act as a real support system for the development team, rather than merely producing aesthetic mockups.Finally, a key challenge was to move beyond a purely utilitarian, Tailwind- driven approach to design, in order to bring greater personality, visual consistency, and clarity to the interfaces—while remaining fully aligned with the startup’s technical constraints."
                },
                role: {
                    title: "My Role",
                    description: "At Siko Mobility, my role was to structure and evolve the product’s key user journeys within a fast-growing fintech environment. I worked on designing a new insurance flow, as well as creating and improving merchant dashboards, taking into account B2B and B2C challenges and the operational needs of partners. I also led a redesign of the financing journeys, adapting them to the different types of offers available(installment payments, consumer credit, long- term lease, and lease with option to purchase).Each flow came with specific constraints—particularly regarding user information, required documentation, and contractual rules—demanding a precise and rigorous design approach. At the same time, I initiated and built a Design System aimed at delivering a more coherent, legible, and modern interface, while serving as a practical support framework for the development team.This work sought to move beyond a purely utilitarian design approach, strengthening interface clarity, visual consistency, and overall product maintainability."
                },
                demarche: {
                    title: "Approach",
                    description: "The process evolved progressively within a startup environment where workflows were still being defined. I first analyzed the existing user journeys to understand the financing logic, regulatory constraints, and the needs of both merchants and end users. This phase helped identify friction points and inconsistencies within the existing interfaces.\n\nBased on these insights, I focused on structuring the product flows: clarifying the financing steps, defining the information required at each stage, and organizing content to reduce cognitive load. Interfaces were first designed as wireframes and then translated into UI mockups, in close collaboration with the CTO to ensure alignment with technical constraints.\n\nIn parallel, I initiated the creation of a Design System to unify interface components and make them reusable by the development team. This approach aimed to transform a set of fragmented screens into a more coherent, readable, and maintainable product."
                },
                resultat: {
                    title: "Results",
                    description: "My year at Siko Mobility marked a real turning point. The beginning was disorienting: a new city, a new startup, and an environment where initiative was not optional but essential. With no direct supervision, I had to learn how to step up, take ownership, and bring structure where it was missing. Over time, the trust placed in me by the founders allowed me to evolve from an execution- focused role to a driving force within the product team.I began leading regular check- ins, facilitating educational workshops with the team, designing a merchant dashboard, redesigning the insurance flow, and creating a new credit journey. This experience gave me strong confidence in collaborative work and reinforced my ability to operate within an agile, product- driven approach."
                }
            }
        },
        // Images (Indépendantes de la langue mais avec ALT traduisible)
        media: {
            role: "/icons/projets/Siko/role_svg.svg",
            carousel: [{
                src: "/public/images/siko-mobility/gallery/Dashboard.webp",
                alt: { fr: "Dashboard", en: "Dashboard" }
            }, {
                src: "/public/images/siko-mobility/gallery/toolsDS.png", alt: { fr: "Dashboard", en: "Dashboard" }
            }, { src: "/public/images/siko-mobility/gallery/portail.webp", alt: { fr: "portable utilisateur", en: "portable user" } }
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
                title: "Un espace de transmission et d’échange autour du végétal",
                skills: ["Product Design", "UX Research", "Design System"],
                context: {
                    title: "Contexte",
                    description: "L’intérêt pour les plantes et l’écologie ne cesse de croître, notamment chez les jeunes générations qui cherchent à recréer un lien avec le vivant. Pourtant, il n’existe aujourd’hui aucune plateforme de vente réellement dédiée à cet univers. Les sites généralistes ne prennent pas en compte les spécificités du monde végétal, (la saisonnalité, la fragilité des plantes, leurs besoins d’entretien ou encore la valeur sentimentale qu’elles peuvent avoir). De leur côté, les jardineries proposent une offre souvent standardisée et peu diversifiée, qui ne reflète pas la richesse des échanges possibles entre particuliers, d’autant plus qu’elles n’ont pas d’intérêt à favoriser ce type d’échanges.",
                    details: [
                        { label: "Temps de travail", value: "14.12.2024 | 27.08.2025" },
                        { label: "Collaborateurs", value: "/" },
                        { label: "Rôle", value: "Designer UI / Product Designer" },
                        { label: "Lien", value: "Fichier Figma", href: "#" },
                        { label: "Catégorie", value: "Marketplace" }
                    ]
                },
                objectifs: {
                    title: "Objectif",
                    description: "Rhizome est un projet conceptuel explorant la création d’une plateforme dédiée aux passionnés de plantes d’intérieur. L’objectif était d’imaginer un espace permettant aux utilisateurs de partager leurs expériences, documenter leurs plantes et accéder à des conseils d’entretien fiables. Le projet cherchait à structurer les échanges autour de la culture des plantes en mettant en avant des contenus utiles et compréhensibles, tout en valorisant les contributions de la communauté.Une attention particulière a été portée à la question de la fiabilité des conseils, à travers la mise en avant de contenus vérifiés."
                },
                role: {
                    title: "Mon Rôle",
                    description: "Mon travail a consisté à définir le concept du produit, concevoir les parcours utilisateurs et imaginer l’interface de la plateforme. J’ai également structuré les fonctionnalités principales du service, notamment le partage de conseils, les interactions entre passionnés et les mécanismes permettant de valoriser les contenus les plus pertinents."
                },
                demarche: {
                    title: "Démarche",
                    description: "Le projet a commencé par une phase d’exploration autour des usages liés aux plantes d’intérieur et des types de contenus partagés par les passionnés.Cette réflexion a permis d’identifier plusieurs axes clés: la transmission de conseils pratiques, la documentation des plantes et la création d’une dynamique communautaire. À partir de ces constats, j’ai conçu les principaux parcours utilisateurs et structuré les fonctionnalités du produit.L’interface a été pensée pour organiser les informations de manière claire et favoriser des interactions simples autour du partage de connaissances."
                },
                resultat: {
                    title: "Résultat",
                    description: "Le projet a abouti à un concept de plateforme structuré, illustrant comment une communauté dédiée aux plantes d’intérieur pourrait s’organiser autour du partage de connaissances. Il a donné lieu à la conception de parcours utilisateurs, d’interfaces et d’explorations fonctionnelles permettant de structurer l’accès aux conseils et aux échanges entre utilisateurs.Rhizome constitue ainsi une exploration de la manière dont le design peut faciliter la transmission et l’organisation du savoir au sein d’une communauté spécialisée."
                }
            },
            en: {
                title: "Rhizome, the Vinted-style marketplace dedicated to plant lovers",
                skills: ["Product Design", "UX Research", "Design System"],
                context: {
                    title: "Context",
                    description: "Interest in plants and ecology continues to grow, particularly among younger generations seeking to reconnect with the living world. Yet, to date, there is no marketplace truly dedicated to this field. Generalist platforms fail to account for the specific characteristics of plants: seasonality, fragility, maintenance needs, and even the sentimental value they may hold. Garden centers, on the other hand, tend to offer standardized and often limited selections that do not reflect the richness of exchanges possible between individuals — especially since they have little incentive to encourage such interactions.",
                    details: [
                        { label: "Timeline", value: "14.12.2024 | 27.08.2025" },
                        { label: "Collaborators", value: "Myself" },
                        { label: "Role", value: "UI Designer / Product Designer" },
                        { label: "Link", value: "Figma File", href: "#" },
                        { label: "Category", value: "Marketplace" }
                    ]
                },
                objectifs: {
                    title: "Objective",
                    description: "Rhizome is a concept project exploring the creation of a platform dedicated to houseplant enthusiasts. The goal was to design a space where users could share experiences, document their plants, and access reliable plant care advice. The project aimed to structure community exchanges around plant care while highlighting useful and understandable content.Particular attention was given to the question of information reliability, with mechanisms designed to highlight verified advice within the community."
                },
                role: {
                    title: "My Role",
                    description: "I initiated and designed the Rhizome project from end to end as a Product Designer. My work involved defining the product concept, designing the main user journeys, and creating the interface.I also structured the platform’s key features, including advice sharing, community interactions, and mechanisms to highlight the most relevant content."
                },
                demarche: {
                    title: "Approach",
                    description: "The project began with an exploration of how houseplant enthusiasts currently share knowledge and document their plants. This research helped identify several key dimensions: practical advice sharing, plant documentation, and community engagement. Based on these insights, I designed the main user journeys and structured the product’s core features.The interface was designed to organize information clearly and facilitate simple interactions centered around knowledge sharing."
                },
                resultat: {
                    title: "Outcome",
                    description: "The project resulted in a structured product concept illustrating how a community platform dedicated to houseplants could function. It led to the creation of user flows, interface designs, and feature explorations that organize access to plant care advice and community exchanges.Rhizome ultimately explores how design can structure and facilitate knowledge sharing within a specialized community."
                }
            }
        },
        // --- MÉDIAS ---
        media: {
            carousel: [
                {
                    src: "/public/images/rhizome/gallery/Rhiziome_slide3.webp",
                    alt: { fr: "Ecran interface", en: "Interface screen" }
                },
                {
                    src: "/public/images/rhizome/gallery/Rhiziome_slide1.webp",
                    alt: { fr: "Logo Rhizome", en: "Rhizome Logo" }
                },
                {
                    src: "/public/images/rhizome/gallery/Rhiziome_slide2.webp",
                    alt: { fr: "Ecran interface", en: "Interface screen" }
                },
                {
                    src: "/public/images/rhizome/gallery/Rhiziome_slide4.webp",
                    alt: { fr: "Midmap", en: "Midmap" }
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
                    title: "Contexte",
                    description: "Kiro est une application dédiée au suivi de la rééducation fonctionnelle. Ce projet, réalisé lors d'un test technique, visait à proposer une expérience claire adaptée aux usages terrain des praticiens.",
                    details: [
                        { label: "Temps de travail", value: "Exercice technique | 2025" },
                        { label: "Collaborateurs", value: "/" },
                        { label: "Rôle", value: "Product Designer" },
                        { label: "Lien", value: "Prototype Figma", href: "https://www.figma.com/design/XujzwV1i7ogDs52f51IDTG/Kiro?node-id=30-192" },
                        { label: "Catégorie", value: "SaaS B2B / Santé" }
                    ]
                },
                objectifs: {
                    title: "Objectifs",
                    description: "L’objectif du projet Kiro était de concevoir les wireframes d’une application de rééducation centrée sur le suivi des exercices prescrits par un praticien. L’application devait permettre à un patient de retrouver facilement son programme, de réaliser chaque séance avec un guidage clair (consignes, étapes, rythme), puis de valider l’exécution en renseignant son ressenti afin de garder une trace de sa progression. L’enjeu principal était de transformer une prescription souvent fragmentée ou difficile à appliquer au quotidien en un parcours mobile fluide et rassurant, capable de réduire les oublis, limiter les erreurs d’exécution et soutenir la régularité, tout en restant accessible à des utilisateurs avec des niveaux d’aisance numérique très variés."
                },
                role: {
                    title: "Mon Rôle",
                    description: "J’ai cadré et conçu l’expérience de bout en bout : définition du parcours, structuration de l’information, conception des écrans clés et des états (vide/chargé/erreur), puis production des wireframes. Mon focus a été de réduire la charge cognitive, de prioriser l’action (faire ses exercices, suivre sa progression) et de garantir une lecture fluide du parcours, quel que soit le niveau d’aisance numérique."
                },
                demarche: {
                    title: "Démarche",
                    description: "J’ai d’abord clarifié le besoin et la logique du parcours en identifiant les étapes indispensables côté patient, leur ordre, et les principaux points de friction (peur de mal faire, manque de repères, démotivation, oubli). J’ai ensuite structuré l’architecture autour des moments clés, de l’accueil à l’onboarding, jusqu’à l’exécution des exercices et le suivi de progression. Les wireframes m’ont permis de valider la hiérarchie de l’information, la navigation et la clarté des contenus avant l’UI, en itérant avec des micro-copies simples, des composants réutilisables et une continuité forte entre les écrans via les feedbacks, confirmations et états."
                },
                resultat: {
                    title: "Résultat",
                    description: "Le travail a abouti à un ensemble de wireframes cohérents couvrant le parcours patient de bout en bout, de la première ouverture de l’application jusqu’au suivi des séances. Cette base formalise une architecture d’écrans claire, des contenus hiérarchisés et des états essentiels (vide, chargement, erreur), permettant de guider l’utilisateur dans l’exécution des exercices, de capter son ressenti et de rendre la progression lisible. Ces wireframes constituent un support solide pour passer à l’UI design, aligner les parties prenantes et faciliter l’implémentation grâce à des composants réutilisables et une logique de navigation stabilisée."
                }
            },
            en: {
                title: "Kiro, optimizing the rehabilitation tracking experience for physiotherapists",
                skills: ["UX Strategy", "B2B Interface", "Advanced Prototyping"],
                context: {
                    title: "Context",
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
                    description: "The goal of the Kiro project was to design the wireframes for a rehabilitation app focused on helping patients follow the exercise program prescribed by their practitioner. The app needed to let patients easily access their plan, complete each session with clear step-by-step guidance (instructions, stages, pacing), and confirm completion by recording their feedback in order to track progress over time. The main challenge was to turn a prescription that is often fragmented or hard to apply day to day into a smooth, reassuring mobile journey—reducing missed sessions, preventing execution mistakes, and supporting long-term consistency—while remaining accessible to users with very different levels of digital confidence."
                },
                role: {
                    title: "My Role",
                    description: "I framed and designed the end-to-end experience: defining the user journey, structuring the information, designing the key screens and states (empty/loading/error), and producing the wireframes. My focus was to reduce cognitive load, prioritize the core actions (doing exercises and tracking progress), and ensure a smooth, readable flow regardless of the user’s level of digital confidence."
                },
                demarche: {
                    title: "Approach",
                    description: "I started by clarifying the need and defining the journey logic, identifying the essential patient steps, their sequence, and the main friction points (fear of doing it wrong, lack of guidance, low motivation, forgetting). I then structured the information architecture around key moments—from welcome and onboarding to exercise execution and progress tracking. The wireframes helped validate hierarchy, navigation, and content clarity before any UI decisions, iterating with simple microcopy, reusable components, and strong continuity across screens through feedback, confirmations, and states."
                },
                resultat: {
                    title: "Outcome",
                    description: "The work resulted in a consistent set of wireframes covering the full patient journey, from the first app launch to ongoing session tracking. This foundation defines a clear screen architecture, well-structured content hierarchy, and essential states (empty, loading, error), enabling users to complete exercises with guidance, record their feedback, and clearly track progress over time. These wireframes provide a strong base to move into UI design, align stakeholders, and support implementation through reusable components and a stabilized navigation logic."
                }
            }
        },
        // --- MÉDIAS ---
        media: {
            carousel: [
                {
                    src: "/public/images/kiro/gallery/objectifIllustration.webp",
                    alt: { fr: "Vue Dashboard", en: "Dashboard View" }
                },
                {
                    src: "/public/images/kiro/gallery/wireframe_mobile.png",
                    alt: { fr: "Détail Patient", en: "Patient Details" }
                },
                {
                    src: "/public/images/kiro/gallery/maquette_desktop.png",
                    alt: { fr: "Détail Patient", en: "Patient Details" }
                },
                {
                    src: "/public/images/kiro/gallery/Wireframe/mockup_carrousel_kiro.png",
                    alt: { fr: "Détail Patient", en: "Patient Details mockup" }
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
                title: "Application de génération d’histoires pour enfants assistée par l’IA",
                skills: ["UX Narratif", "Interface éducative", "IA Générative"],
                context: {
                    title: "Contexte",
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
                    description: "Le projet est né d’un constat partagé avec Thibaut, il n’existait pas d’application permettant à un enfant d’imaginer entièrement son propre univers narratif. Les outils existants proposaient des histoires générées, mais rarement un monde réellement façonné par l’enfant. Nous avons donc conçu une expérience où l’IA accompagne la créativité sans la diriger, laissant l’enfant inventer son héros, son environnement et ses péripéties. L’export en PDF illustré prolonge ensuite l’expérience en transformant la création numérique en objet tangible."
                },
                role: {
                    title: "Mon Rôle",
                    description: "Sur Oneiro, j’ai conçu l’expérience de bout en bout en combinant UX/UI et logique produit : définition du parcours de création, structuration des choix narratifs (pour guider l’enfant sans prompt libre), conception des écrans clés et des états, puis mise en place des garde-fous nécessaires pour sécuriser les contenus générés. Mon objectif a été de rendre l’outil à la fois ludique, autonome et fiable, avec une attention particulière à la clarté des interactions et à l’accessibilité."
                },

                illustration: {
                    picture: "/public/images/kiro/role_mockup.png",
                    description: "",
                },
                demarche: {
                    title: "Démarche",
                    description: "J’ai d’abord cadré les usages et les risques liés à l’IA générative dans un contexte enfant, puis j’ai choisi une approche “guidée” basée sur des sélections simples (type d’histoire, héros, péripéties) afin de réduire la complexité et limiter les dérives. J’ai ensuite construit le flow complet, depuis l’onboarding et la configuration de l’histoire jusqu’à la génération, l’écoute audio, la visualisation, puis l’export en PDF imprimable. Les itérations ont porté sur la lisibilité des étapes, la cohérence narrative, la gestion des erreurs et la manière dont l’app transforme une expérience digitale en objet tangible que l’enfant peut conserver ou partager."
                },
                resultat: {
                    title: "Résultat",
                    description: "Le projet a abouti à un parcours clair et maîtrisé qui permet à un enfant de co-créer une histoire personnalisée en quelques étapes, avec une génération encadrée et des sorties valorisantes (texte, audio et PDF). Oneiro propose une expérience accessible et engageante, tout en intégrant la sécurité comme une composante centrale du design. Le livrable final fournit une base solide pour une version prototype ou MVP, avec une architecture d’écrans cohérente, des composants réutilisables et une logique de création pensée pour durer."
                }
            },
            en: {
                title: "Oneiro, AI-powered story generation app designed for children",
                skills: ["Narrative UX", "Educational Interface", "Generative AI"],
                context: {
                    title: "Context",
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
                    description: "On Oneiro, I designed the end-to-end experience by combining UX/UI and product logic: defining the creation flow, structuring narrative choices (so children are guided without relying on free-form prompts), designing key screens and states, and integrating the necessary safeguards to keep generated content safe. My goal was to make the tool playful, self-explanatory, and reliable, with strong attention to interaction clarity and accessibility."
                },

                illustration: {
                    picture: "/public/images/kiro/role_mockup.png",
                    description: "",
                },
                demarche: {
                    title: "Approach",
                    description: "I first scoped the intended use cases and the risks of generative AI in a child-focused context, then chose a guided approach based on simple selections (story type, main character, plot twists) to reduce complexity and limit unsafe outputs. I then built the full flow, from onboarding and story setup to generation, audio playback, reading, and finally a printable PDF export. Iterations focused on step clarity, narrative consistency, error handling, and how the app turns a digital experience into a tangible object children can keep or share."
                },
                resultat: {
                    title: "Outcome",
                    description: "The project resulted in a clear and controlled journey that enables children to co-create a personalized story in just a few steps, with an experience that is both engaging and safely framed, and with rewarding outputs (text, audio, and a printable PDF). Oneiro places safety as a core design component while remaining accessible and fun. The final deliverable provides a solid foundation for a prototype or MVP, with a consistent screen architecture, reusable components, and a creation logic built to scale."
                }
            }
        },
        // --- MÉDIAS ---
        media: {
            carousel: [
                {
                    src: "/public/images/oneiro/gallery/imge_mockup.webp",
                    alt: { fr: "Interface de création", en: "Creation interface" }
                },
                {
                    src: "/public/images/oneiro/gallery/gallery_photo_2.png",
                    alt: { fr: "Lecture de l'histoire", en: "Story reading view" }
                }
            ],
        },
    }
];

export const getProjectsList = (lang: "fr" | "en") =>
    projects.map((p) => ({
        slug: p.slug,
        entreprise: p.entreprise,
        year: p.year,
        cover: p.cover,
        title: p.content[lang].title,
        skills: p.content[lang].skills,
    }));