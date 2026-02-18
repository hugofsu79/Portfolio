import { atom, onMount } from 'nanostores';

// On initialise avec 'fr' par défaut
export const langStore = atom<'fr' | 'en'>('fr');

// Cette fonction s'exécute dès que le store est utilisé sur le client
onMount(langStore, () => {
    const savedLang = localStorage.getItem('preferred-lang') as 'fr' | 'en';
    if (savedLang) {
        langStore.set(savedLang);
    }
});

export function toggleLang() {
    const nextLang = langStore.get() === 'fr' ? 'en' : 'fr';
    langStore.set(nextLang);
    localStorage.setItem('preferred-lang', nextLang); // On sauvegarde le choix
}