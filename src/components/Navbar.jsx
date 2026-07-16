import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search, User, ShoppingCart, LogIn, Store } from "lucide-react";
import { useCart } from "./Cartcontext";

export default function Navbar() {
  const { cartItems } = useCart();

  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-2xl"
            : "bg-white"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-[#4f5f3d] text-white text-sm px-10 py-2 flex justify-between">
          <div className="flex gap-6">
            <span>🛡 Premium Quality</span>
            <span>|</span>
            <span>🏷 Best Prices</span>
            <span>|</span>
            <span>🚚 Fast Delivery</span>
          </div>

          <div>📞 Need Help? +91 9897691921</div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`px-10 flex justify-between items-center transition-all duration-500 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <div>
            <h1
              className={`font-bold transition-all duration-500 ${
                scrolled ? "text-3xl" : "text-4xl"
              }`}
            >
              Rohan <span className="text-[#4f5f3d]">Store</span>
            </h1>

            <p className="text-gray-500 text-sm">
              All Home Essentials
            </p>
          </div>

          {/* Links */}
          <ul className="hidden md:flex gap-10 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4f5f3d] border-b-2 border-[#4f5f3d] pb-2"
                    : "hover:text-[#4f5f3d]"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4f5f3d] border-b-2 border-[#4f5f3d] pb-2"
                    : "hover:text-[#4f5f3d]"
                }
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4f5f3d] border-b-2 border-[#4f5f3d] pb-2"
                    : "hover:text-[#4f5f3d]"
                }
              >
                Categories
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4f5f3d] border-b-2 border-[#4f5f3d] pb-2"
                    : "hover:text-[#4f5f3d]"
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4f5f3d] border-b-2 border-[#4f5f3d] pb-2"
                    : "hover:text-[#4f5f3d]"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            {/* Search */}
            <NavLink to="/search">
              {({ isActive }) => (
                <Search
                  size={40}
                  className={`cursor-pointer p-2 rounded-full transition ${
                    isActive
                      ? "bg-[#4f5f3d] text-white"
                      : "hover:bg-[#4f5f3d] hover:text-white"
                  }`}
                />
              )}
            </NavLink>

            {/* Login / User */}
            {!user ? (
              <>
                <NavLink to="/login">
                  {({ isActive }) => (
                    <LogIn
                      size={40}
                      className={`cursor-pointer p-2 rounded-full transition ${
                        isActive
                          ? "bg-[#4f5f3d] text-white"
                          : "hover:bg-[#4f5f3d] hover:text-white"
                      }`}
                    />
                  )}
                </NavLink>

                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-semibold transition ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "border border-[#4f5f3d] text-[#4f5f3d] hover:bg-[#4f5f3d] hover:text-white"
                    }`
                  }
                >
                  Register
                </NavLink>
                <NavLink
                to="/seller"
                className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                 isActive
        ? "bg-[#4f5f3d] text-white"
        : "border border-[#4f5f3d] text-[#4f5f3d] hover:bg-[#4f5f3d] hover:text-white"
    }`
  }
>
  <Store size={18} />
  Seller Hub
</NavLink>
              </>
            ) : (
              <>
                <span className="font-semibold text-[#4f5f3d]">
                  Hello, {user.name}
                </span>

                <NavLink to="/profile">
                  {({ isActive }) => (
                    <User
                      size={40}
                      className={`cursor-pointer p-2 rounded-full transition ${
                        isActive
                          ? "bg-[#4f5f3d] text-white"
                          : "hover:bg-[#4f5f3d] hover:text-white"
                      }`}
                    />
                  )}
                </NavLink>
                <NavLink
                to="/seller/dashboard"
                 className="border border-[#4f5f3d] text-[#4f5f3d] px-4 py-2 rounded-lg hover:bg-[#4f5f3d] hover:text-white transition flex items-center gap-2"
                 >
                 <Store size={18} />
                 Seller Hub
                 </NavLink>
                <button
                  onClick={handleLogout}
                  className="bg-[#556B2F] hover:bg-[#445624] text-white px-5 py-3 rounded-xl transition-all duration-300"
                >
                  Logout
                </button>
              </>
            )}

            {/* Cart */}
            <NavLink to="/cart">
              {({ isActive }) => (
                <div className="relative">
                  <ShoppingCart
                    size={40}
                    className={`cursor-pointer p-2 rounded-full transition ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "hover:bg-[#4f5f3d] hover:text-white"
                    }`}
                  />

                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              )}
            </NavLink>

          </div>
        </nav>
      </div>
    </>
  );
}