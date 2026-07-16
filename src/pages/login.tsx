import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navigation from "@/components/home/Navigation"

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Simple validation
    if (!form.email || !form.password) {
      setError("Please fill in all fields.")
      return
    }

    setIsLoading(true)

    // Simulated login process
    setTimeout(() => {
      setIsLoading(false)
      if (form.email === "test@example.com" && form.password === "password") {
        // For this example, simulate successful login and redirect
        navigate("/")
      } else {
        setError("Invalid email or password.")
      }
    }, 1200)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f5]">
      {/* Navigation */}
      <div className="bg-[#276132] shadow-lg">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <Navigation />
        </div>
      </div>

      {/* Login form */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-white px-7 py-9 shadow-lg">
          <h2 className="mb-5 text-center text-2xl font-extrabold text-[#194023]">
            Login to Your Account
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-[#194023]"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base text-black outline-none focus:border-[#276132] focus:ring-1 focus:ring-[#276132]"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-[#194023]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-base text-black outline-none focus:border-[#276132] focus:ring-1 focus:ring-[#276132]"
                  placeholder="Your password"
                  required
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path stroke="#276132" strokeWidth="2" d="M4 6l16 16" />
                      <path
                        d="M12 4.5c-6.5 0-10 7.5-10 7.5a20.8 20.8 0 0020 0s-3.5-7.5-10-7.5zM12 4.5c3.313 0 6.25 2.061 7.779 5.018M12 19.5c6.5 0 10-7.5 10-7.5a20.8 20.8 0 00-20 0s3.5 7.5 10 7.5z"
                        stroke="#276132"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 4.5c-6.5 0-10 7.5-10 7.5a20.8 20.8 0 0020 0s-3.5-7.5-10-7.5zM12 19.5c6.5 0 10-7.5 10-7.5a20.8 20.8 0 00-20 0s3.5 7.5 10 7.5z"
                        stroke="#276132"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3.5"
                        stroke="#276132"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {error && <div className="text-sm text-red-500">{error}</div>}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full rounded-lg bg-[#276132] py-2.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#194023] focus:ring-2 focus:ring-[#194023] focus:outline-none disabled:opacity-70"
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>
          </form>
          <div className="mt-5 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#276132] hover:underline"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
