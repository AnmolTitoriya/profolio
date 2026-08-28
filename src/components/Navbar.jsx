const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ name }) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/10 bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold text-neutral-900">
          {name}
        </a>
        <ul className="flex gap-6 text-sm text-neutral-700">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-rust">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
