// src/scripts/useProjectHover.ts

function useProjectHover(selector: string) {
    const rows = document.querySelectorAll<HTMLElement>(selector);

    const clamp = (v: number, min: number, max: number) =>
        Math.min(Math.max(v, min), max);

    rows.forEach((row) => {
        const img = row.querySelector<HTMLImageElement>(".project-preview img");
        if (!img) return;

        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;
        let raf = 0;

        let vx = 0;
        let vy = 0;
        let angle = 0;
        let angularVelocity = 0;

        let lastX = 0;
        let lastY = 0;
        let speed = 0;

        let reveal = 0; // 0 = closed, 1 = fully open

        // Time-based spring tuning (smooth + subtle)
        // Units are tuned for dt-in-seconds integration.
        const stiffness = 32;       // pull strength towards target
        const damping = 14;         // velocity decay (higher = more damped)
        const gravity = 220;        // px/s^2 (subtle "weight")

        const angularStiffness = 10; // pull back to angle 0
        const angularDamping = 12;   // angular velocity decay
        const angularInfluence = 0.002; // how much horizontal speed affects swing

        const maxSpeed = 1800;      // px/s clamp for stability
        const maxAngle = 0.28;      // ~16° (subtle)

        const revealStiffness = 18; // how fast the angles open
        const revealDamping = 16;   // how smooth the opening is

        const fallGravity = 0.35;
        const fadeDuration = 220;
        let isLeaving = false;

        let lastTime = 0;

        const tick = (t: number) => {
            if (!lastTime) lastTime = t;
            // dt in seconds, clamped to avoid big jumps when tab is inactive
            const dt = Math.min(0.032, (t - lastTime) / 1000);
            lastTime = t;

            // Spring acceleration toward target
            const ax = (targetX - currentX) * stiffness;
            const ay = (targetY - currentY) * stiffness + (isLeaving ? fallGravity * 600 : gravity);

            vx += ax * dt;
            vy += ay * dt;

            // Clamp speed for stability
            const sp = Math.hypot(vx, vy);
            if (sp > maxSpeed) {
                const k = maxSpeed / sp;
                vx *= k;
                vy *= k;
            }

            // Exponential damping (smooth, framerate-independent)
            const velDamp = Math.exp(-damping * dt);
            vx *= velDamp;
            vy *= velDamp;

            currentX += vx * dt;
            currentY += vy * dt;

            // Measure instantaneous motion (for optional use)
            const dx = currentX - lastX;
            const dy = currentY - lastY;
            speed = Math.sqrt(dx * dx + dy * dy);

            // Pendulum-like angular physics
            const angularForce = -angle * angularStiffness;
            angularVelocity += (angularForce + vx * angularInfluence) * dt;
            angularVelocity *= Math.exp(-angularDamping * dt);
            angle += angularVelocity;
            angle = Math.max(-maxAngle, Math.min(maxAngle, angle));

            // Reveal driven by hover presence + motion
            const targetReveal = isLeaving ? 0 : 1;
            const revealForce = (targetReveal - reveal) * revealStiffness;
            reveal += revealForce * dt;
            reveal *= Math.exp(-revealDamping * dt);
            reveal = clamp(reveal, 0, 1);

            // Smooth pivot: map vx to 10%..90% continuously (no hard flip)
            const pivotBlend = clamp(vx / 600, -1, 1); // -1..1
            const pivotXPct = 50 - pivotBlend * 40;    // 10..90
            img.style.transformOrigin = `${pivotXPct}% 10%`;

            // Use transform for buttery movement (no layout thrash)
            img.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${angle}rad)`;

            // Double-angle (near-square) reveal using clip-path
            const inset = (1 - reveal) * 48; // px, controls how closed it starts
            const skew = (1 - reveal) * 12;  // px, angle separation

            img.style.clipPath = `
              polygon(
                ${inset + skew}px ${inset}px,
                calc(100% - ${inset}px) ${inset + skew}px,
                calc(100% - ${inset + skew}px) calc(100% - ${inset}px),
                ${inset}px calc(100% - ${inset + skew}px)
              )
            `;

            // memorisation
            lastX = currentX;
            lastY = currentY;

            raf = requestAnimationFrame(tick);
        };

        const updateTarget = (e: MouseEvent) => {
            const rect = row.getBoundingClientRect();
            const iw = img.offsetWidth;
            const ih = img.offsetHeight;

            const rawX = e.clientX - rect.left;
            const rawY = e.clientY - rect.top;

            targetX = clamp(rawX, 0, rect.width - iw);
            targetY = clamp(rawY, 0, rect.height - ih);

            // micro overshoot (subtle)
            targetX += vx * 0.12;
            targetY += vy * 0.08;
        };

        row.addEventListener("mouseenter", (e) => {
            isLeaving = false;
            img.style.opacity = "1";

            updateTarget(e);
            currentX = targetX;
            currentY = targetY;

            lastTime = 0;
            if (!raf) raf = requestAnimationFrame(tick);
        });

        row.addEventListener("mousemove", updateTarget);

        row.addEventListener("mouseleave", () => {
            isLeaving = true;
            targetY += 24;

            img.style.transition = `opacity ${fadeDuration}ms ease`;
            img.style.opacity = "0";

            setTimeout(() => {
                cancelAnimationFrame(raf);
                raf = 0;
                lastTime = 0;
                isLeaving = false;
                img.style.transition = "opacity 0ms";
            }, fadeDuration);
        });
    });


}

export { useProjectHover };

if (typeof window !== "undefined") {
    // @ts-ignore
    window.useProjectHover = useProjectHover;
}