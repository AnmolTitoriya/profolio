export default function Hero({ profile }) {
  return (
    <section id="home" className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 pb-24 pt-20">
      <p className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-cyan-300">
        {profile.title}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Hi, I'm {profile.name.split(' ')[0]}.
      </h1>
      <p className="max-w-xl text-lg text-slate-300">{profile.tagline}</p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#contact"
          className="rounded-lg bg-cyan-400 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-300"
        >
          Contact Me
        </a>
        <a
          href={profile.resumeUrl}
          download
          className="rounded-lg border border-white/20 px-5 py-2.5 font-medium text-white transition hover:bg-white/10"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
