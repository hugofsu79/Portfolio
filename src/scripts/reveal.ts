export function reveal() {
    const titles = document.querySelectorAll('.reveal-title');
    const blurElement = document.getElementById('blur-element');

    if (!titles.length || !blurElement) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;

                animateBlur(8, 0.1, 3200);

                target.classList.add('is-focused');

                setTimeout(() => {
                    target.classList.add('done');
                }, 1600);

                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    });

    titles.forEach(title => observer.observe(title));
}

function animateBlur(start: number, end: number, duration: number) {
    const blurNode = document.getElementById('blur-element');

    // Type Guard pour TypeScript : on vérifie que c'est bien l'élément SVG attendu
    if (!(blurNode instanceof SVGFEGaussianBlurElement)) {
        return;
    }

    // On capture la référence dans une constante pour que TS soit sûr qu'elle ne devienne pas null
    const element = blurNode;
    let startTime: number | null = null;

    function step(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing Out-Expo : l'effet "pop" organique (rapide au début, lent à la fin)
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        const currentValue = start + (end - start) * easeOutExpo;

        // Mise à jour de l'attribut SVG
        element.setAttribute('stdDeviation', currentValue.toString());

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}