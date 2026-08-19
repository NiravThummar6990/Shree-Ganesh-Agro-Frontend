import Navigation from "@/components/home/Navigation"
import { Outlet, useLocation } from "react-router-dom"

const MainLayout = () => {
  const location = useLocation()

  const hideNavigation =
    location.pathname === "/login" || location.pathname === "/register"

  return (
    <div className="min-h-screen bg-[#0a180d] p-3 sm:p-5 md:p-7">
      <div className="rounded-md border-2 border-[#BEBEBE] bg-[#276132] p-[4px] sm:p-[6px]">
        {!hideNavigation && (
          <div className="sticky top-[-1px] z-50">
            <div className="bg-gradient-to-r from-[#031C08] to-[#05340F] px-3 py-2 shadow-lg backdrop-blur sm:px-4 sm:py-3 md:px-5">
              <Navigation />
            </div>
          </div>
        )}

        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
