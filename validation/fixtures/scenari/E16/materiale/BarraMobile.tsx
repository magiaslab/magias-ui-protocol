// Barra fissa in basso su mobile
'use client'
export function BarraMobile() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex gap-2 bg-white p-3">
      <a href="tel:+390000000000" className="btn-secondario">Chiama</a>
      <a href="https://prenota.esempio-motore.test/h/4411" target="_blank" rel="noopener" className="btn">Prenota</a>
    </div>
  )
}
