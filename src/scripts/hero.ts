// On récupère AnimeJS depuis le window (chargé via le script is:inline du Hero)
const anime = (window as any).anime;

const GLYPHS = "0123456789@#$%&*";
const AUDIO_PATH = "/sounds/hero_song.mp3";

let hasHeroRun = false;

// 1. Logique du Logo
const animateLogo = () => {
    // On cible les éléments du logo dans toutes les couches pour l'effet RGB
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

// 3. Logique du Cipher
function animateCipher(el: HTMLElement, delay = 0) {
    if (!el.dataset.original) {
        el.dataset.original = el.textContent?.trim() || "";
    }
    const targetText = el.dataset.original;
    if (!targetText) return;

    el.style.visibility = "visible";
    const chars = targetText.split("").map((char) => {
        const span = document.createElement("span");
        span.className = "char shuffling";
        span.textContent = char === " " ? "\u00A0" : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        return { span, final: char };
    });

    el.textContent = "";
    chars.forEach((c) => el.appendChild(c.span));

    setTimeout(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            let countFixed = 0;
            chars.forEach((obj, index) => {
                if (iteration > index * 4) {
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

// ... (Logo, Clock, Cipher restent identiques)

export async function startGlobalHeroAnimation() {
    if (hasHeroRun) return;

    const hero = document.querySelector(".hero") as HTMLElement;
    const layers = {
        green: document.querySelector(".layer.green") as HTMLElement,
        red: document.querySelector(".layer.red") as HTMLElement,
        blue: document.querySelector(".layer.blue") as HTMLElement,
        purple: document.querySelector(".layer.purple") as HTMLElement
    };

    if (!hero || !layers.green || !layers.red || !layers.blue || !layers.purple) return;
    hasHeroRun = true;

    // 1. Synchronisation parfaite
    const content = layers.green.innerHTML;
    layers.red.innerHTML = content;
    layers.blue.innerHTML = content;
    layers.purple.innerHTML = content;

    hero.style.visibility = "visible";
    hero.style.opacity = "1";

    animateLogo();

    const tl = anime.timeline({ easing: "easeOutExpo" });

    // 2. L'EXPLOSION RGB
    tl.add({
        targets: [layers.red, layers.blue, layers.purple],
        translateX: (el: HTMLElement) => {
            if (el.classList.contains('red')) return [-100, 0];
            if (el.classList.contains('blue')) return [100, 0];
            if (el.classList.contains('purple')) return [40, 0];
            return 0;
        },
        opacity: [
            { value: 1, duration: 100 }, // Apparition flash
            { value: 0, duration: 1200, delay: 500 } // Disparition totale
        ],
        duration: 1800,
    }, 0);

    // 3. Animation des liners (sur toutes les couches pour l'effet)
    tl.add({
        targets: ".linerDefinition",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800
    }, "-=1200");

    // 4. Lancement du Cipher uniquement sur la couche Green (la seule qui reste à la fin)
    requestAnimationFrame(() => {
        layers.green.querySelectorAll(".cipher-text").forEach((text, i) => {
            animateCipher(text as HTMLElement, 400 + i * 200);
        });
    });
}

// 5. INITIALISATION SÉCURISÉE
export function initHero() {
    if (hasHeroRun) return;

    const runOnce = () => {
        if (hasHeroRun) return;
        // On retire l'écouteur immédiatement pour éviter les doubles appels
        window.removeEventListener("sas-finished", runOnce);
        startGlobalHeroAnimation();
    };

    initClock();

    // Cas 1 : Le choix du son est déjà fait (on lance direct)
    if (sessionStorage.getItem("soundPreference")) {
        runOnce();
    }
    // Cas 2 : On attend le signal du splash screen
    else {
        window.addEventListener("sas-finished", runOnce, { once: true });
    }

    // Sécurité anti-blocage : si rien ne se passe après 3s, on force l'affichage
    setTimeout(() => {
        if (!hasHeroRun) runOnce();
    }, 3000);
}