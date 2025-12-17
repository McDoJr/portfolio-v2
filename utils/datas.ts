import { ExperienceCardProps } from "@/components/Experience";
import { ProjectCardProps } from "@/components/Projects";
import { Tech } from "@/components/TechStack";

export const frontEnd: Tech[] = [
  { url: "https://skillicons.dev/icons?i=html", title: "HTML" },
  { url: "https://skillicons.dev/icons?i=css", title: "CSS" },
  { url: "https://skillicons.dev/icons?i=js", title: "Javascript" },
  { url: "https://skillicons.dev/icons?i=ts", title: "Typescript" },
  { url: "https://skillicons.dev/icons?i=tailwindcss", title: "TailwindCSS" },
  { url: "https://skillicons.dev/icons?i=react", title: "React" },
  { url: "https://skillicons.dev/icons?i=next", title: "Next.js" },
  { url: "https://skillicons.dev/icons?i=svelte", title: "Svelte" },
  {
    url: "https://skillicons.dev/icons?i=redux",
    title: "Redux",
    href: "https://redux.js.org/",
  },
  {
    url: "",
    src: "/expo.svg",
    className: "rounded-[10px] bg-white",
    title: "React Native Expo",
    href: "https://expo.dev/",
  },
  {
    url: "",
    src: "/shadcn.svg",
    className: "rounded-[10px] bg-white",
    title: "Shadcn",
    href: "https://ui.shadcn.com/",
  },
];

export const backEnd: Tech[] = [
  { url: "https://skillicons.dev/icons?i=nodejs", title: "Node.js" },
  { url: "https://skillicons.dev/icons?i=expressjs", title: "Express" },
  {
    url: "https://skillicons.dev/icons?i=nestjs",
    title: "Nest.js",
    href: "https://docs.nestjs.com/",
  },
  {
    url: "https://skillicons.dev/icons?i=prisma",
    title: "Prisma",
    href: "https://www.prisma.io/docs",
  },
  { url: "https://skillicons.dev/icons?i=docker", title: "Docker" },
  { url: "https://skillicons.dev/icons?i=redis", title: "Redis" },
  { url: "https://skillicons.dev/icons?i=mysql", title: "MySQL" },
  { url: "https://skillicons.dev/icons?i=postgresql", title: "PostgreSQL" },
  { url: "https://skillicons.dev/icons?i=mongodb", title: "MongoDB" },
  { url: "https://skillicons.dev/icons?i=supabase", title: "Supabase" },
];

export const others: Tech[] = [
  { url: "https://skillicons.dev/icons?i=git", title: "Git" },
  { url: "https://skillicons.dev/icons?i=github", title: "Github" },
  { url: "https://skillicons.dev/icons?i=vscode", title: "Vscode" },
  { url: "https://skillicons.dev/icons?i=netlify", title: "Netlify" },
  { url: "https://skillicons.dev/icons?i=vercel", title: "Vercel" },
  { url: "https://skillicons.dev/icons?i=npm", title: "NPM" },
  { url: "https://skillicons.dev/icons?i=postman", title: "Postman" },
];

export const pluginDevelopment: Tech[] = [
  { url: "https://skillicons.dev/icons?i=java", title: "Java" },
  {
    url: "",
    src: "/spigotmc.svg",
    title: "Spigot",
    href: "https://www.spigotmc.org/",
  },
  {
    url: "",
    src: "/papermc.svg",
    title: "PaperMC",
    href: "https://papermc.io/",
  },
  {
    url: "https://skillicons.dev/icons?i=idea",
    title: "IntelliJ",
    href: "https://www.jetbrains.com/idea/",
  },
  {
    url: "https://skillicons.dev/icons?i=maven",
    title: "Maven",
    href: "https://maven.apache.org/",
  },
  {
    url: "https://skillicons.dev/icons?i=jenkins",
    title: "Jenkins",
    href: "https://hub.spigotmc.org/jenkins/job/BuildTools/",
  },
];

export const experiences: ExperienceCardProps[] = [
  {
    title: "Freelance Developer — Upwork",
    date: "2021 — PRESENT",
    descriptions: [
      "I work as a freelancer on Upwork, delivering development services across web, mobile, and Minecraft server projects.",
      "I’ve collaborated with clients and teams on a wide range of tasks, including custom plugin creation, game feature implementation, full-stack web development, and mobile app builds.",
      "Through these projects, I’ve gained valuable experience in adapting to different workflows, meeting client expectations, and delivering reliable, efficient solutions in both independent and team-based environments.",
    ],
  },
  {
    title: "Software Developer Intern",
    date: "FEB — MAY 2025",
    descriptions: [
      "I worked as an intern at the Office of Civil Defense Caraga, where I developed three internal systems aimed at improving their operational efficiency.",
      "During my internship, I was responsible for designing, building, and deploying these systems from the ground up, which included features for data management, task tracking, and emergency coordination.",
      "This experience allowed me to apply my skills in full-stack development while contributing to meaningful solutions in a government setting. It also strengthened my ability to work independently, manage time effectively, and deliver practical tools under real-world requirements.",
    ],
  },
  {
    title: "Contract Developer",
    date: "JAN — OCT 2024",
    descriptions: [
      "I worked as a contract developer at Hydreon, collaborating with other contract developers to convert Minecraft Bedrock Edition gamemodes written in PHP into Java for the Java Edition.",
      "My role involved analyzing and translating gameplay mechanics, systems, and logic while preserving the intended player experience across platforms. This required a deep understanding of both Bedrock and Java Minecraft architectures.",
      "Working closely with the team, I helped ensure smooth transitions, consistent functionality, and improved performance. This experience sharpened my skills in game logic translation, platform-specific optimization, and collaborative problem-solving.",
    ],
  },
  {
    title: "Lead Minecraft Developer",
    date: "DEC 2022 — JUNE 2023",
    descriptions: [
      "I was the sole Minecraft developer in a 7-person startup working on a unique tournament project that aimed to broadcast Minecraft gameplay via satellite to be viewed from space.",
      "Handling all aspects of the Minecraft side alone—server setup, plugin development, and optimization—was both challenging and rewarding.",
      "I faced and solved many technical issues independently, gaining valuable experience in server management, real-time gameplay systems, and problem-solving under pressure.",
    ],
  },
];

export const projects: ProjectCardProps[] = [
  {
    title: "DentWise",
    description:
      "An AI-powered dental assistant platform that streamlines appointment booking while providing intelligent voice-based consultations for dental inquiries, oral health guidance, and DentWise services, enhancing patient engagement, accessibility, and overall dental care experience.",
    thumbnail: "/dentwise1.png",
    techs: [
      "NextJS",
      "Typescript",
      "Tailwind",
      "Shadcn",
      "TanStack Query",
      "Prisma",
      "Clerk",
      "Vapi AI",
      "PostgreSQL",
      "Vercel",
    ],
    url: "https://dentwise-gamma-nine.vercel.app",
  },
  {
    title: "Medico Realty App",
    description:
      "A comprehensive real estate management system that consolidates client data, financial records, and documentation into a single platform, improving accuracy, transparency, and workflow efficiency for realty businesses.",
    thumbnail: "/realty1.png",
    techs: ["NextJS", "Typescript", "Tailwind", "Shadcn", "MySQL"],
  },
  {
    title: "Office of Civil Defense Caraga — Document Tracking",
    description:
      "A tool to track, manage, and monitor documents in real-time, ensuring transparency and faster processing within the Office of Civil Defense Caraga.",
    thumbnail: "/dtr1.png",
    techs: ["Svelte", "Typescript", "Tailwind"],
  },
  {
    title: "Office of Civil Defense Caraga — Records",
    description:
      "A centralized system for organizing, storing, and retrieving official records, designed to enhance efficiency, security, and accessibility within the Office of Civil Defense Caraga.",
    thumbnail: "/records1.png",
    techs: ["NextJS", "Typescript", "Tailwind", "MySQL"],
  },
  {
    title: "Butuan Legal Access",
    description:
      "A thesis-based mobile app that helps users locate nearby law firms and directly connect with lawyers in Butuan City for faster and easier legal assistance.",
    thumbnail: "/legalaccess1.png",
    techs: [
      "React Native Expo",
      "Typescript",
      "Tailwind",
      "Supabase",
      "Google API",
    ],
  },
  {
    title: "Beyond Breeds",
    description:
      "A thesis-based mobile app that connects aspiring pet owners with nearby shelters, making pet adoption easier, faster, and more accessible.",
    thumbnail: "/breeds1.png",
    techs: [
      "React Native Expo",
      "Typescript",
      "Tailwind",
      "Supabase",
      "Google API",
    ],
  },
  {
    title: "Museu de Cabadbaran",
    description:
      "A thesis-based mobile app that uses image classification to scan and identify museum artifacts, providing users with instant historical information and context.",
    thumbnail: "/museu1.png",
    techs: [
      "React Native Expo",
      "Typescript",
      "Tailwind",
      "Supabase",
      "TensorFlow.js",
    ],
  },
];
