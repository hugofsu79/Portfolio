import { atom, onMount } from 'nanostores';

export const langStore = atom<'fr' | 'en'>('fr');

onMount(langStore, () => {
    const savedLang = localStorage.getItem('preferred-lang') as 'fr' | 'en';
    if (savedLang) {
        langStore.set(savedLang);
    }
});

export function toggleLang() {
    const nextLang = langStore.get() === 'fr' ? 'en' : 'fr';
    langStore.set(nextLang);
    localStorage.setItem('preferred-lang', nextLang);
}