import ContactForm from './ContactForm'
import Reveal from './Reveal'

export default function Contact({ profile }) {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-12">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-rust">Contact</h2>
        <h3 className="mt-4 text-3xl font-bold text-neutral-900">Get in touch.</h3>
        <p className="mt-4 max-w-xl text-neutral-700">
          Have a role, project, or idea you'd like to discuss? Reach out directly or send a message below.
        </p>

        <div className="mt-6 flex flex-col gap-2 text-neutral-700">
          <a
            href={`mailto:${profile.email}`}
            className="w-fit rounded hover:text-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="w-fit rounded hover:text-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-4 flex gap-6 text-sm text-neutral-700">
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded hover:text-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
            >
              LinkedIn
            </a>
          )}
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded hover:text-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
            >
              GitHub
            </a>
          )}
        </div>

        <ContactForm email={profile.email} />
      </Reveal>
    </section>
  )
}
