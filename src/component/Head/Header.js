import React, { useState } from 'react'
import "./Header.css"
import logo from "../pic/IMG_8677.jpg"

const Header = () => {
    // when the scroller header at the top 
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY> 100)
    })

    // toggle menu
    const [Mobile, setMobile]= useState(false)
    const handleHomeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
  return (
    <div id='nav'>
        <header className='header'>
            <div className='container d_flex'>
                <div className='logo'>
                    <img src={logo} alt='' className='logo'></img>
                </div>
                <div className='navLink'>
                    {/*<ul className='link f_flex uppercase'>*/}
                    <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={()=> setMobile(false)}>
                        <li><a onClick={handleHomeClick}> Home</a></li>
                        <li><a href='#about'> About</a></li>
                        <li><a href='#Skills'> Skills</a></li>
                        <li><a href='#projects'> Project</a></li>
                        <li><a href='#contact'> Contact Me</a></li>
                        <li>
                           <button className='mode' id='mode'> <i class='bx bx-toggle-right'></i></button>
                        </li>
                    </ul>
                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? 
                       <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}                                               
                    </button>
                </div>
            </div>
        </header>
        
    </div>
  )
}

export default Header