import React from "react";
import "./Wrapper.css";

const Wrapper = props => <main className="wrapper" {...props}>{props.children}</main>;

export default Wrapper;
