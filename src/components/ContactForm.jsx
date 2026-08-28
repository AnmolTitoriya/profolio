import { useState } from 'react'

const inputClasses =
  'rounded-lg border border-neutral-900/10 bg-neutral-900/5 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-500 outline-none transition focus:border-rust'

export default function ContactForm({ email }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex max-w-md flex-col gap-4">
      <input
        required
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        className={inputClasses}
      />
      <input
        required
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        className={inputClasses}
      />
      <textarea
        required
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows={4}
        className={inputClasses}
      />
      <button
        type="submit"
        className="rounded-lg bg-rust px-5 py-2.5 font-medium text-cream transition hover:bg-rust/90"
      >
        Send Message
      </button>
    </form>
  )
}
