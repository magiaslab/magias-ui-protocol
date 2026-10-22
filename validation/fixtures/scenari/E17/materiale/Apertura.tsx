export function Apertura() {
  return (
    <section className="relative h-svh">
      <video src="/video/apertura.mp4" autoPlay muted loop playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover" />
      <img src="/img/apertura-poster.webp" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover md:hidden" />
      <h1 className="apertura-titolo relative" data-split>
        Cucina di campagna, camere tra gli ulivi
      </h1>
      <a href="#prenota" data-reveal className="relative btn">Verifica disponibilità</a>
    </section>
  )
}
