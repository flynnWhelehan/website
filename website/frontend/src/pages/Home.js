import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Flynn's Homepage</title>
        <meta name="The hub for the FW website project." content="Web site in progress..." />
      </Helmet>
    </div>
  );
}

export default Home;