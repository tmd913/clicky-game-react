import React from "react";
import "./Character.css";

const Character = props => (
  <img alt="Character" src={props.src} data-id={props.id}  onClick={props.handleClick} className={props.shake ? "shake" : (props.winner ? "winner" : "still")} />
);

export default Character;