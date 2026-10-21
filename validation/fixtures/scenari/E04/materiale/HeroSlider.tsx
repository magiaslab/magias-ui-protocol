'use client'
import { useEffect, useState } from 'react'
const FOTO = ['/f/1.webp', '/f/2.webp', '/f/3.webp', '/f/4.webp']
export function HeroSlider() {
  const [i, setI] = useState(0)
  const [inPausa, setInPausa] = useState(false)
  useEffect(() => {
    if (inPausa) return
    const t = setInterval(() => setI((n) => (n + 1) % FOTO.length), 6000)
    return () => clearInterval(t)
  }, [inPausa])
  return (
    <div className="relative h-[80svh] overflow-hidden" aria-roledescription="carosello" aria-label="Foto della struttura">
      {FOTO.map((src, n) => <img key={src} src={src} alt="" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ${n === i ? 'opacity-100' : 'opacity-0'}`} />)}
      <button onClick={() => setInPausa((p) => !p)} aria-pressed={inPausa} className="absolute bottom-4 right-4">{inPausa ? 'Riprendi' : 'Pausa'}</button>
    </div>
  )
}
