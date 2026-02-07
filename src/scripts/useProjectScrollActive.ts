export function useProjectScrollActive(selector = ".project-row") {
    // ✅ Mobile-only (reliable in real devices + Chrome responsive mode)
    const isMobile = window.matchMedia(
        "(hover: none) and (pointer: coarse), (max-width: 768px)",
    ).matches;

    if (!isMobile) return;

    const rows = Array.from(
        document.querySelectorAll<HTMLElement>(selector),
    );

    if (!rows.length) return;

    // Init: ensure a deterministic state
    rows.forEach((r) => r.classList.remove("is-active"));
    rows[0]?.classList.add("is-active");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                document.body.classList.add("scroll-mode");

                rows.forEach((row) => row.classList.remove("is-active"));
                (entry.target as HTMLElement).classList.add("is-active");
            });
        },
        {
            root: null,
            rootMargin: "-45% 0px -45% 0px",
            threshold: 0,
        },
    );

    rows.forEach((row) => observer.observe(row));
}