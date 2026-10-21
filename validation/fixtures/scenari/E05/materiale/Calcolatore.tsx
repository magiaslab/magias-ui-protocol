'use client'
import { useRef, useState } from 'react'
import { gsap } from 'gsap'
// Stima del risparmio annuo: notti dirette * (commissione OTA - costo canale diretto)
export function Calcolatore() {
  const [notti, setNotti] = useState(300)
  const [prezzo, setPrezzo] = useState(120)
  const out = useRef<HTMLOutputElement>(null)
  const mostrato = useRef({ v: 0 })
  function ricalcola(n: number, p: number) {
    const target = n * p * (0.18 - 0.035)
    gsap.to(mostrato.current, { v: target, duration: 1.2, ease: 'power2.out',
      onUpdate: () => { if (out.current) out.current.textContent = Math.round(mostrato.current.v).toLocaleString('it') + ' €' } })
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Notti prenotate direttamente all'anno <input type="number" value={notti} onChange={(e) => { const n = +e.target.value; setNotti(n); ricalcola(n, prezzo) }} /></label>
      <label>Prezzo medio a notte (€) <input type="number" value={prezzo} onChange={(e) => { const p = +e.target.value; setPrezzo(p); ricalcola(notti, p) }} /></label>
      <p>Risparmio stimato: <output ref={out} aria-live="polite">0 €</output></p>
      <button type="button" onClick={() => navigator.clipboard.writeText(out.current?.textContent ?? '')}>Copia il risultato</button>
    </form>
  )
}
