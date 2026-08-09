import type { Metadata } from "next";
import Link from "next/link";
import { profile, projects, skills, workExperiences } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Agent View | Nitin Jaswal",
  description:
    "A structured, text-first version of Nitin Jaswal's portfolio for AI agents and low-bandwidth clients.",
  alternates: {
    canonical: "https://nitinjaswal.me/agent",
    types: {
      "text/plain": "https://nitinjaswal.me/llms.txt",
    },
  },
};

function ExpandedLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block w-fit break-all text-[#f6f6f6] hover:underline hover:decoration-[#ff6b35]"
    >
      <span>[{children}]</span>
      <span aria-hidden="true" className="ml-1 text-[#737373] group-hover:text-[#adadac]">
        ({href})
      </span>
    </Link>
  );
}

function DocumentSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-x border-b border-[#434343] px-6 py-6 ${className}`}>
      {children}
    </section>
  );
}

export default function AgentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    url: "https://nitinjaswal.me",
    sameAs: [profile.links.github, profile.links.x],
    alumniOf: profile.education.degree,
    knowsAbout: skills.map((skill) => skill.title),
  };

  return (
    <main className="min-h-screen bg-[#101010] pb-28 pt-6 font-mono text-[13px] font-normal leading-[1.45] text-[#adadac] selection:bg-[#d6d2c8] selection:text-[#101010]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="mx-auto w-[calc(100%-48px)] max-w-[640px]">
        <DocumentSection className="border-t">
          <p className="text-[#737373]">Agent-readable portfolio</p>
          <div className="mt-4 space-y-1">
            <ExpandedLink href="/">Human portfolio</ExpandedLink>
            <ExpandedLink href="/projects">Projects</ExpandedLink>
            <ExpandedLink href="/about">About</ExpandedLink>
            <ExpandedLink href="/llms.txt">Raw text / llms.txt</ExpandedLink>
          </div>
        </DocumentSection>

        <DocumentSection>
          <h1 className="text-[13px] font-normal text-[#f6f6f6]"># {profile.name}</h1>
          <p className="mt-4">{profile.role}</p>
          <p className="mt-4">{profile.summary}</p>
          <p className="mt-4 text-[#f6f6f6]">Availability: {profile.availability}</p>
          <p className="mt-4">
            Education: {profile.education.degree} ({profile.education.years})
          </p>
        </DocumentSection>

        <DocumentSection>
          <h2 className="text-[13px] font-normal text-[#f6f6f6]">## Skills</h2>
          <ul className="mt-4 space-y-1">
            {skills.map((skill) => (
              <li key={skill.title}>- {skill.title}</li>
            ))}
          </ul>
        </DocumentSection>

        <DocumentSection>
          <h2 className="text-[13px] font-normal text-[#f6f6f6]">## Experience</h2>
          <div className="mt-4 space-y-6">
            {workExperiences.map((work) => (
              <section key={`${work.title}-${work.date}`}>
                <h3 className="text-[13px] font-normal text-[#f6f6f6]">### {work.title}</h3>
                <p>{[work.company, work.date].filter(Boolean).join(" | ")}</p>
                {work.points && (
                  <ul className="mt-2 space-y-1">
                    {work.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </DocumentSection>

        <DocumentSection>
          <h2 className="text-[13px] font-normal text-[#f6f6f6]">## Projects</h2>
          <div className="mt-4 space-y-6">
            {projects.map((project) => (
              <section key={project.title}>
                <h3 className="text-[13px] font-normal text-[#f6f6f6]">### {project.title}</h3>
                <p>- Type: {project.badge}</p>
                <p>- Summary: {project.description}</p>
                <p>- Stack: {project.tech.join(", ")}</p>
                {project.live ? (
                  <div className="mt-1">
                    <ExpandedLink href={project.live} external>
                      Live project
                    </ExpandedLink>
                  </div>
                ) : (
                  <p>- Status: No public URL available</p>
                )}
              </section>
            ))}
          </div>
        </DocumentSection>

        <DocumentSection>
          <h2 className="text-[13px] font-normal text-[#f6f6f6]">## Contact</h2>
          <div className="mt-4 space-y-1">
            <ExpandedLink href={profile.links.email}>Email</ExpandedLink>
            <ExpandedLink href={profile.links.github} external>
              GitHub
            </ExpandedLink>
            <ExpandedLink href={profile.links.x} external>
              X / Twitter
            </ExpandedLink>
            <ExpandedLink href={profile.links.calendar} external>
              Schedule a call
            </ExpandedLink>
          </div>
        </DocumentSection>

        <footer className="border-x border-b border-[#434343] px-6 py-6 text-[#737373]">
          End of document.
        </footer>
      </article>
    </main>
  );
}
