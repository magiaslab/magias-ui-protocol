'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const STAGIONI = ['Inverno: potatura', 'Primavera: fioritura', 'Estate: allegagione', 'Autunno: raccolta e frantoio']

export function ScenaCampi() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current!
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200)
    const alberi: THREE.Mesh[] = []
    for (let i = 0; i < 4000; i++) {
      const m = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.6, 12), new THREE.MeshStandardMaterial({ color: 0x5b6b3a }))
      m.position.set((i % 80) - 40, 0, Math.floor(i / 80) * -2)
      scene.add(m); alberi.push(m)
    }
    scene.add(new THREE.AmbientLight(0xffffff, 0.8))
    const stato = { z: 10, stagione: 0 }
    gsap.to(stato, { z: -90, stagione: 3, ease: 'none', scrollTrigger: { trigger: '#campi', start: 'top top', end: '+=4000', scrub: true, pin: true } })
    const loop = () => {
      camera.position.z = stato.z
      alberi.forEach((a, i) => { a.rotation.y += 0.002 * (i % 3) })
      const c = ref.current?.parentElement?.querySelector('[data-stagione]')
      if (c) c.textContent = STAGIONI[Math.round(stato.stagione)]
      renderer.render(scene, camera)
      requestAnimationFrame(loop)
    }
    loop()
  }, [])
  return (
    <section id="campi" className="relative h-svh">
      <canvas ref={ref} className="absolute inset-0" />
      <p data-stagione className="absolute bottom-10 left-10 text-2xl text-white" />
    </section>
  )
}
