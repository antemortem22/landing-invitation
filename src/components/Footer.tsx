import { eventConfig } from '../config/event'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] bg-[rgba(254,246,240,0.9)] px-4 py-8 text-center backdrop-blur-md">
      <div className="page-shell">
        <p className="font-serif text-3xl text-[var(--color-text)]">
          Baby Shower de {eventConfig.babyName}
        </p>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{eventConfig.dateLabel}</p>
        <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
          {eventConfig.footerNote}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[var(--color-pink-medium)]">
          Hecho con amor para Olivia
        </p>
      </div>
    </footer>
  )
}
