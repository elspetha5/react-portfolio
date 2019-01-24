import React, { Component } from "react";
import "./info.css";

class Info extends Component {

    state = {
        techs: ["HTML", "CSS", "JavaScript", "jQuery", "Keyframes Animation",
            "Bootstrap", "React.js", "Git/GitHub", "Heroku",
            "APIs", "MySQL", "MongoDB", "Node.js",
            "ORM", "Templating Engines"]
    }

    render() {
        return (
            <div id="info">
                <h3>Here's a sample of what I can do:</h3>
                <div id="technologies">
                    {this.state.techs.map(tech => (
                        <span className="tech">{tech},</span>
                    ))}
                    <span className="tech">and Writing Tests.</span>
                </div>
            </div>
        )
    };
};

export default Info;