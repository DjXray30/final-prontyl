import React from 'react';

function Register() {
  return (
    <div className="bg-amber-50 min-h-screen flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        Choose Your Package
      </h1>

      {/* Vertical Layout for Packages */}
      <div className="grid grid-cols-1 gap-8 w-11/12">
        {/* Package 1 */}
        <div className="bg-gray-800 shadow-lg rounded-3xl p-8 hover:shadow-xl transition duration-300 h-auto flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
            Basic Plan
          </h2>
          <p className="text-gray-300 text-center text-lg mb-6">
            Perfect for individuals who want limited access.
          </p>
          <ul className="text-gray-300 mb-6 flex flex-col items-center text-lg space-y-4">
            <li className="flex items-center">
              ✅ Access to limited content
            </li>
            <li className="flex items-center">
              ✅ Ads included
            </li>
            <li className="flex items-center">
              ✅ Single device support
            </li>
          </ul>
          <p className="text-right text-5xl font-bold text-white mb-6">
            ₹199/month
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg w-full hover:bg-blue-600 transition duration-300">
            Subscribe
          </button>
        </div>

        {/* Package 2 */}
        <div className="bg-gray-800 shadow-lg rounded-3xl p-8 hover:shadow-xl transition duration-300 h-auto flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-center text-green-400 mb-6">
            Standard Plan
          </h2>
          <p className="text-gray-300 text-center text-lg mb-6">
            Ideal for families with multiple devices.
          </p>
          <ul className="text-gray-300 mb-6 flex flex-col items-center text-lg space-y-4">
            <li className="flex items-center">
              ✅ Access to all content
            </li>
            <li className="flex items-center">
              ✅ Limited ads
            </li>
            <li className="flex items-center">
              ✅ Support for up to 3 devices
            </li>
          </ul>
          <p className="text-right text-5xl font-bold text-white mb-6">
            ₹399/month
          </p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg w-full hover:bg-green-600 transition duration-300">
            Subscribe
          </button>
        </div>

        {/* Package 3 */}
        <div className="bg-gray-800 shadow-lg rounded-3xl p-8 hover:shadow-xl transition duration-300 h-auto flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-center text-red-400 mb-6">
            Premium Plan
          </h2>
          <p className="text-gray-300 text-center text-lg mb-6">
            Best for enthusiasts who want exclusive features.
          </p>
          <ul className="text-gray-300 mb-6 flex flex-col items-center text-lg space-y-4">
            <li className="flex items-center">
              ✅ Access to all content
            </li>
            <li className="flex items-center">
              ✅ No ads
            </li>
            <li className="flex items-center">
              ✅ Support for up to 5 devices
            </li>
            <li className="flex items-center">
              ✅ Exclusive premium features
            </li>
          </ul>
          <p className="text-right text-5xl font-bold text-white mb-6">
            ₹599/month
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg w-full hover:bg-red-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;