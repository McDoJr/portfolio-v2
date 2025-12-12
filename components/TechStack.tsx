import { backEnd, frontEnd, others, pluginDevelopment } from "@/utils/datas";
import { twMerge } from "tailwind-merge";

type TechStackProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

export default function TechStack(props: TechStackProps) {

    return (
        <div className="flex flex-col pb-24 first:pb-40 gap-8" {...props}>
            <h1 className="inline text-lg text-neutral-300 font-medium mb-6 first:hidden">TOOLS & TECH</h1>
            <TechSection title="Front-End" techs={frontEnd} />
            <TechSection title="Back-End" techs={backEnd} />
            <TechSection title="Tools & Platforms" techs={others} />
            <TechSection title="Minecraft Plugin Development" techs={pluginDevelopment} />
        </div>
    )
}

export type Tech = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    url: string;
    src?: string;
    title?: string;
}

type TechSectionProps = {
    title: string;
    techs: Tech[];
}

function TechSection({ title, techs }: TechSectionProps) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-neutral-400 tracking-wider font-medium">{title}</h1>
            <div className="flex gap-4 flex-wrap">
                {techs.map(({ url, src, title, className, ...props }, index) => (
                    <a className={twMerge("hover:-translate-y-1.5 transition-all duration-200", className)} {...props} target="_blank" key={index}>
                        <img src={url || src} alt="tech" title={title} className="size-10" />
                    </a>
                ))}
            </div>
        </div>
    )
}