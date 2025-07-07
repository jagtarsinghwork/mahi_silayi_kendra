'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { axiosInstance } from '@/api';


const CompanyProducts: React.FC = () => {

  const [products, setProducts] = useState([
    {
      id: 1,
      _id: 1,
      name: 'Exmaple App',
      link: 'https://example.com/app-one',
      description: 'An amazing app for productivity.',
      price: 299,
      installs: 1200,
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: 'One',
    link: 'https://newapp.com',
    description: 'this is description one',
    price: '200',
    user_id:"id"
  });

  const router = useRouter();

  useEffect(() => {
    getProducts()
  }, [])


  // Handle input changes in the modal
  const handleModalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Add new product
  // const handleAddProduct = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const product = {
  //     ...newProduct,
  //     id: products.length + 1,
  //     installs: 0, // New products have no installs initially
  //   };
  //   setProducts([...products, product]);
  //   setShowModal(false);
  //   setNewProduct({ name: '', link: '', description: '', price: '' });

  //   // Simulate API call
  //   // console.log('API call to create product:', product);
  //   if (newProduct?.user_id) {
  //     axiosInstance.post("/products/update-company", newProduct).then((d) => {
  //       console.log(d);
  //     });
  //     router.push('/company-products'); // Redirect to the products page
  //     // router.push('/payments');
  //   } else {
  //     axiosInstance.post("/products/create-product", newProduct).then((d) => {
  //       console.log(d);
  //     });
  //     router.push('/company-products'); // Redirect to the products page
  //   }

  // };


  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const product = {
      ...newProduct,
      id: products.length + 1,
      _id: products.length + 1, // Ensure _id is included

      installs: 0, // New products have no installs initially
      price: parseFloat(newProduct.price), // Ensure price is a number
    };
    setProducts([...products, product]);
    setShowModal(false);
    setNewProduct({ name: '', link: '', description: '', price: '',user_id  : "" });  

    // Simulate API call
    // console.log('API call to create product:', product);
    if (newProduct?.user_id && newProduct?.user_id) {
      axiosInstance.post("/products/update-company", newProduct).then((d) => {
        console.log(d);
      });
      router.push('/company-products'); // Redirect to the products page
      // router.push('/payments');
    } else {
      axiosInstance.post("/products/create-product", newProduct).then((d) => {
        console.log(d);
      });
      router.push('/company-products'); // Redirect to the products page
    }
  };



  const getProducts = () => {
    // Add API submission logic here, if needed
    axiosInstance.get("/products/get-products").then((d) => {
      console.log("setFormData", d?.data.products);
      if (d?.data?.products?.length > 0) {
        setProducts(d?.data.products)
      }
    });
  };

  const viewProductDetails = () => {
    // Add API submission logic here, if needed
    axiosInstance.get(`/products/get-products/${products[0]?._id}`).then((d) => {
      // console.log("setFormData", d?.data?.products);
      if (d?.data?.products?.length > 0) {
        setProducts(d?.data.products)
      }
    });
  };








  const downloadCSV = () => {
    console.log("CSV");
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Company Products</h1>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-400">Manage your apps and view details.</p>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div key={product.id} className="bg-gray-900 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <p className="text-gray-400 mt-2">{product.description}</p>
            <p className="text-green-500 mt-2 font-bold text-right ">₹{product.price || 0}</p>
            <p className="text-gray-400 mt-2 text-right ">Installs: {product.installs || 0}</p>
            <Link
              href={`company-products/view/${product?._id}`}
              // target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-6 block text-right"
            >
              View App
            </Link>
            <button
              onClick={() => downloadCSV()}
              className="px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600"
            >Download csv </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center space-y-6">
            <h2 className="text-2xl font-bold">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">App Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleModalChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter app name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">App Link</label>
                <input
                  type="url"
                  name="link"
                  value={newProduct.link}
                  onChange={handleModalChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter app link"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Description</label>
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleModalChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter app description"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleModalChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter price"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-gray-400 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProducts;


