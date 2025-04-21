import React from 'react';

function PartyBallot({ parties, selectedParty, onSelectParty }) {
  return (
    <div className="space-y-6">
      {parties.map((party) => (
        <div
          key={party.id}
          className={`bg-gray-800 rounded-xl p-6 border-2 transition-all ${
            selectedParty && selectedParty.id === party.id
              ? 'border-blue-500 transform scale-[1.02]'
              : 'border-transparent hover:border-gray-600'
          }`}
          onClick={() => onSelectParty(party)}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-500">
                {selectedParty && selectedParty.id === party.id ? (
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                ) : null}
              </div>

              <div className="bg-white p-2 rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden">
                <img
                  src={party.logo}
                  alt={`${party.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold">{party.name}</h3>
            </div>
          </div>

          <div className="mt-4 pl-12">
            <h4 className="text-lg font-medium mb-2">Party Manifesto:</h4>
            <p className="text-gray-300">{party.manifesto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PartyBallot;
