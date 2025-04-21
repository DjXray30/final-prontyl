import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Copyright from '../components/Copyright';
import CandidateBallot from '../components/CandidateBallot';
import USVoteConfirmation from '../components/USVoteConfirmation';
import trumpPhoto from '../assets/donaldtrump.jpg';
import bidenPhoto from '../assets/joebiden.jpg';
import westPhoto from '../assets/kanyewest.jpg';
import harrisPhoto from '../assets/kamalaharris.png';
import usBanner from '../assets/usbannerimage.jpg';

function USVoteNow() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleSubmitVote = () => {
    if (selectedCandidate) {
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

  const candidates = [
    {
      id: "trump",
      name: "Donald Trump",
      party: "Republican Party",
      photo: trumpPhoto,
      manifesto: "Making America Great Again remains our mission. We will secure our borders, strengthen our economy through tax cuts and deregulation, and restore American leadership globally. Our administration will prioritize job creation, energy independence, and protecting constitutional rights, especially the Second Amendment. We will continue to appoint conservative judges, support law enforcement, and stand against radical policies that threaten American values and prosperity.",
    },
    {
      id: "biden",
      name: "Joe Biden",
      party: "Democratic Party",
      photo: bidenPhoto,
      manifesto: "Building on our progress, we will continue to strengthen the middle class and create an economy that works for everyone, not just those at the top. Our administration will expand affordable healthcare, tackle climate change through clean energy investments, and protect voting rights. We remain committed to unity, restoring America's standing in the world, and defending democracy at home and abroad. Together, we will ensure that every American has a fair shot at success.",
    },
    {
      id: "west",
      name: "Kanye West",
      party: "Independent",
      photo: westPhoto,
      manifesto: "Our vision is a creative renaissance in American governance. We will revolutionize education by emphasizing arts and innovation, reform the criminal justice system with compassion, and rebuild communities through sustainable development. Our administration will champion free thinking, spiritual values, and economic opportunities for all Americans regardless of background. We believe in harnessing technology and creativity to solve America's most pressing challenges while preserving individual freedoms.",
    },
    {
      id: "harris",
      name: "Kamala Harris",
      party: "Democratic Party",
      photo: harrisPhoto,
      manifesto: "As we move forward, we must build an America where opportunity is available to all. My administration will focus on economic justice, comprehensive immigration reform, and criminal justice transformation. We will strengthen protections for women's rights, expand access to healthcare, and lead boldly on climate action. By investing in education, infrastructure, and innovation, we will create a more equitable future while safeguarding our democratic institutions and values for generations to come.",
    }
  ];

  return (
    <section className="absolute top-20 w-full min-h-screen bg-black text-white pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-8">
          <h1 className="text-4xl font-bold text-center">United States Presidential Election 2029</h1>
          <span className="bg-green-400 text-black text-sm px-3 py-1 rounded-full mt-2 block w-fit mx-auto">
            🟢 Voting Open
          </span>
        </div>

        <div className="w-full h-64 mb-8 overflow-hidden rounded-xl">
          <img 
            src={usBanner} 
            alt="US Election Banner" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-gray-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Election Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <p>📅 <span className="font-semibold">Start Date:</span> November 5, 2029</p>
            <p>📅 <span className="font-semibold">End Date:</span> November 5, 2029</p>
            <p>📢 <span className="font-semibold">Result Announcement:</span> November 6, 2029</p>
          </div>
          <p className="mt-4 text-gray-300">
            It's time to decide the future of the United States. Participate in the 2029 Presidential Election and let your voice be heard!
          </p>
        </div>

        {!voteSubmitted ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Select Your Candidate</h2>
              <CandidateBallot 
                candidates={candidates} 
                selectedCandidate={selectedCandidate} 
                onSelectCandidate={handleCandidateSelect} 
              />
            </div>

            <div className="flex justify-center mt-8">
              <button 
                className={`px-8 py-3 rounded-xl text-lg font-medium ${
                  selectedCandidate 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
                onClick={handleSubmitVote}
                disabled={!selectedCandidate}
              >
                Submit Vote
              </button>
            </div>

            {showConfirmation && selectedCandidate && (
              <USVoteConfirmation 
                candidate={selectedCandidate} 
                onConfirm={handleConfirmVote} 
                onCancel={handleCancelVote} 
              />
            )}
          </>
        ) : (
          <div className="bg-green-800 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Thank You for Voting!</h2>
            <p className="text-xl mb-6">Your vote has been recorded successfully.</p>
            <p className="mb-8">The results will be announced on November 6, 2029.</p>
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

export default USVoteNow;
