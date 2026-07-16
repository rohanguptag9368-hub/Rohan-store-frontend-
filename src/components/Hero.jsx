import heroImage from "../assets/hero.webp";
export default function Hero() {
  return (
    <section className="bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 items-center gap-10">

        {/* Left Side */}
        <div>
          <span className="bg-[#4f5f3d] text-white px-5 py-2 rounded-full text-sm">
            PREMIUM QUALITY
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            Everything You Need,
            <br />
            All in
            <span className="text-[#7b8b63]">
              {" "}One Place
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-xl">
            Hardware, Houseware, Kitchenware &
            Sanitary products for modern living.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-[#4f5f3d] text-white px-8 py-4 rounded-full hover:bg-[#3d4d2f]">
              Shop Now →
            </button>

            <button className="border-2 border-[#4f5f3d] px-8 py-4 rounded-full text-[#4f5f3d]">
              Explore Categories
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
           <img
            src={heroImage}
            alt="Hero"
            className="rounded-3xl shadow-lg w-full"
          />
        </div>

      </div>
    </section>
  );
}