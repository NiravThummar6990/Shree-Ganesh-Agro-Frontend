import HeroHeading from "@/components/home/hero/HeroHeading"
import HeroSubHeading from "@/components/home/hero/HeroSubHeading"
import OfferSlider from "@/components/home/hero/OfferSlider"
import HeroTopSellingProductCard from "@/components/home/hero/HeroTopSellingProductCard"
import HeroProductCard from "@/components/home/hero/HeroProductCard"

const heroProducts = [
  {
    img: "/image/Ground-nuts.jpg",
    name: "Groundnuts",
    description: "Get the freshest Hybrid Groundnuts Seeds.",
    badge: "New",
    badgeColor: "yellow" as const,
    buttonLabel: "Shop Now",
  },
  {
    img: "/image/combo-offer.png",
    name: "Veggie Starter Combo",
    description: "A perfect mix of farm fresh veggies for daily nutrition.",
    badge: "Combo",
    badgeColor: "green" as const,
    buttonLabel: "Add to Cart",
  },
  {
    img: "/image/Wheat.jpg",
    name: "Premium Wheat",
    description: "Best quality wheat grains for healthy family meals.",
    badge: "Hot",
    badgeColor: "red" as const,
    buttonLabel: "Buy Wheat",
    hideOn: "mobile",
  },
  {
    img: "/image/organic-fertilizer.jpg",
    name: "Organic Fertilizer",
    description: "Nourish your fields with 100% natural organic fertilizer.",
    badge: "Organic",
    badgeColor: "blue" as const,
    buttonLabel: "Shop Fertilizer",
    hideOn: "tablet",
  },
]

const hideClass: Record<string, string> = {
  mobile: "hidden sm:flex",
  tablet: "hidden md:flex",
}

const bestSellers = [
  {
    img: "/image/Ground-nuts.jpg",
    name: "Hybrid Groundnuts seeds",
    price: 249,
    unit: "pack",
  },
  {
    img: "/image/offer2.jpg",
    name: "Crop Care Combo",
    price: 399,
    unit: "kit",
  },
  {
    img: "/image/offer3.jpg",
    name: "Premium Wheat Seeds",
    price: 179,
    unit: "kg",
  },
  {
    img: "/image/organic-fertilizer.jpg",
    name: "Organic Fertilizer",
    price: 299,
    unit: "bag",
  },
  {
    img: "/image/offer1.jpg",
    name: "Organic Fertilizer",
    price: 299,
    unit: "bag",
  },
]

const Home = () => {
  return (
    <>
      <div className="relative mt-[-2px] overflow-hidden border border-[#276132] bg-[url('/image/bg.jpg')] bg-cover bg-center bg-no-repeat p-3 sm:p-4 md:p-4">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex w-full max-w-2xl flex-col items-center p-2 text-center sm:p-[8px] md:items-start md:text-left">
            <HeroHeading />
            <div className="mt-4">
              <HeroSubHeading />
            </div>

            <div className="mt-8 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5">
              {heroProducts.map((product) => (
                <HeroProductCard
                  key={product.name}
                  img={product.img}
                  name={product.name}
                  description={product.description}
                  badge={product.badge}
                  badgeColor={product.badgeColor}
                  buttonLabel={product.buttonLabel}
                  className={
                    product.hideOn ? `${hideClass[product.hideOn]} flex` : ""
                  }
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-auto">
            <OfferSlider />
          </div>
        </div>
      </div>

      <section className="w-full bg-[#F3F7F2] px-3 py-10 sm:px-5 sm:py-14 md:px-8 md:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
            <span className="mb-2 flex items-center justify-center font-['Inter'] text-xs font-semibold tracking-[0.25em] text-[#B5651D] uppercase sm:text-sm">
              Handpicked for you
            </span>
            <h2 className="flex items-center justify-center font-['Fraunces'] text-2xl font-semibold text-[#163B22] sm:text-3xl md:text-4xl">
              Best Selling Products
            </h2>
            <div className="mt-4 mb-3 flex items-center justify-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
              <span className="h-5 w-5 rounded-full border border-dashed border-[#276132]" />
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
            </div>
            <p className="max-w-md font-['Inter'] text-sm text-[#3A3229]/70 sm:text-base">
              Trusted by thousands of farmers for quality and results.
            </p>
          </div>

          <div className="grid grid-cols-2 justify-center gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-5 md:gap-10">
            {bestSellers.map((product) => (
              <div key={product.name} className="mx-auto w-full">
                <HeroTopSellingProductCard
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  unit={product.unit}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <button
              type="button"
              className="rounded-full border-2 border-dashed border-[#194023] px-8 py-3 font-['Inter'] text-sm font-semibold text-[#163B22] transition-all duration-300 hover:border-solid hover:border-[#cddfce] hover:bg-[#8baf8d] hover:text-[#163B22]"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
