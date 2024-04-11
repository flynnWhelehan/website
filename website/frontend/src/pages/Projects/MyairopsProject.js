import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import './MyairopsProject.css';

function MyairopsProject() {
    return (
        <div>
            <Helmet>
                <title>Myairops Project</title>
                <meta name="description" content="Details about my project at Myairops" />
            </Helmet>
            <h1>Myairops Project<br/> 
                [July 2023 to Present]
            </h1>

            <section id="role">
                <h2 className="title">My Role</h2>
                <p>I lead the delivery of an AI-powered data processing solution at <a href="https://myairops.com/">Myairops</a>, a software provider for flight operations management.</p>            
            </section>

            <section id="video-interview">
                <h2 className="title">Video Interview</h2>
                <div className='video-container'>
                    <ReactPlayer className='react-player' url='https://youtu.be/RcioWj4IRUc' />
                    <a className='blog-link' href="https://myairops.com/spotlight/2024/03/industrial-placement-update-ben-flynn/">Click here to view the full blog post</a>
                </div>
            </section>

            <section id="technology">
                <h2 className="title">Technology and Skills</h2>
                <p>
                    ❖ DevOps: Managing the build and deployment pipelines of our repository through Azure DevOps.<br />
                    ❖ Product Ownership: Taking charge of the product ownership role by creating well-defined epic, feature, user story, and bug work items inline with demand.<br />
                    ❖ Agile: Streamlining project operations with Kanban strategy.<br />
                    ❖ AI Services: Training data classification and extraction models with Azure Document Intelligence to meet specific processing requirements.<br />
                    ❖ Cloud Services: Making our solution available through deployed Azure Functions and Power Automate workflows, and interacting with cloud APIs.<br />
                    ❖ C# Development: Developing an effective set of data models and services with sophisticated software design techniques like dependency injection.<br />
                    ❖ Collaboration: Participation in the agile engineering methodology employed by Myairops.<br />
                    ❖ Industry procedures: Engaged in real-world releases, bug resolutions, and company challenges.<br />
                    ❖ Research and Development: Conducted vital R&D for the project's first phase, resulting in a comprehensive research report and a successful proof of concept.
                </p>
            </section>

            <section id="objectives">
                <h2 className="title">Stretch Objectives</h2>
                <p>...</p>
            </section>

            <section id="interviewing">
                <h2 className="title">Interviewing Candidates</h2>
                <p>...</p>
            </section>

            <section id="challenges">
                <h2 className="title">Challenges</h2>
                <p>...</p>
            </section>
        </div>
    );
}

export default MyairopsProject;