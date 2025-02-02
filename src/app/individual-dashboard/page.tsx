'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import axiosInstance from '../login/axiosInstance';
import Link from 'next/link';

const IndividualDashboard: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch product data

  const getProducts = () => {
    // Add API submission logic here, if needed
    axiosInstance.get("/products/get-products").then((d) => {
      setLoading(true)
      console.log("setFormData", d?.data.products);
      if (d?.data?.products?.length > 0) {
        setProducts(d?.data.products)
        setLoading(false)
      } else {
        setLoading(false)
      }
    });
  };


  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Individual Dashboard</h1>

      {loading ? (
        <p>Loading products...</p>
      ) : products?.length > 0 ? (
        <div className={styles.grid}>
          {products?.map((product: any) => (
            <div key={product._id} className={styles.card}>
              <h3 className="text-xl font-bold">{product?.name}</h3>
              <p className="text-gray-400">{product?.description}</p>
              <p className="text-green-500 font-bold">₹{product?.price}</p>
              <p className="text-green-500 font-bold">Installed {product?.installs || 0}</p>
              <p className="text-green-500 font-bold">
                <Link href={product?.link}>Install App</Link>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default IndividualDashboard;
