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
              {(project.repoUrl || project.liveUrl) && (
                <div className="mt-auto flex gap-4 pt-2 text-sm">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-rust">
                      Code &rarr;
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-rust">
                      Live &rarr;
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
