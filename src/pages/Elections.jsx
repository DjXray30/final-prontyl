import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';

function Elections() {
  const upcomingRef = useRef(null);
  const scrollToSection = () => {
    upcomingRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const [upcomingElections, setUpcomingElections] = useState([]);

  useEffect(() => {
    const storedForms = localStorage.getItem('submittedElectionForms');
    if (storedForms) {
      setUpcomingElections(JSON.parse(storedForms));
    }
  }, []);


  return (
    <>
      <section className="absolute top-20 w-full h-screen ">
        <div className="flex justify-center space-x-4 py-4">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            onClick={() => scrollToSection(upcomingRef)}
          >
            Upcoming Elections
          </button>
        </div>

        {/* Active Elections */}
        <div className="text-5xl text-black font-bold text-center py-8">
          <p>
            Active Elections
            <hr className="border-t-2 border-gray-300 w-1/4 mx-auto mt-4" />
          </p>
        </div>

        {/* Card 1 */}
        <div className="bg-black text-white rounded-2xl p-8  max-w-5xl mx-auto my-8 shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h2 className="text-2xl font-semibold">Indian General Elections 2029</h2>
            <span className="bg-green-400 text-black text-sm px-3 py-1 rounded-full mt-2 sm:mt-0">
              🟢 Voting Open
            </span>
          </div>

          <p className="mt-4 text-gray-300">
            Participate in shaping the future of the nation. Vote now in the Indian General Elections 2029 and make your voice count!
          </p>

          <div className="mt-6 space-y-1 text-sm text-gray-400">
            <p>📅 <span className="font-semibold">Start Date:</span> April 10, 2029</p>
            <p>📅 <span className="font-semibold">End Date:</span> April 20, 2029</p>
            <p>📢 <span className="font-semibold">Result Date:</span> April 25, 2029</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/vote/indian-general-elections-2029" className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl text-sm font-medium">
              🗳️ Vote Now
            </Link>
            <button className="bg-gray-700 hover:bg-gray-800 transition text-white px-5 py-2 rounded-xl text-sm font-medium">
              👥 View Parties
            </button>
          </div>

          <p className="mt-6 text-xs italic text-gray-500">
            🔒 Your vote is encrypted and completely confidential.
          </p>
        </div>
        <div className="bg-black text-white rounded-2xl p-8 max-w-5xl mx-auto my-8 shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h2 className="text-2xl font-semibold">United States Presidential Election 2029</h2>
            <span className="bg-green-400 text-black text-sm px-3 py-1 rounded-full mt-2 sm:mt-0">
              🟢 Voting Open
            </span>
          </div>

          <p className="mt-4 text-gray-300">
            It's time to decide the future of the United States. Participate in the 2029 Presidential Election and let your voice be heard!
          </p>

          <div className="mt-6 space-y-1 text-sm text-gray-400">
            <p>📅 <span className="font-semibold">Start Date:</span> November 5, 2029</p>
            <p>📅 <span className="font-semibold">End Date:</span> November 5, 2029</p>
            <p>📢 <span className="font-semibold">Result Announcement:</span> November 6, 2029</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/vote/us-presidential-election-2029" className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl text-sm font-medium">
              🗳️ Vote Now
            </Link>
            <button className="bg-gray-700 hover:bg-gray-800 transition text-white px-5 py-2 rounded-xl text-sm font-medium">
              👥 View Candidates
            </button>
          </div>

          <p className="mt-6 text-xs italic text-gray-500">
            🔒 Your vote is secure, private, and powered by verified digital infrastructure.
          </p>

        </div>
        <div ref={upcomingRef} className="text-5xl text-black font-bold text-center py-8">
          <p>
            Upcoming Elections
            <hr className="border-t-2 border-gray-300 w-1/4 mx-auto mt-4" />
          </p>
        </div>
        {upcomingElections.map((election, idx) => (
          <div key={idx} className="bg-black text-white rounded-2xl p-8 max-w-5xl mx-auto my-8 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-2xl font-semibold">{election.organizationName}</h2>
              <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full mt-2 sm:mt-0">
                🟡 Coming Soon
              </span>
            </div>

            <p className="mt-4 text-gray-300">
              An upcoming election organized by {election.organizationName}. Stay tuned and get ready to vote!
            </p>

            <div className="mt-6 space-y-1 text-sm text-gray-400">
              <p>📅 <span className="font-semibold">Date:</span> {election.electionDate}</p>
              <p>⏰ <span className="font-semibold">Time:</span> {election.electionStartTime} - {election.electionEndTime}</p>
              <p>📢 <span className="font-semibold">Results:</span> {election.resultDate}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 transition text-black px-5 py-2 rounded-xl text-sm font-medium">
                📅 Notify Me
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 transition text-white px-5 py-2 rounded-xl text-sm font-medium">
                ℹ️ View Details
              </button>
            </div>

            <p className="mt-6 text-xs italic text-gray-500">
              🛡️ Election package: <span className="italic">{election.package}</span>
            </p>
          </div>
        ))}
        <br /><br />
        <Copyright />
      </section>

    </>
  );
}

export default Elections;
