"use client";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import TechStack from "@/components/TechStack";
import ViewProvider from "@/context/ViewProvider";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useRef, useState } from "react";

export default function Page() {
  const rightRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);

  const [view, setView] = useScrollSpy(
    rightRef,
    {
      about: aboutRef,
      tech: techRef,
      experience: experienceRef,
      projects: projectRef,
    },
    clicked,
    { offset: 120 },
  );

  return (
    <ViewProvider values={{ view, setView, setClicked }}>
      <div className="absolute w-full h-screen inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_90%_90%_at_50%_0%,#000_10%,transparent_110%)] opacity-2 pointer-events-none"></div>
      <main className="w-full first:h-screen grid grid-cols-1 first:grid-cols-2 overflow-auto first:overflow-hidden bg-primary">
        <Sidebar rightRef={rightRef} />
        <div
          ref={rightRef}
          className="flex flex-col items-center first:items-start pb-20 first:py-24 first:overflow-y-auto"
        >
          <div className="max-w-[675px] lg:w-[675px] flex flex-col px-6 lg:px-0 font-outfit">
            <About ref={aboutRef} id="about" />
            <TechStack ref={techRef} id="tech" />
            <Experience ref={experienceRef} id="experience" />
            <Projects ref={projectRef} id="projects" />
            <Footer />
          </div>
        </div>
      </main>
    </ViewProvider>
  );
}
