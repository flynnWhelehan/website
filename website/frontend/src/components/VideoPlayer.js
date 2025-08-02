import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import './VideoPlayer.css';

const VideoPlayer = ({ 
  url, 
  ctaUrl, 
  ctaText,
  className = '',
  title = "Video Player"
}) => {
  return (
    <section className={`video-player ${className}`} aria-label={title}>
      <div className="video-player__container">
        <ReactPlayer 
          className="video-player__player" 
          url={url}
          width="100%"
          height="100%"
          controls
          light={false}
        />
        {ctaUrl && (
          <a 
            className="video-player__blog-link" 
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ctaText}
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string,
  ctaText: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string
};

export default VideoPlayer;