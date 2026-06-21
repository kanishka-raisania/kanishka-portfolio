import { achievements } from '../data'
import Reveal from './Reveal'

const ICONS = { crown: '👑', code: '💻', trophy: '🏆', star: '⭐' }

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <Reveal>
        <div className="eyebrow-label">my.wins</div>
        <h2 className="section-title">
          A few <span className="accent">highlights</span>
        </h2>
      </Reveal>

      <div className="ach-grid">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 2) * 0.08}>
            <div className="ach-card glass">
              <div className="ach-icon" aria-hidden="true">
                {ICONS[a.icon] || '✦'}
              </div>
              <div>
                <div className="ach-title">{a.title}</div>
                <div className="ach-detail">{a.detail}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  )
}
