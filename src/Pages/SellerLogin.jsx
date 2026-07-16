import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function SellerLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (
        res.data.user.role === "seller" ||
        res.data.user.role === "founder"
      ) {
        navigate("/seller/dashboard");
      } else {
        alert("You are not registered as a seller.");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-[#4f5f3d] mb-6">
          Seller Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#4f5f3d]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#4f5f3d]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4f5f3d] text-white py-3 rounded-lg hover:bg-[#39452d] transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Don't have a seller account?{" "}
          <Link
            to="/seller/register"
            className="text-[#4f5f3d] font-semibold"
          >
            Register Here
          </Link>
        </p>

      </div>

    </div>
  );
}