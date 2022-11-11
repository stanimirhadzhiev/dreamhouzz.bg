import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';

import Login from '../Login/Login'
import Register from '../Register/Register';
import { AuthContext } from '../../contexts/AuthContext';



const Header = () => {


    const {user} = useContext(AuthContext);

    return (
        <header className="headerSection">
            <div className="headerFirstContainer">
                <div className="logo">
                    <Link to="/">
                        <img src="images/logo.png" alt="" />
                    </Link>
                </div>
                <div className="searchSection">
                    <a className="srcBTN" href="#"></a>
                    <input
                    className="searchBox"
                    type="search"
                    name="searchBox"
                    id="searchBox"
                    />
                </div>
                <div className="regContainer">
                    {user.email
                        ?   <div className='user'>
                                <span>{user.email}</span>
                                <Link to="#">Профил</Link>
                                <Link to="/logout">Изход</Link>
                            </div>
                        :   <div className='guest'>
                                <Link to="/login" className="signInBTN" >
                                    <span className="userIcon" />
                                    <span className="signInBTNtext">Вход</span>
                                </Link>
                                <Link to ="/register" className="registrationBTN" >
                                    <span className="registrationIcon" />
                                    <span className="registrationBTNtext">Регистрация</span>
                                </Link>
                            </div>
                    }
                    
                    
                    
                </div>
            </div>
            <nav className="headerNavigation">
                <div className="navContainer">
                    <Link to="/architecture-companies" className="navBTN">
                        <div className="architectsImgBTN" />
                        <div className="navTxtBTN">
                            Архитектура &amp; проектиране на сгради
                        </div>
                    </Link>
                    <span>|</span>
                    <Link to="/interior-design" className="navBTN">
                        <div className="interiorDesignImgBTN" />
                        <div className="navTxtBTN">Интериорен дизайн</div>
                    </Link>
                    <span>|</span>
                    <Link to="/landscape-architect" className="navBTN">
                        <div className="landscapeImgBTN" />
                        <div className="navTxtBTN">Ландшафтна архитектура</div>
                    </Link>
                    <span>|</span>
                    <Link to="/building-companies" className="navBTN">
                        <div className="buildingImgBTN" />
                        <div className="navTxtBTN">Строителство и ремонтни дейности</div>
                    </Link>
                </div>
            </nav>
        </header>  
    );
};

export default Header;