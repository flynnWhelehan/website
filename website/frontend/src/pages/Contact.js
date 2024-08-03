import React from 'react';
import './Styles/Projects.css';

function Contact() {
    return (
        <div className="contact-page">
        <h1>Contact Me</h1>
        <p>
            <a href="https://www.linkedin.com/in/flynnwhelehan/" target="_blank" rel="noopener noreferrer">
            Connect with me on LinkedIn
            </a>
        </p>
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdi8QVOZr4gZwIahV-TChr3BsALRLEHQtYZsHkYmrvfdC1ktA/viewform?embedded=true"
            width="640"
            height="2857"
            title="Google Form"
        >
            Loading…
        </iframe>
        </div>
    );
}

export default Contact;