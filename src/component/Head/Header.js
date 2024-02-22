import React, { useState, useEffect } from 'react';
import "./Header.css";
import logo from "../pic/IMG_8677.jpg";

const Header = () => {
    const [mobile, setMobile] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleModeToggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const body = document.body;
        body.style.backgroundColor = darkMode ? "#4F4F4F" : "#ecf0f3";
    }, [darkMode]);

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 100);
    });

    return (
        <div>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} alt='' className='logo'></img>
                    </div>
                    <div className='navLink'>
                        <ul className={mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            <li><a href='#home'> Home</a></li>
                            <li><a href='#about'> About</a></li>
                            <li><a href='#Skills'> Skills</a></li>
                            <li><a href='#projects'> Project</a></li>
                            <li><a href='#contact'> Contact Me</a></li>
                            <li>                              
                                    <i className={`bx ${darkMode ? 'bx-toggle-left' : 'bx-toggle-right'}` }onClick={handleModeToggle}></i>                               
                            </li>
                        </ul>
                        <button className='toggle' onClick={() => setMobile(!mobile)}>
                            {mobile ?
                                <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
