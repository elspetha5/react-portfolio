import React from "react";
import "./mailbox.css";

const Mailbox = props => (
    <div id="mailbox" className={props.animation}>
        <div id="box"></div>
        <div id="opening"></div>
        <div id="door"></div>
    </div>
);

export default Mailbox;