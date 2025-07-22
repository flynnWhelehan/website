import { useState, useEffect, useCallback } from 'react';

const SCROLL_THRESHOLD = 80;

export const useScrollHandler = () => {
  const [scrollState, setScrollState] = useState({
    shouldShrink: false,
    shouldShowOpaque: false
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const shouldShrink = scrollY > SCROLL_THRESHOLD;
    const shouldShowOpaque = scrollY > SCROLL_THRESHOLD;

    setScrollState({
      shouldShrink,
      shouldShowOpaque
    });
  }, []);

  useEffect(() => {
    let timeoutId;
    
    const throttledScrollHandler = () => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16);
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  return scrollState;
};