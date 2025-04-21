import React from 'react';

function CandidateBallot({ candidates, selectedCandidate, onSelectCandidate }) {
  return (
    <div className="space-y-6">
      {candidates.map((candidate) => (
        <div 
          key={candidate.id}
          className={`bg-gray-800 rounded-xl p-6 border-2 transition-all ${
            selectedCandidate && selectedCandidate.id === candidate.id 
              ? 'border-blue-500 transform scale-[1.02]' 
              : 'border-transparent hover:border-gray-600'
          }`}
          onClick={() => onSelectCandidate(candidate)}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-500">
                {selectedCandidate && selectedCandidate.id === candidate.id ? (
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                ) : null}
              </div>
              
              <div className="bg-white p-2 rounded-lg w-20 h-20 flex items-center justify-center overflow-hidden">
                <img 
                  src={candidate.photo} 
                  alt={`${candidate.name}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">{candidate.name}</h3>
                <p className="text-sm text-gray-400">{candidate.party}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pl-12">
            <h4 className="text-lg font-medium mb-2">Candidate Manifesto:</h4>
            <p className="text-gray-300">{candidate.manifesto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CandidateBallot;
