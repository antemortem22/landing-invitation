import { useMemo, useState } from 'react'
import { initialGifts } from '../data/gifts'
import type { GiftFilter, GiftItem } from '../types'
import { GiftCard } from './GiftCard'
import { GiftFilters } from './GiftFilters'
import { ReserveGiftModal } from './ReserveGiftModal'

const COLLAPSED_GIFTS_COUNT = 6

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
  const [isExpanded, setIsExpanded] = useState(false)

  const filteredGifts = useMemo(() => filterGifts(gifts, filter), [filter, gifts])
  const visibleGifts = useMemo(() => {
    if (isExpanded) {
      return filteredGifts
    }

    return filteredGifts.slice(0, COLLAPSED_GIFTS_COUNT)
  }, [filteredGifts, isExpanded])

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

  function handleFilterChange(nextFilter: GiftFilter) {
    setFilter(nextFilter)
    setIsExpanded(false)
  }

  return (
    <section id="regalos" className="px-4 py-10 sm:py-16">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-eyebrow">Para Olivia</p>
          <h2 className="section-title">Ideas de regalos 🎁</h2>
          <p className="section-copy">
            Preparamos esta lista con algunas cosas que nos serían útiles para Olivia.
            Los enlaces son solo referencias para mostrarles el tipo de producto, estilo y
            colores que nos gustan. No es necesario comprar exactamente el modelo
            publicado. Pueden elegir uno similar, de otra marca o tienda. Cuando decidan
            qué regalar, les pedimos que lo marquen como elegido para evitar que se repita.
          </p>
        </div>

        <GiftFilters activeFilter={filter} onChange={handleFilterChange} />

        <div className="mx-auto mt-8 grid max-w-[1040px] gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleGifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} onReserve={setSelectedGift} />
          ))}
        </div>

        {gifts.length > COLLAPSED_GIFTS_COUNT ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.98rem] font-medium text-[var(--color-text-muted)] underline-offset-4 hover:text-[var(--color-strawberry)] hover:underline"
              onClick={() => setIsExpanded((value) => !value)}
            >
              {isExpanded ? 'Ver menos' : 'Ver la lista completa'}
              <span className={isExpanded ? 'rotate-180 transition-transform' : 'transition-transform'}>
                <ChevronDownMini />
              </span>
            </button>
          </div>
        ) : null}

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
