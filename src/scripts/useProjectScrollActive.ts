export const useProjectScrollActive = (selector: string) => {
    const targets = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                entry.target.classList.add('is-visible');

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