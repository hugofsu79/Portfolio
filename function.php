<?php



function getProjetsHomePage()
{
    return [

        //premier projet
        [
            'name' => 'kahwas',
            'id' => 1,
            'description' => 'Dans ce projet fictif, j\'ai créé un site e-commerce pour la revente de machines à café, avec un design responsive et des fonctionnalités de paiement sécurisé.',
            'detailDescription' => 'Le projet a abouti à la création d\'une plateforme de e-commerce élégante et efficace, offrant aux utilisateurs une expérience d\'achat intuitive et engageante. Bien que ce projet soit fictif, il démontre mes compétences en développement web et ma capacité à créer des solutions numériques complètes pour des besoins commerciaux spécifiques.',
            'logo' => '',
            'fullPicture' => 'marzocco.png',
            'language' => '',
        ],
        
        //deuxième projet
        [
            'name' => '',
            'id' => 2,
            'description' => 'Pour la pizzeria \'Bombino\', j\'ai conçu un site web élégant qui offre non seulement un aperçu du menu, mais intègre aussi un système de commande en ligne et de click and collect. Cette solution digitale améliore l\'expérience client et accroît la visibilité et les ventes du restaurant, tout en mettant en valeur la qualité et la variété de leurs pizzas.',
            'detailDescription' => 'La pizzeria \'Bombino\', renommée pour ses pizzas authentiques, utilise des ingrédients frais pour offrir une expérience culinaire inoubliable. Face à la demande croissante, j\'ai développé un site web moderne et fonctionnel pour Bombino. Ce site ne se limite pas à présenter le menu alléchant du restaurant, mais intègre aussi un système innovant de click and collect. Cette fonctionnalité permet aux clients de commander facilement leurs pizzas favorites et de sélectionner un créneau pour récupérer leur commande, optimisant ainsi l\'expérience client. Le site, construit avec [technologies utilisées], a non seulement amélioré la visibilité en ligne de Bombino, mais a également boosté les ventes grâce à une interface utilisateur intuitive. Des captures d\'écran du site sont disponibles pour illustrer ces améliorations. Ce projet a été un défi passionnant, notamment en termes d\'intégration du système de commande en ligne, que j\'ai résolu en [solution spécifique].',
            'logo' => '',
            'fullPicture' => 'bombino.png',
            'language' => '',
        ],
        //Troisème projet
        [
            'name' => '',
            'id' => 3,
            'description' => 'Pour Kahwas Shop, j\'ai développé un site e-commerce élégant, mettant en avant leurs machines à café haut de gamme et offrant une expérience utilisateur intuitive avec des sections pour promotions et produits populaires. Ce projet a harmonieusement combiné design et fonctionnalité, augmentant l\'engagement client et la visibilité du produit.',
            'detailDescription' => 'Dans mon récent projet pour Kahwas Shop, j\'ai conçu un site web e-commerce pour promouvoir leur gamme de machines à café haut de gamme. Mon rôle était de créer une expérience utilisateur attrayante et fluide. J\'ai intégré un carrousel d\'images pour mettre en avant les produits phares et développé une section de promotions pour présenter les offres spéciales avec des options interactives d\'achat. J\'ai également ajouté une section pour les produits les mieux notés, facilitant le choix des clients. Ce projet a été l\'occasion de mettre en pratique mes compétences en design et en développement web, en créant un site qui non seulement valorise les produits de Kahwas Shop mais offre aussi une expérience d\'achat en ligne agréable et intuitive.',
            'logo' => '',
            'fullPicture' => 'rhizome.png',
            'language' => '',
        ],
        //Quatrième projet
        [
            'name' => 'Kinema',
            'id' => 4,
            'description' => 'Dans ce projet fictif, j\'ai créé un site e-commerce pour la revente de machines à café, avec un design responsive et des fonctionnalités de paiement sécurisé.',
            'detailDescription' => 'Le projet a abouti à la création d\'une plateforme de e-commerce élégante et efficace, offrant aux utilisateurs une expérience d\'achat intuitive et engageante. Bien que ce projet soit fictif, il démontre mes compétences en développement web et ma capacité à créer des solutions numériques complètes pour des besoins commerciaux spécifiques.',
            'logo' => '',
            'fullPicture' => 'mockup_kinema_site.png',
            'language' => '',
        ],
    ];
}

function languages() {
    return [
        [
            'name' => 'Python',
            'id' => '1',
        ],
        [
            'name' => 'PHP',
            'id' => '2',
        ],
        [
            'name' => 'Ruby',
            'id' => '3',
        ],
        [
            'name' => 'Shell',
            'id' => '4',
        ],
        [
            'name' => 'C',
            'id' => '5',
        ],
        [
            'name' => 'C#',
            'id' => '6',
        ],
        [
            'name' => 'JavaScript',
            'id' => '7',
        ],
        [
            'name' => 'TypeScript',
            'id' => '8',
        ],
    ];
}

function getProjetId($id)
{
    $projets = getProjets();

    foreach ($projets as $projet) {
        if ($projet['id'] == $id) {
            
            return $projet;
        }
    }
}
