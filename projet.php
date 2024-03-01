<?php
include 'head.php';
include 'function.php';
include 'header.php';
?>

<?php
$projetId = $_GET['projetId'];
$projet = getProjetFromId($projetId);
?>

<body>
    <div class="parentEntete">
        <img class="background-projet" src="./src/png/pageProduit/<?= $projet['background'] ?>">
        <img class="logoBlanc-projet" src="./src/png/pageProduit/<?= $projet['logoBlanc'] ?>">
    </div>
    <section class="presentation-projet">
        <div>
            <h3><?= $projet['name'] ?></h3>
            <p><?= $projet['detailDescription'] ?></p>
        </div>

        <?= $projet['logoTrait'] ?>
    </section>
    <img class="miseEnSituation-projet" src="./src/png/pageProduit/<?= $projet['miseEnSituation'] ?>">
    <section class="couleur-projet">
        <div class="pantone-projet" style="background-color: <?= extractColor($projet['detailPremiereCouleur']) ?>">
            <h4>01</h4>
            <div class="pantoneZoneEnd">
                <h3><?= $projet['premiereCouleur'] ?></h3>
                <p><?= $projet['detailPremiereCouleur'] ?></p>
            </div>
        </div>
        <div class="pantoneRight">
            <div class="pantone-projet" style="background-color: <?= extractColor($projet['detailDeuxiemeCouleur']) ?>">
                <h4>02</h4>
                <h3><?= $projet['deuxiemeCouleur'] ?></h3>
                <p><?= $projet['detailDeuxiemeCouleur'] ?></p>
            </div>
            <div class="pantone-projet" style="background-color: <?= extractColor($projet['detailTroisiemeCouleur']) ?>">
                <h4>03</h4>
                <h3><?= $projet['troisiemeCouleur'] ?></h3>
                <p><?= $projet['detailTroisiemeCouleur'] ?></p>
            </div>
            <div class="pantone-projet" style="background-color: <?= extractColor($projet['detailQuatriemeCouleur']) ?>">
                <h4>04</h4>
                <h3><?= $projet['quatriemeCouleur'] ?></h3>
                <p><?= $projet['detailQuatriemeCouleur'] ?></p>
            </div>
            <div class="pantone-projet" style="background-color: <?= extractColor($projet['detailCinquiemeCouleur']) ?>">
                <h4>05</h4>
                <h3><?= $projet['cinquiemeCouleur'] ?></h3>
                <p><?= $projet['detailCinquiemeCouleur'] ?></p>
            </div>
        </div>
    </section>
    <section class="typographie-projet">
        <h3>Typographie</h3>
        <p><?= $projet['textTypo'] ?></p>



        <table border="1" class="container">
            <tr>
                <th>
                    <h3><?= $projet['nomTypo'] ?></h3>
                </th>
                <th>
                    <p>Lorem ipsum dolor sit amet,<br>
                        consectetuer adipiscing elit.</p>
                </th>
            </tr>
            <tr>
                <th>
                    <h3><?= $projet['abcTitle'] ?><br><?= $projet['nomTypo'] ?></h3>
                </th>
                <th>
                    <table>
                        <tr>
                            <th>
                                <h4>Majuscule</h4>
                            </th>
                            <th>
                                <p style="text-transform: uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <h4>Minuscule</h4>
                            </th>
                            <th>
                                <p style="text-transform: lowercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                            </th>
                        </tr>
                    </table>
                </th>
            </tr>
            <tr>
                <th>
                    <h3>Numéro Bold</h3>
                </th>
                <th>
                    <h3>0123456789</h3>
                </th>
            </tr>
        </table>

    </section>
    <section class="concept-projet">
        <h3>Concept Logo</h3>

    </section>

    <!--Script GSAP-->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/split-type"></script>
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

    <scr
    ipt id="scroll">
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
    </script>