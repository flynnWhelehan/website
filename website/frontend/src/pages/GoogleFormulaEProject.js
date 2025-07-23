import React from 'react';
import { Helmet } from 'react-helmet';
import { PageSection } from '../components/PageSection';
import VideoPlayer from '../components/VideoPlayer';
import { GOOGLE_FORMULAE_CONTENT } from '../content/GoogleFormulaEProjectContent.js';

function GoogleFormulaEProject() {
    return (
        <main>
            <Helmet>
                <title>Google x Formula E Hackathon</title>
                <meta name="description" content="Details about my Google hackathon project" />
            </Helmet>
            
            <header>
                <h1 className="title">
                    Google x Formula E Hackathon<br/> 
                    <span className="small-text">[July 2024]</span>
                </h1>
                <div className="section-break-line" aria-hidden="true" />
            </header>

            <PageSection
                id="event"
                title="The Event"
                variant="default"
            >
                <div>
                    {GOOGLE_FORMULAE_CONTENT.summary}
                    {GOOGLE_FORMULAE_CONTENT.cta}
                </div>
            </PageSection>

            <h2 className="title">Formula E Footage</h2>
            <VideoPlayer 
                url="https://youtu.be/qNcgbLCXKBk"
                title="Formula E Footage"
            />
        </main>
    );
}

export default GoogleFormulaEProject;