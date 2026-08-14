import PageContent from "@/components/layout/PageContent"
import { Link } from "react-router-dom"

const Undefine = () => {
  return (
    <PageContent className="flex min-h-[calc(100vh-200px)] items-center">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <h1 className="text-7xl font-extrabold text-[#276132] sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-[#194023]">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-full bg-[#276132] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#194023]"
        >
          Go to Home
        </Link>
      </div>
    </PageContent>
  )
}

export default Undefine
