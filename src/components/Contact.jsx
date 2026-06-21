import { useState } from 'react'
import { socials } from '../data'
import Reveal from './Reveal'
import { IconGithub, IconLinkedin, IconLeetcode, IconPhone } from './Icons'

export default function Contact() {
  const [toast, setToast] = useState('')

  const copyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard?.writeText(socials.email).then(
      () => {
        setToast('copied to clipboard 💖')
        setTimeout(() => setToast(''), 2200)
      },
      () => {
        window.location.href = `mailto:${socials.email}`
      },
    )
  }

  return (
    <section className="section contact" id="contact">
      <Reveal>
        <div className="eyebrow-label">say.hello</div>
        <h2 className="section-title">
          Let's <span className="accent">build something</span>
        </h2>
        <p className="section-intro">
          I'm open to roles and collaborations. Drop me a line — I'd love to hear from you.
        </p>

        <a className="contact-cta" href={`mailto:${socials.email}`} onClick={copyEmail}>
          {socials.email}
        </a>

        <div className="contact-socials">
          <a className="social-btn" href={socials.github} target="_blank" rel="noreferrer">
            <IconGithub /> GitHub
          </a>
          <a className="social-btn" href={socials.linkedin} target="_blank" rel="noreferrer">
            <IconLinkedin /> LinkedIn
          </a>
          <a className="social-btn" href={socials.leetcode} target="_blank" rel="noreferrer">
            <IconLeetcode /> LeetCode
          </a>
          <a className="social-btn" href={`tel:${socials.phone.replace(/\s/g, '')}`}>
            <IconPhone /> Call
          </a>
        </div>

        <div className="copy-toast">{toast}</div>
      </Reveal>
    </section>
  )
}
