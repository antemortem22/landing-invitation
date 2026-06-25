import type { GiftItem } from '../types'

type GiftCardProps = {
  gift: GiftItem
  onReserve: (gift: GiftItem) => void
}

function ArrowRightMini() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h13" strokeLinecap="round" />
      <path d="m13 7 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function GiftCard({ gift, onReserve }: GiftCardProps) {
  const primaryLink = gift.referenceLinks[0]

  if (gift.reserved) {
    return (
      <article className="card-surface relative flex h-full flex-col overflow-hidden rounded-[28px] border-[rgba(232,160,180,0.4)] bg-[rgba(254,246,240,0.92)] p-0 shadow-[0_14px_32px_rgba(180,126,120,0.12)]">
        <span className="absolute right-3 top-3 z-10 rounded-full bg-[var(--color-sage)] px-3 py-1 text-[0.74rem] font-semibold text-[var(--color-warm-white)]">
          ✓ Ya elegido
        </span>

        <div className="overflow-hidden rounded-t-[28px] bg-[rgba(255,255,255,0.18)]">
          <img
            src={gift.image}
            alt={`Referencia visual para ${gift.name}`}
            className="h-[215px] w-full object-cover object-center grayscale opacity-60"
          />
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
          <h3 className="font-serif text-[1.2rem] leading-tight text-[rgba(47,42,42,0.45)]">
            {gift.name}
          </h3>

          <p className="mt-2 text-[0.95rem] leading-7 text-[rgba(111,102,102,0.55)]">
            {gift.description}
          </p>

          <div className="mt-auto pt-5">
            <button
              type="button"
              disabled
              className="min-h-[38px] w-full cursor-not-allowed rounded-full bg-[rgba(235,231,228,0.92)] px-5 py-2 text-[0.78rem] font-semibold text-[rgba(111,102,102,0.55)]"
            >
              Reservado
            </button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="card-surface relative flex h-full flex-col overflow-hidden rounded-[28px] border-[rgba(232,160,180,0.45)] p-0 shadow-[0_14px_32px_rgba(180,126,120,0.12)]">
      <div className="overflow-hidden rounded-t-[28px]">
        <img
          src={gift.image}
          alt={`Referencia visual para ${gift.name}`}
          className="h-[215px] w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="font-serif text-[1.2rem] leading-tight text-[var(--color-text)]">
          {gift.name}
        </h3>

        <p className="mt-2 text-[0.95rem] leading-7 text-[var(--color-text-muted)]">
          {gift.description}
        </p>

        {gift.preferenceNote ? (
          <p className="mt-2 text-[0.92rem] leading-6 text-[var(--color-text-muted)]">
            {gift.preferenceNote}
          </p>
        ) : null}

        <div className="mt-auto flex flex-nowrap items-center justify-between gap-3 pt-5">
          {primaryLink ? (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-[0.92rem] font-medium text-[var(--color-pink-medium)] no-underline"
            >
              Ver producto
              <ArrowRightMini />
            </a>
          ) : (
            <span />
          )}

          <button
            type="button"
            className="min-h-[38px] shrink-0 rounded-full bg-[rgba(249,213,229,0.9)] px-5 py-2 text-[0.72rem] font-semibold whitespace-nowrap text-[var(--color-text)]"
            onClick={() => onReserve(gift)}
          >
            Elegir este regalo
          </button>
        </div>
      </div>
    </article>
  )
}
