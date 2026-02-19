import { ExternalLink } from "lucide-react";

type AboutProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>;
};

export default function About(props: AboutProps) {
  return (
    <div
      className="flex flex-col gap-5 pb-16 first:pb-22 text-[16px] lg:text-[16px] text-neutral-400 font-light"
      {...props}
    >
      <h1 className="inline text-lg text-neutral-300 font-medium mb-6 first:hidden">
        ABOUT
      </h1>
      <p>
        I’m a full-stack developer building scalable web and mobile apps with
        clean architecture and real-time features.
      </p>
      <p>
        I also develop custom Minecraft plugins with optimized server-side
        mechanics.
      </p>
      <p>
        Passionate about problem-solving and continuous learning, I focus on
        turning ideas into reliable, high-quality products. 🚀
      </p>

      <a
        href="/resume.pdf"
        rel="noopener noreferrer"
        className="mt-6 first:mt-10 self-start flex font-outfit items-center gap-2 text-neutral-400 hover:text-white"
        target="_blank"
      >
        <span>View Full Résumé</span>
        <ExternalLink size={16} />
      </a>
    </div>
  );
}
