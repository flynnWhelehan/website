import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Styles/Projects.css';
import myairopsLogo from '../images/myairops-logo.jpeg';
import canBusDiagram from '../images/can-bus-diagram.png';
import royalHackaway from '../images/royal-hackaway.png';
import framaCLogo from '../images/frama-c.jpg';
import zooplaLogo from '../images/zoopla-logo.jpg';
import strandPalaceLogo from '../images/strand-palace.jpg';

function Projects() {
    const projects = [
        { name: 'Myairops Industrial Placement', thumbnail: myairopsLogo, link: '/myairops-project'},
        { name: 'Hackathon - Royal Hackaway v7', thumbnail: royalHackaway, comingSoon: true},
        { name: 'Formal Software Verification', thumbnail: framaCLogo, comingSoon: true},
        { name: 'Vehicle Accident Scene Reconstruction Research', thumbnail: canBusDiagram, comingSoon: true},
        { name: 'Zoopla - IT Support', thumbnail: zooplaLogo, comingSoon: true},
        { name: 'Strand Palace Hotel - IT Support', thumbnail: strandPalaceLogo, comingSoon: true},
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