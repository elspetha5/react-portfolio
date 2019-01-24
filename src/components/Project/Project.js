import React from "react";
import "./project.css";

const Project = props => (
    <div className="project" id={"id" + props.id}>
        <img src={props.pic} alt={props.name} className="icon" />
        <div className="projectName">{props.name}</div>
        <div className="appRepo">
            <a href={props.dlink} target="_blank" className="appLink" >App</a>
            <a href={props.rlink} target="_blank" className="appLink" >Repo</a>
        </div>
    </div>
);

export default Project;