import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./Cartcontext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* Clickable Product Area */}
      <Link to={`/products/${product._id}`}>

        <div className="h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">

          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
            {product.name}
          </h3>

          <p className="text-[#4f5f3d] text-xl font-bold mt-2">
            ₹{product.price}
          </p>

        </div>

      </Link>

      {/* Add To Cart */}
      <div className="px-5 pb-5">

        <button
          onClick={() => {
            addToCart(product);

            setShowToast(true);

            setTimeout(() => {
              setShowToast(false);
            }, 1000);
          }}
          className="w-full bg-[#4f5f3d] text-white py-3 rounded-xl hover:bg-[#3d4d2f] transition"
        >
          Add To Cart
        </button>

        {showToast && (
          <div className="mt-3 bg-green-500 text-white text-center py-2 rounded-lg">
            ✅ Added To Cart
          </div>
        )}

      </div>

    </div>
  );
}