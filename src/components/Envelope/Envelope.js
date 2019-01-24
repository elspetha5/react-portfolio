import React from "react";
import profile from "./profile.jpg";
import "./envelope.css";

const Envelope = props => (
    <div id="envelope">
        <div id="envB"></div>
        <div className="envelope" id="envL"></div>
        <div className="envelope" id="envR"></div>
        <div className="crease" data-sealed={props.sealed} id="creaseL"></div>
        <div className="crease" data-sealed={props.sealed} id="creaseR"></div>
        <img onClick={() => props.picClick()} data-sealed={props.sealed} src={profile} alt="me" id="profilePic"/>
        <div id={props.hint}>
            <div id="clickArrow" onClick={() => props.picClick()}></div>
            <div id="pssst" onClick={() => props.picClick()}>Pssst...</div>
            <div id="clickMe" onClick={() => props.picClick()}>click here</div>
        </div>
    </div>
);

export default Envelope;