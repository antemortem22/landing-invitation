import { useEffect, useState } from 'react'
import type { GiftItem } from '../types'

type ReserveGiftModalProps = {
  gift: GiftItem | null
  onClose: () => void
  onConfirm: (gift: GiftItem) => Promise<void>
}

type ReservationStatus = 'idle' | 'loading' | 'success' | 'error'

export function ReserveGiftModal({
  gift,
  onClose,
  onConfirm,
}: ReserveGiftModalProps) {
  const [status, setStatus] = useState<ReservationStatus>('idle')

  useEffect(() => {
    if (!gift) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && status !== 'loading') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [gift, onClose, status])

  if (!gift) {
    return null
  }

  const currentGift = gift

  async function handleConfirm() {
    try {
      setStatus('loading')
      await onConfirm(currentGift)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={status === 'loading' ? undefined : onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gift-modal-title"
        className="modal-panel p-5 sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        {status === 'success' ? (
          <div className="space-y-5 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-pink-medium)]">
              Regalos
            </p>
            <h3 id="gift-modal-title" className="font-serif text-[2rem] text-[var(--color-text)] sm:text-4xl">
              ¡Regalo reservado!
            </h3>
            <p className="text-sm leading-6 text-[var(--color-text-muted)]">
              {currentGift.name} ya figura como reservado para los demás invitados.
            </p>
            <div className="flex justify-center">
              <button type="button" className="pill-button pill-button-secondary" onClick={onClose}>
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-pink-medium)]">
              Lista de regalos
              </p>
              <h3 id="gift-modal-title" className="mt-2 font-serif text-[2rem] text-[var(--color-text)] sm:text-4xl">
                {currentGift.name}
              </h3>
            </div>

            <p className="text-sm leading-6 text-[var(--color-text-muted)]">
              ¿Querés elegir este regalo? Una vez confirmado, aparecerá como reservado
              para los demás invitados.
            </p>

            {status === 'error' ? (
              <p className="rounded-2xl border border-[rgba(200,55,74,0.25)] bg-[rgba(200,55,74,0.08)] px-4 py-3 text-sm text-[var(--color-strawberry)]">
                No pudimos reservar el regalo. Volvé a intentarlo.
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="pill-button pill-button-secondary"
                onClick={onClose}
                disabled={status === 'loading'}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="pill-button pill-button-primary"
                onClick={handleConfirm}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Reservando...' : 'Confirmar regalo'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
