import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { education } from '../data'
import Reveal from './Reveal'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
}
const child = {
  hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}
const nodeV = {
  hidden: { scale: 0, opacity: 0, rotate: -25 },
  show: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.7, ease: 'backOut' } },
}

export default function Education() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 78%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 28, restDelta: 0.001 })
  const fillHeight = useTransform(progress, [0, 1], ['0%', '100%'])

  return (
    <section className="section" id="education">
      <Reveal>
        <div className="eyebrow-label">my.education</div>
        <h2 className="section-title">
          Where I <span className="accent">studied</span>
        </h2>
        <p className="section-intro">
          From school to engineering — the academic path so far.
        </p>
      </Reveal>

      <div className="timeline2" ref={ref}>
        <div className="tl-rail" />
        <motion.div className="tl-fill" style={{ height: fillHeight }} />

        {education.map((ed) => (
          <motion.article
            className="exp2"
            key={ed.degree}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div className="exp2-date" variants={child}>
              <span className="d-start">{ed.start}</span>
              {ed.end && <span className="d-end">→ {ed.end}</span>}
            </motion.div>

            <motion.div className="exp2-node" variants={nodeV} style={{ '--acc': ed.accent }}>
              {ed.logo ? (
                <img
                  src={ed.logo}
                  alt={ed.school}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const mono = e.currentTarget.parentNode.querySelector('.exp-mono')
                    if (mono) mono.style.display = 'flex'
                  }}
                />
              ) : null}
              <span className="exp-mono" style={{ display: ed.logo ? 'none' : 'flex' }}>
                {ed.mono}
              </span>
            </motion.div>

            <div className="exp2-card">
              <motion.div className="exp2-head" variants={child}>
                <span className="exp-role">{ed.degree}</span>
                {ed.score && <span className="edu-score">{ed.score}</span>}
              </motion.div>

              <motion.div className="exp2-subhead" variants={child} style={{ color: ed.accent }}>
                {ed.school}
              </motion.div>

              {ed.meta && (
                <motion.div className="exp2-meta" variants={child}>
                  {ed.meta}
                </motion.div>
              )}

              <ul className="exp-points">
                {ed.points.map((p, idx) => (
                  <motion.li key={idx} variants={child} style={{ '--acc': ed.accent }}>
                    {p}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
