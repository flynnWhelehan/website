import { Helmet } from 'react-helmet';
import ExperienceCard from '../components/ExperienceCard';
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
        { 
            name: 'University Education', 
            thumbnail: rhulGraduation, 
            link: '/degree-education',
            category: 'education'
        },
        { 
            name: 'myairops Industrial Placement', 
            thumbnail: myairopsLogo, 
            link: '/myairops-work',
            category: 'work'
        },
        { 
            name: 'Hackathon - Google x Formula E AI', 
            thumbnail: googleXFormulaELogo, 
            link: '/google-formulae-hackathon',
            category: 'event'
        },
        { 
            name: 'Hackathon - San Francisco EasyA x VeChain', 
            thumbnail: easyAXVeChainLogo, 
            link: '/easya-hackathon',
            category: 'event'
        },
        { 
            name: 'Hackathon - Royal Hackaway v7', 
            thumbnail: royalHackaway, 
            link: '/hackaway-v7-hackathon',
            category: 'event'
        },
        { 
            name: 'Vehicle Accident Scene Reconstruction Research', 
            thumbnail: canBusDiagram, 
            comingSoon: true,
            category: 'work'
        },
        { 
            name: 'Zoopla - IT Support', 
            thumbnail: zooplaLogo, 
            comingSoon: true,
            category: 'work'
        },
        { 
            name: 'Strand Palace Hotel - IT Support', 
            thumbnail: strandPalaceLogo, 
            comingSoon: true,
            category: 'work'
        },
    ];

    return (
        <main>
            <Helmet>
                <title>Experience - Flynn Whelehan</title>
                <meta name="description" content="My professional experience and projects" />
                <meta name="keywords" content="experience, projects, hackathons, software engineering" />
            </Helmet>
            
            <header>
                <h1 className="title">Experience</h1>
                <div className="section-break-line" aria-hidden="true" />
            </header>
            
            <div className="experience-grid">
                {experience.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        name={item.name}
                        thumbnail={item.thumbnail}
                        link={item.link}
                        category={item.category}
                        comingSoon={item.comingSoon}
                    />
                ))}
            </div>
        </main>
    );
}

export default Experience;