import { twMerge } from "tailwind-merge";

type TechStackProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

export default function TechStack(props: TechStackProps) {

    const frontEnd: Tech[] = [
        { url: "https://skillicons.dev/icons?i=html", title: "HTML" },
        { url: "https://skillicons.dev/icons?i=css", title: "CSS" },
        { url: "https://skillicons.dev/icons?i=js", title: "Javascript" },
        { url: "https://skillicons.dev/icons?i=ts", title: "Typescript" },
        { url: "https://skillicons.dev/icons?i=tailwindcss", title: "TailwindCSS" },
        { url: "https://skillicons.dev/icons?i=react", title: "React" },
        { url: "https://skillicons.dev/icons?i=next", title: "Next.js" },
        { url: "https://skillicons.dev/icons?i=svelte", title: "Svelte" },
        { url: "https://skillicons.dev/icons?i=redux", title: "Redux", href: "https://redux.js.org/" },
        { url: "", src: "/expo.svg", className: "rounded-[10px] bg-white", title: "React Native Expo", href: "https://expo.dev/" },
        { url: "", src: "/shadcn.svg", className: "rounded-[10px] bg-white", title: "Shadcn", href: "https://ui.shadcn.com/" },
    ];

    const backEnd: Tech[] = [
        { url: "https://skillicons.dev/icons?i=nodejs", title: "Node.js" },
        { url: "https://skillicons.dev/icons?i=expressjs", title: "Express" },
        { url: "https://skillicons.dev/icons?i=nestjs", title: "Nest.js", href: "https://docs.nestjs.com/" },
        { url: "https://skillicons.dev/icons?i=prisma", title: "Prisma", href: "https://www.prisma.io/docs" },
        { url: "https://skillicons.dev/icons?i=docker", title: "Docker" },
        { url: "https://skillicons.dev/icons?i=redis", title: "Redis" },
        { url: "https://skillicons.dev/icons?i=mysql", title: "MySQL" },
        { url: "https://skillicons.dev/icons?i=postgresql", title: "PostgreSQL" },
        { url: "https://skillicons.dev/icons?i=mongodb", title: "MongoDB" },
        { url: "https://skillicons.dev/icons?i=supabase", title: "Supabase" },
    ];

    const others: Tech[] = [
        { url: "https://skillicons.dev/icons?i=git", title: "Git" },
        { url: "https://skillicons.dev/icons?i=github", title: "Github" },
        { url: "https://skillicons.dev/icons?i=vscode", title: "Vscode" },
        { url: "https://skillicons.dev/icons?i=netlify", title: "Netlify" },
        { url: "https://skillicons.dev/icons?i=vercel", title: "Vercel" },
        { url: "https://skillicons.dev/icons?i=npm", title: "NPM" },
        { url: "https://skillicons.dev/icons?i=postman", title: "Postman" },
    ];

    const pluginDevelopment: Tech[] = [
        { url: "https://skillicons.dev/icons?i=java", title: "Java" },
        { url: "", src: "/spigotmc.svg", title: "Spigot", href: "https://www.spigotmc.org/" },
        { url: "", src: "/papermc.svg", title: "PaperMC", href: "https://papermc.io/" },
        { url: "https://skillicons.dev/icons?i=idea", title: "IntelliJ", href: "https://www.jetbrains.com/idea/" },
        { url: "https://skillicons.dev/icons?i=maven", title: "Maven", href: "https://maven.apache.org/" },
        { url: "https://skillicons.dev/icons?i=jenkins", title: "Jenkins", href: "https://hub.spigotmc.org/jenkins/job/BuildTools/" },
    ];

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

type Tech = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
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