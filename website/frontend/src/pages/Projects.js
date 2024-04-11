import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Projects.css';
import myairopsLogo from '../images/myairops-logo.jpeg';

function Projects() {
    const projects = [
        { name: 'Myairops Industrial Placement', thumbnail: myairopsLogo, link: '/myairops-project'},
    ];

    return (
        <div>
            <Helmet>
                <title>Flynn's project and experience page</title>
                <meta name="Projects and Experience" content="Web site in progress..." />
            </Helmet>
            <h1>Projects and Experience</h1>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <Link to={project.link} key={index} className={`project-panel ${project.comingSoon ? 'coming-soon' : ''}`}>
                        <img src={project.thumbnail} alt={project.name} />
                        <div className={`project-panel-hover ${project.hoverStyle}`}>
                            <div className="project-panel-text">{project.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;