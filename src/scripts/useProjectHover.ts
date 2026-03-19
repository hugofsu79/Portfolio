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

        const stiffness = 32;
        const damping = 14;
        const gravity = 220;

        const angularStiffness = 10;
        const angularDamping = 12;
        const angularInfluence = 0.002;

        const maxSpeed = 1800;
        const maxAngle = 0.28;

        const revealStiffness = 18;
        const revealDamping = 16;

        const fallGravity = 0.35;
        const fadeDuration = 220;
        let isLeaving = false;

        let lastTime = 0;

        const tick = (t: number) => {
            if (!lastTime) lastTime = t;
            const dt = Math.min(0.032, (t - lastTime) / 1000);
            lastTime = t;

            const ax = (targetX - currentX) * stiffness;
            const ay = (targetY - currentY) * stiffness + (isLeaving ? fallGravity * 600 : gravity);

            vx += ax * dt;
            vy += ay * dt;

            const sp = Math.hypot(vx, vy);
            if (sp > maxSpeed) {
                const k = maxSpeed / sp;
                vx *= k;
                vy *= k;
            }

            const velDamp = Math.exp(-damping * dt);
            vx *= velDamp;
            vy *= velDamp;

            currentX += vx * dt;
            currentY += vy * dt;

            const dx = currentX - lastX;
            const dy = currentY - lastY;
            speed = Math.sqrt(dx * dx + dy * dy);

            const angularForce = -angle * angularStiffness;
            angularVelocity += (angularForce + vx * angularInfluence) * dt;
            angularVelocity *= Math.exp(-angularDamping * dt);
            angle += angularVelocity;
            angle = Math.max(-maxAngle, Math.min(maxAngle, angle));

            const targetReveal = isLeaving ? 0 : 1;
            const revealForce = (targetReveal - reveal) * revealStiffness;
            reveal += revealForce * dt;
            reveal *= Math.exp(-revealDamping * dt);
            reveal = clamp(reveal, 0, 1);

            const pivotBlend = clamp(vx / 600, -1, 1); // -1..1
            const pivotXPct = 50 - pivotBlend * 40;    // 10..90
            img.style.transformOrigin = `${pivotXPct}% 10%`;

            img.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${angle}rad)`;

            const inset = (1 - reveal) * 48; // px
            const skew = (1 - reveal) * 12;  // px, angle separation

            img.style.clipPath = `
              polygon(
                ${inset + skew}px ${inset}px,
                calc(100% - ${inset}px) ${inset + skew}px,
                calc(100% - ${inset + skew}px) calc(100% - ${inset}px),
                ${inset}px calc(100% - ${inset + skew}px)
              )
            `;

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