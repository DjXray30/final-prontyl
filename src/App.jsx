import React from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router';
import Hero from './components/Hero';
import Navbar from './components/Navbar'; // Updated path
import CustomVideoComponent from './components/VoteCard'; // Updated path
import VotingMachineServices from './components/FaceCard'; // Updated path
import Copyright from './components/Copyright'; // Updated path
import About from './pages/About.jsx'; // Updated path
import Register from './pages/Register'; // Updated path
import Elections from './pages/Elections'; // Updated path

function App() {
    return (
        <>
        <BrowserRouter>
        
            <Navbar/>
            <Routes>
            
                
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <CustomVideoComponent />
                            <VotingMachineServices />
                            <Copyright />
                        </>
                    }
                />
               
                <Route path="/about-us" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/elections" element={<Elections />} />
            </Routes>
            </BrowserRouter>
        
        </>
    );
}

export default App;
