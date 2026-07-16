import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const res = await api.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
      } catch (error) {
        console.log(error);
        alert("Please Login Again");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Loading Profile...
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-5">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex flex-col md:flex-row gap-8 items-center">

            <div className="w-32 h-32 rounded-full bg-green-600 text-white flex justify-center items-center text-5xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1">

              <h1 className="text-3xl font-bold">
                {user.name}
              </h1>

              <p className="text-gray-500 mt-2">
                {user.email}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">

                <p>
                  <span className="font-semibold">
                    Phone :
                  </span>{" "}
                  {user.phone}
                </p>

                <p>
                  <span className="font-semibold">
                    Role :
                  </span>{" "}
                  <span className="capitalize">
                    {user.role}
                  </span>
                </p>

                <p>
                  <span className="font-semibold">
                    Joined :
                  </span>{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>

                <p>
                  <span className="font-semibold">
                    Status :
                  </span>{" "}
                  Active
                </p>

              </div>

              <div className="flex gap-4 mt-8 flex-wrap">

                {user.role === "customer" && (
                  <button
                    onClick={() => navigate("/my-orders")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
                  >
                    My Orders
                  </button>
                )}

                {user.role === "seller" && (
                  <button
                    onClick={() => navigate("/seller/dashboard")}
                    className="bg-[#556B2F] hover:bg-[#445624] text-white px-5 py-3 rounded-xl transition-all duration-300"
                  >
                    Seller Dashboard
                  </button>
                )}

                {user.role === "founder" && (
                  <button
                    onClick={() => navigate("/founder/dashboard")}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg"
                  >
                    Founder Dashboard
                  </button>
                )}

                <button
                  onClick={logout}
                  className="bg-[#556B2F] hover:bg-[#445624] text-white px-5 py-3 rounded-xl transition-all duration-300"
                >
                  Logout
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}