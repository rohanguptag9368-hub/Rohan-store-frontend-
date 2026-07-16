import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Categories() {
  const categories = [
    "Sanitary",
    "Kitchenware",
    "Houseware",
    "Hardware",
  ];

  return (
    <section className="bg-[#faf9f5] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-5xl font-bold text-center text-[#4f5f3d]">
          Shop By Category
        </h1>

        {categories.map((category) => (
          <div key={category} className="mt-16">

            <h2 className="text-3xl font-semibold text-[#4f5f3d] mb-8">
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}