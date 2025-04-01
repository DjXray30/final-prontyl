import React, { useRef } from 'react';

function Elections() {
  const upcomingRef = useRef(null);
  const scrollToSection = () => {
    upcomingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="absolute top-20 w-full h-screen bg-gray-100">
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
      <article className="relative w-3/4 mx-auto h-1/2 mb-8">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-50 rounded-lg p-6">
          <p className="text-3xl font-bold mb-4">Indian General Elections 2029</p>
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">Click Here to Vote</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition duration-300">
              Vote
            </button>
          </div>
        </div>
      </article>

      {/* Card 2 */}
      <article className="relative w-3/4 mx-auto h-1/2 mb-8">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-50 rounded-lg p-6">
          <p className="text-3xl font-bold mb-4">Indian General Elections 2029</p>
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">Click Here to Vote</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition duration-300">
              Vote
            </button>
          </div>
        </div>
      </article>

      {/* Upcoming Elections */}
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
  );
}

export default Elections;