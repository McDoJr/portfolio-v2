import { ViewType } from "@/context/ViewProvider";
import { useEffect, useState, useMemo } from "react";

export function useScrollSpy(
    containerRef: React.RefObject<HTMLDivElement | null>,
    sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>>,
    clicked: boolean,
    options = { offset: 120 }
) {
    const [view, setView] = useState<ViewType>("about");

    const keys = useMemo(() => Object.keys(sectionRefs), [sectionRefs]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let ticking = false;

        const update = () => {
            ticking = false;
            if (clicked) return;

            const scrollY = container.scrollTop; const maxScroll = container.scrollHeight - container.clientHeight;

            if (scrollY >= maxScroll - 5) {
                if (view !== "projects") {
                    setView("projects");
                }
                return;
            }

            let nextView: ViewType = view;

            for (const key of keys) {
                const ref = sectionRefs[key].current;
                if (!ref) continue;

                const top = ref.offsetTop - options.offset;
                if (scrollY >= top) {
                    nextView = key as ViewType;
                }
            }

            if (nextView !== view) {
                setView(nextView);
            }
        };

        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        container.addEventListener("scroll", handleScroll);
        update();

        return () => container.removeEventListener("scroll", handleScroll);
    }, [clicked, view, keys, sectionRefs, containerRef, options.offset]);

    return [view, setView] as const;
}
