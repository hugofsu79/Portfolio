import { langStore } from '../stores/langStore';
import { heroContent } from '../data/hero';
import { navLabels } from "../data/navigation";
import { projects } from "../data/projects";
import { aboutData } from '../data/textesAbout';
import { laboData } from '../data/sectionLabo';

/**
 * Initialise l'écouteur de changement de langue et met à jour le DOM
 */
export function initI18n() {
    langStore.subscribe((lang: 'fr' | 'en') => {

        const flattenedContent: Record<string, string> = {};

        aboutData.forEach(item => {
            flattenedContent[`${item.id}_titre`] = item[lang].titre;
            flattenedContent[`${item.id}_texte`] = item[lang].texte;
        });

        laboData.forEach(item => {
            const content = item[lang];
            if (content.underTitle) flattenedContent[`${item.id}_underTitle`] = content.underTitle;
            if (content.sectionTitle) flattenedContent[`${item.id}_sectionTitle`] = content.sectionTitle;
            if (content.underSection) flattenedContent[`${item.id}_underSection`] = content.underSection;
        });

        const { context, ...restOfHero } = heroContent[lang];

        const staticContent: Record<string, string> = {
            ...restOfHero,
            ...context,
            ...flattenedContent,
            ...navLabels[lang]
        };

        const staticElements = document.querySelectorAll('[data-i18n-key]');
        staticElements.forEach((el) => {
            const key = el.getAttribute('data-i18n-key');
            if (key && staticContent[key]) {
                el.classList.add('lang-changing');
                setTimeout(() => {
                    (el as HTMLElement).textContent = staticContent[key];
                    el.classList.remove('lang-changing');
                }, 300);
            }
        });

        const projectTitleEl = document.querySelector('[data-project-slug]');
        if (projectTitleEl) {
            const slug = projectTitleEl.getAttribute('data-project-slug');
            const project = projects.find(p => p.slug === slug);

            if (project) {
                const projectElements = document.querySelectorAll('[data-i18n-project]');
                projectElements.forEach((el) => {
                    const part = el.getAttribute('data-i18n-project');
                    if (!part) return;

                    let newValue = "";
                    const content = project.content[lang];

                    switch (part) {
                        case 'title': newValue = content.title; break;
                        case 'context_description': newValue = content.context.description; break;
                        case 'objectifs_title': newValue = content.objectifs?.title || "Objectifs"; break;
                        case 'objectifs_description': newValue = content.objectifs?.description || ""; break;
                        case 'role_title': newValue = content.role?.title || "Mon rôle"; break;
                        case 'role_description': newValue = content.role?.description || ""; break;
                        case 'demarche_title': newValue = content.demarche?.title || ""; break;
                        case 'demarche_description': newValue = content.demarche?.description || ""; break;
                        case 'resultat_title': newValue = content.resultat?.title || ""; break;
                        case 'resultat_description': newValue = content.resultat?.description || ""; break;
                    }

                    if (newValue) {
                        el.classList.add('lang-changing');
                        setTimeout(() => {
                            (el as HTMLElement).textContent = newValue;
                            el.classList.remove('lang-changing');
                        }, 300);
                    }
                });
            }
        }
    });
}