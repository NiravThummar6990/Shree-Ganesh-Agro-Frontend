import PageContent from "@/components/layout/PageContent"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Trash } from "lucide-react"

interface CartItem {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

const mockCartData: CartItem[] = [
  {
    id: 1,
    name: "Organic Wheat Seeds",
    image: "/image/products/wheat.jpg",
    price: 320,
    quantity: 2,
  },
  {
    id: 2,
    name: "Hybrid Maize Seeds",
    image: "/image/products/maize.jpg",
    price: 480,
    quantity: 1,
  },
]

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>(mockCartData)

  const handleQuantityChange = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    )
  }

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <PageContent>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-2xl font-extrabold text-[#194023]">
          Cart
        </h1>
        {cart.length === 0 ? (
          <div className="flex h-60 flex-col items-center justify-center">
            <img
              src="/image/empty-cart.png"
              alt="Empty Cart"
              className="mb-4 h-24 opacity-70"
            />
            <p className="mb-2 text-lg font-medium text-[#194023]">
              Your cart is empty.
            </p>
            <Link
              to="/products"
              className="rounded-lg bg-[#276132] px-6 py-2.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#194023]"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="rounded-xl bg-white px-5 py-7 shadow-lg">
            <div className="mb-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="mb-5 flex items-center border-b border-gray-200 pb-5 last:mb-0 last:border-b-0 last:pb-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mr-4 h-16 w-16 rounded-lg border object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-base font-semibold text-[#194023]">
                      {item.name}
                    </h2>
                    <div className="mt-1 text-sm font-semibold text-[#276132]">
                      ₹{item.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Decrease"
                      className="rounded bg-gray-100 px-2 py-0.5 font-bold text-[#276132] hover:bg-gray-200"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                    >
                      –
                    </button>
                    <span className="min-w-[32px] text-center select-none">
                      {item.quantity}
                    </span>
                    <button
                      aria-label="Increase"
                      className="rounded bg-gray-100 px-2 py-0.5 font-bold text-[#276132] hover:bg-gray-200"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-5 flex items-center">
                    <span className="mx-3 font-semibold text-[#194023]">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      aria-label="Remove"
                      className="ml-3 rounded p-1 text-red-500 hover:bg-red-50"
                      onClick={() => handleRemove(item.id)}
                    >
                      <Trash className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="text-lg font-bold text-[#194023]">Total:</div>
              <div className="text-xl font-bold text-[#276132]">
                ₹{total.toLocaleString()}
              </div>
            </div>
            <div className="mt-7">
              <button
                className="w-full rounded-lg bg-[#276132] py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-[#194023] focus:ring-2 focus:ring-[#194023] focus:outline-none disabled:opacity-70"
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </PageContent>
  )
}
