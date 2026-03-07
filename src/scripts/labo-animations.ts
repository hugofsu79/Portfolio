// --- TYPES & INTERFACES ---
export interface LiquidParticle {
    x: number; y: number; baseX: number; radius: number;
    speed: number; vx: number; vy: number;
}
export interface MusicDot {
    x: number; y: number; z: number; v: number;
    row: number; col: number; lastTriggered: number;
}
export interface Crawler {
    t: number; size: number;
}

// --- CANVAS INTERACTION (Restauration des lignes) ---
export function initInteraction(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d")!;
    const parent = canvas.parentElement!;
    let points: any[] = [];
    const spacing = 60;
    const mouse = { x: -2000, y: -2000, active: false };

    const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        const size = parent.clientWidth;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        ctx.scale(dpr, dpr);
        points = [];
        for (let x = spacing / 2; x < size; x += spacing) {
            for (let y = spacing / 2; y < size; y += spacing)
                points.push({ x, y });
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = ctx.strokeStyle =
            getComputedStyle(canvas).getPropertyValue("--fill-brand") ||
            "#342818";
        ctx.lineWidth = 0.5;

        points.forEach((p) => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            let size = 1.5;
            if (mouse.active && dist < 160) {
                const prox = 1 - dist / 160;
                size = 1.5 + 12 * Math.pow(prox, 1.5);
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", (e) => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
        mouse.active =
            mouse.x > 0 &&
            mouse.y > 0 &&
            mouse.x < r.width &&
            mouse.y < r.height;
    });
    resize();
    animate();
}

// --- 2. EXPÉRIENCE : RYTHME (Grille Audio + Ondes) ---
export function initRythme(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d")!;
    const parent = canvas.parentElement!;
    let audioCtx: AudioContext | null = null;
    let width: number;
    let dots: MusicDot[] = [];

    const soundChoice = sessionStorage.getItem("soundPreference");
    const isSoundEnabled = soundChoice === "enabled";

    const rows = 24,
        cols = 24;
    const damping = 0.65,
        tension = 1;

    const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        width = parent.clientWidth;
        canvas.width = width * dpr;
        canvas.height = width * dpr;
        ctx.scale(dpr, dpr);
        dots = []; // Réinitialisation propre
        const sp = (width - 60) / (cols - 1);
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dots.push({
                    x: 30 + c * sp,
                    y: 30 + r * sp,
                    z: 0,
                    v: 0,
                    row: r,
                    col: c,
                    lastTriggered: 0,
                });
            }
        }
    };

    const playNote = (row: number) => {
        if (!isSoundEnabled) return;

        if (!audioCtx)
            audioCtx = new (
                window.AudioContext || (window as any).webkitAudioContext
            )();
        if (audioCtx.state === "suspended") audioCtx.resume();

        const scale = [87.31, 174.61, 207.65, 261.63, 698.46];
        const freq = scale[row % scale.length];
        const now = audioCtx.currentTime;

        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(0.02, now + 0.1);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

        osc.connect(g);
        g.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 1.6);
    };

    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        dots.forEach((d) => {
            const dx = mx - d.x;
            const dy = my - d.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 25) {
                if (Date.now() - d.lastTriggered > 220) {
                    d.v += 12; // L'onde physique est toujours calculée
                    d.lastTriggered = Date.now();

                    // La fonction playNote décidera elle-même si elle fait du bruit
                    playNote(d.row);
                }
            }
        });
    });

    const animate = () => {
        ctx.clearRect(0, 0, width, width);

        dots.forEach((d, i) => {
            let neighbors = 0;
            if (d.row > 0) neighbors += dots[i - cols].z;
            if (d.row < rows - 1) neighbors += dots[i + cols].z;
            if (d.col > 0) neighbors += dots[i - 1].z;
            if (d.col < cols - 1) neighbors += dots[i + 1].z;

            d.v = (d.v + (neighbors / 4 - d.z) * tension) * damping;
            d.z += d.v;
        });

        dots.forEach((d) => {
            ctx.beginPath();
            ctx.arc(d.x, d.y - d.z, 2, 0, Math.PI * 2);
            ctx.fillStyle =
                Math.abs(d.z) > 0.5
                    ? `hsla(${200 + Math.abs(d.z) * 10}, 70%, 60%, 1)`
                    : "#ffffff";
            ctx.fill();
        });
        requestAnimationFrame(animate);
    };

    resize();
    animate();
}

// --- 3. EXPÉRIENCE : MATIÈRE (Gooey Liquid) ---
export function initMatiere(canvas: HTMLCanvasElement) {
    if (!document.getElementById("goo-dense")) {
        document.body.insertAdjacentHTML(
            "beforeend",
            `<svg style="display:none;"><filter id="goo-dense"><feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"/><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 -16" result="goo"/><feComposite in="SourceGraphic" in2="goo" operator="atop"/></filter></svg>`,
        );
    }
    const ctx = canvas.getContext("2d")!;
    let width: number,
        height: number,
        particles: LiquidParticle[] = [];
    const mouse = { x: -1000, y: -1000, active: false };
    canvas.style.filter = "url(#goo-dense)";

    function resize() {
        width = canvas.parentElement!.clientWidth;
        height = width;
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
        particles = [];
        for (let i = 0; i < 40; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                baseX: Math.random() * width,
                radius: 40 + Math.random() * 40,
                speed: 0.2 + Math.random() * 0.3,
                vx: 0,
                vy: 0,
            });
        }
    }

    canvas.addEventListener("mousemove", (e) => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
        mouse.active = true;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle =
            getComputedStyle(document.documentElement).getPropertyValue(
                "--fill-brand",
            ) || "#000";
        particles.forEach((p) => {
            p.y =
                p.y + p.speed > height + p.radius
                    ? -p.radius
                    : p.y + p.speed;
            if (mouse.active) {
                const dx = p.x - mouse.x,
                    dy = p.y - mouse.y,
                    dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const f = (120 - dist) / 120;
                    p.vx += (dx / dist) * f * 2;
                    p.vy += (dy / dist) * f * 2;
                }
            }
            p.vx *= 0.9;
            p.vy *= 0.9;
            p.x += p.vx;
            p.y += p.vy;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    resize();
    animate();
}

// --- 4. EXPÉRIENCE : SYSTÈME (S Alphabet) ---
export function initSysteme(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d")!;
    const size = 300;
    const dpr = window.devicePixelRatio || 1;

    const crawlers: Crawler[] = [
        { t: 0, size: 5 },
        { t: 0.2, size: 3 },
        { t: 0.4, size: 6 },
        { t: 0.6, size: 4 },
        { t: 0.8, size: 5 },
    ];

    // --- Coordonnées recalculées pour être centrées sur 300x300 ---
    // On centre le "S" autour de x = 150
    function getPointOnS(t: number) {
        const p = [
            { x: 150, y: 50 },
            { x: 270, y: 50 },
            { x: 270, y: 145 },
            { x: 150, y: 145 },
            { x: 30, y: 145 },
            { x: 30, y: 240 },
            { x: 150, y: 240 },
        ];

        const nt = (t % 0.5) * 2;
        const b =
            t < 0.5 ? [p[0], p[1], p[2], p[3]] : [p[3], p[4], p[5], p[6]];

        // Calcul Bézier Cubique
        const cx =
            (1 - nt) ** 3 * b[0].x +
            3 * (1 - nt) ** 2 * nt * b[1].x +
            3 * (1 - nt) * nt ** 2 * b[2].x +
            nt ** 3 * b[3].x;
        const cy =
            (1 - nt) ** 3 * b[0].y +
            3 * (1 - nt) ** 2 * nt * b[1].y +
            3 * (1 - nt) * nt ** 2 * b[2].y +
            nt ** 3 * b[3].y;

        return { x: cx, y: cy };
    }

    function animate() {
        ctx.clearRect(0, 0, size, size);

        // Configuration du texte
        ctx.font = "900 250px Helvetica, Arial, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const style = getComputedStyle(document.documentElement);
        ctx.strokeStyle =
            style.getPropertyValue("--stroke-primary").trim() || "#ccc";
        ctx.lineWidth = 1.5;

        // Le texte est maintenant centré pile au milieu (size/2)
        // On ajuste légèrement le Y (+15) car les polices ont souvent un décalage visuel vers le haut
        ctx.strokeText("S", size / 2, size / 2 + 15);

        crawlers.forEach((c) => {
            c.t = (c.t + 0.0015) % 1; // Légèrement plus rapide
            const pos = getPointOnS(c.t);

            ctx.beginPath();
            ctx.arc(pos.x, pos.y, c.size, 0, Math.PI * 2);
            ctx.fillStyle =
                style.getPropertyValue("--layer-background").trim() ||
                "#fff";
            ctx.fill();
            ctx.stroke();
        });

        requestAnimationFrame(animate);
    }

    // Setup Canvas avec DPR
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    animate();
}