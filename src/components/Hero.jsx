import voteing from '../assets/voteing.mp4';

function Hero() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">

            <video
                autoPlay
                loop
                muted
                className="absolute top-5 left-0 w-full h-full object-cover object-left -z-10"
            >
                <source src={voteing} type="video/mp4" />
            </video>


            <div className="absolute top-30 right-45 z-10">
                <p className="text-black text-6xl font-bold text-left">
                    Click. Caste. <br /> <span className='underline'>Change.</span>
                </p>
            </div>
        </div>
    );
}

export default Hero;
