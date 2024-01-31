import React from 'react'
import "./About.css"
import Card from "./card"
import ResumeApi from "./ResumeApi"

const About = () => {
  return (
    <>
    <section className='About' id='about'>
        <div className='container-top'>
            <div className='heading text-center'>
                <h2>ABOUT</h2>
            </div>
            <div className='content-section mtop d_flex'>
                <div className='left'>
                    <div className='heading'>
                        <h4> Experience</h4>
                    </div>
                    <div className='content'>
                        {ResumeApi.map((val,id) =>{
                            if(val.category=== "experience"){
                                return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc}/>
                            }
                        })}
                    </div>
                </div>
                <div className='left'>
                    <div className='heading'>
                        <h4> Education</h4>
                    </div>
                    <div className='content'>
                        {ResumeApi.map((val,id) =>{
                            if(val.category=== "education"){
                                return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc}/>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default About