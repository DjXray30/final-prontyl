import React from "react";
import africanChild from "../assets/africa2.jpg";
import { Link } from "react-router";

const SustainabilityTemplate = () => {
    return (
        <div className="bg-black py-20 mt-0">
            <div className="container mx-auto px-8 md:px-12">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left side - Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative h-full">
                            <img
                                src={africanChild}
                                alt="African landscape"
                                className="w-full h-full object-cover rounded-lg shadow-xl object-right"
                            />
                        </div>
                    </div>

                    {/* Right side - text content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="mb-3 text-sm uppercase tracking-wider text-amber-50 font-light">
                            VOTE FOR CHANGE
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                            Your vote counts. So does your impact.
                        </h2>
                        <p className="mb-6 text-amber-50 text-lg">
                            Every vote cast on our platform doesn’t just shape
                            decisions—it fuels hope. A portion of our earnings
                            goes directly to charities that uplift communities
                            and support causes that matter.
                        </p>
                        <p className="mb-10 text-amber-50 text-lg">
                            By choosing to vote digitally with us, you’re
                            championing transparency, inclusion, and compassion.
                            Together, we’re building a future where civic
                            engagement drives real-world change.
                        </p>
                        <Link to="/about-us">
                            <button className="bg-amber-50 text-black py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl hover:bg-amber-600 transition duration-300">
                                Our Values 
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SustainabilityTemplate;
