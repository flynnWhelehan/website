import { Helmet } from 'react-helmet';
import { PageSection } from '../components/PageSection.js';
import VideoPlayer from '../components/VideoPlayer.js';
import { ACADEMIC_YEARS } from '../content/DegreeEducationContent.js';

function DegreeEducation() {
    const renderModules = (modules) => {
        return (
            <div className="modules-grid">
                {Object.entries(modules).map(([key, module]) => {
                    const isPdf = module.link.endsWith('.pdf');
                    
                    return (
                        <div key={key} className="module-item">
                            <a 
                                href={module.link} 
                                className="module-link"
                                download={isPdf ? true : undefined}
                                target={isPdf ? "_blank" : undefined}
                                rel={isPdf ? "noopener noreferrer" : undefined}
                            >
                                {module.title}
                            </a>
                            {' '}
                            <span className="module-credits">({module.credits} credits)</span>
                        </div>
                    );
                })}
            </div>
        );
    };

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

            <h2 className="title">Graduation</h2>
            <VideoPlayer 
                url={"https://youtu.be/ODpQM9DtdpY"}
                title="Graduation"
            />
            
            {Object.entries(ACADEMIC_YEARS).reverse().map(([year, yearData]) => (
                <PageSection
                    key={year}
                    id={`modules-${year.replace('/', '-')}`}
                    title={yearData.title}
                    variant="default"
                >
                    {renderModules(yearData.modules)}
                </PageSection>
            ))}
            
        </main>
    );
}

export default DegreeEducation;