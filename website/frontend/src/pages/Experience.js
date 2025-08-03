import { Helmet } from 'react-helmet';
import { useState } from 'react';
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
import healthcareThumbnail from '../images/healthcare-project.png';

function Experience() {
    const [activeFilter, setActiveFilter] = useState('all');

    const experience = [
        { 
            name: 'University Education - MSci Computer Science (AI) with Year in Industry', 
            thumbnail: rhulGraduation, 
            link: '/degree-education',
            category: 'education'
        },
        { 
            name: 'myairops - Industrial Placement and Beyond', 
            thumbnail: myairopsLogo, 
            link: '/myairops-work',
            category: 'work'
        },
        { 
            name: 'Google x Formula E AI - Hackathon', 
            thumbnail: googleXFormulaELogo, 
            link: '/google-formulae-hackathon',
            category: 'event'
        },
        { 
            name: 'San Francisco EasyA x VeChain - Hackathon', 
            thumbnail: easyAXVeChainLogo, 
            link: '/easya-hackathon',
            category: 'event'
        },
        { 
            name: 'Royal Hackaway v7 - Hackathon', 
            thumbnail: royalHackaway, 
            link: '/hackaway-v7-hackathon',
            category: 'event'
        },
        { 
            name: 'Body Maintenance - AI-Powered Mole Tracking & Diagnostics', 
            thumbnail: healthcareThumbnail, 
            comingSoon: true,
            category: 'project'
        },
        { 
            name: 'Vehicle Accident Scene Reconstruction - Research', 
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

    const categories = [
        { key: 'all', label: 'All', count: experience.length },
        { key: 'work', label: 'Work', count: experience.filter(item => item.category === 'work').length },
        { key: 'education', label: 'Education', count: experience.filter(item => item.category === 'education').length },
        { key: 'event', label: 'Event', count: experience.filter(item => item.category === 'event').length },
        { key: 'project', label: 'Project', count: experience.filter(item => item.category === 'project').length }
    ];

    const filteredExperience = activeFilter === 'all' 
        ? experience 
        : experience.filter(item => item.category === activeFilter);

    const handleFilterChange = (filterKey) => {
        if (activeFilter === filterKey && filterKey !== 'all') {
            setActiveFilter('all');
        } else {
            setActiveFilter(filterKey);
        }
    };

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

            <section className="experience-filters">
                <div className="filter-container">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            className={`filter-btn ${activeFilter === category.key ? 'filter-btn--active' : ''}`}
                            onClick={() => handleFilterChange(category.key)}
                            data-category={category.key}
                        >
                            <span className="filter-btn__label">{category.label}</span>
                            <span className="filter-btn__count">({category.count})</span>
                        </button>
                    ))}
                </div>
            </section>
            
            <div className="experience-grid">
                {filteredExperience.map((item, index) => (
                    <ExperienceCard
                        key={`${item.category}-${index}`}
                        name={item.name}
                        thumbnail={item.thumbnail}
                        link={item.link}
                        category={item.category}
                        comingSoon={item.comingSoon}
                    />
                ))}
            </div>

            {filteredExperience.length === 0 && (
                <div className="no-results">
                    <p>No experience items found for this category.</p>
                </div>
            )}
        </main>
    );
}

export default Experience;