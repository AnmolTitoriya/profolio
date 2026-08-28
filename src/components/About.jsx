export default function About({ profile }) {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-300">About</h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
        I'm a {profile.role.toLowerCase()} based in {profile.location}, focused on building software that's
        reliable, maintainable, and solves real problems. Replace this paragraph with a couple of sentences
        about your background, what you enjoy working on, and what makes you tick as an engineer.
      </p>
    </section>
  )
}
