export default function Contact({ profile }) {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Contact</h2>
      <h3 className="mt-4 text-3xl font-bold text-white">Let's work together.</h3>
      <p className="mt-4 max-w-xl text-slate-300">
        I'm open to new opportunities and interesting projects. The best way to reach me is email.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-lg bg-cyan-400 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-300"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex gap-6 text-sm text-slate-300">
        {profile.social.github && (
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
        )}
        {profile.social.linkedin && (
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        )}
        {profile.social.twitter && (
          <a href={profile.social.twitter} target="_blank" rel="noreferrer" className="hover:text-white">
            Twitter
          </a>
        )}
      </div>
    </section>
  )
}
