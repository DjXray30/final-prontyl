import React from 'react';

function USVoteConfirmation({ candidate, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Confirm Your Vote</h2>
        
        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white p-2 rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden">
              <img 
                src={candidate.photo} 
                alt={candidate.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">{candidate.name}</h3>
              <p className="text-sm text-gray-400">{candidate.party}</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 text-center">
          Are you sure you want to cast your vote for this candidate? This action cannot be undone.
        </p>
        
        <div className="flex gap-4">
          <button 
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button 
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
            onClick={onConfirm}
          >
            Confirm Vote
          </button>
        </div>
        
        <p className="mt-4 text-xs text-gray-500 text-center">
          🔒 Your vote is secure and confidential
        </p>
      </div>
    </div>
  );
}

export default USVoteConfirmation;
