import React from 'react';

export const Card = (props) => (
  <div className="card">
    <img src={props.insurance.image} className="image"></img>
    <div className="titulo">{props.insurance.name}</div>
    <div className="label">$ {props.insurance.price}</div>
    <p className="parrafo">{props.insurance.description}</p>
  </div>
);

export default Card;
