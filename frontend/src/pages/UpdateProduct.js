import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

export const UpdateProduct = () => {
    const { admin } = useAuthContext()
    const navigate = useNavigate()
    let { id } = useParams()

  const [product, setProduct] = useState({
    title: '',
    image: '',
    category: '',
    sub: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch(`/api/products/fetch/${id}`,{
          headers: {
            'Authorization' : `Bearer ${admin.token}`
          }
        })
        const json = await response.json()

        if(response.ok){
          console.log(json)
            setProduct(json);
        }
    }
    fetchProduct();
  },{admin});

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProduct({ ...product, image: selectedImage });
  };

  const handleSubmit = async (id) => {
    const response = await fetch(`/api/products/${id}`,{
        method: 'PATCH',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json',
            'Authorization' : `Bearer ${admin.token}`
        }
    })

    const json = await response.json()

    if(response.ok){
        alert(`Product: ${json.title} updated successfully`)
    }

  };

  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-8">Update Product</h1>
      <form className="bg-white text-black p-8 rounded-lg shadow w-full max-w-md" onSubmit={handleSubmit(id)}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            placeholder="Product Title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-semibold mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-4">
              <label className="block font-semibold mb-2">Category</label>
              <div className="flex">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="Men"
                    onChange={() => setProduct(prevState => ({
                        ...prevState,
                        category: product.category
                    }))}
                  />{" "}
                  Men
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="Women"
                    checked={product.category === "Women"}
                    onChange={() => setProduct(prevState => ({
                        ...prevState,
                        category: product.category
                    }))}
                  />{" "}
                  Women
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="Kids"
                    checked={product.category === "Kids"}
                    onChange={() => setProduct(prevState => ({
                        ...prevState,
                        category: product.category
                    }))}
                  />{" "}
                  Kids
                </label>
                <label>
                  <input
                    type="radio"
                    value="Accessory"
                    checked={product.category === "Accessory"}
                    onChange={() => setProduct(prevState => ({
                        ...prevState,
                        category: product.category
                    }))}
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
                    checked={product.sub === "Hoodie"}
                    onChange={() => setProduct(prevState => ({
                        ...prevState,
                        sub: product.sub
                    }))}
                  />{" "}
                  Hoodie
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="Jacket"
                    checked={product.sub === "Jacket"}
                    onChange={() => setProduct(prevState => ({
                        ...prevState,
                        sub: product.sub
                    }))}
                  />{" "}
                  Jacket
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="Sweatshirt"
                    checked={product.sub === "Sweatshirt"}
                    onChange={() => setProduct(prevState => ({
                        ...prevState,
                        sub: product.sub
                    }))}
                  />{" "}
                  Sweatshirt
                </label>
                <label>
                  <input
                    type="radio"
                    value="Tshirt"
                    checked={product.sub === "Tshirt"}
                    onChange={() => setProduct(prevState => ({
                        ...prevState,
                        sub: product.sub
                    }))}
                  />{" "}
                  Tshirt
                </label>
              </div>
            </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

