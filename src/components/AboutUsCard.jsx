import React from "react";
import lock from "../assets/lock.webp"; // Updated path
const CompetitorBenchmarking = () => {
  return (
    <>
      <div className="rounded-4xl bg-black ">
        <section className="flex flex-col md:flex-row items-center justify-center text-amber-50 p-10">
          {/* Chart Section */}
          <div className="w-full md:w-1/2 flex justify-center bg-gray-50">
            <div className="bg-gray-20 shadow-lg rounded-2xl p-4">
              <img
                src="\src\assets\lock.webp"  // Replace with your own image path
                alt="Competitor Benchmarking Chart"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6 font-bold">
            <span className="px-4 py-1 text-sm font-semibold bg-blue-500 rounded-full">
              FEATURES
            </span>
            <h2 className="text-6xl mt-4">
              Mission Statement
            </h2>
            <ul className="mt-6 space-y-4 text-xl text-amber-50 ">
              <li className="border-b pb-7">Ensure secure and transparent online voting.</li>
              <li className="border-b pb-7">Make voting accessible to everyone, anywhere</li>
              <li className="border-b pb-7">Enhance trust and integrity in digital elections.</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center text-amber-50  p-10">

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6 font-bold ">
            <span className="px-4 py-1 text-sm font-semibold bg-blue-500 rounded-full">
              FEATURES
            </span>
            <h2 className="text-6xl text-white mt-4">
              Our Values
            </h2>
            <ul className="mt-6 space-y-4 text-xl text-amber-50 ">
              <li className="border-b pb-7">Transparency – Open and verifiable election processes.</li>
              <li className="border-b pb-7">
                Security – Strong encryption and fraud prevention</li>
              <li className="border-b pb-7">
                Accessibility – Easy voting for everyone, anywhere.</li>
            </ul>
          </div>
          {/* Chart Section */}
          <div className="w-full md:w-1/2 flex justify-center bg-gray-50">
            <div className="bg-gray-20 shadow-lg rounded-2xl p-4">
              <img
                src="/your-image-path.png"  // Replace with your own image path
                alt="Competitor Benchmarking Chart"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};
export default CompetitorBenchmarking;
