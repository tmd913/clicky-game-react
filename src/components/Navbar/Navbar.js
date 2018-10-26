import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
            <ul className="navbar-nav text-center">
                <li className="nav-item">
                    <a className="navbar-brand" href="/">Clicky Game</a>
                </li>
                <li className="nav-item">
                    {
                        props.firstTurn ? `Click an image to begin!` : 
                            props.repeat === false ? `You guessed correctly!` : 
                                `You guessed incorrectly!`
                    }
                </li>
                <li className="nav-item">
                    Score: <span>{props.score}</span> | Top Score: <span>{props.topScore}</span>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
