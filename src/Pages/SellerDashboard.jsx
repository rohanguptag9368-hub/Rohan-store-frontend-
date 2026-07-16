import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

const SellerDashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    earnings: 0,
    pending: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/products/dashboard-stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(response.data.stats);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-20">
        Loading Dashboard...
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Seller Dashboard
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Products</h2>
          <p className="text-3xl font-bold">{stats.products}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Orders</h2>
          <p className="text-3xl font-bold">{stats.orders}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Earnings</h2>
          <p className="text-3xl font-bold">₹{stats.earnings}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Pending</h2>
          <p className="text-3xl font-bold">{stats.pending}</p>
        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-10">

        <h2 className="text-2xl font-semibold mb-5">
          Quick Actions
        </h2>

        <div className="flex gap-5 flex-wrap">

          <Link
            to="/seller/add-product"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add Product
          </Link>

          <Link
            to="/seller/my-products"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            My Products
          </Link>

          <Link
            to="/seller/orders"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
          >
            Orders
          </Link>

          <Link
            to="/seller/earnings"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Earnings
          </Link>

        </div>

      </div>

    </div>
  );
};

export default SellerDashboard;