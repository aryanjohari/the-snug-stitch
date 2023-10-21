import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const { admin } = useAuthContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products/",{
        headers: {
          'Authorization' : `Bearer ${admin.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };
    if (admin) {
      fetchProducts();
    }
  }, [admin]);

  const handleDeleteProduct = async (productId) => {
    // Send a delete request to your server or API to delete the product
    const response = await fetch(`/api/products/${productId}`, {
      method: "DELETE",
      headers : {
        'Authorization' : `Bearer ${admin.token}`
      }
    });

    const json = await response.json();

    if (response.ok) {
      setProducts(products.filter((product) => product._id !== productId));
      alert(`Product: ${json.title} deleted`);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-semibold mb-8">Product List</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white text-black p-4 rounded-lg shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="mt-2 text-red-500 hover:text-red-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>{" "}
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteProduct;
