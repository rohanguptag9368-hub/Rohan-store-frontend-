export default function About() {
  return (
    <section className="bg-[#faf9f5] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#4f5f3d]">
            About Rohan Store
          </h1>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Rohan Store is your one-stop destination for premium sanitary,
            kitchenware, houseware, and hardware products. We are committed
            to providing quality products, affordable pricing, and a seamless
            shopping experience for every customer.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">

          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <h2 className="text-4xl font-bold text-[#4f5f3d]">10K+</h2>
            <p className="text-gray-500 mt-2">Happy Customers</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <h2 className="text-4xl font-bold text-[#4f5f3d]">500+</h2>
            <p className="text-gray-500 mt-2">Premium Products</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <h2 className="text-4xl font-bold text-[#4f5f3d]">50+</h2>
            <p className="text-gray-500 mt-2">Trusted Brands</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center">
            <h2 className="text-4xl font-bold text-[#4f5f3d]">24/7</h2>
            <p className="text-gray-500 mt-2">Customer Support</p>
          </div>

        </div>

        <div className="mt-24 bg-white rounded-3xl p-10 shadow-md">
  <h2 className="text-3xl font-bold text-[#4f5f3d] mb-6">
    Our Story
  </h2>

  <p className="text-gray-600 leading-8">
    Rohan Store was founded with a vision to make quality home essentials
    accessible to every household. What started as a small local business
    has grown into a trusted destination for sanitary, kitchenware,
    houseware, and hardware products.
  </p>

  <p className="text-gray-600 leading-8 mt-4">
    Since our establishment, we have focused on customer satisfaction,
    premium product quality, and reliable service. Through continuous
    innovation and dedication, Rohan Store has built a reputation for
    providing dependable products at competitive prices.
  </p>
</div>

<div className="mt-12 bg-white rounded-3xl p-10 shadow-md">
  <h2 className="text-3xl font-bold text-[#4f5f3d] mb-6">
    Founder & Leadership
  </h2>

  <p className="text-gray-600 leading-8">
    Rohan Store was founded by Mr Rohan Babu Gupta with the goal of creating a modern
    and reliable platform for home essentials. The idea was born from the
    challenge of finding quality sanitary and household products under one
    roof.
  </p>

  <p className="text-gray-600 leading-8 mt-4">
    Under his leadership, the company continues to focus on innovation,
    customer trust, and long-term growth while maintaining the highest
    standards of product quality and service.
  </p>
</div>

<div className="mt-12 bg-white rounded-3xl p-10 shadow-md">
  <h2 className="text-3xl font-bold text-[#4f5f3d] mb-6">
    Company Milestones
  </h2>

  <div className="space-y-4 text-gray-600">
    <p>📌 2023 - Business concept and planning phase.</p>
    <p>📌 2025 - Launch of Rohanx Store and first customer acquisition.</p>
    <p>📌 2026 - Expanded product categories and online presence.</p>
    <p>📌 Future Goal - Serve customers nationwide with thousands of products.</p>
  </div>
</div>

        {/* Mission */}
        <div className="mt-24 bg-white rounded-3xl p-10 shadow-md">
          <h2 className="text-3xl font-bold text-[#4f5f3d] mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-8">
            Our mission is to simplify home improvement and household shopping
            by offering high-quality products under one platform. We focus on
            customer satisfaction, product reliability, and affordable pricing
            to help customers build better homes and lifestyles.
          </p>
        </div>

      </div>
    </section>
  );
}