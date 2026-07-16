export default function Footer() {
  return (
    <footer className="bg-[#4f5f3d] text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold">
              Rohan
            </h2>

            <p className="mt-4 text-gray-300">
              Your trusted destination for sanitary,
              hardware, kitchenware and houseware products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Products</li>
              <li>Categories</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Categories
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Sanitary</li>
              <li>Kitchenware</li>
              <li>Houseware</li>
              <li>Hardware</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>📞 +91 9897691921</li>
              <li>✉ info@rohan.com</li>
              <li>📍 Aligarh, Uttar Pradesh</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-500 mt-10 pt-6 text-center text-gray-300">
          © 2026 CareStore. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}