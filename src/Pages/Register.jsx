import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/auth/register", formData);

      alert(res.data.message);

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#faf9f5] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-bold text-center text-[#4f5f3d] mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#4f5f3d] outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#4f5f3d] outline-none"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#4f5f3d] outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#4f5f3d] outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4f5f3d] text-white py-3 rounded-lg hover:bg-[#3d4d2f]"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

      </div>
    </section>
  );
}