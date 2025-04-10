import React from 'react';
import { useEffect } from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router';
import Hero from './components/Hero';
import Navbar from './components/Navbar'; // Updated path
import CustomVideoComponent from './components/VoteCard'; // Updated path
import VotingMachineServices from './components/FaceCard'; // Updated path
import Copyright from './components/Copyright'; // Updated path
import About from './pages/About.jsx'; // Updated path
import Register from './pages/Register'; // Updated path
import Elections from './pages/Elections'; // Updated path
import axios from 'axios';

function App() {
    const fetchApi = async () => {
        const response = await axios.get('http://localhost:3000/api'); 
        console.log(response.data); 
    }
    useEffect(() => {
        fetchApi();
    }, []);
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
