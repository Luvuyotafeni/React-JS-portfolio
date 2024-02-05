// Card.js
import React from "react";

const Card = (props) => {
  return (
    <>
      <div className={`box btn_shadow ${props.isHovered ? 'hovered' : ''}`}>
        <img src={props.image} alt={props.image} className={`project-image ${props.isHovered ? 'hidden' : ''}`} />
        <h2 className={`project-title ${props.isHovered ? 'hidden' : ''}`}>{props.title}</h2>
        <a>{props.github}</a>
        {props.isHovered && <p>{props.desc}</p>}
      </div>
    </>
  );
};

export default Card;
