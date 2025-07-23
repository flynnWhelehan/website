import { Helmet } from 'react-helmet';
import './MyairopsProject.css';
import { PageSection } from '../components/PageSection';
import VideoPlayer from '../components/VideoPlayer';
import { MYAIROPS_ROLE, MYAIROPS_TECHNOLOGY_AND_SKILLS } from '../content/MyairopsProjectContent.js';

function MyairopsProject() {
    return (
        <main>
            <Helmet>
                <title>myairops Industrial Placement</title>
                <meta name="description" content="Details about my industrial placement at myairops" />
            </Helmet>
            
            <header>
                <h1 className="title">
                    myairops Industrial Placement<br/> 
                    <span className="small-text">[July 2023 to August 2024]</span>
                </h1>
                <div className="section-break-line" aria-hidden="true" />
            </header>

            <PageSection
                id="role"
                title="My Role"
                variant="default"
            >
                <div>
                    {MYAIROPS_ROLE.content}
                    {MYAIROPS_ROLE.update}
                </div>
            </PageSection>

            <h2 className="title">Video Interview</h2>
            <VideoPlayer 
                url={"https://youtu.be/RcioWj4IRUc"}
                ctaUrl={"https://myairops.com/spotlight/2024/03/industrial-placement-update-ben-flynn/"}
                ctaText="Click here to view the full blog post"
                title="myairops Industrial Placement Interview"
            />

            <h2 className="title">Technology and Skills</h2>
            <div className="section-container">
                <section id="technology">
                <ul>
                    <li className="bullet-container">
                        <div className="bullet-header">C# Development</div>
                        <div className="bullet-text">{MYAIROPS_TECHNOLOGY_AND_SKILLS.development}</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">DevOps</div>
                        <div className="bullet-text">{MYAIROPS_TECHNOLOGY_AND_SKILLS.devops}</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">AI Services</div>
                        <div className="bullet-text">{MYAIROPS_TECHNOLOGY_AND_SKILLS.ai_services}</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Cloud Services</div>
                        <div className="bullet-text">{MYAIROPS_TECHNOLOGY_AND_SKILLS.cloud_services}</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Product Ownership</div>
                        <div className="bullet-text">{MYAIROPS_TECHNOLOGY_AND_SKILLS.product_ownership}</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Kanban Strategy</div>
                        <div className="bullet-text">{MYAIROPS_TECHNOLOGY_AND_SKILLS.kanban}</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Agile Collaboration</div>
                        <div className="bullet-text">{MYAIROPS_TECHNOLOGY_AND_SKILLS.agile}</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Research and Development</div>
                        <div className="bullet-text">{MYAIROPS_TECHNOLOGY_AND_SKILLS.research}</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Industry Procedures</div>
                        <div className="bullet-text">{MYAIROPS_TECHNOLOGY_AND_SKILLS.industry}</div>
                    </li>
                </ul>
                </section>
            </div>
        </main>
    );
}

export default MyairopsProject;