import { useMemo, useState } from 'react'
import { initialGifts } from '../data/gifts'
import type { GiftFilter, GiftItem } from '../types'
import { GiftCard } from './GiftCard'
import { GiftFilters } from './GiftFilters'
import { ReserveGiftModal } from './ReserveGiftModal'

function ChevronDownMini() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function filterGifts(gifts: GiftItem[], filter: GiftFilter) {
  switch (filter) {
    case 'available':
      return gifts.filter((gift) => !gift.reserved)
    case 'reserved':
      return gifts.filter((gift) => gift.reserved)
    default:
      return gifts
  }
}

export function GiftSection() {
  const [filter, setFilter] = useState<GiftFilter>('all')
  const [gifts, setGifts] = useState<GiftItem[]>(initialGifts)
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null)

  const filteredGifts = useMemo(() => filterGifts(gifts, filter), [filter, gifts])

  async function handleConfirmGift(gift: GiftItem) {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 850)
    })

    setGifts((currentGifts) =>
      currentGifts.map((currentGift) =>
        currentGift.id === gift.id ? { ...currentGift, reserved: true } : currentGift,
      ),
    )
  }

  return (
    <section id="regalos" className="px-4 py-10 sm:py-16">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-eyebrow">Para Olivia</p>
          <h2 className="section-title">Ideas de regalos 🎁</h2>
          <p className="section-copy">
            Preparamos esta lista con algunas cosas que nos serían útiles para Olivia.
            Los enlaces son solo referencias para mostrarles el tipo de producto, 
            estilo y colores que nos gustan.
            No es necesario comprar exactamente el modelo publicado. Pueden elegir 
            uno similar, de otra marca o tienda.
            Cuando decidan qué regalar, les pedimos que lo marquen como elegido para evitar que se repita.
          </p>
        </div>

        <GiftFilters activeFilter={filter} onChange={setFilter} />

        <div className="mx-auto mt-8 grid max-w-[1040px] gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredGifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} onReserve={setSelectedGift} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center">
          <button
            type="button"
            className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[var(--color-text-muted)]"
          >
            Ver lista completa
            <ChevronDownMini />
          </button>
          <div className="mt-1 h-px w-full max-w-[28rem] border-b border-dotted border-[rgba(95,122,95,0.55)]" />
        </div>

        {selectedGift ? (
          <ReserveGiftModal
            gift={selectedGift}
            onClose={() => setSelectedGift(null)}
            onConfirm={handleConfirmGift}
          />
        ) : null}
      </div>
    </section>
  )
}
