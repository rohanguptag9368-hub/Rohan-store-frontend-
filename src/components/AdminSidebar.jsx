import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  PlusCircle,
  LogOut,
} from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-white text-[#4f5f3d] font-semibold"
        : "hover:bg-[#60724b] text-white"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-72 bg-[#4f5f3d] text-white shadow-xl flex flex-col">

        <div className="p-6 border-b border-white/20">
          <h1 className="text-3xl font-bold">
            Rohanx Admin
          </h1>

          <p className="text-sm text-gray-200 mt-2">
            Store Management Panel
          </p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-5 space-y-3">

          <NavLink to="/admin" end className={linkClass}>
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/add-product"
            className={linkClass}
          >
            <PlusCircle size={20} />
            Add Product
          </NavLink>

          <NavLink
            to="/admin/products"
            className={linkClass}
          >
            <Package size={20} />
            Products
          </NavLink>

          <NavLink
            to="/admin/users"
            className={linkClass}
          >
            <Users size={20} />
            Users
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={linkClass}
          >
            <ShoppingCart size={20} />
            Orders
          </NavLink>

        </nav>

        {/* Logout */}
        <div className="p-5 border-t border-white/20">

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">

        <Outlet />

      </main>

    </div>
  );
}