import { useState } from 'react'
import { eventConfig } from '../config/event'
import { CalendarButton } from './CalendarButton'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#fotos', label: 'Fotos' },
  { href: '#regalos', label: 'Regalos' },
  { href: '#confirmar', label: 'Confirmar' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(254,246,240,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[58px] w-[min(1420px,calc(100%-18px))] items-center justify-between gap-4 py-2">
        <a
          href="#inicio"
          className="shrink-0 pl-4 font-serif text-[1.05rem] font-medium text-[var(--color-text)] no-underline lg:pl-6"
        >
          {eventConfig.inviteeGreeting}
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          <nav className="flex items-center gap-6" aria-label="Navegacion principal">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative pb-1 text-[0.74rem] font-medium no-underline transition-colors hover:text-[var(--color-strawberry)] ${
                  index === 0
                    ? 'text-[var(--color-strawberry)] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-5 after:-translate-x-1/2 after:rounded-full after:bg-[var(--color-pink-medium)]'
                    : 'text-[var(--color-text-muted)]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <CalendarButton className="min-h-0 px-4 py-2 text-[0.72rem] font-medium" />
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[rgba(232,160,180,0.42)] bg-[rgba(254,246,240,0.98)] md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-[var(--color-text)]" />
            <span className="h-0.5 w-5 rounded-full bg-[var(--color-text)]" />
            <span className="h-0.5 w-5 rounded-full bg-[var(--color-text)]" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--color-border)] bg-[rgba(254,246,240,0.98)] md:hidden">
          <nav
            className="page-shell flex flex-col gap-2 py-4"
            aria-label="Navegacion principal movil"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-[var(--color-text)] no-underline hover:bg-[rgba(249,213,229,0.25)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <CalendarButton className="mt-2 w-full" onClick={() => setIsOpen(false)} />
          </nav>
        </div>
      ) : null}
    </header>
  )
}
