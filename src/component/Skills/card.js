import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box '>
        <img src={props.image} alt={props.image} width="200px" height="200px"/>
        <h2 className="skills-title">{props.title}</h2>
        <p className="skills-desc">{props.desc}</p>
      </div>
    </>
  )
}
export default Card
