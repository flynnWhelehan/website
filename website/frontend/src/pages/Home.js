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
              <p>I am devoted to the routines of software engineering and specialising in artificial intelligence. I am orienting myself toward a rewarding career where I can collaborate and add value, healthily.</p>            
          </section>
      </div>

      <h2 className="title">What do I do?</h2>
      <div className="section-container">
          <section id="role">
              <p>Currently, I am intermitting my university studies with an exciting <Link to="/myairops-project">year in industry opportunity</Link>, to ignite my career early! I am learning and providing within the industry, before returning to Royal Holloway to excel in my master’s year.</p>            
          </section>
      </div>

      <h2 className="title">What do I have planned?</h2>
      <div className="section-container">
          <section id="role">
              <p>Beyond this, I’m considering a challenging software role to elevate my career, or a compelling PhD opportunity.</p>            
          </section>
      </div>

    </div>
  );
}

export default Home;