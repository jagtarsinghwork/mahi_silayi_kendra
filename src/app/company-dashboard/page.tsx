'use client';
// 
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../login/axiosInstance';

const CompanyDetails: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    profile: '',
    ceo: '',
    address: '',
    user_id: '',
  });
  const router = useRouter();

  const getCompany = () => {
    // Add API submission logic here, if needed
    axiosInstance.get("/company/get-company").then((d) => {
      // console.log("setFormData", d);
      setFormData(d.data)
    });
  };

  useEffect(() => {
    getCompany();
  }, [])

  useEffect(() => {
    if(formData?.user_id) {
      router.push('/company-products');
    }
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('Submitted Data:', formData);
    // Add API submission logic here, if needed
    if (formData?.user_id) {
      axiosInstance.post("/company/update-company", formData).then((d) => {
        console.log(d);
      });
      router.push('/company-products'); // Redirect to the products page
    } else {
      axiosInstance.post("/company/create-company", formData).then((d) => {
        console.log(d);
      });
      router.push('/company-products'); // Redirect to the products page
    }
  };




  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Company Details</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <div>
          <label className="block text-gray-400 mb-2">Company Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">Company Profile</label>
          <textarea
            name="profile"
            value={formData.profile}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company profile"
            rows={4}
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">CEO Name</label>
          <input
            type="text"
            name="ceo"
            value={formData.ceo}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter CEO name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">Company Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company address"
            rows={4}
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
    </div>
  );
};

export default CompanyDetails;
