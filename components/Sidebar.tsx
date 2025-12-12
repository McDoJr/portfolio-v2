'use client';

import { RefObject } from "react";
import Avatar from "./Avatar";
import { faGithub, faLinkedin, faUpwork } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";

type SidebarProps = {
    rightRef: RefObject<HTMLDivElement | null>,
    aboutRef: RefObject<HTMLDivElement | null>,
    experienceRef: RefObject<HTMLDivElement | null>,
}

export default function Sidebar({ rightRef, aboutRef, experienceRef }: SidebarProps) {

    function onWheel(e: React.WheelEvent<HTMLDivElement>) {
        if (window.innerWidth <= 1400) return;
        rightRef.current?.scrollBy({
            top: e.deltaY,
            behavior: "instant"
        });
    }

    return (
        <div onWheel={onWheel} className="h-full flex justify-center py-24 first:justify-end overflow-hidden">
            <div className="max-w-[675px] lg:w-[675px] px-6 lg:px-0 flex flex-col">
                <div className="flex flex-col md:flex-row justify-between lg:pr-22">
                    <Avatar className="-translate-y-5 mx-auto md:mx-0" contentClassName="block md:hidden" defaultSize={220} />
                    <div className="flex flex-col pt-4 md:pr-8 lg:pr-0 font-outfit gap-2">
                        <h1 className="text-neutral-300 text-center md:text-start text-4xl font-bold uppercase">Karl Bejerano</h1>
                        <p className="text-neutral-400 text-center md:text-start text-xl font-medium">Junior Full-Stack + Experienced Minecraft Plugin Developer.</p>
                        <a
                            href="https://google.com/maps/place/Butuan+City"
                            target="_blank"
                            className="text-neutral-400 mt-6 text-center md:text-start cursor-pointer hover:text-white transition-all duration-100"
                        >🏠 Butuan City, Philippines.</a>
                    </div>
                    <Avatar className="-translate-y-5" contentClassName="hidden md:block" defaultSize={220} />
                </div>
                <Navigation rightRef={rightRef} aboutRef={aboutRef} experienceRef={experienceRef} className="mt-12" />
                <div className="flex items-center mt-18 self-center md:self-start md:mt-auto gap-6 text-neutral-400">
                    <a href="https://github.com/mcdojr" target="_blank" title="Github">
                        <FontAwesomeIcon icon={faGithub} className="cursor-pointer text-xl hover:text-white transition-colors duration-100" />
                    </a>
                    <a href="https://www.linkedin.com/in/karlbejerano/" target="_blank" title="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer text-xl hover:text-white transition-colors duration-100" />
                    </a>
                    <a
                        href="https://www.upwork.com/freelancers/~01141818a54508e446"
                        target="_blank"
                        className="translate-y-0.5"
                        title="Upwork"
                    >
                        <FontAwesomeIcon icon={faUpwork} className="cursor-pointer text-[22px] hover:text-white transition-colors duration-100" />
                    </a>
                    <a href="mailto:iamkbejj@gmail.com" title="Mail">
                        <FontAwesomeIcon icon={faEnvelope} className="cursor-pointer text-xl hover:text-white transition-colors duration-100" />
                    </a>
                </div>
            </div>
        </div>
    )
}