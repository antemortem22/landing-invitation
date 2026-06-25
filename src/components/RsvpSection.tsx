import { useState } from 'react'
import { RsvpModal } from './RsvpModal'

export function RsvpSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="confirmar" className="px-4 pb-12 pt-10 sm:pb-16 sm:pt-14">
      <div className="page-shell">
        <div className="mx-auto max-w-[980px] rounded-[32px] border border-[rgba(232,160,180,0.42)] bg-[rgba(254,246,240,0.96)] px-6 py-8 text-center shadow-[0_18px_44px_rgba(180,126,120,0.2)] backdrop-blur-md sm:px-10">
          <div className="flex items-center justify-center gap-4 text-[var(--color-pink-medium)]">
            <div className="h-[2px] w-16 bg-[linear-gradient(90deg,rgba(232,160,180,0),rgba(232,160,180,0.9))]" />
            <div className="flex items-center gap-2 text-[0.95rem] leading-none">
              <span>🍓</span>
              <span>🌸</span>
              <span>🍓</span>
            </div>
            <div className="h-[2px] w-16 bg-[linear-gradient(90deg,rgba(232,160,180,0.9),rgba(232,160,180,0))]" />
          </div>
          <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4rem)] leading-none text-[var(--color-text)]">
            ¿Venís al baby shower?
          </h2>
          <p className="mx-auto mt-4 max-w-[36rem] text-base leading-7 text-[var(--color-text-muted)]">
            Completá tus datos y avisanos por WhatsApp si vas a poder acompañarnos.
          </p>
          <button
            type="button"
            className="pill-button pill-button-primary mt-6"
            onClick={() => setIsOpen(true)}
          >
            Responder invitación
          </button>
        </div>
      </div>

      {isOpen ? <RsvpModal onClose={() => setIsOpen(false)} /> : null}
    </section>
  )
}
