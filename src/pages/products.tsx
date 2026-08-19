import PageContent from "@/components/layout/PageContent"
import { useState } from "react"

type Category = "Grain" | "Seed" | "Pulse"

type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
  unit: string
  category: Category
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    description:
      "Long-grain basmati rice, aromatic and perfect for special occasions.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
    price: 1200,
    unit: "50kg bag",
    category: "Grain",
  },
  {
    id: 2,
    name: "Wheat Grains",
    description: "High-quality wheat grains suitable for chapati and baking.",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80",
    price: 850,
    unit: "50kg bag",
    category: "Grain",
  },
  {
    id: 3,
    name: "Yellow Mustard Seeds",
    description: "Pure yellow mustard seeds, ideal for pickles and tempering.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
    price: 450,
    unit: "25kg bag",
    category: "Seed",
  },
  {
    id: 4,
    name: "Soybean",
    description: "Protein-rich soybeans for all your healthy meal needs.",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb224058dde?auto=format&fit=crop&w=500&q=80",
    price: 600,
    unit: "40kg bag",
    category: "Pulse",
  },
]

const categoryStyles: Record<Category, string> = {
  Grain: "border-[#B5651D] text-[#B5651D]",
  Seed: "border-[#276132] text-[#276132]",
  Pulse: "border-[#194023] text-[#194023]",
}

const Products = () => {
  const [products] = useState<Product[]>(sampleProducts)

  return (
    <PageContent>
      <div className="bg-[#f3f7f2] px-4 py-8 sm:px-8">
        {/* Hero */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block font-['Inter'] text-xs font-semibold tracking-[0.25em] text-[#B5651D] uppercase">
            From the Fields of Gujarat
          </span>
          <h1 className="mb-4 font-['Fraunces'] text-4xl font-semibold text-[#163B22] sm:text-5xl">
            Our Products
          </h1>
          <div className="mx-auto mb-5 flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
            <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
            <span className="h-6 w-6 rounded-full border border-dashed border-[#276132]" />
            <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
            <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
          </div>
          <p className="font-['Inter'] leading-relaxed text-[#3A3229]/80">
            Sourced directly from local farmers and graded for quality, every
            sack we sell carries the same promise: freshness you can trust.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_4px_20px_rgba(22,59,34,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(22,59,34,0.16)]"
            >
              {/* Image + stamp badge */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute top-3 right-3 flex h-14 w-14 rotate-6 items-center justify-center rounded-full border-2 border-dashed bg-white/90 font-['Inter'] text-[10px] font-bold tracking-wide uppercase backdrop-blur-sm ${categoryStyles[product.category]}`}
                >
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="mb-2 font-['Fraunces'] text-xl font-semibold text-[#163B22]">
                  {product.name}
                </h2>
                <p className="mb-5 flex-1 font-['Inter'] text-sm leading-relaxed text-[#3A3229]/75">
                  {product.description}
                </p>

                <div className="flex items-end justify-between border-t border-dashed border-[#194023]/15 pt-4">
                  <div className="flex flex-col">
                    <span className="font-['JetBrains_Mono'] text-lg font-semibold text-[#163B22]">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="font-['Inter'] text-xs text-[#3A3229]/60">
                      per {product.unit}
                    </span>
                  </div>
                  <button className="rounded-full bg-[#D9A404] px-5 py-2 font-['Inter'] text-sm font-semibold text-[#163B22] transition-colors duration-200 hover:bg-[#276132] hover:text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContent>
  )
}

export default Products
