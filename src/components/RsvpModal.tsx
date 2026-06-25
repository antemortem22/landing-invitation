import { useEffect, useMemo, useState } from 'react'
import { eventConfig } from '../config/event'
import type { RsvpFormState } from '../types'
import { buildRsvpMessage, buildWhatsappUrl } from '../utils/whatsapp'
import { CalendarButton } from './CalendarButton'

type RsvpModalProps = {
  onClose: () => void
}

const initialForm: RsvpFormState = {
  fullName: '',
  attendance: 'yes',
  attendees: 1,
  message: '',
}

type Step = 'form' | 'review'

export function RsvpModal({ onClose }: RsvpModalProps) {
  const [step, setStep] = useState<Step>('form')
  const [form, setForm] = useState<RsvpFormState>(initialForm)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const whatsappUrl = useMemo(
    () =>
      buildWhatsappUrl(
        eventConfig.whatsappNumber,
        buildRsvpMessage(form, eventConfig),
      ),
    [form],
  )

  function handleReview() {
    if (!form.fullName.trim()) {
      setError('Ingresá tu nombre y apellido.')
      return
    }

    if (form.attendance === 'yes' && form.attendees < 1) {
      setError('Indicá la cantidad de asistentes.')
      return
    }

    setError(null)
    setStep('review')
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="rsvp-modal-title"
        className="modal-panel max-h-[92vh] overflow-y-auto p-5 sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        {step === 'form' ? (
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-pink-medium)]">
                Confirmación
              </p>
              <h3 id="rsvp-modal-title" className="mt-2 font-serif text-[2rem] text-[var(--color-text)] sm:text-4xl">
                Responder invitación
              </h3>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-[var(--color-text)]">Nombre y apellido</span>
              <input
                type="text"
                value={form.fullName}
                onChange={(event) =>
                  setForm((current) => ({ ...current, fullName: event.target.value }))
                }
                className="w-full rounded-[18px] border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3 text-[var(--color-text)]"
              />
            </label>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium text-[var(--color-text)]">Respuesta</legend>
              <label className="flex cursor-pointer items-center gap-3 rounded-[18px] border border-[var(--color-border)] px-4 py-3">
                <input
                  type="radio"
                  name="attendance"
                  checked={form.attendance === 'yes'}
                  onChange={() => setForm((current) => ({ ...current, attendance: 'yes' }))}
                />
                <span>Sí, voy a asistir</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-[18px] border border-[var(--color-border)] px-4 py-3">
                <input
                  type="radio"
                  name="attendance"
                  checked={form.attendance === 'no'}
                  onChange={() => setForm((current) => ({ ...current, attendance: 'no' }))}
                />
                <span>No voy a poder asistir</span>
              </label>
            </fieldset>

            {form.attendance === 'yes' ? (
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--color-text)]">Cantidad de asistentes</span>
                <input
                  type="number"
                  min={1}
                  value={form.attendees}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      attendees: Number(event.target.value),
                    }))
                  }
                  className="w-full rounded-[18px] border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3 text-[var(--color-text)]"
                />
              </label>
            ) : null}

            <label className="block space-y-2">
              <span className="text-sm font-medium text-[var(--color-text)]">Mensaje adicional</span>
              <textarea
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                rows={4}
                className="w-full rounded-[18px] border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3 text-[var(--color-text)]"
              />
            </label>

            {error ? (
              <p className="rounded-2xl border border-[rgba(200,55,74,0.25)] bg-[rgba(200,55,74,0.08)] px-4 py-3 text-sm text-[var(--color-strawberry)]">
                {error}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button type="button" className="pill-button pill-button-secondary" onClick={onClose}>
                Cerrar
              </button>
              <button type="button" className="pill-button pill-button-primary" onClick={handleReview}>
                Revisá tu respuesta
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-pink-medium)]">
                Confirmación
              </p>
              <h3 id="rsvp-modal-title" className="mt-2 font-serif text-[2rem] text-[var(--color-text)] sm:text-4xl">
                Tu mensaje está listo
              </h3>
            </div>

            <div className="rounded-[22px] border border-[var(--color-border)] bg-[rgba(254,246,240,0.96)] p-5">
              <p className="text-sm text-[var(--color-text-muted)]">Nombre</p>
              <p className="font-medium text-[var(--color-text)]">{form.fullName}</p>

              <p className="mt-4 text-sm text-[var(--color-text-muted)]">Respuesta</p>
              <p className="font-medium text-[var(--color-text)]">
                {form.attendance === 'yes' ? 'Sí, voy a asistir' : 'No voy a poder asistir'}
              </p>

              {form.attendance === 'yes' ? (
                <>
                  <p className="mt-4 text-sm text-[var(--color-text-muted)]">Cantidad</p>
                  <p className="font-medium text-[var(--color-text)]">{form.attendees}</p>
                </>
              ) : null}

              {form.message ? (
                <>
                  <p className="mt-4 text-sm text-[var(--color-text-muted)]">Mensaje</p>
                  <p className="font-medium text-[var(--color-text)]">{form.message}</p>
                </>
              ) : null}
            </div>

            {form.attendance === 'yes' ? (
              <div className="rounded-[22px] border border-[var(--color-border)] bg-[rgba(249,213,229,0.22)] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-pink-medium)]">
                  Guardá la fecha
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                  Sumalo a tu calendario para tener el evento a mano.
                </p>
                <CalendarButton className="mt-4 w-full sm:w-auto" />
              </div>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              <button type="button" className="pill-button pill-button-secondary" onClick={() => setStep('form')}>
                Editar respuesta
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="pill-button pill-button-primary"
              >
                {form.attendance === 'yes' ? 'Continuar a WhatsApp' : 'Avisar por WhatsApp'}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
