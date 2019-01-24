import React from "react";
import "./contact.css";

const Contact = () => (
    <div id="contact">
        <h3 id="hear">I'd love to hear from you:</h3>
        <hr/>
        <div className="email"><i class="fas fa-envelope"></i> <a href="mailto:elspetha@gmail.com" className="email">elspetha@gmail.com</a></div>
        {/* <a className="social" href="https://www.facebook.com/elspetha" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>
        <a className="social" href="https://www.instagram.com/thespeths/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> */}
    </div>
);

export default Contact;