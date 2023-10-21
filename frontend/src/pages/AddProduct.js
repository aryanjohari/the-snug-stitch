import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [sub, setSub] = useState("");
  const [error, setError] = useState(null);
  const { admin } = useAuthContext();

  const handleImageChange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!admin){
      setError("Unauthorized")
      return
    }

    const product = { title, image, category, sub };

      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
          'Authorization' : `Bearer ${admin.token}`
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        console.log(error);
      }
      if (response.ok) {
        setError(null);
        setTimeout(() => {
          alert("Product has been added.");
        }, 1000);
      }
  };

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-8">Add Product</h1>
      <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold mb-8">Add Product</h1>
        <form
          className="bg-white text-black p-8 rounded-lg shadow w-full max-w-md"
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Product Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block font-semibold mb-2">
              Image
            </label>
            <input
              name="imageUpload"
              type="file"
              id="image"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              onChange={handleImageChange}
            />
            <img src={image} alt="" width={50} height={50} />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Category</label>
            <div className="flex">
              <label className="mr-4">
                <input
                  type="radio"
                  value="Men"
                  checked={category === "Men"}
                  onChange={() => setCategory("Men")}
                />{" "}
                Men
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  value="Women"
                  checked={category === "Women"}
                  onChange={() => setCategory("Women")}
                />{" "}
                Women
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  value="Kids"
                  checked={category === "Kids"}
                  onChange={() => setCategory("Kids")}
                />{" "}
                Kids
              </label>
              <label>
                <input
                  type="radio"
                  value="Accessory"
                  checked={category === "Accessory"}
                  onChange={() => setCategory("Accessory")}
                />{" "}
                Accessory
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Subcategory</label>
            <div className="flex">
              <label className="mr-4">
                <input
                  type="radio"
                  value="Hoodie"
                  checked={sub === "Hoodie"}
                  onChange={() => setSub("Hoodie")}
                />{" "}
                Hoodie
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  value="Jacket"
                  checked={sub === "Jacket"}
                  onChange={() => setSub("Jacket")}
                />{" "}
                Jacket
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  value="Sweatshirt"
                  checked={sub === "Sweatshirt"}
                  onChange={() => setSub("Sweatshirt")}
                />{" "}
                Sweatshirt
              </label>
              <label>
                <input
                  type="radio"
                  value="Tshirt"
                  checked={sub === "Tshirt"}
                  onChange={() => setSub("Tshirt")}
                />{" "}
                Tshirt
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
