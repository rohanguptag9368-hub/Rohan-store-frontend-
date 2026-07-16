import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

const EditSellerProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);

      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
      alert("Product not found");
    } finally {
      setLoading(false);
    }
  };

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

      await api.put(`/products/${id}`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Product Updated Successfully");

      navigate("/seller/my-products");

    } catch (error) {
      console.log(error);
      alert("Failed to update product");
    }
  };

  if (loading) {
    return (
      <h2 className="text-center mt-20 text-2xl">
        Loading...
      </h2>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10">

      <h1 className="text-4xl font-bold mb-8">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white shadow-lg p-8 rounded-xl"
      >

        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          rows="5"
          className="w-full border p-3 rounded"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Update Product
        </button>

      </form>

    </div>
  );
};

export default EditSellerProduct; 