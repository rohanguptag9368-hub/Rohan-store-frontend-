import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;
  const quantity = state?.quantity || 1;

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const [shipping, setShipping] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-red-500">
          No Product Selected
        </h1>
      </div>
    );
  }

  const total = product.price * quantity;

  const placeOrder = async () => {
    const token = localStorage.getItem("token");

if (!token) {
  alert("Please login first.");
  navigate("/login");
  return;
}
    if (
  !shipping.fullName ||
  !shipping.phone ||
  !shipping.email ||
  !shipping.address ||
  !shipping.city ||
  !shipping.state ||
  !shipping.pincode
) {
  return alert("Please fill all shipping details.");
}
  try {
    

    const response = await api.post(
      "/orders",
      {
        productId: product._id,
        quantity,
        shippingAddress: shipping,
        paymentMethod,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(response.data.message);

    navigate("/profile");

  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message || "Order Failed"
    );
  }
};

  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 px-5">

        {/* Shipping */}

        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow">

          <h2 className="text-3xl font-bold mb-8">
            Shipping Address
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={shipping.fullName}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              value={shipping.phone}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={shipping.email}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={shipping.city}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={shipping.state}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={shipping.pincode}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shipping.country}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <textarea
              rows="5"
              name="address"
              placeholder="Full Address"
              value={shipping.address}
              onChange={handleChange}
              className="border p-3 rounded-lg md:col-span-2"
            />

          </div>

        </div>

        {/* Order Summary */}

        <div className="bg-white rounded-xl shadow p-8 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover rounded-lg"
          />

          <h3 className="text-xl font-semibold mt-5">
            {product.name}
          </h3>

          <p className="text-gray-500 mt-2">
            Seller : {product.sellerName}
          </p>

          <p className="mt-4">
            Quantity :
            <span className="font-bold">
              {" "}
              {quantity}
            </span>
          </p>

          <p className="mt-2">
            Price :
            <span className="font-bold">
              {" "}
              ₹{product.price}
            </span>
          </p>

          <hr className="my-6" />

          <h2 className="text-2xl font-bold">
            Total : ₹{total}
          </h2>

          <div className="mt-8">

  <h3 className="font-semibold mb-3">
    Payment Method
  </h3>

  <label className="flex items-center gap-3 mb-3">

    <input
      type="radio"
      checked={paymentMethod === "COD"}
      onChange={() => setPaymentMethod("COD")}
    />

    Cash On Delivery (Available)

  </label>

  <label className="flex items-center gap-3">

    <input
      type="radio"
      disabled
    />

    <span className="text-gray-500">
      Stripe Card Payment (Coming Soon)
    </span>

  </label>

</div>

          <button
            onClick={placeOrder}
            className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
};

export default Checkout;