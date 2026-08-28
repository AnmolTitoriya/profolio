export default function Skills({ skills }) {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
