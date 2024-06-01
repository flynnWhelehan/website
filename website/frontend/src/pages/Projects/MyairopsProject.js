import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import './MyairopsProject.css';
import { MYAIROPS_ROLE, MYAIROPS_TECHNOLOGY_AND_SKILLS } from '../Content/Projects/Myairops/MyairopsContent.js';

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
                    <div>{MYAIROPS_ROLE.content}</div>      
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
        </div>
    );
}

export default MyairopsProject;