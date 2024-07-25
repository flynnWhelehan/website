import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import { GOOGLE_FORMULAE_CONTENT } from '../Content/Projects/GoogleFormulaEContent.js';

function GoogleFormulaEProject() {
    return (
        <div>
            <Helmet>
                <title>Google x Formula E Hackathon</title>
                <meta name="description" content="Details about my Google hackathon project" />
            </Helmet>
            <h1>
                Google x Formula E Hackathon<br/> 
                <span className="small-text">[July 2024]</span>
            </h1>

            <div className="section-break-line" />

            <h2 className="title">The Event</h2>
            <div className="section-container">
                <section id="event">
                    <div>{GOOGLE_FORMULAE_CONTENT.summary}{GOOGLE_FORMULAE_CONTENT.cta}</div>   
                </section>
            </div>

            <h2 className="title">Formula E Footage</h2>
            <section id="footage">
                <div className='video-container'>
                    <ReactPlayer className='react-player' url='https://youtu.be/qNcgbLCXKBk' />
                </div>
            </section>
        </div>
    );
}

export default GoogleFormulaEProject;