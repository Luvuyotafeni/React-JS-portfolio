import React from 'react'
import Card from './card'
import data from "./Skills-Api"
import "./Skills.css"

const Skills = () => {
  return (
    <>
      <section className='Skills top' id='Skills'>
        <div className='container'>
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
          <div className='skills-container'>
            {data.map((val, index) => {
              return (
                <div className='skill-box' key={index}>
                  <Card image={val.image} title={val.title} desc={val.desc}  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills