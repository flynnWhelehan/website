import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography, Box, Divider } from '@mui/material';
import aboutContent from '../content/about/AboutContent';


function About() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Container>
        <Helmet>
          <title>{aboutContent.title}</title>
          <meta name="All about FW." content={aboutContent.intro} />
        </Helmet>

        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" gutterBottom>
            {aboutContent.about}
          </Typography>

          <Divider variant="middle" />

        </Box>
      </Container>
    </Box>
  );
}

export default About;