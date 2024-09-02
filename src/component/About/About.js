import React, { useState } from 'react';
import './About.css';
import Card from './card';
import ResumeApi from './ResumeApi';

const About = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(true); // Default to show experience

  return (
    <>
      <section className='About' id='about'>
        <div className='container-top'>
          <div className='heading text-center'>
            <h2>ABOUT</h2>
          </div>
          <div className='summary'>
            <div><h4>1+ years experience</h4></div>
            <div><h4>15+ projects</h4></div>
          </div>
          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <button
                  className='btn_shadow toggle-button'
                  onClick={() => {
                    setShowExperience(true);
                    setShowEducation(false);
                  }}
                >
                  Experience
                </button>
              </div>
              <div className='content'>
                {showExperience &&
                  ResumeApi.map((val, id) => {
                    if (val.category === 'experience') {
                      return (
                        <Card
                          key={id}
                          title={val.title}
                          year={val.year}
                          rate={val.rate}
                          desc={val.desc}
                        />
                      );
                    }
                  })}
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <button
                  className='btn_shadow toggle-button'
                  onClick={() => {
                    setShowEducation(true);
                    setShowExperience(false);
                  }}
                >
                  Education
                </button>
              </div>
              <div className='content'>
                {showEducation &&
                  ResumeApi.map((val, id) => {
                    if (val.category === 'education') {
                      return (
                        <Card
                          key={id}
                          title={val.title}
                          year={val.year}
                          rate={val.rate}
                          desc={val.desc}
                        />
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
