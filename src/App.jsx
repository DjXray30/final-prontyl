import Hero from './components/Hero'
import Navbar from './Navbar'
import CustomVideoComponent from './VoteCard'
import VotingMachineServices from './FaceCard'
import Copyright from './copyright'
function App() {
    return (
        <>
            <title>Prontyl</title>
            <Navbar />
            
                <Hero />
            
            <CustomVideoComponent />
            <VotingMachineServices/>
            <Copyright />
        </>
    )
}

export default App
