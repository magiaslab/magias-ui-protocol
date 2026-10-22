// Pulsante "Prenota questa camera" nelle schede camera
export function PrenotaCamera({ codice }: { codice: string }) {
  return (
    <a href={`https://prenota.esempio-motore.test/h/4411?room=${codice}&lang=it`} target="_blank" className="btn">
      Prenota questa camera
    </a>
  )
}
