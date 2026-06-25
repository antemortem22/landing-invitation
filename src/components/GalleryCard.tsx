import type { GalleryItem } from '../types'

type GalleryCardProps = {
  item: GalleryItem
}

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <article className="card-surface overflow-hidden rounded-[28px] border-[rgba(232,160,180,0.46)] bg-[rgba(254,246,240,0.96)] shadow-[0_14px_32px_rgba(180,126,120,0.12)]">
      <div className="h-[210px] overflow-hidden sm:h-[220px]">
        <img
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-1 px-5 py-4 text-center sm:px-6">
        <h3 className="font-serif text-[1.7rem] italic leading-none text-[var(--color-text)]">
          {item.title}
        </h3>
        <p className="text-[0.82rem] leading-5 text-[var(--color-text-muted)]">
          {item.description}
        </p>
      </div>
    </article>
  )
}
