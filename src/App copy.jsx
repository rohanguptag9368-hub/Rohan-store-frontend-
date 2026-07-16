import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/HomePage";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SellerLogin from "./Pages/SellerLogin";
import SellerRegister from "./Pages/SellerRegister";
import SellerDashboard from "./Pages/SellerDashboard";

import AdminDashboard from "./Pages/AdminDashboard";
import AddProduct from "./Pages/AddSellerProduct";
import SellerHub from "./pages/SellerHub";

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/seller" element={<SellerHub />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/register" element={<SellerRegister />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route
  path="/seller/add-product"
  element={<AddProduct />}
/>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;