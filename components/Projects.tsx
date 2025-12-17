import { projects } from "@/utils/datas";
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
      <h1 className="inline text-lg text-neutral-300 font-medium mb-6 first:hidden">
        PROJECTS
      </h1>
      {projects.map((project) => (
        <ProjectCard {...project} key={project.title} />
      ))}
    </div>
  );
}

export type ProjectCardProps = {
  title: string;
  description: string;
  thumbnail: string;
  techs: string[];
  url?: string;
};

function ProjectCard({
  title,
  description,
  thumbnail,
  techs,
  url,
}: ProjectCardProps) {
  return (
    <a
      href={url ?? "#"}
      target={url ? "_blank" : undefined}
      onClick={(e) => {
        if (!url) e.preventDefault();
      }}
      className={twMerge(
        "w-full py-4 rounded flex flex-col sm:flex-row gap-6",
        "hover:px-4 hover:bg-white/3 transition-all hover:shadow-md cursor-pointer",
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
    </a>
  );
}

function Tag({ tag }: { tag: string }) {
  return (
    <div className="py-1 px-2 rounded-full bg-[#c7cbcb]">
      <p className="text-[14px] text-[#150759]">{tag}</p>
    </div>
  );
}
