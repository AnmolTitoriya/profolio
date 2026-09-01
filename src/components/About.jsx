import Reveal from './Reveal'

export default function About({ profile }) {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-10">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-rust">About</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">{profile.about}</p>

        <h3 className="mt-8 text-sm font-semibold text-neutral-900">What I focus on</h3>
        <ul className="mt-3 grid max-w-2xl gap-2 sm:grid-cols-2">
          {profile.focusAreas.map((item) => (
            <li key={item} className="flex gap-2 text-neutral-700">
              <span className="text-rust" aria-hidden="true">
                &bull;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
