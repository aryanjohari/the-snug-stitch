import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export const ProductList = () => {
  const { admin } = useAuthContext()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products/',{
        headers: {
          'Authorization' : `Bearer ${admin.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };
    fetchProducts();
  }, [admin]);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-semibold mb-8">Product List</h1>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products &&
          products.map((product) => {
            return (
              <li
                key={product._id}
                className="bg-white text-black p-4 rounded-lg shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto mb-4"
                />
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <Link
                  to={`${product._id}`}
                  className="block mt-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300"
                >
                  Update
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
