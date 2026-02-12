// 1. On ajoute 'export' pour que app.ts puisse le voir
export const titreProjet = () => {
    // 2. On précise que ce sont des HTMLElement pour éviter l'erreur "Property 'classList' does not exist"
    const heroTitle = document.querySelector("#hero-title") as HTMLElement;
    const stickyTitle = document.querySelector("#sticky-title") as HTMLElement;

    // Sécurité : on vérifie que les deux existent sur la page actuelle
    if (heroTitle && stickyTitle) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        stickyTitle.classList.add("is-visible");
                    } else {
                        stickyTitle.classList.remove("is-visible");
                    }
                });
            },
            {
                threshold: 0,
            },
        );

        observer.observe(heroTitle);
    }
};