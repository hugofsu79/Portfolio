export const paralaxe = (anime?: any) => {

    const image = document.querySelector(".project-hero img") as HTMLElement;
    const header = document.querySelector(".project-hero") as HTMLElement;

    if (image && header) {

        // On définit la fonction de scroll
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            const headerHeight = header.offsetHeight;

            // Calcul du parallaxe
            const speed = 0.4;
            image.style.transform = `translateY(${scrollValue * speed}px)`;

            // Calcul de l'opacité
            const opacity = 1 - scrollValue / (headerHeight * 1.2);
            image.style.opacity = Math.max(0, opacity).toString();
        };

        // On nettoie l'éventuel ancien écouteur (important avec Astro et ClientRouter)
        window.removeEventListener("scroll", handleScroll);

        window.addEventListener("scroll", handleScroll, { passive: true });

    }
};