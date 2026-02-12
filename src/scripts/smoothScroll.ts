import Lenis from 'lenis'

export const initSmoothScroll = () => {
    // RÉGLAGES FACILES À MODIFIER
    const lenis = new Lenis({
        duration: 1.2,       // Vitesse du scroll (plus élevé = plus lent)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fonction de lissage
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,  // Sensibilité de la souris
        touchMultiplier: 2,  // Sensibilité au tactile
        infinite: false,
    })

    // Synchronisation avec l'animation de l'interface
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Optionnel : Exposer lenis globalement pour pouvoir l'appeler ailleurs
    // (ex: arrêter le scroll pendant un menu ouvert)
    window.lenis = lenis;
}

// Pour TypeScript, on déclare la propriété globale
declare global {
    interface Window {
        lenis: Lenis;
    }
}


// breadcrumb / Navbar chemin
export const initAnchorScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');
            if (!id || id === '#') return;

            // On précise que l'on cherche un HTMLElement
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