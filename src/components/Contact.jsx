import ContactForm from './ContactForm'
import Reveal from './Reveal'

export default function Contact({ profile }) {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Contact</h2>
        <h3 className="mt-4 text-3xl font-bold text-white">Let's work together.</h3>
        <p className="mt-4 max-w-xl text-slate-300">
          I'm open to new opportunities and interesting projects. Reach out directly or send a message below.
        </p>

        <div className="mt-6 flex flex-col gap-2 text-slate-300">
          <a href={`mailto:${profile.email}`} className="w-fit hover:text-white">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="w-fit hover:text-white">
            {profile.phone}
          </a>
        </div>

        <div className="mt-4 flex gap-6 text-sm text-slate-300">
          {profile.social.linkedin && (
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          )}
          {profile.social.github && (
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
          )}
        </div>

        <ContactForm email={profile.email} />
      </Reveal>
    </section>
  )
}
