export default function Footer({ profile }) {
  return (
    <footer className="border-t border-neutral-900/10 px-6 py-8 text-center text-sm text-neutral-500">
      <div className="flex justify-center gap-6 pb-4 text-neutral-600">
        {profile.social.linkedin && (
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-rust">
            LinkedIn
          </a>
        )}
        {profile.social.github && (
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="hover:text-rust">
            GitHub
          </a>
        )}
        <a href={`mailto:${profile.email}`} className="hover:text-rust">
          Email
        </a>
      </div>
      &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
    </footer>
  )
}
