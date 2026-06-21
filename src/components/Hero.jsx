import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, socials, terminalLines } from '../data'
import { IconDownload, IconGithub, IconLinkedin, IconLeetcode } from './Icons'
import Magnetic from './Magnetic'

const rise = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

function useRotatingRole(roles) {
  const [text, setText] = useState('')
  useEffect(() => {
    let ri = 0
    let ci = 0
    let deleting = false
    let timer
    const tick = () => {
      const word = roles[ri]
      setText(deleting ? word.slice(0, ci--) : word.slice(0, ci++))
      let delay = deleting ? 45 : 90
      if (!deleting && ci === word.length + 1) {
        deleting = true
        delay = 1300
      } else if (deleting && ci === 0) {
        deleting = false
        ri = (ri + 1) % roles.length
        delay = 200
      }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 1400)
    return () => clearTimeout(timer)
  }, [roles])
  return text
}

function Terminal() {
  const [shown, setShown] = useState(0)
  const doneRef = useRef(false)
  useEffect(() => {
    let timer
    let i = 0
    const step = () => {
      i += 1
      setShown(i)
      if (i < terminalLines.length) {
        timer = setTimeout(step, 320)
      } else {
        doneRef.current = true
      }
    }
    timer = setTimeout(step, 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div className="term" {...rise(0.55)}>
      <div className="term-bar">
        <i className="r" />
        <i className="y" />
        <i className="g" />
        <span className="title">kanishka@dev — zsh</span>
        <span className="live">
          <i className="ld" />
          live
        </span>
      </div>
      <div className="term-body">
        {terminalLines.slice(0, shown).map((ln, idx) => (
          <div className="term-line" key={idx} dangerouslySetInnerHTML={{ __html: ln.h }} />
        ))}
        {shown >= terminalLines.length && <span className="term-cursor" />}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const role = useRotatingRole(profile.roles)

  return (
    <header className="hero" id="top">
      <div className="hero-intro">
        <motion.div className="hero-eyebrow" {...rise(0.15)}>
          <span className="dot" />
          based in {profile.location} · {profile.availability}
        </motion.div>

        <motion.h1 {...rise(0.3)}>
          <span className="hi">Hi, I'm</span>
          <span className="name">{profile.name}</span>
        </motion.h1>

        <motion.div className="hero-role" {...rise(0.45)}>
          {role}
          <span className="cur">_</span>
        </motion.div>

        <motion.p className="hero-bio" {...rise(0.6)}>
          {profile.bio}
        </motion.p>

        <motion.div className="cta" {...rise(0.75)}>
          <Magnetic>
            <a className="btn primary" href={profile.resume} target="_blank" rel="noreferrer">
              <IconDownload /> Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn" href={socials.github} target="_blank" rel="noreferrer">
              <IconGithub /> GitHub
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn" href={socials.linkedin} target="_blank" rel="noreferrer">
              <IconLinkedin /> LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn" href={socials.leetcode} target="_blank" rel="noreferrer">
              <IconLeetcode /> LeetCode
            </a>
          </Magnetic>
        </motion.div>

        <Terminal />
      </div>

      <div className="hero-photo">
        <motion.div
          className="portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glow" />
          <img src="/kanishka.jpg" alt={profile.name} />
        </motion.div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to about">
        <span>scroll</span>
        <span className="mouse" />
      </a>
    </header>
  )
}
