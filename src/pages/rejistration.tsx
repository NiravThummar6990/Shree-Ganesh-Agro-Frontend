import PageContent from "@/components/layout/PageContent"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Registration = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill all required fields.")
      return
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.")
      return
    }
    setSuccess(true)
    setTimeout(() => {
      navigate("/login")
    }, 1800)
  }

  return (
    <PageContent className="flex min-h-[calc(100vh-200px)] items-center">
      <div className="mx-auto w-full max-w-md rounded-xl bg-white p-7 shadow-xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#184023]">
          Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-[#286A39]"
              htmlFor="name"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-lg border border-[#c3e3b6] px-3 py-2 text-[#194023] focus:border-[#194023] focus:outline-none"
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-[#286A39]"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-lg border border-[#c3e3b6] px-3 py-2 text-[#194023] focus:border-[#194023] focus:outline-none"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-[#286A39]"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="w-full rounded-lg border border-[#c3e3b6] px-3 py-2 text-[#194023] focus:border-[#194023] focus:outline-none"
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Mobile number (optional)"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-[#286A39]"
              htmlFor="password"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-lg border border-[#c3e3b6] px-3 py-2 text-[#194023] focus:border-[#194023] focus:outline-none"
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Create password"
              minLength={6}
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-[#286A39]"
              htmlFor="confirmPassword"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-lg border border-[#c3e3b6] px-3 py-2 text-[#194023] focus:border-[#194023] focus:outline-none"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              minLength={6}
            />
          </div>
          {error && (
            <div className="rounded bg-red-100 px-3 py-2 text-sm text-red-600">
              {error}
            </div>
          )}
          {success && (
            <div className="rounded bg-green-100 px-3 py-2 text-sm text-green-600">
              Registration successful! Redirecting to login...
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#194023] py-2 font-semibold text-white transition-all duration-300 hover:bg-[#286A39]"
            disabled={success}
          >
            Register
          </button>
        </form>
        <div className="mt-5 text-center text-sm text-[#184023]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#297d3e] hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </PageContent>
  )
}

export default Registration
