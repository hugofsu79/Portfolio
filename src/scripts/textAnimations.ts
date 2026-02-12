// src/scripts/textAnimations.ts

export const textAnimations = () => {
    const targets = document.querySelectorAll<HTMLElement>('.split-texte');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                const el = entry.target;

                // 1. SPLIT : On crée les wrappers pour l'effet de masque
                const words = el.innerText.split(' ');
                el.innerHTML = words.map(word => `
    <span style="display:inline-block; overflow:hidden; vertical-align:top;">
        <span class="anim-word" style="display:inline-block; transform:translateY(110%); opacity:0;">
            ${word}
        </span>
    </span>`).join(' ');

                const spans = el.querySelectorAll('.anim-word');

                // 2. ANIMATION : On utilise l'API native (Web Animations API)
                spans.forEach((span, index) => {
                    span.animate([
                        { transform: 'translateY(110%)', opacity: 0 },
                        { transform: 'translateY(0)', opacity: 1 }
                    ], {
                        duration: 2000,
                        delay: index * 0, // Effet de cascade (stagger)
                        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                        fill: 'forwards'
                    });
                });

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1 });

    targets.forEach(t => observer.observe(t));
};