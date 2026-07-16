export default function Contact() {
  return (
    <section className="bg-[#faf9f5] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#4f5f3d]">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            We'd love to hear from you. Get in touch with our team for any
            questions, support, or business inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-[#4f5f3d] mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#4f5f3d]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#4f5f3d]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#4f5f3d]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#4f5f3d]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#4f5f3d]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#4f5f3d] text-white py-4 rounded-xl hover:bg-[#3d4d2f] transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Details */}
          <div>

            <div className="bg-white rounded-3xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#4f5f3d] mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 text-gray-600 text-lg">
                <p>📞 +91 9897691921</p>
                <p>✉ support@rohanstore.com</p>
                <p>🌐 www.rohanstore.com</p>
                <p>📍 Aligarh, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#4f5f3d] mb-6">
                Business Hours
              </h2>

              <div className="space-y-3 text-gray-600">
                <p>Monday - Friday : 9:00 AM - 8:00 PM</p>
                <p>Saturday : 10:00 AM - 6:00 PM</p>
                <p>Sunday : Closed</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-[#4f5f3d] mb-6">
                Customer Support
              </h2>

              <p className="text-gray-600 leading-8">
                Our support team is available to help you with product
                inquiries, order tracking, returns, refunds, and technical
                assistance. We strive to respond to all customer requests
                within 24 hours.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}