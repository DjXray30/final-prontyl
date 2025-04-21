import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Copyright from '../components/Copyright';
import PartyBallot from '../components/PartyBallot';
import VoteConfirmation from '../components/VoteConfirmation';
import bjpLogo from '../assets/bjp.jpg';
import aapLogo from '../assets/aap.jpg';
import incLogo from '../assets/inc.png';

function VoteNow() {
  const [selectedParty, setSelectedParty] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const navigate = useNavigate();

  const handlePartySelect = (party) => {
    setSelectedParty(party);
  };

  const handleSubmitVote = () => {
    if (selectedParty) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmVote = () => {
    setShowConfirmation(false);
    setVoteSubmitted(true);
  };

  const handleCancelVote = () => {
    setShowConfirmation(false);
  };

  const handleReturnToElections = () => {
    navigate('/elections');
  };

  const parties = [
    {
      id: "bjp",
      name: "Bharatiya Janata Party (BJP)",
      logo: bjpLogo,
      manifesto: "The BJP is committed to building a strong, prosperous, and inclusive India. Our vision includes economic growth through infrastructure development, job creation, and technological advancement. We pledge to strengthen national security, preserve cultural heritage, and ensure social justice for all citizens. Our policies focus on rural development, urban renewal, and environmental sustainability. We aim to make India a global leader in innovation, manufacturing, and education.",
    },
    {
      id: "congress",
      name: "Indian National Congress",
      logo: incLogo,
      manifesto: "The Indian National Congress stands for unity in diversity, social justice, and inclusive growth. We are dedicated to protecting constitutional values, strengthening democratic institutions, and safeguarding minority rights. Our economic agenda prioritizes poverty alleviation, employment generation, and reducing inequality. We advocate for universal healthcare, quality education, and women's empowerment. Our foreign policy promotes peace, cooperation, and global partnerships.",
    },
    {
      id: "aap",
      name: "Aam Aadmi Party (AAP)",
      logo: aapLogo,
      manifesto: "The Aam Aadmi Party represents the common citizen's aspirations for good governance and corruption-free administration. We focus on delivering essential services like education, healthcare, water, and electricity at affordable rates. Our governance model emphasizes transparency, accountability, and citizen participation. We are committed to creating sustainable urban environments, improving public transport, and ensuring women's safety. Our economic policies support small businesses, entrepreneurship, and skill development.",
    }
  ];

  return (
    <section className="absolute top-20 w-full min-h-screen bg-black text-white pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-8">
          <h1 className="text-4xl font-bold text-center">Indian General Elections 2029</h1>
          <span className="bg-green-400 text-black text-sm px-3 py-1 rounded-full mt-2 block w-fit mx-auto">
            🟢 Voting Open
          </span>
        </div>

        <div className="w-full h-64 mb-8 overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070&auto=format&fit=crop"
            alt="Election Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-gray-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Election Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <p>📅 <span className="font-semibold">Start Date:</span> April 10, 2029</p>
            <p>📅 <span className="font-semibold">End Date:</span> April 20, 2029</p>
            <p>📢 <span className="font-semibold">Result Date:</span> April 25, 2029</p>
          </div>
          <p className="mt-4 text-gray-300">
            Participate in shaping the future of the nation. Vote now in the Indian General Elections 2029 and make your voice count!
          </p>
        </div>

        {!voteSubmitted ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Select Your Party</h2>
              <PartyBallot
                parties={parties}
                selectedParty={selectedParty}
                onSelectParty={handlePartySelect}
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                className={`px-8 py-3 rounded-xl text-lg font-medium ${
                  selectedParty
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
                onClick={handleSubmitVote}
                disabled={!selectedParty}
              >
                Submit Vote
              </button>
            </div>

            {showConfirmation && selectedParty && (
              <VoteConfirmation
                party={selectedParty}
                onConfirm={handleConfirmVote}
                onCancel={handleCancelVote}
              />
            )}
          </>
        ) : (
          <div className="bg-green-800 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Thank You for Voting!</h2>
            <p className="text-xl mb-6">Your vote has been recorded successfully.</p>
            <p className="mb-8">The results will be announced on April 25, 2029.</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white"
              onClick={handleReturnToElections}
            >
              Return to Elections
            </button>
          </div>
        )}

        <div className="mt-8 text-xs text-gray-500 text-center">
          <p>🔒 Your vote is encrypted and completely confidential.</p>
          <p>This voting system uses advanced security measures to protect your identity and vote.</p>
        </div>
      </div>
      <div className="mt-10">
        <Copyright />
      </div>
    </section>
  );
}

export default VoteNow;
