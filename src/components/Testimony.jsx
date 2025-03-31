import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Johnson", quote: "This platform transformed how we manage our digital presence." },
    { name: "Michael Chen", quote: "The insights we gained were invaluable for our marketing strategy." },
    { name: "Priya Patel", quote: "We saw a 40% increase in brand visibility within three months." },
    { name: "David Rodriguez", quote: "Their team was responsive and delivered beyond our expectations." },
    { name: "Emma Wilson", quote: "The most comprehensive AI monitoring solution we've used." },
    { name: "James Thompson", quote: "Their analytics helped us make data-driven decisions." },
  ];
  
  return (
    <div className="flex flex-row w-full place-items-start gap-5 my-20">
      {/* Blue box with text */}
      <div className="bg-blue-600 text-white p-8 flex flex-col justify-end w-1/4 aspect-square rounded-2xl">
        <h2 className="text-3xl font-bold text-right">
            Testimonials
        </h2>
      </div>
      
      {/* Grid of testimonial cards */}
      <div className="grid grid-cols-3 w-3/4 gap-5">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-zinc-300 p-8 flex flex-row flex-wrap items-center aspect-square rounded-2xl"
          >
            <div className="text-lg text-center mt-4 mb-8 italic">
              "{testimonial.quote}"
            </div>
            <div className="text-gray-500 text-xl font-medium text-right">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
