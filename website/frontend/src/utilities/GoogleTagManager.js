import { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HBM33FN8M3';
    script.async = true;
    document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HBM33FN8M3');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleTagManager;