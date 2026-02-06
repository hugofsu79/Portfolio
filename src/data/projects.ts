import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        slug: "siko-mobility",

        hero: {
            entreprise: "Siko Mobility",
            cover: "/images/siko-mobility/cover.webp",
            image: "/icons/projets/sikoMobility_logo.svg",
            tags: ["Développeur web", "Tailwind CSS"],
            title: "Concepteur d’application chez Siko Mobility",
            year: 2025,
        },

        leftCorridor: {
            skills: {
                value: ["Fintech", "B2C-B2B", "Méthodologie"]
            }
        },

        sections: {
            context: {
                description:
                    "Siko Mobility est une startup fintech spécialisée dans le financement de véhicules. J’y ai travaillé un an en alternance, dans un contexte startup à forte autonomie, nécessitant une compréhension rapide des mécanismes de financement et des enjeux contractuels.",

                details: [
                    {
                        label: "Temps de travail",
                        value: ["02.10.2024 à 27.10.2025"],
                    },
                    {
                        label: "Collaborateurs",
                        value: [{
                            label: "Kader Bakayoko", href: "https://www.linkedin.com/in/kader-bakayoko-341b53190/?skipRedirect=true"
                        },
                        { label: "Jugurta Mahious", href: "https://www.linkedin.com/in/jugurta-mahious-0a2760237/" },
                        { label: "Thibault Andriamasionro", href: "https://www.linkedin.com/in/thibault-andriamasinoro/" },
                        { label: "Louis Leveneur", href: "https://www.linkedin.com/in/louis-leveneur-74410b1b9/" }],
                        marquee: true,
                    },
                    {
                        label: "Rôle",
                        value: ["Designer UI", "Concepteur d’application"],
                        marquee: true,
                    },
                    {
                        label: "Link",
                        value: [{ label: "www.sikomobility.com", href: "https://www.sikomobility.com/" }]
                    },
                    {
                        label: "Catégorie",
                        value: ["Fintech"],
                    },
                ],

            },
            objectifs: {
                description: "Les objectifs se sont construits progressivement au fil de l’alternance. À mon arrivée, la place du design au sein de l’équipe technique n’était pas clairement définie : les fondateurs n’étaient pas encore convaincus de la valeur d’un designer UI/UX, en partie par méconnaissance du rôle. Les interfaces existantes reposaient principalement sur des composants Tailwind, avec des éléments graphiques peu structurés et difficilement exploitables par les développeurs.\n\nMon objectif principal a donc été de poser des bases solides pour le design produit, en collaboration étroite avec le CTO. Cela a impliqué un important travail de clarification et de structuration, reprendre l’ensemble des écrans, trier et organiser les fichiers Figma, et transformer un environnement de travail proche d’un véritable « syndrome de Diogène » graphique en un espace cohérent, lisible et réutilisable.\n\nJ’ai également cherché à donner un rôle fonctionnel au design, en construisant des composants et des règles UI capables de servir de véritable béquille pour l’équipe de développement, plutôt que de simples maquettes esthétiques. Enfin, un enjeu clé a été de dépasser les limites d’un design purement utilitaire lié à Tailwind, afin d’apporter plus de personnalité, de cohérence visuelle et de lisibilité aux interfaces, tout en restant compatible avec les contraintes techniques de la startup.",
                image: [{
                    src: "/images/projects/siko-mobility/Objectifs_image_siko.png",
                    alt: "",
                }]
            },
            role:
            {
                description: "Chez Siko Mobility, mon rôle consistait à structurer et faire évoluer les parcours clés du produit dans un contexte fintech en forte croissance. J’ai travaillé sur la conception d’un nouveau parcours assurance, ainsi que sur la création et l’amélioration des dashboards marchands, en tenant compte des enjeux B2B et des besoins opérationnels des partenaires\n\nJ’ai également mené une refonte des parcours de financement, en les adaptant aux différents types d’offres proposées(paiement fractionné, crédit, LLD, LOA).Chaque parcours impliquait des contraintes spécifiques, notamment en matière d’informations utilisateurs, de documents requis et de règles contractuelles, nécessitant une conception précise et rigoureuse.\n\n En parallèle, j’ai initié et construit un Design System, avec pour objectif d’apporter une interface plus cohérente, lisible et moderne, tout en servant de véritable support pour l’équipe de développement.Ce travail visait à dépasser un design purement utilitaire pour renforcer la clarté des interfaces, la cohérence visuelle et la maintenabilité du produit.",
                image: [{
                    src: "/public/icons/projets/Siko/role_svg.svg",
                    alt: "",
                }]
            },
            demarche:
            {
                description: "En tant que designer UI et concepteur d’application, j’ai travaillé sur la conception UX, les wireframes, l’UI finale et l’évolution des parcours de financement et des dashboards, dans un contexte de forte autonomie.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            resultat:
            {
                description: "Mon année chez Siko Mobility a marqué un vrai tournant. Les débuts ont été déroutants: nouvelle ville, nouvelle startup, et un cadre où l’initiative est indispensable.Sans supervision directe, j’ai dû apprendre à prendre ma place, proposer et structurer. Progressivement, la confiance accordée par les fondateurs m’a permis d’évoluer d’un rôle exécutant à un rôle moteur: animation de points réguliers, ateliers pédagogiques avec les équipes, conception d’un dashboard marchand, refonte du parcours assurance et création d’un nouveau parcours crédit. Cette expérience m’a donné une vraie assurance dans le travail en équipe et dans une approche produit agile",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
        },

        carousel: {
            images: [
                {
                    src: "/images/projects/siko-mobility/carousel/paysage.png",
                    alt: "Dashboard Siko Mobility",
                },
                {
                    src: "/images/projects/siko-mobility/carousel/AdobeStock_282275837.png",
                    alt: "Parcours utilisateur",
                },
                {
                    src: "/images/projects/siko-mobility/carousel/Sophora-prostrata-Little-Baby.jpg",
                    alt: "Écran mobile",
                },
            ],
        },
    },
    {
        slug: "rhizome",

        hero: {
            entreprise: "Rhizome",
            cover: "/images/rhizome/cover.webp",
            image: "/icons/projets/rhizome_logo.svg",
            tags: ["UI/UX Designer"],
            title: "Rhizome, le vinted des plantes",
            year: 2025,
        },

        leftCorridor: {
            skills: {
                value: ["Product Design", "UX Research", "Design System"]
            }
        },

        sections: {
            context: {
                description:
                    "Ce projet fictif a été développé dans le cadre de mon année de licence, avec pour objectif de simuler la conception d’un produit numérique réaliste. Le travail portait sur l’analyse d’un besoin utilisateur, la définition des parcours clés et la conception d’une interface cohérente et exploitable. Le projet intégrait des contraintes proches d’un contexte professionnel, notamment en termes de clarté des parcours, de priorisation des fonctionnalités et de lisibilité de l’interface. Il m’a permis de mettre en pratique une méthodologie de conception structurée, en justifiant chaque choix par des enjeux d’usage.",

                details: [
                    {
                        label: "Temps de travail",
                        value: ["14.12.2024 à 27.08.2025"],
                    },
                    {
                        label: "Collaborateurs",
                        value: ["Ma pomme"],
                    },
                    {
                        label: "Rôle",
                        value: ["Designer UI", "Concepteur d’application"],
                        marquee: true,
                    },
                    {
                        label: "Link",
                        value: ["www.rhizome.com/lienFigma"],
                    },
                    {
                        label: "Catégorie",
                        value: ["Marketplace"],
                    },
                ],
            },

            objectifs: {
                title: "Concevoir un produit de marketplace de A à Z autour des plantes",
                description: "En structurant des parcours simples et engageants, tout en posant les bases d’un design system léger et cohérent pour garantir la scalabilité du projet.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            role:
            {
                description: "En tant que porteur du projet, j’ai assuré l’ensemble de la conception : définition du concept, recherche UX, conception des parcours, création des maquettes UI et mise en place du produit sur WordPress.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            demarche:
            {
                title: "Rhizome est né d’un constat simple",
                description: "Les plateformes de vente généralistes ne sont pas adaptées aux plantes.Elles ignorent leur saisonnalité, leur fragilité, leur entretien et la valeur affective qu’on leur accorde. En parallèle, de plus en plus de particuliers savent bouturer, multiplier et entretenir leurs plantes, sans avoir d’espace dédié pour les transmettre, les vendre ou leur offrir une seconde vie. Rhizome répond à ce manque en proposant une plateforme pensée spécifiquement pour l’échange de plantes entre particuliers.Au - delà de l’achat et de la vente, le projet valorise les circuits locaux, les savoir- faire(bouturage, rempotage, entretien) et la mise en relation entre passionnés. Inscrit dans une logique d’économie circulaire, Rhizome encourage la seconde vie des plantes, une consommation plus responsable et une approche communautaire du végétal.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            resultat:
            {
                title: "Cette V2 explore le potentiel complet de Rhizome.",
                description: "L’objectif est de dépasser la simple marketplace C2C de plantes pour construire un écosystème communautaire dédié aux passionnés de nature. Rhizome évolue vers un réseau social centré sur la culture du végétal: partage de conseils, transmission de savoir- faire et suivi des plantes dans une logique de collection.Les profils utilisateurs s’enrichissent au fil du temps, avec des badges reflétant l’expérience, l’engagement et les pratiques. La plateforme introduit également des profils référents — éco- influenceurs — sélectionnés selon des critères stricts, afin de garantir la fiabilité des conseils partagés. Enfin, un journal éditorial accueille des contenus produits par des partenaires spécialisés, prolongeant Rhizome comme un espace de référence autour des pratiques végétales.",
                image: [{
                    src: "",
                    alt: ""
                }]
            }
        },

        carousel: {
            images: [
                {
                    src: "/images/projects/rhizome/Rhiziome_slide3.webp",
                    alt: "Logo Rhizome",
                },
                {
                    src: "/images/projects/rhizome/Rhiziome_slide2.webp",
                    alt: "écran",
                },
                {
                    src: "/images/projects/rhizome/Rhiziome_slide1.webp",
                    alt: "Écran",
                },
            ],
        },
    },
    {
        slug: "kiro",

        hero: {
            entreprise: "Kiro",
            cover: "/images/kiro/cover.webp",
            image: "/icons/projets/kiro_logo.svg",
            tags: ["UI/UX Designer"],
            title: "Kiro, concevoir une expérience de suivi pour kinésithérapeutes",
            year: 2025,
        },

        leftCorridor: {
            skills: {
                value: ["Ux Strategy", "Interface B2B", "Prototypage avancé"]
            }
        },

        sections: {
            context: {
                description:
                    "Kiro est une application existante dédiée au suivi de la rééducation fonctionnelle. Ce projet a été réalisé dans le cadre d’un exercice de conception lors d’un entretien, avec pour objectif de travailler sur une problématique concrète liée aux pratiques des kinésithérapeutes. L’exercice consistait à proposer une expérience claire et adaptée aux usages terrain, en tenant compte des contraintes propres au suivi des patients, de la lisibilité des informations et de la fiabilité des parcours. Le travail s’inscrit dans une logique proche d’un cas réel, avec une attention particulière portée à la compréhension des besoins métier et à la simplicité d’usage.",

                details: [
                    {
                        label: "Temps de travail",
                        value: ["14.12.2024 à 27.08.2025"],
                    },
                    {
                        label: "Collaborateurs",
                        value: ["Ma pomme"],
                    },
                    {
                        label: "Rôle",
                        value: ["Concepteur d’application"],
                    },
                    {
                        label: "Link",
                        value: ["https://www.figma.com/design/XujzwV1i7ogDs52f51IDTG/Kiro?node-id=30-192"],
                    },
                    {
                        label: "Catégorie",
                        value: ["Marketplace"],
                    },
                ],
            },
            objectifs: {
                description: "Faciliter le suivi de la rééducation pour les kinésithérapeutes en proposant des parcours clairs permettant de visualiser les exercices, la progression des patients et les informations essentielles au suivi.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            role:
            {
                description: "Dans le cadre de cet exercice, j’ai travaillé sur la compréhension du besoin métier des kinésithérapeutes, la conception des parcours utilisateurs en particulier un dashboard où l'on retrouve la patientel, je me suis donc occupé de la réalisation des wireframes et interfaces UI, en mettant l’accent sur la clarté, la fiabilité des informations et l’adaptation aux usages professionnels.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            demarche:
            {
                description: "En tant que porteur du projet, j’ai assuré l’ensemble de la conception : définition du concept, recherche UX, conception des parcours, création des maquettes UI et mise en place du produit sur WordPress, incluant les fonctionnalités de marketplace C2C.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            resultat:
            {
                description: "En tant que porteur du projet, j’ai assuré l’ensemble de la conception : définition du concept, recherche UX, conception des parcours, création des maquettes UI et mise en place du produit sur WordPress, incluant les fonctionnalités de marketplace C2C.",
                image: [{
                    src: "",
                    alt: "",
                }]
            }
        },

        carousel: {
            images: [
                {
                    src: "/images/projects/siko/screen-1.jpg",
                    alt: "Dashboard Siko Mobility",
                },
                {
                    src: "/images/projects/siko/screen-2.jpg",
                    alt: "Parcours utilisateur",
                },
                {
                    src: "/images/projects/siko/screen-3.jpg",
                    alt: "Écran mobile",
                },
            ],
        },
    },
    {
        slug: "oneiro",

        hero: {
            entreprise: "Oneiro",
            cover: "/images/oneiro/cover.webp",
            image: "/icons/projets/Oneiro_logo.svg",
            tags: ["UI/UX Designer"],
            title: "Oneiro, application de génération d’histoires pour enfants assistée par l’IA",
            year: 2023,
        },

        leftCorridor: {
            skills: {
                value: ["Ux Narratif", "Interface éducative", "IA Générative"]
            }
        },

        sections: {
            context: {
                description:
                    "Oneiro est un projet de conception d’application visant à explorer les usages de l’IA générative dans un contexte éducatif et créatif destiné aux enfants. L’ambition du projet était de proposer une expérience ludique permettant à l’enfant de participer activement à la création d’une histoire, en choisissant le type de récit, le héros et les péripéties. L’application générait ensuite une histoire personnalisée, disponible en version écrite ou audio, accompagnée d’une illustration en noir et blanc. Le projet portait une attention particulière à la simplicité d’usage, à l’autonomie de l’enfant et à la transformation du numérique en support créatif tangible, notamment via l’export des histoires en PDF imprimable.",

                details: [
                    {
                        label: "Temps de travail",
                        value: ["23.06.2023 à 12.08.2023"],
                    },
                    {
                        label: "Collaborateurs",
                        value: ["Thibaut Colin"],
                    },
                    {
                        label: "Rôle",
                        value: ["Concepteur d’application", "Développeur full stack"],
                        marquee: true,
                    },
                    {
                        label: "Link",
                        value: ["https://www.figma.com/design/vketK7TBIhF9WOnvcLrN7z/oneiro?node-id=2003-919&t=2w9s5Pk56QOR0shY-11"],
                    },
                    {
                        label: "Catégorie",
                        value: ["Application éducative"],
                    },
                ],
            },

            objectifs: {
                description: "Concevoir une expérience créative accessible aux enfants, leur permettant de co-créer des histoires à l’aide de l’IA, tout en favorisant l’imaginaire, l’autonomie et le passage du numérique à une activité créative hors écran.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            role:
            {
                description: "J’ai conçu le projet de bout en bout : définition du concept, réflexion sur les parcours enfants, conception UX/UI, structuration des choix narratifs et design des supports générés (texte, audio et illustration), avec une attention particulière portée à la simplicité, à l’accessibilité et à l’expérience utilisateur enfant.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            demarche:
            {
                description: "En tant que porteur du projet, j’ai assuré l’ensemble de la conception : définition du concept, recherche UX, conception des parcours, création des maquettes UI et mise en place du produit sur WordPress, incluant les fonctionnalités de marketplace C2C.",
                image: [{
                    src: "",
                    alt: "",
                }]
            },
            resultat:
            {
                description: "En tant que porteur du projet, j’ai assuré l’ensemble de la conception : définition du concept, recherche UX, conception des parcours, création des maquettes UI et mise en place du produit sur WordPress, incluant les fonctionnalités de marketplace C2C.",
                image: [{
                    src: "",
                    alt: "",
                }]
            }
        },

        carousel: {
            images: [
                {
                    src: "/images/projects/siko/screen-1.jpg",
                    alt: "Dashboard Siko Mobility",
                },
                {
                    src: "/images/projects/siko/screen-2.jpg",
                    alt: "Parcours utilisateur",
                },
                {
                    src: "/images/projects/siko/screen-3.jpg",
                    alt: "Écran mobile",
                },
            ],
        },
    },
]
export type ProjectListItem = {
    slug: string;
    tags?: string[];
    title: string;
    entreprise: string;
    year: number;
    cover: string;
    skills?: string[];
};

export const projectsList: ProjectListItem[] = projects.map((project) => ({
    slug: project.slug,
    tags: project.hero.tags,
    title: project.hero.title,
    entreprise: project.hero.entreprise,
    year: project.hero.year,
    cover: project.hero.cover,
    skills: project.leftCorridor?.skills?.value,
}));