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
          <div className='skills-container'>
            {data.map((val, index) => {
              return (
                <div className='skill-box' key={index}>
                  <Card image={val.image} title={val.title} desc={val.desc} />
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