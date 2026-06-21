import { motion } from 'framer-motion'
import { skills } from '../data'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <div className="eyebrow-label">tech.stack</div>
        <h2 className="section-title">
          Skills &amp; <span className="accent">tools</span>
        </h2>
        <p className="section-intro">The languages, frameworks and tools I reach for.</p>
      </Reveal>

      <div className="skills-grid">
        {skills.map((grp, i) => (
          <Reveal key={grp.group} delay={(i % 3) * 0.06}>
            <div className="skill-group glass">
              <h3>{grp.group}</h3>
              <div className="skill-chips">
                {grp.items.map((item, idx) => (
                  <motion.span
                    className="skill-chip"
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
