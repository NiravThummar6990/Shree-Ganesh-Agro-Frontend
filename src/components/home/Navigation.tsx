import { useState, useRef, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from "lucide-react"

// If you have a logo file, import it here, e.g.:
// import logo from "@/assets/logo.png";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutus" },
  { name: "Products", link: "/products" },
  { name: "Contact", link: "/contact" },
]

interface NavigationProps {
  isLoggedIn?: boolean
  user?: {
    name: string
    avatar?: string
  }
  cartCount?: number
}

const Navigation: React.FC<NavigationProps> = ({
  isLoggedIn = false,
  user,
  cartCount = 0,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const profileRef = useRef<HTMLDivElement>(null)

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Search:", searchQuery)
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (link: string) => location.pathname === link

  return (
    <header className="relative flex items-center justify-between gap-2 px-2">
      {/* Logo */}
      <div className="shrink-0">
        <img
          src="/image/nav-logo2.png"
          alt="Shree Ganesh Agro"
          className="h-9 w-auto cursor-pointer sm:h-10 md:h-12"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-5 text-[15px] font-medium text-white xl:gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="flex items-center gap-3">
              {isActive(item.link) && (
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
              )}
              <Link
                to={item.link}
                className={`whitespace-nowrap transition-all duration-300 hover:text-[#D6F2C2] ${
                  isActive(item.link)
                    ? "font-semibold text-white"
                    : "text-white/80"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="hidden max-w-[220px] flex-1 items-center rounded-full bg-white/10 px-3 py-2 transition-all duration-300 focus-within:bg-white/20 lg:flex xl:max-w-xs"
      >
        <Search className="h-4 w-4 shrink-0 text-white/70" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full bg-transparent px-2 text-sm text-white placeholder:text-white/60 focus:outline-none"
        />
      </form>

      {/* Right side controls */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3">
        {/* Mobile Search Toggle */}
        <button
          type="button"
          onClick={() => setIsSearchOpen((prev) => !prev)}
          aria-label="Toggle search"
          className="rounded-full p-2 text-white transition-colors duration-300 hover:bg-white/10 lg:hidden"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Cart Icon */}
        <Link
          to="/cart"
          aria-label="Cart"
          className="relative rounded-full p-2 text-white transition-colors duration-300 hover:bg-green-300/20"
        >
          <ShoppingCart className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              {cartCount > 9 ? "9+" : cartCount}
            </span>
          )}
        </Link>

        {/* Auth: Login/Register OR Profile */}
        {isLoggedIn ? (
          <div className="relative hidden lg:block" ref={profileRef}>
            <button
              type="button"
              onClick={() => setIsProfileOpen((prev) => !prev)}
              aria-label="User menu"
              aria-expanded={isProfileOpen}
              className="flex items-center gap-1.5 rounded-full p-1 pr-2 transition-colors duration-300 hover:bg-white/10"
            >
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-white/30 xl:h-9 xl:w-9"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF7DD] text-sm font-bold text-[#103C1F] ring-2 ring-white/30 xl:h-9 xl:w-9">
                  {user?.name?.charAt(0).toUpperCase() ?? "U"}
                </div>
              )}
              <ChevronDown
                className={`h-4 w-4 text-white transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute top-full right-0 z-50 mt-2 w-48 rounded-md border border-white/10 bg-[#194023] py-2 shadow-lg">
                <p className="border-b border-white/10 px-4 pb-2 text-sm font-semibold text-white">
                  {user?.name ?? "User"}
                </p>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  My Profile
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  My Orders
                </Link>
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-red-300 transition hover:bg-white/10 hover:text-red-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="hidden rounded-full bg-[#EAF7DD] px-5 py-2 text-sm font-semibold text-[#103C1F] transition-all duration-300 hover:scale-105 hover:bg-white lg:block xl:px-6 xl:py-2.5"
          >
            Login
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="rounded-full p-2 text-white transition-colors duration-300 hover:bg-white/10 lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Search Bar (expands below header) */}
      {isSearchOpen && (
        <form
          onSubmit={handleSearchSubmit}
          className="absolute top-full right-0 left-0 z-40 mt-2 flex items-center rounded-full border border-white/10 bg-[#194023] px-3 py-2 shadow-lg lg:hidden"
        >
          <Search className="h-4 w-4 shrink-0 text-white/70" />
          <input
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-transparent px-2 text-sm text-white placeholder:text-white/60 focus:outline-none"
          />
        </form>
      )}

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 z-50 mt-3 rounded-md border border-white/10 bg-[#194023] p-5 shadow-lg lg:hidden">
          {/* User info at top if logged in */}
          {isLoggedIn && (
            <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7DD] text-base font-bold text-[#103C1F] ring-2 ring-white/30">
                  {user?.name?.charAt(0).toUpperCase() ?? "U"}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-white">
                  {user?.name ?? "User"}
                </p>
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs text-white/70 hover:text-white"
                >
                  View Profile
                </Link>
              </div>
            </div>
          )}

          <ul className="flex flex-col gap-4 text-[15px] font-medium text-white">
            {navItems.map((item) => (
              <li key={item.link} className="flex items-center gap-3">
                {isActive(item.link) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                )}
                <Link
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-all duration-300 hover:text-[#D6F2C2] ${
                    isActive(item.link)
                      ? "font-semibold text-white"
                      : "text-white/80"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {isLoggedIn ? (
            <button
              type="button"
              className="mt-6 w-full rounded-full border border-red-300/40 py-3 text-sm font-semibold text-red-300 transition-all duration-300 hover:bg-red-300/10"
            >
              Logout
            </button>
          ) : (
            <div className="mt-6 flex flex-col gap-2.5">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full rounded-full bg-[#EAF7DD] py-3 text-center text-sm font-semibold text-[#103C1F] transition-all duration-300 hover:bg-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="w-full rounded-full border border-white/40 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  )
}

export default Navigation
