import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

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
import MySellerProduct from "./Pages/MySellerProduct";
import EditSellerProduct from "./Pages/EditSellerProduct";
import SellerOrder from "./Pages/SellerOrder";
import SellerEarning from "./Pages/SellerEarning";
import ProductDetails from "./Pages/ProductDetail";
import Checkout from "./Pages/Checkout";
import SplashScreen from "./Pages/Splashscreen";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }  return (
    <>
      <Navbar />

      <div className="pt-40">
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
          <Route path="/seller/my-products" element={<MySellerProduct />}

/>
          <Route
  path="/seller/edit-product/:id"
  element={<EditSellerProduct />}
/>

          <Route path="/admin" element={<AdminDashboard />} />
          <Route
  path="/seller/add-product"
  element={<AddProduct />}
/>
<Route
  path="/seller/orders"
  element={<SellerOrder />}
/>
<Route
  path="/seller/earnings"
  element={<SellerEarning />}
/>
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;