import React from 'react';
import { Helmet } from 'react-helmet';
import loadingIcon from '../images/loadingIcon.svg';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Flynn's Homepage</title>
        <meta name="The hub for the FW website project." content="Web site in progress..." />
      </Helmet>
      <header className="App-header">
        <h1 className="title">The FW Project</h1>
        <img src={loadingIcon} className="App-logo" alt="loadingIcon" />
        <p>Website in progress...</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/flynnwhelehan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with Flynn
        </a>
      </header>
      <body>
        <h1 className="title spaced-title">Test Title 1</h1>
        <h1 className="title">Test Title 2</h1>
      </body>
    </div>
  );
}

export default Home;