import { navContent } from '../data/navigation';
import { langStore } from '../stores/langStore';
import { heroContent } from '../data/hero';

export function initI18n() {
    langStore.subscribe((lang: 'fr' | 'en') => {
        const data = { ...heroContent[lang], ...navContent[lang] };
        const other = { ...heroContent[lang === 'fr' ? 'en' : 'fr'], ...navContent[lang === 'fr' ? 'en' : 'fr'] };

        const elements = document.querySelectorAll('[data-i18n-key]');

        elements.forEach((el) => {
            const key = el.getAttribute('data-i18n-key');
            if (!key) return;

            // Update du texte avec ton effet de transition (opacité/blur)
            el.classList.add('lang-changing');

            setTimeout(() => {
                if (key === 'context') {
                    const label = el.querySelector('#hero-label');
                    const desc = el.querySelector('#hero-description');
                    if (label && desc) {
                        label.textContent = data.context.label;
                        desc.textContent = data.context.description;
                        el.setAttribute('data-ghost', `${other.context.label} ${other.context.description}`);
                    }
                } else {
                    // @ts-ignore
                    el.textContent = data[key];
                    // @ts-ignore
                    el.setAttribute('data-ghost', other[key]);
                }
                el.classList.remove('lang-changing');
            }, 300);
        });
    });
}