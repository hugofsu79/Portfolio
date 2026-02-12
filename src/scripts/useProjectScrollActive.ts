export const useProjectScrollActive = (selector: string) => {
    const targets = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                // ON NE FAIT RIEN AU HTML ICI.
                // On ajoute juste une classe pour dire que la ligne est visible.
                entry.target.classList.add('is-visible');

                // Si tu veux juste un petit effet d'apparition fluide sans split :
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            } else if (entry.target instanceof HTMLElement) {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    targets.forEach(t => observer.observe(t));
};