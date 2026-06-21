import { profile } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <a href="#top" className="foot-top">↑ back to top</a>
      <span>
        © {year} {profile.name} · built with <span className="heart">♥</span>
      </span>
    </footer>
  )
}
