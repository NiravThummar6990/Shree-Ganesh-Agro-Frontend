import React, { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Offer {
  img: string
  title: string
  badge: string
}

const OFFERS: Offer[] = [
  { img: "/image/offer1.jpg", title: "Free Fertilizer", badge: "30% OFF" },
  { img: "/image/offer2.jpg", title: "Crop Care Package", badge: "25% OFF" },
  { img: "/image/offer3.jpg", title: "Special Seed Offer", badge: "20% OFF" },
]

const AUTOPLAY_INTERVAL_MS = 3500

const OfferSlider: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % OFFERS.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + OFFERS.length) % OFFERS.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  useEffect(() => {
    if (isPaused) return

    timerRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [nextSlide, isPaused])

  const activeOffer = OFFERS[current]

  return (
    <div className="flex w-full justify-center p-2 md:min-w-[400px]">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full max-w-[350px] overflow-hidden rounded-xs bg-gradient-to-br from-[#d8f5d1] via-[#c9efc2] to-[#b7e4b0] shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:max-w-[300px] sm:rounded-xs md:max-w-[390px] md:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
      >
        <div className="relative aspect-[3/4] h-80 w-full sm:aspect-auto sm:h-[380px] md:h-[580px]">
          <img
            src={activeOffer.img}
            alt={activeOffer.title}
            className="h-full w-full object-cover"
          />

          {/* Overlay gradient for better text contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

          {/* Offer Badge */}
          <div className="absolute top-3 left-3 z-20 rounded-lg bg-white/85 px-3 py-2 shadow-lg backdrop-blur-sm sm:top-4 sm:left-4 sm:px-4 sm:py-3 md:top-5 md:left-5">
            <p className="text-[10px] font-medium text-gray-600 sm:text-xs">
              Special Offer
            </p>
            <h2 className="text-base font-extrabold text-[#276132] sm:text-lg md:text-xl">
              {activeOffer.badge}
            </h2>
            <p className="text-[10px] font-medium text-gray-600 sm:text-xs">
              Limited Time
            </p>
          </div>

          {/* Title + CTA */}
          <div className="absolute right-3 bottom-3 left-3 z-20 sm:right-4 sm:bottom-4 sm:left-4 md:right-5 md:bottom-5 md:left-5">
            <h3 className="mb-2 line-clamp-1 text-sm font-bold text-white drop-shadow sm:text-base md:text-lg">
              {activeOffer.title}
            </h3>
            <button
              type="button"
              className="w-full rounded-full bg-[#276132] py-2 text-xs font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#1e5128] hover:shadow-xl sm:py-2.5 sm:text-sm md:text-base"
            >
              Shop Now
            </button>
          </div>

          {/* Previous / Next Controls */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous offer"
            className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full bg-white/60 p-1.5 shadow-md backdrop-blur-sm transition hover:bg-white/90 sm:left-3 sm:p-2.5 md:left-4 md:p-3"
          >
            <ChevronLeft className="h-3.5 w-3.5 text-[#194023] sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next offer"
            className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full bg-white/60 p-1.5 shadow-md backdrop-blur-sm transition hover:bg-white/90 sm:right-3 sm:p-2.5 md:right-4 md:p-3"
          >
            <ChevronRight className="h-3.5 w-3.5 text-[#194023] sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </button>

          {/* Dots */}
          <div className="absolute top-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:top-4">
            {OFFERS.map((offer, index) => (
              <button
                key={offer.title}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-6 bg-white sm:w-8"
                    : "w-1.5 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferSlider
