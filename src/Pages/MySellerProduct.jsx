import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

const MySellerProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/products/my-products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-20">
        Loading...
      </h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        My Products
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border">

          <thead className="bg-gray-200">

            <tr>
              <th className="p-3">Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {products.map((product) => (

              <tr key={product._id} className="text-center border-b">

                <td className="p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover mx-auto rounded"
                  />
                </td>

                <td>{product.name}</td>

                <td>₹{product.price}</td>

                <td>{product.stock}</td>

                <td>{product.category}</td>

                <td className="space-x-2">

                  <Link
                    to={`/seller/edit-product/${product._id}`}
                    className="bg-blue-600 text-white px-3 py-2 rounded"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="bg-red-600 text-white px-3 py-2 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MySellerProduct;