import { useState } from "react";
import api from "../api/api";

export default function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: "",
    description: "",
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

      await api.post(
        "/products",
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Product Added Successfully");

      setProduct({
        name: "",
        price: "",
        category: "",
        stock: "",
        image: "",
        description: "",
      });

    } catch (error) {
      alert(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">

      <h1 className="text-3xl font-bold mb-6">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full border p-3 rounded-lg"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-3 rounded-lg"
          value={product.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full border p-3 rounded-lg"
          value={product.category}
          onChange={handleChange}
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          className="w-full border p-3 rounded-lg"
          value={product.stock}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border p-3 rounded-lg"
          value={product.image}
          onChange={handleChange}
        />

        <textarea
          rows="4"
          name="description"
          placeholder="Description"
          className="w-full border p-3 rounded-lg"
          value={product.description}
          onChange={handleChange}
        />

        <button
          className="bg-[#4f5f3d] text-white px-8 py-3 rounded-lg"
        >
          Add Product
        </button>

      </form>

    </div>
  );
}