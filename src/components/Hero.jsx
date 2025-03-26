import backdrop from '../assets/backdrop.mp4'

function Hero() {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover z-0"
            >
                <source src={backdrop} type="video/mp4" />
            </video>
        </div>
    )
}

export default Hero
