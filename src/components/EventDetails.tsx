import type { ReactNode } from 'react'
import { eventConfig } from '../config/event'

type DetailItem = {
  title: string
  value: string
  helper?: string
  icon: ReactNode
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5.5" width="17" height="15" rx="3" />
      <path d="M7 3.5v4M17 3.5v4M3.5 9.5h17" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m4 11.5 8-6 8 6" />
      <path d="M6.5 10.5v8h11v-8" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7.2 4.7c.5-.5 1.2-.6 1.8-.2l2.1 1.3c.7.4 1 1.2.8 2l-.5 2c1.2 2.2 2.9 4 5.2 5.2l2-.5c.8-.2 1.6.1 2 .8l1.3 2.1c.4.6.3 1.3-.2 1.8l-1 1c-.9.9-2.2 1.2-3.4.8-3.2-1.1-6.1-3-8.4-5.4-2.4-2.4-4.2-5.2-5.4-8.4-.4-1.2-.1-2.5.8-3.4l1-1Z" />
    </svg>
  )
}

const detailItems: DetailItem[] = [
  {
    title: 'Fecha',
    value: eventConfig.dateLabel,
    helper: eventConfig.timeLabel,
    icon: <IconCalendar />,
  },
  {
    title: 'Lugar',
    value: eventConfig.venue,
    helper: 'Los esperamos para compartir una tarde especial.',
    icon: <IconHome />,
  },
  {
    title: 'Dirección',
    value: eventConfig.address,
    helper: 'Abrí el mapa para llegar más fácil.',
    icon: <IconPin />,
  },
  {
    title: 'Contacto',
    value: eventConfig.contactLabel,
    helper: 'Escribinos por cualquier duda.',
    icon: <IconPhone />,
  },
]

export function EventDetails() {
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-eyebrow">Detalles</p>
          <h2 className="section-title">Información del evento</h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {detailItems.map((item) => (
            <article key={item.title} className="card-surface rounded-[24px] px-5 py-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(249,213,229,0.35)] text-[var(--color-strawberry)]">
                {item.icon}
              </div>
              <h3 className="mt-4 font-serif text-3xl leading-none text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">{item.value}</p>
              {item.helper ? (
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                  {item.helper}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
