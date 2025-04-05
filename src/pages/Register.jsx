import React from 'react';
import Copyright from '../components/Copyright';

function Register() {
  return (
    <>
    <div className="bg-amber-50 min-h-screen flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        Choose Your Voting Package
      </h1>

      {/* Horizontal Layout for Packages */}
      <div className="flex flex-wrap justify-center gap-8 w-11/12">
        {/* Basic Plan */}
        <div className="max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-white/10 text-center flex flex-col justify-between">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Basic Plan
          </h2>
          <p className="text-gray-400 mt-2 text-lg">
            Suitable for small-scale elections with up to 2 crore voters.
          </p>
          <ul className="mt-6 space-y-3 text-lg">
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Support for 10 lakh to 2 crore voters
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Basic voter authentication
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Real-time vote counting
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Limited analytics and reporting
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Email support
            </li>
          </ul>
          <p className="mt-6 text-5xl font-bold text-white">
            $40M <span className="text-xl text-gray-500">/election</span>
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 text-lg font-semibold rounded-full shadow-md transition-transform hover:scale-105 hover:shadow-xl"
          >
            Subscribe
          </a>
        </div>

        {/* Standard Plan */}
        <div className="max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-white/10 text-center flex flex-col justify-between">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
            Standard Plan
          </h2>
          <p className="text-gray-400 mt-2 text-lg">
            Ideal for medium-scale elections with up to 40 crore voters.
          </p>
          <ul className="mt-6 space-y-3 text-lg">
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Support for 4 crore to 40 crore voters
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Advanced voter authentication
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Real-time vote counting with detailed breakdowns
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Comprehensive analytics and reporting
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Priority email and chat support
            </li>
          </ul>
          <p className="mt-6 text-5xl font-bold text-white">
            $100M <span className="text-xl text-gray-500">/election</span>
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-gradient-to-r from-green-500 to-green-700 px-8 py-3 text-lg font-semibold rounded-full shadow-md transition-transform hover:scale-105 hover:shadow-xl"
          >
            Subscribe
          </a>
        </div>

        {/* Premium Plan */}
        <div className="max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-white/10 text-center flex flex-col justify-between">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
            Premium Plan
          </h2>
          <p className="text-gray-400 mt-2 text-lg">
            Designed for large-scale elections with up to 200 crore voters.
          </p>
          <ul className="mt-6 space-y-3 text-lg">
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Support for 50 crore to 200 crore voters
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Biometric voter authentication
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Real-time vote counting with advanced breakdowns
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Advanced analytics and custom reporting
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-500 mr-2">✔</span>Dedicated account manager and 24/7 support
            </li>
          </ul>
          <p className="mt-6 text-5xl font-bold text-white">
            $250M <span className="text-xl text-gray-500">/election</span>
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-gradient-to-r from-red-500 to-red-700 px-8 py-3 text-lg font-semibold rounded-full shadow-md transition-transform hover:scale-105 hover:shadow-xl"
          >
            Subscribe
          </a>
        </div>
      </div>
      <section className="max-w-6xl mx-auto my-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div>
      <div className="text-4xl mb-2">🔒</div>
      <h3 className="font-semibold text-lg">Military-Grade Security</h3>
      <p className="text-gray-500 mt-2">All votes are encrypted and securely transmitted using blockchain-backed protocols.</p>
    </div>
    <div>
      <div className="text-4xl mb-2">⚙️</div>
      <h3 className="font-semibold text-lg">Customizable Features</h3>
      <p className="text-gray-500 mt-2">Tailor the voting experience with custom branding, questions, and analytics.</p>
    </div>
    <div>
      <div className="text-4xl mb-2">📊</div>
      <h3 className="font-semibold text-lg">Real-time Analytics</h3>
      <p className="text-gray-500 mt-2">Track turnout, region-wise breakdowns, and live vote count.</p>
    </div>
  </div>
</section>

    </div>
    <Copyright/>
    </>
  );
}

export default Register;