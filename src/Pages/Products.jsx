import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import api from "../api/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        console.log(JSON.stringify(response.data, null, 2));
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

  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-20">
        Loading products...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-center text-red-500 mt-20">
        {error}
      </h2>
    );
  }

  return (
    <section className="bg-[#faf9f5] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-5xl font-bold text-center text-[#4f5f3d]">
          Our Products
        </h1>

        <p className="text-center text-gray-500 mt-4">
          Discover premium sanitary, kitchenware, houseware and hardware products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {products.map((product) => (
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