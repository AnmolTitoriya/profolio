export default function Projects({ projects }) {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-slate-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 pt-2 text-sm">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                  Code &rarr;
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                  Live &rarr;
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
