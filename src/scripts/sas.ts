interface Ball {
    el: HTMLDivElement;
    x: number;
    y: number;
    vx: number;
    vy: number;
    targetRadius: number;
    currentRadius: number;
    angle: number;
    baseSpeed: number;
    noiseOffset: number;
    size: number;
    gravity: number;
    friction: number;
    opacity: number;
}

const AUDIO_PATH = "/sounds/hero_song.mp3";
let sasAnimationId: number | null = null;
let isTerminated = false;

function initLiquidLoader() {
    const stage = document.getElementById("stage");
    if (!stage) return;

    const ballCount = 10;
    const balls: Ball[] = [];
    const centerX = 125;
    const centerY = 125;

    stage.innerHTML = "";
    isTerminated = false;

    for (let i = 0; i < ballCount; i++) {
        const el = document.createElement("div");
        el.className = "ball";
        stage.appendChild(el);
        const size = 30 + Math.random() * 20;
        el.style.width = el.style.height = `${size}px`;

        balls.push({
            el, x: centerX, y: centerY, vx: 0, vy: 0,
            targetRadius: 65 + Math.random() * 20,
            currentRadius: 0,
            angle: (i / ballCount) * Math.PI * 2,
            baseSpeed: 0.01 + Math.random() * 0.01,
            noiseOffset: Math.random() * 1000,
            size, gravity: 0.25, friction: 0.85, opacity: 0,
        });
    }

    function animate() {
        if (isTerminated) return;

        balls.forEach((ball) => {
            if (ball.currentRadius < ball.targetRadius)
                ball.currentRadius += (ball.targetRadius - ball.currentRadius) * 0.02;
            ball.noiseOffset += 0.008;
            ball.angle += ball.baseSpeed + Math.sin(ball.noiseOffset) * 0.01;

            const targetX = centerX + Math.cos(ball.angle) * ball.currentRadius;
            const targetY = centerY + Math.sin(ball.angle) * ball.currentRadius;

            ball.vx += (targetX - ball.x) * 0.1;
            ball.vy += (targetY - ball.y) * 0.1;
            ball.vy += ball.gravity;
            ball.vx *= ball.friction;
            ball.vy *= ball.friction;
            ball.x += ball.vx;
            ball.y += ball.vy;

            const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
            const rotation = Math.atan2(ball.vy, ball.vx) * (180 / Math.PI);
            const stretch = 1 + Math.min(speed * 0.1, 0.5);

            ball.opacity += (Math.min(1, ball.currentRadius / 40) - ball.opacity) * 0.05;
            ball.el.style.opacity = ball.opacity.toFixed(2);
            ball.el.style.transform = `translate(${ball.x - ball.size / 2}px, ${ball.y - ball.size / 2}px) rotate(${rotation}deg) scaleX(${stretch})`;
        });

        sasAnimationId = requestAnimationFrame(animate);
    }
    animate();
}
function playHeroMusic() {
    const audio = new Audio(AUDIO_PATH);
    audio.volume = 0;

    // Stockage global pour contrôle ultérieur si besoin
    (window as any).mainHeroAudio = audio;

    audio.play().then(() => {
        // Fade in : passe de 0 à 0.5 en 2 secondes
        let vol = 0;
        const interval = setInterval(() => {
            if (vol < 0.5) {
                vol += 0.05;
                audio.volume = Math.min(vol, 0.5);
            } else {
                clearInterval(interval);
            }
        }, 200);
    }).catch(err => console.warn("Audio playback failed:", err));
}

export function initSas() {
    const hasMadeChoice = sessionStorage.getItem("soundPreference");
    const sasOverlay = document.getElementById("sound-sas");

    if (!sasOverlay) return;

    if (hasMadeChoice) {
        sasOverlay.style.display = "none";
        return;
    }

    initLiquidLoader();

    const btnSound = document.getElementById("trigger-sound");
    const btnNoSound = document.getElementById("trigger-no-sound");

    if (!btnSound || !btnNoSound) return;

    const handleChoice = (withSound: boolean) => {
        sessionStorage.setItem("soundPreference", withSound ? "enabled" : "disabled");

        if (withSound) {
            playHeroMusic();
        }

        sasOverlay.classList.add("is-hidden");

        isTerminated = true;
        if (sasAnimationId) cancelAnimationFrame(sasAnimationId);

        window.dispatchEvent(new CustomEvent("sas-finished"));

        setTimeout(() => {
            sasOverlay.style.display = "none";
            sasOverlay.innerHTML = "";
        }, 1000);
    };

    btnSound.addEventListener("click", () => handleChoice(true));
    btnNoSound.addEventListener("click", () => handleChoice(false));
}