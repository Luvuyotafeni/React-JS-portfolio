import React from 'react'
import "./home.css"
import hero from "../pic/IMG_8677.jpg"
import Luvuyo from "../pic/WhatsApp_Image_2024-07-24_at_15.46.18-removebg-preview.png"
import resume from "./Luvuyos Resume.pdf"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
      <section id='home'>
        <div className='container f_flex '>
          {/* Right section now goes first */}
          <div className='right'>
            <div className='right_img'>
              <img src={Luvuyo} alt=''></img>
            </div>
          </div>

          {/* Left section now goes second */}
          <div className='hero left_top top'>
            <p>
              <h1>Hi There</h1>
              <h1><span>I'm Luvuyo Tafeni</span></h1>
            </p>
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
                  <a href={resume}>HIRE ME</a>
                </button>
                <div className='button'>
                  <button className='btn_shadows'>
                    <a href='https://www.linkedin.com/in/luvuyo-tafeni-357998230/'><i class='bx bxl-linkedin-square'></i></a>
                  </button>
                  <button className='btn_shadows'>
                    <a href='https://github.com/Luvuyotafeni?tab=repositories'> <i class='bx bxl-github'></i></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
