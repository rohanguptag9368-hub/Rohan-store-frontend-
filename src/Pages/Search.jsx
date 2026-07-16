import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-[#faf9f5] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-5xl font-bold text-center text-[#4f5f3d]">
          Search Products
        </h1>

        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-2xl p-4 rounded-2xl border border-gray-300 focus:border-[#4f5f3d] outline-none shadow-sm"
          />
        </div>

        <p className="mt-5 text-center text-gray-500">
          {filteredProducts.length} Products Found
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}