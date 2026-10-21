'use client'
import { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import type { DateRange } from 'react-day-picker'
// Il pannello è sovrapposto alla parte bassa dello slideshow della home.
export function PannelloPrenota() {
  const [range, setRange] = useState<DateRange | undefined>()
  return (
    <form className="absolute bottom-24 left-1/2 -translate-x-1/2 rounded bg-white p-4 shadow">
      <Popover>
        <PopoverTrigger className="h-11 px-4 border">{range?.from ? `${range.from.toLocaleDateString('it')} – ${range.to?.toLocaleDateString('it') ?? '…'}` : 'Scegli le date'}</PopoverTrigger>
        <PopoverContent><Calendar mode="range" numberOfMonths={2} selected={range} onSelect={setRange} disabled={{ before: new Date() }} /></PopoverContent>
      </Popover>
      <button type="submit" className="h-11 px-6 bg-orange-600 text-black">Verifica disponibilità</button>
    </form>
  )
}
