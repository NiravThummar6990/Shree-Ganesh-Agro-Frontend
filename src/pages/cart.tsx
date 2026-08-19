import PageContent from "@/components/layout/PageContent"
import { Link } from "react-router-dom"
import { useState } from "react"
import {
  Trash2,
  ShieldCheck,
  Truck,
  Leaf,
  ShoppingBag,
  ArrowRight,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react"

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
    image: "/image/offer3.jpg",
    price: 320,
    quantity: 2,
  },
  {
    id: 2,
    name: "Hybrid Maize Seeds",
    image: "/image/offer1.jpg",
    price: 480,
    quantity: 1,
  },
]

const FREE_DELIVERY_THRESHOLD = 999
const DELIVERY_FEE = 49

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

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const deliveryFee =
    subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE

  const total = subtotal + deliveryFee

  const amountToFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal)

  const deliveryProgress = Math.min(
    100,
    (subtotal / FREE_DELIVERY_THRESHOLD) * 100
  )

  return (
    <PageContent>
      <div className="min-h-screen bg-[#F3F7F2] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-6xl">
          {/* ================= HEADER ================= */}
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#276132]/15 bg-white px-4 py-2 shadow-sm">
              <ShoppingBag className="h-4 w-4 text-[#B5651D]" />

              <span className="font-['Inter'] text-xs font-semibold tracking-[0.18em] text-[#B5651D] uppercase">
                Your Shopping Cart
              </span>
            </div>

            <h1 className="font-['Fraunces'] text-4xl font-bold tracking-tight text-[#163B22] sm:text-5xl">
              Review Your Cart
            </h1>

            <p className="mx-auto mt-3 max-w-xl font-['Inter'] text-sm leading-6 text-[#3A3229]/60 sm:text-base">
              Check your selected agricultural products before proceeding to
              checkout.
            </p>
          </div>

          {/* ================= EMPTY CART ================= */}
          {cart.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-[#276132]/25 bg-white px-6 py-16 text-center shadow-[0_15px_50px_rgba(22,59,34,0.08)] sm:px-10">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FAF3E4] ring-8 ring-[#276132]/5">
                <ShoppingBag className="h-9 w-9 text-[#B5651D]" />
              </div>

              <h2 className="font-['Fraunces'] text-2xl font-bold text-[#163B22]">
                Your cart is empty
              </h2>

              <p className="mx-auto mt-2 max-w-md font-['Inter'] text-sm leading-6 text-[#3A3229]/60">
                You haven&apos;t added any agricultural products to your cart
                yet. Explore our collection and find what you need.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D9A404] px-7 py-3.5 font-['Inter'] text-sm font-semibold text-[#163B22] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#276132] hover:text-white hover:shadow-lg"
              >
                Browse Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <>
              {/* ================= FREE DELIVERY MESSAGE ================= */}
              <div className="mb-6 rounded border border-[#276132]/10 bg-white p-4 shadow-sm sm:p-5">
                {amountToFreeDelivery > 0 ? (
                  <>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#276132]/10">
                          <Truck className="h-4 w-4 text-[#276132]" />
                        </div>

                        <p className="font-['Inter'] text-sm text-[#3A3229]">
                          Add{" "}
                          <span className="font-bold text-[#276132]">
                            ₹{amountToFreeDelivery.toLocaleString()}
                          </span>{" "}
                          more to unlock{" "}
                          <span className="font-semibold text-[#B5651D]">
                            FREE delivery
                          </span>
                        </p>
                      </div>

                      <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#276132]">
                        {Math.round(deliveryProgress)}%
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#FAF3E4]">
                      <div
                        className="h-full rounded-full bg-[#276132] transition-all duration-500"
                        style={{ width: `${deliveryProgress}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#276132]/10">
                      <Sparkles className="h-4 w-4 text-[#276132]" />
                    </div>

                    <div>
                      <p className="font-['Inter'] text-sm font-semibold text-[#163B22]">
                        Congratulations! 🎉
                      </p>

                      <p className="font-['Inter'] text-xs text-[#3A3229]/60">
                        You&apos;ve unlocked free delivery on your order.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* ================= MAIN GRID ================= */}
              <div className="grid gap-6 lg:grid-cols-[1fr_370px] lg:items-start">
                {/* ================= PRODUCTS ================= */}
                <section className="overflow-hidden rounded border border-[#276132]/10 bg-white shadow-[0_15px_50px_rgba(22,59,34,0.08)]">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-[#194023]/10 px-5 py-5 sm:px-7">
                    <div>
                      <h2 className="font-['Fraunces'] text-xl font-bold text-[#163B22]">
                        Cart Items
                      </h2>

                      <p className="mt-1 font-['Inter'] text-xs text-[#3A3229]/50">
                        {itemCount} item{itemCount !== 1 ? "s" : ""} in your
                        cart
                      </p>
                    </div>

                    <span className="rounded-full bg-[#FAF3E4] px-3 py-1.5 font-['Inter'] text-xs font-semibold text-[#B5651D]">
                      {itemCount} ITEMS
                    </span>
                  </div>

                  {/* Product List */}
                  <div className="px-4 sm:px-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="group relative flex items-center gap-4 border-b border-[#194023]/10 py-5 last:border-b-0 sm:gap-5 sm:py-6"
                      >
                        {/* Product Image */}
                        <div className="relative h-40 w-40 shrink-0 sm:h-28 sm:w-28">
                          <div className="h-full w-full overflow-hidden rounded border border-[#276132]/10 bg-[#FAF3E4]">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>

                          {/* Quantity Badge */}
                          <span className="absolute -top-2 -right-2 flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white bg-[#276132] px-1.5 font-['Inter'] text-[11px] font-bold text-white shadow-md">
                            {item.quantity}
                          </span>
                        </div>

                        {/* Product Details */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="mb-1 font-['Inter'] text-[9px] font-semibold tracking-[0.15em] text-[#B5651D] uppercase sm:text-[10px]">
                                Agricultural Product
                              </p>

                              <h3 className="truncate font-['Fraunces'] text-base leading-tight font-bold text-[#163B22] sm:text-xl">
                                {item.name}
                              </h3>

                              <p className="text-md mt-1.5 font-['JetBrains_Mono'] text-[#276132]">
                                ₹{item.price.toLocaleString()}{" "}
                                <span className="font-['Inter'] text-xs text-[#3A3229]/50">
                                  / unit
                                </span>
                              </p>
                            </div>

                            {/* Remove */}
                            <button
                              type="button"
                              aria-label={`Remove ${item.name}`}
                              onClick={() => handleRemove(item.id)}
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C1440E]/10 text-[#3A3229]/40 transition-all duration-200 hover:border-[#C1440E]/20 hover:bg-[#C1440E]/10 hover:text-[#C1440E] sm:h-9 sm:w-9"
                            >
                              <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </button>
                          </div>

                          {/* Bottom Product Controls */}
                          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 sm:mt-5">
                            {/* Quantity */}
                            <div>
                              <p className="mb-1 font-['Inter'] text-[9px] font-semibold tracking-wider text-[#3A3229]/45 uppercase sm:mb-1.5 sm:text-[10px]">
                                Quantity
                              </p>

                              <div className="flex h-9 items-center rounded-full border border-[#276132]/15 bg-[#FAF3E4]/60 p-1 sm:h-10">
                                <button
                                  type="button"
                                  aria-label="Decrease quantity"
                                  disabled={item.quantity === 1}
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.id,
                                      item.quantity - 1
                                    )
                                  }
                                  className="flex h-7 w-7 items-center justify-center rounded-full text-[#276132] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 sm:h-8 sm:w-8"
                                >
                                  <Minus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                </button>

                                <span className="min-w-8 text-center font-['Inter'] text-xs font-bold text-[#163B22] sm:min-w-9 sm:text-sm">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  aria-label="Increase quantity"
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.id,
                                      item.quantity + 1
                                    )
                                  }
                                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#276132] shadow-sm transition-all hover:bg-[#276132] hover:text-white sm:h-8 sm:w-8"
                                >
                                  <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                </button>
                              </div>
                            </div>

                            {/* Item Total */}
                            <div className="text-right">
                              <p className="mb-1 font-['Inter'] text-[9px] font-semibold tracking-wider text-[#3A3229]/45 uppercase sm:mb-1.5 sm:text-[10px]">
                                Item Total
                              </p>

                              <p className="font-['JetBrains_Mono'] text-base font-bold text-[#163B22] sm:text-lg">
                                ₹{(item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Continue Shopping */}
                  <div className="border-t border-[#194023]/10 bg-[#FAF3E4]/40 px-5 py-4 sm:px-7">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 font-['Inter'] text-sm font-semibold text-[#276132] transition-colors hover:text-[#B5651D]"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                      Continue Shopping
                    </Link>
                  </div>
                </section>

                {/* ================= ORDER SUMMARY ================= */}
                <aside className="lg:sticky lg:top-24">
                  <div className="overflow-hidden rounded border border-[#276132]/10 bg-[#163B22] shadow-[0_15px_50px_rgba(22,59,34,0.16)]">
                    {/* Summary Header */}
                    <div className="border-b border-white/10 px-6 py-6 sm:px-7">
                      <p className="font-['Inter'] text-[10px] font-semibold tracking-[0.2em] text-[#D9A404] uppercase">
                        Order Summary
                      </p>

                      <h2 className="mt-2 font-['Fraunces'] text-2xl font-bold text-white">
                        Your Total
                      </h2>
                    </div>

                    {/* Summary Content */}
                    <div className="px-6 py-6 sm:px-7">
                      <div className="space-y-4 font-['Inter'] text-sm">
                        <div className="flex items-center justify-between text-white/65">
                          <span>Items</span>

                          <span className="font-semibold text-white">
                            {itemCount}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-white/65">
                          <span>Subtotal</span>

                          <span className="font-['JetBrains_Mono'] text-white">
                            ₹{subtotal.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-white/65">
                          <span>Delivery</span>

                          {deliveryFee === 0 ? (
                            <span className="font-semibold text-[#D9A404]">
                              FREE
                            </span>
                          ) : (
                            <span className="font-['JetBrains_Mono'] text-white">
                              ₹{deliveryFee.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-6 border-t border-dashed border-white/15" />

                      {/* Total */}
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="font-['Inter'] text-xs text-white/50">
                            Total Amount
                          </p>

                          <p className="mt-1 font-['Fraunces'] text-lg font-semibold text-white">
                            Payable
                          </p>
                        </div>

                        <span className="font-['JetBrains_Mono'] text-2xl font-bold text-[#D9A404]">
                          ₹{total.toLocaleString()}
                        </span>
                      </div>

                      {/* Checkout */}
                      <button
                        type="button"
                        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#D9A404] px-5 py-4 font-['Inter'] text-sm font-bold text-[#163B22] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl focus:ring-2 focus:ring-[#D9A404] focus:ring-offset-2 focus:ring-offset-[#163B22] focus:outline-none"
                        disabled={cart.length === 0}
                      >
                        Proceed to Checkout
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      {/* Secure text */}
                      <div className="mt-5 flex items-center justify-center gap-2 text-center">
                        <ShieldCheck className="h-4 w-4 text-[#D9A404]" />

                        <span className="font-['Inter'] text-[11px] text-white/50">
                          Secure & trusted checkout
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1">
                    <div className="flex items-center gap-3 rounded border border-[#276132]/10 bg-white px-4 py-3 shadow-sm">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#276132]/10">
                        <ShieldCheck className="h-4 w-4 text-[#276132]" />
                      </div>

                      <div>
                        <p className="font-['Inter'] text-xs font-semibold text-[#163B22]">
                          Secure Checkout
                        </p>

                        <p className="font-['Inter'] text-[10px] text-[#3A3229]/50">
                          Safe & protected payment
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded border border-[#276132]/10 bg-white px-4 py-3 shadow-sm">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#276132]/10">
                        <Truck className="h-4 w-4 text-[#276132]" />
                      </div>

                      <div>
                        <p className="font-['Inter'] text-xs font-semibold text-[#163B22]">
                          Fast Delivery
                        </p>

                        <p className="font-['Inter'] text-[10px] text-[#3A3229]/50">
                          Reliable pan-India dispatch
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded border border-[#276132]/10 bg-white px-4 py-3 shadow-sm">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#276132]/10">
                        <Leaf className="h-4 w-4 text-[#276132]" />
                      </div>

                      <div>
                        <p className="font-['Inter'] text-xs font-semibold text-[#163B22]">
                          Trusted Products
                        </p>

                        <p className="font-['Inter'] text-[10px] text-[#3A3229]/50">
                          Quality agricultural products
                        </p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </>
          )}
        </div>
      </div>
    </PageContent>
  )
}
