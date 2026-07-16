import { Link } from "react-router-dom";

export default function SellerHub() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">

        <h1 className="text-4xl font-bold text-[#4f5f3d] mb-4">
          Become a Rohan Stores Seller
        </h1>

        <p className="text-gray-600 mb-8">
          Grow your business by selling your products on Rohan.
          Reach thousands of customers across India.
        </p>

        <div className="flex flex-col gap-4">

  <Link to="/seller/register">
    <button className="w-full bg-[#4f5f3d] text-white py-3 rounded-lg hover:bg-[#405032] transition">
      Register as Seller
    </button>
  </Link>

  <Link to="/seller/login">
    <button className="w-full border border-[#4f5f3d] text-[#4f5f3d] py-3 rounded-lg hover:bg-[#4f5f3d] hover:text-white transition">
      Seller Login
    </button>
  </Link>

</div>
      </div>
    </div>
  );
}