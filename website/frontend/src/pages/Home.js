import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Flynn's Homepage</title>
        <meta name="The hub for the FW website project." content="Web site in progress..." />
      </Helmet>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the website.</p>
    </div>
  );
}

export default Home;