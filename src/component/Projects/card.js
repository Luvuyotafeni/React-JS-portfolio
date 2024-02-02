import React from "react";

const Card = (props) => {
  return (
    <>
      <div className={`box btn_shadow ${props.isHovered ? 'hovered' : ''}`}>
        <img src={props.image} alt='../pic/SMJ (1).png' />
        <h2>{props.title}</h2>
        {props.isHovered && <p>{props.desc}</p>}
      </div>
    </>
  );
};

export default Card;