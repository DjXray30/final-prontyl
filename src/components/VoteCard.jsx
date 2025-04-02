import React from 'react';
import voteVideo from '../assets/vote.mp4'; // Updated path
const CustomVideoComponent = () => {
    return (
        <>
            <h1 className="my-20 mx-30 text-5xl font-bold">Every Voice Counts.</h1>
            <div className="flex items-center justify-center p-6 m-25 bg-gray-100 rounded-xl ">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">
                        Discover the power of Active Noise Cancellation in a film starring Pedro Pascal.
                    </h2>
                </div>
                <div className="ml-6 w-full md:w-1/2">
                    <video

                        className="w-full h-auto rounded-lg shadow-lg"
                        poster="path_to_your_poster_image_here"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={voteVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    );
};

export default CustomVideoComponent;
