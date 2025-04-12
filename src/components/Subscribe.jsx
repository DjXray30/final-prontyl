import React, { useState } from 'react';

const Subscribe = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    partyName: '',
    package: '',
  });

  const packages = ['Basic', 'Standard', 'Premium']; // Example package options

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add logic to handle form submission (e.g., API call)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg transform transition duration-500 hover:scale-105"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Subscribe to Our Services
        </h2>

        {/* Organization Name */}
        <div className="mb-6">
          <label
            htmlFor="organizationName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name of Organization
          </label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Enter organization name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm"
            required
          />
        </div>

        {/* Party Name */}
        <div className="mb-6">
          <label
            htmlFor="partyName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name of Parties
          </label>
          <input
            type="text"
            id="partyName"
            name="partyName"
            value={formData.partyName}
            onChange={handleChange}
            placeholder="Enter party name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm"
            required
          />
        </div>

        {/* Package Dropdown */}
        <div className="mb-6">
          <label
            htmlFor="package"
            className="block text-gray-700 font-semibold mb-2"
          >
            Select Package
          </label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm"
            required
          >
            <option value="" disabled>
              Select a package
            </option>
            {packages.map((pkg, index) => (
              <option key={index} value={pkg}>
                {pkg}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl hover:from-purple-500 hover:to-pink-500 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
