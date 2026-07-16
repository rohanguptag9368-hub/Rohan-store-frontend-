import { useCart } from "../components/Cartcontext";

export default function Cart() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const shipping = cartItems.length > 0 ? 199 : 0;
  const tax = cartItems.length > 0 ? 500 : 0;
  const total = subtotal + shipping + tax;

  return (
    <section className="bg-[#faf9f5] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-5xl font-bold text-center text-[#4f5f3d] mb-12">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">

            {cartItems.length === 0 ? (
              <div className="bg-white p-10 rounded-3xl shadow-md text-center">
                <h2 className="text-2xl font-semibold">
                  Your Cart Is Empty 🛒
                </h2>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-md p-6 flex items-center gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 rounded-xl object-cover"
                  />

                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-[#4f5f3d] font-bold text-lg mt-2">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))
            )}

          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-md p-8 h-fit">

            <h2 className="text-2xl font-bold text-[#4f5f3d] mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{tax}</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

            </div>

            <button className="w-full mt-8 bg-[#4f5f3d] text-white py-4 rounded-xl hover:bg-[#3d4d2f] transition">
              Proceed To Checkout
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}