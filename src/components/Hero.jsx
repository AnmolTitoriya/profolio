export default function Hero({ profile }) {
  return (
    <section id="home" className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 pb-12 pt-16">
      <p className="rounded-full border border-neutral-900/10 bg-neutral-900/5 px-4 py-1 text-sm text-rust">
        {profile.role}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
        Hi, I'm {profile.name.split(' ')[0]}.
      </h1>
      <p className="text-sm font-medium tracking-wide text-neutral-500">{profile.stack.join(' · ')}</p>
      <p className="max-w-xl text-lg text-neutral-700">{profile.tagline}</p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#projects"
          className="rounded-lg bg-rust px-5 py-2.5 font-medium text-cream transition hover:bg-rust/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
        >
          View My Work
        </a>
        <a
          href={`${import.meta.env.BASE_URL}${profile.resumeUrl}`}
          download
          className="rounded-lg border border-neutral-900/20 px-5 py-2.5 font-medium text-neutral-900 transition hover:bg-neutral-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-lg px-5 py-2.5 font-medium text-neutral-700 transition hover:text-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
