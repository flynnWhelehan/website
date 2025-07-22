import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PageSection } from '../components/PageSection';

const SECTIONS = [
  {
    id: 'who-am-i',
    title: 'Who am I?',
    content: (
      <p>
        I'm a software engineer and specialise in artificial intelligence.
        I am orienting myself toward a rewarding career where I can collaborate
        and add value, healthily.
      </p>
    )
  },
  {
    id: 'what-i-do',
    title: 'What do I do?',
    content: (
      <p>
        I have spent the last year intermitting my university studies with an exciting{' '}
        <Link to="/myairops-project" aria-label="Learn more about my industrial placement">
          industrial placement
        </Link>
        , to ignite my career early. After learning and providing within the industry,
        I'm ready to return to Royal Holloway and excel in my master's year.
      </p>
    )
  },
  {
    id: 'future-plans',
    title: 'What do I have planned?',
    content: (
      <p>
        Beyond this, I'll take on a challenging software role to elevate my career.
      </p>
    )
  }
];

function Home() {
  return (
    <main>
      <Helmet>
        <title>Flynn's Homepage - Software Engineer & AI Specialist</title>
        <meta
          name="description"
          content="Flynn Whelehan - Software engineer specializing in artificial intelligence. Explore my projects, experience, and career journey."
        />
        <meta name="keywords" content="software engineer, artificial intelligence, AI, web development, portfolio" />
      </Helmet>

      <header>
        <h1 className="title">The FW Project</h1>
        <div className="section-break-line" aria-hidden="true" />
      </header>

      {SECTIONS.map((section) => (
        <PageSection
          key={section.id}
          id={section.id}
          title={section.title}
          variant="default"
        >
          {section.content}
        </PageSection>
      ))}
    </main>
  );
}

export default Home;