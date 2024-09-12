import React, { useState, useEffect } from 'react';
import Card from './card'
import data from "./Skills-Api"
import "./Skills.css"

const Skills = () => {
  const [current, setCurrent] = useState(0); // Set the initial state for the carousel

  const length = data.length; // Total number of slides

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

    // Auto slide every 5 seconds
    useEffect(() => {
      const interval = setInterval(nextSlide, 1000);
      return () => clearInterval(interval); // Clear interval when component unmounts
    }, [current]); // Re-run when `current` changes

  return (
    <>
      <section className='Skills top' id='Skills'>
        <div className='container-top'>
          <div className='heading'>
            <h2>SKILLS</h2>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3'>
                <div className='card'>
                  <h5>Mobile App Development</h5>
                  <p className='icon'><i class='bx bxs-mobile'></i></p>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card'>
                  <h5>Web Development</h5>
                  <p className='icon'><i class='bx bx-globe'></i></p>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card'>
                  <h5>UX Development</h5>
                  <p className='icon'><i class='bx bxl-sketch'></i></p>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card'>
                  <h5>Databases</h5>
                  <p className='icon'><i class='bx bxs-data'></i></p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-container">
            {/* Left arrow */}
            <span className="arrow left-arrow" onClick={prevSlide}>&#10094;</span>

            {/* Display the current slide */}
            {data.map((val, index) => (
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <Card image={val.image} title={val.title} desc={val.desc} />
                )}
              </div>
            ))}

            {/* Right arrow */}
            <span className="arrow right-arrow" onClick={nextSlide}>&#10095;</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills