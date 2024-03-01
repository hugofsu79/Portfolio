<?php



function getProjets()
{
    return [

        //premier projet
        [
            'name' => 'Kahwas',
            'id' => 1,
            'description' => 'Dans ce projet fictif, j\'ai créé un site e-commerce pour la revente de machines à café, avec un design responsive et des fonctionnalités de paiement sécurisé.',
            'detailDescription' => 'Le projet a abouti à la création d\'une plateforme de e-commerce élégante et efficace, offrant aux utilisateurs une expérience d\'achat intuitive et engageante. Bien que ce projet soit fictif, il démontre mes compétences en développement web et ma capacité à créer des solutions numériques complètes pour des besoins commerciaux spécifiques.',
            'logo' => '',
            'fullPicture' => 'kahwasLogo.svg',
            'bgPicture' => 'marzocco.png',
            'language' => 'laravelPastille.png',



            'background' => 'backgroundKahwas.png',
            'logoBlanc' => 'logoBlancKahwas.svg',
            'logoTrait' => '<?xml version="1.0" encoding="UTF-8"?>
            <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.57 584.81">
            <defs>
                <style>
                .cls-1 {
                
                fill: none;
                    stroke: #051618;
                    stroke-miterlimit: 10;
                }
                </style>
            </defs>
            <g>
                <path id="path" class="cls-1" d="M186.64,197.77c0,11.23,10.39,9.96,10.39,18.67,0,4.63-4.35,7.3-8.84,7.3-5.19,0-11.23-.42-16.56-.42s-11.79.42-17.12.42c-4.21,0-8.7-2.67-8.7-7.3,0-8.7,10.39-7.44,10.39-18.67v-41.27c0-11.51-9.55-9.12-9.55-16.98,0-6.03,5.19-7.58,10.39-7.58,2.67,0,8.7.7,14.6.7,5.33,0,10.81-.7,13.61-.7,5.05,0,9.4,1.54,9.4,7.58,0,6.6-8,5.61-8,17.69,0,2.81,1.26,4.21,3.65,4.21,3.93,0,12.77-8.84,12.77-13.75,0-3.23-2.39-3.37-2.39-8,0-6.6,4.07-7.72,10.39-7.72,3.93,0,7.86.7,12.07.7,3.09,0,6.74-.7,10.39-.7,5.61,0,10.67,1.54,10.67,7.72,0,10.95-12.49,8.28-16.42,11.79-4.07,3.65-7.58,14.6-16.7,18.67,9.4,3.23,18.25,10.67,22.74,21.05,2.11,4.77,3.51,11.93,7.44,16,2.95,3.09,8.56,2.81,8.56,8.84,0,7.44-10.95,7.86-16.98,7.86-13.9,0-20.91-3.79-24.99-10.53-6.88-11.51-5.47-26.95-15.72-26.95-3.37,0-5.47,3.23-5.47,6.6v4.77Z"/>
                <path id="path"  class="cls-1" d="M329.66,197.77c0,11.23,10.25,9.96,10.25,18.67,0,6.32-9.68,7.44-16,7.44-18.39,0-16.98-8.84-21.61-8.84-5.9,0-9.26,8.84-30.46,8.84-15.72,0-25.26-11.09-25.26-26.95,0-22.74,18.11-27.37,39.44-28.49,6.88-.28,11.09-2.39,11.09-9.97,0-5.9-2.53-11.79-9.4-11.79-12.91,0-14.74,20.07-26.53,20.07-8.42,0-9.68-5.61-9.68-12.91,0-19.23,24.84-23.02,41.69-23.02,30.18,0,36.49,14.46,36.49,41.13v25.83ZM297.8,191.74c0-6.88-2.25-10.67-7.58-10.67s-9.41,3.93-9.41,10.67,3.79,12.91,9.41,12.91,7.58-5.76,7.58-12.91Z"/>
                <path id="path" class="cls-1" d="M201.21,290.28c0-6.08-2.81-6.36-7.86-6.36s-8.7.28-8.7,5.99v3.09c0,7.58,5.99,6.64,5.99,12.45,0,3.09-2.43,4.87-5.33,4.87-3.46,0-6.83-.28-10.39-.28s-7.86.28-11.42.28c-2.81,0-5.8-1.78-5.8-4.87,0-5.8,6.93-4.87,6.93-12.45v-27.52c0-7.67-6.36-6.08-6.36-11.32,0-4.02,3.46-5.05,6.93-5.05,1.78,0,5.8.47,9.73.47,3.56,0,7.21-.47,9.08-.47,3.37,0,6.27,1.03,6.27,5.05,0,5.24-5.62,3.65-5.62,11.32v1.4c0,5.43,3.56,5.52,8.7,5.52s7.86-.09,7.86-5.05v-1.87c0-7.67-5.52-6.08-5.52-11.32,0-4.02,2.71-5.05,6.08-5.05,1.87,0,5.52.47,9.55.47,3.37,0,7.49-.47,9.45-.47,3.28,0,6.93,1.03,6.93,5.05,0,5.24-6.55,3.65-6.55,11.32v27.52c0,7.58,6.93,6.64,6.93,12.45,0,3.09-2.9,4.87-5.71,4.87-3.56,0-7.68-.28-11.04-.28-3.65,0-7.3.28-10.76.28-2.81,0-5.43-1.78-5.43-4.87,0-5.8,6.08-4.87,6.08-12.45v-2.71Z"/>
                <path id="path"  class="cls-1" d="M281.79,286.26c-.56-1.5-1.4-2.25-2.34-2.25-1.03,0-2.06.75-2.71,2.15l-9.45,19.75c-1.4,3-4.49,5.33-7.21,5.33-3.93,0-6.74-2.15-7.96-5.33l-15.35-40.53c-2.25-5.62-7.11-6.36-7.11-10.3,0-5.15,3.09-6.08,7.02-6.08,2.9,0,7.11.56,9.92.56,1.97,0,5.62-.47,8.24-.47,4.02,0,7.49,1.03,7.49,6.08,0,3.56-3,3.84-3,6.27,0,3.74,4.96,16,7.68,16,1.78,0,5.9-7.58,5.9-11.89,0-6.93-3.74-5.99-3.74-11.33,0-3.74,2.62-5.24,5.71-5.24s4.31.47,6.93.47c2.25,0,4.31-.37,6.93-.37,3.46,0,7.11,1.4,7.11,6.08,0,3.56-2.9,3.84-2.9,6.27,0,3.74,4.77,16,7.58,16s7.39-12.35,7.39-16c0-2.71-2.9-2.71-2.9-6.27,0-5.05,3.65-6.08,6.64-6.08,1.69,0,2.81.37,5.05.37,1.97,0,2.71-.37,4.96-.37,3.28,0,6.36,1.12,6.36,6.08,0,4.59-6.93,4.59-9.08,10.2l-15.44,40.53c-1.22,3.18-3.74,5.33-6.55,5.33-3.93,0-5.99-2.06-7.3-5.33l-7.86-19.66Z"/>
                <path id="path" class="cls-1" d="M239.77,403.75c0,11.23,10.25,9.96,10.25,18.67,0,6.32-9.68,7.44-16,7.44-18.39,0-16.98-8.84-21.61-8.84-5.9,0-9.26,8.84-30.46,8.84-15.72,0-25.26-11.09-25.26-26.95,0-22.74,18.11-27.37,39.44-28.49,6.88-.28,11.09-2.39,11.09-9.97,0-5.9-2.53-11.79-9.4-11.79-12.91,0-14.74,20.07-26.53,20.07-8.42,0-9.68-5.61-9.68-12.91,0-19.23,24.84-23.02,41.69-23.02,30.18,0,36.49,14.46,36.49,41.13v25.83ZM207.91,397.71c0-6.88-2.25-10.67-7.58-10.67s-9.41,3.93-9.41,10.67,3.79,12.91,9.41,12.91,7.58-5.76,7.58-12.91Z"/>
                <path id="path" class="cls-1" d="M289.45,430.28c-22.04,0-41.41-5.05-41.41-28.77,0-4.07,2.11-8.14,7.02-8.14,5.33,0,10.95,10.67,14.6,13.33,4.91,3.65,11.37,5.05,15.86,5.05,5.19,0,7.16-2.39,7.16-4.91,0-11.09-43.51-9.26-43.51-42.39,0-16.14,15.44-28.07,39.16-28.07,18.81,0,36.78,3.09,36.78,20.77,0,5.19-2.95,9.54-8.28,9.54-10.39,0-12.77-12.07-25.55-12.07-3.65,0-6.74,1.4-6.74,4.07,0,8.14,17.97,7.44,33.69,17.26,7.58,4.77,10.81,10.39,10.81,18.25,0,21.76-19.51,36.07-39.58,36.07Z"/>
            </g>
            <path id="path" class="cls-1" d="M247.79.5C111.43.5.5,131.45.5,292.41s110.93,291.91,247.29,291.91,247.29-130.95,247.29-291.91S384.14.5,247.79.5ZM319.56,543.8c-10.79,4.46-21.57-6.44-17.04-17.2l.12-.28c6.93-16.5,11.86-33.78,14.67-51.37.97-6.09-2.4-12.28-8.18-14.43-7.98-2.97-16.28,2.16-17.54,10.15-2.47,15.6-6.84,30.92-12.98,45.55-5.78,13.75-16.55,42.02-30.82,42.02-121.97,0-221.21-119.25-221.21-265.83,0-101.87,47.94-190.52,118.13-235.12,10.99-6.98,24.5,4.32,19.61,16.38-4.62,11.37-8.66,23.48-9.63,32.79-.74,7.14,4.28,13.93,11.42,14.75.51.06,1.02.09,1.52.09,6.61,0,12.27-5,12.96-11.72,1.99-19.48,9.23-38.71,20.4-54.17,5.31-7.35,11.36-13.72,18.08-19.06,8.1-6.44,18.24-9.76,28.58-9.76h.15c121.97,0,221.21,119.25,221.21,265.83,0,116.39-62.59,215.5-149.43,251.39Z"/>
            </svg>',
            'miseEnSituation' => 'miseEnSituationKahwas.png',

            'premiereCouleur' => 'Crème Anglaise',
            'detailPremiereCouleur' => '#fef7e5 <br> RGB 254 247229',

            'deuxiemeCouleur' => 'Jaune d’oeuf',
            'detailDeuxiemeCouleur' => '#eeb236 <br> RGB 238 178 54',

            'troisiemeCouleur' => 'Meringue',
            'detailTroisiemeCouleur'=>'#f6f5ed <br> RGB 246 245 237',

            'quatriemeCouleur' => 'Chocolat',
            'detailQuatriemeCouleur'=>'#3f3028 <br> RGB 63 48 40',

            'cinquiemeCouleur' => 'terre cuite',
            'detailCinquiemeCouleur'=>'#a34a26 <br> RGB 163 74 38',
            
            'textTypo' => 'La typographie "Cooper" est choisie pour une boutique en ligne de machines à café pour son style rétro évocateur,
            son lien avec l\'histoire du café, sa lisibilité et son caractère distinctif, offrant ainsi une identité mémorable et une
            différenciation visuelle dans un marché concurrentiel.',
            
            'nomTypo' => 'Cooper Std Black',
            'abcTitle' => 'Abécédaire',
            // 'numero' => 0123456789,
        ],

        //deuxième projet
        [
            'name' => 'Bombino',
            'id' => 2,
            'description' => 'Pour la pizzeria \'Bombino\', j\'ai conçu un site web non seulement un aperçu du menu, mais intègre aussi un système de commande en ligne et de click and collect. Cette solution digitale améliore l\'expérience client et accroît la visibilité et les ventes du restaurant, tout en mettant en valeur la qualité et la variété de leurs pizzas.',
            'detailDescription' => 'La pizzeria \'Bombino\', renommée pour ses pizzas authentiques, utilise des ingrédients frais pour offrir une expérience culinaire inoubliable. Face à la demande croissante, j\'ai développé un site web moderne et fonctionnel pour Bombino. Ce site ne se limite pas à présenter le menu alléchant du restaurant, mais intègre aussi un système innovant de click and collect. Cette fonctionnalité permet aux clients de commander facilement leurs pizzas favorites et de sélectionner un créneau pour récupérer leur commande, optimisant ainsi l\'expérience client. Le site, construit avec [technologies utilisées], a non seulement amélioré la visibilité en ligne de Bombino, mais a également boosté les ventes grâce à une interface utilisateur intuitive. Des captures d\'écran du site sont disponibles pour illustrer ces améliorations. Ce projet a été un défi passionnant, notamment en termes d\'intégration du système de commande en ligne, que j\'ai résolu en [solution spécifique].',
            'logo' => '',
            'fullPicture' => 'bombinoLogo.svg',
            'bgPicture' => 'bombino.png',
            'language' => 'Php javascript',
        ],
        //Troisème projet
        [
            'name' => 'Rhizome',
            'id' => 3,
            'description' => 'Pour Kahwas Shop, j\'ai développé un site e-commerce élégant, mettant en avant leurs machines à café haut de gamme et offrant une expérience utilisateur intuitive avec des sections pour promotions et produits populaires. Ce projet a harmonieusement combiné design et fonctionnalité, augmentant l\'engagement client et la visibilité du produit.',
            'detailDescription' => 'Dans mon récent projet pour Kahwas Shop, j\'ai conçu un site web e-commerce pour promouvoir leur gamme de machines à café haut de gamme. Mon rôle était de créer une expérience utilisateur attrayante et fluide. J\'ai intégré un carrousel d\'images pour mettre en avant les produits phares et développé une section de promotions pour présenter les offres spéciales avec des options interactives d\'achat. J\'ai également ajouté une section pour les produits les mieux notés, facilitant le choix des clients. Ce projet a été l\'occasion de mettre en pratique mes compétences en design et en développement web, en créant un site qui non seulement valorise les produits de Kahwas Shop mais offre aussi une expérience d\'achat en ligne agréable et intuitive.',
            'logo' => '',
            'fullPicture' => 'RhizomeLogo.svg',
            'bgPicture' => 'rhizome.png',
            'language' => '',
        ],
        //Quatrième projet
        [
            'name' => 'Kinema',
            'id' => 4,
            'description' => 'J\'ai créé un site web fictif qui utilise une source de données externe pour afficher des informations sur les films. Le site récupère automatiquement des détails tels que les titres et les images des films à partir d\'une API, offrant ainsi aux utilisateurs une expérience conviviale pour explorer différents films.',
            'detailDescription' => 'Imaginez un site web où vous pouvez découvrir facilement des informations sur une multitude de films. J\'ai conçu un tel site fictif qui tire parti d\'une API pour récupérer les données relatives aux films, comme les titres, les images, et autres détails pertinents. Cette approche permet aux visiteurs du site de naviguer sans effort à travers une vaste sélection de films, sans que je doive entrer manuellement chaque détail. C\'est une façon efficace et dynamique d\'explorer le monde du cinéma en ligne',
            'logo' => '',
            'fullPicture' => 'kinemaLogo.svg',
            'bgPicture' => 'mockup_kinema_site.png',
            'language' => 'Vue.JS JavaScript',
        ],
    ];
}

function randImg($dir)
{

    $images = glob($dir . '*.{jpg,jpeg,png,gif,svg}', GLOB_BRACE);
    $randomImage = $images[array_rand($images)];
    return $randomImage;
}

$the_image = randImg('src/png/fullPicture/');

function getProjetFromId($id)
{

    $projets = getProjets();

    foreach ($projets as $projet) {
        if ($projet['id'] == $id) {
            // Le renvoyer avec return
            return $projet;
        }
    }
}


function extractColor($colorString) {
    $parts = explode(" ", $colorString);
    $colorHex = trim($parts[0]);
    
    return $colorHex; //hexadécimal de la couleur
}
