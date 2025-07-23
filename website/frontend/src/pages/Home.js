import { Helmet } from 'react-helmet';
import { PageSection } from '../components/PageSection';
import { HOME_CONTENT } from '../content/HomeContent';

function Home() {
  const { hero, section, meta } = HOME_CONTENT;
  
  return (
    <main>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>

      <header>
        <h1 className="title">{hero.title}</h1>
        <div className="section-break-line" aria-hidden="true" />
      </header>

      <PageSection
        id={section.id}
        title={section.title}
      >
        {section.content}
      </PageSection>
    </main>
  );
}

export default Home;