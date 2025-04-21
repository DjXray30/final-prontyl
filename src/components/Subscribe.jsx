// import React, { useState } from 'react';

// const Subscribe = () => {
//   const [formData, setFormData] = useState({
//     organizationName: '',
//     partyName: '',
//     package: '',
//   });

//   const packages = ['Basic', 'Standard', 'Premium']; 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-black p-8 rounded-2xl shadow-2xl w-full max-w-lg transform transition duration-500 hover:scale-105"
//       >
//         <h2 className="text-3xl font-extrabold mb-6 text-center text-amber-400">
//           Subscribe to Our Services
//         </h2>

//         {/* Organization Name */}
//         <div className="mb-6">
//           <label
//             htmlFor="organizationName"
//             className="block text-amber-400 font-semibold mb-2"
//           >
//             Name of Organization
//           </label>
//           <input
//             type="text"
//             id="organizationName"
//             name="organizationName"
//             value={formData.organizationName}
//             onChange={handleChange}
//             placeholder="Enter organization name"
//             className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-400 shadow-sm"
//             required
//           />
//         </div>

//         {/* Party Name */}
//         <div className="mb-6">
//           <label
//             htmlFor="partyName"
//             className="block text-amber-400 font-semibold mb-2"
//           >
//             Name of Parties
//           </label>
//           <input
//             type="text"
//             id="partyName"
//             name="partyName"
//             value={formData.partyName}
//             onChange={handleChange}
//             placeholder="Enter party name"
//             className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-400 shadow-sm"
//             required
//           />
//         </div>

//         {/* Package Dropdown */}
//         <div className="mb-6">
//           <label
//             htmlFor="package"
//             className="block text-amber-400 font-semibold mb-2"
//           >
//             Select Package
//           </label>
//           <select
//             id="package"
//             name="package"
//             value={formData.package}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-400 shadow-sm"
//             required
//           >
//             <option value="" disabled>
//               Select a package
//             </option>
//             {packages.map((pkg, index) => (
//               <option key={index} value={pkg}>
//                 {pkg}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-amber-400 text-black py-3 px-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl hover:bg-amber-500 hover:text-black transition duration-300"
//         >
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Subscribe;
import React, { useState } from 'react';

const Subscribe = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    numberOfParties: '',
    parties: [],
    beginningDate: '',
    closingDate: '',
    resultDate: '',
    package: '',
  });

  const packages = ['Basic', 'Standard', 'Premium'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePartyNameChange = (index, value) => {
    const newParties = [...formData.parties];
    newParties[index] = value;
    setFormData(prev => ({ ...prev, parties: newParties }));
  };

  const handleNumberOfPartiesChange = (e) => {
    const value = e.target.value;
    const num = parseInt(value);
    if (!isNaN(num) && num > 0) {
      const emptyParties = Array(num).fill('');
      setFormData(prev => ({
        ...prev,
        numberOfParties: value,
        parties: emptyParties,
      }));
    } else {
      setFormData(prev => ({ ...prev, numberOfParties: value, parties: [] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-2xl mt-20 shadow-2xl w-full max-w-2xl transform transition duration-500 hover:scale-105"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-amber-400">
          Election Subscription Form
        </h2>

        {/* Organization Name */}
        <div className="mb-6">
          <label className="block text-amber-400 font-semibold mb-2">Organization Name</label>
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Enter organization name"
            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
            required
          />
        </div>

        {/* Number of Parties */}
        <div className="mb-6">
          <label className="block text-amber-400 font-semibold mb-2">Number of Parties</label>
          <input
            type="number"
            name="numberOfParties"
            value={formData.numberOfParties}
            onChange={handleNumberOfPartiesChange}
            placeholder="Enter number of parties"
            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
            min="1"
            required
          />
        </div>

        {/* Party Names */}
        {formData.parties.map((party, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-amber-400 font-semibold mb-2">Party {index + 1} Name</label>
            <input
              type="text"
              value={party}
              onChange={(e) => handlePartyNameChange(index, e.target.value)}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
              required
            />
          </div>
        ))}

        {/* Dates */}
        {['beginningDate', 'closingDate', 'resultDate'].map((field, idx) => (
          <div className="mb-6" key={field}>
            <label className="block text-amber-400 font-semibold mb-2">
              {field.replace('Date', ' Date').replace(/^\w/, c => c.toUpperCase())}
            </label>
            <input
              type="date"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
              required
            />
          </div>
        ))}

        {/* Package Selection */}
        <div className="mb-6">
          <label className="block text-amber-400 font-semibold mb-2">Select Package</label>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
            required
          >
            <option value="" disabled>Select a package</option>
            {packages.map((pkg, index) => (
              <option key={index} value={pkg}>{pkg}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-amber-400 text-black py-3 px-4 rounded-lg font-bold text-lg hover:bg-amber-500 transition"
        >
          Submit Election Form
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
