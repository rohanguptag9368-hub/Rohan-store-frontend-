import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function SellerRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/register", {
        ...formData,
        role: "seller",
      });

      alert(res.data.message);

      navigate("/seller/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-[#4f5f3d] mb-6">
          Seller Registration
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Owner Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#4f5f3d] text-white py-3 rounded-lg hover:bg-[#415033]"
          >
            Register as Seller
          </button>

        </form>

      </div>
    </div>
  );
}