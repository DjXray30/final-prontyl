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
        <div class="max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-white/10 text-center">
    
    <h2 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
        Basic Plan
    </h2>
    
    <p class="text-gray-400 mt-2">Perfect for individuals who want limited access.</p>
    
    <ul class="mt-4 space-y-2 text-lg">
        <li class="flex items-center justify-center"><span class="text-green-500 mr-2">✔</span>Access to limited content</li>
        <li class="flex items-center justify-center"><span class="text-green-500 mr-2">✔</span>Ads included</li>
        <li class="flex items-center justify-center"><span class="text-green-500 mr-2">✔</span>Single device support</li>
    </ul>
    
    <p class="mt-6 text-xl font-semibold text-gray-300">
        ₹199 <span class="text-lg text-gray-500">/month</span>
    </p>
    
    <a href="#" class="mt-6 inline-block bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-lg font-semibold rounded-full shadow-md transition-transform hover:scale-105 hover:shadow-xl">
        Subscribe
    </a>
    
</div>


        {/* Package 2 */}
        <div class="max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-white/10 text-center flex flex-col justify-between">
    
    <h2 class="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
        Standard Plan
    </h2>
    
    <p class="text-gray-400 mt-2 text-lg">Ideal for families with multiple devices.</p>
    
    <ul class="mt-6 space-y-3 text-lg">
        <li class="flex items-center justify-center"><span class="text-green-500 mr-2">✔</span>Access to all content</li>
        <li class="flex items-center justify-center"><span class="text-green-500 mr-2">✔</span>Limited ads</li>
        <li class="flex items-center justify-center"><span class="text-green-500 mr-2">✔</span>Support for up to 3 devices</li>
    </ul>
    
    <p class="mt-6 text-5xl font-bold text-white">
        ₹399 <span class="text-xl text-gray-500">/month</span>
    </p>
    
    <a href="#" class="mt-6 inline-block bg-gradient-to-r from-green-500 to-green-700 px-8 py-3 text-lg font-semibold rounded-full shadow-md transition-transform hover:scale-105 hover:shadow-xl">
        Subscribe
    </a>
    
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