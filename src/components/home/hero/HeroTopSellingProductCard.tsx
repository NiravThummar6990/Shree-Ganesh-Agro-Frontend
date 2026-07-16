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
}

const HeroTopSellingProductCard: React.FC<TopSellingProductCardProps> = ({
  img,
  name,
  price,
  originalPrice,
  discount,
  rating,
}) => {
  const discounts =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null

  return (
    <div className="group mt-4 flex aspect-square w-full max-w-[180px] flex-col overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 active:scale-[0.98] sm:rounded-none sm:hover:-translate-y-1 sm:hover:shadow-lg md:max-w-[200px] lg:max-w-[210px]">
      {/* Image - fixed proportion of the square */}
      <div className="relative h-[88%] w-full shrink-0 overflow-hidden bg-[#f4faf1]">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {
          <span className="absolute top-2 left-2 rounded-full bg-green-200 px-2 py-0.5 text-[10px] font-bold text-yellow-950 sm:px-1.5 sm:text-[9px]">
            Best Selling Product
          </span>
        }

        {discount && (
          <span className="absolute bottom-2 left-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white sm:px-1.5 sm:text-[9px]">
            {discount}% OFF
          </span>
        )}
        {rating !== undefined && (
          <div className="absolute right-2 bottom-2 flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs sm:text-[14px] ${
                  i < Math.round(rating) ? "text-yellow-400" : "text-gray-200"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content - fills remaining square space */}
      <div className="flex min-h-0 flex-1 flex-col justify-between">
        <div>
          <h3 className="line-clamp-1 text-center text-sm font-bold text-[#194023] sm:mb-0.5 sm:text-xs md:text-base">
            {name}
          </h3>

          {/* <div className="flex items-center justify-center gap-1.5 sm:gap-1">
            <span className="text-sm font-bold text-[#276132] sm:text-xs md:text-base">
              &#8377;{price}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-[10px] text-gray-400 line-through sm:text-[9px]">
                &#8377;{originalPrice}
              </span>
            )}
            <span className="text-[10px] text-gray-500 sm:text-[9px]">
              /{unit}
            </span>
          </div> */}

          {/* {note && (
            <div className="mt-1.5 line-clamp-1 w-full rounded-md bg-green-50 px-2 py-1 text-center text-[10px] text-green-900 sm:mt-1 sm:px-1.5 sm:py-0.5 sm:text-[9px]">
              {note}
            </div>
          )} */}
        </div>

        {/* <button
          type="button"
          className="mt-1.5 w-full shrink-0 rounded-full bg-[#276132] px-2 py-1.5 text-xs font-semibold text-white shadow transition-all duration-300 active:scale-95 sm:mt-1 sm:py-1 sm:text-[10px] sm:hover:scale-[1.02]"
        >
          Buy Now
        </button> */}
      </div>
    </div>
  )
}

export default HeroTopSellingProductCard
