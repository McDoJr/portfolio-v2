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
        I’m a full-stack developer experienced in React, Next.js, Node.js,
        Spring Boot, and Docker, building scalable and production-ready
        applications.
      </p>
      <p>
        I also develop custom Minecraft plugins using Java with Spigot and
        Paper, and I build and manage complete Minecraft server networks,
        including deployment and server management with Pterodactyl.
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
