import React from "react"

type BadgeColor = "yellow" | "green" | "red" | "blue"

interface HeroProductCardProps {
  img: string
  name: string
  description: string
  badge?: string
  badgeColor?: BadgeColor
  buttonLabel?: string
  onButtonClick?: () => void
  className?: string
}

const badgeStyles: Record<BadgeColor, string> = {
  yellow: "bg-yellow-400 text-[#276132]",
  green: "bg-green-200 text-[#194023]",
  red: "bg-red-400 text-white",
  blue: "bg-blue-200 text-[#194023]",
}

const HeroProductCard: React.FC<HeroProductCardProps> = ({
  img,
  name,
  description,
  badge,
  badgeColor = "green",
  buttonLabel = "Shop Now",
  onButtonClick,
  className = "",
}) => {
  return (
    <div
      className={`group flex flex-col items-center overflow-hidden rounded-sm bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="relative w-full overflow-hidden">
        <img
          src={img}
          alt={name}
          className="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-28 md:h-32"
        />
        {badge && (
          <span
            className={`absolute top-1.5 right-1.5 rounded-full px-2 py-0.5 text-[9px] font-bold shadow-sm sm:top-2 sm:right-2 sm:text-[10px] ${badgeStyles[badgeColor]}`}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="flex w-full flex-col items-center px-2.5 py-2 text-center sm:px-3 sm:py-2.5">
        <h3 className="mb-1 line-clamp-1 text-xs font-bold text-[#194023] sm:text-sm">
          {name}
        </h3>
        <p className="mb-2 line-clamp-2 text-[10px] leading-snug text-gray-500 sm:text-xs">
          {description}
        </p>
        <button
          type="button"
          onClick={onButtonClick}
          className="w-full rounded-full bg-[#276132] px-3 py-1.5 text-[10px] font-semibold text-white shadow transition-all duration-200 hover:bg-[#194023] sm:text-xs"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}

export default HeroProductCard
