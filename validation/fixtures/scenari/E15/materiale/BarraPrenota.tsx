'use client'
import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { linkMotore } from '@/lib/motore'

type Intervallo = { from?: Date; to?: Date }
const MAX = 6

export function BarraPrenota() {
  const [date, setDate] = useState<Intervallo>({})
  const [adulti, setAdulti] = useState(2)
  const [bambini, setBambini] = useState(0)
  const [aperto, setAperto] = useState(false)
  const totale = adulti + bambini
  const pronto = !!date.from && !!date.to

  return (
    <form className="flex items-end gap-3" onSubmit={(e) => { e.preventDefault(); window.open(linkMotore({ ...date, adulti, bambini }), '_blank') }}>
      <Popover open={aperto} onOpenChange={setAperto}>
        <PopoverTrigger asChild>
          <Button variant="outline" type="button">{pronto ? `${date.from!.toLocaleDateString('it')} – ${date.to!.toLocaleDateString('it')}` : 'Date'}</Button>
        </PopoverTrigger>
        <PopoverContent><Calendar mode="range" numberOfMonths={2} selected={date as any} onSelect={(r: any) => setDate(r ?? {})} /></PopoverContent>
      </Popover>
      <div>
        <span>Adulti</span>
        <Button type="button" size="icon" onClick={() => setAdulti(adulti - 1)} disabled={adulti <= 1}>−</Button>
        <span>{adulti}</span>
        <Button type="button" size="icon" onClick={() => setAdulti(adulti + 1)} disabled={totale >= MAX}>+</Button>
      </div>
      <div>
        <span>Bambini</span>
        <Button type="button" size="icon" onClick={() => setBambini(bambini - 1)} disabled={bambini <= 0}>−</Button>
        <span>{bambini}</span>
        <Button type="button" size="icon" onClick={() => setBambini(bambini + 1)} disabled={totale >= MAX}>+</Button>
      </div>
      <Button type="submit" disabled={!pronto}>Cerca</Button>
    </form>
  )
}
