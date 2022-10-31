import React from "react";
import "./Card.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monster?.id}?set=set2`} className="img-fluid" alt={props.monster?.name} />
      <h2>{props.monster?.name}</h2>
      <p>{props.monster?.email}</p>
    </div>
  );
};
