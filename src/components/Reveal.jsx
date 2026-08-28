import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
