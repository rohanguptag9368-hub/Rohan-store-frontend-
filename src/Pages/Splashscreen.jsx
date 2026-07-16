import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">

      <div className="flex flex-col items-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Rohan Store"
          className="w-80 md:w-[430px] object-contain animate-pulse"
        />

        {/* Welcome */}

        {/* Loading Dots */}
        <div className="flex gap-3 mt-10">

          <span className="w-3 h-3 rounded-full bg-[#556B2F] animate-bounce"></span>

          <span
            className="w-3 h-3 rounded-full bg-[#556B2F] animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>

          <span
            className="w-3 h-3 rounded-full bg-[#556B2F] animate-bounce"
            style={{ animationDelay: "0.30s" }}
          ></span>

        </div>

        <p className="mt-6 text-gray-400 uppercase tracking-[4px] text-sm">
          Loading...
        </p>

      </div>

    </div>
  );
}