export const playEffect = (url: string, volume: number = 0.5) => {

    const soundChoice = sessionStorage.getItem("soundPreference");

    if (soundChoice !== "enabled") {
        // Si c'est "disabled" ou vide, on ne fait RIEN
        return;
    }

    const audio = new Audio(url);
    audio.volume = volume;
    audio.play().catch(e => console.log("Audio blocké", e));
};