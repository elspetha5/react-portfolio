import React from "react";
import "./intro.css";

const Intro = props => (
    <div id="intro" className={props.animation}>{props.children}</div>
);

export default Intro;