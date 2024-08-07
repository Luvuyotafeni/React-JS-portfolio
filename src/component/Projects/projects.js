// Project.js
import React, { useState } from 'react';
import Card from './card';
import data from "./Projects-Api";
import "./projects.css";

const Project = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <section className='projects top' id='projects'>
        <div className='container'>
          <div className='heading'>
            <h2>PROJECTS</h2>
          </div>
          <div className='projects-container'>
            {data.map((val, index) => {
              return (
                <div
                  className='projects-box'
                  key={index}
                  onMouseEnter={() => setHoveredId(val.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Card
                    image={val.image}
                    title={val.title}
                    github={val.github}
                    link={val.link}
                    desc={val.desc}
                    isHovered={hoveredId === val.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
