import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import { EASYA_CONTENT } from '../Content/Projects/EasyAContent.js';

function EasyAProject() {
    return (
        <div>
            <Helmet>
                <title>EasyA x Vechain Hackathon - San Francisco</title>
                <meta name="description" content="Details about my EasyA hackathon project" />
            </Helmet>
            <h1>
                EasyA x Vechain Hackathon - San Francisco<br/> 
                <span className="small-text">[June 2024]</span>
            </h1>

            <div className="section-break-line" />

            <h2 className="title">The Trip</h2>
            <div className="section-container">
                <section id="trip">
                    <div>{EASYA_CONTENT.performance}{EASYA_CONTENT.summary}{EASYA_CONTENT.cta}</div>   
                </section>
            </div>

            <h2 className="title">Vlog</h2>
            <section id="vlog">
                <div className='video-container'>
                    <ReactPlayer className='react-player' url='https://youtu.be/ThpVU_8BdE8?si=4gxEBwgGqaohIIuO' />
                </div>
            </section>
        </div>
    );
}

export default EasyAProject;