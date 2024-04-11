import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import './MyairopsProject.css';

function MyairopsProject() {
    return (
        <div>
            <Helmet>
                <title>Myairops</title>
                <meta name="description" content="Details about my project at Myairops" />
            </Helmet>
            <h1>
                Myairops<br/> 
                [July 2023 to Present]
            </h1>

            <h2 className="title">My Role</h2>
            <div className="section-container">
                <section id="role">
                    <p>I lead the delivery of an AI-powered data processing solution at <a href="https://myairops.com/">Myairops</a>, a software provider for flight operations management.</p>            
                </section>
            </div>

            <h2 className="title">Video Interview</h2>
            <section id="video-interview">
                <div className='video-container'>
                    <ReactPlayer className='react-player' url='https://youtu.be/RcioWj4IRUc' />
                    <a className='blog-link' href="https://myairops.com/spotlight/2024/03/industrial-placement-update-ben-flynn/">Click here to view the full blog post</a>
                </div>
            </section>

            <h2 className="title">Technology and Skills</h2>
            <div className="section-container">
                <section id="technology">
                    <ul>
                        <li className="bullet-header">DevOps:<br/></li>
                            <li className="bullet-text">Managing the build and deployment pipelines of our repository through Azure DevOps.</li>
                        <li className="bullet-header"><br/>Product Ownership:</li>
                            <li className="bullet-text">Taking charge of the product ownership role by creating well-defined epic, feature, user story, and bug work items inline with demand.</li>
                        <li className="bullet-header"><br/>Agile:</li>
                            <li className="bullet-text">Streamlining project operations with Kanban strategy.</li>
                        <li className="bullet-header"><br/>AI Services:</li>
                            <li className="bullet-text">Training data classification and extraction models with Azure Document Intelligence to meet specific processing requirements.</li>
                        <li className="bullet-header"><br/>Cloud Services:</li>
                            <li className="bullet-text">Making our solution available through deployed Azure Functions and Power Automate workflows, and interacting with cloud APIs.</li>
                        <li className="bullet-header"><br/>C# Development:</li>
                            <li className="bullet-text">Developing an effective set of data models and services with sophisticated software design techniques like dependency injection.</li>
                        <li className="bullet-header"><br/>Collaboration:</li>
                            <li className="bullet-text">Participation in the agile engineering methodology employed by Myairops.</li> 
                        <li className="bullet-header"><br/>Industry procedures:</li>
                            <li className="bullet-text">Engaged in real-world releases, bug resolutions, and company challenges.</li> 
                        <li className="bullet-header"><br/>Research and Development:</li>
                            <li className="bullet-text">Conducted vital R&D for the project's first phase, resulting in a comprehensive research report and a successful proof of concept.</li>
                    </ul>
                </section>
            </div>

            <h2 className="title">Stretch Objectives</h2>
            <div className="section-container">
                <section id="objectives">
                    <p>...</p>
                </section>
            </div>

            <h2 className="title">Interviewing Candidates</h2>
            <div className="section-container">
                <section id="interviewing">
                    <p>...</p>
                </section>
            </div>

            <h2 className="title">Challenges</h2>
            <div className="section-container">
                <section id="challenges">
                    <p>...</p>
                </section>
            </div>
        </div>
    );
}

export default MyairopsProject;