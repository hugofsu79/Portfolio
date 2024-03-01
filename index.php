<?php
include 'function.php';
include 'head.php';
// include 'header.php';
?>

<body>
    <main>
        <section class="head">
            <h1>Hugofolio</h1>
            <div class="aboutMe">
                <div class="neuf"><img class="profilePicture" src="src/png/topPage/ali-morshedlou-WMD64tMfc4k-unsplash.png" alt=""></div>
                <div class="douze">
                    <p>Hey ! bienvenue sur mon portfolio ! Je m'appelle Hugo Foisseau, je suis un développeur web passionné par la création dans le code, où chaque ligne écrite représente une nouvelle opportunité de donner vie à des idées innovantes. Mon parcours m'a permis de développer des compétences polyvalentes en tant que développeur front-end et back-end, que j'aime combiner avec ma passion pour le graphisme et l'interface utilisateur et l'expérience utilisateur.</p>
                </div>
            </div>

        </section>
        <!-- <section class="tete">
            <div class="quatre" style="background-color:#0068C8"><img class="linkNetwork" src="src/png/topPage/linkedin.svg" alt=""></div>
            <div class="cinq"><img src="src/png/topPage/homePageGps.svg" alt=""></div>
            
            <div class="sept" style="background-color:#4EA6D7"><img class="linkNetwork" src="src/png/topPage/bandcamp.svg" alt="lien bandcamp"></div>
            <div class="huit" style="background-color:#E5843B"><img class="linkNetwork" src="src/png/topPage/souncloud.svg" alt="lien souncloud"></div>
            <div class="dix" style="background-color:#5B8D75">
                
            </div>
            <div class="onze" style="background-color:#D8ECEA">
                
            </div>
        </section> -->
        <section class="projets reveal">
            <h2>Mes projets</h2>

            <div class="mesProjets reveal">
                <?php
                $projets = getProjets();

                foreach ($projets as $projet) {

                $background_image = "url('src/png/bgProjet/" . $projet['bgPicture'] . "')";
                echo "
                <div class=\"card  reveal\" style=\"background-image: $background_image; background-size: cover; background-position: center center;\">
                <img class=\"demo\" src=\"src/png/fullPicture/" . $projet['fullPicture'] . "\" alt=\"...\">
                <p>" . $projet['description'] . "</p>
                
                <form method=\"GET\" action=\"./projet.php\">
                <input type=\"hidden\" name=\"projetId\" value=\"" . $projet['id'] . "\">
            <input type=\"submit\" class=\"btnCard\" value=\"Détails projet\">
                </form>
                </div>";
                                            };
                                            ?>


            </div>
        </section>
    </main>


    <?php
    include 'footer.php';
    ?>






    <!--Script GSAP-->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/split-type"></script>
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js"></script>
    <script src="/[YOUR_DIRECTORY]/ScrollSmoother.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js"></script>

    <script>
        gsap.registerPlugin(ScrollTrigger)

        const splitTypes = document.querySelectorAll('h1')

        splitTypes.forEach((char, i) => {

            const bg = char.dataset.bgColor

            const text = new SplitType(char, {
                types: 'chars'
            })

            gsap.from(text.chars, {
                ScrollTrigger: {
                    trigger: char,
                },
                scaleY: 0,
                y: 0,
                transformOrigin: 'top',
                stagger: 0.07,
                duration: .6
            })

        })

        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
            console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // tete
        const tl = gsap.timeline({
            defaults: {
                duration: 2,
                ease: "Expo.easeOut",
            }
        })
        tl.fromTo('.tete div', {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0

        })
        const icone = gsap.timeline({
            defaults: {
                duration: 4
            }
        })
        icone.fromTo('.sept img,.trois img,.quatre img, .huit img', {
            opacity: 0,
        }, {
            opacity: 1,
        })

        const text = document.querySelector('.douze p');
        const strText = text.textContent;
        const splitText = strText.split("");
        text.textContent = "";
        for (let i = 0; i < splitText.length; i++) {
            text.innerHTML += "<span>" + splitText[i] + "</span>";
        }

        let char = 0;
        let timer = setInterval(onTick, 50);

        function onTick() {
            const span = text.querySelectorAll('span')[char];
            span.classList.add('fade');
            char++
            if (char === splitText.length) {
                complete();
                return;
            }
        }

        function complete() {
            clearInterval(timer);
            timer = null;
        }

        //cards
        const cards = document.querySelectorAll(".card");
        cards.forEach((card, index) => {
            card.addEventListener("click", () => {
                // Get State
                const state = Flip.getState(cards);
                // Add the active class to the clicked one and add inactive to the others
                const isCardActive = card.classList.contains("active");
                cards.forEach((otherCard, otherIdx) => {
                    otherCard.classList.remove("active");
                    otherCard.classList.remove("is-inactive");
                    if (!isCardActive && index !== otherIdx) {
                        otherCard.classList.add("is-inactive");
                    }
                });
                if (!isCardActive) card.classList.add("active");

                Flip.from(state, {
                    duration: 1,
                    ease: "expo.out",
                    absolute: true,
                    onComplete: () => {
                        gsap.to('.card p', {
                            y: 500,
                        })
                    }
                })
            });
        });
    </script>
    <script type="text/javascript">
        window.addEventListener('scroll', reveal);

        function reveal() {
            var reveals = document.querySelectorAll('.reveal, .card p');

            for (var i = 0; i < reveals.length; i++) {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;
                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        }
    </script>
</body>

</html>
<!-- php -S localhost:8080 -->