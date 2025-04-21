import React, { useState, useEffect } from 'react';

const Subscribe = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    numberOfParties: '',
    parties: [],
    electionDate: '',
    electionStartTime: '',
    electionEndTime: '',
    resultDate: '',
    package: '',
  });

  // Initialize submittedForms from localStorage if exists
  const [submittedForms, setSubmittedForms] = useState(() => {
    const savedForms = localStorage.getItem('submittedElectionForms');
    return savedForms ? JSON.parse(savedForms) : [];
  });
  
  const packages = ['Basic', 'Standard', 'Premium'];

  // Save to localStorage whenever submittedForms changes
  useEffect(() => {
    localStorage.setItem('submittedElectionForms', JSON.stringify(submittedForms));
  }, [submittedForms]);

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

    const today = new Date().toISOString().split('T')[0];
    if (formData.electionDate <= today) {
      alert('Election date must be after today.');
      return;
    }

    // Check if end time is after start time on the same day
    if (formData.electionDate === formData.electionDate && 
        formData.electionEndTime <= formData.electionStartTime) {
      alert('Election end time must be after start time.');
      return;
    }

    // Add timestamp for sorting or reference
    const newSubmission = {
      ...formData,
      id: Date.now(), // Add unique ID for each submission
      submittedAt: new Date().toISOString()
    };

    const updatedForms = [...submittedForms, newSubmission];
    setSubmittedForms(updatedForms);

    // Reset form
    setFormData({
      organizationName: '',
      numberOfParties: '',
      parties: [],
      electionDate: '',
      electionStartTime: '',
      electionEndTime: '',
      resultDate: '',
      package: '',
    });
  };

  // Function to clear all saved forms (for testing)
  const clearAllForms = () => {
    if (window.confirm('Are you sure you want to delete all saved elections?')) {
      setSubmittedForms([]);
      localStorage.removeItem('submittedElectionForms');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-center">
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
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
              min="1"
              required
            />
          </div>

          {/* Party Inputs */}
          {formData.parties.map((party, index) => (
            <div key={index} className="mb-4">
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

          {/* Election Date */}
          <div className="mb-6">
            <label className="block text-amber-400 font-semibold mb-2">Election Date</label>
            <input
              type="date"
              name="electionDate"
              value={formData.electionDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
              required
            />
          </div>

          {/* Election Start Time */}
          <div className="mb-6">
            <label className="block text-amber-400 font-semibold mb-2">Election Start Time</label>
            <input
              type="time"
              name="electionStartTime"
              value={formData.electionStartTime}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
              required
            />
          </div>

          {/* Election End Time */}
          <div className="mb-6">
            <label className="block text-amber-400 font-semibold mb-2">Election End Time</label>
            <input
              type="time"
              name="electionEndTime"
              value={formData.electionEndTime}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
              required
            />
          </div>

          {/* Result Date */}
          <div className="mb-6">
            <label className="block text-amber-400 font-semibold mb-2">Result Date</label>
            <input
              type="date"
              name="resultDate"
              value={formData.resultDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-amber-200"
              required
            />
          </div>

          {/* Package */}
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
              {packages.map((pkg, i) => (
                <option key={i} value={pkg}>{pkg}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 text-black py-3 px-4 rounded-lg font-bold text-lg hover:bg-amber-500 transition"
          >
            Submit Election Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;