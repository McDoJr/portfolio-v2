import { twMerge } from "tailwind-merge";

type ProjectsProps = React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
};

export default function Projects(props: ProjectsProps) {
    return (
        <div
            className="flex flex-col gap-6 pb-8 first:pb-40 text-2xl lg:text-[18px] text-neutral-400 font-light"
            {...props}
        >
            <h1 className="inline text-lg text-neutral-300 font-medium mb-6 first:hidden">PROJECTS</h1>
            <ProjectCard
                title="Medico Realty App"
                description="A comprehensive real estate management system that consolidates client data, financial records, and documentation into a single platform, improving accuracy, transparency, and workflow efficiency for realty businesses."
                thumbnail="/realty1.png"
                techs={["NextJS", "Typescript", "Tailwind", "Shadcn", "MySQL"]}
            />
            <ProjectCard
                title="Office of Civil Defense Caraga — Document Tracking"
                description="A tool to track, manage, and monitor documents in real-time, ensuring transparency and faster processing within the Office of Civil Defense Caraga."
                thumbnail="/dtr1.png"
                techs={["Svelte", "Typescript", "Tailwind"]}
            />
            <ProjectCard
                title="Office of Civil Defense Caraga — Records"
                description="A centralized system for organizing, storing, and retrieving official records, designed to enhance efficiency, security, and accessibility within the Office of Civil Defense Caraga."
                thumbnail="/records1.png"
                techs={["NextJS", "Typescript", "Tailwind", "MySQL"]}
            />
            <ProjectCard
                title="Butuan Legal Access"
                description="A thesis-based mobile app that helps users locate nearby law firms and directly connect with lawyers in Butuan City for faster and easier legal assistance."
                thumbnail="/legalaccess1.png"
                techs={[
                    "React Native Expo",
                    "Typescript",
                    "Tailwind",
                    "Supabase",
                    "Google API",
                ]}
            />
            <ProjectCard
                title="Beyond Breeds"
                description="A thesis-based mobile app that connects aspiring pet owners with nearby shelters, making pet adoption easier, faster, and more accessible."
                thumbnail="/breeds1.png"
                techs={[
                    "React Native Expo",
                    "Typescript",
                    "Tailwind",
                    "Supabase",
                    "Google API",
                ]}
            />
            <ProjectCard
                title="Museu de Cabadbaran"
                description="A thesis-based mobile app that uses image classification to scan and identify museum artifacts, providing users with instant historical information and context."
                thumbnail="/museu1.png"
                techs={[
                    "React Native Expo",
                    "Typescript",
                    "Tailwind",
                    "Supabase",
                    "TensorFlow.js",
                ]}
            />
        </div>
    )
}

type ProjectCardProps = {
    title: string;
    description: string;
    thumbnail: string;
    techs: string[];
}

function ProjectCard({ title, description, thumbnail, techs }: ProjectCardProps) {
    return (
        <div
            className={twMerge(
                "w-full py-4 rounded flex flex-col sm:flex-row gap-6",
                "hover:px-4 hover:bg-white/3 transition-all hover:shadow-md cursor-pointer"
            )}
        >
            <span className="text-[17px] block sm:hidden text-neutral-300 font-[450]">
                {title}
            </span>
            <div className="w-full sm:w-40 sm:h-[100px] rounded border-2 border-neutral-600">
                <img className="w-full h-full" src={thumbnail} alt="thumbnail" />
                {/* <Image src={thumbnail} alt="thumbnail" fill className="object-cover rounded" /> */}
            </div>

            <div className="flex-1 flex flex-col gap-3">
                <span className="text-[17px] hidden sm:block text-neutral-300 font-[450]">
                    {title}
                </span>

                <p className="text-[16px]">{description}</p>

                <div className="flex flex-wrap gap-3 items-center">
                    {techs.map((tech) => (
                        <Tag key={tech} tag={tech} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function Tag({ tag }: { tag: string }) {
    return (
        <div className="py-1 px-2 rounded-full bg-[#c7cbcb]">
            <p className="text-[14px] text-[#150759]">{tag}</p>
        </div>
    )
}