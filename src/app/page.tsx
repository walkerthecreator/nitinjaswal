import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile, projects, skills, workExperiences } from "@/data/portfolio";

const contactLinks = [
  { label: "Email", href: profile.links.email, external: false },
  { label: "GitHub", href: profile.links.github, external: true },
  { label: "X / Twitter", href: profile.links.x, external: true },
  { label: "Book a call", href: profile.links.calendar, external: true },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[minmax(380px,0.84fr)_minmax(0,1.16fr)] lg:items-start dark:bg-stone-950 dark:text-stone-100">
      <aside className="border-b border-border bg-background dark:border-stone-800 dark:bg-stone-950 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:border-b-0 lg:border-r">
        <div className="mx-auto min-h-screen w-full max-w-2xl px-6 pb-32 pt-12 sm:px-10 sm:pt-16 lg:flex lg:h-full lg:min-h-0 lg:max-w-none lg:flex-col lg:px-[clamp(2rem,4vw,5rem)] lg:pb-24 lg:pt-[clamp(1.25rem,4vh,3rem)]">
          <header className="mb-16 flex flex-col items-start sm:mb-20 lg:mb-[clamp(0.75rem,3vh,2rem)]">
            <h1 className="text-sm font-semibold leading-snug tracking-[-0.01em] text-foreground dark:text-stone-100">{profile.name}</h1>
            <p className="text-sm leading-snug text-muted-foreground dark:text-stone-400">{profile.role}</p>
          </header>

          <section aria-labelledby="profile-heading" className="max-w-lg">
            <h2 id="profile-heading" className="mb-3 text-sm font-medium text-foreground dark:text-stone-100">Today</h2>
            <p className="text-[13px] leading-[1.6] text-muted-foreground dark:text-stone-400">{profile.summary}</p>
          </section>

          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20 lg:mt-[clamp(0.75rem,2.5vh,2rem)] lg:space-y-[clamp(0.75rem,2.5vh,2rem)]">
            <section aria-labelledby="experience-heading">
              <h2 id="experience-heading" className="mb-4 text-sm font-medium text-foreground dark:text-stone-100 lg:mb-[clamp(0.4rem,1.3vh,0.9rem)]">Experience</h2>

              <ol className="space-y-4 lg:space-y-[clamp(0.3rem,1vh,0.75rem)]">
                {workExperiences.map((work) => (
                  <li key={`${work.title}-${work.date}`} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-5">
                    <span className="min-w-0 text-xs leading-[1.35] text-foreground dark:text-stone-200 sm:text-[13px]">
                      <span className="block truncate">{work.title}</span>
                      {work.company && <span className="mt-0.5 block truncate text-[10px] text-muted-foreground dark:text-stone-500">{work.company}</span>}
                    </span>
                    <span className="max-w-28 text-right text-[10px] leading-[1.45] text-muted-foreground dark:text-stone-500 sm:max-w-none sm:text-[11px]">{work.date}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="stack-heading">
              <h2 id="stack-heading" className="mb-4 text-sm font-medium text-foreground dark:text-stone-100 lg:mb-[clamp(0.4rem,1.3vh,0.9rem)]">Working stack</h2>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-[clamp(0.4rem,1.2vh,0.9rem)]">
                {skills.map((skill) => (
                  <li key={skill.title} className="flex min-w-0 items-center gap-2.5">
                    <Image
                      src={`/${skill.icon}`}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 shrink-0 object-contain"
                    />
                    <span className="truncate text-[11px] leading-none text-muted-foreground dark:text-stone-400">{skill.title}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <footer className="mt-16 sm:mt-20 lg:mt-auto lg:pt-[clamp(0.5rem,1.5vh,1.25rem)]">
            <h2 className="mb-3 text-sm font-medium text-foreground dark:text-stone-100">More</h2>
            <nav aria-label="Contact links" className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-muted-foreground dark:text-stone-400">
              {contactLinks.map((contact) => {
                return (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    aria-label={contact.label}
                    className="border-b border-current pb-px transition-colors hover:text-foreground dark:hover:text-stone-100"
                  >
                    {contact.label}
                  </Link>
                );
              })}
            </nav>
          </footer>
        </div>
      </aside>

      <section id="projects" aria-labelledby="projects-heading" className="min-w-0 bg-background px-5 pb-28 pt-8 dark:bg-stone-950 sm:px-10 lg:px-[clamp(2rem,5vw,5rem)] lg:pt-[clamp(2rem,5vh,4rem)]">
        <header className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-5 dark:border-stone-800">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground dark:text-stone-500">Selected work / {projects.length}</p>
            <h2 id="projects-heading" className="mt-2 font-display text-5xl font-medium tracking-[-0.035em] sm:text-6xl">
              Projects
            </h2>
          </div>
          <p className="hidden max-w-[210px] text-right text-xs leading-relaxed text-muted-foreground dark:text-stone-500 sm:block">
            Product engineering across web platforms, AI, and focused digital experiences.
          </p>
        </header>

        <div>
          {projects.map((project, index) => (
            <article key={project.title} className="group border-b border-border py-10 first:pt-0 dark:border-stone-800 lg:py-14">
              <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_220px] xl:items-start">
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground dark:text-stone-500">
                    <span>P{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.badge}</span>
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted dark:border-stone-800 dark:bg-stone-900">
                    <Image
                      src={project.photo}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(min-width: 1280px) 420px, (min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30" />
                  </div>
                </div>

                <div className="xl:pt-9">
                  <h3 className="font-display text-2xl font-medium leading-none tracking-[-0.025em]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.65] text-muted-foreground dark:text-stone-400">{project.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-[9px] font-medium uppercase tracking-wide text-muted-foreground dark:text-stone-500">
                    {project.tech.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  {project.live ? (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-xs font-medium transition-colors hover:bg-foreground hover:text-background dark:border-stone-200 dark:hover:bg-stone-100 dark:hover:text-stone-950"
                    >
                      View project
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ) : (
                    <p className="mt-7 text-[9px] font-medium uppercase tracking-[0.14em] text-muted-foreground dark:text-stone-600">Private / In progress</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="py-16 text-center">
          <p className="font-display text-2xl font-medium tracking-tight">Have something interesting in mind?</p>
          <Link href={profile.links.email} className="mt-4 inline-flex items-center gap-2 border-b border-foreground pb-1 text-xs dark:border-stone-200">
            Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </footer>
      </section>
    </main>
  );
}
