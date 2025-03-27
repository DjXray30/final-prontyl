import React from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router';
import Hero from './components/Hero';
import Navbar from './Navbar';
import CustomVideoComponent from './VoteCard';
import VotingMachineServices from './FaceCard';
import Copyright from './copyright';
import About from './About.jsx'; 
import Register from './Register'; 
import Elections from './Elections'; 

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
