import { useCart } from "../components/Cartcontext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../api/api";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);

      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const buyNow = () => {
  navigate("/checkout", {
    state: {
      product,
      quantity,
    },
  });
};

  const increaseQty = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return (
      <div className="text-center text-2xl mt-20">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-2xl mt-20 text-red-600">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left */}

        <div>

          <img
  src={product.image.replace(
    "http://localhost:5000",
    "https://rohan-backend-55cz.onrender.com"
  )}
  alt={product.name}
  className="w-full h-[500px] object-cover rounded-xl shadow-lg"
/>

        </div>

        {/* Right */}

        <div>

          <p className="text-sm text-blue-600 font-semibold mb-2">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-3xl text-green-600 font-bold mt-6">
            ₹{product.price}
          </p>

          <div className="mt-6">

            <span className="font-semibold">
              Seller :
            </span>{" "}
            {product.sellerName}

          </div>

          <div className="mt-3">

            <span className="font-semibold">
              Stock :
            </span>

            {product.stock > 0 ? (
              <span className="text-green-600 font-bold">
                {" "}In Stock ({product.stock})
              </span>
            ) : (
              <span className="text-red-600 font-bold">
                {" "}Out Of Stock
              </span>
            )}

          </div>

          <div className="mt-8">

            <h2 className="text-xl font-bold mb-3">
              Description
            </h2>

            <p className="text-gray-700 leading-8">
              {product.description}
            </p>

          </div>

          {/* Quantity */}

          <div className="mt-10">

            <h2 className="font-semibold mb-3">
              Quantity
            </h2>

            <div className="flex items-center gap-4">

              <button
                onClick={decreaseQty}
                className="w-10 h-10 rounded bg-gray-200 text-xl"
              >
                -
              </button>

              <span className="text-xl font-bold">
                {quantity}
              </span>

              <button
                onClick={increaseQty}
                className="w-10 h-10 rounded bg-gray-200 text-xl"
              >
                +
              </button>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex gap-5 flex-wrap">

            <button
  onClick={() => addToCart({
    ...product,
    quantity,
  })}
  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold"
>
  Add To Cart
</button>
            <button
  onClick={buyNow}
  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold"
>
  Buy Now
</button>
          </div>

        </div>

      </div>

      {/* Product Information */}

      <div className="mt-16 bg-white shadow rounded-xl p-8">

        <h2 className="text-2xl font-bold mb-5">
          Product Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <p>
              <span className="font-semibold">
                Category :
              </span>{" "}
              {product.category}
            </p>

          </div>

          <div>

            <p>
              <span className="font-semibold">
                Seller :
              </span>{" "}
              {product.sellerName}
            </p>

          </div>

          <div>

            <p>
              <span className="font-semibold">
                Available Stock :
              </span>{" "}
              {product.stock}
            </p>

          </div>

          <div>

            <p>
              <span className="font-semibold">
                Price :
              </span>{" "}
              ₹{product.price}
            </p>

          </div>

        </div>

      </div>

      {/* Similar Products */}

      <div className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Similar Products
        </h2>

        <div className="border rounded-xl p-10 text-center text-gray-500">

          Similar Products Coming Soon...

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;