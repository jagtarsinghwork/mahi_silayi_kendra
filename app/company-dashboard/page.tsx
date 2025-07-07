'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetCompany, useCreateCompany, useUpdateCompany } from '@/hooks/company';
import { Company } from '@/types/company';

const CompanyDetails: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<Company>({
    name: '',
    email: '',
    profile: '',
    ceo: '',
    address: '',
    user_id: '',
  });
  

  // Fetch company data
  const { data: companyData, isLoading: isFetching } = useGetCompany();

  // Create company mutation
  const { mutation: createMutation } = useCreateCompany({
    onSuccess: () => {
      router.push('/company-products');
    },
    onError: (error) => {
      console.error('Error creating company:', error.message);
    },
  });

  // Update company mutation
  const { mutation: updateMutation } = useUpdateCompany({
    onSuccess: () => {
      router.push('/company-products');
    },
    onError: (error) => {
      console.error('Error updating company:', error.message);
    },
  });

  // Set form data when company data is fetched
  React.useEffect(() => {
    if (companyData?.data) {
      setFormData(companyData.data);
    }
  }, [companyData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    if (formData.user_id) {
      updateMutation.mutate(form); // Update existing company
    } else {
      createMutation.mutate(form); // Create new company
    }
  };

  if (isFetching) return <div className="min-h-screen bg-black text-white p-6">Loading...</div>;

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
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
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
          disabled={createMutation.isPending || updateMutation.isPending}
        >
          {createMutation.isPending || updateMutation.isPending ? 'Submitting...' : 'Submit'}
        </button>
        {(createMutation.error || updateMutation.error) && (
          <p className="text-red-500 mt-4">
            {createMutation.error?.message || updateMutation.error?.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default CompanyDetails;