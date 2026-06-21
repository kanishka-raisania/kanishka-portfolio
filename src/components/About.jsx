import { profile, stats } from '../data'
import Reveal from './Reveal'
import Counter from './Counter'

export default function About() {
  return (
    <section className="section" id="about">
      <Reveal>
        <div className="eyebrow-label">about.me</div>
        <h2 className="section-title">
          A bit <span className="accent">about me</span>
        </h2>
      </Reveal>

      <div className="about-grid">
        <Reveal delay={0.05} className="about-bio">
          {profile.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat-card glass" key={s.label}>
                <div className="stat-num">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
