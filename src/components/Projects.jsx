import Reveal from './Reveal'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-10">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-rust">Projects</h2>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article className="flex h-full flex-col gap-4 rounded-xl border border-neutral-900/10 bg-neutral-900/5 p-6 transition hover:border-rust/40">
              <h3 className="text-xl font-semibold text-neutral-900">{project.title}</h3>
              <p className="text-neutral-700">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-rust/10 px-2.5 py-1 text-xs text-rust">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-2 text-sm">
                {project.repoUrl || project.liveUrl ? (
                  <div className="flex gap-4">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-rust"
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97.01 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="live-link inline-block font-semibold">
                        Live
                      </a>
                    )}
                  </div>
                ) : (
                  project.note && <p className="italic text-neutral-500">{project.note}</p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
