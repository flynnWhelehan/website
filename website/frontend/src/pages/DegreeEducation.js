import { Helmet } from 'react-helmet';
import { PageSection } from '../components/PageSection.js';
import VideoPlayer from '../components/VideoPlayer.js';
import { DEGREE_MODULES } from '../content/DegreeEducationContent.js';

function DegreeEducation() {
    return (
        <main>
            <Helmet>
                <title>Degree Education</title>
                <meta name="description" content="Details about my degree education" />
            </Helmet>
            
            <header>
                <h1 className="title">
                    Degree Education<br />
                    <span className="small-text">[2020 to 2025]</span>
                </h1>
                <div className="section-break-line" aria-hidden="true" />
            </header>

            <PageSection
                id="modules"
                title="5th Year Modules"
                variant="default"
            >
                <div>
                    {DEGREE_MODULES.ReinforcementLearning}
                    {DEGREE_MODULES.DataAnalysis}
                </div>
            </PageSection>

            <h2 className="title">Graduation</h2>
            <VideoPlayer 
                url={"https://youtu.be/ODpQM9DtdpY"}
                title="Graduation"
            />
        </main>
    );
}

export default DegreeEducation;