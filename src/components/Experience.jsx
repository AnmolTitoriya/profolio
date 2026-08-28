import Reveal from './Reveal'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-10">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-rust">Experience</h2>
      </Reveal>

      <div className="mt-8 flex flex-col gap-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80}>
            <div className="rounded-xl border border-neutral-900/10 bg-neutral-900/5 p-6">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-xl font-semibold text-neutral-900">{job.title}</h3>
                <span className="text-sm text-neutral-500">{job.period}</span>
              </div>
              <p className="mt-1 font-medium text-rust">{job.company}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-neutral-700">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <span key={tech} className="rounded-md bg-rust/10 px-2.5 py-1 text-xs text-rust">
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
