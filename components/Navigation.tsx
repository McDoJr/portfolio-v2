'use client';

import { ViewContext, ViewType } from "@/context/ViewProvider";
import { RefObject, useContext } from "react";
import { twMerge } from "tailwind-merge";

type NavigationProps = React.HTMLAttributes<HTMLDivElement> & {
    rightRef: RefObject<HTMLDivElement | null>;
}

export default function Navigation({ className, rightRef, ...props }: NavigationProps) {

    const { view, setView, setClicked } = useContext(ViewContext);

    function scroll(id: ViewType) {
        const element = document.getElementById(id);
        if (element && rightRef.current) {
            setView(id);
            setClicked(true);
            setTimeout(() => setClicked(false), 1200);
            const top = element.getBoundingClientRect().top;
            const current = rightRef.current.scrollTop;
            const offset = top + current - 96;
            rightRef.current.scroll({
                top: offset,
                behavior: "smooth",
            });
        }
    }

    return (
        <nav
            className={twMerge(
                "hidden first:flex flex-col justify-center items-start gap-6 font-semibold transition-all",
                className
            )}
            {...props}
        >
            <button
                onClick={() => scroll("about")}
                className={twMerge(
                    "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all cursor-pointer group",
                    view === "about" && "text-white"
                )}
            >
                <div
                    className={twMerge(
                        "w-10 h-px bg-zinc-400 transition-all group-hover:w-26 group-hover:bg-white",
                        view === "about" && "bg-white w-26"
                    )}
                />
                ABOUT
            </button>

            <button
                onClick={() => scroll("tech")}
                className={twMerge(
                    "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all cursor-pointer group",
                    view === "tech" && "text-white"
                )}
            >
                <div
                    className={twMerge(
                        "w-10 h-px bg-zinc-400 transition-all group-hover:w-26 group-hover:bg-white",
                        view === "tech" && "bg-white w-26"
                    )}
                />
                TOOLS & TECH
            </button>

            <button
                onClick={() => scroll("experience")}
                className={twMerge(
                    "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all cursor-pointer group",
                    view === "experience" && "text-white"
                )}
            >
                <div
                    className={twMerge(
                        "w-10 h-px bg-zinc-400 transition-all group-hover:w-26 group-hover:bg-white",
                        view === "experience" && "bg-white w-26"
                    )}
                />
                EXPERIENCE
            </button>

            <button
                onClick={() => scroll("projects")}
                className={twMerge(
                    "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all cursor-pointer group",
                    view === "projects" && "text-white"
                )}
            >
                <div
                    className={twMerge(
                        "w-10 h-px bg-zinc-400 transition-all group-hover:w-26 group-hover:bg-white",
                        view === "projects" && "bg-white w-26"
                    )}
                />
                PROJECTS
            </button>
        </nav>
    )
}