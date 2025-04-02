import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Johnson", quote: "As a senior citizen with mobility issues, getting to a polling station was always a challenge. This online platform made voting easy and convenient. I felt like my voice truly mattered.", color: "bg-blue-500" },
    { name: "Michael Chen", quote: "I'm a busy working professional, and finding time to vote during traditional polling hours was nearly impossible. This website allowed me to cast my ballot from my phone, anytime, anywhere. It's a game-changer!", color: "bg-emerald-600" },
    { name: "Priya Patel", quote: "I was initially skeptical about online voting, but the security measures and transparent process put my mind at ease. The platform was user-friendly, and I felt confident my vote was accurately recorded." , color: "bg-orange-500" },
    { name: "David Rodriguez", quote:  "Living in a rural area, it's often difficult to stay informed about local elections. This website provided comprehensive information about candidates and issues, making it easy to make informed choices." , color: "bg-orange-500" },
    { name: "Emma Wilson", quote: "The instant results feature was fantastic! I loved being able to see the outcome of the election in real-time. This platform is a great way to engage younger voters like myself.", color: "bg-blue-500" },
    { name: "James Thompson", quote: "I appreciate the accessibility features built into the website. It was easy to navigate and use, even with my visual impairment. I'm glad to see voting becoming more inclusive.", color: "bg-emerald-600" },
  ];
  
  return (
    <div className="flex flex-row w-full place-items-start gap-5 my-20">
      {/* Blue box with text */}
      <div className="bg-neutral-700 text-white p-8 flex flex-col justify-end w-1/4 aspect-square rounded-2xl">
        <h2 className="text-3xl font-bold text-right">Testimonials</h2>
      </div>

      {/* Grid of testimonial cards */}
      <div className="grid grid-cols-3 w-3/4 gap-5">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className={`p-8 flex flex-col justify-between aspect-square rounded-2xl text-black ${testimonial.color}`}
          >
            <div className="text-lg text-center mt-4 mb-8 italic">
              "{testimonial.quote}"
            </div>
            <div className="text-amber-50 text-xl font-medium text-right">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
