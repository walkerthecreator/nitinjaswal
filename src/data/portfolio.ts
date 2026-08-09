export type WorkExperience = {
  title: string;
  date: string;
  company?: string;
  points?: string[];
};

export type Project = {
  title: string;
  badge: string;
  photo: string;
  description: string;
  tech: string[];
  live?: string;
};

export const profile = {
  name: "Nitin Jaswal",
  role: "Software / Full Stack Engineer",
  summary:
    "Software and full stack engineer focused on crafting meaningful products and thoughtful user experiences. Currently exploring app development and generative AI while continuing to build across the web stack.",
  availability:
    "Open to freelance, part-time, collaborative, and full-time opportunities.",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    years: "2019 - 2023",
  },
  links: {
    email: "mailto:nitinjaswal2616@gmail.com",
    github: "https://github.com/walkerthecreator",
    x: "https://x.com/nitinjaswal26",
    calendar: "https://cal.com/nitinjaswal/30min",
  },
};

export const skills = [
  { icon: "typescript.svg", title: "TypeScript" },
  { icon: "langchain.svg", title: "LangChain" },
  { icon: "next.svg", title: "Next.js" },
  { icon: "react.svg", title: "React / React Native" },
  { icon: "redux.svg", title: "Redux" },
  { icon: "tailwindcss.svg", title: "Tailwind CSS" },
  { icon: "nodejs.svg", title: "Node.js" },
  { icon: "sst.svg", title: "SST" },
  { icon: "redis.svg", title: "Redis" },
  { icon: "docker.svg", title: "Docker" },
  { icon: "postgresql.svg", title: "PostgreSQL" },
  { icon: "git.svg", title: "Git" },
];

export const workExperiences: WorkExperience[] = [
  {
    title: "Freelance Full Stack Developer",
    date: "March 2025 - Present",
  },
  {
    title: "Full Stack Engineer",
    date: "September 2024 - March 2025",
    company: "Blockchain startup",
    points: [
      "Developed a whitelabel solution for offsetting carbon emissions with seamless integrations.",
      "Enabled real-time updates through configurable webhooks and callback mechanisms.",
      "Architected rate limiting, caching, and autoscaling mechanisms.",
    ],
  },
  {
    title: "Full Stack Engineer",
    date: "June 2023 - June 2024",
    company: "Service-based company",
    points: [
      "Built an image annotation tool for creating tractor annotations for New Holland.",
      "Used Node.js, MySQL, and Fabric.js as the core technology stack.",
      "Helped build and integrate a real-time monitoring system with Node.js and WebSockets.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    date: "January 2023 - June 2023",
    points: [
      "Revamped interfaces and improved user experience across client web applications.",
      "Contributed to applications using JavaScript, jQuery, CSS, HTML, and MySQL.",
      "Implemented backend functionality with Node.js and Express.js.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    date: "June 2022 - November 2023",
  },
];

export const projects: Project[] = [
  {
    title: "AI Interview Prep",
    badge: "Full stack",
    photo: "/images/interview.png",
    description: "A generative AI interview practice platform currently in development.",
    tech: ["Next.js", "Gemini", "PostgreSQL", "shadcn/ui", "Stripe"],
  },
  {
    title: "RateMyPG",
    badge: "Full stack",
    photo: "/images/ratemypg.png",
    live: "https://ratemypg-gamma.vercel.app",
    description:
      "A Next.js platform for discovering and anonymously reviewing PG accommodations. It uses server-side rendering, caching, debounced search, and NextAuth with JWT and OAuth authentication.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "Skulltrooper",
    badge: "Landing page",
    photo: "/images/skulltrooper.png",
    live: "https://skulltrooper.in",
    description:
      "A focused landing page built with HTML and Tailwind CSS, with Formik-powered forms for reliable lead capture.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Indian Spokesman",
    badge: "Full stack",
    photo: "/images/indian.png",
    description:
      "A Canadian-market news publishing platform built from scratch with server-side rendering, debounced input, pagination, responsive layouts, and VPS deployment.",
    tech: ["Node.js", "EJS", "MongoDB", "Tailwind CSS"],
  },
];

export function getAgentMarkdown() {
  const experience = workExperiences
    .map((work) => {
      const heading = `### ${work.title}`;
      const details = [work.company, work.date].filter(Boolean).join(" | ");
      const points = work.points?.map((point) => `- ${point}`).join("\n");

      return [heading, details, points].filter(Boolean).join("\n");
    })
    .join("\n\n");

  const projectList = projects
    .map((project) =>
      [
        `### ${project.title}`,
        `- Type: ${project.badge}`,
        `- Summary: ${project.description}`,
        `- Stack: ${project.tech.join(", ")}`,
        project.live ? `- Live: ${project.live}` : "- Status: No public URL available",
      ].join("\n"),
    )
    .join("\n\n");

  return `# ${profile.name}

> Canonical, text-first portfolio for AI agents and low-bandwidth clients.

## Profile

- Role: ${profile.role}
- Summary: ${profile.summary}
- Availability: ${profile.availability}
- Education: ${profile.education.degree}, ${profile.education.years}

## Skills

${skills.map((skill) => `- ${skill.title}`).join("\n")}

## Experience

${experience}

## Projects

${projectList}

## Contact

- Email: ${profile.links.email.replace("mailto:", "")}
- GitHub: ${profile.links.github}
- X / Twitter: ${profile.links.x}
- Schedule: ${profile.links.calendar}

## Canonical pages

- Portfolio: https://nitinjaswal.me
- Projects: https://nitinjaswal.me/projects
- About: https://nitinjaswal.me/about
- Agent view: https://nitinjaswal.me/agent
`;
}
