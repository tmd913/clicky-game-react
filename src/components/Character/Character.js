import React from "react";
import "./Character.css";

const Character = props => (
  <img alt="Character" src={props.src} data-id={props.id}  onClick={props.handleClick} />
);

export default Character;