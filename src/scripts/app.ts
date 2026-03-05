import { textAnimations } from "./textAnimations";
import { paralaxe } from "./paralaxe";
import { titreProjet } from "./titreProjet";
import { useProjectScrollActive } from "./useProjectScrollActive";
import { initSmoothScroll, initAnchorScroll } from "./smoothScroll";
import { reveal } from "./reveal";

function initApp() {
    initSmoothScroll();
    initAnchorScroll();

    window.scrollTo(0, 0);

    textAnimations();
    useProjectScrollActive(".project-row");
    paralaxe();
    titreProjet();
    reveal();
}

document.addEventListener("astro:after-swap", () => {
    window.scrollTo(0, 0);
});

document.addEventListener("astro:page-load", initApp);

if (document.readyState === "complete" || document.readyState === "interactive") {
    initApp();
}