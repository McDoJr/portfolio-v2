import { experiences } from "@/utils/datas";

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
            {experiences.map(experience => (
                <ExperienceCard {...experience} key={experience.title} />
            ))}
        </div>
    )
}

export type ExperienceCardProps = {
    title: string;
    date: string;
    descriptions: string[];
}

function ExperienceCard({ title, date, descriptions }: ExperienceCardProps) {
    return (
        <div className="py-1 flex flex-col gap-1 cursor-default hover:scale-105 hover:translate-x-4 transition-all">
            <span className="text-sm font-[450] text-neutral-500 mb-1">{date}</span>
            <h5 className="text-[17px] text-neutral-300 font-[450]">{title}</h5>
            <ul className="mt-2">
                {descriptions.map((description, index) => (
                    <li className="mt-2 text-[16px]" key={index}>{description}</li>
                ))}
            </ul>
        </div>
    )
}