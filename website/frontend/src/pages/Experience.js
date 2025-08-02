import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Experience.css';
import rhulGraduation from '../images/rhul-graduation.jpg';
import myairopsLogo from '../images/myairops-logo.jpeg';
import canBusDiagram from '../images/can-bus-diagram.png';
import royalHackaway from '../images/royal-hackaway.png';
import zooplaLogo from '../images/zoopla-logo.jpg';
import strandPalaceLogo from '../images/strand-palace.jpg';
import googleXFormulaELogo from '../images/google-x-formula-e.jpg';
import easyAXVeChainLogo from '../images/easya-x-vechain-group.jpeg';

function Experience() {
    const experience = [
        { name: 'University Education', thumbnail: rhulGraduation, link: '/degree-education'},
        { name: 'myairops Industrial Placement', thumbnail: myairopsLogo, link: '/myairops-work'},
        { name: 'Hackathon - Google x Formula E AI', thumbnail: googleXFormulaELogo, link: '/google-formulae-hackathon'},
        { name: 'Hackathon - San Francisco EasyA x VeChain', thumbnail: easyAXVeChainLogo, link: '/easya-hackathon'},
        { name: 'Hackathon - Royal Hackaway v7', thumbnail: royalHackaway, link: '/hackaway-v7-hackathon'},
        { name: 'Vehicle Accident Scene Reconstruction Research', thumbnail: canBusDiagram, comingSoon: true},
        { name: 'Zoopla - IT Support', thumbnail: zooplaLogo, comingSoon: true},
        { name: 'Strand Palace Hotel - IT Support', thumbnail: strandPalaceLogo, comingSoon: true},
    ];

    return (
        <div>
            <Helmet>
                <title>Experience</title>
                <meta name="Experience" />
            </Helmet>
            <h1 className="title">Experience</h1>
            <div className="experience-grid">
                {experience.map((experience, index) => (
                    <Link to={experience.link} key={index} className={`experience-panel ${experience.comingSoon ? 'coming-soon' : ''}`}>
                        <img src={experience.thumbnail} alt={experience.name} />
                        <div className={`experience-panel-hover ${experience.hoverStyle}`}>
                            <div className="experience-panel-text">{experience.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Experience;