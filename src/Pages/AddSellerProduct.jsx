import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await api.post("/products", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);

      setProduct({
        name: "",
        category: "",
        brand: "",
        price: "",
        stock: "",
        description: "",
        image: "",
      });

      // Temporary redirect
      navigate("/seller/dashboard");

      // Later we'll change this to:
      // navigate("/seller/my-products");

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message || "Failed to Add Product"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8 text-[#4f5f3d]">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Product Name */}
          <div>
            <label className="block font-medium mb-2">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4f5f3d]"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-2">
              Category
            </label>

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4f5f3d]"
              required
            >
              <option value="">Select Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
              <option>Beauty</option>
              <option>Sports</option>
              <option>Books</option>
            </select>
          </div>

          {/* Brand */}
          <div>
            <label className="block font-medium mb-2">
              Brand
            </label>

            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              placeholder="Brand Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4f5f3d]"
            />
          </div>

          {/* Price & Stock */}
          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block font-medium mb-2">
                Price (₹)
              </label>

              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="0"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4f5f3d]"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Stock
              </label>

              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="Available quantity"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4f5f3d]"
                required
              />
            </div>

          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-2">
              Product Image URL
            </label>

            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4f5f3d]"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Write product description..."
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4f5f3d]"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#4f5f3d] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#3e4b30] transition"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;