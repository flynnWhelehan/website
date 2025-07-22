import React from 'react';
import PropTypes from 'prop-types';
import './styles/PageSection.css';

const PageSection = ({ 
  id, 
  title, 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const sectionClasses = [
    'page-section',
    `page-section--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses} id={id} aria-labelledby={`${id}-title`}>
      <h2 className="title" id={`${id}-title`}>
        {title}
      </h2>
      <div className="section-container">
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

PageSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'highlighted', 'compact']),
  className: PropTypes.string
};

export default PageSection;
export { PageSection };