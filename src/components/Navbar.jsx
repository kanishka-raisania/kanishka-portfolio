import { useEffect, useState } from 'react'
import { profile } from '../data'

const LINKS = [
  ['about', '#about'],
  ['work', '#experience'],
  ['projects', '#projects'],
  ['skills', '#skills'],
  ['contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // scroll-spy: highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = LINKS.map(([, href]) => document.getElementById(href.slice(1))).filter(Boolean)
    if (!sections.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <a href="#top" className="logo" onClick={() => setOpen(false)}>
        kanishka<b>.dev</b>
      </a>

      <div className="nav-links">
        {LINKS.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={active === href ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>

      <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">
        resume ↓
      </a>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? '✕' : '☰'}
      </button>
    </nav>
  )
}
