import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Flynn's Homepage</title>
        <meta name="The hub for the FW website project." content="Web site in progress..." />
      </Helmet>
      <h1 className="title">The FW Project</h1>
      <div className="section-break-line" />

      <h2 className="title">Who am I?</h2>
      <div className="section-container">
          <section id="role">
              <p>I’m a software engineer and specialise in artificial intelligence. I am orienting myself toward a rewarding career where I can collaborate and add value, healthily.</p>            
          </section>
      </div>

      <h2 className="title">What do I do?</h2>
      <div className="section-container">
          <section id="role">
              <p>I have spent the last year intermitting my university studies with an exciting <Link to="/myairops-project">industrial placement</Link>, to ignite my career early. After learning and providing within the industry, I’m ready to return to Royal Holloway and excel in my master’s year.</p>            
          </section>
      </div>

      <h2 className="title">What do I have planned?</h2>
      <div className="section-container">
          <section id="role">
              <p>Beyond this, I’ll take on a challenging software role to elevate my career.</p>            
          </section>
      </div>
    </div>
  );
}

export default Home;