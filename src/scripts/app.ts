import { textAnimations } from "./textAnimations";
import { paralaxe } from "./paralaxe";
import { titreProjet } from "./titreProjet";
import { useProjectScrollActive } from "./useProjectScrollActive";
import { initSmoothScroll, initAnchorScroll } from "./smoothScroll";

function initApp() {

    textAnimations();
    useProjectScrollActive(".project-row");
    paralaxe();
    titreProjet();
    initSmoothScroll();
    initAnchorScroll();
}

document.addEventListener("astro:page-load", initApp);

if (document.readyState === "complete" || document.readyState === "interactive") {
    initApp();
}

document.addEventListener("astro:page-load", initApp);