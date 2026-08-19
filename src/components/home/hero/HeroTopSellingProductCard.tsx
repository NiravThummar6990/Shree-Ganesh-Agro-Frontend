import React from "react"

interface TopSellingProductCardProps {
  img: string
  name: string
  price: number
  originalPrice?: number
  unit?: string
  badge?: string
  best?: boolean
  note?: string
  rating?: number
  discount?: number
  onAddToCart?: () => void
}

const HeroTopSellingProductCard: React.FC<TopSellingProductCardProps> = ({
  img,
  name,
  price,
  originalPrice,
  unit,
  discount,
  rating,
  onAddToCart,
}) => {
  const computedDiscount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null

  const discountPercent = discount ?? computedDiscount

  return (
    <div className="group mt-4 flex w-full flex-col overflow-hidden rounded bg-white shadow-[0_4px_16px_rgba(22,59,34,0.08)] transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1 sm:hover:shadow-[0_10px_24px_rgba(22,59,34,0.16)] md:max-w-[200px] lg:max-w-[210px]">
      {/* Image */}
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-[#FAF3E4]">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/15 to-transparent" />

        <span className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-[#B5651D] px-2 py-0.5 font-['Inter'] text-[9px] font-bold tracking-wide text-white sm:px-1.5">
          <span className="text-[8px]">★</span> Best Selling
        </span>

        {discountPercent && (
          <span className="absolute bottom-2 left-2 rounded-full bg-[#C1440E] px-2 py-0.5 font-['Inter'] text-[10px] font-bold text-white sm:px-1.5 sm:text-[9px]">
            {discountPercent}% OFF
          </span>
        )}

        {rating !== undefined && (
          <div className="absolute top-2 right-2 flex items-center justify-center rounded-full bg-white/90 px-1.5 py-0.5 backdrop-blur-sm">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs sm:text-[13px] ${
                  i < Math.round(rating)
                    ? "text-[#D9A404]"
                    : "text-[#194023]/15"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        )}

        {/* Quick add — always visible on touch devices, fades in on hover for desktop */}
        <button
          type="button"
          onClick={onAddToCart}
          aria-label={`Add ${name} to cart`}
          className="absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#D9A404] text-base font-bold text-[#163B22] shadow-md transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:hover:bg-white"
        >
          +
        </button>
      </div>

      {/* Content */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-1 px-2 py-2.5">
        <h3 className="line-clamp-1 text-center font-['Fraunces'] text-sm font-semibold text-[#163B22] sm:text-xs md:text-base">
          {name}
        </h3>
        <div className="flex items-baseline justify-center gap-1.5">
          <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#163B22] sm:text-[11px] md:text-sm">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#3A3229]/40 line-through sm:text-[9px]">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
          {unit && (
            <span className="font-['Inter'] text-[10px] text-[#3A3229]/50 sm:text-[9px]">
              /{unit}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroTopSellingProductCard
