import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import { PageSection } from '../components/PageSection';
import { EASYA_CONTENT } from '../content/EasyAProjectContent.js';

function EasyAProject() {
    return (
        <main>
            <Helmet>
                <title>EasyA x Vechain Hackathon - San Francisco</title>
                <meta name="description" content="Details about my EasyA hackathon project" />
            </Helmet>
            
            <header>
                <h1 className="title">
                    EasyA x Vechain Hackathon - San Francisco<br/> 
                    <span className="small-text">[June 2024]</span>
                </h1>
                <div className="section-break-line" aria-hidden="true" />
            </header>

            <PageSection
                id="trip"
                title="The Trip"
                variant="default"
            >
                <div>
                    {EASYA_CONTENT.performance}
                    {EASYA_CONTENT.summary}
                    {EASYA_CONTENT.cta}
                </div>
            </PageSection>

            <h2 className="title">Vlog</h2>
            <section id="vlog">
                <div className='video-container'>
                    <ReactPlayer className='react-player' url='https://youtu.be/ThpVU_8BdE8?si=4gxEBwgGqaohIIuO' />
                </div>
            </section>
        </main>
    );
}

export default EasyAProject;