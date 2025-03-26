import backdrop from '../assets/backdrop.mp4';

function Hero() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={backdrop} type="video/mp4" />
            </video>

            
            <div className="absolute top-30 right-40 z-10">
                <p className="text-black text-7xl font-bold text-right">
                    Your Voice.
                </p>
            </div>
        </div>
    );
}

export default Hero;
