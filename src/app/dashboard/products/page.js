'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ProductManagement() {
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Show success toast notification
        toast.success(`Product "${formData.name}" created successfully!`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset form
        setFormData({
          name: '',
          price: '',
          description: '',
          category: '',
          image: ''
        });
      } else {
        throw new Error(data.message || 'Failed to create product');
      }

    } catch (error) {
      console.error('Error creating product:', error);
      toast.error(error.message || 'Failed to create product. Please try again.', {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#141514] dark:text-white">
            Product Management
          </h1>
          <p className="text-[#717a75] mt-2">
            Create and manage your product catalog
          </p>
        </div>
      </div>

      {/* Product Creation Form */}
      <div className="bg-white dark:bg-[#222] border border-[#f2f3f2] dark:border-[#333] rounded-2xl p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-6 text-[#141514] dark:text-white">
          Create New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-[#141514] dark:text-white mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#f2f3f2] dark:border-[#333] rounded-lg bg-white dark:bg-[#2a2a2a] text-[#141514] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-[#141514] dark:text-white mb-2">
                Price (BDT)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#f2f3f2] dark:border-[#333] rounded-lg bg-white dark:bg-[#2a2a2a] text-[#141514] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-[#141514] dark:text-white mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#f2f3f2] dark:border-[#333] rounded-lg bg-white dark:bg-[#2a2a2a] text-[#141514] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="">Select category</option>
                <option value="furniture">Furniture</option>
                <option value="decor">Home Decor</option>
                <option value="lighting">Lighting</option>
                <option value="textiles">Textiles</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-[#141514] dark:text-white mb-2">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#f2f3f2] dark:border-[#333] rounded-lg bg-white dark:bg-[#2a2a2a] text-[#141514] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#141514] dark:text-white mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-[#f2f3f2] dark:border-[#333] rounded-lg bg-white dark:bg-[#2a2a2a] text-[#141514] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter product description"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isCreating}
              className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isCreating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Product...
                </>
              ) : (
                <>
                  <span className="material-icons-outlined text-sm">add</span>
                  Create Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Demo Note */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="material-icons-outlined text-blue-600 dark:text-blue-400 text-sm mt-0.5">
            info
          </span>
          <div>
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Demo Feature
            </h3>
            <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
              This is a demonstration of product creation with toast notifications. 
              In a real application, this would save to a database and update the product catalog.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}