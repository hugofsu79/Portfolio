import { langStore } from '../stores/langStore';
import { heroContent } from '../data/hero';
import { navLabels } from "../data/navigation";
import { projects } from "../data/projects";
import { aboutData } from '../data/textesAbout';
import { laboData } from '../data/sectionLabo';

function getDeepValue(obj: any, path: string): string | null {
    const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
    return typeof value === 'string' ? value : null;
}

function flattenObject(obj: any, prefix = ''): Record<string, string> {
    let items: Record<string, string> = {};
    for (const key in obj) {
        const newKey = prefix ? `${prefix}_${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            Object.assign(items, flattenObject(obj[key], newKey));
        } else if (typeof obj[key] === 'string') {
            items[newKey] = obj[key];
        }
    }
    return items;
}

export function initI18n() {
    langStore.subscribe((lang: 'fr' | 'en') => {
        const otherLang = lang === 'fr' ? 'en' : 'fr';

        // 1. Préparation du dictionnaire pour les éléments statiques
        const flattenedContent: Record<string, string> = {
            ...navLabels[lang],
            ...flattenObject(heroContent[lang])
        };

        // Ajout des données "About"
        aboutData.forEach(item => {
            flattenedContent[`${item.id}_titre`] = item[lang].titre;
            flattenedContent[`${item.id}_texte`] = item[lang].texte;
        });

        // Ajout des données "Labo"
        laboData.forEach(item => {
            const content = item[lang];
            if (content.underTitle) flattenedContent[`${item.id}_underTitle`] = content.underTitle;
            if (content.sectionTitle) flattenedContent[`${item.id}_sectionTitle`] = content.sectionTitle;
            if (content.underSection) flattenedContent[`${item.id}_underSection`] = content.underSection;
        });

        // --- AJOUT POUR LA LISTE DES PROJETS (ProjectRow) ---
        projects.forEach(project => {
            const content = project.content[lang];
            flattenedContent[`${project.slug}_title`] = content.title;
            // Si tu as besoin de traduire les skills un jour ici :
            // flattenedContent[`${project.slug}_skills`] = content.skills.join(', ');
        });

        // Mise à jour des éléments avec data-i18n-key (Hero, Nav, Labo, ET Liste Projets)
        const staticElements = document.querySelectorAll('[data-i18n-key]');
        staticElements.forEach((el) => {
            const key = el.getAttribute('data-i18n-key');
            if (key && flattenedContent[key]) {
                el.classList.add('lang-changing');
                setTimeout(() => {
                    (el as HTMLElement).textContent = flattenedContent[key];
                    // Optionnel : mettre à jour le data-ghost pour la liste des projets aussi
                    const otherContent = projects.find(p => `${p.slug}_title` === key)?.content[otherLang].title;
                    if (otherContent) el.setAttribute('data-ghost', otherContent);

                    el.classList.remove('lang-changing');
                }, 300);
            }
        });

        // 2. Gestion de la page de détail [slug].astro (Reste inchangé car c'était bon)
        const projectContainer = document.querySelector('[data-project-slug]');
        if (projectContainer) {
            const slug = projectContainer.getAttribute('data-project-slug');
            const project = projects.find(p => p.slug === slug);

            if (project) {
                const projectElements = document.querySelectorAll('[data-i18n-project]');
                projectElements.forEach((el) => {
                    const path = el.getAttribute('data-i18n-project');
                    if (!path) return;

                    const newValue = getDeepValue(project.content[lang], path);
                    const ghostValue = getDeepValue(project.content[otherLang], path);

                    if (newValue) {
                        el.classList.add('lang-changing');
                        setTimeout(() => {
                            (el as HTMLElement).textContent = newValue;
                            if (ghostValue) {
                                el.setAttribute('data-ghost', ghostValue);
                            }
                            el.classList.remove('lang-changing');
                        }, 300);
                    }
                });
            }
        }
    });
}