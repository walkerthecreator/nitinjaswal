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
      <aside className="scroll-thin border-b border-border bg-background dark:border-stone-800 dark:bg-stone-950 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:overscroll-contain lg:border-b-0 lg:border-r lg:motion-safe:scroll-smooth">
        <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-7 pb-24 pt-14 sm:px-10 sm:pt-16 lg:min-h-full lg:max-w-none lg:px-12 lg:pb-[clamp(1.625rem,3.5vh,3rem)] lg:pt-[clamp(1.875rem,4vh,3.25rem)] xl:px-16 2xl:px-20">
          <header className="mb-14 flex flex-col items-start sm:mb-16 lg:mb-[clamp(1.625rem,3.8vh,3rem)]">
            <h1 className="text-base font-medium leading-snug tracking-[-0.015em] text-foreground dark:text-stone-100">{profile.name}</h1>
            <p className="mt-1 text-sm leading-snug text-muted-foreground dark:text-stone-400">{profile.role}</p>
          </header>

          <section aria-labelledby="profile-heading" className="max-w-lg">
            <h2 id="profile-heading" className="mb-3.5 text-sm font-medium tracking-[-0.01em] text-foreground dark:text-stone-100">Today</h2>
            <p className="text-[13.5px] leading-[1.7] text-muted-foreground dark:text-stone-400">{profile.summary}</p>
          </section>

          <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16 lg:mt-[clamp(1.5rem,3.3vh,2.75rem)] lg:space-y-[clamp(1.5rem,3.3vh,2.75rem)]">
            <section aria-labelledby="experience-heading">
              <h2 id="experience-heading" className="mb-1 text-sm font-medium tracking-[-0.01em] text-foreground dark:text-stone-100">Experience</h2>

              <ol className="divide-y divide-border/60 dark:divide-stone-800/70">
                {workExperiences.map((work) => {
                  const isPresent = /present/i.test(work.date);

                  return (
                    <li
                      key={`${work.title}-${work.date}`}
                      className="grid gap-y-1.5 py-[clamp(0.5rem,1.15vh,0.9rem)] last:pb-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-6 sm:gap-y-0"
                    >
                      <div className="min-w-0">
                        <div className="flex min-w-0 items-center gap-2">
                          <span className="truncate text-[13.5px] leading-snug text-foreground dark:text-stone-200">{work.title}</span>
                          {isPresent && (
                            <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                          )}
                        </div>
                        {work.company && (
                          <p className="mt-1.5 truncate text-[11.5px] leading-snug text-muted-foreground dark:text-stone-500">{work.company}</p>
                        )}
                      </div>
                      <span className="shrink-0 text-[11.5px] leading-snug text-muted-foreground dark:text-stone-500 sm:whitespace-nowrap sm:text-right">
                        {work.date}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </section>

            <section aria-labelledby="stack-heading">
              <h2 id="stack-heading" className="mb-5 text-sm font-medium tracking-[-0.01em] text-foreground dark:text-stone-100 lg:mb-[clamp(0.75rem,1.9vh,1.375rem)]">Working stack</h2>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-[clamp(0.75rem,1.75vh,1.375rem)]">
                {skills.map((skill) => (
                  <li key={skill.title} className="flex min-w-0 items-center gap-2.5">
                    <Image
                      src={`/${skill.icon}`}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 shrink-0 object-contain"
                    />
                    <span className="truncate text-[12px] leading-none text-muted-foreground dark:text-stone-400">{skill.title}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <footer className="mt-14 sm:mt-16 lg:mt-auto lg:pt-[clamp(1.5rem,3.3vh,2.75rem)]">
            <h2 className="mb-3 text-sm font-medium tracking-[-0.01em] text-foreground dark:text-stone-100">More</h2>
            <nav aria-label="Contact links" className="flex flex-wrap gap-x-5 gap-y-2.5 text-[13px] text-muted-foreground dark:text-stone-400">
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

      <section id="projects" aria-labelledby="projects-heading" className="min-w-0 bg-background px-5 pb-16 pt-8 dark:bg-stone-950 sm:px-10 lg:px-[clamp(2rem,5vw,5rem)] lg:pt-[clamp(2rem,5vh,4rem)]">
        <header className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-5 dark:border-stone-800">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground dark:text-stone-500">Selected work</p>
            <h2 id="projects-heading" className="mt-2 font-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
              Projects
            </h2>
          </div>
          <p className="hidden max-w-[210px] text-right text-xs leading-relaxed text-muted-foreground dark:text-stone-500 sm:block">
            Product engineering across web platforms, AI, and focused digital experiences.
          </p>
        </header>

        <div>
          {projects.map((project) => (
            <article key={project.title} className="group border-b border-border py-10 first:pt-0 dark:border-stone-800 lg:py-14">
              <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_220px] xl:items-stretch">
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted ring-1 ring-border dark:bg-stone-900 dark:ring-stone-800">
                    <Image
                      src={project.photo}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(min-width: 1280px) 420px, (min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/[0.06] dark:ring-white/[0.07]" />
                  </div>
                </div>

                <div className="flex flex-col xl:h-full">
                  <h3 className="font-display text-base font-medium leading-snug tracking-[-0.02em]">
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
                      className="mt-7 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground dark:border-stone-800 dark:text-stone-400 dark:hover:border-stone-600 dark:hover:text-stone-100 xl:mt-auto"
                    >
                      View project
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ) : (
                    <p className="mt-7 text-[9px] font-medium uppercase tracking-[0.14em] text-muted-foreground dark:text-stone-600 xl:mt-auto">Private / In progress</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="pb-2 pt-16 text-center">
          <p className="font-display text-lg font-medium tracking-[-0.02em]">Have something interesting in mind?</p>
          <Link href={profile.links.email} className="mt-4 inline-flex items-center gap-2 border-b border-foreground pb-1 text-xs dark:border-stone-200">
            Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </footer>
      </section>
    </main>
  );
}
