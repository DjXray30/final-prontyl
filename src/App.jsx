import Hero from './components/Hero'
import Navbar from './Navbar'
import CustomVideoComponent from './VoteCard'

function App() {
    return (
        <>
            <title>Prontyl</title>
            <Navbar />
            <div className="container w-screen h-screen flex justify-start items-end">
                <Hero />
            </div>
            <CustomVideoComponent />
        </>
    )
}

export default App
