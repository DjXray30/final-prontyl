import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nelson Mandela",
      quote: "Prontyl's platform ensured a transparent and fair election process, empowering millions to vote securely and confidently. It was a cornerstone in strengthening democracy.",
      color: "bg-blue-500",
    },
    {
      name: "Barack Obama",
      quote: "With Prontyl, we were able to engage voters like never before. The seamless technology and real-time results made the election process efficient and trustworthy.",
      color: "bg-emerald-600",
    },
    {
      name: "Narendra Modi",
      quote: "Prontyl's innovative approach to elections brought people together, ensuring every voice was heard. It truly embodies the spirit of democracy.",
      color: "bg-orange-500",
    },
    {
      name: "Angela Merkel",
      quote: "Prontyl's secure and user-friendly platform made organizing elections across the nation effortless. It set a new standard for electoral integrity.",
      color: "bg-orange-500",
    },
    {
      name: "John F. Kennedy",
      quote: "Prontyl revolutionized the way elections are conducted. Its cutting-edge technology ensured a smooth and transparent process, inspiring confidence in voters.",
      color: "bg-blue-500",
    },
    {
      name: "Winston Churchill",
      quote: "Prontyl's platform was instrumental in organizing a fair and efficient election. It upheld the values of democracy and ensured every vote counted.",
      color: "bg-emerald-600",
    },
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
