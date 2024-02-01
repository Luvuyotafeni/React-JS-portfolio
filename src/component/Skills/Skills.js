import React from 'react'
import Card from './card'
import data from "./Skills-Api"
import "./Skills.css"

const Skills = () => {
  return (
    <>
        <section className='Skills top'  id='Skills'>
            <div className='container'>
                <div className='heading'>
                    <h1>SKILLS</h1>
                </div>
                <div className='content grid'>
                    {data.map((val, index) => {
                    return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                     })}
          </div>
            </div>
        </section>
    </>
  )
}

export default Skills