import sanitaryImg from "../assets/sanitary.jpg";
import kitchenImg from "../assets/kitchen.jpg";
import housewareImg from "../assets/houseware.jpg";
import hardwareImg from "../assets/hardware.jpg";
export default function Categories() {
  const categories = [
  {
    title: "Sanitary",
    image: sanitaryImg,
  },
  {
    title: "Kitchenware",
    image: kitchenImg,
  },
  {
    title: "Houseware",
    image: housewareImg,
  },
  {
    title: "Hardware",
    image: hardwareImg,
  },
];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        
        <h2 className="text-4xl font-bold text-center text-[#4f5f3d]">
          Shop By Category
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Find everything you need for your home and lifestyle
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-14">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="bg-[#faf9f5] p-5 text-center">
                <h3 className="text-xl font-semibold text-[#4f5f3d]">
                  {category.title}
                </h3>

                <button className="mt-3 text-sm font-medium text-gray-600 hover:text-[#4f5f3d]">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}