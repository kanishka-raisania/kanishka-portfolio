import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { experience } from '../data'
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

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 78%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 28, restDelta: 0.001 })
  const fillHeight = useTransform(progress, [0, 1], ['0%', '100%'])

  return (
    <section className="section" id="experience">
      <Reveal>
        <div className="eyebrow-label">work.history</div>
        <h2 className="section-title">
          Where I've <span className="accent">worked</span>
        </h2>
        <p className="section-intro">
          Backend, ML and automation roles — building things that ship and scale.
        </p>
      </Reveal>

      <div className="timeline2" ref={ref}>
        <div className="tl-rail" />
        <motion.div className="tl-fill" style={{ height: fillHeight }} />

        {experience.map((exp) => (
          <motion.article
            className={`exp2${exp.current ? ' current' : ''}`}
            key={exp.company}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div className="exp2-date" variants={child}>
              <span className="d-start">{exp.start}</span>
              <span className="d-end">→ {exp.end}</span>
            </motion.div>

            <motion.div className="exp2-node" variants={nodeV} style={{ '--acc': exp.accent }}>
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const mono = e.currentTarget.parentNode.querySelector('.exp-mono')
                    if (mono) mono.style.display = 'flex'
                  }}
                />
              ) : null}
              <span className="exp-mono" style={{ display: exp.logo ? 'none' : 'flex' }}>
                {exp.mono}
              </span>
            </motion.div>

            <div className="exp2-card">
              <motion.div className="exp2-head" variants={child}>
                <span className="exp-role">{exp.role}</span>
                <span className={`exp-company${exp.current ? ' live' : ''}`} style={{ color: exp.accent }}>
                  @ {exp.company}
                </span>
              </motion.div>

              <motion.div className="exp2-meta" variants={child}>
                {exp.location}
              </motion.div>

              <ul className="exp-points">
                {exp.points.map((p, idx) => (
                  <motion.li key={idx} variants={child} style={{ '--acc': exp.accent }}>
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
