import { Package, Users, ShoppingCart, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
export default function AdminDashboard() {
    const navigate = useNavigate();
  return (
    
    
    <div className="min-h-screen bg-[#f8f8f8] p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <Package className="text-[#4f5f3d]" size={40} />
          <h2 className="text-3xl font-bold mt-4">20</h2>
          <p className="text-gray-500">Products</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <Users className="text-blue-600" size={40} />
          <h2 className="text-3xl font-bold mt-4">10</h2>
          <p className="text-gray-500">Users</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <ShoppingCart className="text-orange-600" size={40} />
          <h2 className="text-3xl font-bold mt-4">35</h2>
          <p className="text-gray-500">Orders</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <IndianRupee className="text-green-600" size={40} />
          <h2 className="text-3xl font-bold mt-4">₹2.5L</h2>
          <p className="text-gray-500">Revenue</p>
        </div>

      </div>

      {/* Buttons */}

      <div className="mt-10 flex gap-4">

        <button
         onClick={() => navigate("/admin/add-product")}
        className="bg-[#4f5f3d] text-white px-6 py-3 rounded-lg"
         >
         Add Product
         </button>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Manage Products
        </button>

      </div>

    </div>
  );
}