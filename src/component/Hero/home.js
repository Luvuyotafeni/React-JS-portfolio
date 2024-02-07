import React from 'react'
import "./home.css"
import hero from "../pic/IMG_8677.jpg"
import resume from "./Luvuyos Resume.pdf"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
        <section className='hero' id='home'>
            <div className='container f_flex top'> 
                <div className='left_top'>
                    <h1> Hi There  </h1>
                    <h1><span>I'm Luvuyo Tafeni</span></h1>
                    <h2>I'm a <span>
                    <Typewriter
                        words={['Junior', 'Software', 'Developer']}
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}                        
                    />
                    </span></h2>
                    
                    <div className='hero_btn d_flex'>
                        <div className='col_1'>
                             <button className='hire btn_shadow'>
                                <a href={resume}>HIRE ME</a></button>
                            <div className='button'>
                                <button className='btn_shadow'>
                                    <a href='https://www.linkedin.com/in/luvuyo-tafeni-357998230/'><i class='bx bxl-linkedin-square'></i></a>
                                </button>
                                <button className='btn_shadow'>
                                    <a href='https://github.com/Luvuyotafeni?tab=repositories'> <i class='bx bxl-github' ></i></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='right_img'>
                        <img src={hero} alt=''></img>
                    </div>
                </div>
            
            </div>
        </section>
    </>
  )
}

export default Home