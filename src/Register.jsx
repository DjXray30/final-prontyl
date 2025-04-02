import React from 'react';

function Register() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        Choose Your Package
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12">
        {/* Package 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            Basic Plan
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Access to limited content with ads.
          </p>
          <p className="text-center text-3xl font-bold text-black mb-4">
            ₹199/month
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-600 transition duration-300">
            Subscribe
          </button>
        </div>

        {/* Package 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
            Standard Plan
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Access to all content with limited ads.
          </p>
          <p className="text-center text-3xl font-bold text-black mb-4">
            ₹399/month
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg w-full hover:bg-green-600 transition duration-300">
            Subscribe
          </button>
        </div>

        {/* Package 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
            Premium Plan
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Access to all content with no ads and exclusive features.
          </p>
          <p className="text-center text-3xl font-bold text-black mb-4">
            ₹599/month
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg w-full hover:bg-red-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;