import React from 'react';
import { useEffect } from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CustomVideoComponent from './components/VoteCard';
import VotingMachineServices from './components/FaceCard';
import SustainabilityTemplate from './components/SustainabilityTemplate';
import Copyright from './components/Copyright';
import About from './pages/About.jsx';
import Register from './pages/Register';
import Elections from './pages/Elections';
import VoteNow from './pages/VoteNow';
import axios from 'axios';
import Subscribe from './components/Subscribe.jsx';

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
                            <SustainabilityTemplate />
                            <Copyright />
                        </>
                    }
                />

                <Route path="/about-us" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/elections" element={<Elections />} />
                <Route path="/vote/indian-general-elections-2029" element={<VoteNow />} />
                <Route path="/subscribe" element={<Subscribe />} />
            </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
