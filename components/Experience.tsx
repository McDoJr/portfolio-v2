type ExperienceProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

export default function Experience(props: ExperienceProps) {
    return (
        <div
            className="flex flex-col gap-6 pb-16 first:pb-40 text-2xl lg:text-[18px] text-neutral-400 font-light"
            {...props}
        >
            <h1 className="inline text-lg text-neutral-300 font-medium mb-6 first:hidden">EXPERIENCE</h1>
            <ExperienceCard
                title="Freelance Developer — Upwork"
                date="2021 — PRESENT"
                descriptions={[
                    "I work as a freelancer on Upwork, delivering development services across web, mobile, and Minecraft server projects. I’ve collaborated with clients and teams on a wide range of tasks, including custom plugin creation, game feature implementation, full-stack web development, and mobile app builds. Through these projects, I’ve gained valuable experience in adapting to different workflows, meeting client expectations, and delivering reliable, efficient solutions in both independent and team-based environments.",
                ]}
            />
            <ExperienceCard
                title="Software Developer Intern"
                date="FEB — MAY 2025"
                descriptions={[
                    "I worked as an intern at the Office of Civil Defense Caraga, where I developed three internal systems aimed at improving their operational efficiency. During my internship, I was responsible for designing, building, and deploying these systems from the ground up, which included features for data management, task tracking, and emergency coordination. This experience allowed me to apply my skills in full-stack development while contributing to meaningful solutions in a government setting. It also strengthened my ability to work independently, manage time effectively, and deliver practical tools under real-world requirements.",
                ]}
            />
            <ExperienceCard
                title="Contract Developer"
                date="JAN — OCT 2024"
                descriptions={[
                    "I worked as a contract developer at Hydreon, collaborating with other contract developers to convert Minecraft Bedrock Edition gamemodes written in PHP into Java for the Java Edition. My role involved analyzing and translating gameplay mechanics, systems, and logic while preserving the intended player experience across platforms. This required a deep understanding of both Bedrock and Java Minecraft architectures. Working closely with the team, I helped ensure smooth transitions, consistent functionality, and improved performance. This experience sharpened my skills in game logic translation, platform-specific optimization, and collaborative problem-solving.",
                ]}
            />
            <ExperienceCard
                title="Lead Minecraft Developer"
                date="DEC 2022 — JUNE 2023"
                descriptions={[
                    "I was the sole Minecraft developer in a 7-person startup working on a unique tournament project that aimed to broadcast Minecraft gameplay via satellite to be viewed from space. Handling all aspects of the Minecraft side alone—server setup, plugin development, and optimization—was both challenging and rewarding. I faced and solved many technical issues independently, gaining valuable experience in server management, real-time gameplay systems, and problem-solving under pressure.",
                ]}
            />
        </div>
    )
}

type ExperienceCardProps = {
    title: string;
    date: string;
    descriptions: string[];
}

function ExperienceCard({ title, date, descriptions }: ExperienceCardProps) {
    return (
        <div className="py-1 flex flex-col gap-1 cursor-default hover:scale-105 hover:translate-x-4 transition-all">
            <span className="text-sm font-[450] text-neutral-500 mb-1">{date}</span>
            <h5 className="text-[17px] text-neutral-300 font-[450]">{title}</h5>
            {descriptions.map((description, index) => (
                <div className="mt-2 text-[16px]" key={index}>{description}</div>
            ))}
        </div>
    )
}