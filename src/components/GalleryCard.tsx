import type { GalleryItem } from '../types'

type GalleryCardProps = {
  item: GalleryItem
}

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <article className="card-surface group overflow-hidden rounded-[28px] border-[rgba(232,160,180,0.46)] bg-[rgba(254,246,240,0.96)] shadow-[0_14px_32px_rgba(180,126,120,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(232,160,180,0.8)] hover:shadow-[0_24px_46px_rgba(180,126,120,0.16)]">
      <div className="h-[360px] overflow-hidden sm:h-[430px]">
        <img
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="space-y-1 px-5 py-4 text-center sm:px-6">
        <h3 className="font-serif text-[1.55rem] font-bold italic leading-none text-[var(--color-text)] sm:text-[1.7rem]">
          {item.title}
        </h3>

        <p className="text-[0.84rem] leading-5 text-[var(--color-text-muted)] sm:text-[0.86rem]">
          {item.description}
        </p>
      </div>
    </article>
  )
}
