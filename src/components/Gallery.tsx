import { useEffect, useMemo, useState } from 'react'
import { galleryItems } from '../data/gallery'
import { GalleryCard } from './GalleryCard'

function getVisibleCount(width: number) {
  if (width >= 1280) {
    return 3
  }

  if (width >= 768) {
    return 2
  }

  return 1
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount(window.innerWidth))

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const visibleItems = useMemo(() => {
    return Array.from({ length: visibleCount }, (_, offset) => {
      const itemIndex = (currentIndex + offset) % galleryItems.length
      return galleryItems[itemIndex]
    })
  }, [currentIndex, visibleCount])

  function handlePrevious() {
    setCurrentIndex((value) => (value - 1 + galleryItems.length) % galleryItems.length)
  }

  function handleNext() {
    setCurrentIndex((value) => (value + 1) % galleryItems.length)
  }

  return (
    <section id="fotos" className="px-4 py-10 sm:py-14">
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-eyebrow">GALERIA</p>
          <h2 className="section-title">✨ Momentos ✨</h2>
        </div>

        <div className="mt-8">
          <div className="relative">
            <button
              type="button"
              aria-label="Ver fotos anteriores"
              className="absolute left-0 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(255,253,252,0.98)] text-[var(--color-text)] shadow-[0_10px_26px_rgba(180,126,120,0.18)] sm:-left-4 lg:-left-5"
              onClick={handlePrevious}
            >
              <ChevronLeft />
            </button>

            <div
              className={`mx-auto grid max-w-[1040px] gap-5 px-10 sm:px-8 ${
                visibleCount === 1
                  ? 'grid-cols-1'
                  : visibleCount === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-3'
              }`}
            >
              {visibleItems.map((item, index) => (
                <GalleryCard key={`${item.id}-${currentIndex}-${index}`} item={item} />
              ))}
            </div>

            <button
              type="button"
              aria-label="Ver fotos siguientes"
              className="absolute right-0 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(255,253,252,0.98)] text-[var(--color-text)] shadow-[0_10px_26px_rgba(180,126,120,0.18)] sm:-right-4 lg:-right-5"
              onClick={handleNext}
            >
              <ChevronRight />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {galleryItems.map((item, index) => {
              const isActive = index === currentIndex

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Ir a la foto ${index + 1}`}
                  aria-pressed={isActive}
                  className={`rounded-full transition-all ${
                    isActive
                      ? 'h-2.5 w-5 bg-[var(--color-strawberry)]'
                      : 'h-2.5 w-2.5 bg-[rgba(232,160,180,0.6)]'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
