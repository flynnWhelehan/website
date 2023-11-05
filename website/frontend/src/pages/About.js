import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <title>Flynn's about page</title>
        <meta name="All about FW." content="Web site in progress..." />
      </Helmet>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default About;