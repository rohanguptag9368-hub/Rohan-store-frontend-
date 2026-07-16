import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const [loading, setLoading] = useState(false);
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const res = await api.post("/auth/login", {
      email,
      password,
    });

    // Save Token
    localStorage.setItem("token", res.data.token);

    // Save User
    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    alert("Login Successful");

    navigate("/");

  } catch (error) {
    alert(
      error.response?.data?.message || "Login Failed"
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#faf9f5] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-[#4f5f3d] mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#4f5f3d]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#4f5f3d]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

         <button
  type="submit"
  disabled={loading}
  className="w-full bg-[#4f5f3d] text-white py-3 rounded-lg hover:bg-[#39472d]"
>
  {loading ? "Logging In..." : "Login"}
</button>

        </form>

      </div>
    </section>
  );
}