import { useEffect, useState } from "react";
import api from "../api/api";

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/orders/seller-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(JSON.stringify(res.data.orders, null, 2));
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.put(
        `/orders/${id}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      fetchOrders();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Failed to update order"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Seller Orders
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center">
          <h2 className="text-2xl font-semibold">
            No Orders Found
          </h2>
        </div>
      ) : (

        <div className="space-y-8">

          {orders.map((order) => (

            <div
              key={order._id}
              className="bg-white rounded-xl shadow-lg p-6"
            >

              <div className="grid lg:grid-cols-2 gap-8">

                {/* LEFT */}

                <div>

                  <img
  src={order.productImage}
  alt={order.productName}
  className="w-full h-72 object-cover rounded-lg"
/>

                </div>

                {/* RIGHT */}

                <div>

                 <h2 className="text-3xl font-bold">
  {order.productName}
                </h2>
                  <p className="mt-4">
                    <span className="font-semibold">
                      Customer :
                    </span>{" "}
                    {order.customer.name}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Email :
                    </span>{" "}
                    {order.customer.email}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Quantity :
                    </span>{" "}
                    {order.quantity}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Total :
                    </span>{" "}
                    ₹{order.totalPrice}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Payment Method :
                    </span>{" "}
                    {order.paymentMethod}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Payment Status :
                    </span>{" "}

                    <span
                      className={
                        order.paymentStatus === "Paid"
                          ? "text-green-600 font-bold"
                          : "text-red-600 font-bold"
                      }
                    >
                      {order.paymentStatus}
                    </span>

                  </p>

                  <p>
                    <span className="font-semibold">
                      Status :
                    </span>{" "}

                    <span
                      className={
                        order.status === "Delivered"
                          ? "text-green-600 font-bold"
                          : order.status === "Shipped"
                          ? "text-blue-600 font-bold"
                          : order.status === "Accepted"
                          ? "text-yellow-600 font-bold"
                          : "text-red-600 font-bold"
                      }
                    >
                      {order.status}
                    </span>

                  </p>

                  <p>
                    <span className="font-semibold">
                      Ordered On :
                    </span>{" "}
                    {new Date(order.createdAt).toLocaleString()}
                  </p>

                </div>

              </div>

              {/* SHIPPING */}

              <div className="mt-8">

                <h2 className="text-xl font-bold mb-3">
                  Shipping Address
                </h2>

                <div className="bg-gray-100 rounded-lg p-5">

                  <p>{order.shippingAddress.fullName}</p>

                  <p>{order.shippingAddress.phone}</p>

                  <p>{order.shippingAddress.email}</p>

                  <p>{order.shippingAddress.address}</p>

                  <p>
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.state}
                  </p>

                  <p>
                    {order.shippingAddress.country} -
                    {" "}
                    {order.shippingAddress.pincode}
                  </p>

                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex gap-4 mt-8 flex-wrap">

                <button
                  disabled={order.status !== "Pending"}
                  onClick={() =>
                    updateStatus(order._id, "Accepted")
                  }
                  className="bg-blue-600 disabled:bg-gray-400 text-white px-5 py-3 rounded-lg"
                >
                  Accept
                </button>

                <button
                  disabled={order.status !== "Accepted"}
                  onClick={() =>
                    updateStatus(order._id, "Shipped")
                  }
                  className="bg-yellow-500 disabled:bg-gray-400 text-white px-5 py-3 rounded-lg"
                >
                  Ship
                </button>

                <button
                  disabled={order.status !== "Shipped"}
                  onClick={() =>
                    updateStatus(order._id, "Delivered")
                  }
                  className="bg-green-600 disabled:bg-gray-400 text-white px-5 py-3 rounded-lg"
                >
                  Deliver
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default SellerOrders;