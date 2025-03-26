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

            
            <div className="absolute top-4 right-4 z-10">
                <p className="text-white text-3xl font-bold text-right">
                    Welcome to Prontyl! <br /> Experience the future of voting technology.
                </p>
            </div>
        </div>
    );
}

export default Hero;
