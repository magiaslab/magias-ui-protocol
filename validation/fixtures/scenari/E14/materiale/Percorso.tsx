'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const TAPPE = [
  { id: 'vigna', titolo: 'La vigna', testo: 'Si parte tra i filari di Sangiovese.' },
  { id: 'cantina', titolo: 'La cantina', testo: 'Fermentazione in cemento e acciaio.' },
  { id: 'barricaia', titolo: 'La barricaia', testo: 'Botti di rovere francese, 18 mesi.' },
  { id: 'bottaia', titolo: 'La bottaia storica', testo: 'Le botti grandi del 1920.' },
  { id: 'degustazione', titolo: 'Degustazione', testo: 'Quattro vini con prodotti del territorio.' },
  { id: 'bottega', titolo: 'La bottega', testo: 'Vini e olio da portare a casa.' },
]

export function Percorso() {
  const sezione = useRef<HTMLElement>(null)
  const pista = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const larghezza = pista.current!.scrollWidth - window.innerWidth
      gsap.to(pista.current, {
        x: -larghezza, ease: 'none',
        scrollTrigger: { trigger: sezione.current, start: 'top top', end: () => '+=' + larghezza, scrub: true, pin: true },
      })
    }, sezione)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={sezione} aria-labelledby="percorso-titolo" className="h-svh overflow-hidden">
      <h2 id="percorso-titolo" className="sr-only">Il percorso</h2>
      <div ref={pista} className="flex h-full w-max gap-8 px-8">
        {TAPPE.map((t) => (
          <article key={t.id} className="flex w-[70vw] shrink-0 flex-col justify-end">
            <img src={`/tappe/${t.id}.webp`} alt="" className="h-2/3 w-full object-cover" />
            <h3 className="mt-4 text-2xl">{t.titolo}</h3>
            <p>{t.testo}</p>
            <a href={`/visite?tappa=${t.id}`} className="mt-2 underline">Prenota questa tappa</a>
          </article>
        ))}
      </div>
    </section>
  )
}
