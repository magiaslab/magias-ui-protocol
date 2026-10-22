'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger, SplitText)

export function MotoreMovimento() {
  useEffect(() => {
    const ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (ridotto) { document.documentElement.classList.remove('motion-pending'); return }
    const lenis = new Lenis({ lerp: 0.1 })
    gsap.ticker.add((t) => lenis.raf(t * 1000))
    document.fonts.ready.then(() => {
      const split = new SplitText('[data-split]', { type: 'words' })
      gsap.from(split.words, { opacity: 0, y: 30, stagger: 0.12, duration: 1.2, delay: 0.8 })
      document.documentElement.classList.remove('motion-pending')
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        const r = el.getBoundingClientRect()
        gsap.to(el, { opacity: 1, y: 0, scrollTrigger: { trigger: el, start: r.top > innerHeight ? 'top 85%' : 'top bottom' } })
      })
    })
  }, [])
  return null
}
