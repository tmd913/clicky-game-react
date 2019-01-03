import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-light">
    <div>
      <ul className="navbar-nav text-center">
        <div className="row">
          <div className="col-sm-4">
            <li className="nav-item">
              <a className="navbar-brand" href="/">
                Clicky Game
              </a>
            </li>
          </div>
          <div className="col-sm-4">
            <li className="nav-item nav-text">
              {props.firstTurn
                ? `Click an image to begin!`
                : props.repeat === true
                ? `You guessed incorrectly!`
                : props.winner 
                ? `You win!`
                : `You guessed correctly!`}
            </li>
          </div>
          <div className="col-sm-4">
            <li className="nav-item nav-text">
              Score: <span>{props.score}</span> | Top Score:{" "}
              <span>{props.topScore}</span>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </nav>
);

export default Navbar;
