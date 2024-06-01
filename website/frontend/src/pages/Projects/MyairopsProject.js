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
                Myairops Industrial Placement<br/> 
                <span className="small-text">[July 2023 to Present]</span>
            </h1>

            <div className="section-break-line" />

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
                    <li className="bullet-container">
                        <div className="bullet-header">C# Development</div>
                        <div className="bullet-text">Developing an effective set of data models and services with sophisticated software techniques like dependency injection.</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">DevOps</div>
                        <div className="bullet-text">Managing the automated build and deployment pipelines of respositories through Azure DevOps.</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">AI Services</div>
                        <div className="bullet-text">Integrating with Azure Document Intelligence to train custom models and interact with the API to facilitate data processing capabilities.</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Cloud Services</div>
                        <div className="bullet-text">Making our solution available through deployed Azure Functions and Power Automate workflows, and interacting with cloud APIs.</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Product Ownership</div>
                        <div className="bullet-text">Owning the product by creating well-defined epic, feature, user story, and bug work items inline with with stakeholder needs and project goals.</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Kanban Strategy</div>
                        <div className="bullet-text">Streamlining project operations to deliver continuous value with swimlanes, WIP limits, and tagged task cards.</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Agile Collaboration</div>
                        <div className="bullet-text">Actively participated in the agile engineering methodology employed by Myairops, engaging in standups, retrospectives, and refinements.</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Research and Development</div>
                        <div className="bullet-text">Conducted vital R&D for the project's first phase, resulting in a comprehensive research report and a successful proof of concept.</div>
                    </li>
                    <li className="bullet-container">
                        <div className="bullet-header">Industry Procedures</div>
                        <div className="bullet-text">Engaged in releases, bug resolutions, and company challenges.</div>
                    </li>
                </ul>
                </section>
            </div>
        </div>
    );
}

export default MyairopsProject;