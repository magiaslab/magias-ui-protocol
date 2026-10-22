// Barra date della home
import { formatISO } from 'date-fns'
export function hrefMotore(d: { from: Date; to: Date; adulti: number; bambini: number; eta: number[] }, lang: string) {
  const p = new URLSearchParams({
    arrival: formatISO(d.from, { representation: 'date' }),
    departure: formatISO(d.to, { representation: 'date' }),
    adults: String(d.adulti), children: String(d.bambini), children_ages: d.eta.join(','),
    lang, src: 'sito',
  })
  return `https://prenota.esempio-motore.test/h/4411?${p}`
}
