import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { projects } from '../data'
import Reveal from './Reveal'
import { IconArrow } from './Icons'

function ProjectCard({ p }) {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 150, damping: 15 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 150, damping: 15 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  const cls = `project-card glass${p.featured ? ' featured' : ''}`

  return (
    <motion.article
      className={cls}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
    >
      <div className="project-head">
        <h3 className="project-title">{p.title}</h3>
        {p.badge && <span className="project-badge">{p.badge}</span>}
      </div>
      {p.tagline && <div className="project-tagline">{p.tagline}</div>}
      <p className="project-desc">{p.description}</p>
      <div className="project-tech">
        {p.tech.map((t) => (
          <span className="tech-chip" key={t}>
            {t}
          </span>
        ))}
      </div>
      {p.link && (
        <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
          {p.linkLabel || 'View'} <IconArrow />
        </a>
      )}
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <div className="eyebrow-label">things.i_built</div>
        <h2 className="section-title">
          Selected <span className="accent">projects</span>
        </h2>
        <p className="section-intro">
          From an AI platform for rural India to ML models and web apps — a mix of what I've shipped.
        </p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} className={p.badge ? 'wide' : ''}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
