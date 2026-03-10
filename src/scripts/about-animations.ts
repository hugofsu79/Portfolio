import { animate, stagger } from "animejs";

export const initAboutAnimations = () => {
    const textElements = document.querySelectorAll(".split-texte");
    if (textElements.length > 0) {
        animate(textElements, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            easing: "outExpo",
            delay: stagger(150),
            complete: () => {
                textElements.forEach((el) =>
                    el.classList.add("is-visible"),
                );
            },
        });
    }

    // 2. Animation EQUILIBRE
    const deltaX = 11.063;
    animate(".circle-left", {
        translateX: [0, deltaX, 0],
        duration: 2100,
        easing: "inOutExpo",
        loop: true,
    });
    animate(".circle-right", {
        translateX: [0, -deltaX, 0],
        duration: 2100,
        easing: "inOutExpo",
        loop: true,
    });

    // 4. Animation APPROCHE (Strokes)
    const strokes = document.querySelectorAll<SVGGeometryElement>(
        ".stroke-circle-approche",
    );
    strokes.forEach((el) => {
        const length = el.getTotalLength();
        el.style.strokeDasharray = `${length}`;
        el.style.strokeDashoffset = `${length}`;
        animate(el, {
            strokeDashoffset: 0,
            duration: 4000,
            easing: "inOutExpo",
            direction: "alternate",
            loop: true,
        });
    });
};

// Initialisation Astro
document.addEventListener("astro:page-load", initAboutAnimations);

// Sécurité Changement de Langue
window.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
        target.closest(".language-toggle") ||
        target.closest("[data-lang]")
    ) {
        setTimeout(() => {
            document.querySelectorAll(".split-texte").forEach((el) => {
                el.classList.add("is-visible");
                (el as HTMLElement).style.opacity = "1";
            });
        }, 100);
    }
});