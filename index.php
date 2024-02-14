<?php
include 'function.php';
include 'head.php';
include 'header.php';
?>

<body>
    <main>
        <h1>Hugo Foisseau</h1>
        <h2>Développeur Full stack</h2>
        <p class="presentation">Bonjour, je m'appelle Hugo. Passionné par la création de sites web, j'ai débuté ma carrière dans le <mark>graphisme</mark> et <mark>l'UI/UX</mark>, avant de continuer à développer mes compétences dans le <mark>développement web</mark>. Cette trajectoire m'a permis de forger un profil véritablement <mark>polyvalent</mark>.
            Ma priorité est de répondre précisément à vos besoins, tout en enrichissant l'expérience utilisateur. Je m'engage à <mark>créer</mark> des solutions <mark>innovantes</mark> et <mark>captivantes</mark>, toujours conçues pour <mark>marquer les esprits</mark> et répondre efficacement aux défis posés.
        </p>

       

        <div class="home_content">
            <section class="home_projects">
                <h3 class="chapitre">Mes projets</h3>
                <div class="projets_content">
                    <?php
                    $projets = getProjetsHomePage();
                    foreach ($projets as $projet) {
                        echo "
            <div class=\"projetsDetail\">
            <div class=\"textTag\">
            <h3 class=\"nameTag\">" . $projet['name'] . "</h3>
            <p class=\"languageTag\">" . $projet['language'] . "</p>
            <p class=\"descriptionTag\">" . $projet['description'] . "</p></div>
                <img class=\"detailPng\" src=\"src/png/detailpng" . $projet['fullPicture'] . "\" alt=\"...\">
                
            </div>";
                    }
                    ?>
                </div>
            </section>
        </div>
    </main>
    <!--Script GSAP-->
</body>

<?php
include 'footer.php';
?>

<!-- php -S localhost:8080 -->

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>