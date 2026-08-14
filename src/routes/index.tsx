import MainLayout from "@/components/layout/MainLayout"
import AboutUs from "@/pages/about_us"
import Home from "@/pages/home"
import Login from "@/pages/login"
import Products from "@/pages/products"
import Contact from "@/pages/contact"
import Cart from "@/pages/cart"
import { Route, Routes } from "react-router-dom"
import Registration from "@/pages/rejistration"
import Undefine from "@/pages/undefine"

const Index = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/undefine" element={<Undefine />} />
      </Route>
    </Routes>
  )
}

export default Index
