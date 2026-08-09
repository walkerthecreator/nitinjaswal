import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Github, Mail, Twitter } from "lucide-react";
import { instrumentSerif } from "@/lib/font";
import { profile, projects, skills, workExperiences } from "@/data/portfolio";

const contactLinks = [
  { label: "Email", href: profile.links.email, icon: Mail, external: false },
  { label: "GitHub", href: profile.links.github, icon: Github, external: true },
  { label: "X", href: profile.links.x, icon: Twitter, external: true },
  { label: "Call", href: profile.links.calendar, icon: Calendar, external: true },
];

function IsometricMark() {
  return (
    <div aria-hidden="true" className="absolute right-8 top-8 hidden h-16 w-20 opacity-70 sm:block">
      <span className="absolute left-6 top-0 h-9 w-9 rotate-[30deg] skew-x-[-30deg] border border-[#9a9c91] bg-[#d9dbd2]" />
      <span className="absolute left-1 top-5 h-9 w-9 rotate-[30deg] skew-x-[-30deg] border border-[#9a9c91] bg-[#ecece6]" />
      <span className="absolute left-11 top-6 h-9 w-9 rotate-[30deg] skew-x-[-30deg] border border-[#9a9c91] bg-[#c9ff45]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4ef] text-[#181914] lg:grid lg:grid-cols-[minmax(360px,0.88fr)_minmax(0,1.12fr)] lg:items-start">
      <aside className="relative border-b border-[#c8c9c0] bg-[#e6e7df] lg:sticky lg:top-0 lg:h-dvh lg:overflow-hidden lg:border-b-0 lg:border-r">
        <IsometricMark />

        <div className="relative flex min-h-screen flex-col gap-[clamp(0.8rem,1.8vh,1.35rem)] px-6 pb-24 pt-8 sm:px-10 lg:h-full lg:min-h-0 lg:px-[clamp(2rem,4vw,4.5rem)] lg:py-[clamp(1.5rem,3vh,3rem)] lg:pb-24">
          <header className="max-w-lg pr-16">
            <div className="mb-[clamp(0.7rem,1.5vh,1.2rem)] flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#62645c]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Available for new work
            </div>
            <h1 className={`${instrumentSerif.className} text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.86] tracking-[-0.04em]`}>
              {profile.name}
            </h1>
            <p className="mt-[clamp(0.6rem,1.3vh,1rem)] text-sm font-medium">{profile.role}</p>
            <p className="mt-2 max-w-md text-[12px] leading-[1.55] text-[#62645c] sm:text-[13px]">
              {profile.summary}
            </p>
          </header>

          <section aria-labelledby="experience-heading" className="min-h-0">
            <div className="mb-2 flex items-center justify-between border-b border-[#c8c9c0] pb-2">
              <h2 id="experience-heading" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#62645c]">
                Experience
              </h2>
              <span className="font-mono text-[9px] text-[#81837a]">2022—NOW</span>
            </div>

            <ol className="divide-y divide-[#ced0c7]">
              {workExperiences.map((work) => (
                <li key={`${work.title}-${work.date}`} className="grid grid-cols-[78px_1fr] gap-3 py-[clamp(0.32rem,0.8vh,0.6rem)]">
                  <span className="font-mono text-[9px] leading-[1.35] text-[#777970]">{work.date}</span>
                  <span>
                    <span className="block text-[11px] font-semibold leading-tight sm:text-xs">{work.title}</span>
                    {work.company && <span className="mt-0.5 block text-[10px] text-[#777970]">{work.company}</span>}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="stack-heading">
            <div className="mb-2 flex items-center justify-between border-b border-[#c8c9c0] pb-2">
              <h2 id="stack-heading" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#62645c]">
                Working stack
              </h2>
              <span className="font-mono text-[9px] text-[#81837a]">{skills.length} TOOLS</span>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <li key={skill.title} className="rounded-full border border-[#c3c5bb] bg-[#eeefe9] px-2.5 py-1 text-[10px] text-[#55574f]">
                  {skill.title}
                </li>
              ))}
            </ul>
          </section>

          <footer className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-[#c8c9c0] pt-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#81837a]">Education</p>
              <p className="mt-1 text-[11px] font-medium">{profile.education.degree}</p>
              <p className="text-[10px] text-[#777970]">{profile.education.years}</p>
            </div>
            <div className="flex items-center gap-1">
              {contactLinks.map((contact) => {
                const Icon = contact.icon;

                return (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    aria-label={contact.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#bfc1b7] text-[#62645c] transition-colors hover:border-[#181914] hover:bg-[#181914] hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </footer>
        </div>
      </aside>

      <section id="projects" aria-labelledby="projects-heading" className="min-w-0 bg-[#f4f4ef] px-5 pb-28 pt-8 sm:px-10 lg:px-[clamp(2rem,5vw,5rem)] lg:pt-[clamp(2rem,5vh,4rem)]">
        <header className="mb-12 flex items-end justify-between gap-6 border-b border-[#cfd0c8] pb-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777970]">Selected work / {projects.length}</p>
            <h2 id="projects-heading" className={`${instrumentSerif.className} mt-2 text-5xl tracking-[-0.03em] sm:text-6xl`}>
              Projects
            </h2>
          </div>
          <p className="hidden max-w-[210px] text-right text-xs leading-relaxed text-[#777970] sm:block">
            Product engineering across web platforms, AI, and focused digital experiences.
          </p>
        </header>

        <div>
          {projects.map((project, index) => (
            <article key={project.title} className="group border-b border-[#cfd0c8] py-10 first:pt-0 lg:py-14">
              <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_220px] xl:items-start">
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777970]">
                    <span>P{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.badge}</span>
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[#c4c6bd] bg-[#dedfd7]">
                    <Image
                      src={project.photo}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(min-width: 1280px) 420px, (min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top grayscale transition duration-500 group-hover:scale-[1.015] group-hover:grayscale-0"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30" />
                  </div>
                </div>

                <div className="xl:pt-9">
                  <h3 className={`${instrumentSerif.className} text-3xl leading-none tracking-[-0.025em]`}>
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.65] text-[#686a62]">{project.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[9px] uppercase tracking-wide text-[#777970]">
                    {project.tech.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  {project.live ? (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#181914] px-4 py-2 text-xs font-medium transition-colors hover:bg-[#181914] hover:text-white"
                    >
                      View project
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ) : (
                    <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.14em] text-[#92948b]">Private / In progress</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="py-16 text-center">
          <p className={`${instrumentSerif.className} text-3xl`}>Have something interesting in mind?</p>
          <Link href={profile.links.email} className="mt-4 inline-flex items-center gap-2 border-b border-[#181914] pb-1 text-xs">
            Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </footer>
      </section>
    </main>
  );
}
