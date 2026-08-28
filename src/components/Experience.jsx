import Reveal from './Reveal'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Experience</h2>
      </Reveal>

      <div className="mt-8 flex flex-col gap-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                <span className="text-sm text-slate-400">{job.period}</span>
              </div>
              <p className="mt-1 font-medium text-cyan-300">{job.company}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-slate-300">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <span key={tech} className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
