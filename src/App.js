import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

import Architect from './components/Architect/Architect';
import InteriorDesign from './components/InteriorDesign/InteriorDesign';
import LandscapeArchitect from './components/LandscapeArchitect/LandscapeArchitect';
import BuildingCompanies from './components/BuildingCompanies/BuildingCompanies';
import Footer from './components/Footer/Footer';



function App() {
    const[auth, setAuth] = useState({});

    const userLogin = (authData) => {
        setAuth(authData);
    }

    return (
        <AuthContext.Provider value={{auth, userLogin}}>
            <div className="box">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/architecture-companies" element={<Architect/>} />
                    <Route path="/interior-design" element={<InteriorDesign/>} />
                    <Route path="/landscape-architect" element={<LandscapeArchitect/>} />
                    <Route path="/building-companies" element={<BuildingCompanies/>} />
                </Routes>
                    
                <Footer/>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
