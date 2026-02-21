import { projects } from "@/lib/datas";
import { ArrowUpRight, Eye, Link } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ProjectsProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>;
};

export default function Projects(props: ProjectsProps) {
  return (
    <div
      className="flex flex-col gap-6 pb-8 first:pb-22 text-2xl lg:text-[18px] text-neutral-400 font-light"
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
  sourceCode?: string;
  url?: string;
};

function ProjectCard({
  title,
  description,
  thumbnail,
  techs,
  sourceCode,
  url,
}: ProjectCardProps) {
  const [preview, setPreview] = useState(false);

  const toggle = () => setPreview((prev) => !prev);

  return (
    <div
      className={twMerge(
        "group w-full py-4 rounded flex flex-col sm:flex-row gap-6",
        "hover:px-4 hover:bg-white/3 transition-all hover:shadow-md cursor-pointer",
      )}
    >
      <div className="flex sm:hidden justify-between">
        <span className="text-[17px] block text-neutral-300 font-[450]">
          {title}
        </span>
        {url && (
          <a
            href={url ?? "#"}
            target={url ? "_blank" : undefined}
            onClick={(e) => {
              if (!url) e.preventDefault();
            }}
            className="pb-1 text-sm flex self-start items-center gap-1 hover:text-white hover:border-b transition-all duration-100"
          >
            <p className="trucate">Demo</p>
            <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div
          className="group relative w-full sm:w-40 sm:h-[100px] rounded border-2 border-neutral-600"
          onClick={toggle}
        >
          <Image
            className="w-full h-full"
            src={thumbnail}
            alt="thumbnail"
            width={500}
            height={500}
          />
          <div className="hidden group-hover:bg-primary/50 group-hover:flex absolute inset-0 items-center justify-center cursor-pointer transition-all duration-100">
            <Eye className="text-white" />
          </div>
        </div>
        {url && (
          <a
            href={url ?? "#"}
            target={url ? "_blank" : undefined}
            onClick={(e) => {
              if (!url) e.preventDefault();
            }}
            className="pb-1 text-sm hidden sm:flex self-start items-center gap-1 hover:text-white hover:border-b transition-all duration-100"
          >
            <p className="trucate">Demo</p>
            <ArrowUpRight className="size-4" />
          </a>
        )}
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
      {preview && (
        <div
          className="fixed inset-0 justify-center items-center bg-primary/50 p-16 z-100"
          onClick={toggle}
        >
          <Image
            className="w-auto h-full mx-auto border-3 border-neutral-800 shadow-2xl"
            src={thumbnail}
            alt="thumbnail"
            width={1080}
            height={1080}
          />
        </div>
      )}
    </div>
  );
}

function Tag({ tag }: { tag: string }) {
  return (
    <div className="py-1 px-2 rounded-full bg-[#c7cbcb]">
      <p className="text-[14px] text-[#150759]">{tag}</p>
    </div>
  );
}
