import React from 'react';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet';
import { PageSection } from '../components/PageSection';
import { HACKAWAY_V7_CONTENT } from '../content/HackawayV7ProjectContent.js';

function HackawayV7Project() {
    return (
        <main>
            <Helmet>
                <title>Royal Hackaway V7 Hackathon</title>
                <meta name="description" content="Details about my Royal Hackaway hackathon project" />
            </Helmet>
            
            <header>
                <h1 className="title">
                    Royal Hackaway V7 Hackathon<br/> 
                    <span className="small-text">[January 2024]</span>
                </h1>
                <div className="section-break-line" aria-hidden="true" />
            </header>

            <PageSection
                id="event"
                title="The Event"
                variant="default"
            >
                <div>
                    {HACKAWAY_V7_CONTENT.summary}
                    {HACKAWAY_V7_CONTENT.challenges}
                    {HACKAWAY_V7_CONTENT.accomplishments}
                </div>
            </PageSection>

            <h2 className="title">Testing the project</h2>
            <section id="testing">
                <div className='video-container'>
                    <ReactPlayer className='react-player' url='https://youtu.be/7UqkkwYjFqY' />
                </div>
            </section>
        </main>
    );
}

export default HackawayV7Project;