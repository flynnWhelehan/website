import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ExperienceCard.css';

const ExperienceCard = ({ 
    name, 
    thumbnail, 
    link, 
    category, 
    comingSoon = false 
}) => {
    const getCategoryDisplay = (category) => {
        const categoryMap = {
            'work': 'Work',
            'education': 'Education',
            'project': 'Project',
            'event': 'Event'
        };
        return categoryMap[category] || category;
    };

    const CardContent = (
        <>
            <div className={`experience-category-label experience-category-label--${category}`}>
                {getCategoryDisplay(category)}
            </div>
            <img src={thumbnail} alt={name} loading="lazy" />
            <div className="experience-panel-hover">
                <div className="experience-panel-text">{name}</div>
            </div>
        </>
    );

    if (comingSoon) {
        return (
            <div className="experience-panel coming-soon">
                {CardContent}
            </div>
        );
    }

    return (
        <Link 
            to={link} 
            className="experience-panel"
            aria-label={`View details about ${name}`}
        >
            {CardContent}
        </Link>
    );
};

ExperienceCard.propTypes = {
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    link: PropTypes.string,
    category: PropTypes.oneOf(['work', 'education', 'project', 'event']).isRequired,
    comingSoon: PropTypes.bool
};

export default ExperienceCard;