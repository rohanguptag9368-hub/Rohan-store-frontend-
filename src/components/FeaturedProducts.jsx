import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import api from "../api/api";

export default function FeaturedProducts() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  // 👇 ADD THIS HERE
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.products);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 👇 ADD THIS HERE
  const featuredProducts = products.slice(0, 4);

  if (loading) {
  return (
    <div className="text-center py-10">
      Loading products...
    </div>
  );
}

if (error) {
  return (
    <div className="text-center py-10 text-red-500">
      {error}
    </div>
  );
}

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-[#4f5f3d]">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}