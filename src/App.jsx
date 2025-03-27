import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './Navbar';
import CustomVideoComponent from './VoteCard';
import VotingMachineServices from './FaceCard';
import About from './About Us'; 
import Elections from './Elections'; 
import Register from './Register'; 

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <CustomVideoComponent />
                            <VotingMachineServices />
                        </>
                    }
                />
               
                <Route path="/elections" element={<Elections />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about-us" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
