import React, { useRef } from 'react';
function Elections() {
  const upcomingRef = useRef(null);
  const scrollToSection = () => {
    upcomingRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className=" absolute top-20 w-full h-screen bg-gray-100">
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

      <article className="relative w-full h-3/4">
        {/* Background Image */}
        {/* <img
          src={back}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        /> */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10  bg-black bg-opacity-50">
          <p className="text-4xl font-bold mb-6">
            Indian General Elections 2029
          </p>

          <div className="text-center">
            <p className="text-2xl font-semibold mb-4">Click Here to Vote</p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-blue-600 transition duration-300">
              Vote
            </button>
          </div>
        </div>
      </article><br/>
      <article className="relative w-full h-3/4">
        {/* Background Image */}
        {/* <img
          src={back}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        /> */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10  bg-black bg-opacity-50">
          <p className="text-4xl font-bold mb-6">
            Indian General Elections 2029
          </p>

          <div className="text-center">
            <p className="text-2xl font-semibold mb-4">Click Here to Vote</p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-blue-600 transition duration-300">
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
      <article className="relative w-full h-3/4">
        {/* Background Image */}
        {/* <img
          src={back}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        /> */}

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10  bg-black bg-opacity-50">
          
          <p className="text-4xl font-bold mb-6">
            Indian General Elections 2034
          </p>

          <div className="text-center">
            <p className="text-2xl font-semibold mb-4">Click Here to Vote</p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-blue-600 transition duration-300">
              Vote
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Elections;