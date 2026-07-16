import { useEffect, useState } from "react";
import api from "../api/api";

const Earnings = () => {
  const [data, setData] = useState({
    totalOrders: 0,
    totalEarnings: 0,
  });

  useEffect(() => {
    fetchEarnings();
  }, []);

  const fetchEarnings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/orders/earnings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(res.data.earnings);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-10">
        Seller Earnings
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-xl text-gray-500">
            Total Earnings
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-4">
            ₹{data.totalEarnings}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-xl text-gray-500">
            Delivered Orders
          </h2>

          <p className="text-4xl font-bold mt-4">
            {data.totalOrders}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Earnings;