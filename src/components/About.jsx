import Reveal from './Reveal'

export default function About({ profile }) {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-rust">About</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">{profile.about}</p>
      </Reveal>
    </section>
  )
}
