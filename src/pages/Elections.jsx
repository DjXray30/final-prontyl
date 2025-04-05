import React, { useRef } from 'react';
import Copyright from '../components/Copyright';

function Elections() {
  const upcomingRef = useRef(null);
  const scrollToSection = () => {
    upcomingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl text-sm font-medium">
          🗳️ Vote Now
        </button>
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
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl text-sm font-medium">
          🗳️ Vote Now
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 transition text-white px-5 py-2 rounded-xl text-sm font-medium">
          👥 View Parties
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

      {/* Card 3 */}
      <article className="relative w-3/4 mx-auto h-1/2">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-50 rounded-lg p-6">
          <p className="text-3xl font-bold mb-4">Indian General Elections 2034</p>
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">Click Here to Vote</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition duration-300">
              Vote
            </button>
          </div>
        </div>
      </article>
    </section>
    <br/><br/>
    <Copyright/>
    </>
  );
}

export default Elections;