import backdrop from '../assets/backdrop.mp4';

function Hero() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={backdrop} type="video/mp4" />
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <p className="text-white text-3xl font-bold text-center px-4">
                    Welcome to Prontyl! Experience the future of voting technology.
                </p>
            </div>
        </div>
    );
}

export default Hero;
