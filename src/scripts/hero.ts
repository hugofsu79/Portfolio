const anime = (window as any).anime;

const GLYPHS = "0123456789@#$%&*";
const AUDIO_PATH = "/sounds/hero_song.mp3";

// Le verrou pour éviter les lancements multiples
let hasHeroRun = false;

// 1. Logique du Logo
const animateLogo = () => {
    const lines = document.querySelectorAll<SVGLineElement>(".stroke-logo-purple line");
    const paths = document.querySelectorAll<SVGPathElement>(".stroke-logo-inside path");

    const drawElement = (el: SVGGeometryElement, delay: number, duration: number) => {
        const length = el.getTotalLength();
        el.style.strokeDasharray = `${length}`;
        el.style.strokeDashoffset = `${length}`;

        requestAnimationFrame(() => {
            el.style.opacity = "1";
            el.animate(
                [{ strokeDashoffset: `${length}` }, { strokeDashoffset: "0" }],
                { duration, delay, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" }
            );
        });
    };

    lines.forEach((line, index) => drawElement(line, index * 100, 1200));
    const startPathsDelay = lines.length * 18 + 300;
    paths.forEach((path, index) => drawElement(path, startPathsDelay + index * 80, 1500));
};

// 2. Logique de l'horloge
function initClock() {
    const clockEl = document.getElementById('real-time-clock');
    if (!clockEl) return;
    const digits = clockEl.querySelectorAll('.digit');
    const update = () => {
        const now = new Date();
        const timeStr = now.getHours().toString().padStart(2, '0') + now.getMinutes().toString().padStart(2, '0');
        digits.forEach((digit, i) => {
            if (digit.textContent !== timeStr[i]) digit.textContent = timeStr[i];
        });
    };
    setInterval(update, 1000);
    update();
}

// 3. Logique de l'animation de décodage (Cipher) avec support du Gras (Bold)
function animateCipher(el: HTMLElement, delay = 0) {
    if (!el) return;

    // Force la visibilité pour que l'effet soit visible
    el.style.visibility = "visible";
    el.style.opacity = "1";

    if (!el.dataset.original) {
        el.dataset.original = el.innerHTML.trim();
    }
    const targetHTML = el.dataset.original;
    if (!targetHTML || targetHTML === "") return;

    const temp = document.createElement('div');
    temp.innerHTML = targetHTML;

    const nodes = Array.from(temp.childNodes);
    const chars: { span: HTMLElement, final: string }[] = [];

    nodes.forEach(node => {
        // Détecte correctement les balises B et STRONG
        const isBold = node.nodeType === Node.ELEMENT_NODE &&
            (node.nodeName === 'B' || node.nodeName === 'STRONG');

        const text = node.textContent || "";

        text.split("").forEach(char => {
            const span = document.createElement("span");
            span.className = "char shuffling";

            // Héritage du style gras
            if (isBold) {
                span.style.fontWeight = "800";
                span.classList.add("is-important");
            }

            span.textContent = char === " " ? "\u00A0" : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            chars.push({ span, final: char });
        });
    });

    el.innerHTML = "";
    chars.forEach((c) => el.appendChild(c.span));

    setTimeout(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            let countFixed = 0;
            chars.forEach((obj, index) => {
                if (iteration > index * 3) { // Vitesse optimisée
                    if (obj.span.classList.contains("shuffling")) {
                        obj.span.textContent = obj.final === " " ? "\u00A0" : obj.final;
                        obj.span.classList.replace("shuffling", "fixed");
                    }
                    countFixed++;
                } else if (obj.final !== " ") {
                    obj.span.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                }
            });
            if (countFixed >= chars.length) clearInterval(interval);
            iteration++;
        }, 30);
    }, delay);
}

// 4. Orchestration globale des animations
export async function startGlobalHeroAnimation() {
    if (hasHeroRun) return;

    const hero = document.querySelector(".hero") as HTMLElement;
    const layers = {
        green: document.querySelector(".layer.green") as HTMLElement,
        red: document.querySelector(".layer.red") as HTMLElement,
        blue: document.querySelector(".layer.blue") as HTMLElement,
        purple: document.querySelector(".layer.purple") as HTMLElement
    };

    if (!hero || !layers.green) return;

    // Verrouillage une fois démarré
    hasHeroRun = true;

    // Synchronisation prudente : ne duplique que si les couches existent
    const content = layers.green.innerHTML;
    if (layers.red) layers.red.innerHTML = content;
    if (layers.blue) layers.blue.innerHTML = content;
    if (layers.purple) layers.purple.innerHTML = content;

    hero.style.visibility = "visible";
    hero.style.opacity = "1";

    animateLogo();

    const tl = anime.timeline({ easing: "easeOutExpo" });

    // L'EXPLOSION RGB
    tl.add({
        targets: [layers.red, layers.blue, layers.purple].filter(Boolean),
        translateX: (el: HTMLElement) => {
            if (el.classList.contains('red')) return [-100, 0];
            if (el.classList.contains('blue')) return [100, 0];
            if (el.classList.contains('purple')) return [40, 0];
            return 0;
        },
        opacity: [
            { value: 1, duration: 100 },
            { value: 0, duration: 1200, delay: 500 }
        ],
        duration: 1800,
    }, 0);

    // Animation des liners et forçage de l'opacité
    tl.add({
        targets: ".linerDefinition",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        complete: () => {
            const defText = document.querySelector('.definitionText') as HTMLElement;
            if (defText) defText.style.opacity = "1";
        }
    }, "-=1200");

    // Lancement du Cipher après un léger délai pour s'assurer que le HTML est prêt
    setTimeout(() => {
        const elementsToAnimate = layers.green.querySelectorAll(".cipher-text");
        elementsToAnimate.forEach((text, i) => {
            animateCipher(text as HTMLElement, i * 150);
        });
    }, 600);
}

export function initHero() {
    const heroEl = document.querySelector(".hero") as HTMLElement | null;

    if (!heroEl) return;

    // Reset du verrou au montage du composant
    hasHeroRun = false;

    // On s'assure que le contenu du Hero est caché au départ si le SAS est présent
    const hasMadeChoice = sessionStorage.getItem("soundPreference");
    if (!hasMadeChoice) {
        heroEl.style.visibility = "hidden";
        heroEl.style.opacity = "0";
    }

    const runOnce = () => {
        if (hasHeroRun) return;
        // On nettoie l'écouteur au cas où
        window.removeEventListener("sas-finished", runOnce);
        startGlobalHeroAnimation();
    };

    initClock();

    // Cas 1 : Le choix du son est déjà fait (on revient sur la page ou refresh)
    if (hasMadeChoice) {
        // On attend que le DOM soit stable pour lancer le Hero
        requestAnimationFrame(() => {
            runOnce();
        });
    }
    // Cas 2 : On attend impérativement le clic sur le SAS
    else {
        // IMPORTANT : On écoute l'événement dispatché par sas.ts
        window.addEventListener("sas-finished", runOnce, { once: true });

        // Sécurité : On ne force l'affichage QUE si le SAS n'est pas trouvé sur la page
        // (évite que le hero apparaisse par dessus le SAS si l'utilisateur ne clique pas)
        setTimeout(() => {
            if (!document.getElementById("sound-sas") && !hasHeroRun) {
                runOnce();
            }
        }, 500);
    }
}