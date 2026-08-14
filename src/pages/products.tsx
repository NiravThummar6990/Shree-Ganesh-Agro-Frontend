import PageContent from "@/components/layout/PageContent"
import { useState } from "react"

type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
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
  },
  {
    id: 2,
    name: "Wheat Grains",
    description: "High-quality wheat grains suitable for chapati and baking.",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80",
    price: 850,
  },
  {
    id: 3,
    name: "Yellow Mustard Seeds",
    description: "Pure yellow mustard seeds, ideal for pickles and tempering.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
    price: 450,
  },
  {
    id: 4,
    name: "Soybean",
    description: "Protein-rich soybeans for all your healthy meal needs.",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb224058dde?auto=format&fit=crop&w=500&q=80",
    price: 600,
  },
]

const Products = () => {
  const [products] = useState<Product[]>(sampleProducts)

  return (
    <PageContent>
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-extrabold text-[#194023]">
          Our Products
        </h1>
        <p className="mx-auto max-w-xl text-gray-700">
          Browse our selection of high-quality agricultural products sourced
          directly from local farmers for freshness and quality.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-5">
              <h2 className="mb-2 text-xl font-bold text-[#276132]">
                {product.name}
              </h2>
              <p className="mb-4 flex-1 text-gray-600">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-[#194023]">
                  ₹{product.price.toLocaleString()}
                </span>
                <button className="rounded-lg bg-[#276132] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#194023]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContent>
  )
}

export default Products
