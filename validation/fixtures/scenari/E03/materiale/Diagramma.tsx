'use client'
import { useEffect, useRef, useState } from 'react'
const FASI = ['Ascolto', 'Analisi', 'Progetto', 'Misura']
export function Diagramma() {
  const ref = useRef<HTMLElement>(null)
  const [attiva, setAttiva] = useState(FASI.length - 1)
  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: no-preference)')
    if (!mq.matches || !ref.current) return
    let kill = () => {}
    import('gsap').then(async ({ gsap }) => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      setAttiva(0)
      const st = ScrollTrigger.create({ trigger: ref.current, start: 'top top', end: 'bottom bottom', scrub: true,
        onUpdate: (s) => setAttiva(Math.min(FASI.length - 1, Math.floor(s.progress * FASI.length))) })
      kill = () => st.kill()
    })
    return () => kill()
  }, [])
  return (
    <section ref={ref} aria-labelledby="come" className="relative h-[400svh] motion-reduce:h-auto">
      <div className="sticky top-0 h-svh motion-reduce:static motion-reduce:h-auto">
        <h2 id="come">Come lavoriamo</h2>
        <svg role="img" aria-label="Quattro fasi in sequenza: Ascolto, Analisi, Progetto, Misura" viewBox="0 0 400 100">{/* tratti */}</svg>
        <ol>{FASI.map((f, i) => <li key={f} aria-current={i === attiva ? 'step' : undefined} className={i <= attiva ? 'opacity-100' : 'opacity-30'}>{f}</li>)}</ol>
      </div>
    </section>
  )
}
