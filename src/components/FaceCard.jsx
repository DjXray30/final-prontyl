import React from 'react';

const VotingMachineServices = () => {
  const services = [
    {
      title: 'Secure Voting System',
      description: `Our digital voting machine ensures a high-level security system with advanced encryption technology, 
      providing a tamper-proof voting experience. We safeguard against hacking, unauthorized access, and fraudulent activities, 
      ensuring each vote is accurately recorded and protected.`,
    },
    {
      title: 'Real-Time Vote Counting',
      description: `Votes are processed and counted in real-time, offering instant results for fast and efficient elections. 
      With our cutting-edge technology, election officers can monitor voting trends live, minimize delays, and reduce manual 
      intervention in the tallying process.`,
    },
    {
      title: 'Easy-to-Use Interface',
      description: `Our user-friendly interface is designed with simplicity in mind. The voting machine allows voters to 
      cast their votes with ease, reducing errors and confusion. Whether young or elderly, voters will have an effortless 
      experience thanks to clear instructions and an intuitive design.`,
    },
    {
      title: 'Custom Voting Solutions',
      description: `We offer tailored voting solutions for various types of elections, from national to local. Our customizable 
      systems cater to specific requirements such as multi-lingual support, accessibility for people with disabilities, 
      and specialized ballot formats for different elections, ensuring everyone can vote easily.`,
    },
  ];

  return (
    <div className="bg-black text-amber-50  py-10 px-4 rounded-t-2xl">
      <h2 className="text-5xl py-10 font-bold text-center mb-8 ">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-700 text-amber-50  p-6 rounded-4xl shadow-lg hover:shadow-2xl hover:bg-blue-600 transition-transform duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingMachineServices;
