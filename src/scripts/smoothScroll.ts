import Lenis from 'lenis'

export const initSmoothScroll = () => {
    // 1. On nettoie l'ancienne instance si elle existe (sécurité Astro)
    if (window.lenis) {
        window.lenis.destroy();
    }

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
    })

    // 2. FORCER LE HAUT DE PAGE IMMEDIATEMENT
    // Le 'immediate: true' supprime l'animation de remontée, c'est instantané.
    lenis.scrollTo(0, { immediate: true });

    // 3. Désactiver la mémoire du navigateur qui entre en conflit avec Lenis
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    window.lenis = lenis;
}

declare global {
    interface Window {
        lenis: Lenis;
    }
}

export const initAnchorScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');
            if (!id || id === '#') return;

            const target = document.querySelector<HTMLElement>(id);

            if (target && window.lenis) {
                window.lenis.scrollTo(target, {
                    offset: 0,
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
                history.pushState(null, '', id);
            }
        });
    });
}