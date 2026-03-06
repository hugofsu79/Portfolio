export const paralaxe = () => {
    // On cible le conteneur qui contient TOUTES les couches RGB
    const heroLayers = document.querySelector(".hero-layers") as HTMLElement;
    const heroSection = document.querySelector(".hero") as HTMLElement;

    if (heroLayers && heroSection) {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            const sectionHeight = heroSection.offsetHeight;

            // 1. Calcul du mouvement (Parallaxe)
            // On utilise translate3d pour forcer l'accélération GPU
            const speed = 0.4;
            const yPos = scrollValue * speed;
            heroLayers.style.transform = `translate3d(0, ${yPos}px, 0)`;

            // 2. Calcul de l'opacité (Fade out au scroll)
            const fadeSpeed = 1.2;
            const opacity = 1 - (scrollValue / (sectionHeight * fadeSpeed));
            heroLayers.style.opacity = Math.max(0, opacity).toString();
        };

        // Nettoyage pour éviter les fuites de mémoire (Astro ClientRouter)
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Exécuter une fois au chargement pour positionner si on refresh en milieu de page
        handleScroll();
    }
};