import React from "react";
import resume from "./Resume.pdf"
import "./navbar.css";

const Navbar = props => (
    <div id="navbar">
        <div onClick={() => props.home()} id="navName">Elspeth Anderson</div>
        <div id="social">
            <a href="https://www.linkedin.com/in/elspeth-anderson/" className="socialLink" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i> LinkedIn</a>
            <a href="https://github.com/elspetha5" className="socialLink" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> Github</a>
            <a href={resume} className="socialLink" target="_blank">
                <i className="far fa-file-alt"></i> Resume</a>
        </div>
    </div>
);

export default Navbar;