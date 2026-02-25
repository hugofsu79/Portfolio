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

        const flattenedContent: Record<string, string> = {
            ...navLabels[lang],
            ...flattenObject(heroContent[lang])
        };

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

        const staticElements = document.querySelectorAll('[data-i18n-key]');
        staticElements.forEach((el) => {
            const key = el.getAttribute('data-i18n-key');
            if (key && flattenedContent[key]) {
                el.classList.add('lang-changing');
                setTimeout(() => {
                    (el as HTMLElement).textContent = flattenedContent[key];
                    el.classList.remove('lang-changing');
                }, 300);
            }
        });

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