export default function Footer({ name }) {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
      &copy; {new Date().getFullYear()} {name}. Built with React &amp; Tailwind.
    </footer>
  )
}
