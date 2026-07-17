import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  LogIn,
  Store,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "./Cartcontext";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setMenuOpen(false);

    navigate("/login");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-xl"
            : "bg-white"
        }`}
      >
        {/* Top Bar */}

        <div className="hidden lg:flex justify-between items-center bg-[#4f5f3d] text-white text-sm px-8 py-2">

          <div className="flex items-center gap-6">

            <span>🛡 Premium Quality</span>

            <span>🏷 Best Prices</span>

            <span>🚚 Fast Delivery</span>

          </div>

          <span>📞 +91 9897691921</span>

        </div>

        {/* Main Navbar */}

        <nav className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}

          <NavLink to="/" className="select-none">

            <h1 className="text-3xl md:text-4xl font-bold">

              Rohan <span className="text-[#4f5f3d]">Store</span>

            </h1>

            <p className="hidden sm:block text-sm text-gray-500">

              All Home Essentials

            </p>

          </NavLink>

          {/* Desktop Links */}

          <ul className="hidden lg:flex items-center gap-8 text-[16px] font-semibold">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4f5f3d]"
                    : "hover:text-[#4f5f3d] transition"
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
                    ? "text-[#4f5f3d]"
                    : "hover:text-[#4f5f3d] transition"
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
                    ? "text-[#4f5f3d]"
                    : "hover:text-[#4f5f3d] transition"
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
                    ? "text-[#4f5f3d]"
                    : "hover:text-[#4f5f3d] transition"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4f5f3d]"
                    : "hover:text-[#4f5f3d] transition"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
                    {/* Right Side */}

          <div className="flex items-center gap-2 md:gap-3">

            {/* Search */}

            <NavLink to="/search">
              {({ isActive }) => (
                <button
                  className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#4f5f3d] text-white"
                      : "hover:bg-[#4f5f3d] hover:text-white hover:scale-105"
                  }`}
                >
                  <Search size={24} strokeWidth={2.3} />
                </button>
              )}
            </NavLink>

            {!user ? (
              <>
                {/* Login */}

                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `hidden lg:flex items-center gap-2 px-5 h-11 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "border border-[#4f5f3d] text-[#4f5f3d] hover:bg-[#4f5f3d] hover:text-white"
                    }`
                  }
                >
                  <LogIn size={20} />
                  Login
                </NavLink>

                {/* Register */}

                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `hidden xl:flex items-center px-5 h-11 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "bg-[#4f5f3d] text-white hover:bg-[#445624]"
                    }`
                  }
                >
                  Register
                </NavLink>

                {/* Seller */}

                <NavLink
                  to="/seller"
                  className={({ isActive }) =>
                    `hidden xl:flex items-center gap-2 px-5 h-11 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "border border-[#4f5f3d] text-[#4f5f3d] hover:bg-[#4f5f3d] hover:text-white"
                    }`
                  }
                >
                  <Store size={20} />
                  Seller Hub
                </NavLink>
              </>
            ) : (
              <>
                <span className="hidden xl:block font-semibold text-[#4f5f3d]">
                  Hello, {user.name}
                </span>

                {/* Profile */}

                <NavLink to="/profile">
                  {({ isActive }) => (
                    <button
                      className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#4f5f3d] text-white"
                          : "hover:bg-[#4f5f3d] hover:text-white hover:scale-105"
                      }`}
                    >
                      <User size={24} strokeWidth={2.3} />
                    </button>
                  )}
                </NavLink>

                {/* Seller */}

                <NavLink
                  to="/seller/dashboard"
                  className="hidden lg:flex items-center gap-2 border border-[#4f5f3d] text-[#4f5f3d] px-5 h-11 rounded-xl font-semibold hover:bg-[#4f5f3d] hover:text-white transition-all duration-300"
                >
                  <Store size={20} />
                  Seller Hub
                </NavLink>

                {/* Logout */}

                <button
                  onClick={handleLogout}
                  className="hidden lg:flex items-center justify-center h-11 px-5 rounded-xl bg-[#4f5f3d] text-white font-semibold hover:bg-[#445624] transition-all duration-300"
                >
                  Logout
                </button>
              </>
            )}

            {/* Cart */}

            <NavLink to="/cart">
              {({ isActive }) => (
                <div className="relative">
                  <button
                    className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "hover:bg-[#4f5f3d] hover:text-white hover:scale-105"
                    }`}
                  >
                    <ShoppingCart size={24} strokeWidth={2.3} />
                  </button>

                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              )}
            </NavLink>

            {/* Mobile Menu */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              {menuOpen ? (
                <X size={30} strokeWidth={2.3} />
              ) : (
                <Menu size={30} strokeWidth={2.3} />
              )}
            </button>

          </div>

        </nav>
                {/* ================= Mobile Drawer ================= */}

        {menuOpen && (
          <>
            {/* Overlay */}

            <div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}

            <div
              className={`fixed top-0 right-0 h-screen w-[85%] max-w-[360px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Header */}

              <div className="flex items-center justify-between px-6 py-5 border-b">

                <div>

                  <h2 className="text-2xl font-bold">
                    Rohan <span className="text-[#4f5f3d]">Store</span>
                  </h2>

                  <p className="text-sm text-gray-500">
                    All Home Essentials
                  </p>

                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-11 h-11 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
                >
                  <X size={28} />
                </button>

              </div>

              {/* Links */}

              <div className="py-3">

                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 font-medium transition ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/products"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 font-medium transition ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  Products
                </NavLink>

                <NavLink
                  to="/categories"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 font-medium transition ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  Categories
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 font-medium transition ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 font-medium transition ${
                      isActive
                        ? "bg-[#4f5f3d] text-white"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  Contact
                </NavLink>

                <div className="border-t mt-3 pt-3"></div>
                                {!user ? (
                  <>
                    <NavLink
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100 transition"
                    >
                      <LogIn size={20} />
                      Login
                    </NavLink>

                    <NavLink
                      to="/register"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100 transition"
                    >
                      <User size={20} />
                      Register
                    </NavLink>

                    <NavLink
                      to="/seller"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100 transition"
                    >
                      <Store size={20} />
                      Seller Hub
                    </NavLink>
                  </>
                ) : (
                  <>
                    <div className="px-6 py-4 border-b bg-gray-50">
                      <p className="text-sm text-gray-500">Welcome</p>
                      <p className="font-semibold text-[#4f5f3d]">
                        {user.name}
                      </p>
                    </div>

                    <NavLink
                      to="/profile"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100 transition"
                    >
                      <User size={20} />
                      Profile
                    </NavLink>

                    <NavLink
                      to="/seller/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-6 py-4 hover:bg-gray-100 transition"
                    >
                      <Store size={20} />
                      Seller Dashboard
                    </NavLink>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-6 py-4 text-red-600 hover:bg-red-50 transition"
                    >
                      <LogIn size={20} />
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}