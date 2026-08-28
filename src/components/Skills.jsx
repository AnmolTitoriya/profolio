import Reveal from './Reveal'

export default function Skills({ skillGroups }) {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Skills</h2>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <h3 className="mb-3 text-sm font-semibold text-white">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
