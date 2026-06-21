import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Background() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  // generate twinkling stars
  useEffect(() => {
    const host = document.getElementById('stars')
    if (!host || host.childElementCount) return
    const frag = document.createDocumentFragment()
    for (let i = 0; i < 70; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      const sz = Math.random() * 2 + 1
      s.style.width = `${sz}px`
      s.style.height = `${sz}px`
      s.style.left = `${Math.random() * 100}%`
      s.style.top = `${Math.random() * 100}%`
      s.style.animationDelay = `${Math.random() * 4}s`
      frag.appendChild(s)
    }
    host.appendChild(frag)
  }, [])

  // subtle sparkle cursor trail (skipped for reduced-motion / touch)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch = window.matchMedia('(hover: none)').matches
    if (reduce || touch) return
    let last = 0
    const onMove = (e) => {
      const t = Date.now()
      if (t - last < 60) return
      last = t
      const s = document.createElement('div')
      s.className = 'spk'
      s.style.left = `${e.clientX}px`
      s.style.top = `${e.clientY}px`
      document.body.appendChild(s)
      requestAnimationFrame(() => {
        s.style.opacity = '0'
        s.style.transform = 'translate(-50%, -50%) scale(0.2)'
      })
      setTimeout(() => s.remove(), 650)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <motion.div className="progress" style={{ scaleX, width: '100%' }} />
      <div className="aurora" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="blob b4" />
      </div>
      <div id="stars" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
    </>
  )
}
