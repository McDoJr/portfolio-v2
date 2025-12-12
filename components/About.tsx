import { ExternalLink } from "lucide-react";

type AboutProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

export default function About(props: AboutProps) {
    return (
        <div
            className="flex flex-col gap-5 pb-16 first:pb-40 text-[16px] lg:text-[16px] text-neutral-400 font-light"
            {...props}
        >
            <h1 className="inline text-lg text-neutral-300 font-medium mb-6 first:hidden">ABOUT</h1>
            <p>
                I’m a junior full-stack developer focused on building scalable,
                high-performance web and mobile applications. My work spans real-time systems,
                clean architecture, and user-friendly interfaces.
            </p>
            <p>
                I also specialize in Minecraft plugin development,
                creating custom gameplay features and optimized server-side mechanics.
            </p>
            <p>
                In mobile development, I build smooth and feature-rich applications with strong
                capabilities like camera integration, mapping, offline functionality, and API-driven workflows.
            </p>
            <p>
                I’m passionate about problem-solving, continuous learning, and turning ideas into reliable,
                well-built products. Let’s build something great together! 🚀
            </p>

            <a
                href="/resume.pdf"
                rel="noopener noreferrer"
                className="mt-6 self-start flex font-outfit items-center gap-2 text-neutral-400 hover:text-white"
                target="_blank"
            >
                <span>View Full Résumé</span>
                <ExternalLink size={16} />
            </a>
        </div>
    )
}